import { gsap } from "gsap/gsap-core"
import { useGSAP } from "@gsap/react"


const To = () => {
  useGSAP(()=>{
    gsap.to(".box", {
      x: 200,
      y: 50,
      duration: 1,
      rotation: 180,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      backgroundColor: "red",
    })
  })
  return (
    <div className="wrapper">
      <h1>To</h1>
      <h2><span style={{color: "#535bf2"}}>GSAP</span> - сам определяет исходное положение обьекта. Тебе достаточо просто указать нужный параметр и он примет его.</h2>
        <div className="box">
          to
        </div>
    </div>
  )
}

export default To