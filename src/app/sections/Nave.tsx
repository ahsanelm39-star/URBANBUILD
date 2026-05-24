"use client"
import Image from 'next/image';
import Logo from '../../../public/images/logo.png'
import  List  from '../components/List';
import Btn from '../components/Btn';
import Link from "next/link";
import { useState } from 'react';

const Nave = () => {

    const menuItems = [
        { label: "HOME", href: "/" },
        { label: "ABOUT", href: "#about" },
        { label: "SERVICES", href: "#services" },
        { label: "PROJECTS", href: "#projects" },
        { label: "CONTACT", href: "#contact" },
    ];
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <nav className='bg-primary '>
            <div className="container mx-auto flex justify-between py-3 px-4">
                <div>
                    <Link href={'/'}>
                        <Image src={Logo} alt="Logo"  height={48} width={230} className='max-md:w-50 mr-8'/>
                    </Link>
                </div>
                <div className='flex gap-10'>
                    <div className='flex text-white items-center list-ul max-md:hidden'>
                        {menuItems.map((item, idx) => (
                        <Link href={item.href} key={item.label} onClick={() => { 
                            setActiveIndex(idx)
                            }} className={`py-2 px-3 ${item.label === 'CONTACT' ? 'pr-0' : ''} font-medium 
                            cursor-pointer transition-all hover:text-[#ffd76e] ${activeIndex === idx ? "main_color_text" : ""}`}>
                            {item.label}
                        </Link>
                        ))}
                    </div>
                    <Link href={'#contact'} className='max-lg:hidden'>
                        <Btn bg={'white'} text={"GET A QUOTE"}/>
                    </Link>
                </div>
                <List/>
            </div>
            
        </nav>
    )
}

export default Nave