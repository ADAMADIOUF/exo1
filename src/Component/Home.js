import React from 'react'
import { useState } from 'react'
import data from '../data'
export default function Home() {
 const [people, setPeople]= useState(data)
  return (
    <div>

     {
      people.map((person)=>{
       const {id,image,name}= person
       return(
        <div className="imgContainer" key={id}>
        <img src={image} alt="" className='img' />
        </div>
       )
      })
     }
    </div>
  )
}
