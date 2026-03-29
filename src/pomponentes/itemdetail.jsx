import React from 'react'

export function Itemdetail({item}) {
  return (
    <div>
        <h1> Nombre: {item.first_name} </h1>
        <h1> Apellido: {item.last_name} </h1>
        <h1> Genero: {item.gender} </h1>

    </div>
  )
}
