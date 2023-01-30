import React from 'react'
import {FaLinkedinIn,FaGithub,} from 'react-icons/fa'
import {BsFacebook,BsInstagram,BsTwitter} from 'react-icons/bs'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import Link from 'next/link'
import Image from 'next/image'

function Contact() {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#164e63]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
      </div>
      <div className="grid lg:grid-cols-5 gap-8">
        <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="lg:p-4 h-full ">
            <div>
              <Image
                className="rounded-xl hover:scale-105 ease-in duration-300"
                src="/../public/assets/contact.png"
                width="900"
                height="500"
                alt="/"
              />
            </div>
            <div>
              <h2 className="py-2">Ron Philip Sanchez</h2>
              <p>Front-End Developer</p>
              <p className="py-4">
                I am available for freelance or full-time positions. Contact me
                and lets talk.
              </p>
            </div>
            <div>
              <p className="uppercase pt-8">Connect With Me</p>
              <div className="flex items-center justify-between py-4">
                <Link
                  href="https://www.facebook.com/ronphilip.sanchez/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <BsFacebook />
                  </div>
                </Link>
                <Link
                  href="https://github.com/ronphilip25"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub />
                  </div>
                </Link>
                <Link
                  href="https://www.instagram.com/ronphilip_/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <BsInstagram />
                  </div>
                </Link>
                <Link
                  href="https://twitter.com/RonPhilip_"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <BsTwitter />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
          <div className="p-4">
            <form
              action="https://formspree.io/f/xgebovbl"
              method="POST"
              encType="form-data"
            >
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Name</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="name"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Phone Number</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="phone"
                  />
                </div>
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Email</label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="email"
                  name="email"
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Subject</label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="text"
                  name="subject"
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Message</label>
                <textarea
                  className="border-2 rounded-lg p-3 border-gray-300"
                  rows="10"
                  name="message"
                ></textarea>
              </div>
              <button className="w-full p-4 text-gray-100 mt-4">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-12">
        <Link href="/">
          <div className="rounded-full shadow-lg shadow-slate-900 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Contact