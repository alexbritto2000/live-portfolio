import React from 'react'
import {motion} from "framer-motion"

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.06,
    },
  },
};

const singleWord = {
  initial:{
    opacity:0,
    y:25,
  },
  animate:{
    opacity:1,
    y:0,
    transition:{
      duration:0.6
    }
  }
}

const AnimatedText = ({text, className=''}) => {
    return (
        <div className="w-full mx-auto py-1 flex items-center justify-center text-center overflow-hidden sm:py-0">
            <motion.h1 
              className={`inline-block w-full text-dark font-bold capitalize text-3xl md:text-2xl sm:text-xl ${className} dark:text-light`} 
              variants={quote} 
              initial="initial" 
              animate="animate"
            >
                {
                    text.split(" ").map((word, index) =>
                        <motion.span key={word+'-'+index} className="inline-block"
                        variants={singleWord}>
                            {word}&nbsp;
                        </motion.span>
                    )
                }
            </motion.h1>
        </div>
    )
}

export default AnimatedText
