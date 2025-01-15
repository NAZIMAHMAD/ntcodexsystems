import React from 'react'
import P1 from '../assets/p1.jpg';
import P2 from '../assets/p2.jpg';
import P3 from '../assets/p3.jpg';
import P4 from '../assets/p4.jpg';
import P5 from '../assets/p5.jpg';
import P6 from '../assets/p6.jpg';
import P7 from '../assets/p1.jpg';
import P8 from '../assets/p2.jpg';
import P9 from '../assets/p4.jpg';
import P10 from '../assets/p5.jpg';
import { Helmet } from 'react-helmet';

const Project = () => {
 
 
    const GalleryImg = [
        { img: P1 },
        { img: P2 },
        { img: P3 },
        { img: P4 },
        { img: P5 },
        { img: P6 },
        { img: P7 },
        { img: P8 },
        { img: P9 },
        { img: P10 },
      ];
 
 
    return (
   
    <>

    <Helmet>
    
    <title>best website development company in patna bihar | best digital marketing company in patna bihar| best app development company in patna bihar| website design</title>
    <meta name="description" content="explore our worked here ,we are the team to make your dream into relaity through our services such as website development , app development , digital marketing. " />
    
    <meta name="keywords" content="best software company in patna bihar, app development, best software development services in india, digital marketing services , digital marketing services in patna bihar" />
    <meta name="author" content="nazim ahmad founder of ntcodex systems " />
    <link rel="canonical" href="https://ntcodexsystems.tech/Project" />
    <meta name="robots" content="index, follow" />
    <meta name="googlebot" content="index, follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": " software company ",
          "name": "ntcodex systems",
          "url": "https://ntcodexsystems.tech/Project",
          "logo": "https://ntcodexsystems.tech/assets/logo.jpg",
          "description": "explore our worked here ,we are the team to make your dream into relaity through our services such as website development , app development , digital marketing.",
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
    
    
    
     {/* project Title */}
     <section className="w-full h-full bg-white flex justify-center items-center py-[4rem]">
        <div className="w-[90%] h-auto flex justify-center items-center flex-col gap-[2rem]">
          <div className="h-full capitalize md:w-[50%] w-[90%] text-center flex justify-center gap-[1rem] flex-col">
            <p className="md:text-[36px] text-[28px] font-bold">
              Our recent projects 
            </p>
            <h1 className="text-[16px] font-normal leading-[1.7]">
              Hear what our clients have to say about the amazing work we deliver. 
              We valued every experience and ensure excellence at every project with best website development , digital marketing, app development, wesite design company in india.
            </h1>
          </div>
        </div>
      </section>

           {/* project section body  */}

           <div className=' w-full h-auto flex justify-center items-center'>
      <div className='w-[80%] h-auto pb-[4rem] flex-col md:flex-row  flex justify-between items-center flex-wrap gap-[1rem]'>
       

          {GalleryImg.map((item, index) => (
          
          <div className='md:w-[31%] w-full h-[30%] object-cover '>


           <img key={index} src={item.img} alt={`Gallery Image ${index + 1}`}  className='w-full h-full object-cover '/>

           </div>


          ))}
           </div>

    </div>

    
    
    </>
   
  )
}

export default Project