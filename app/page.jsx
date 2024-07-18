"use client";

import { Button } from "@/components/ui/button";
import{FiDownload}from"react-icons/fi";
import Social from "@/components/Social";
import Profilephoto from "@/components/Profilephoto";
import Stats from "@/components/Stats";
import { motion } from "framer-motion";
import {fadeIn} from "../variants";
import Link from "next/link";
import ParticlesContainer from "@/components/ParticlesContainer";


const Home = () => {


  return (
    
    <section className="h-full ">
     
      <div className="container mx-auto ">
        
      
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        
        
        
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none bg-gradient-to-r from-primary/10 via-black/30">
            <span className="h2">Modern <span className="text-accent">Full Stack</span> Developer</span>
           
            <motion.h1 variants={fadeIn('down',0.4)}
            initial="hidden" animate='show' exit='hidden' className="h1"
            > 
              Hello I'm <br/><span className="text-accent">Shahzeb Khan</span>
             
            </motion.h1>
            <p className="max-w-[500px] mb-9 text-white/80 text-[16px] font-semibold text-justify">Transforming Ideas Into reality I excel at crafting elegent digital experience and I am proficient in various programming languages and technologies.</p>
          
          {/* button & socials */}
          <div className="flex flex-col xl:flex-row items-center gap-8 ">
            <Link href={"/assets/resume/shahzebkhanResume.pdf"} target="_blank">
            <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
              <span>Download CV</span>
              <FiDownload className="text-xl"/>
            </Button>
            </Link>
            
            <div className="mb-8 xl:mb-0">
              <Social containterStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
            </div>

           </div>
           </div>

          

          {/* photo  */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Profilephoto /> 
            
          </div>
      
        </div>
       
           


      </div>
      <Stats />
    </section>
  )
}

export default Home











// import { Button } from "@/components/ui/button";
// import{FiDownload}from"react-icons/fi";
// import Social from "@/components/Social";
// import Profilephoto from "@/components/Profilephoto";
// import Stats from "@/components/Stats";

// const Home = () => {
//   return (
//     <section className="h-full">
//       <div className="container mx-auto h-full">
//         <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
//           {/* text */}
//           <div className="text-center xl:text-left order-2 xl:order-none">
//             <span className="text-xl">Software Developer</span>
//             <h1 className="h1 mb-6">
//               Hello I'm <br/><span className="text-accent">Shahzeb Khan</span>
//             </h1>
//             <p className="max-w-[500px] mb-9 text-white/80">I excel at crafting elegent digital experience and I am proficient in various programming language and technologies.</p>
          
//           {/* button & socials */}
//           <div className="flex flex-col xl:flex-row items-center gap-8 ">
//             <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
//               <span>Download CV</span>
//               <FiDownload className="text-xl"/>
//             </Button>
//             <div className="mb-8 xl:mb-0">
//               <Social containterStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
//             </div>
//            </div>
//           </div>
//           {/* photo */}
//           <div className="order-1 xl:order-none mb-8 xl:mb-0">
//           <Profilephoto />

//           </div>
//         </div>
//       </div>
//       <Stats />
//     </section>
//   )
// }

// export default Home