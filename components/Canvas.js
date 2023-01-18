import { Fragment, useContext, useEffect, useRef, useState } from 'react'
import { XCircleIcon } from '@heroicons/react/solid'
import { HexColorPicker } from "react-colorful";
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import MemesContext from "../context/MemesContext"
import dynamic from "next/dynamic";
import * as htmlToImage from 'html-to-image';
import { BeatLoader } from 'react-spinners';
import Script from 'next/script';
import { ToastContainer, toast } from 'react-toastify';
import ClipLoader from "react-spinners/ClipLoader";

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Autoplay } from "swiper"
import "swiper/css/pagination";
import { Pagination } from "swiper";



const FontPicker = dynamic(() => import("font-picker-react"), {
    ssr: false,
})

const languages = ["Hindi", "Urdu", "Bhojpuri", "Rajastani", "Bangali", "Bihari", "English", "Marathi", "Haryanvi", "Other",]



const Canvas = () => {
    SwiperCore.use([Autoplay])  // this is the middleware we need to call for slider autoplay

    const inputFileRef = useRef(null)
    const canvasRef = useRef(null)
    const divToImageRef = useRef(null);
    const fontAPI = 'AIzaSyAZ0YPUkF0oXOhdK3J6EnfSqXZEDHOXQ_g'


    // Check for current tshirt color which is showing is uploaded or not
    const [checkUpload, setcheckUpload] = useState(false)
    const [upload_Spinner, setupload_Spinner] = useState(false)
    const [loading, setloading] = useState(false);


    const [canvas, setcanvas] = useState(null);
    const [canvasDivRef, setcanvasDivRef] = useState(null);
    const [backgroundImageArray, setbackgroundImageArray] = useState('canvas/sampleImage.svg');
    const [PreviewMode, setPreviewMode] = useState(false);
    const [imageScale, setimageScale] = useState("object-contain");

    const [tags, settags] = useState("");
    const [caption, setcaption] = useState("");
    const [hashTags, sethashTags] = useState([]);

    const [selectedlanguages, setSelectedLanguage] = useState([]);


    const { selectedTshirtsForUpload, setselectedTshirtsForUpload, } = useContext(MemesContext);


    useEffect(() => {

        let canvasss = new fabric.Canvas('myCanvas', {
            width: window.innerWidth - 48,
            height: 406,
        })
        canvasss.renderAll()
        setcanvas(canvasss)
        setcanvasDivRef(divToImageRef)
        return () => canvasss.dispose();


    }, []);



    const uploadBackgroundImage = (e) => {
        setbackgroundImageArray(URL.createObjectURL(e.target.files[0]))

    }

    const checkUploaded = (pos) => {
        let Matched = false
        selectedTshirtsForUpload.filter(obj => {
            if (obj.name === colours[pos].name) {
                Matched = true
            }
        })
        if (Matched) {
            setcheckUpload(true)
        } else {
            setcheckUpload(false)
        }

    }


    const removeUploadImage = async () => {
        setupload_Spinner(true)
        let Matched = false
        let indexx = null
        selectedTshirtsForUpload.filter((obj, i) => {
            if (obj.name === colours[selectedColourIndex].name) {
                Matched = true
                indexx = i
            }
        })
        if (Matched) {
            selectedTshirtsForUpload.splice(indexx, 1);
            setselectedTshirtsForUpload(selectedTshirtsForUpload);
            setcheckUpload(false)
        }
        setupload_Spinner(false)
    }


    //Canvas
    const uploadFile = (e) => {

        const reader = new FileReader()
        const img = new Image()
        reader.onload = () => {
            img.onload = () => {

                let w = 100;
                let nw = img.naturalWidth;
                let nh = img.naturalHeight;
                let aspect = nw / nh
                let h = w / aspect
                fabric.Image.fromURL(reader.result, img => {
                    img.scaleToWidth(w)
                    img.scaleToHeight(h)
                    canvas.centerObject(img);
                    canvas.add(img);
                    canvas.renderAll();
                })

            }
            img.src = reader.result
        }

        console.log(e.target.files[0]);
        reader.readAsDataURL(e.target.files[0])

    }

    const removeSelectedItem = () => {
        if (typeof canvas.getActiveObject() === "undefined") {
            toast.error('Select any item to remove!')
        }

        if (canvas.getActiveObject() === null) {
            toast.error('Select any item to remove!')
        }

        canvas.remove(canvas.getActiveObject());
    }

    const resetCanvas = () => {
        canvas.clear();
        var json = canvas.toJSON();
        canvas.loadFromJSON(json, canvas.renderAll.bind(canvas));
    }

    const postBtn = async (e) => {
        e.preventDefault()


        if (tags.caption === 0) {
            toast.info('add caption')
            return
        }

        if (selectedlanguages.length === 0) {
            toast.info('select language')
            return
        }

        canvas.discardActiveObject();
        canvas.renderAll();
        setloading(true)
        const dataUrl = await htmlToImage.toPng(divToImageRef.current);  //data:image/png;base64 format
        console.log(setcaption(dataUrl.substring(0, 50)));
        setloading(false)


    }


    return (

        <div className='lg:flex lg:justify-around  items-start 2xl:items-start 2xl:justify-start  lg:pt-4 2xl:mt-0'>

            <Script id='sadfasdf' src="https://unpkg.com/fabric@5.2.1/dist/fabric.min.js" strategy="beforeInteractive" />



            {/* CANVAS  */}
            <div className='w   mx-auto  '>

                <div className=''>


                    <div className='grid grid-cols-2  gap-3  sm:px-6 w-full  mb-2'>


                        <button onClick={removeSelectedItem} className=' text-white hover:bg-[#54BAB9] text-[12px] font-inter border-[1px] border-[#54BAB9] rounded-[5px] py-[7px] px-[10px] hoverBackground'>Remove Seleted</button>

                        <button onClick={resetCanvas} className=' text-white hover:bg-[#54BAB9] text-[12px] font-inter border-[1px] border-[#54BAB9] rounded-[5px] py-[7px] px-[10px] hoverBackground'>Clear All</button>

                        {/* <select placeholder='asdfsadf' className=' w-[140px] min-h-[30px] text-[14px] font-inter rounded-xl text-[#323232] border-[1px] border-[#E5E5E5] p-2 px-4  outline-none' value={imageScale} onChange={(e) => { setimageScale(e.target.value) }}>

                            <option className='font-inter text-[#323232] text-[14px] my-4'  >Original</option>
                            <option className='font-inter text-[#323232] text-[14px] my-4'  >Zoomed In</option>
                            <option className='font-inter text-[#323232] text-[14px] my-4'  >Full</option>

                        </select> */}
                    </div>

                    <div>
                        {/* Canvas playground */}
                        <div ref={divToImageRef} className={`select-none mx-auto flex items-center justify-center  relative w-fit  ${PreviewMode ? "pointer-events-none" : ""}`}>


                            <img className={`bg-red-500 h-[406px] w-full rounded object-cover `} src={backgroundImageArray} />


                            <div className={` rounded-lg  z-10 absolute `}>
                                <canvas
                                    ref={canvasRef}
                                    id="myCanvas"
                                />
                            </div>
                        </div>


                        <div className='flex items-center justify-between mt-3 px-1'>
                            <div className='flex items-center space-x-6'>


                                <label htmlFor='uploader'>
                                    <img className='cursor-pointer h-[40px]  object-contain' src='canvas/upload.svg' />
                                </label>
                                <input id='uploader' onChange={uploadFile} type="file" className="hidden" />


                                <label htmlFor='cameraUploader'>
                                    <img className='cursor-pointer h-[40px]  object-contain' src='canvas/camera.svg' />
                                </label>
                                <input id="cameraUploader" onChange={uploadFile} type="file" className="hidden" accept="image/*;capture=camera" />

                            </div>

                            <div className='flex items-center space-x-3'>
                                <label className='cursor-pointer text-center text-white  text-[12px] font-inter rounded-[5px] py-[7px] px-[10px] hoverBackground' htmlFor='bgImage'>
                                    Change Background
                                </label>
                                <input id='bgImage' onChange={uploadBackgroundImage} type="file" className="hidden" />


                                <label className='cursor-pointer text-center text-white  text-[12px] font-inter rounded-[5px] py-[7px] px-[10px] hoverBackground' htmlFor='bgImage'>
                                    Add Text
                                </label>
                            </div>


                        </div>


                    </div>




                    <div className='my-8'>
                        <div>
                            <label htmlFor="tag" className="block mb-1 text-[12px] lg:text-[14px] font-medium text-[#414249] font-inter pl-1">Tag</label>
                            <input onChange={() => { settags(e.target.value) }} value={tags} type="text" id="tag" className="font-medium border-[0.5px] border-[#CACACA] outline-none font-inter text-[#414249] text-[14px] lg:text-[16px] rounded-lg  block w-full p-2.5 0" placeholder="@bad_badaal @sunsar" required />
                        </div>

                        <div className='mt-4'>
                            <label htmlFor="caption" className="block mb-1 text-[12px] lg:text-[14px] font-medium text-[#414249] font-inter pl-1">Caption</label>
                            <textarea onChange={(e) => { setcaption(e.target.value) }} value={caption} type="text" id="caption" rows="4" className="font-medium border-[0.5px] border-[#CACACA] outline-none font-inter text-[#414249] text-[14px] lg:text-[16px] rounded-lg  block w-full p-2.5 0" placeholder="Met selmon bhoi yesterday" required></textarea>

                        </div>
                    </div>

                    <div>
                        <div className='space-x-3 flex items-center'>
                            <h1 className='font-inter font-semibold text-[15px] lg:text-[17px]'>Language</h1>
                            <img className='cursor-pointer h-[20px]  object-contain' src='canvas/iButton.svg' />
                        </div>

                        <div className='grid grid-cols-5 gap-3 mt-2 select-none'>
                            {languages.map(item => {
                                return (
                                    <h1 onClick={() => {

                                        if (!selectedlanguages.includes(item)) {
                                            setSelectedLanguage([...selectedlanguages, item])
                                        } else {
                                            let array = [...selectedlanguages]
                                            array.splice(selectedlanguages.indexOf(item), 1)
                                            setSelectedLanguage([...array])
                                        }
                                    }} className={`${selectedlanguages.includes(item) ? "hoverBackground text-white" : ""} cursor-pointer text-center p-2 rounded-2xl font-inter font-medium text-[12px] lg:text-[14px] `} key={item}>{item}</h1>
                                )
                            })}
                        </div>


                    </div>


                    <div className='mt-6'>
                        <label htmlFor="hashtags" className="block mb-1 text-[12px] lg:text-[14px] font-medium text-[#414249] font-inter pl-1">Hastags</label>
                        <textarea onChange={(e) => { sethashTags(e.target.value) }} value={hashTags} type="text" id="hashtags" rows="4" className="font-medium border-[0.5px] border-[#CACACA] outline-none font-inter text-[#414249] text-[14px] lg:text-[16px] rounded-lg  block w-full p-2.5 0" placeholder="#selmon" required></textarea>

                    </div>


                    <div className='my-8 flex items-center justify-center'>


                        <button onClick={postBtn} type="submit" className="mt-4 py-3 transition duration-200 loginBTN_BG text-white w-full rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                            {!loading && <span className="inline-block mr-2">Post</span>}


                            {loading && <ClipLoader
                                color='#ffffff'
                                size={15}


                            />}

                        </button>
                    </div>


                </div>

            </div >


        </div>

    )
};
export default Canvas;