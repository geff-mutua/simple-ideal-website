import logo from '../assets/logo.png'
import { useState } from 'react';

import { FaGlobe } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { HiBars3 } from "react-icons/hi2";
import { Link } from 'react-scroll';
const Navbar = () => {

    const [isMenuOpen,setIsMenuOpen]=useState(false);

    const setToggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    }

    const navItem=[
        {link:"Overview",path:"home"},
        {link:"Feature",path:"feature"},
        {link:"About",path:"about"},
        {link:"Pricing",path:"pricing"}
   
    ]
  return (
    <>
        <nav className='bg-white md:px-14 p-4 max-w-screen-2xl border-b mx-auto text-primary fixed top-0 left-0 right-0 z-40'>
            <div className='text-lg flex container mx-auto justify-between items-center font-medium'>
                <div className='flex space-x-14 items-center'>
                    <a href="/" className='text-2xl items-center flex space-x-3 font-semibold text-primary'>
                        <img src={logo} alt="" className='w-10 inline-block items-center' />
                        <span>ABC</span>
                    </a>

                    {/* Display the menus */}
                    <ul className='md:flex hidden space-x-12'>
                        {navItem.map((nav)=><Link spy={true} smooth={true} offset={-100}key={nav.link} to={nav.path} className='block hover:text-gray-300 cursor-pointer'>{nav.link}</Link>)}
                    </ul>

                </div>

                {/* Languange and signup*/}
                <div className='space-x-12 hidden md:flex'>
                    <a href="" className='hidden lg:flex items-center hover:text-secondary'>
                        <FaGlobe className='mr-2'/>
                        Languange
                        </a>
                    <button className='py-2 px-4 text-white rounded transitio duration-300 bg-secondary
                    hover:text-white hover:bg-indigo-300'>Sign Up</button>
                </div>


                {/* TOggle menu on mobile devices */}
                <div className='md:hidden'>
                    <button onClick={setToggleMenu} className='text-white focus:outline-none focus:text-gray-300'>
                        {
                            isMenuOpen ? (<FaXmark className='w-6 h-6 text-primary' />):(<HiBars3  className='w-6 h-6 text-primary'/>)
                        }
                    </button>
                </div>

            </div>
        </nav>

        <div className={`space-y-4 px-4 pt-24 pb-5 text-white bg-secondary ${isMenuOpen ? "block fixed top-0 left-0 right-0" : "hidden"}`}>
             {navItem.map((nav)=><Link spy={true} smooth={true} offset={-100} key={nav.link} to={nav.path} className='block hover:text-gray-300 text-2xl'
             onClick={()=>setToggleMenu()}
             >{nav.link}</Link>)}
        </div>
    </>
  )
}

export default Navbar