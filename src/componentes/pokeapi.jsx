import React, { useEffect, useState } from "react";

export function Pokedex() {
  const [datos, setdatos] = useState([]);
  const [id, setid] = useState(1);

  function pedir_datos() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setdatos(data);
      });
  }

  useEffect(() => {
    pedir_datos();
  }, [id]);

  function subir(){

    setid(id+1)
  }

    function bajar(){
        if (id >1){ 

            setid(id-1)
        }
  }

  return (
    <div>

        <div >
          <h1>Nombre {datos.name} </h1>
          <img
            src={datos?.sprites?.other?.["official-artwork"]?.front_default}
            alt="ditox"
          />
            <button onClick={bajar}>atras</button>

          <button onClick={subir}>siguiente</button>

        </div>
    </div>
  );
}
