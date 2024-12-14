import React from 'react'
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

const Project = () => {
 
 
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
    
    
     {/* project Title */}
     <section className="w-full h-full bg-white flex justify-center items-center py-[4rem]">
        <div className="w-[90%] h-auto flex justify-center items-center flex-col gap-[2rem]">
          <div className="h-full capitalize md:w-[50%] w-[90%] text-center flex justify-center gap-[1rem] flex-col">
            <h1 className="md:text-[32px] text-[28px] font-bold">
              Our recent projects
            </h1>
            <p className="text-[16px] font-normal leading-[1.7]">
              Hear what our clients have to say about the amazing work we deliver. 
              We value every experience and ensure excellence in every project.
            </p>
          </div>
        </div>
      </section>

           {/* project section body  */}

           <div className=' w-full h-auto flex justify-center items-center'>
      <div className='w-[90%] h-auto pb-[4rem]  flex justify-between items-center flex-wrap gap-[1rem]'>
       

          {GalleryImg.map((item, index) => (
          
          <div className='w-[31%] h-[30%] object-cover'>


           <img key={index} src={item.img} alt={`Gallery Image ${index + 1}`}  className='w-full h-full object-cover '/>

           </div>


          ))}
           </div>

    </div>

    
    
    </>
   
  )
}

export default Project