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


        <div className='w-[90%]  md:w-[60%] text-center capitalize flex justify-center items-center flex-col gap-[2rem]'>
          <h1 className='md:text-[70px] text-[32px] font-bold leading-[1.5] md:leading-[1.1]' ><span className='text-green-500 md:text-[7rem] text-[3rem]  ' style={{ fontFamily: 'Orbitron, sans-serif' }}>ultimate touch</span> with quality </h1>
          <p className='md:text-[18px] font-[400] leading-[1.75] text-[16px] text-gray-100' style={{ fontFamily: 'Nunito, sans-serif' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nobis vel tempore pariatur officia quam minus itaque, !</p>


          <button className='w-[10rem] h-[3rem] bg-transparent border-[1px] text-[16px] md:text-[16px]  font-normal rounded-[2rem] border-gray-500 ' >Get in touch <IoArrowForward className='inline-block' />
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

      < section className={` border-t-[1px] hidden md:block  bg-green-500 border-gray-700 flex justify-center items-center h-auto md:py-[1rem] py-[1rem]   `}>

        <div className='m-auto w-[90%] md:w-[50%] flex justify-between items-center h-auto capitalize z-10'>

          <div className=' text-center w-auto h-auto'>
            <p className='font-semibold text-black text-[16px]' style={{
              fontFamily: "Bona Nova SC, serif"
            }}>client</p>
            <p className='md:text-[32px] font-bold text-black ' >300+</p>
          </div>

          <div className='  text-center'>
            <p className='font-semibold text-black text-[16px]' style={{
              fontFamily: "Bona Nova SC, serif"
            }}>success</p>
            <p className='md:text-[32px] font-bold text-black'>300+</p>
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
            <p className='md:text-[32px] font-bold text-black'>2020</p>
          </div>

        </div>


      </section >


      {/* about us section */}

      <div className=' z-30 py-[4rem] flex justify-center items-center bg-white  ' >


        <div className='flex justify-between items-center w-[100%]  md:w-[90%] gap-8 flex-col md:flex-row'>


          <div className=' md:w-[60%] w-[90%] m-auto  h-full capitalize flex justify-start items-start flex-col gap-5'>
            <p className='md:text-[18px] text-[16px]   font-bold' style={{
              fontFamily: "Nanum Myeongjo, serif"
            }}>about us</p>
            <h3 className='md:text-[32px] text-[28px] font-bold leading-[1.4] md:leading-[1.4] ' style={{
              fontFamily: "Nanum Myeongjo, serif"
            }}>transform business with <span className='text-green-500'>digital innovative solutions</span></h3>
            <p style={{ fontFamily: 'Nunito, sans-serif' }} className='leading-[1.75] font-normal  text-gray-700 text-[16px] md:text-[16px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque beatae aperiam sequi vel, reprehenderit cum illo ut iure ducimus animi? Odit dignissimos dicta porro, dolorum atque eligendi accusamus nesciunt asperiores? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis voluptates laboriosam veniam impedit ducimus reiciendis tempora vero! Autem perferendis natus consequuntur! Reiciendis incidunt qui ad optio quisquam eveniet accusantium. Recusandae.</p>
            <button className='w-[10rem] h-[3rem] text-[16px]  md:text-[14px] border-gray-400 rounded-[5rem] font-normal border-[1px] capitalize ' style={{ fontFamily: 'Rubik, sans-serif' }}>know more </button>
          </div>


          <div className='md:w-[40%] w-[90%] h-[15rem] md:h-[27rem] rounded-[1rem]     '>


            <img src={abt} className='h-full w-full rounded-[1rem]' />


          </div>


        </div>





      </div >


      {/* services section */}

      <section className='bg-black py-[4rem] h-auto'>

        <div className='w-[90%]    h-auto m-auto gap-[3rem] flex justify-between flex-col-reverse items-center  md:flex-row'>

          <div className='md:w-[50%] w-[100%]   h-auto flex justify-between flex-wrap gap-3  md:flex-row flex-col '>

            <div className='md:w-[18rem] md:h-[16rem] h-[18rem] bg-black text-white flex justify-center items-center flex-col text-center px-3 border-[1px] border-gray-700 capitalize rounded'>

              <img src={webLogo} alt="best software company in india" className='md:w-[3rem] md:h-[3rem] w-[5rem]' />
              <h4 className='font-bold pt-3 text-white text-[20px]' style={{ fontFamily: 'Nunito, sans-serif' }}>website development</h4>
              <p className='text-[12px] pt-2 leading-[1.75] font-normal  text-gray-100' style={{ fontFamily: 'Nunito, sans-serif' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint placeat, vel ea nemo dolores, modi inventore quis odit, tenetur molestias asperiores optio! Cumque dolorem sapiente expedita dolores vel optio! Earum.
              </p>

            </div>

            <div className='md:w-[18rem] md:h-[16rem] h-[18rem] bg-black text-white flex justify-center items-center flex-col text-center px-3 border-[1px] border-gray-700 capitalize rounded'>

              <img src={dig} alt="best software company in india" className='md:w-[3rem] md:h-[3rem] w-[5rem]' />
              <h4 className='font-bold pt-3 text-white text-[20px]' style={{ fontFamily: 'Nunito, sans-serif' }}>Digital marketing</h4>
              <p className='text-[12px] pt-2 leading-[1.75] font-normal text-gray-100' style={{ fontFamily: 'Nunito, sans-serif' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint placeat, vel ea nemo dolores, modi inventore quis odit, tenetur molestias asperiores optio! Cumque dolorem sapiente expedita dolores vel optio! Earum.
              </p>

            </div>

            <div className='md:w-[18rem] md:h-[16rem] h-[18rem] bg-black text-white flex justify-center items-center flex-col text-center px-3 border-[1px] border-gray-700 capitalize rounded'>

              <img src={phone} alt="best software company in india" className='md:w-[3rem] md:h-[3rem] w-[5rem]' />
              <h4 className='font-bold pt-3 text-white text-[20px] ' style={{ fontFamily: 'Nunito, sans-serif' }}> mobile app  development</h4>
              <p className='text-[12px] pt-2 leading-[1.75] font-normal text-gray-100' style={{ fontFamily: 'Nunito, sans-serif' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint placeat, vel ea nemo dolores, modi inventore quis odit, tenetur molestias asperiores optio! Cumque dolorem sapiente expedita dolores vel optio! Earum.
              </p>

            </div>

            <div className='md:w-[18rem] md:h-[16rem] h-[18rem] bg-black text-white flex justify-center items-center flex-col text-center px-3 border-[1px] border-gray-700 capitalize rounded'>

              <img src={ui} alt="best software company in india" className='md:w-[3rem] md:h-[3rem] w-[5rem]' />
              <h4 className='font-bold pt-3 text-white  text-[20px]' style={{ fontFamily: 'Nunito, sans-serif' }}>website design</h4>
              <p className='text-[12px] pt-2 leading-[1.75]  font-normal text-gray-100' style={{ fontFamily: 'Nunito, sans-serif' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint placeat, vel ea nemo dolores, modi inventore quis odit, tenetur molestias asperiores optio! Cumque dolorem sapiente expedita dolores vel optio! Earum.
              </p>

            </div>



          </div>

          <div className='md:w-[50%] w-[100%]  h-auto gap-5  flex justify-start items-start flex-col capitalize'>
            <p className='md:text-[18px] text-[16px]  text-white font-bold' style={{
              fontFamily: "Nanum Myeongjo, serif"
            }}>our services</p>
            <h2 className='md:text-[32px] text-[28px] text-white leading-[1.4] md:leading-[1.4]  font-bold ' style={{
              fontFamily: "Nanum Myeongjo, serif"
            }}>we can help you to solve your  <span className='text-green-500'> problem thorugh our serives</span></h2>
            <p style={{ fontFamily: 'Nunito, sans-serif' }} className='leading-[1.75]   text-gray-100 text-[16px] md:text-[16px] font-normal'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque beatae aperiam sequi vel, reprehenderit cum illo ut iure ducimus animi? Odit dignissimos dicta porro, dolorum atque eligendi accusamus nesciunt asperiores? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis voluptates laboriosam veniam impedit ducimus reiciendis tempora vero! Autem perferendis natus consequuntur! Reiciendis incidunt qui ad optio quisquam eveniet accusantium. Recusandae.</p>
            <button className='w-[10rem] h-[3rem] text-[14px] text-white rounded-[5rem]   md:text-[16px] font-normal border-[1px] capitalize border-gray-600' >more services</button>
          </div>

        </div>

      </section>


      {/* video to discover with us */}


      <section className='bg-white h-auto  w-auto  flex justify-center items-center py-[4rem]'>

        <div className='w-[90%] h-auto  gap-[3rem] flex justify-center  items-center flex-col'>

          <div className=' md:flex justify-between items-center  h-auto flex-col md:flex-row w-full text-black md:gap-[3rem]  gap-[5rem] capitalize'>

            <div className='md:w-[30%] h-auto  w-full '>
              <h4 className='md:text-[32px] text-[28px] font-bold leading-[1.4] md:leading-[1.4]' style={{
                fontFamily: "Nanum Myeongjo, serif"
              }}>watch the video to <span className='text-green-500'>discover us ?</span> </h4>
            </div>

            <div className='md:w-[70%] h-auto w-full pt-[2rem] md:py-[0rem]'>
              <p className='md:text-[16px] font-normal leading-[1.75] ' style={{ fontFamily: 'Nunito, sans-serif' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor molestias nostrum at cumque illo vero natus mollitia sit saepe, explicabo hic ab voluptates ipsam dolorum, ad tempore sed suscipit. Quisquam.</p>
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


            <p className='text-[16px] font-normal leading-[1.75] ' style={{ fontFamily: 'Nunito, sans-serif' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi voluptates deserunt, odit eligendi id corrupti ipsa, eos, distinctio sed veniam itaque fugiat voluptatum repudiandae vero iure delectus. Obcaecati, cupiditate asperiores!</p>

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

        <div className=' w-[90%] h-auto text-white flex justify-between flex-col md:flex-row gap-[3rem] items-center'>

          <div className='md:w-[40%] w-full h-[15rem] md:h-[20rem]  rounded-[1rem]'>

            <img src={abt} alt="" className=' rounded-[1rem] h-full' />

          </div>


          <div className='md:w-[50%] w-full h-auto  text-black md:text-white flex justify-start items-start flex-col gap-[2rem]'>

            <h5 className='text-[28px] md:text-[32px] font-bold leading-[1.4] md:leading-[1.4] capitalize' style={{
              fontFamily: "Nanum Myeongjo, serif"
            }}><span className='text-green-500'>290+ happy client </span>said to us , you are satisfied</h5>
            <p className='md:text-[16px] text-[16px] leading-[1.75]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore tempore suscipit doloremque ducimus commodi, soluta iste itaque deleniti quas culpa! Cupiditate porro in harum sint repudiandae quod nobis dolore ea.</p>

          </div>

        </div>

      </section>

{/* our business partner */}

<section className=' h-auto bg-white w-full  flex justify-center items-center  py-[1rem]'>


<div className='md:w-[50%]  w-[90%]  flex justify-between gap-[2rem] items-center text-black flex-col '>


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
