import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null);

    return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] m-auto flex flex-col items-center justify-between md:w-[80%]">

        <LiIcon reference={ref} />
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:'spring'}}>
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {position}&nbsp;<a href={companyLink} target="_blank" className='text-primary dark:text-primaryDark capitalize'>@{company}</a>
            </h3>

            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>

            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = ({children, className=''}) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Experience
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'> 
                <motion.div
                style={{scaleY: scrollYProgress}} 
                className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'/>

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details 
                    position="Frontend Engineer"
                    companyLink="https://dotcod.in/"
                    company="Dotcod"
                    time="Aug 2022 - Present"
                    address="Bengaluru, Karnataka 560076"
                    work="Promoted to Frontend Engineer after 2 years of exceptional performance. Leading development of React and Next.js applications, implementing modern frontend architectures, and mentoring junior developers. Specialized in building scalable web applications with focus on performance optimization and user experience." />

                    <Details 
                    position="Junior Frontend Developer"
                    companyLink="https://dotcod.in/"
                    company="Dotcod"
                    time="Aug 2022 - Aug 2024"
                    address="Bengaluru, Karnataka 560076"
                    work="Started as Junior Frontend Developer, quickly mastering Angular framework and contributing to multiple projects including currency conversion applications, KYC verification systems, and job portal platforms. Demonstrated strong problem-solving skills and rapid learning capabilities." />

                    <Details 
                    position="Angular Intern"
                    companyLink="https://www.linkedin.com/company/sabbatech/about/"
                    company="Sabbatech"
                    time="April 2022 - Aug 2022"
                    address="Chennai"
                    work="Gained foundational experience in Angular development, successfully managing Jira tickets and contributing to web development projects. Built strong foundation in modern frontend development practices and agile methodologies." />
                </ul>
            </div>
        </div>
    )
}

export default Experience