import React from "react";
import { Link, useParams } from "react-router-dom";


export default function Itemdetalil({ item }) {
  return (
    <div className="producto">
      <img src={item.image} alt="" />
      <div>
        <h4>
          
          {item.first_name} {item.last_name}
        </h4>
        <p> {item.gender} </p>
        <p> {item.firstname} </p>
        <Link className="ver-mas" to="tito">
          verasda mas
        </Link>
      </div>
    </div>
  );
}
