//import React from 'react'
import assets from '../assets/assets'
import Title from './Title';
import { motion } from "motion/react"

const Services = () => {
    
    const servicesData = [
        {
            title:  'Advertising',
            description: 'We turn bold ideas into powerful solutions that connect,engage...',
            icon: assets.ads_icon
        },
        {
            title:  'Content marketing',
            description: 'We help you execute your plan and deliver results.',
            icon: assets.marketing_icon
        },
        {
            title:  'Content writing',
            description: 'We help you create a marketing strategy that drives results.',
            icon: assets.content_icon
        },
        {
            title:  'Social media',
            description: 'We help you build a strong social media presence and engage with your audience.',
            icon: assets.social_icon
        }
    ]

  return (
    <motion.div
    initial={{opacity: 0, y: 30}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.6 }}
    viewport={{once:true}}
    id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white '>
        
        <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden'/>

     <Title title='How can we help?' desc='From strategy to execution, we craft digital solutions that move your business forward.'/>

       <div className='flex flex-col md:grid grid-cols-2'>
           {servicesData.map((service,index)=>(
             <serviceCard key={index} service={service} index={index} />
           ))}
       </div>

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {servicesData.map((service, index) => (
       <div key={index} className="border p-6 rounded-xl">
      <img src={service.icon} alt="" className="w-10 h-10" />
      <h3 className="text-lg font-semibold mt-4">{service.title}</h3>
      <p className="text-sm mt-2">{service.description}</p>
    </div>
  ))}
</div>

    </motion.div>
  )
}

export default Services
