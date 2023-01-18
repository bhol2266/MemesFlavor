
import { useState } from 'react';
import MemesContext from './MemesContext';
const GlobalStates = (props) => {



    return (
        <MemesContext.Provider value={{
    

        }}>
            {props.children}
        </MemesContext.Provider>
    )
}




export default GlobalStates;