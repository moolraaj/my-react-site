import React, { useEffect, useState } from 'react'
import TestDemo from './TestDemo'

function Test() {
  const [scroll, setScroll] = useState([])

  useEffect(()=>{

    const handlerScroll=()=>{
      const posY=window.scrollY
      const positions=TestDemo.map((_,index)=>posY + index * window.innerHeight)
      setScroll(positions)


    }
    window.addEventListener('scroll',handlerScroll)
    return()=>{
      window.removeEventListener('scroll',handlerScroll)
    }

  },[])
  
  return (
    <>
    {TestDemo.map((e,index)=>{
      return  <div className={`card my-4 my-div-scroll ${window.scrollY >= scroll[index] ? 'sticky' : '' }`} key={e.id} style={{top:index*60+'vh'}}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">

        <h5 className="card-title">{e.id}</h5>
        <h5 className="card-title">{e.name}</h5>
        <h5 className="card-title">{e.address}</h5>
        <p className="card-text">{e.email}</p>
        <p className="card-text">{e.contact}</p>
        <a href="/" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    })}
     
    </>

  )
}

export default Test