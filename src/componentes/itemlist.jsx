import React from 'react'
import Item from './item'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
export function Itemlist({ productos_api }) {
// este

const id = useParams()
const [url, seturl] = useState(1)

    useEffect(() => {
      seturl(id)
    
    }, [id])
    
  return (
    <div className='container'>

        <div className='productos'>
            {productos_api && productos_api.map((valor, index) => (
        <div className='producto' key={valor.id}><h1><Item 
            id = {valor.id}
            nombre={valor.first_name}
            apellido={valor.last_name}
            genero={valor.gender}
            foto={valor.image}

        
        /> </h1></div>
      ))}

      
            
        </div>

    </div>
  )
}