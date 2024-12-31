import React from 'react';
import { motion } from 'framer-motion';
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
import heroV from '../assets/heroV.mp4'
import meeting2 from '../assets/meeting2.jpg'
import aboutus from '../assets/aboutus.jpg'
import world from '../assets/world.jpg'
import woman from '../assets/woman.jpg'
import { Helmet } from 'react-helmet';



const Home = () => {





  return (

    <>

<Helmet>

<title>best website development | app development services in india</title>
<meta name="description" content="are you looking website development & app development services in india ? we can grow your business through our services, and our expert team can lead your business by digital marketing in india " />

<meta name="keywords" content="website development , app development , best software development services in india, digital marketing services , digital marketing services in india " />
<meta name="author" content="nazim ahmad founder of ntcodex systems " />
<link rel="canonical" href="https://ntcodexsystems.tech/" />
<meta name="robots" content="index, follow" />
<meta name="googlebot" content="index, follow" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<script type="application/ld+json">
  {`
    {
      "@context": "https://schema.org",
      "@type": " software company ",
      "name": "ntcodex systems",
      "url": "https://ntcodexsystems.tech/",
      "logo": "https://ntcodexsystems.tech/assets/logo.jpg",
      "description": "",
      "address": {
     "@type": "PostalAddress",
"streetAddress": " jehanabad bihar 804408",
"addressLocality": "jehanabad",
"addressRegion": "Bihar",
"postalCode": "804408",
"addressCountry": "India"
      },
      "contactPoint": {
         "@type": "ContactPoint",
"telephone": "+91 9113499324",
"contactType": "customer "
      },
      "sameAs": [
       "https://www.instagram.com/ntcodexsystems_website_app_seo?igsh=N2szcXR5c3ozNGlr",
"https://www.facebook.com/profile.php?id=61563863893715&mibextid=ZbWKwL",
"https://wa.me/919113499324"

      ]
    }
  `}
</script>
</Helmet>


      {/* hero section */}

      <section className='absolute top-0 left-0   h-screen md:h-[50vh] lg:h-screen  flex-col md:flex-row w-full text-white flex justify-center items-center'>


        <video
          src={heroV} title='best website development services in india '
          className="absolute top-0 left-0 w-full md:h-[50vh] lg:h-screen h-screen object-cover"
          muted
          loop
          autoPlay
        ></video>

        <div className='w-full h-screen md:h-[50vh] lg:h-screen opacity-50 bg-black absolute top-0 left-0'>

        </div>


        <motion.div className='w-[80%] z-[1] h-auto absolute md:top-[35%] lg:top-auto  lg:w-[50%] md:w-[80%] text-start capitalize flex justify-start md:justify-center md:items-center md:text-center items-start flex-col gap-[1rem]' initial={{ opacity: 3, y: -100 }}
          whileInView={{ opacity: 40, y: 0 }}
          transition={{ duration: 0.2 }} >
          <p className='lg:text-[49px] md:text-[32px] text-[28px] font-bold leading-[1.5] md:leading-[1.4]' ><span className='text-green-500 lg:text-[49px] md:text-[32px] text-[28px]  ' style={{ fontFamily: 'Orbitron, sans-serif' }}>software development right touched</span>  with ntcodex systems in india.  </p>
          <h1 className='md:text-[18px] font-[400] leading-[1.75] text-[16px] text-gray-100 w-[90%] md:w-[80%]' style={{ fontFamily: 'Nunito, sans-serif' }}>best website development services in india, can make right success in business.</h1>


          <button className='w-[12rem] bg-opacity-10 backdrop-blur-[2rem] h-[3rem] capitalize bg-transparent border-[1px] text-[17px] md:text-[18px]  font-normal rounded-[2rem] border-gray-500 '  >Get started now <IoArrowForward className='inline-block text-green-800 text-[18px]' />
          </button>

        </motion.div>

        <div className='  justify-start items-start  hidden gap-6 md:flex-col flex-row md:hidden lg:flex text-green-500  text-[25px] rounded  lg:relative lg:left-[30rem]' >

          <div>

            <a href="https://www.instagram.com/ntcodexsystems_website_app_seo?igsh=N2szcXR5c3ozNGlr" title='ntcodex systems in india , best website development , app development , digital marketing , website design in india'>
            <GrInstagram className="" />

            </a>

          </div>

          <div >

            <a href="https://www.facebook.com/profile.php?id=61563863893715&mibextid=ZbWKwL" title='ntcodex systems in india , best website development , app development , digital marketing , website design in india'>
            <PiFacebookLogoBold />

            </a>

          </div>

          <div>

            <a href="https://wa.me/919113499324" title='ntcodex systems in india , best website development , app development , digital marketing , website design in india'>
            <SiWhatsapp />

            </a>

          </div>



        </div>




      </section >

      {/* success metrics desktop */}

      < section className={` border-t-[1px] relative top-0 left-0 md:mt-[40vh] lg:mt-[92vh] hidden  bg-green-500 border-gray-700 md:flex justify-center items-center h-auto md:py-[1rem] py-[1rem]`}>

        <div className='m-auto w-[80%] md:w-[50%] flex justify-between items-center h-auto capitalize z-10'>

          <motion.div className=' text-center w-auto h-auto' initial={{ opacity: 3, y: 60 }}
            whileInView={{ opacity: 40, y: 0 }} // Trigger when in view
            transition={{ duration: 0.5 }} >
            <p className='font-semibold text-black text-[16px]' style={{
              fontFamily: "Bona Nova SC, serif"
            }}>clients</p>
            <p className='md:text-[32px] font-bold text-black ' >39+</p>
          </motion.div>

          <motion.div className='  text-center' initial={{ opacity: 3, y: 60 }}
            whileInView={{ opacity: 40, y: 0 }} // Trigger when in view
            transition={{ duration: 0.5 }} >
            <p className='font-semibold text-black text-[16px]' style={{
              fontFamily: "Bona Nova SC, serif"
            }}>expericance</p>
            <p className='md:text-[32px] font-bold text-black'>5+</p>
          </motion.div>

          <motion.div className='  text-center' initial={{ opacity: 3, y: 60 }}
            whileInView={{ opacity: 40, y: 0 }} // Trigger when in view
            transition={{ duration: 0.5 }}>
            <p className='font-semibold text-black text-[16px]' style={{
              fontFamily: "Bona Nova SC, serif"
            }}>serives</p>
            <p className='md:text-[32px] font-bold text-black'>24/7</p>
          </motion.div>

          <motion.div className='  text-center' initial={{ opacity: 3, y: 60 }}
            whileInView={{ opacity: 40, y: 0 }} // Trigger when in view
            transition={{ duration: 0.5 }}>
            <p className='font-semibold text-black text-[16px]' style={{
              fontFamily: "Bona Nova SC, serif"
            }}>enlishment</p>
            <p className='md:text-[32px] font-bold text-black'>2024</p>
          </motion.div>

        </div>


      </section >


      {/* about us section */}

      <div className=' z-30 py-[4rem] flex justify-center items-center bg-white mt-[90vh] md:mt-auto  lg:mt-auto' >


        <div className='flex justify-between items-center w-[100%]  md:w-[80%] gap-8 flex-col md:flex-row'>


          <motion.div className=' md:w-[50%] w-[80%] m-auto  h-full capitalize flex justify-start items-start flex-col gap-5' initial={{ x: -250 }}
            whileInView={{ x: 0 }} // Trigger when in view
            transition={{ duration: 0.5 }}
            style={{
              overflowX: 'hidden', // Prevent horizontal scroll
            }}

          >
            <p className='md:text-[18px] text-[16px] text-neutral-900   font-bold' style={{
              fontFamily: "Nanum Myeongjo, serif"
            }}>about us</p>
            <h2 className='md:text-[32px] text-[28px] font-bold md:leading-[1.4] leading-[1.4]  ' >emerging brand to make your success ,  <span className='text-green-500'>for best mobile app development services in india. </span></h2>
            <p style={{ fontFamily: 'Nunito, sans-serif' }} className='leading-[1.75] font-normal text-neutral-800 text-[16px] md:text-[16px]'>emerging the best software development company in india , helped them small and large business their success, and established on 2024, and we used the core development services.</p>
            <button className='w-[10rem] h-[3rem] text-[16px]  md:text-[14px] border-gray-400 rounded-[5rem] font-normal border-[1px] capitalize ' style={{ fontFamily: 'Rubik, sans-serif' }}>know more </button>
          </motion.div>


          <div className='md:w-[50%] w-[80%] h-[23rem] lg:h-[22rem] md:h-[20rem]  rounded-[5rem] ' initial={{ opacity: 3, y: -60 }}
            whileInView={{ opacity: 40, y: 0 }}
            transition={{ duration: 0.2 }}>


            <img src={aboutus} className='h-full w-full rounded-[5rem]  object-cover ' alt='best software company in india' title='best software company in india , leading it company who provide top notch it services'/>


          </div>


        </div>





      </div >


      {/* services section */}

      <section className='bg-neutral-900 py-[4rem] h-auto'>

        <div className='w-[80%] h-auto m-auto gap-[3rem]  md:flex-col-reverse lg:flex-row  flex justify-between flex-col-reverse items-center '>

          <div className='lg:w-[60%] md:w-full w-[100%] gap-[1.2rem]  h-auto flex justify-between flex-wrap   md:flex-row flex-col '>

            <motion.div className='md:w-[48%] md:h-[16rem] h-[20rem] bg-black text-white flex justify-center items-center flex-col text-center px-3 border-[1px] border-gray-700 capitalize rounded' initial={{ opacity: 3, x: -250 }}
              whileInView={{ opacity: 10, x: 0 }} // Trigger when in view
              transition={{ duration: 0.5 }} style={{
                overflowX: 'hidden', // Prevent horizontal scroll
              }}>

              <img src={webLogo} alt="best software company in india" title='best software development in india , who provide wide range of it services such as website development , and app development in india' className='md:w-[3rem] md:h-[3rem] w-[5rem]' />
              <p className='font-bold pt-3 text-white text-[20px]' style={{ fontFamily: 'Nunito, sans-serif' }}>website development.</p>
              <p className='text-[12px] pt-2 leading-[1.75] font-normal  text-gray-100' style={{ fontFamily: 'Nunito, sans-serif' }}>best website development in india,  can lead the many customers for your business, and hit the target audiance.
              </p>

            </motion.div>

            <motion.div className='md:w-[48%] md:h-[16rem] h-[20rem] bg-black text-white flex justify-center items-center flex-col text-center px-3 border-[1px] border-gray-700 capitalize rounded' initial={{ opacity: 3, y: 250 }}
              whileInView={{ opacity: 10, y: 0 }} // Trigger when in view
              transition={{ duration: 0.5 }}>

              <img src={phone} alt="best software company in india" title='best mobile app development services in india' className='md:w-[3rem] md:h-[3rem] w-[5rem]' />
              <p className='font-bold pt-3 text-white text-[20px] ' style={{ fontFamily: 'Nunito, sans-serif' }}> mobile app  development.</p>
              <p className='text-[12px] pt-2 leading-[1.75] font-normal text-gray-100' style={{ fontFamily: 'Nunito, sans-serif' }}>we deliver the all cross platform services ,android and ios mobile application services in india.
              </p>

            </motion.div>

            <motion.div className='md:w-[48%] md:h-[16rem] h-[20rem] bg-black text-white flex justify-center items-center flex-col text-center px-3 border-[1px] border-gray-700 capitalize rounded' initial={{ opacity: 3, x: 250 }}
              whileInView={{ opacity: 10, x: 0 }} // Trigger when in view
              transition={{ duration: 0.5 }} style={{
                overflowX: 'hidden', // Prevent horizontal scroll
              }}>

              <img src={dig} alt="best software company in india" title='our expertised team , make your dream into reality' className='md:w-[3rem] md:h-[3rem] w-[5rem]' />
              <p className='font-bold pt-3 text-white text-[20px]' style={{ fontFamily: 'Nunito, sans-serif' }}>Digital marketing.</p>
              <p className='text-[12px] pt-2 leading-[1.75] font-normal text-gray-100' style={{ fontFamily: 'Nunito, sans-serif' }}>get your business ready with us through our, digital marketing services in india.
              </p>

            </motion.div>



            <motion.div className='md:w-[48%] md:h-[16rem] h-[20rem] bg-black text-white flex justify-center items-center flex-col text-center px-3 border-[1px] border-gray-700 capitalize rounded' initial={{ y: 250 }} whileInView={{ y: 0 }} transition={{ duration: 0.5 }}>

              <img src={ui} alt="best website development in india" title='best website development in india' className='md:w-[3rem] md:h-[3rem] w-[5rem]' />
              <p className='font-bold pt-3 text-white  text-[20px]' style={{ fontFamily: 'Nunito, sans-serif' }}>website design.</p>
              <p className='text-[12px] pt-2 leading-[1.75]  font-normal text-gray-100' style={{ fontFamily: 'Nunito, sans-serif' }}>change your thoughts idea with us to make into reality for website desiging in india.
              </p>

            </motion.div>



          </div>

          <motion.div className='lg:w-[40%]  md:w-full   w-[100%]  h-auto gap-5  flex justify-start items-start flex-col capitalize' initial={{ y: 250 }} whileInView={{ y: 0 }} transition={{ duration: 0.5 }}>
            <p className='md:text-[18px] text-[16px]  text-white font-bold' style={{
              fontFamily: "Nanum Myeongjo, serif"
            }}>our services</p>
            <h3 className='md:text-[32px] text-[28px] text-white leading-[1.4] md:leading-[1.4]  font-bold ' >are you excited to grow your business    <span className='text-green-500'>through our services ?.</span></h3>
            <p style={{ fontFamily: 'Nunito, sans-serif' }} className='leading-[1.75]   text-gray-100 text-[16px] md:text-[16px] font-normal'>focused to track small and large business through our services in order of website development , mobile application development, digital marketing , and email design.</p>
            <button className='w-[10rem] h-[3rem] text-[14px] text-white rounded-[5rem]   md:text-[16px] font-normal border-[1px] capitalize border-gray-600' >explore more</button>
          </motion.div>

        </div>

      </section>


      {/* our banner section */}

      <section className='w-full h-auto'>

        <div className='w-full h-[30rem] flex justify-between'>

          <div className='w-[50%] h-full'>
            <img src={woman} alt="best app development services in india" title='app development can make easy to reach your destination in india' className='w-full h-full object-cover ' />
          </div>

          <div className='w-[50%] h-full'>
            <img src={world} alt="best digital marketing services in india" title='best digital marketing services in india' className='w-full h-full object-cover' />
          </div>

        </div>

      </section>


      {/* video to discover with us */}


      <section className='bg-white h-auto  w-auto  flex justify-center items-center py-[4rem] '>

        <div className='w-[80%] h-auto  gap-[3rem] flex justify-center  items-center flex-col'>

          <div className=' md:flex justify-between items-center  h-auto flex-col md:flex-row w-full text-black md:gap-[3rem]  gap-[5rem] capitalize'>

            <motion.div className='lg:w-[40%] md:w-[60%] h-auto  w-full ' initial={{ opacity: 3, y: 250 }}
              whileInView={{ opacity: 10, y: 0 }} // Trigger when in view
              transition={{ duration: 0.5 }}>
              <h4 className='md:text-[32px] text-[28px] font-bold leading-[1.4] md:leading-[1.4]' >best digital marketing service in india, to be <span className='text-green-500'>discovered us ?.</span> </h4>
            </motion.div>

            <motion.div className='lg:w-[60%] md:w-[40%] h-auto w-full pt-[2rem] md:py-[0rem]' initial={{ opacity: 3, y: -250 }}
              whileInView={{ opacity: 10, y: 0 }} // Trigger when in view
              transition={{ duration: 0.5 }}>
              <p className='md:text-[16px] font-normal leading-[1.75] text-neutral-800' >
                best team with expected work, who solves your changelleges, and turn your idea into reality in india`s best software company.
              </p>
            </motion.div>

          </div>


          <div className='md:h-[35rem]   h-[30rem] w-full rounded-[1rem] '>

            <video className='md:h-full md:w-full  h-[30rem] rounded-[1rem] object-cover' title='best worked at ntcodex systems in india' loop
              autoPlay
              muted>

              <source src={vid} />

            </video>

          </div>

          <motion.div className='lg:w-[50%] md:w-[80%] w-full h-auto text-center  flex justify-center items-center flex-col gap-[1rem]' initial={{ opacity: 3, y: 250 }}
            whileInView={{ opacity: 10, y: 0 }} // Trigger when in view
            transition={{ duration: 0.5 }}>


            <p className='text-[16px] font-normal leading-[1.75] ' style={{ fontFamily: 'Nunito, sans-serif' }}>you can explore more with us (website development , mobile application development, digital marketing, and website desiging) to expand your thinking boundaries , we are the company who focus on quality of task for our customers, and deliver the expected work, and solved your changelleges thourgh services.</p>

            <button className=' border-gray-400 border-[1px] w-[10rem] h-[3rem] rounded-[2rem] text-[16px] '>know more</button>
          </motion.div>

        </div>


      </section>

      {/* metrics services  for mobile view */}


      < section className=" md:hidden bg-green-500 border-gray-700 flex justify-center items-center h-auto md:py-[1rem] py-[3rem]  ">

        <div className='m-auto w-[90%] md:w-[50%] flex justify-between flex-col gap-[2rem] items-center h-auto capitalize z-10'>

          <div className=' text-center w-auto h-auto'>
            <p className='font-semibold text-black text-[28px]' style={{
              fontFamily: "Bona Nova SC, serif"
            }}>client</p>
            <p className='md:text-[32px] font-bold text-black ' >39+</p>
          </div>

          <div className='  text-center'>
            <p className='font-semibold text-black text-[28px]' style={{
              fontFamily: "Bona Nova SC, serif"
            }}>expericance</p>
            <p className='md:text-[32px] font-bold text-black'>5+</p>
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
            <p className='md:text-[32px] font-bold text-black'>2024</p>
          </div>

        </div>
      </section>


      {/* client review day */}

      <section className='bg-white md:bg-neutral-900 md:text-white py-[4rem] h-auto flex justify-center items-center'>

        <div className=' w-[80%] h-auto text-white flex justify-between flex-col md:flex-row gap-[3rem] items-center'>

          <div className='md:w-[50%] w-full h-[20rem] lg:h-[20rem] md:h-[20rem]  rounded-[5rem]'>

            <img src={abt} alt="your business is our success" title='we provide best software development services in india such as website development , app development , digital marketing , website design' className=' rounded-[5rem] h-full object-cover' />

          </div>


          <motion.div className='md:w-[50%] w-full h-auto capitalize  text-black md:text-white flex justify-start items-start flex-col gap-[2rem]' initial={{ opacity: 3, y: 250 }}
            whileInView={{ opacity: 10, y: 0 }} // Trigger when in view
            transition={{ duration: 0.5 }}>

            <p>why choose us</p>

            <h5 className='text-[28px] md:text-[32px] font-bold leading-[1.4] md:leading-[1.4] capitalize' ><span className='text-green-500'>33+ happy client </span>said to us , you are satisfied. </h5>
            <p className='md:text-[16px] text-[16px] leading-[1.75]'>why customers believe on ntcodex systems , we foucus their needed and delives expected work, and our team makes believe to do unbelivebale to beliveabale job. </p>

          </motion.div>

        </div>

      </section>

      {/* our business partner */}

      <section className=' h-auto bg-white w-full  lg:top-[90vh]  flex justify-center items-center  py-[1rem]'>


        <div className='md:w-[50%]  w-[80%]  flex justify-between gap-[2rem] items-center text-black flex-col '>


          <h6 className='text-[28px] md:text-[32px] font-bold capitalize '>
            our partner
          </h6>

          <div className=' flex justify-between gap-[3rem] overflow-x-auto whitespace-nowrap scrollbar-hide w-full'>

            <div className=' w-[8rem] h-[5rem] flex-shrink-0' ><img src="https://news.clemson.edu/wp-content/uploads/2020/12/Deloitte-Logo-FEATURE.jpg" className='h-full w-full' alt="best website development in india " title='best website development in india' /></div>

            <div className=' w-[8rem] h-[5rem] flex-shrink-0' ><img src="https://images.assettype.com/freepressjournal%2F2020-05%2F12b3ce04-22fa-422c-a837-8cc770de0303%2F2252E643_E250_4DFB_A571_75FDE161B087.jpeg?w=1200" className='h-full w-full' alt="best app development in india"  title='best website development in india'/></div>

            <div className=' w-[8rem] h-[5rem] flex-shrink-0' ><img src="https://download.logo.wine/logo/NTT_Data/NTT_Data-Logo.wine.png" className='h-full w-full' alt="best digital marketing in india" title='best website development in india' /></div>

            <div className=' w-[8rem] h-[5rem] flex-shrink-0' ><img src="https://3.bp.blogspot.com/-Qj7v6xCLhpc/WjmJaYYwv_I/AAAAAAAAAH4/-1NfAGzSx9A79pCTbrwLAeMPOPKYQRHDgCLcBGAs/s640/infinix-logo.jpg" className='h-full w-full' alt="best website design in india" title='best website development in india' /></div>

          </div>

        </div>

      </section>


    </>




  )
}

export default Home
