import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from "next/image";
import { GithubIcon } from '@/components/Icons'
import project1 from "../../public/images/projects/hirewalks.png"
import degpeg from "../../public/images/projects/degpeg.png"
import portfolio from "../../public/images/projects/portfolio.png"
import ml from "../../public/images/projects/ml.png"
import profilePic from "../../public/images/profile/developer-pic-2.jpg"
import {motion} from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summary, img, link, github}) => {

    return(
        <article className='w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />

            <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <FramerImage src={img} alt={title} className="w-full h-auto" 
                whileHover={{scale: 1.05}}
                transition={{duration:0.2}}
                priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"/>
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>

                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>

                <div className='mt-2 flex items-center'>
                    {/* <Link href={github} target="_blank" className='w-10'>
                        <GithubIcon />
                    </Link> */}

                    <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm-text-base'>
                        Visit Project
                    </Link>
                </div>
            </div>

        </article>
    )
}

const Project = ({title, type, img, link, github}) => {
    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>

            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />
            <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className="w-full h-60"
                whileHover={{scale: 1.05}}
                transition={{duration:0.2}} />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left tetx-3xl font-bold lg:text-2xl'>{title}</h2>
                </Link>

                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target="_blank" className='text-lg font-semibold underline md:text-base'>
                        Visit
                    </Link>

                    {/* <Link href={github} target="_blank" className='w-8 md:w-6'>
                        <GithubIcon />
                    </Link> */}
                </div>
            </div>

        </article>
    )
}

const Projects = ({children, className=''}) => {
    return (
        <>
            <Head>
                <title>Alex Britto - Projects Portfolio | Full Stack Developer Projects</title>
                <meta name="description" content="Explore Alex Britto's portfolio of web development projects. Featured projects include HireWalks, DegPeg, ML applications, and more. Built with React, Angular, Next.js, and modern web technologies." />
                <meta name="keywords" content="Alex Britto Projects, Web Development Projects, React Projects, Angular Projects, Next.js Projects, Full Stack Projects, Portfolio Projects, HireWalks, DegPeg, ML Projects" />
                <meta property="og:title" content="Alex Britto - Projects Portfolio | Full Stack Developer Projects" />
                <meta property="og:description" content="Explore Alex Britto's portfolio of web development projects. Featured projects include HireWalks, DegPeg, ML applications, and more." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://your-domain.com/projects" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Alex Britto - Projects Portfolio | Full Stack Developer Projects" />
                <meta name="twitter:description" content="Explore Alex Britto's portfolio of web development projects." />
            </Head>
            <TransitionEffect />

            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Imagination Trumps Knowledge!" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'></AnimatedText>


                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className="col-span-12">
                            <FeaturedProject 
                                title="Recruitment Web Application"
                                img={project1}
                                summary="I have experience working on a web application similar to LinkedIn for recruitment purposes at HireWalks. This project was developed during my time at DotCod, where I actively contributed to its implementation and enhancement."
                                link='https://hirewalks.com/'
                                github='/'
                                type="Featured Project"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                        <Project 
                                title="Online Video Streaming Web Application"
                                img={degpeg}
                                summary="Contributed to the development of DegPeg, an online video streaming app, incorporating extensive analytics graphs using Chart.js. Although the project is currently not live, it highlights my proficiency in web development and data visualization. Executed this within DotCod, showcasing hands-on experience in real-world projects."
                                link='/'
                                github='/'
                                type="Featured Project"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project 
                                title="Next JS Portfolio Web Application"
                                img={portfolio}
                                summary=""
                                link='/'
                                github='/'
                                type="Featured Project"
                            />
                        </div>

  
                        {/* <div className="col-span-12">
                            <FeaturedProject 
                                title="Crypto Screener Application"
                                img={project1}
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                                local currency."
                                link='/'
                                github='/'
                                type="Featured Project"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project 
                                title="Crypto Screener Application"
                                img={project1}
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                                local currency."
                                link='/'
                                github='/'
                                type="Featured Project"
                            />
                        </div> */}
                        {/* <div className="col-span-6 sm:col-span-12">
                            <Project 
                                title="Crypto Screener Application"
                                img={project1}
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                                local currency."
                                link='/'
                                github='/'
                                type="Featured Project"
                            />
                        </div> */}
                    </div>

                    <AnimatedText text="Machine Learning" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl pt-10'></AnimatedText>

                    <div className="col-span-12">
                        <FeaturedProject 
                            title="Heart Disease Prediction"
                            img={ml}
                            summary="Developed a predictive model using the Random Forest algorithm to detect heart disease within the application, enhancing its diagnostic capabilities. Leveraged machine learning techniques to create a pickle model for efficient and accurate predictions."
                            link='https://github.com/alexbritto2000/heart-disease'
                            github='https://github.com/alexbritto2000/heart-disease'
                            type="Featured Project"
                        />
                    </div>

                    <div className="col-span-12 pt-16">
                        <FeaturedProject
                            title="Heart Disease Prediction"
                            img={ml}
                            summary="Developed a predictive model using the Random Forest algorithm to detect heart disease within the application, enhancing its diagnostic capabilities. Leveraged machine learning techniques to create a pickle model for efficient and accurate predictions."
                            link='https://github.com/alexbritto2000/heart-disease'
                            github='https://github.com/alexbritto2000/heart-disease'
                            type="Featured Project"
                        />
                    </div>

                </Layout>
            </main>
        </>
    )
}

export default Projects