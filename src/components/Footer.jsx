import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.jpg'
import { FaFacebook } from "react-icons/fa";
import { PiInstagramLogoBold } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";







const Footer = () => {
  return (
    <>

<footer className='bg-black h-auto   flex justify-center items-center py-[3rem]   '>

  <div className='flex justify-between flex-col md:flex-row  w-[80%] h-auto gap-[2rem] capitalize '>

    <div className='md:w-[30%] h-auto w-full text-white'>
<img src={logo} alt="" className='w-[8rem] h-[5rem] '/>
<p className='pt-[1rem] text-white'style={{
                fontFamily: "Nanum Myeongjo, serif"
              }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae et error ab ducimus eaque nesciunt totam nulla, !</p>


<ul className='list-none text-white flex justify-start items-center gap-[1rem] mt-[1rem]'>


<span className='font-normal '>follow us</span>

<li className='text-[2rem]'>
<NavLink>
<FaFacebook />

</NavLink>
</li>

<li className='text-[2rem]'>

<NavLink>
<PiInstagramLogoBold />

</NavLink>

</li>


<li className='text-[2rem]'>

  <NavLink>
  <FaWhatsapp />

  </NavLink>

  </li>



</ul>

    </div>

    <div className=' md:w-[30%] w-full h-auto flex justify-between   gap-[2rem]'>

   

    <div className='w-[50%]  h-auto flex justify-start items-start  md:items-start flex-col  md:flex-row '>
      <ul style={{ fontFamily: 'Nunito, sans-serif' }} className='text-white'>

        <li className='text-[20px]' style={{
                fontFamily: "Nanum Myeongjo, serif"
              }}>company</li>
        <li className='pt-[1rem]'>home</li>
        <li className='pt-[0.5rem]' >about</li>

        <li className='pt-[0.5rem]' >services</li>
        <li className='pt-[0.5rem]'>gallery</li>

        <li className='pt-[0.5rem]'>blog</li>
        <li className='pt-[0.5rem]'>contact</li>
      </ul>

      </div>

    <div className='w-[50%] h-auto flex justify-start md:items-start items-start flex-col md:flex-row '>
    <ul style={{ fontFamily: 'Nunito, sans-serif' }} className='text-white'>

<li className='text-[20px]' style={{
                fontFamily: "Nanum Myeongjo, serif"
              }}>pricing</li>
<li className='pt-[1rem]'>project</li>
<li className='pt-[0.5rem]'>last workig</li>
<li className='pt-[0.5rem]'>client</li>
<li className='pt-[0.5rem]'>date</li>
</ul>

    </div>

    </div>




    <div className='w-auto h-auto flex justify-start md:items-start flex-col  md:flex-row '>
    <ul style={{ fontFamily: 'Nunito, sans-serif' }} className='text-white'>



<li>

  <p className='text-[20px] ' style={{ fontFamily: "Nanum Myeongjo, serif"}}>subscribe our news letter
  </p>
</li>

<li>
<input type="text" placeholder='Enter the email ' className='px-[1rem] h-[3rem] rounded-[5rem] mt-[1rem]'/>

</li>




<li className='text-[20px] pt-[2rem] ' style={{
                fontFamily: "Nanum Myeongjo, serif"
              }}>quick contact</li>
<li className='pt-[1rem] '><NavLink>
<IoIosCall className='inline-block '/>

9113499324
</NavLink></li>
<li className='pt-[0.5rem]'><NavLink>
<MdOutlineEmail className='inline-block'/>

zk8052272@gmail.com
</NavLink></li>
<li className='pt-[0.5rem]'><IoLocationOutline className='inline-block'/>
: hyderabad telangana near mehadipatnam </li>
</ul>
    </div>


  </div>

</footer>

<section className='flex  bg-black justify-center w-full h-auto items-center    py-[1rem] capitalize'>
  <div className='w-[80%] h-auto text-white'> <p style={{
                fontFamily: "Nanum Myeongjo, serif"
              }}>copyright 2024 @ ntcodex systems : designed by ntcodex systems</p></div>
</section>



    </>
  )
}

export default Footer
