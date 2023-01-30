import React from 'react'
import { FaGithub} from 'react-icons/fa';
import {BsTwitter, BsFacebook, BsInstagram} from 'react-icons/bs';


function Main() {
  return (
    <div id="main" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className=" uppercase text-sm tracking-widest text-gray-700">
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#164e63]">Ron</span>
          </h1>
          <h1 className="py-4 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-slate-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a href="https://www.facebook.com/ronphilip.sanchez/"><BsFacebook /></a>
            </div>
            <div className="rounded-full shadow-lg shadow-slate-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a href='https://github.com/ronphilip25'><FaGithub /></a>
            </div>
            <div className="rounded-full shadow-lg shadow-slate-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
             <a href='https://www.instagram.com/ronphilip_/'><BsInstagram /></a>
            </div>
            <div className="rounded-full shadow-lg shadow-slate-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a href='https://twitter.com/RonPhilip_'><BsTwitter /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
}

export default Main