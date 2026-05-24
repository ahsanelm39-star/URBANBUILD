"use client"
import { useState } from 'react';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image'
import MopileLogo from '../../../public/images/logo.png'
import { faFacebookF, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const menuItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

const List = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openMenuo, setOpenMenuo] = useState(false);

  return (
    <>
      <div className='md:hidden'>
        <FontAwesomeIcon icon={faBars} onClick={()=>setOpenMenuo(true)} 
        className='text-white text-3xl cursor-pointer ' />
      </div>
        <div className={` ${openMenuo ? 'translate-x-[0]' : 'translate-x-[100%]'} md:hidden fixed bg-[#0000005d] w-full h-[100vh] top-0 
      right-0 flex justify-end z-50  transition-all duration-300 `}>
        <div className=' bg-black h-[100vh] w-[250px] flex flex-col justify-evenly px-8'>
          <span onClick={()=> setOpenMenuo(false)} className='text-2xl text-white font-medium cursor-pointer absolute top-6 right-6 transition-all hover:text-red-500'>X</span>
          <div>
            <Link href={'/'}>
              <Image src={MopileLogo} alt='logo' />
            </Link>
          </div>
          <ul className='flex flex-col gap-6 text-white items-center list-ul'>
            {menuItems.map((item, idx) => (
              <Link href={item.href} key={item.label} onClick={() => { 
                setActiveIndex(idx) 
                setOpenMenuo(false)
                }}>
                <li className={`cursor-pointer transition-all hover:text-[#ffd76e] ${activeIndex === idx ? "on" : ""}`}>
                  {item.label}
                </li>
              </Link>
            ))}
          </ul>
          <div className="flex gap-8 text-white justify-center">
            <FontAwesomeIcon icon={faFacebookF} width={11} className='cursor-pointer transition-all hover:text-[#ffc221]' />
            <FontAwesomeIcon icon={faYoutube} width={14} className='cursor-pointer transition-all hover:text-[#ffc221]' />
            <FontAwesomeIcon icon={faXTwitter} width={14} className='cursor-pointer transition-all hover:text-[#ffc221]' />
            <FontAwesomeIcon icon={faInstagram} width={14} className='cursor-pointer transition-all hover:text-[#ffc221]' />
          </div>
        </div>
      </div>
    </>
  )
}

export default List