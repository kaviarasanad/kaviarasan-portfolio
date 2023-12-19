import "./intro.scss"
import {motion} from "framer-motion"
import Lottie from "lottie-react";
import animateData from "../animation/Animation2.json"

const textVariants={
  initial:{
    x:-500,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1,
    },
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat:Infinity,
    },
  },
}
const sliderVariants={
  initial:{
    x:0,
  },
  animate:{
    x:"-220%",
    transition:{
      repeat:Infinity,
      duration:15,
      staggerChildren:0.01,
    },
  },
};

const Intro = () => {
  return (
    <div className="intro">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>Kaviarasan A</motion.h2>
          <motion.h1 variants={textVariants}>Front-End and ReactJS Developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}><a href="#Projects">See the Latest Work</a></motion.button>
            <motion.button variants={textVariants}><a href="./Kaviarasan A Resume.pdf" download='Kaviarasan A Resume'>DownloadCV</a></motion.button>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="scroll" />
        </motion.div>
      </div>
      <div className="slidingText" >
        <motion.p variants={sliderVariants} initial="initial" animate="animate">Enthusiast UI Developer </motion.p>
      </div>
      <motion.div variants={sliderVariants} className="imageContainer">
        <Lottie animationData={animateData} loop={true} />
      </motion.div>
      
    </div>
  )
}

export default Intro
