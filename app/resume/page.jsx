"use client";
import {FaHtml5,FaCss3,FaJs,FaReact,FaFigma,FaAngular,FaNodeJs} from "react-icons/fa";
import { DiDotnet,DiGit,DiWordpress,DiPython    } from "react-icons/di";
import {SiTailwindcss,SiNextdotjs,SiCsharp,SiMicrosoftsqlserver,SiMysql   } from "react-icons/si";

import {Tabs,TabsContent,TabsList,TabsTrigger,ta} from '@/components/ui/tabs';
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
 import { motion } from "framer-motion";
 import { RiUserStarFill } from "react-icons/ri";
 import { FaGraduationCap } from "react-icons/fa6";
 import { GiSkills } from "react-icons/gi";
 import { HiInformationCircle } from "react-icons/hi2";

// about data

const about={
   title:"About me",
   description:"A passionate and innovative young professional with strong background in both freelance and IT industries environment Modern Full Stack Developer specializing in front-end and back-end development. Experienced with all stages of the development cycle for dynamic Web, Mobile and Artificial Intelligence based applications. Well-versed in numerous programming languages and tools with a good academic and technical skills records and a passion for continues learning and professional development. ",
   info:[
    {
      fieldName:"Name",
      fieldValue:"Shahzeb Khan"
    },
    {
      fieldName:"Experience",
      fieldValue:"05+ Years"
    },
    {
      fieldName:"Nationality",
      fieldValue:"Pakistani"
    },
    {
      fieldName:"Languages",
      fieldValue:"English"
    },
    {
      fieldName:"Freelance",
      fieldValue:"Available"
    },
    {
      fieldName:"Email",
      fieldValue:"Shahzeb201411@gmail.com"
    }
   ]
}

// Experience data
const experience={
  icon:"/assets/resume/badge.svg",
  title:"My experience",
  description:"Here is my professional experience ",
  items:[
    {
      company:"Federal Government Organization",
      place:"Islamabad, Pakistan",
      position:"Software Developer",
      duration:"06 / 2020 -  present"
    },
    {
      company:"Techno Engineering Services",
      place:"Islamabad, Pakistan",
      position:"Software Engineer",
      duration:"02 / 2019 -  06 / 2020"
    },
    {
      company:"National Assembly Secretariate",
      place:"Islamabad, Pakistan",
      position:"Internship",
      duration:"06 / 2018 -  12 / 2018"
    },
    {
      company:"GEXTON Software House",
      place:"Hyderabad, Pakistan",
      position:"Internship",
      duration:"04 / 2018 -  05 / 2018"
    }
  ]
}

// Education data
const education={
  icon:"/assets/resume/cap.svg",
  title:"My education",
  description:"Here is my Academic Background ",
  items:[
    {
      institution:"University of Sindh",
      degree:"Bachelor of Science in Information Technology",
      duration:"2014 - 2019",
      place:"Jamshoro, Pakistan"
    },
    {
      institution:"APTECH Computer Education",
      degree:"Advance Diploma Software Engineering",
      duration:"2014 - 2017",
      place:"Hyderabad, Pakistan"
    }
  ]
}

// skills data
const skills={
 title:"My Skills",
 description:"I possess a strong skill set including",
 skillslist:[
  {
    icon:<DiDotnet />,
    name:"ASP .Net"
  },
  {
    icon: <FaHtml5/>,
    name: "html 5"
  },
  {
    icon: <FaJs/>,
    name: "javascript"
  },
  {
    icon: <FaCss3/>,
    name: "Css 3"
  },
  {
    icon: <FaReact/>,
    name: "react.js"
  },
  {
    icon: <SiNextdotjs/>,
    name: "Next.js,"
  },
  {
    icon: <SiTailwindcss/>,
    name: "Tailwind.css"
  },
  {
    icon: <FaAngular/>,
    name: "Angular"
  },
  {
    icon: <FaNodeJs/>,
    name: "Node.js"
  },
  {
    icon: <FaFigma/>,
    name: "figma"
  },
  {
    icon: <DiGit/>,
    name: "Git Version Control"
  },
  {
    icon: <DiWordpress />,
    name: "Wordpress"
  },
  {
    icon: <DiPython />,
    name: "Python"
  },
  {
    icon: <SiCsharp  />,
    name: "CSharp"
  },
  {
    icon: <SiMicrosoftsqlserver   />,
    name: "MS SQL Server"
  },
  {
    icon: <SiMysql    />,
    name: "MS SQL Server"
  },
  
  

 ]
}

