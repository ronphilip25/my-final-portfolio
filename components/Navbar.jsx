import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import { FaGithub} from 'react-icons/fa';
import {BsTwitter, BsFacebook, BsInstagram} from 'react-icons/bs';
import NavLogo from '../public/rLogo.png'
// import { useRouter } from 'next/router';


function Navbar  ()  {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    // const [position, setPosition] = useState('fixed')
  // const router = useRouter();

  // useEffect(() => {
  //   if (
  //     router.asPath === '/property' ||
  //     router.asPath === '/crypto' ||
  //     router.asPath === '/netflix' ||
  //     router.asPath === '/twitch'
  //   ) {
  //     setNavBg('transparent');
  //     setLinkColor('#ecf0f3');
  //   } else {
  //     setNavBg('#ecf0f3');
  //     setLinkColor('#1f2937');
  //   }
  // }, [router]);
    

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
      const handleShadow = () => {
        if (window.scrollY >= 90) {
          setShadow(true)
        } else {
          setShadow(false)
        }
      }
      window.addEventListener('scroll', handleShadow);
    },[])

  return (
    <div className={shadow ? 'md:flex sm:fixed w-full h-20 shadow-xl z-[100]' : 'md:flex w-full h-20 z-[100]'}>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
       <Link href='/'>
        <Image
          src={NavLogo}
          alt='Current Logo'
          width='75'
          height='50'
        />
        </Link>
        <div>
          <ul className='hidden p-10 md:flex'>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:line-through'>
                Home
              </li>
            </Link>
            <Link href='#about'>
              <li className='ml-10 text-sm uppercase hover:line-through'>
                About
              </li>
            </Link>
            <Link href='#skills'>
              <li className='ml-10 text-sm uppercase hover:line-through'>
                Skills
              </li>
            </Link>
            <Link href='#projects'>
              <li className='ml-10 text-sm uppercase hover:line-through'>
                Projects
              </li>
            </Link>
            <Link href='#contact'>
              <li className='ml-10 text-sm uppercase hover:line-through'>
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className='md:hidden sm:flex p-4 '>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={nav ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gradient-to-r from-fuchsia-100 to-sky-300 p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
              <Image 
              src={NavLogo}
              width='87'
              height='35' 
              alt='/' 
              />
              </Link>
              <div onClick={handleNav} className='rounded-full shadow-lg shadow-slate-900 p-3 cursor-pointer'>
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-b-slate-900 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Let&apos;s build something legendary together
              </p>
            </div>
          </div>
          <div className='py-4 flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={()=> setNav(false)} className='py-4 text-sm'>Home</li>
              </Link>
              <Link href='/#about'>
                <li onClick={()=> setNav(false)}className='py-4 text-sm'>About</li>
              </Link>
              <Link href='/#skills'>
                <li onClick={()=> setNav(false)} className='py-4 text-sm'>Skills</li>
              </Link>
              <Link href='/#projects'>
                <li onClick={()=> setNav(false)}className='py-4 text-sm'>Project</li>
              </Link>
              <Link href='/#contact'>
                <li onClick={()=> setNav(false)} className='py-4 text-sm'>Contact</li>
              </Link>
            </ul>
            <div className=' pt-14'>
              <p className='uppercase tracking-widest text-[#5651e5]'> 
                 Let&apos;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[100%]'>
                <div className='rounded-full shadow-lg shadow-slate-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <a href='https://www.facebook.com/ronphilip.sanchez/'><BsFacebook /></a>
                </div>
                <div className='rounded-full shadow-lg shadow-slate-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <a href='https://github.com/ronphilip25'><FaGithub /></a>
                </div>
                <div className='rounded-full shadow-lg shadow-slate-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <a href='https://www.instagram.com/ronphilip_/'><BsInstagram /></a>
                </div>
                <div className='rounded-full shadow-lg shadow-slate-900 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                <a href='https://twitter.com/RonPhilip_'><BsTwitter /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar