import "./about.scss"
import {motion} from "framer-motion"
import Lottie from "lottie-react"
import animateData from "../animation/Animation1.json"

const About = () => {

    const aboutLinks = document.getElementsByClassName("about-links")
    const aboutContents = document.getElementsByClassName("about-content")

    function openAbout(aboutName){
        for(let aboutLink of aboutLinks){
            aboutLink.classList.remove("active-link");
        }
        event.target.classList.add("active-link");
        
        for(let aboutContent of aboutContents){
            aboutContent.classList.remove("active-about-content");
        }
        document.getElementById(aboutName).classList.add("active-about-content");
    }

    const variants={
        initial:{
            y:200,
            opacity:0,
        },
        animate:{
            y:0,
            opacity:1,
            transition:{
                duration:1,
                staggerChildren:0.5,
            }
        }
    }

  return (
    <motion.div className="about" variants={variants} initial="initial" whileInView="animate">
        <div className="wrapper">
            <div className="animation">
                <Lottie animationData={animateData}/>
            </div>
            <div className="textContainer">
                <motion.h2 variants={variants}>About Me</motion.h2>
                <motion.p variants={variants} className="aboutme">Hello! I'm <span>Kaviarasan A</span>, a determined and enthusiastic individual ready to embark on a fulfilling career 
                    journey. I'm excited to kickstart my career in the dynamic world of web development and contribute to 
                    building the web of tomorrow. <br/>
                    I love turning ideas into functional, user-friendly websites that make a real impact. <span className="hidden">Whether it's 
                    designing responsive layouts, optimizing performance, or solving complex coding challenges, 
                    I'm eager to take on the exciting challenges of web development.</span> <br/>
                    I've honed my skills in <span>HTML5, CSS3, JavaScript, Bootstrap5, ReactJS, SASS/SCSS, Git & GitHub</span> and<span> MySQL.</span> I'm adept at creating interactive and visually appealing
                    websites that prioritize user experience.
                </motion.p>
                <motion.div variants={variants} className="about-title">
                        <p className="about-links active-link" onClick={()=>openAbout('skills')}>Skills</p>
                        <p className="about-links" onClick={()=>openAbout('education')}>Education</p>
                </motion.div>
                <motion.div variants={variants} className="about-content active-about-content" id="skills">
                    <ul>
                        <motion.li variants={variants}><span>UI/UX</span><br/>Designing Web/App interfaces</motion.li>
                        <motion.li variants={variants}><span>Web Development</span><br/>Web app Development</motion.li>
                        <motion.li variants={variants}><span>ReactJS</span><br/>Front-End Developement</motion.li>
                    </ul>
                </motion.div>
                <motion.div variants={variants} className="about-content" id="education">
                    <ul>
                        <motion.li variants={variants}><span>2023</span><br/>UI & ReactJS Training at AchieversIT institute</motion.li>
                        <motion.li variants={variants}><span>2023</span><br/>Bachelor of Engineering in Computer Science <br/>At University College of Engineering Arni <br/>Constituent to Anna University</motion.li>
                        <motion.li variants={variants}><span>2019</span><br/>Higher School Certificate(HSC) <br/>At Sri Ramajayam Matriculation Hr. Sec. School </motion.li>
                    </ul>
                </motion.div>
            </div>
        </div>
    </motion.div>
  )
}

export default About
