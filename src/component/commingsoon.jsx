import React from 'react'
import commingsoonimg from "../../src/images/coming_soon.jpg"

const commingsoon = () => {
  return (
    <div>
        <div className="max-w-[1920px] flex flex-col mx-auto">
          <div className="relative w-full xl:w-[1162px] h-[90vh] flex items-center justify-center mx-auto bg-transparent md:mt-[40px]">
             <img src={commingsoonimg} alt="" className='md:h-[80vh] max-h-[500px]'/>
          </div>
        </div>
    <div className="fixed top-0 -z-10 right-0 w-[100vw] h-[100vh] bg-black">
        </div>
    </div>
    
  )
}

export default commingsoon
