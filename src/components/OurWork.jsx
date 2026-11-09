//import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion } from "motion/react"

const OurWork = () => {

    const workData = [
        {
            title: 'Mobile App Marketing',
            description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
            image: assets.work_mobile_app
        },
        {
            title: 'Dashboard Management',
            description: 'We help you execute your plan and deliver exceptional user experiences.',
            image: assets.work_dashboard_management
        },
        {
            title: 'Fitness App Promotion',
            description: 'We help you create a marketing strategy that drives results.',
            image: assets.work_fitness_app
        },
    ]; 

  return (
    <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{staggerChildren: 0.1 }}
        viewport={{once:true}}
    id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <Title title='Our latest work' desc='From strategy to execution, we craft digital solutions that move your business forward.' />

        <div className="grid sm:grid-cols-2 w-full max-w-5xl lg:grid-cols-3 gap-6">
           {
           workData.map((work, index) => (
            <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6 }}
            viewport={{once:true}}
            key={index} className='hover:scale-102 duration-500 transition-all cursor-pointer'>
              <img src={work.image} alt={work.title} className="w-full h-48 rounded-xl " />
              <h3 className="text-lg font-semibold mt-3 mb-2">{work.title}</h3>
              <p className='text-sm opacity-60 w-5/6'>{work.description}</p>
            </motion.div>
           ))}
        </div>

    </motion.div>
  )
}

export default OurWork
