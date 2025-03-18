import React from 'react'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const Default = () => {
    useGSAP(()=>{
        gsap.defaults({
            ease: "power3.inOut",
            backgroundColor: "red",
            duration: 1,
            yoyo: true,
            repeat: -1,
            rotation: 180,
        })
        gsap.to(".box", {
            x: 400,
        })

    })
  return (
    <div className="wrapper">
        <h1>Default</h1>
        <h2>Если не указать параметр, то он будет использоваться по умолчанию. Если посмотреть на код то можно увидеть что у нас есть параметр defaults, который задает параметры для всех анимаций. И он применятеся всем. Конечно вы можете использовать классы для этого но этот метод будет более гибким</h2>
        <div className="box" style={{position: "absolute", top: "40%"}}>
            1
        </div>
        <div className="box" style={{position: "absolute", top: "60%"}}>
            2
        </div>
        <div className="box" style={{position: "absolute", top: "80%"}}>
            3
        </div>
        <div className="box" style={{position: "absolute", top: "100%"}}>
            4
        </div>
        <div className="box" style={{position: "absolute", top: "120%"}}>
            5
        </div>
    </div>
  )
}

export default Default