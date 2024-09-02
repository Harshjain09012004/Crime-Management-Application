import React from 'react';
import Header from '../header.jsx'
import Subheader from '../subheader.jsx'
import Explore from '../explorebutton.jsx'
import Subfooter from '../subfooter.jsx';
import Footer from '../footer.jsx'
function Landing() {
  return (
    <div className='h-[100%] w-[100%] bg-zinc-50'>
      <Header/>
      <Subheader/>
      <div className='Great-Person-Thoughts flex flex-col place-items-center'>

        <div className='Thought bg-neutral-100 h-[500px] w-[1100px] mt-14 rounded-3xl shadow-xl flex place-items-center justify-around border-2 border-gray-200 hover:bg-neutral-200 hover:scale-95 transition-all'>
            <div className='Image bg-gray-300 h-82 w-72  rounded-tr-[100px] rounded-br-[100px] overflow-hidden hover:scale-105 transition-transform'>
              <img src='src\assets\MkGandhi.jpg' className='object-cover h-[100%] w-[100%]'/>
            </div>
            
            <div className='Statement w-[700px] h-96 flex place-items-center'>
              <p className="text-6xl text-center leading-[65px] font-">
                "There would be no one to frighten you, if you refused to be afraid."
              </p>
            </div>
        </div>

        <div className='Thought bg-neutral-100 h-[500px] w-[1100px] mt-14 rounded-3xl shadow-xl flex place-items-center justify-around border-gray-200 hover:bg-neutral-200 hover:scale-95 transition-all'>
          
            <div className='Statement w-[700px] h-96 flex place-items-center'>
              <p className='text-6xl text-center leading-[65px]'>
                "The greatest sin is to think yourself weak."
              </p>
            </div>

            <div className='Image bg-gray-300 h-82 w-72 rounded-3xl overflow-hidden hover:scale-105 transition-transform'>
              <img src='src\assets\Swami.jpg' className='object-cover h-[100%] w-[100%]'/>
            </div>
        </div>

        <div className='Thought bg-neutral-100 h-[500px] w-[1100px] mt-14 shadow-xl flex rounded-3xl place-items-center justify-around border-gray-200 hover:bg-neutral-200 hover:scale-95 transition-all'>
            <div className='Image bg-gray-300 h-82 w-72 rounded-tl-[100px] rounded-br-[100px] overflow-hidden hover:scale-105 transition-transform'>
              <img src='src\assets\BhagatSingh.jpg' className='object-cover h-[100%] w-[100%]'/>
            </div>
            
            <div className='Statement w-[700px] h-96 flex place-items-center'>
              <p className='text-6xl text-center leading-[65px]'>
                "If the deaf are to hear, the sound has to be very loud."
              </p>
            </div>
        </div>
        
      </div>
      <Explore/>
      <Subfooter/>
      <Footer/>
    </div>
  )
}

export default Landing