import React from 'react'
import { FaCode, FaGraduationCap, FaLaptopCode } from 'react-icons/fa'

const About = () => {
  return (
    <div className='container max-w-7xl mx-auto py-20'>
      <h1 className='text-4xl font-bold mb-8 text-center'>About Me</h1>

      <section className='mb-16'>
        <p className='text-lg text-secondary max-w-3xl mx-auto text-center'>I'm a passionate Full Stack Developer with expertise in building modern web applications. With a strong foundation in both frontend and backend technologies, I create seamless user experiences and robust server-side solutions.</p>
      </section>

      <section className='mb-16'>
        <h2 className='section-title'>Skills</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
            <FaCode className='h-8 w-8 text-primary mb-4' />
            <h3 className='text-xl font-semibold mb-2'>Frontend</h3>
            <ul className='text-secondary space-y-2'>
              <li>React / Next.js</li>
              <li>Typescript</li>
              <li>Tailwind CSS</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </div>

          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
            <FaLaptopCode className='h-8 w-8 text-primary mb-4' />
            <h3 className='text-xl font-semibold mb-2'>Backend</h3>
            <ul className='text-secondary space-y-2'>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </div>

          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
            <FaGraduationCap className='h-8 w-8 text-primary mb-4' />
            <h3 className='text-xl font-semibold mb-2'>Tools & Ohters</h3>
            <ul className='text-secondary space-y-2'>
              <li>Git / GitHub</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>CLI / CD</li>
            </ul>
          </div>
        </div>
      </section>

      {/* <section className='mb-16'>
        <h2 className='section-title'>Experience</h2>

        <div className='max-w-3xl mx-auto space-y-8'>
          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
          <h3 className='text-xl font-semibold mb-2'>Senior Frontend Developer</h3>
          <p className='text-primary mb-2'>Company Name & Duration</p>
          <ul className='text-secondary space-y-2 list-disc list-inside'>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, harum.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, harum.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, harum.</li>
          </ul>
          </div>
        </div>
      </section> */}

      <section className='mb-16'>
        <h2 className='section-title'>Education</h2>

        <div className='max-w-3xl mx-auto space-y-8'>
          <div className='bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md'>
          <h3 className='text-xl font-semibold mb-2'>Bachelor of Science in Computer Science & Engineering</h3>
          <p className='text-primary mb-2'>Sylhet Engineering College</p>
          <p className='text-secondary'>2022 - Present</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
