import React from 'react'

const Contact = () => {
  return (
    <>

<section className='border w-full h-auto py-[4rem] flex justify-center items-center flex-col gap-[2rem]'>


<div className=' flex justify-start items-start w-[60%] capitalize'>
  <h1 className='text-[40px] font-bold'>fill the project form</h1>
</div>
  <div className='w-[60%] h-auto'>

<form action="" className=' flex justify-between items-center flex-wrap gap-[1rem]'>

<div className='flex justify-start items-start w-[15rem] flex-col capitalize gap-[1rem]'>
  <label htmlFor="">name</label>
  <input type="text" placeholder='write the your name' className='w-full h-[2.5rem] bg-blue-100 rounded-[5rem] px-[1rem]' />
</div>

<div className='flex justify-start items-start w-[15rem] flex-col capitalize gap-[1rem]'>
  <label htmlFor="">email</label>
  <input type="text" placeholder='write the email' className='w-full h-[2.5rem] bg-blue-100 rounded-[5rem] px-[1rem]' />
</div>

<div className='flex justify-start items-start w-[15rem] flex-col capitalize gap-[1rem]'>
  <label htmlFor="">phone number</label>
  <input type="text" placeholder='write the phone number' className='w-full h-[2.5rem] bg-blue-100 rounded-[5rem] px-[1rem]' />
</div>

<div className='flex justify-start items-start w-[15rem] flex-col capitalize gap-[1rem]'>
  <label htmlFor="">address</label>
  <input type="text" placeholder='write the address' className='w-full h-[2.5rem] bg-blue-100 rounded-[5rem] px-[1rem]' />
</div>

<div className='flex justify-start items-start w-[15rem] flex-col capitalize gap-[1rem]'>
  <label htmlFor="">meeting date</label>
  <input type="text" placeholder='schuled the meeting' className='w-full h-[2.5rem] bg-blue-100 rounded-[5rem] px-[1rem]' />
</div>

<div className='flex justify-start items-start w-[15rem] flex-col capitalize gap-[1rem]'>
  <label htmlFor="">services</label>

  <select name="" id="" className='w-full h-[2.5rem] bg-blue-100 text-gray-500 rounded-[5rem] px-[1rem]' >

  <option value="">
select    </option>

    <option value="">
website development
    </option>

    <option value="">
mobile app development
    </option>

  <option value="">
website design
  </option>
  <option value="">
digital marketing
  </option>
  </select>

</div>

<div className='flex justify-start items-start w-[15rem] flex-col capitalize gap-[1rem]'>
  <label htmlFor="">project duration</label>
  <input type="text" placeholder='select the project duration' className='w-full h-[2.5rem] bg-blue-100 rounded-[5rem] px-[1rem]' />
</div>

<div className='flex justify-start items-start w-[15rem] flex-col capitalize gap-[1rem]'>
  <label htmlFor=""> project budget</label>
  <input type="text" placeholder='write the your budget' className='w-full h-[2.5rem] bg-blue-100 rounded-[5rem] px-[1rem]' />
</div>

<div className='flex justify-start items-start w-[15rem] flex-col capitalize gap-[1rem]'>
  <label htmlFor="">are you ok ?</label>
  <input type="text" placeholder='select your confirmation' className='w-full h-[2.5rem] bg-blue-100 rounded-[5rem] px-[1rem]' />
</div>

<div className='flex justify-start items-start w-[15rem] capitalize mt-[2rem]'>
  <input type="submit"  className='w-full h-[3rem] bg-black rounded-[5rem] px-[1rem] text-white' />
</div>

</form>

  </div>

</section>


    </>
  )
}

export default Contact
