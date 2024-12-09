import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { HiMenuAlt3 } from "react-icons/hi";
import { HiMiniXMark } from "react-icons/hi2";
import { SiRedhatopenshift } from 'react-icons/si';
import logo from '../assets/logo.jpg';
import { GrInstagram } from "react-icons/gr";
import { PiFacebookLogoBold } from "react-icons/pi";
import { SiWhatsapp } from "react-icons/si";





const Navbar = () => {


  const navbarList = [



    {
      name: 'home',
      link: '/',
    },

    {
      name:'about',
      link:'/About',
    },

    {
      name: 'services',
      link: '/services',
    },


    {
      name: 'gallery',
      link: '/gallery',
    },


    {
      name: 'blog',
      link: '/blog',
    },

    {
      name:'testimonials',
      link:'/testimonial',
    },


    {
      name: 'contact',
      link: '/contact',
    }


  ];






  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(true);

  };

  const closeMenu = () => {
    setOpen(false);
    
  };



  const [color, setColor] = useState(); // State to track the active link index

  const handleClick = (index) => {
    setColor(index); // Set the clicked link's index as active
closeMenu();

  };


 const [appointment2, setAppointment2] = useState(true);


 const bookAppointment = () => 
 {
  setAppointment2((prev) => !prev);


}


useEffect(() => {

setAppointment2(true);

} , [location.pathname]);


  return (

    <header className='bg-black flex justify-center items-center  h-[4rem]'>


      <div className='w-[90%] flex justify-between items-center text-white  capitalize'>



        <div className='w-full  md:w-auto flex justify-between items-center'>
          <img src={logo} alt="ntcodex system logo" className='w-[6rem] h-[4rem]' />
          <HiMenuAlt3 onClick={openMenu} className='md:hidden text-[2rem]' />
        </div>

        <nav className={` w-[100%] h-full md:overflow-auto overflow-y-auto   gap-[2rem] flex justify-center flex-col md:flex-row  items-center md:w-auto md:h-auto bg-black z-20 md:z-0  md:relative  fixed  top-0 left-0 ${open ? 'block' : 'hidden'} md:block `}>



        <button className='flex justify-center  mt-[6rem] rounded-[2rem] items-center capitalize md:hidden block  text-[14px] w-[10rem] h-[4rem] border-[1px] border-white ' onClick={bookAppointment}>
            book appintment
          </button>


          <ul className={` w-[80%]    md:flex md:justify-between md:flex-row justify-start items-start  flex-col  h-auto md:items-center md:gap-[2rem] md:text-[14px] text-[18px] text-white  md:w-auto md:h-auto `}>


        

            <li><HiMiniXMark onClick={closeMenu} className='md:hidden relative  text-[2rem] ' /></li>

            {navbarList.map((list, index) => (
        <li
          key={index}
          className={`text-white md:text-[14px] text-[18px] font-normal flex md:pt-0 pt-[2rem] `} // Conditionally apply 'text-green-500' if active
          onClick={() => handleClick(index)}  // Set the active link on click
        >
          <NavLink to={list.link}  className={() =>
               color == index ? 'text-green-500' : 'text-white'
            }>
            {list.name} 
           
          </NavLink>
        </li>

        
      ))}




          </ul>

          <div className=' text-[30px] md:hidden  mb-[2rem] text-green-500 flex justify-start gap-5 items-start w-[80%]'>

<div>
            <GrInstagram className="" />

          </div>

          <div >
            <PiFacebookLogoBold />

          </div>

          <div>
            <SiWhatsapp />

          </div>

</div>

        </nav>

        

        <div className={`hidden md:block  border-[1px] border-white w-[10rem] h-[2rem] rounded-[5rem] md:flex md:justify-center items-center cursor`}  onClick={bookAppointment} >

          <button className='flex justify-center items-center capitalize md:inline-block text-[14px]'>
            book appintment
          </button>



        </div>

        {/* appointment booking form */}

        <div className={`md:w-[40%] w-[90%] h-auto py-[1rem]   transition-all duration-500 shadow-lg absolute top-[20rem] md:absolute md:top-[7rem] flex justify-center flex-col items-center  rounded-[2rem] border-[2px] border-green-500   bg-opacity-10 backdrop-blur-md z-20 md:right-[5rem] right-auto gap-[2rem] bg-white ${appointment2 ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100 pointer-events-auto'}`}>

<div className='flex justify-between items-center  w-[90%]'>



  <p className='md:text-[14px] text-[14px]'>resister yourself starting work on your project</p>
  <HiMiniXMark onClick={ () => setAppointment2(true) }  className='cursor-pointer text-[20px] md:text-[20px]'/>

</div>

          <div className="w-[90%]   flex justify-between items-center flex-auto  md:flex-wrap  gap-2 flex-col md:flex-row  ">
           
           <div className='md:w-[30%] w-full h-auto'>
           <label htmlFor="" className='block py-2 text-[14px] md:text-[16px]'>name</label>
           <input type="text" className='w-full h-[2rem] rounded-[1rem]  px-[0.5rem] text-black'/>

           </div>
           <div className='md:w-[30%] w-full h-auto'>
           <label htmlFor="" className='block py-2 w-auto text-[14px] md:text-[16px]'>email</label>
           <input type="email" className='w-full h-[2rem] rounded-[1rem] px-[0.5rem] text-black'/>

           </div>  
           <div className='md:w-[30%] w-full h-auto'>
           <label htmlFor="" className='block py-2 text-[14px] md:text-[16px]'>phone number</label>
           <input type="number" className='w-full h-[2rem] rounded-[1rem] px-[0.5rem] text-black'/>

           </div>
           <div className='md:w-[30%] w-full h-auto'>
           <label htmlFor="" className='block py-2 text-[14px] md:text-[16px]'>address</label>
           <input type="text" className='w-full h-[2rem] rounded-[1rem] px-[0.5rem] text-black'/>

           </div>

           <div className=' md:w-[30%] w-full h-auto'>
           <label htmlFor="" className='block py-2 text-[14px] md:text-[16px]'>date</label>
           <input type="date" className='w-full h-[2rem] rounded-[1rem] px-[0.5rem] text-black'/>

           </div>

           <div className='md:w-[30%] w-full h-auto'>
           <label htmlFor="" className='block py-2 text-[14px] md:text-[16px]'>budget</label>
           <input type="number" className='w-full h-[2rem] rounded-[1rem] px-[0.5rem] text-black'/>

           </div>

          
        
          </div>

<div className='w-[90%] h-[2.5rem] rounded-[2rem] capitalize'>


          <button className=' inline-block border w-[8rem] bg-white text-black h-[2.5rem] rounded-[2rem] capitalize'>submit</button>

</div>


        </div>





      </div>

    </header>

  );
};

export default Navbar;
