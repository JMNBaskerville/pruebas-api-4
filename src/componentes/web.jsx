import React from "react";
import { useState,useEffect } from "react";


export  function Web() {
  return (
    <div>
        <nav className="navbar">
        <a className="logo" href="logo">logo</a> 

            <ul className="menu">
                <li> <a className="menu-link" href="ttito">inicio</a> </li>
                <li> <a className="menu-link" href="ttito">Nosotros</a> </li>
                <li> <a className="menu-link" href="ttito">Productos</a> </li>
                <li> <a className="menu-link" href="ttito">contacto</a> </li>


            </ul>


        </nav>


    </div>
  )
}
