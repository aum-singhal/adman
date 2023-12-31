import { motion } from "framer-motion";
import React from "react";


export const AnimatePage = ({children}) => {
  const animations = {
    initial: {opacity: 0.2},
    animate: {opacity: 1},
    exit: {opacity: .5}
  }
  return <motion.div 
    variants={animations}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{duration: .4, ease: "easeInOut"}}
  >
    {children}
  </motion.div>
}