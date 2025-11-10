import React from 'react';
import { CiFacebook, CiLinkedin } from 'react-icons/ci';
import { FaFacebook, FaGoogle, FaShip, FaShoppingBag } from 'react-icons/fa';
import { FaCartShopping, FaXTwitter } from 'react-icons/fa6';
import { IoIosArrowForward } from 'react-icons/io';
import { IoCarSharp } from 'react-icons/io5';
import { RiImportLine } from 'react-icons/ri';
import { TbBrandGoogle } from 'react-icons/tb';
import { TiExportOutline } from 'react-icons/ti';
import WhatIDo from './whatIDo';

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
    <WhatIDo></WhatIDo>
        </div>
    );
};

export default Home;