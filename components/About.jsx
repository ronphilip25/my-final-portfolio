import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2" class="text-effect">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who Am I</h2>
          <p className="py-2  text-black font-semibold">
            I specialize in building mobile responsive front-end UI applications
            that connect with API and other backend technologies.
          </p>
          <p className="py-2 text-black font-semibold">
            {" "}
            I am passionate about learning new technologies and understand there
            is more than one way to accomplish a task.
          </p>
          <p className="py-2 text-black font-semibold">
            Though I am most proficient in building front-end applications using{" "}
            <span className=" font-extrabold">
              HTML, CSS, Javascript, and React.
            </span>
          </p>
          <p className="py-2 text-black font-semibold">
            I am a quick learner and can pick up new tech stacks as needed.
          </p>
          <p className="py-2 text-black font-semibold">
            I believe that being a great developer is not using one specific
            language, but choosing the best tool for the job.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-black underline cursor-pointer font-semibold">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto flex items-center justify-center p-4 pb-24 sm:pt-28">
          <div class="cube-container">
            <div class="cubespinner">
              <div class="face1">
                <img
                  className="rounded-3xl h-20 w-20"
                  src="https://cdn.worldvectorlogo.com/logos/css-3.svg"
                />
              </div>
              <div class="face2">
                <img
                  className="rounded-lg  h-20 w-20"
                  src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
                />
              </div>
              <div class="face3">
                <img
                  className=" h-20 w-20"
                  src="https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg"
                />
              </div>
              <div class="face4">
                <img
                  className=" h-20 w-20"
                  src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
                />
              </div>
              <div class="face5">
                <img
                  className=" h-20 w-20"
                  src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
                />
              </div>
              <div class="face6">
                <img
                  className=" h-20 w-20"
                  src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
