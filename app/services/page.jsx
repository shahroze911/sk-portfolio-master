"use client";
import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {fadeIn} from '../../variants'
import Bulb from '@/components/Bulb';
import { FaLaptopCode } from "react-icons/fa";
import { MdPhoneAndroid } from "react-icons/md";
import { SiNextui } from "react-icons/si";
import { MdOutlineDataThresholding,MdEditDocument  } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
const services=[
  {
    num:'01',
    title:'Web Development',
    description:"Passionate web developer with a strong foundation in front-end & back-end technologies. Skilled in building responsive websites as well as web applications using variety of programming languages like Next.js, React, Angular, PHP, ASP.NET MVC, REST API, SOAP API HTML, CSS / Tailwind CSS, JavaScript. Proven ability to design, develop, and maintain complex web applications.",
    href:"/work",
    icon:<FaLaptopCode />
  },
  {
    num:'02',
    title:'Mobile Development',
    description:"Mobile app developer adept at building native and cross-platform applications. Proficient in languages like Java/Kotlin (Android) along with frameworks like React Native or Flutter for cross-platform development. Experience in crafting user-friendly interfaces, integrating APIs, and optimizing app performance for a seamless mobile experience.",
    href:"/work",
    icon:<MdPhoneAndroid  />
  },
  {
    num:'03',
    title:'Desktop Application Development',
    description:"I have extensive experience in desktop application development using C#, .NET (Windows Forms, WPF), Python, and Java. I excel in creating robust, high-performance applications with intuitive and efficient user interfaces. My expertise spans various frameworks, including Tkinter, PyQt, Kivy for Python, and Swing, JavaFX for Java. I am committed to delivering feature-rich, responsive applications that meet user needs and maintain high standards of code quality and performance.",
    href:"/work",
    icon:<TbDeviceDesktopAnalytics />
  },
  {
    num:'04',
    title:'Generative AI Developer',
    description:"AI-powered developer passionate about integrating generative AI into modern software applications. Leverages Python frameworks (Flask, Django, Streamlit, FastAPI) to build engaging generative AI applications. Possesses a strong understanding of AI concepts and conversational interfaces. Adept at designing and deploying scalable AI models in the cloud using platforms such as Hugging Face, TensorFlow, NLP, LLM, and ML. Develops AI-powered solutions using cutting-edge libraries like Face++, Face Recognition, Voice Recognition, ResNet, GAN, and librosa to automate tasks and empower intelligent decision-making.",
    href:"/work",
    icon:<GiArtificialIntelligence  />
  },
  {
    num:'05',
    title:'UI/UX Design',
    description:"Creative UI/UX designer with a proficiency in Figma and design principles. Skilled in crafting user-centered interfaces that are both visually appealing and intuitive. Experience in designing and prototyping interactive experiences using Figma for web and mobile applications.",
    href:"/work",
    icon:<SiNextui  />
  },
  
  {
    num:'06',
    title:'Data Anlaysis & Data Visualization',
    description:"Data enthusiast with expertise in wrangling and analyzing data using Python and its libraries (Pandas, NumPy, Matplotlib, Seaborn). Skilled at creating compelling data visualizations with Tableau and Power BI to communicate insights effectively. Experience in cleaning, manipulating, and transforming data to uncover patterns and trends.",
    href:"/work",
    icon:<MdOutlineDataThresholding />
  },
  {
    num:'07',
    title:'Software Documentation & Technical Writing',
    description:"Skilled technical writer with experience crafting clear and concise software documentation. Adept at tailoring documentation to various audiences, from developers to end-users. Proven ability to explain complex technical concepts in an easy-to-understand manner. Utilize industry best practices and tools to create informative and user-friendly documentation.",
    href:"/work",
    icon:<MdEditDocument  />
  },
  
 
];


