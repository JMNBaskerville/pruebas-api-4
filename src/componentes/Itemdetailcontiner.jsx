import React, { useState, useEffect } from "react";
import { traer_json,pedir_json_id } from "./webjson";
import Itemdetail from "./itemdetall";
import { useParams } from "react-router-dom";
export function Itemdetailcontiner() {
 
    const [item, setitem] = useState(null);
    const {id} = useParams()

  useEffect(() => {
    pedir_json_id(Number(id)).then((res)=> {
        setitem(res)

    })

  }, [id])
  

  return <div>  { item && <Itemdetail item = {item}    /> } </div>
}
