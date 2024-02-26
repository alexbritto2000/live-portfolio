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
                    position="Angular Developer"
                    companyLink="https://dotcod.in/"
                    company="Dotcod"
                    time="Ang 2022 - Present"
                    address="Bengaluru, Karnataka 560076"
                    work="At Dotcod, I spearheaded the development of a dynamic currency conversion web application, implemented robust KYC verification systems, and engineered an intuitive online job portal application. These projects showcase my adeptness in crafting scalable, user-centric solutions that address diverse business needs while leveraging cutting-edge technologies." />

                    <Details 
                    position="Angular Intern"
                    companyLink="https://www.linkedin.com/company/sabbatech/about/"
                    company="Sabbatech"
                    time="April 2022 - Ang 2022"
                    address="Chennai"
                    work="I successfully tackled Jira tickets and mastered Angular during my tenure at sabbatech, seamlessly integrating these skills into my portfolio to demonstrate practical expertise in web development." />

                    {/* <Details 
                    position="Software Engineer"
                    companyLink="www.google.com"
                    company="Google"
                    time="2022-Present"
                    address="Mountain View"
                    work="Google's 
                    search engine, including improving the accuracy and relevance of search results and 
                    developing new tools for data analysis and visualization." /> */}
                </ul>
            </div>
        </div>
    )
}

export default Experience