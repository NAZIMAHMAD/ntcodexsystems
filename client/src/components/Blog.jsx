import React, { useState } from "react";
import G3 from "../assets/g3.jpg";
import woman from '../assets/woman.jpg'
import hacking from '../assets/hacking.jpg'
import abouteus from '../assets/aboutus.jpg'
import { Helmet } from "react-helmet";


const Blog = () => {
 
 
  const testDate = [
    {
      name: "change your mind",
      dis: "change your ideas with us to change the business loop and gain the groth at ntcodex systems, and best website development services in india",
      img: woman
    },

    {
      name: "going to success",
      dis: "make a mobile application to hit remove the gap amid you and customers",
      img:hacking
    },
    {
      name: "safe your business with us ",
      dis: "Highly professional team and great service provided by NTCodex Systems, we deliver the website and app with safest outcome now",
      img:abouteus
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to the previous slide
  const handleLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testDate.length - 1 : prevIndex - 1
    );
  };

  // Navigate to the next slide
  const handleRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testDate.length - 1 ? 0 : prevIndex + 1
    );
  };
 
 
  return (
    <>


    <Helmet>
    
    <title>best website development | best digital marketing | best app development in india | website design</title>
    <meta name="description" content="we are the team to make your dream into relaity through our services such as website development , app development , digital marketing. " />
    
    <meta name="keywords" content="best software company in india , app development, best software development services in india, digital marketing services , digital marketing services in india " />
    <meta name="author" content="nazim ahmad founder of ntcodex systems " />
    <link rel="canonical" href="https://ntcodexsystems.tech/blog" />
    <meta name="robots" content="index, follow" />
    <meta name="googlebot" content="index, follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": " software company ",
          "name": "ntcodex systems",
          "url": "https://ntcodexsystems.tech/blog",
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
    

{/* blog heading section */}
<section className="w-full h-full flex justify-center items-center py-[2rem] md:pb-0">
        <div className="w-[80%] h-auto flex justify-center items-center flex-col gap-[2rem]">
          <div className="h-full capitalize md:w-[50%] w-[90%] text-center flex justify-center gap-[1rem] flex-col">
            <h1 className="md:text-[36px] text-[28px] font-bold">
              Our blog 
            </h1>
            <p className="text-[16px] font-normal leading-[1.7]">
              Hear what our clients have to say about the amazing work we deliver. 
              We value every experience and ensure excellence in every project.
            </p>
          </div>
        </div>
      </section>

{/* blog body section */}

       {/* Testimonial Carousel */}
       <div className="relative  w-full h-[30rem] pb-[4rem]  flex justify-center items-center">
        {/* Buttons */}
        <button
          onClick={handleLeft}
          className="absolute left-[10%] md:w-[5rem] w-[3rem] h-[3rem]  md:h-[5rem] border border-black capitalize bg-green-100 rounded-full text-black z-10 font-bold"
        >
           &lt;
        </button>
        <button
          onClick={handleRight}
          className="absolute right-[10%] md:w-[5rem] w-[3rem] h-[3rem]  md:h-[5rem] border border-black capitalize bg-green-100 rounded-full text-black z-10 font-bold"
        >
                    &gt;

        </button>

        {/* Testimonials */}
        <div className="overflow-hidden  py-[3rem] bg-green-800 md:w-[70%] w-full h-full relative border">
          <div
            className="flex  h-full  transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testDate.map((data, index) => (
              <div
                className="md:w-full w-full h-full gap-5  rounded-[1rem] p-[1rem] flex-shrink-0 flex md:flex-row flex-col justify-center m-auto"
                key={index}
              >
                {/* Testimonial Text */}
                <div className="md:w-[60%]  w-full border-green-100 pl-[1rem] capitalize  flex justify-start items-start flex-col pt-[7%] pr-[5rem]">
                  <h2 className="md:text-[42px] text-[32px] font-bold">{data.name}</h2>
                  <p className="text-wrap">{data.dis}</p>
                </div>

                {/* Testimonial Image */}
                <div className="w-full border md:w-[40%] h-auto">
                  <img
                    src={data.img}
                    alt={data.name}
                    className="h-full object-cover w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


    </>
  )
}

export default Blog
