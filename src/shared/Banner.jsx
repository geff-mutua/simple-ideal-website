import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
const Banner = ({banner,heading,subHeading,btn1,btn2}) => {


  return (
    <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 p-4 py-9">
        <div className="flex md:flex-row-reverse flex-col justify-between items-center gap-10">
        
                {/* Banner Image */}
            <motion.div
                variants={fadeIn("down",0.2 )}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false,amount:0.2}}
            >
                <img src={banner} alt="Banner Image" className="lg:h-[386px]" />
            </motion.div>  

            <motion.div
                variants={fadeIn("up",0.2 )}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false,amount:0.2}}
             className='md:w-3/5'>
                <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 first-line:leading-relaxed">{heading}</h2>
                <p className="text-[#EBEBEB] text-2xl mb-8">{subHeading}</p>

                <div className="space-x-5 space-y-4">
                    <button className="btnPrimary">{btn1}</button>
                    <button className="btnPrimary">{btn2}</button>
                </div>
            </motion.div>
            
        </div>
    </div>
  )
}

export default Banner