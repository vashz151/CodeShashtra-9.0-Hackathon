import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg'
// import dropdown from '../assets/dropdown.svg'

const Navbar = () => {

  let [open, setOpen] = useState(true);
  let [open1, setOpen1] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-white border-b-[1.5px] border-black p-2 text-[16px]">
      <Link to="/" className="mr-4 inline-flex items-center">
        <img src={logo}></img>
      </Link>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded border-black text-white bg-[#4051A3] hover:text-black hover:bg-white" onClick={() => setOpen(!open)}>
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </button>
      </div>
      <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${open ? '' : 'hidden'}`}>
        <div className="text-sm lg:flex-grow mt-4 lg:text-center font-[Montserrat] font-extrabold">
          <Link to="/investigation" className="block lg:inline-block text-base lg:mt-0 text-black hover:bg-gray-200 p-2 hover:rounded-full mr-4 lg:mr-8">
            <span>Investigation</span>
          </Link>
          <Link to="/events/blogs/all" className="block lg:inline-block text-base lg:mt-0 text-black hover:bg-gray-200 p-2 hover:rounded-full mr-4 lg:mr-8">
            <span>Blogs</span>
          </Link>
          <Link to="/ourteam" className="block lg:inline-block text-base lg:mt-0 text-black hover:bg-gray-200 p-2 hover:rounded-full mr-4 lg:mr-8">
            <span>Our Team</span>
          </Link>
          <Link to="/beginner's-guide" className="block lg:inline-block text-base lg:mt-0 text-black hover:bg-gray-200 p-2 hover:rounded-full mr-4 lg:mr-8">
            <span>Beginner's Guide</span>
          </Link>
          <Link to="/about" className="block lg:inline-block text-base lg:mt-0 text-black hover:bg-gray-200 p-2 hover:rounded-full mr-4 lg:mr-8">
            <span>About Us</span>
          </Link>
          <Link to="/events/data-2-knowledge" className="block lg:inline-block text-base lg:mt-0 text-black hover:bg-gray-200 p-2 hover:rounded-full mr-4 lg:mr-8">
            <span>Data 2 Knowledge</span>
          </Link>
        </div>
        {/* <div>
          <Link href="/" className="inline-block text-sm py-4 px-12 leading-none border rounded-xl text-white bg-[#4051A3] border-black hover:bg-white hover:text-black mt-4 lg:mt-0 font-[Ubuntu] font-light">Sign In</Link>
        </div> */}
      </div>
    </nav>
  )

}

export default Navbar