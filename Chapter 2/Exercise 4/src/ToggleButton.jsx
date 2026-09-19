import { useState } from "react";

const ToggleButton = ()=> {

    const [isTurn, setIsTurn] = useState(true);

    const toggle = ()=> {
        setIsTurn(!isTurn)
    }

    return(

        <>
            
            <p>The button is {isTurn ? 'ON' : 'OFF'}</p>
            <button onClick={toggle}>Turn {isTurn ? 'OFF' : 'ON'} </button>
            
        </>
    )

}

export default ToggleButton;