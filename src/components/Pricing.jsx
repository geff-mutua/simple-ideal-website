import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'

const Pricing = () => {
    const [isYearly,setIsYearl]=useState(false);
    const pricing=[
        {name:'Start',monthlyPrice:50,yearlyPric:144,description:'A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',green:'/src/assets/priceGreen.png'},
        {name:'Advance',monthlyPrice:85,yearlyPric:150,description:'A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',green:'/src/assets/priceGreen.png'},
        {name:'Premium',monthlyPrice:100,yearlyPric:199,description:'A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',green:'/src/assets/priceRed.png'}
    ];
  return (
    <div className="py-18 md:px-14 px-4 max-w-screen-2xl mx-auto mt-40" id='pricing'>
        <div className='text-center'>
            <h2 className='font-extrabold text-primary text-3xl md:text-5xl mb-2'>Here are all our plans</h2>
            <p className='text-tartiary md:w-1/3 mx-auto px-4'>A simple paragraph is comprised of three major components. The which is often a declarative sentence.</p>

            {/* Toggle  */}
            <div className='mt-16'>
                <label htmlFor="toggle" className='inline-flex items-center cursor-pointer'>
                    <span className='mr-8 text-2xl font-semibold'>Monthly</span>
                    <div className='w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out'>
                        <div className={`h-6 w-6 rounded-full ${isYearly ? "bg-primary ml-8" : "bg-gray-500"}`}></div>
                    </div>
                    <span className='ml-8 text-2xl font-semibold'>Yearly</span>
                </label>
                <input type="checkbox" id="toggle" className='hidden' checked={isYearly} onChange={()=>setIsYearl(!isYearly)} />
            </div>
        </div>

        {/* Pricing cards */}
        <motion.div
         variants={fadeIn("up",0.2 )}
         initial="hidden"
         whileInView={"show"}
         viewport={{once:false,amount:0.2}}
        className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto'>
                {
                    pricing.map((pack,index)=>
                    <div key={index} className='border shadow-3xl px-4 md:px-6 py-10 rounded-lg'>
                        <h3 className='text-3xl font-bold text-center text-primary'>{pack.name}</h3>
                        <p className='text-tartiary text-center my-5'>{pack.description}</p>
                        <p className='mt-5 text-center text-4xl text-secondary font-bold'>
                            {isYearly ? `$${pack.yearlyPric}` : `$${pack.monthlyPrice}`}
                            <span className='text-base text-tartiary font-medium'>/{isYearly ? "month" : "year"}</span>
                        </p>
                        <ul className='mt-4 space-y-2 px-4'>
                            <li className='flex gap-3 items-center'>
                                <img src={pack.green} alt="" className='w-4 h-4' />Videos of Lessons</li>
                                <li className='flex gap-3 items-center'>
                                <img src={pack.green} alt="" className='w-4 h-4' />Homework check</li>
                                <li className='flex gap-3 items-center'>
                                <img src={pack.green} alt="" className='w-4 h-4' />Additional practical task</li>
                                <li className='flex gap-3 items-center'>
                                <img src={pack.green} alt="" className='w-4 h-4' />Monthly conferences</li>
                                <li className='flex gap-3 items-center'>
                                <img src={pack.green} alt="" className='w-4 h-4' />Personal advice from teachers</li>
                        </ul>
                        <div className='w-full mx-auto mt-8 flex items-center justify-center'>
                            <button className='btnPrimary'>
                                Get Started
                            </button>
                        </div>
                    </div>
                    )
                }
            </motion.div>

    </div>
  )
}

export default Pricing