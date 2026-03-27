import React, { useEffect, useState } from "react";
import datos_json from "../data/jason.json"
export function ItemListcontariner() {


    const [datos,setdatos] = useState([])

    function recibir_datos(){

        return new Promise((resolve, reject) => {
            resolve(datos_json)
        })


    }

    useEffect(() =>{
        recibir_datos().then((e)=>{
            setdatos(e)

        })


    })

    return(

        <div> { datos.map((personas,index) =>(

            <div key={index}>
                <h1> Nombre {personas.first_name} </h1>
                <h1> Apellido {personas.last_name} </h1>
                <h1> email {personas.email} </h1>
                    <h1> prostigenero {personas.gender} </h1>

            </div>


        ))
 
             }


        </div>


    )
}
