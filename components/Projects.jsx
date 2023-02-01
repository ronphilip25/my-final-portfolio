import React from 'react';
import ProjectItems from './ProjectItems';

const Projects = () => {
  return (
    <div id='projects' className='w-full md:pb-96 md:pt-3'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-rows-1'>
          <ProjectItems />
        </div>
      </div>
    </div>
  );
};

export default Projects;
