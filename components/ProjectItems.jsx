import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PetImg from '../public/petcommerce.jpg'
import Soon from '../public/soon.jpg'

function ProjectItems() {
  return (
    <div className='grid md:grid-cols-2 gap-8'>
          <div className='relative flex items-center justify-items-center h-auto w-full shadow-xl shadow-slate-800 rounded-xl p-4 group hover:bg-gradient-to-r from-[#164e63] to-[#22d3ee]'>
              <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                 <h3 className='text-2xl text-white tracking-wider text-center'>Pet-Commerce</h3>
                 <p className='pb-4 pt-2 text-white text-center'>CSS, HTML, JAVASCRIPT</p>
                 <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Click Here</p>
              </div>
              <Link href='https://pet-e-commerce-sample.vercel.app/'>
              <Image className='rounded-xl group-hover:opacity-10 h-full'
                src={PetImg}
                alt='Logo'
              />
            </Link>
          </div>
          <div className='relative flex items-center justify-items-center h-auto w-full shadow-xl shadow-slate-800 rounded-xl p-4 group hover:bg-gradient-to-r from-[#164e63] to-[#22d3ee]'>
              <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                 <h3 className='text-2xl text-white tracking-wider text-center'>??</h3>
                 <p className='pb-4 pt-2 text-white text-center'>NextJs, ReactJs</p>
                 <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Click Here</p>
              </div>
              <Link href='/'>
              <Image className='rounded-xl group-hover:opacity-10 '
                src={Soon}
                alt='Logo'
              />
            </Link>
          </div>
          <div className='relative flex items-center justify-items-center h-auto w-full shadow-xl shadow-slate-800 rounded-xl p-4 group hover:bg-gradient-to-r from-[#164e63] to-[#22d3ee]'>
              <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                 <h3 className='text-2xl text-white tracking-wider text-center'>??</h3>
                 <p className='pb-4 pt-2 text-white text-center'>NextJs, ReactJs</p>
                 <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Click Here</p>
              </div>
              <Link href='/'>
              <Image className='rounded-xl group-hover:opacity-10 '
                src={Soon}
                alt='Logo'
              />
            </Link>
          </div>
          <div className='relative flex items-center justify-items-center h-auto w-full shadow-xl shadow-slate-800 rounded-xl p-4 group hover:bg-gradient-to-r from-[#164e63] to-[#22d3ee]'>
              <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                 <h3 className='text-2xl text-white tracking-wider text-center'>??</h3>
                 <p className='pb-4 pt-2 text-white text-center'>NextJs, ReactJs</p>
                 <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>Click Here</p>
              </div>
              <Link href='/'>
              <Image className='rounded-xl group-hover:opacity-10 '
                src={Soon}
                alt='Logo'
              />
            </Link>
          </div>
          
        </div>
  )
}

export default ProjectItems
