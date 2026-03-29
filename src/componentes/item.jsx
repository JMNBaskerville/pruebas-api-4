import React from "react";

import { Itemlist } from "./itemlist";

export default function Item(prod) {
  return (
    <div className="producto">
      <img src={prod.foto} alt="" />
      <div>
        <h4> {prod.nombre} {prod.apellido} </h4>
        <p> {prod.genero} </p>
        <p> {prod.nombre} </p>
        <a className="ver-mas" href="a">ver mas</a>
      </div>

    </div>
  );
}
