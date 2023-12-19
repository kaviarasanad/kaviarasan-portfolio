import { useState } from "react"
import {motion} from "framer-motion"
import Links from "./links/Links"
import "./sidebar.scss"
import ToggleButton from "./togglebutton/ToggleButton"
const variants={
    open:{
        clipPath : "circle(1000px at 40px 35px)",
        transition:{
            type:"spring",
            stiffness:20
        }
    },
    closed:{
        clipPath:"circle(22px at 40px 35px)",
        transition:{
            delay:0.3,
            type:"spring",
            stiffness:400,
            damping:40,
        },
    },
};

const Sidebar = () => {

const [open,setOpen]=useState(false);


  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
        <motion.div className="bg" variants={variants}>
        <Links/>
        </motion.div>
        <ToggleButton setOpen={setOpen} />
    </motion.div>
  )
}

export default Sidebar
