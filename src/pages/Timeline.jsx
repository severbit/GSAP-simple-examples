import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Timeline = () => {
    useGSAP(()=>{
        gsap.timeline({repeat: -1})
        .to("#box1", {
            x: 400,
            duration: .25,
            ease: "power2.inOut",
        })
        .to("#box2", {
            x: 400,
            duration: .50,
            ease: "power2.inOut",
        })
        .to("#box3", {
            x: 400,
            duration: .75,
            ease: "power2.inOut",
        })

        gsap.defaults({duration: 2})
        gsap.timeline({repeat: -1})
        .fromTo("#box4", {
            x: -400,
            opacity: 1,
        }, {
            x: 400,
            opacity: 0,
        })
        .fromTo("#box5", {
            x: -400,
            opacity: 1,
        }, {
            x: 400,
            opacity: 0,
        })
    })
  return (
    <div className="wrapper">
    <h1>Timeline</h1>
    <h2>Самый мощный и гибкий способ анимации. Вы можете создать целую цепочку анимаций и управлять ими в одном месте. Без этой функции вам бы пришлось играть с duration в параметрах для каждой анимации</h2>
      <div className="box" id='box1' style={{backgroundColor: "red"}}>
        1
      </div>
      <div className="box" id='box2' style={{backgroundColor: "blue"}}>
        2
      </div>
      <div className="box" id='box3' style={{backgroundColor: "green"}}>
        3
      </div>
    <h2 style={{position: "absolute", top: "60%"   }}>
        Так же можете сделать и с fromTo функцией. <span style={{color: "#535bf2"}}>Так же можете сочетать с defaults.</span> Это сделает код более читаемым и гибким.
    </h2>
    <div className="box" id='box4' style={{position: "absolute", top: "90%"}}>
        1
    </div>
    <div className="box" id='box5' style={{position: "absolute", top: "90%"}}>
        1
    </div>
  </div>
  )
}

export default Timeline