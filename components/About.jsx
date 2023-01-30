import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            I specialize in building mobile responsive front-end UI applications
            that connect with API and other backend technologies.</p>
            <p className='py-2 text-gray-600'> I am passionate about learning new technologies and understand there is more than one way to accomplish a task.</p>
            <p className='py-2 text-gray-600'>Though I am most proficient in building front-end applications using HTML, CSS, Javascript, and React.</p> 
            <p className='py-2 text-gray-600'>I am a quick learner and can pick up new tech stacks as needed.</p>
            <p className='py-2 text-gray-600'>
            I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.</p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} width='500' height='300' className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
