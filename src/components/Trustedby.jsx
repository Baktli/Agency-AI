//import React from 'react'
import {company_logos} from '../assets/assets'
import { motion } from "motion/react"

const Trustedby = () => {
  return (
    <motion.div
    initial={{opacity: 0, y: 20}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.6 }}
    viewport={{once:true}}
    className='flex flex-col items-center px-4 sm:pxx-12 lg:px-24 xl:px-40 gap-10 text-gray-700 dark:text-white/80'>

        <motion.h3 
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5 }}
        viewport={{once:true}}
        className='font-semibold'>
          Trusted by Leading Companies
        </motion.h3>

        
      
        <div className="overflow-hidden w-full">
            <motion.div
              className="flex items-center gap-10 w-max"
               animate={{ x: ["0%", "-50%"] }}
              transition={{
              duration: 20,
               ease: "linear",
              repeat: Infinity
           }}
          >
          {[...company_logos, ...company_logos].map((logo, index) => (
          <img
             key={index}
             src={logo}
             alt="Company logo"
             className="max-h-5 sm:max-h-6 shrink-0 dark:drop-shadow-xl"
          />
          ))}
         </motion.div>
        </div>

    </motion.div>
  )
}

export default Trustedby