const Services = () => {
  return (
    <section className="min-h-[80vh]  flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto overflow-x-scroll whitespace-nowrap custom-scrollbar">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: '0%', transition: { duration: 3, ease: "easeInOut" } }}
          className="flex space-x-12"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className=' flex-shrink-0 w-[300px]  md:w-[500px] flex flex-col justify-center gap-6 group min-h-[400px]'>
               
                <div className='h-[600px] py-5 '>
                  {/* top */}
                <div className=" w-full flex justify-between items-center">
                  <div className=" text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  {/* <Link href={service.href} className=" w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link> */}
                </div>
                {/* icon */}
                <div className="text-[44px] group-hover:text-accent transition-all duration-300">
                <span className='flex justify-center items-center py-2 '>{service.icon}</span>
                </div>
                {/* title */}
                <h2 className="flex justify-center items-center text-wrap text-[28px] font-bold leading-snug text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                {/* description */}
                <p className=" text-white/60 text-justify text-wrap">{service.description}</p>
                </div>

                
                
                
               
                
                {/* border */}
                <hr className="border-b border-white/20 w-full -top-60" />
                
                
                
              </div>
            );
          })}
        </motion.div>
      </div>

          <Bulb />

    </section>
  );
}

export default Services;




















// "use client";
// import {BsArrowDownRight}from 'react-icons/bs';
// import Link from 'next/link';
// import { motion } from 'framer-motion';

// const services=[
//   {
//     num:'01',
//     title:'Web Development',
//     description:"Passionate web developer with a strong foundation in front-end & back-end technologies. Skilled in building responsive websites as well as web applications using variety of programming languages like Next.js, React, Angular, PHP, ASP.NET MVC, REST APIs, HTML, CSS / Tailwind CSS, JavaScript. Proven ability to design, develop, and maintain complex web applications.",
//     href:"/work"
//   },
//   {
//     num:'02',
//     title:'Mobile Development',
//     description:"Mobile app developer adept at building native and cross-platform applications. Proficient in languages like Java/Kotlin (Android) along with frameworks like React Native or Flutter for cross-platform development. Experience in crafting user-friendly interfaces, integrating APIs, and optimizing app performance for a seamless mobile experience.",
//     href:"/work"
//   },
//   {
//     num:'03',
//     title:'UI/UX Design',
//     description:"Creative UI/UX designer with a proficiency in Figma and design principles. Skilled in crafting user-centered interfaces that are both visually appealing and intuitive. Experience in designing and prototyping interactive experiences using Figma for web and mobile applications.",
//     href:"/work"
//   },
  
//   {
//     num:'04',
//     title:'Data Anlaysis & Visualization',
//     description:"Data enthusiast with expertise in wrangling and analyzing data using Python and its libraries (Pandas, NumPy, Matplotlib, Seaborn). Skilled at creating compelling data visualizations with Tableau and Power BI to communicate insights effectively. Experience in cleaning, manipulating, and transforming data to uncover patterns and trends.",
//     href:"/work"
//   },
//   {
//     num:'05',
//     title:'Generative AI Developer',
//     description:"AI-powered developer passionate about integrating generative AI into modern software applications. Leverages Python frameworks (Flask, Django, Streamlit, FastAPI) to build engaging generative AI applications. Possesses a strong understanding of AI concepts and conversational interfaces. Adept at designing and deploying scalable AI models in the cloud using platforms such as Hugging Face, TensorFlow, NLP, LLM, and ML. Develops AI-powered solutions using cutting-edge libraries like Face++, Face Recognition, Voice Recognition, ResNet, GAN, and librosa to automate tasks and empower intelligent decision-making.",
//     href:"/work"
//   }
 
// ];


// const Services = () => {
//   return (
//     <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
//       <div className="container mx-auto scroll-m-10">
//       <motion.div
//       initial={{opacity:0}}
//       animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:"easeIn"}}}
//       className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
//       >
//         {services.map((service,index)=>{
//           return <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
//             {/* top */}
//             <div className="w-full flex justify-between items-center">
//               <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
//               <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
//               <BsArrowDownRight className="text-primary text-3xl" />
//               </Link>
//             </div>
//             {/* title */}
//             <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
//             {/* description */}
//             <p className="text-white/60 text-justify">{service.description}</p>
//             {/* border */}
//             <div className="border-b border-white/20 w-full"></div>
//           </div>
//         })}
//       </motion.div>
//       </div>
//     </section>
//   )
// }

// export default Services