"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue } from "@/components/ui/select";
import {FaPhoneAlt,FaEnvelope,FaMapMarkerAlt} from 'react-icons/fa';
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

const info=[
  {
    icon:<FaPhoneAlt/>,
    title:"Phone",
    description:"(+92) 312 3038770"
  },
  {
    icon:<FaEnvelope/>,
    title:"Email",
    description:"Shahzaib201411@gmail.com"
  },
  {
    icon:<FaMapMarkerAlt/>,
    title:"Address",
    description:"Main Service Road G-6/2, Islamabad, Pakistan"
  }
];


const Contact = () => {
  
  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:"easeIn"} }} 
    className="py-6"
    >
      <div className=" container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          
          <ContactForm />
          {/* <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
             <h3 className="text-4xl text-accent">Let's work together</h3>
             <p className="text-white/60">Have a project in mind that needs a skilled and passionate developer? I'm eager to collaborate and bring your ideas to life! With a strong foundation in various technologies and a dedication to user-centric solutions, I'm confident we can create something truly impactful. Feel free to reach out and let's discuss how I can help make your vision a reality.</p>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input type="firstname" placeholder="Firstname"/>
              <Input type="lastname" placeholder="Lastname"/>
              <Input type="email" placeholder="Email"/>
              <Input type="phon" placeholder="Phone number"/>
             </div>
             
             <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a service"/>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select a service</SelectLabel>
                  <SelectItem value="est">Web Development</SelectItem>
                  <SelectItem value="cst">UI/UX Design</SelectItem>
                  <SelectItem value="mst">Logo Design</SelectItem>
                </SelectGroup>
              </SelectContent>
             </Select>
             
             <Textarea className="h-[200px]" placeholder="Type your message here."/>
             
             <Button  className="max-w-40 ">
              Send message
              </Button>
            </form>
          </div> */}  
          {/* info */}
          <div className=" flex-1 flex items-center xl:justify-items-end order-1 xl:order-none mb-8 xl:mb-0">
           <ul className="flex flex-col gap-10">
            {info.map((item,index)=>{
              return(
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-slate-800 text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              );
            })}
           </ul>
          </div>
          
        </div>
      </div>
    </motion.section>
  )
}

export default Contact