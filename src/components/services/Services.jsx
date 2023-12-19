import './services.scss'
import {data} from './data.js'
import {motion} from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const variants={
  initial:{
    x:-200,
    y:100,
    opacity:0
  },
  animate:{
    x:0,
    y:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1,
    }
  }
}

const Services = () => {
  return (
    <motion.div className='services' variants={variants} initial="initial" whileInView="animate">
      <motion.div className="textContainer" variants={variants}>
        <p>Everyday life is like programming, I guess. If you <br />love something, you can put beauty into it</p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
            <img src="./developer.png" alt="development" />
            <h2><motion.b whileHover={{color:"#ff800a"}}>Unique</motion.b> Ideas</h2>
        </div>
        <div className="title">
            <h2><motion.b whileHover={{color:"#ff800a"}}>For Your</motion.b> Websites.</h2>
            <button>What I'm Capable of</button>
        </div>
      </motion.div>
        <motion.div className="listContainer" variants={variants}>
          {
            data.map((item,key)=>(
              <motion.div className="box" key={key} whileHover={{color:"#000",boxShadow:"0 0 20px 5px #fff"}}>
                <FontAwesomeIcon variants={variants} className='icon' icon={item.icon} />
                <motion.h2 variants={variants}>{item.heading}</motion.h2>
                <motion.p variants={variants}>{item.detail}</motion.p>
                <motion.button variants={variants} whileHover={{boxShadow:"0 0 10px 3px #ff800a"}} >{item.lm}</motion.button>
              </motion.div>
            ))
          }
        </motion.div>
    </motion.div>
  )
}

export default Services
