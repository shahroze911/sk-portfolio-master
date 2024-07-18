"use client";

import Link from "next/link"
import { Button } from "./ui/button"
import {useState}from 'react'

//components
import Nav from "./Nav"
import MobileNav from "./MobileNav"
import HiremeDialog from "./HiremeDialog";

const Header = () => {

  const [isDialogOpen, setDialogOpen] = useState(false);
  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);

  return (
    <header className="py-8  xl:py-8 text-white ">
        
        <div className="container mx-auto flex justify-between items-center">
            {/* logo text */}
            <Link href="/" >
            
            <h1  className="text-5xl font-semibold"> 
            SK<span className="text-accent">.</span>            
            </h1>
            
            
            </Link>

            {/* desktop nav & hire button*/}
            <div className="hidden xl:flex items-center gap-8">
            <Nav />
            
            <Button onClick={openDialog}> Hire me</Button>
            
            </div>

            {/* mobile nav */}
            <div className="xl:hidden">
                <MobileNav></MobileNav>
            </div>
            

        </div>

        <HiremeDialog isOpen={isDialogOpen} onClose={closeDialog} />
    </header>
  )
}

export default Header