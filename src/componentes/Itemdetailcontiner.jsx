import React, { useState, useEffect } from "react";
import { traer_json,pedir_json_id } from "./webjson";
import Itemdetail from "./itemdetall";
export default function Itemdetailcontiner({pedir_item}) {
 
    const [item, setitem] = useState(null);


  useEffect(() => {
    pedir_json_id(pedir_item).then((res)=> {

        setitem(res)

    })

  }, [])
  

  return <div>  { item && <Itemdetail item = {item}    /> } </div>
}
