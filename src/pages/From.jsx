import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const From = () => {

useGSAP(()=>{
    gsap.from(".box", {
        x: 200,
        y: 50,
        duration: 1,
        rotation: 180,
        ease: "power2.inOut",
        backgroundColor: "red",
        yoyo: true,
        repeat: -1,
    })
})
  return (
    <div className="wrapper">
      <h1>From</h1>
      <h2>То же самое что и <span style={{color: "#535bf2"}}>To</span>, но наоборот.
      Просто возвращает обьект в исходное положение из указанного</h2>
        <div className="box">
          from
        </div>
    </div>
  )
}

export default From