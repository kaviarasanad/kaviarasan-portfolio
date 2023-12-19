import './portfolio.scss'
import { item } from './data'
import {motion,useScroll,useSpring, useTransform} from "framer-motion"
import { useRef } from 'react'

const Section =({item})=>{

    const ref =useRef();

    const {scrollYProgress} = useScroll({target:ref})

    const y = useTransform(scrollYProgress,[0,1],[-230,200])

    return (
        <section id="Projects"> 
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer">
                        <img src={item.img} alt={item.alt} ref={ref}/>
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <p>Technology used : {item.tech}</p>
                        <a href={item.link} target='_blank'><button>view</button></a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref =useRef()
    const {scrollYProgress} = useScroll({target:ref, offset:["end end", "start start"]})

    const scaleX = useSpring(scrollYProgress,{
        stiffness:50,
        dampind:70
    })
    
  return (
    <div className='portfolio' ref={ref}>
        <div className="progress">
            <h2>Featured Works</h2>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
        {item.map(item=>(
        <Section item={item} key={item.id}/>
        ))} 
    </div>
  )
}

export default Portfolio
