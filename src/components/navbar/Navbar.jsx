import Sidebar from '../sidebar/Sidebar'
import './navbar.scss'
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <div className='navbar'>
        <Sidebar />
      <div className="wrapper">
        <motion.img className='logo'
        initial={{opacity:0, scale:0.5}} 
        animate={{opacity:1, scale:1}}
        transition={{duration:1}}
        src="/logo.png" alt="Kavi"
        />
        <motion.div className="social"
        initial={{opacity:0, scale:0.5}} 
        animate={{opacity:1, scale:1}}
        transition={{duration:0.5}}
        >
            <a href="https://github.com/kaviarasanad" target="_blank"><img src="/git.png" alt="GitHub" /></a>
            <a href="https://www.linkedin.com/in/kaviarasanad" target="_blank"><img src="/linkedIn.png" alt="LinkedIn" /></a>
            <a href="https://wa.me/9345069742" target="_blank"><img src="/whatsapp.png" alt="WhatsApp" /></a>
            <a href="https://instagram.com/itz_prince_kavi?igshid=NzZlODBkYWE4Ng==" target="_blank"><img src="/instagram.png" alt="Instagram" /></a>
        </motion.div>
      </div>
    </div>
  )
}

export default Navbar
