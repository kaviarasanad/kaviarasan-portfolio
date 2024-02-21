import { useRef, useState } from 'react'
import './contact.scss'
import {motion,useInView} from "framer-motion"
import emailjs from '@emailjs/browser';

const Contact = () => {

    
    const variants={
        initial:{
            opacity:0
        },
        animate:{
            y:0,
            opacity:1,
            transition:{
                duration:0.8,
                staggerChildren:0.9,
            }
        }
    }
    const ref = useRef()
    const isInView = useInView(ref, {margin:"-50px"})

    const formRef=useRef()
    const [error,setError] = useState(null)
    const [success,setSuccess] = useState(null)

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_a1shbt3', 'template_2p82sa5', formRef.current, 'OWfFVjVBK0zIs9Izi')
          .then((result) => {
              setSuccess(true)
            }, (error) => {
              setError(true)
          })
    }
    
  return (
    <motion.div className='contact' ref={ref} variants={variants} initial='initial' whileInView='animate'>
      <motion.div className="textContainer" variants={variants}>
        <motion.h2 variants={variants}>Let's connect together</motion.h2>
        <motion.div variants={variants} className="item">
            <h3>Mail</h3>
            <span><a href="mailto:kaviarasanad@gmail.com">kaviarasanad@gmail.com</a></span>
        </motion.div>
        <motion.div variants={variants} className="item">
            <h3>Address</h3>
            <span>Tiruvannamalai,Tamil Nadu</span>
        </motion.div>
        <motion.div variants={variants} className="item">
            <h3>Contact</h3>
            <span>+91 934506972</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div className="mobileSvg" 
        initial={{opacity:1}} 
        whileInView={{opacity:0}}
        transition={{delay:2,duration:1}}>
            <svg width="325px" height="400px" viewBox="70 27 370 455">
                <motion.path strokeWidth={5} fill="none"
                initial={{pathLength:0}}
                animate={isInView && {pathLength:1}}
                transition={{duration:4}}
                d="M305.376,217.024c10.275,13.376,8.235,32.626-3.614,44.605l-32.5,32.855c-7.318,7.398-19.204,7.398-26.522,0l-32.5-32.855   c-11.85-11.979-13.889-31.229-3.614-44.605c12.415-16.161,35.529-17.243,49.375-3.245   C269.847,199.782,292.961,200.863,305.376,217.024z M407.405,111.248l-19.953,20.461c-1.02,1.048-2.188,1.874-3.414,2.594v305.734   c0,22.055-17.945,40-40,40h-176c-22.055,0-40-17.945-40-40v-21.692c-1.257-0.729-2.456-1.57-3.5-2.644l-19.945-20.453   c-10.133-10.398-11.266-26.375-2.625-37.18c4.813-6.008,11.914-9.672,19.484-10.039c2.223-0.123,4.43,0.105,6.586,0.553V72.037   c0-22.055,17.945-40,40-40h176c19.542,0,35.793,14.108,39.258,32.662c2.343-0.548,4.771-0.796,7.25-0.669   c7.57,0.367,14.672,4.031,19.484,10.039c0,0,0,0,0.008,0C418.67,84.866,417.545,100.85,407.405,111.248z M224.037,440h64   c8.837,0,16-7.164,16-16s-7.163-16-16-16h-64c-8.836,0-16,7.164-16,16S215.201,440,224.037,440z M368.037,376V134.345   c-1.257-0.729-2.456-1.57-3.5-2.644l-19.945-20.453c-6.283-6.447-9.088-15.038-8.267-23.211H144.037v260.528   c2.114-0.432,4.284-0.656,6.508-0.536c7.57,0.367,14.672,4.031,19.484,10.039c0,0,0,0,0.008,0   c4.141,5.179,5.977,11.554,5.709,17.931H368.037z M135.998,404.537l19.953-20.461c4.438-4.547,5.133-11.578,1.586-16.008   c-1.977-2.469-4.734-3.906-7.773-4.055c-2.991-0.147-5.826,0.98-7.983,3.156c-1.455,1.512-3.478,2.469-5.744,2.469   c-0.014,0-0.025-0.008-0.039-0.008l0,0c-0.027,0-0.052-0.016-0.079-0.016c-1.062-0.017-2.08-0.217-3.002-0.608   c-0.624-0.26-1.134-0.719-1.676-1.129c-0.279-0.215-0.622-0.344-0.87-0.593c-0.029-0.029-0.071-0.038-0.099-0.067   c-2.039-2.086-4.688-3.219-7.516-3.219c-0.172,0-0.344,0.008-0.523,0.016c-3.031,0.148-5.797,1.586-7.773,4.055   c-3.539,4.43-2.844,11.461,1.586,16.008L135.998,404.537z M397.537,84.069c-1.977-2.469-4.734-3.906-7.773-4.055   c-2.976-0.116-5.826,0.981-7.983,3.157c-1.455,1.511-3.478,2.468-5.744,2.468c-0.014,0-0.025-0.008-0.039-0.008l0,0   c-0.027,0-0.052-0.016-0.079-0.016c-1.062-0.017-2.08-0.217-3.002-0.608c-0.624-0.26-1.134-0.719-1.676-1.129   c-0.279-0.215-0.622-0.344-0.87-0.593c-0.029-0.029-0.071-0.038-0.099-0.067c-2.039-2.086-4.688-3.219-7.516-3.219   c-0.172,0-0.344,0.008-0.523,0.016c-3.031,0.148-5.797,1.586-7.773,4.055c-3.539,4.43-2.844,11.461,1.586,16.008l19.953,20.461   l19.953-20.461C400.389,95.53,401.084,88.498,397.537,84.069z"/>
            </svg>
        </motion.div>
        <motion.form ref={formRef} onSubmit={sendEmail}
        autoComplete='off'
        initial={{opacity:0}} 
        whileInView={{opacity:1}}
        transition={{delay:3,duration:1}}>
            <input type="text" placeholder='Name' name='name' required />
            <input type="text" placeholder='Email' name='email' required/>
            <textarea rows="8" placeholder='Message' name='message'/>
            <button>Send</button>
            {error === true ? "Error" : ""}
            {success === true ? "Mail send successfully" : " "}
        </motion.form>
      </div>
    </motion.div>
  )
}

export default Contact
