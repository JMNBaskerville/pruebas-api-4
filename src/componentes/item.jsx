import React from "react";
//este
import { Itemlist } from "./itemlist";
import { Link, useParams } from "react-router-dom";
export default function Item(prod) {


  
  return (
    <div className="producto">
      <img src={prod.foto} alt="" />
      <div>
        <h4> {prod.nombre} {prod.apellido} </h4>
        <p> {prod.genero} </p>
        <p> {prod.nombre} </p>
        <Link className="ver-mas" to={`/${prod.id}`}>ver masa</Link>
      </div>

    </div>
  );
}
