import React, { useEffect } from "react";

import { useState} from "react";



export function Boton(prop){
    const [click,setclick] = useState(0)


    useEffect(function(){
        setInterval(() => {
            letras()
        }, 1000);


    })
    function letras(){
        setclick(click+1)
    }
     
    return(
<div>   

    <button onClick={letras}>Enviar</button>

        

    <p>{click}</p>
</div>)

    

}

