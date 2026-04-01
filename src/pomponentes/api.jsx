import data from "../data/jason.json"
import { Itemlistcontainter } from "./itemlistcontainter"
import { useState,useEffect } from "react"
import React from 'react'

export function Api(id) {

    const [datitos, setdatitos] = useState([])

    function pedirjson(){

        return(new Promise((resolve, reject) => {
            
            resolve(data)

        }))
            
        }

    useEffect(() => {
        
        pedirjson().then((e)=>{
            setdatitos(e)

        })
    
    }, [])
   
    
  return (
    <div>

        <Itemlistcontainter
        datitos= {datitos} />
       
    </div>

  )
}

export function pedir_id( id ){
    const item = data.find((el) => el.id === id)
    return(
        new Promise((resolve, reject) => {
            if(item){
                resolve(item)

            }
            else{
                reject("nada de nada")
            }
        })

    )

}