import React from "react";

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
        <a className="ver-mas" href="a">
          ver mas
        </a>
      </div>
    </div>
  );
}
