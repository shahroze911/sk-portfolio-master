"use client";
import {useState} from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select,SelectContent,SelectGroup,SelectItem,SelectLabel,SelectTrigger,SelectValue } from "@/components/ui/select";



const ContactForm = ({ isDialogOpen, onClose }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.error('Message not sent at this time. Please contact directly on Email: Shahzaib201411@gmail.com');
  };

  return (
    <div className="container mx-auto">
       <Toaster
  position="top-center"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toastOptions={{
    // Define default options
    className: '',
    duration: 5000,
    style: {
      background: '#363636',
      color: '#fff',
      
    },

    
  }}
/>
        <div className="flex flex-col xl:flex-row gap-[30px]">
            {/* contactform */}
        <div className="xl:w-[100%] order-2 xl:order-none">
       
            <form className="flex flex-col gap-2 p-10 bg-slate-800 rounded-xl" onSubmit={handleSubmit}>
           {/* form close btn */}
           {isDialogOpen && (
              <div className="flex justify-end mb-4">
                <button
                  type="button"
                  className="text-2xl font-semibold flex items-center text-white/60 hover:text-accent "
                  onClick={onClose}
                >
                  X
                </button>
              </div>
            )}

             <h3 className="text-4xl text-accent">Let's work together</h3>
             <p className="text-white/60">Have a project in mind that needs a skilled and passionate developer? I'm eager to collaborate and bring your ideas to life! With a strong foundation in various technologies and a dedication to user-centric solutions, I'm confident we can create something truly impactful. Feel free to reach out and let's discuss how I can help make your vision a reality.</p>
             {/* input */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input type="firstname" placeholder="Firstname"/>
              <Input type="lastname" placeholder="Lastname"/>
              <Input type="email" placeholder="Email"/>
              <Input type="phon" placeholder="Phone number"/>
             </div>
             {/* select */}
             <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a service"/>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select a service</SelectLabel>
                  <SelectItem value="wd">Web Development</SelectItem>
                  <SelectItem value="md">Mobile Development</SelectItem>
                  <SelectItem value="ui">UI/UX Design</SelectItem>
                  <SelectItem value="dav">Data Analysis & Visualization</SelectItem>
                  <SelectItem value="tw">Software Documentatino & Technical Writing</SelectItem>
                  <SelectItem value="ai">Gen AI Development</SelectItem>
                </SelectGroup>
              </SelectContent>
             </Select>
             {/* textarea */}
             <Textarea className="h-[200px]" placeholder="Type your message here."/>
            
             {/* button */}
             <Button  className="max-w-40 "  >
              Send message
              </Button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default ContactForm