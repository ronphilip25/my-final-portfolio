import React from 'react'
import Image from 'next/image'
import Html from '../public/html.png'
import CSS from '../public/css.png'
import ReactImg from '../public/react.png'
import NextJS from '../public/nextjs.png'
import Javascript from '../public/javascript.png'
import Tailwind from '../public/tailwind.png'
import GitHub from '../public/github1.png'
import NodeJs from '../public/node.png'

function Skills() {
  return (
    <div id='skills' className="w-full lg:h-screen p-4 sm:pt-10">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#164e63]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="p-6 shadow-xl rounded-xl hover:scale-125 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Html}
                  width='64'
                  height='64'
                  alt="/"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                   <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-125 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={CSS}
                  width='64'
                  height='64'
                  alt="/"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                   <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-125 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={ReactImg}
                  width='64'
                  height='64'
                  alt="/"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                   <h3>REACT</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-125 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={NextJS}
                  width='64'
                  height='64'
                  alt="/"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                   <h3>NEXTJS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-125 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Javascript}
                  width='64'
                  height='64'
                  alt="/"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                   <h3>JAVASCRIPT</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-125 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Tailwind}
                  width='64'
                  height='64'
                  alt="/"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                   <h3>TAILWIND</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-125 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={GitHub}
                  width='64'
                  height='64'
                  alt="/"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                   <h3>GITHUB</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-125 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={NodeJs}
                  width='64'
                  height='64'
                  alt="/"
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                   <h3>NODEJS</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills
