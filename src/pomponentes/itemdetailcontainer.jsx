import React, { useState ,useEffect} from 'react'
import { pedir_id } from './api'
import { Itemdetail } from './itemdetail'
import { useParams } from 'react-router-dom'
export function Itemdetailcontainer(id) {

    const [item, setitem] = useState(null)


    const ide = useParams().ide
    const [idete, setidete] = useState(1)
    console.log(idete)

    function subir(){

        setidete(idete+1)
    }

    function baja(){

        setidete (idete-1)
    }


    useEffect(() => {
          pedir_id(idete).then((res)=> {

              setitem(res)
              
      
          })
    
    }, [idete])

    
  return (

    <div>
        {item && <Itemdetail 
            item= {item}
            idete = {idete}
        /> }
        <button onClick={subir} >tito</button>
        <button onClick={baja} >tito</button>

    </div>
  )
}
