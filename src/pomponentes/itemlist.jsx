import React from 'react'

export function Itemlist(prod) {

     console.log(prod.nombre)

  return (
    <div>
        <h1>{prod.nombre} </h1>
        <h1>{prod.apellido} </h1>
        <h1>{prod.genero} </h1>
        <hr />
         </div>
  )
}
