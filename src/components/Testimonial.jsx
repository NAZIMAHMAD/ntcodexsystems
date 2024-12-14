import React, { useState } from "react";
import G3 from "../assets/g3.jpg";

const Testimonial = () => {
  const testDate = [
    {
      name: "John Nou",
      dis: "Very good experience done by NTCodex Systems and great work delivered by them. Very good experience done by NTCodex Systems and great work delivered by them.",
    },
    {
      name: "Rita Sharma",
      dis: "Very good experience done by NTCodex Systems and their timely delivery.",
    },
    {
      name: "Vicy Koshal",
      dis: "Highly professional team and great service provided by NTCodex Systems.",
    },
    {
      name: "Sanjya Patel",
      dis: "Exceptional quality and great communication from NTCodex Systems.",
    },
    {
      name: "Denjil John",
      dis: "Outstanding work and good customer support provided by NTCodex Systems.",
    },
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
      {/* Section Title */}
      <section className="w-full h-full bg-white flex justify-center items-center py-[4rem]">
        <div className="w-[90%] h-auto flex justify-center items-center flex-col gap-[2rem]">
          <div className="h-full capitalize md:w-[50%] w-[90%] text-center flex justify-center gap-[1rem] flex-col">
            <h1 className="md:text-[32px] text-[28px] font-bold">
              Our Testimonial Timeline
            </h1>
            <p className="text-[16px] font-normal leading-[1.7]">
              Hear what our clients have to say about the amazing work we deliver. 
              We value every experience and ensure excellence in every project.
            </p>
          </div>
        </div>
      </section>

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
        <div className="overflow-hidden md:w-[70%] w-full h-full relative border">
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
                <div className="md:w-[60%]  w-full border-green-100 pl-[1rem] capitalize  flex justify-start items-start flex-col pt-[15%] pr-[5rem]">
                  <h2 className="md:text-[42px] text-[32px] font-bold">{data.name}</h2>
                  <p className="text-wrap">{data.dis}</p>
                </div>

                {/* Testimonial Image */}
                <div className="w-full border md:w-[40%] h-auto">
                  <img
                    src={G3}
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
  );
};

export default Testimonial;
