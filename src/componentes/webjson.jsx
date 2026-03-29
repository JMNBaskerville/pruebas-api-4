
import React from 'react'
import data from "../data/jason.json"
export function traer_json() {


        return(
            new Promise((resolve, reject) => {
                resolve(data)
            })
        )


        

}
export function pedir_json_id(id) {
  return new Promise((resolve, reject) => {

    const item = data.find((el) => el.id === id)

    if (item) {
      resolve(item)
    } else {
      reject("No encontrado")
    }

  })
}