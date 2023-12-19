import {useRef} from'react'
import "./Parallax.scss"
import {motion, useScroll, useTransform} from "framer-motion"
import Typewriter from 'typewriter-effect'

const Parallax = ({type}) => {

  const ref =useRef();

  const {scrollYProgress} =useScroll({
    target:ref,
    offset:["start start", "end start"]
  });

  const yText =useTransform(scrollYProgress, [0 , 1], ["0%","400%"]);
  const yBg =useTransform(scrollYProgress, [0 , 1], ["0%","100%"]);

  return (
    <div 
    className="parallax" 
    ref={ref}
    style={{background:(type === "services" ? "linear-gradient(180deg, #222222, #000000)" : "linear-gradient(180deg,#222222,#444444)")}}>
        <motion.h1 style={{y : yText}}>
          {type === "services" ? 
           <Typewriter
            options={{
             autoStart:true,
             loop:true,
             delay:40,
             strings:[
               "What I'm Capable of",
               "I'm Strong in",
               "Front-End Developer", 
             ],
            }}
            />: 
           <Typewriter
           options={{
            autoStart:true,
            loop:true,
            delay:40,
            strings:[
              "What I did ?"
            ],
           }}
           />
          }</motion.h1>
        <motion.div className="mountain"></motion.div>
        <motion.div 
        style={{
          y : yBg
        }} 
        className="planets"></motion.div>
        <motion.div style={{x : yBg}}className="stars"></motion.div>
        
    </div>
  )
}

export default Parallax;