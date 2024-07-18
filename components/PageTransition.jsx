"use client"

import { AnimatePresence,delay,easeInOut,motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({children}) => {
    const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
        
            <motion.div 
            key={pathname}
            initial={{opacity:1}} 
            animate={{opacity:0,transition:{delay:1,duration:0.4,ease:easeInOut}}}
            exit={{opacity:1}}
            className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
            >
              
            </motion.div>
            {children} 
    </AnimatePresence>
  );
};

export default PageTransition