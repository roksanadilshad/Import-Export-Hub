import React from 'react';
import { CiFacebook, CiLinkedin } from 'react-icons/ci';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoIosArrowForward } from 'react-icons/io';
import { TbBrandGoogle } from 'react-icons/tb';

const Home = () => {
    return (
        <div className=''>
            <div class="relative bg-[url('https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg')] bg-cover bg-center h-screen">
            <div class="absolute inset-0 bg-black/30"></div>

            <div className='relative  z-10 pt-64 w-11/12 mx-auto *:pb-2'>
            <h4 className='text-2xl text-primary font-bold'>Connecting Global Markets, One Click at a Time</h4>
            <h2 className='text-4xl text-white font-bold'>Discover, import, and export products worldwide <br/>
            <span className='text-6xl text-accent font-bold' >— all from one seamless platform
                </span></h2>

                <button className='btn my-5  border-white btn-secondary text-white pt-1'>CONTACT ME<span><IoIosArrowForward></IoIosArrowForward></span></button>
                <div className='*:btn flex *:text-lg  *:not-first:m-2 *: *:bg-secondary *:rounded-full *:p-1 *:hover:bg-white  *:hover:text-secondary *:text-primary items-center w-[30%] '>
                   <CiFacebook></CiFacebook>
                   <FaXTwitter></FaXTwitter>
                   <TbBrandGoogle></TbBrandGoogle>
                   <CiLinkedin></CiLinkedin>
                </div>
                
        </div>
            </div>
            <section>
            <div className='text-center flex flex-col items-center py-20 bg-neutral'>

         <h3 className='text-2xl font-bold pb-2'>Search thousands of verified export and import listings — from machinery to fashion, everything you need in one place.</h3>
              <div className='flex items-center'>
         <input type="text" name="" id="" className='bg-white focus:outline-none py-2 my-2 rounded-l'/><button className="btn btn-secondary border-white rounded-l-none">SEARCH</button>

              </div>

            </div>
            </section>
     <section className="relative bg-[url('https://images.pexels.com/photos/3063470/pexels-photo-3063470.jpeg')] bg-cover bg-center bg-no-repeat object-cover">
      <div class="absolute inset-0 bg-black/60"></div>
      <div className='relative  z-10'>
           <h2 className='border-neutral  border-b-4 w-60 mx-auto  font-bold text-4xl text-center text-primary'>What I Do</h2>

           <div>
            <div>
                <h3>IMPORT</h3>
               
            </div>
           </div>
      </div>

     </section>
        </div>
    );
};

export default Home;