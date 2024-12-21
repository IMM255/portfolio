import { useState } from 'react';
import '../styles/main.css';

function Navbar() {
    const [isOpen, setisOpen] = useState(false);
    return (
        <header className='sticky top-0 w-full bg-primary '>
        <nav>
            <div className='flex justify-between px-14 py-4'>
            <div>Muhammad Imam Arif Darmawan</div>
            <div>
            <div className='md:flex hidden' >
                <ul className='flex gap-16 pe-12 font-[Poppins]'>
                    <li><a href="" className='hover:border-b-2 border-black hover:opacity-70 '>Home</a></li>
                    <li><a href="" className='hover:border-b-2 border-black hover:opacity-70 '>About</a></li>
                    <li><a href="" className='hover:border-b-2 border-black hover:opacity-70 '>Project</a></li>
                </ul>
            </div>
            <button className='md:hidden focus:outline-none' onClick={() => setisOpen(!isOpen)}>
                    {isOpen ? (
                        <span>X</span>
                    ) : (
                        <span>☰</span>
                    )}    
            </button>
            </div>
            </div>
        </nav>
        {isOpen && (
             <div className="md:hidden bg-primary border-t ">
             <ul className="flex flex-col items-center space-y-4 py-4">
               <li><a href="#home" className='hover:border-b-2 border-black hover:opacity-70 '>Home</a></li>
               <li><a href="#about" className='hover:border-b-2 border-black hover:opacity-70 '>About</a></li>
               <li><a href="#projects" className='hover:border-b-2 border-black hover:opacity-70 '>Projects</a></li>
             </ul>
           </div>
        )}
        </header>
    )
}   

export default Navbar
