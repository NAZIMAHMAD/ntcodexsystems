import React from 'react';
import G1 from '../assets/g1.jpg';
import G2 from '../assets/g2.jpg';
import G3 from '../assets/g3.jpg';
import G4 from '../assets/g4.jpg';
import G5 from '../assets/g5.jpg';
import G6 from '../assets/g6.jpg';
import G7 from '../assets/g7.jpg';
import G8 from '../assets/g8.jpg';
import G9 from '../assets/g9.jpg';
import G10 from '../assets/g10.jpg';
import { Helmet } from 'react-helmet';

const Gallery = () => {
 
 
  const GalleryImg = [
    { img: G1 },
    { img: G2 },
    { img: G3 },
    { img: G4 },
    { img: G5 },
    { img: G6 },
    { img: G7 },
    { img: G8 },
    { img: G9 },
    { img: G10 },
  ];

  return (
   
   <>



<Helmet>

<title>best website development | best digital marketing | best app development in india | website design</title>
<meta name="description" content="we are the team to make your dream into relaity through our services such as website development , app development , digital marketing. " />

<meta name="keywords" content="best software company in india , app development, best software development services in india, digital marketing services , digital marketing services in india " />
<meta name="author" content="nazim ahmad founder of ntcodex systems " />
<link rel="canonical" href="https://ntcodexsystems.tech/gallery" />
<meta name="robots" content="index, follow" />
<meta name="googlebot" content="index, follow" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<script type="application/ld+json">
  {`
    {
      "@context": "https://schema.org",
      "@type": " software company ",
      "name": "ntcodex systems",
      "url": "https://ntcodexsystems.tech/gallery",
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



   {/* Gallery componets */}
   
    <div className='w-full h-auto flex justify-center items-center pt-[4rem]'>

    <div className='md:w-[50%] w-[80%] h-auto flex justify-center items-center gap-[1rem]  flex-col text-center capitalize'>
  <p className='md:text-[36px] text-[28px] font-bold leading-[1.4]'>explore our gallery, & events</p>
  <h1 className='font-normal text-[16px] text-neutral-800 leading-[1.7]'>explore us with our events and gallery at ntcodex systems, who can solve your problem through our website development, mobile application development, digital marketing, & website design in india.</h1>
    </div>
  
  </div>
   
   <div className='py-[4rem] w-full h-auto flex justify-center items-center'>
      <div className='w-[80%] h-auto  flex justify-between items-center flex-col md:flex-row flex-wrap gap-[2rem] md:gap-[1rem]'>
       
 
          {GalleryImg.map((item, index) => (
          
          <div className='md:w-[31%] lg:h-[30%] h-[20rem] md:h-[16rem]  w-full '>


           <img key={index} src={item.img} alt={`Gallery Image ${index + 1}`}  className='w-full h-full object-cover '/>

           </div>


          ))}
           </div>

    </div>

    </>
  ); 
}

export default Gallery;
