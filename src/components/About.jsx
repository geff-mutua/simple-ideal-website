import about from '../assets/about.png'
import about1 from '../assets/about1.png'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
const About = () => {
  return (
    <div className="py-18 md:px-14 px-4 max-w-screen-2xl mx-auto" id="about">
        {/* First Part */}
        <div className='flex flex-col lg:flex-row justify-between gap-10 items-center space-y-8'>
            <motion.div
                   variants={fadeIn("right",0.2 )}
                   initial="hidden"
                   whileInView={"show"}
                   viewport={{once:false,amount:0.2}}
             className='md:w-1/2'>
                <img src={about} alt="" />
            </motion.div>
            <motion.div

                variants={fadeIn("left",0.3 )}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false,amount:0.2}}
            
            className='md:w-2/5'>
                <h5 className='text-3xl font-bold md:5xl mb-5 text-primary leading-normal'>We have been improving our product <span className='text-secondary'>for many years.</span></h5>
                <p className='text-tartiary mb-7 text-lg'>A good example of a paragraph contains a topic conclusion. There are many different kinds of animals that live in China.</p>
                <button className='btnPrimary'>Get Started</button>
            </motion.div>
        </div>

        {/* Second part */}
        <div className='flex flex-col lg:flex-row-reverse justify-between gap-10 items-center'>
            <motion.div
             variants={fadeIn("up",0.2 )}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:false,amount:0.2}}
            className='md:w-1/2'>
                <img src={about1} alt="" />
            </motion.div>
            <motion.div
             variants={fadeIn("right",0.2 )}
             initial="hidden"
             whileInView={"show"}
             viewport={{once:false,amount:0.2}}
             className='md:w-2/5'>
                <h5 className='text-3xl font-bold md:5xl mb-5 text-primary leading-normal'>You can Practice at any <span className='text-secondary'>time convinent for you.</span></h5>
                <p className='text-tartiary mb-7 text-lg'>A good example of a paragraph contains a topic conclusion. There are many different kinds of animals that live in China.</p>
                <button className='btnPrimary'>Get Started</button>
            </motion.div>
        </div>

    </div>
  )
}

export default About