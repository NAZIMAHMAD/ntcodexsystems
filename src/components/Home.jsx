import React, { useState } from 'react'
import { GrInstagram } from "react-icons/gr";
import { PiFacebookLogoBold } from "react-icons/pi";
import { SiWhatsapp } from "react-icons/si";
import { IoArrowForward } from "react-icons/io5";
import abt from '../assets/abt.jpg'
import webLogo from '../assets/web1.png'
import phone from '../assets/phone.png';
import dig from '../assets/dig.png';
import ui from '../assets/ui.png';
import vid from '../assets/vid.mp4';




const Home = () => {
  
  
  
  
  
  
  return (

    <>

      {/* hero section */}

      <section className='relative top-0 left-0  h-screen bg-black  flex-col md:flex-row w-full text-white flex justify-center items-center'>


        <div className='w-[80%]  md:w-[50%] text-center capitalize flex justify-center items-center flex-col gap-[1rem]'>
          <p className='md:text-[49px] text-[28px] font-bold leading-[1.5] md:leading-[1.4]' ><span className='text-green-500 md:text-[49px] text-[28px]  ' style={{ fontFamily: 'Orbitron, sans-serif' }}>software development right touched</span>  with ntcodex systems in india  </p>
          <h1 className='md:text-[18px] font-[400] leading-[1.75] text-[16px] text-gray-100 w-[90%] md:w-[80%]' style={{ fontFamily: 'Nunito, sans-serif' }}>best website development services in india can make right success in business</h1>


          <button className='w-[12rem] h-[3rem] capitalize bg-transparent border-[1px] text-[17px] md:text-[18px]  font-normal rounded-[2rem] border-gray-500 ' >Get in touch <IoArrowForward className='inline-block text-green-800 text-[18px]' />
          </button>
        </div>

        <div className=' flex justify-start items-start gap-6 md:flex-col flex-row  text-green-500  text-[25px] rounded  md:relative md:left-[11rem] relative left-0 top-10 md:top-0' >

          <div >
            <GrInstagram className="" />

          </div>

          <div >
            <PiFacebookLogoBold />

          </div>

          <div>
            <SiWhatsapp />

          </div>



        </div>




      </section >

      {/* success metrics desktop */}

      < section className={` border-t-[1px] hidden   bg-green-500 border-gray-700 md:flex justify-center items-center h-auto md:py-[1rem] py-[1rem]   `}>

        <div className='m-auto w-[80%] md:w-[50%] flex justify-between items-center h-auto capitalize z-10'>

          <div className=' text-center w-auto h-auto'>
            <p className='font-semibold text-black text-[16px]' style={{
              fontFamily: "Bona Nova SC, serif"
            }}>clients</p>
            <p className='md:text-[32px] font-bold text-black ' >33+</p>
          </div>

          <div className='  text-center'>
            <p className='font-semibold text-black text-[16px]' style={{
              fontFamily: "Bona Nova SC, serif"
            }}>success</p>
            <p className='md:text-[32px] font-bold text-black'>31+</p>
          </div>

          <div className='  text-center'>
            <p className='font-semibold text-black text-[16px]' style={{
              fontFamily: "Bona Nova SC, serif"
            }}>serives</p>
            <p className='md:text-[32px] font-bold text-black'>24/7</p>
          </div>

          <div className='  text-center'>
            <p className='font-semibold text-black text-[16px]' style={{
              fontFamily: "Bona Nova SC, serif"
            }}>enlishment</p>
            <p className='md:text-[32px] font-bold text-black'>2024</p>
          </div>

        </div>


      </section >


      {/* about us section */}

      <div className=' z-30 py-[4rem] flex justify-center items-center bg-white  ' >


        <div className='flex justify-between items-center w-[100%]  md:w-[80%] gap-8 flex-col md:flex-row'>


          <div className=' md:w-[50%] w-[80%] m-auto  h-full capitalize flex justify-start items-start flex-col gap-5'>
            <p className='md:text-[18px] text-[16px]   font-bold' style={{
              fontFamily: "Nanum Myeongjo, serif"
            }}>about us</p>
            <h2 className='md:text-[32px] text-[28px] font-bold md:leading-[1.2] leading-[1.4]  ' >emerging brand to make your success   <span className='text-green-500'>for best mobile app development services in india </span></h2>
            <p style={{ fontFamily: 'Nunito, sans-serif' }} className='leading-[1.75] font-normal  text-gray-700 text-[16px] md:text-[16px]'>emerging the best software development company in india , helped them small and large business their success, and established on 2024, and we used the core development services.</p>
            <button className='w-[10rem] h-[3rem] text-[16px]  md:text-[14px] border-gray-400 rounded-[5rem] font-normal border-[1px] capitalize ' style={{ fontFamily: 'Rubik, sans-serif' }}>know more </button>
          </div>


          <div className='md:w-[50%] w-[80%] h-[15rem] md:h-[27rem] rounded-[1rem]     '>


            <img src={abt} className='h-full w-full rounded-[1rem]' />


          </div>


        </div>





      </div >


      {/* services section */}

      <section className='bg-black py-[4rem] h-auto'>

        <div className='w-[80%]    h-auto m-auto gap-[3rem] flex justify-between flex-col-reverse items-center  md:flex-row'>

          <div className='md:w-[60%] w-[100%]   h-auto flex justify-between flex-wrap gap-3  md:flex-row flex-col '>

            <div className='md:w-[19rem] md:h-[16rem] h-[18rem] bg-black text-white flex justify-center items-center flex-col text-center px-3 border-[1px] border-gray-700 capitalize rounded'>

              <img src={webLogo} alt="best software company in india" className='md:w-[3rem] md:h-[3rem] w-[5rem]' />
              <p className='font-bold pt-3 text-white text-[20px]' style={{ fontFamily: 'Nunito, sans-serif' }}>website development</p>
              <p className='text-[12px] pt-2 leading-[1.75] font-normal  text-gray-100' style={{ fontFamily: 'Nunito, sans-serif' }}>best website development in india can lead the many customers for your business, and hit the target audiance 
              </p>

            </div>

            <div className='md:w-[19rem] md:h-[16rem] h-[18rem] bg-black text-white flex justify-center items-center flex-col text-center px-3 border-[1px] border-gray-700 capitalize rounded'>

              <img src={phone} alt="best software company in india" className='md:w-[3rem] md:h-[3rem] w-[5rem]' />
              <p className='font-bold pt-3 text-white text-[20px] ' style={{ fontFamily: 'Nunito, sans-serif' }}> mobile app  development</p>
              <p className='text-[12px] pt-2 leading-[1.75] font-normal text-gray-100' style={{ fontFamily: 'Nunito, sans-serif' }}>we deliver the all cross platform services android and ios mobile application services in india.
              </p>

            </div>

            <div className='md:w-[19rem] md:h-[16rem] h-[18rem] bg-black text-white flex justify-center items-center flex-col text-center px-3 border-[1px] border-gray-700 capitalize rounded'>

              <img src={dig} alt="best software company in india" className='md:w-[3rem] md:h-[3rem] w-[5rem]' />
              <p className='font-bold pt-3 text-white text-[20px]' style={{ fontFamily: 'Nunito, sans-serif' }}>Digital marketing</p>
              <p className='text-[12px] pt-2 leading-[1.75] font-normal text-gray-100' style={{ fontFamily: 'Nunito, sans-serif' }}>get your business ready with us through our digital marketing services in india.
              </p>

            </div>

          

            <div className='md:w-[19rem] md:h-[16rem] h-[18rem] bg-black text-white flex justify-center items-center flex-col text-center px-3 border-[1px] border-gray-700 capitalize rounded'>

              <img src={ui} alt="best software company in india" className='md:w-[3rem] md:h-[3rem] w-[5rem]' />
              <p className='font-bold pt-3 text-white  text-[20px]' style={{ fontFamily: 'Nunito, sans-serif' }}>website design</p>
              <p className='text-[12px] pt-2 leading-[1.75]  font-normal text-gray-100' style={{ fontFamily: 'Nunito, sans-serif' }}>change your thoughts idea with us to make into reality for website desiging in india.
              </p>

            </div>



          </div>

          <div className='md:w-[40%] w-[100%]  h-auto gap-5  flex justify-start items-start flex-col capitalize'>
            <p className='md:text-[18px] text-[16px]  text-white font-bold' style={{
              fontFamily: "Nanum Myeongjo, serif"
            }}>our services</p>
            <h3 className='md:text-[32px] text-[28px] text-white leading-[1.4] md:leading-[1.4]  font-bold ' >are you excited to grow your business    <span className='text-green-500'>through our services ?.</span></h3>
            <p style={{ fontFamily: 'Nunito, sans-serif' }} className='leading-[1.75]   text-gray-100 text-[16px] md:text-[16px] font-normal'>focused to track small and large business through our services in order of website development , mobile application development, digital marketing , and email design.</p>
            <button className='w-[10rem] h-[3rem] text-[14px] text-white rounded-[5rem]   md:text-[16px] font-normal border-[1px] capitalize border-gray-600' >explore more</button>
          </div>

        </div>

      </section>


      {/* video to discover with us */}


      <section className='bg-white h-auto  w-auto  flex justify-center items-center py-[4rem]'>

        <div className='w-[80%] h-auto  gap-[3rem] flex justify-center  items-center flex-col'>

          <div className=' md:flex justify-between items-center  h-auto flex-col md:flex-row w-full text-black md:gap-[3rem]  gap-[5rem] capitalize'>

            <div className='md:w-[40%] h-auto  w-full '>
              <h4 className='md:text-[32px] text-[28px] font-bold leading-[1.4] md:leading-[1.4]' >best digital marketing service in india to be <span className='text-green-500'>discovered us ?</span> </h4>
            </div>

            <div className='md:w-[60%] h-auto w-full pt-[2rem] md:py-[0rem]'>
              <p className='md:text-[16px] font-normal leading-[1.75] ' >
                best team with expected work, who solves your changelleges, and turn your idea into reality in india`s best software company.
              </p>
            </div>

          </div>


          <div className='md:h-[35rem]   h-[30rem] w-full rounded-[1rem] '>

            <video className='md:h-full md:w-full  h-[30rem] rounded-[1rem] object-cover' loop
              autoPlay
              muted>

              <source src={vid} />

            </video>

          </div>

          <div className='md:w-[50%] w-full h-auto text-center  flex justify-center items-center flex-col gap-[1rem]'>


            <p className='text-[16px] font-normal leading-[1.75] ' style={{ fontFamily: 'Nunito, sans-serif' }}>you can explore more with us (website development , mobile application development, digital marketing, and website desiging) to expand your thinking boundaries , we are the company who focus on quality of task for our customers, and deliver the expected work, and solved your changelleges thourgh services.</p>

            <button className=' border-gray-400 border-[1px] w-[10rem] h-[3rem] rounded-[2rem] text-[16px] '>know more</button>
          </div>

        </div>


      </section>

      {/* metrics services  for mobile view */}

      
      < section className=" md:hidden block  bg-green-500 border-gray-700 flex justify-center items-center h-auto md:py-[1rem] py-[3rem]  ">

<div className='m-auto w-[90%] md:w-[50%] flex justify-between flex-col gap-[2rem] items-center h-auto capitalize z-10'>

  <div className=' text-center w-auto h-auto'>
    <p className='font-semibold text-black text-[28px]' style={{
      fontFamily: "Bona Nova SC, serif"
    }}>client</p>
    <p className='md:text-[32px] font-bold text-black ' >300+</p>
  </div>

  <div className='  text-center'>
    <p className='font-semibold text-black text-[28px]' style={{
      fontFamily: "Bona Nova SC, serif"
    }}>success</p>
    <p className='md:text-[32px] font-bold text-black'>300+</p>
  </div>

  <div className='  text-center'>
    <p className='font-semibold text-black text-[28px]' style={{
      fontFamily: "Bona Nova SC, serif"
    }}>serives</p>
    <p className='md:text-[32px] font-bold text-black'>24/7</p>
  </div>

  <div className='  text-center'>
    <p className='font-semibold text-black text-[28px]' style={{
      fontFamily: "Bona Nova SC, serif"
    }}>enlishment</p>
    <p className='md:text-[32px] font-bold text-black'>2020</p>
  </div>

</div>
</section>


      {/* client review day */}

      <section className='bg-white md:bg-black md:text-white py-[4rem] h-auto flex justify-center items-center'>

        <div className=' w-[80%] h-auto text-white flex justify-between flex-col md:flex-row gap-[3rem] items-center'>

          <div className='md:w-[50%] w-full h-[15rem] md:h-[27rem]  rounded-[1rem]'>

            <img src={abt} alt="" className=' rounded-[1rem] h-full' />

          </div>


          <div className='md:w-[50%] w-full h-auto capitalize  text-black md:text-white flex justify-start items-start flex-col gap-[2rem]'>

            <p>why choose us</p>

            <h5 className='text-[28px] md:text-[32px] font-bold leading-[1.4] md:leading-[1.4] capitalize' ><span className='text-green-500'>33+ happy client </span>said to us , you are satisfied </h5>
            <p className='md:text-[16px] text-[16px] leading-[1.75]'>why customers believe on ntcodex systems , we foucus their needed and delives expected work, and our team makes believe to do unbelivebale to beliveabale job. </p>

          </div>

        </div>

      </section>

{/* our business partner */}

<section className=' h-auto bg-white w-full  flex justify-center items-center  py-[1rem]'>


<div className='md:w-[50%]  w-[80%]  flex justify-between gap-[2rem] items-center text-black flex-col '>


  <h6 className='text-[28px] md:text-[32px] font-bold capitalize '>
    our partner
  </h6>

  <div className=' flex justify-between gap-[3rem] overflow-x-auto whitespace-nowrap scrollbar-hide w-full'>

    <div className=' w-[8rem] h-[5rem] flex-shrink-0' ><img src="https://news.clemson.edu/wp-content/uploads/2020/12/Deloitte-Logo-FEATURE.jpg" className='h-full w-full' alt="" /></div>

    <div className=' w-[8rem] h-[5rem] flex-shrink-0' ><img src="https://images.assettype.com/freepressjournal%2F2020-05%2F12b3ce04-22fa-422c-a837-8cc770de0303%2F2252E643_E250_4DFB_A571_75FDE161B087.jpeg?w=1200" className='h-full w-full' alt="" /></div>

    <div className=' w-[8rem] h-[5rem] flex-shrink-0' ><img src="https://download.logo.wine/logo/NTT_Data/NTT_Data-Logo.wine.png" className='h-full w-full' alt="" /></div>

    <div className=' w-[8rem] h-[5rem] flex-shrink-0' ><img src="https://3.bp.blogspot.com/-Qj7v6xCLhpc/WjmJaYYwv_I/AAAAAAAAAH4/-1NfAGzSx9A79pCTbrwLAeMPOPKYQRHDgCLcBGAs/s640/infinix-logo.jpg" className='h-full w-full' alt="" /></div>
   
  </div>

  </div>

</section>


    </>




  )
}

export default Home
