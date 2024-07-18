"use client";
import { motion } from "framer-motion";
import Image from "next/image";  // Correct import
import ParticlesContainer from "./ParticlesContainer";



const Profilephoto = () => {
    return <div className="w-full h-full relative">
       {/* image */}
        <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{delay:2,duration:0.4,ease:"easeIn"}}}>
            <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:"easeOut"}}}
            className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute">
                <Image src="/assets/profilepic.png"
                 priority
                 quality={100} 
                 fill 
                 alt="" 
                 className="object-contain rounded-full"/>
            </motion.div>

            {/* circle */}
            <motion.svg className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]" fill="transparent" viewBox="0 0 506 506" xmlns="http://www.w3.org/2000/svg">
                <motion.circle 
                cx="253" 
                cy="253" 
                r="250" 
                stroke="#AF143c" 
                strokeWidth="4 " 
                strokeLinejoin="round" 
                initials={{strokeDasharry:"24 18 0 0"}} 
                animate={{
                    strokeDasharray:["15 120 25 25","16 25 92 72","4 250 22 22"],
                    rotate:[120,360 ]
                }}
                transition={{
                    duration:20,
                    repeat:Infinity,
                    repeatType:"reverse"
                }}
                />
                    
            </motion.svg>
        </motion.div>

    
        <ParticlesContainer />
    
    </div>
      
}

export default Profilephoto