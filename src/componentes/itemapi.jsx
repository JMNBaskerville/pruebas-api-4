
import React from 'react'
import {traer_json} from './webjson'
import { useState,useEffect } from 'react'
import { Itemlist } from './itemlist'
export function ItemApi() {
    const [datitos, setdatitos] = useState([])

    useEffect(() => {
      traer_json().then((e)=>{
        
        setdatitos(e)
      })
    
    },[])
    
  return (
       
        <div>

          <Itemlist productos_api = {datitos} />
        </div>
   
  )

}
