import React from 'react'
import { motion } from 'framer-motion'

const MotionWrap = (Component, className) => function HOC() {
   return (
      <motion.div
         className={className}
         whileInView={{ y: [100, 50, 25, 0], opacity: [0, 0, 0, 1] }}
         transition={{ duration: 0.5 }}
      >
         <Component />
      </motion.div>
   )
}

export default MotionWrap