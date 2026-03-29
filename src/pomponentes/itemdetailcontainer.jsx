import React, { useState ,useEffect} from 'react'
import { pedir_id } from './api'
import { Itemdetail } from './itemdetail'
export function Itemdetailcontainer(id) {

    const [item, setitem] = useState(null)


    useEffect(() => {
          pedir_id(id).then((res)=> {
      
              setitem(res)
      
          })
    
    }, [])

    
  return (

    <div>
        {item && <Itemdetail 
            item= {item}
        /> }
    </div>
  )
}
