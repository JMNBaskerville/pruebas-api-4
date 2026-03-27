import React from "react";
import { useState } from "react";
export function Profile(prop){



    return(
             <div style={{ border: '1px solid #ccc', padding: 16, borderRadius: 8 } } >   
                <h1> {prop.nombre} </h1>
                <h2> {prop.rol} </h2>
                <h2> {prop.avatar} </h2>
                <h2> {prop.admin ? "Atari" : "mamilongui"} </h2>

                <img src="logo192.png" />

             </div>)
}
