import { useGSAP } from "@gsap/react"
import gsap from "gsap"

const FromTo = () => {
    useGSAP(()=>{
        gsap.fromTo(".box", {
            x: -400,
            duration: 1,
            repeat: -1,
        },{
            x: 400,
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
    <h1>FromTo</h1>
    <h2>Тут уже вы сами решаете какой будет исходная и конечная точка</h2>
      <div className="box">
        FromTo
      </div>
  </div>
  )
}

export default FromTo