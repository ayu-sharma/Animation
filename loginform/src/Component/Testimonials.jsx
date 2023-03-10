import React, {useState, useEffect} from 'react'
import Data from './Data'
import Reviews from'./Reviews'
import companyNames from './Companyname'
import background from '../Component/images/background.png'

function Testimonials() {


const [number, incrementNumber] = useState(0)
useEffect(()=>{

})

const[active, setactive] = useState(0)



const prevbtn= () => {
  if(active===0) {
    setactive(Data.length-1)
  }
  else {
    setactive(active-1)
  }
  if(active===0) {
    setactive(Data.length-3)
  }
}

const nextbtn= () => {
  if(active===Data.length-1) {
    setactive(0)
  }
  else {
    setactive(active+1)
  }
  if(active===Data.length-3) {
    setactive(0)
  }
}
const showThreeArray = Data.slice(active, active+3)

const filterUpArray = companyNames.filter(names=> names.type==="up")
const filterDownArray = companyNames.filter(names=> names.type==="down")


  return (
  <div className='overflow-x-hidden'>
  <div className='flex flex-col items-center'>

{/* Text Rotating Effect */}
    <div className='flex gap-3 box-content'>
    <p className='font-bold text-[50px]'>Join </p> 
    <div className='overflow-hidden h-20'>
     <span className='animate-rotate_text block font-bold text-[50px] bg-gradient-to-r from-[#F5C05A] via-[#EB88B1] to-[#6CAFFF] text-transparent bg-clip-text'>800000</span>
     <span className='animate-rotate_text block font-bold text-[50px] bg-gradient-to-r from-[#F5C05A] via-[#EB88B1] to-[#6CAFFF] text-transparent bg-clip-text'>800001</span>
     <span className='animate-rotate_text block font-bold text-[50px] bg-gradient-to-r from-[#F5C05A] via-[#EB88B1] to-[#6CAFFF] text-transparent bg-clip-text'>800002</span>
     <span className='animate-rotate_text block font-bold text-[50px] bg-gradient-to-r from-[#F5C05A] via-[#EB88B1] to-[#6CAFFF] text-transparent bg-clip-text'>800003</span>
     <span className='animate-rotate_text block font-bold text-[50px] bg-gradient-to-r from-[#F5C05A] via-[#EB88B1] to-[#6CAFFF] text-transparent bg-clip-text'>800004</span>
     <span className='animate-rotate_text block font-bold text-[50px] bg-gradient-to-r from-[#F5C05A] via-[#EB88B1] to-[#6CAFFF] text-transparent bg-clip-text'>800000</span>
     </div>
      <p className='font-bold text-[50px]'>People</p>
    </div>

{/*  */}


{/* typewriter effect */}
<div className=''>
    <p className='font-normal text-[24px] animate-typing'>people who use Magic Studio to edit images</p>
</div>


    {/*  */}
  <div className='flex items-center justify-center pt-20 overflow-hidden w-4/5 bg-no-repeat bg-center bg-conic-gradient '>
    <button className='' type='prev' onClick={prevbtn}>Previous</button> 
    <div>
    </div>
   { showThreeArray.map((reviewData,index)=>(
        <div className='m-4 bg-white p-4 rounded-lg'>
        <div>
        <div  className='mb-0'>{reviewData.name}</div>
        <div className='text-sm mt-0'>{reviewData.jobtitle}</div>
        </div>
        <p>{reviewData.review}</p>
        </div>
        ))}
    <button className='' type='next' onClick={nextbtn}>Next</button> 
  </div>
  </div>
  <div className='flex flex-col items-center'>
  <div className='flex mt-12 ml-64'>
    {
      Reviews.map((reviewline,index)=> (
        <div className=' p-2 ml-3 border-2 whitespace-nowrap rounded-3xl'>{reviewline.description}</div>
        ))}
  </div>
  <div className='flex mt-5 -ml-64'>
    {
      Reviews.map((reviewline,index)=> (
        <div className=' p-2 mr-3 border-2 whitespace-nowrap rounded-3xl'>{reviewline.description}</div>
        ))}
  </div>
  <div className='flex mt-5 ml-64'>
    {
      Reviews.map((reviewline,index)=> (
        <div className=' p-2 ml-3 border-2 whitespace-nowrap rounded-3xl'>{reviewline.description}</div>
        ))}
  </div>
   </div>
   <p className='absolute pt-10 right-16 font-serif font-normal'>900+ more reviews like this</p>
<div className='flex flex-col justify-center'>
   <div className='flex justify-between items-center pt-32'>
        {filterUpArray.map((names, index)=>(
          <img className='' src={names.img}/>
        ))}
   </div>
   <div className='flex justify-between items-center pt-5'>
        {filterDownArray.map((fliteredNames,index)=>(
          <img className=''src={fliteredNames.img}/>
        ))}
   </div>
</div>
   </div>
  )
}

export default Testimonials