/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'

  theme: {
    backgroundImage: {
      banner: "url('/homepageImages/banner.png')",
      banner_wide: "url('/homepageImages/banner-wide.png')",
    },
    extend: {
      animation: {
        spii: 'wiggle 2s linear infinite',
        movement: 'movement 1s linear 1',
        colorModal: 'modal 0.5s ease-out 1',

      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        movement: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-10px)' },
        },
        modal: {
          '0%': { transform: 'translateY(1500px)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0px)' },
        }
      },


      backgroundImage: {
        'creator_bg': "url('/creator/creator_bg.png')",
        'footer-texture': "url('/img/footer-texture.png')",
        'loginLayout_bg': "url('/creator/creator_bg.png')",
        'partner_with_us': "url('/creator/posterbg.png')",
      },
      aspectRatio: {
        'item': '61 / 50',
      },



      screens: {
        "xs": "370",
        "sm": "500px",
        'md': '750px',
        'lg': "1000px",
        'xl': "1250px",
        '2xl': "1500px",
        '3xl': "1800px",
      },
      colors: {
        'github': '#24292F',
        'theme': '#54BAB9',
        'whitte': "#ffffff",
        'Red': "#FF0000",
        'Cyan': "#00FFFF",
        'Blue': "#0000FF",
        'Yellow': "#FFFF00",
        'Lime': "#00FF00",
        'Orange': "#FFA500",
        'Grey': "#808080",
        'Olive': "#808000",
        'DarkBlue': "#00008B",
        'Purple': "#800080",
        'textblack': "#09101D",

      },
      fontFamily: {
        body: ['Pushster'],
        manrope: ['Manrope'],
        delius: ['Delius Unicase'],
        inter: ['Inter'],
        poppins: ['Poppins'],
        DMsans: ['DM Sans'],
        Opensans: ['Open Sans'],
        SFuiDisplay: ['SF UI Display'],
        Abhayalibre: ['Abhaya Libre'],
        Mont: ['Montserrat'],
        Legend: ['Lexend'],
        assist: ['Assistant'],


      }
    },
  },

  variants: {
    extend: {
      animation: ['hover', 'group-hover']

    },
  },
  plugins: [
    require('tailwind-scrollbar-hide', '@tailwindcss/line-clamp', 'tailwind-scrollbar')],


}
