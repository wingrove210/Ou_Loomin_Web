import './css/Section5.css';
import phone5sec from './media/iPhone14Pro.png';
import triangle_play from './media/Polygon.svg';
import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";


function Section5(){
  useEffect(() => {
    return (() => {})
  },[])
    return(
        <>
        <HorizontalScrollCarousel/>
        </>
    );
}
// const scrollFunction = () => {
//   this.style.transform = "translateX(250px)"
// }
const HorizontalScrollCarousel = () =>{
    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll(
      {target: targetRef}
    );
    const x = useTransform(scrollYProgress, [0, 2], ["0%", "-86%"]);
    return (
        <section ref={targetRef} className="relative h-[300vh]">
          <div className="sticky top-0 flex h-screen items-center overflow-hidden justify-start">
            <motion.div 
                    style={{ x }}
                     className="flex gap-4">
              {cards.map((card) => {
                return <Card card={card} key={card.id} />;
              })}
            </motion.div>
          </div>
        </section>
      );
};
const Card = ({ card }) => {
    return (
      <div key={card.id} className="group relative h-[450px] w-[450px] overflow-hidden">
        <div className='world-inside'>
            <div className="world-inside-block">
                <div className='world-phone-section'>
                    <img src={phone5sec} alt="" className="world-inside-phone-img"/>
                </div>
                <div className='world-inside-section'>
                    <div className="world-inside-text">
                        <h1 className="world-inside-header">Мир внутри тебя <br/>всего в одном клике</h1>
                        <p className="world-inside-content">Наше приложение – это идеальный спутник для тех, кто стремится к внутреннему спокойствию и балансу. С помощью простых, но эффективных медитаций, вы научитесь находить умиротворение в любой ситуации </p>
                    </div>
                    <div className="buttons-low-2">
                            <button className="try-btn">Попробовать бесплатно</button>
                            <button className="watch-video"><img alt="" src={triangle_play} className="polygon"/><span>Смотреть видео</span></button>
                    </div>
                </div>
                <p className="world-inside-content-2">Наше приложение – это идеальный спутник для тех, кто стремится к внутреннему спокойствию и балансу. С помощью простых, но эффективных медитаций, вы научитесь находить умиротворение в любой ситуации </p>
            </div>
        </div>
      </div>
    );
  };

export default Section5;

const cards = [
    {
      url: "./media/anna-pavlin-UMH92TvHEz0-unsplash.jpg",
      title: "Title 1",
      id: 1,
    },
    {
      url: "/imgs/abstract/2.jpg",
      title: "Title 2",
      id: 2,
    },
    {
      url: "/imgs/abstract/3.jpg",
      title: "Title 3",
      id: 3,
    },
    {
      url: "/imgs/abstract/4.jpg",
      title: "Title 4",
      id: 4,
    },
    {
      url: "/imgs/abstract/5.jpg",
      title: "Title 5",
      id: 5,
    },
    {
      url: "/imgs/abstract/6.jpg",
      title: "Title 6",
      id: 6,
    },
    {
      url: "/imgs/abstract/7.jpg",
      title: "Title 7",
      id: 7,
    },
  ];
  