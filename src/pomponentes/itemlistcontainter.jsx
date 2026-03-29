import React, { useState } from 'react'


import {Itemlist } from './itemlist'
export function Itemlistcontainter({datitos} ) {



  return (
    <div>{datitos.map((valor,index)=> (
        <div key={index}>
            <Itemlist 
                nombre= {valor.first_name}
                apellido= {valor.last_name}
                genero= {valor.gender}
                />

        </div>


    ) ) }   </div>
  )
}
