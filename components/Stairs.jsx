import { animate, delay, easeInOut, motion } from "framer-motion";

//variants
const transitionVariants={
    initial:{x:"100%",width:"100%"},
    animate:{x:"0%",width:"0%"},
    exit:{x:["0%","100%"],width:["0%","100%"]}
};


const Stairs = () => {
  return <>
    <motion.div 
    className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#161B40]"
    variants={transitionVariants} 
    initial="initial" 
    animate="animate" 
    exit="exit" 
    transition={{delay:0.2,duration:0.6,ease:"easeInOut"}}
    > </motion.div>
    <motion.div 
    className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-primary"
    variants={transitionVariants} 
    initial="initial" 
    animate="animate" 
    exit="exit" 
    transition={{delay:0.4,duration:0.6,ease:"easeInOut"}}
    > </motion.div>
    <motion.div 
    className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#02006c] opacity-50"
    variants={transitionVariants} 
    initial="initial" 
    animate="animate" 
    exit="exit" 
    transition={{delay:0.6,duration:0.6,ease:"easeInOut"}}
    > </motion.div>
  </>
}

export default Stairs































// import { animate, easeInOut, motion } from "framer-motion";

// //variants
// const stairsAnimation={
//     initial:{top:"0%"},
//     animate:{top:"100%"},
//     exit:{top:["100%","0%"]}
// };
// const reverseIndex=(index)=>{
//  const totalsteps=8;
//  return totalsteps-index-1;

// };

// const Stairs = () => {
//   return <>
// {[...Array(8)].map((_,index)=>{
//     return(
//         <motion.div key={index} variants={stairsAnimation} initial="initial" animate="animate" exit="exit" transition={{duration:0.4,ease:'easeInOut',delay:reverseIndex(index)*0.1}} 
//     className="h-full w-full bg-white relative"
//     />
//     )
    
// })}
//   </>
// }

// export default Stairs