import AnimatedText from '@/components/AnimatedText'
import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import profilePic from "../../public/images/20240105_220406.jpg"
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumbers = ({value}) => {
const ref = useRef(null);

const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue, { duration: 3000 })
const isInView = useInView(ref, {once: true});

useEffect(()=>{
    if(isInView){
        motionValue.set(value);
    }
}, [isInView, value, motionValue])

useEffect(() => {
    springValue.on("change", (latest) => {
        console.log(latest)
        if(ref.current && latest.toFixed(0) <= value){
            ref.current.textContent = latest.toFixed(0);
        }
    })
}, [springValue,value])

    return <span ref={ref}></span>
}

const About = ({children, className=''}) => {
    return (
        <>
            <Head>
                <title>Alex Britto - About Me | Full Stack Developer & UI/UX Designer</title>
                <meta name="description" content="Learn more about Alex Britto, a passionate Full Stack Developer and UI/UX Designer with 3+ years of experience creating beautiful, functional digital experiences. Expert in React, Angular, Next.js, and modern web technologies." />
                <meta name="keywords" content="Alex Britto, Full Stack Developer, UI/UX Designer, React Developer, Angular Developer, Next.js Developer, Web Developer, Frontend Developer, Backend Developer, Portfolio" />
                <meta property="og:title" content="Alex Britto - About Me | Full Stack Developer & UI/UX Designer" />
                <meta property="og:description" content="Learn more about Alex Britto, a passionate Full Stack Developer and UI/UX Designer with 3+ years of experience creating beautiful, functional digital experiences." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://your-domain.com/about" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Alex Britto - About Me | Full Stack Developer & UI/UX Designer" />
                <meta name="twitter:description" content="Learn more about Alex Britto, a passionate Full Stack Developer and UI/UX Designer with 3+ years of experience." />
            </Head>
            <TransitionEffect />

            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Passion Fuels Purpose!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">Biography</h2>
                            <p className='font-medium'>
                            Hi, I'm Alex Britto, a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences. With 3 years of experience in the field. I am always looking for new and innovative ways to bring my clients' visions to life.
                            </p>

                            <p className='my-4 font-medium'>
                            I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users. 
                            </p>

                            <p className='font-medium'>
                            Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                            </p>

                        </div>

                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8 '>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                                <Image src={profilePic} alt="AlexBritto" className="w-full h-auto rounded-2xl" priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </div>


                        <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={10}/>+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>satisfied clients</h2>
                            </div>

                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={10}/>+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>projects completed</h2>
                            </div>

                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={1}/>+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>year of experience</h2>
                            </div>
                        </div>

                    </div>
                
                <Skills />
                <Experience />
                <Education />
                </Layout>
            </main>
        </>
    )
}

export default About