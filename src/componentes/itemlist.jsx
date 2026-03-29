import React from 'react'
import Item from './item'
export function Itemlist({ productos_api }) {

    let produto= productos_api
    let h = []
    for (let i of productos_api ){
        h.push(i)

    }

  return (
    <div className='container'>

        <div className='productos'>
            {productos_api && productos_api.map((valor, index) => (
        <div className='producto' key={index}><h1><Item 
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