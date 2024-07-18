import {useState} from 'react';
import ContactForm from './ContactForm';

const HiremeDialog = ({isOpen, onClose}) => {
    if(!isOpen) return null;
  return (
    <div className="mx-auto fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="  rounded-lg shadow-lg flex flex-col xl:flex-row gap-[0px]">

      <ContactForm isDialogOpen={isOpen} onClose={onClose}  className="flex items-center"/>
      
       
        </div>
        </div>
    
  )
}

export default HiremeDialog