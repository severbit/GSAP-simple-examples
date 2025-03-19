import { useGSAP } from "@gsap/react";
import ScrollTriggerPlugin from "gsap/ScrollTrigger";
import gsap from "gsap";
import React from "react";


gsap.registerPlugin(ScrollTriggerPlugin);

const ScrollTriggerComponent = () => {
  useGSAP(()=>{
    gsap.defaults({duration: 1, ease: "power2.inOut",})
    gsap.fromTo(".featured", {
      scrollTrigger: {
        trigger: ".featured",
        start: "top center",
        end: "bottom bottom",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      x: 100

    },
  {
    opacity: 1,
    x: 0,
  })
  gsap.fromTo(".bento-item", {
    scrollTrigger: {
      trigger: ".bento-item",
      start: "top center",
      end: "bottom bottom",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 100,
    x: -100
  }, {
    opacity: 1,
    y: 0,
    x: 0
  })
  })

  return (
    <div className="wrapper">
      <div className="emptyWrapper" style={{height: "80vh"}}>
        <h1>ScrollTrigger</h1>
        <p>ScrollTrigger помогает добавить больше интерактивности в ваши проекты. Признайтесь вы ведь тоже видели в соц сетях как это используют для создания красивых анимаций? Теперь вы тоже сможете сделать такое с лёгкостью!</p>
        <h3>Скрольте вниз</h3>
      </div>
      <h1>Bento Grid</h1>
      <div className="bento-grid">
        <div className="bento-item featured">
          <h2>Featured</h2>
          <p>Lorem ipsum dolor sit.</p>
        </div>
        <div className="bento-item" id="react">
          <h3>React</h3>
          <p>Современный фреймворк</p>
        </div>
        <div className="bento-item" id="gsap">
          <h3>GSAP</h3>
          <p>Мощная анимация</p>
        </div>
        <div className="bento-item" id="vite">
          <h3>Vite</h3>
          <p>Быстрая сборка</p>
        </div>
        <div className="bento-item" id="router">
          <h3>Router</h3>
          <p>Удобная навигация</p>
        </div>
        <div className="bento-item" id="item1">
          <ul>
            <li>Простота использования</li>
            <li>Современный дизайн</li>
            <li>Отзывчивый интерфейс</li>
          </ul>
        </div>
        <div className="bento-item" id="item2">
          <p>Создавайте красивые анимации с GSAP</p>
        </div>
      </div>
    </div>
  );
};

export default ScrollTriggerComponent;
