import React from "react";
import { useState,useEffect } from "react";
import { Link, useParams } from "react-router-dom";


export  function Web() {




  return (
    <div>
        <nav className="navbar">
        <a className="logo" href="logo">logo</a> 

            <ul className="menu">
                <li> <Link className="menu-link" to="inicio">inicio</Link> </li>
                <li> <Link className="menu-link" to="nosotros">Nosotros</Link> </li>
                <li> <Link className="menu-link" to="Productos">Productos</Link> </li>
                <li> <Link className="menu-link" to="contacto">contacto</Link> </li>
                

            </ul>


        </nav>


    </div>
  )
}
