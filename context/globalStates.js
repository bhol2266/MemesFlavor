
import { useState } from 'react';
import MemesContext from './MemesContext';
const GlobalStates = (props) => {



    
    const [selectedNavItemIndex, setselectedNavItemIndex] = useState(0); // this is need to set selected to false  in navItemClick func
    


    return (
        <MemesContext.Provider value={{
            selectedNavItemIndex, setselectedNavItemIndex
        }}>
            {props.children}
        </MemesContext.Provider>
    )
}




export default GlobalStates;