const Resume = () => {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:'easeIn'} }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto ">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px] ">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 ">
            <TabsTrigger className="bg-[rgba(65,47,123,0.15)] drop-shadow-2xl hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:shadow-2xl  " value="experience">Experience &nbsp; <div className="flex flex-col justify-end text-3xl"><span> <RiUserStarFill  /> </span></div> </TabsTrigger>
            <TabsTrigger className="bg-[rgba(65,47,123,0.15)] drop-shadow-2xl hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:shadow-2xl  " value="education">Education &nbsp; <div className="flex flex-col justify-end text-3xl "><span> <FaGraduationCap /> </span></div> </TabsTrigger>
            <TabsTrigger className="bg-[rgba(65,47,123,0.15)] drop-shadow-2xl hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:shadow-2xl  " value="skill">Skills &nbsp; <div className="flex flex-col justify-end text-3xl"><span> <GiSkills /> </span></div> </TabsTrigger>
            <TabsTrigger className="bg-[rgba(65,47,123,0.15)] drop-shadow-2xl hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:shadow-2xl  " value="about">About me &nbsp; <div className="flex flex-col justify-end text-3xl"><span> <HiInformationCircle /> </span></div> </TabsTrigger>
          </TabsList>

          {/* content  */}
          <div className="min-h-[70vh] w-full ">
            {/* experience */}
            <TabsContent value="experience" className="w-full ">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold capitalize">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-2xl ">{experience.description}</p>
                <ScrollArea className="h-[400px] ">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {experience.items.map((item,index)=>{
                      return <li key={index} className="bg-[rgba(65,47,123,0.15)] drop-shadow-2xl hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:shadow-2xl h-[250px]   py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent font-bold text-[18px]">{item.duration}</span>
                        <h3 className="font-bold max-w-[260px]  text-center lg:text-left uppercase">{item.position}</h3>
                        <div className="flex flex-col items-left gap-0">
                          {/* dot */}
                          {/* <span className="w-[6px] h-[6px] rounded-full bg-accent"></span> */}
                          <p className="text-white/60 text-[14px] capitalize font-semibold ">{item.company}</p>
                          <p className="text-white/60 text-[16px] ">{item.place}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>  
            </TabsContent>


            {/* education */}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold capitalize">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-2xl">{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item,index)=>{
                      return <li key={index} className="bg-[rgba(65,47,123,0.15)] drop-shadow-2xl hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:shadow-2xl  h-[250px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-accent font-bold">{item.duration}</span>
                        <h3 className="font-bold max-w-[360px] min-h-[20px] text-center lg:text-left uppercase ">{item.degree}</h3>
                        <div className="flex  flex-col items-left gap-0">
                          {/* dot */}
                          {/* <span className="w-[6px] h-[6px] rounded-full bg-accent"></span> */}
                          <p className="text-white/60 text-[14px]  capitalize font-semibold ">{item.institution}</p>
                          <p className="text-white/60 text-[16px] ">{item.place}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>  
            </TabsContent>


            {/* skills */}
            <TabsContent value="skill" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-2xl">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 h-[450px] sm:grid-cols-3 md:grid-cols-4 xl:gap-4 sm:gap-4 overflow-y-scroll custom-scrollbar">
                  {skills.skillslist.map((skill,index)=>{
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[rgba(65,47,123,0.15)] drop-shadow-2xl hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:shadow-2xl   rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                              </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      </li>
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left ">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify ">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item,index)=>{
                    return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>

        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume