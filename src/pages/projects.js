import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from "next/image";
import { GithubIcon } from '@/components/Icons'
import hirewalksImg from "../../public/images/projects/hirewalks.png"
import degpegImg from "../../public/images/projects/degpeg.png"
import portfolioImg from "../../public/images/projects/portfolio.png"
import mlImg from "../../public/images/projects/ml.png"
import kadayanallurImg from "../../public/images/projects/kadayanallur.png"
import instafidoImg from "../../public/images/projects/instafido.png"
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'
import StructuredData from '@/components/StructuredData'

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, stack, img, link = "#", github = "" }) => {
    return (
        <article className='w-full flex items-center justify-between relative rounded-2xl border border-solid border-dark/20 dark:border-light/20 bg-light/80 shadow-lg p-6 dark:bg-dark/80 lg:flex-col lg:p-5 xs:p-4 hover:shadow-2xl transition-all'>
            <div className='w-1/2 cursor-pointer overflow-hidden rounded-xl lg:w-full'>
                <FramerImage 
                    src={img} 
                    alt={title} 
                    className="w-full h-auto max-h-[300px] object-cover rounded-xl" 
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                    priority 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </div>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-4'>
                <span className='text-primary font-bold text-xs uppercase tracking-wider dark:text-primaryDark'>
                    {type}
                </span>
                <h2 className='my-1.5 w-full text-left text-xl font-bold dark:text-light sm:text-lg'>
                    {title}
                </h2>

                <p className='my-1.5 font-medium text-dark/85 dark:text-light/85 text-xs leading-relaxed'>
                    {summary}
                </p>

                {stack && (
                    <div className='my-2 flex flex-wrap gap-1'>
                        {stack.split(',').map((tech, i) => (
                            <span 
                                key={i} 
                                className='text-[10px] font-semibold px-2 py-0.5 rounded-md bg-dark/5 text-dark dark:bg-light/10 dark:text-light border border-dark/10 dark:border-light/10'
                            >
                                {tech.trim()}
                            </span>
                        ))}
                    </div>
                )}

                <div className='mt-2 flex items-center gap-3'>
                    {github && (
                        <Link href={github} target="_blank" className='w-7 text-dark dark:text-light hover:opacity-80 transition-opacity'>
                            <GithubIcon />
                        </Link>
                    )}

                    {link && link !== '#' && (
                        <Link 
                            href={link} 
                            target="_blank" 
                            className='rounded-xl bg-dark text-light p-1.5 px-4 text-xs font-semibold dark:bg-light dark:text-dark hover:opacity-90 transition-all'
                        >
                            Visit Project →
                        </Link>
                    )}
                </div>
            </div>
        </article>
    );
};

const Project = ({ title, type, summary, stack, img, link = "#", github = "" }) => {
    return (
        <article className='w-full flex flex-col items-center justify-between rounded-2xl border border-solid border-dark/20 dark:border-light/20 bg-light/80 p-4 relative dark:bg-dark/80 xs:p-3 shadow-md hover:shadow-xl transition-all'>
            <div className='w-full cursor-pointer overflow-hidden rounded-xl'>
                <FramerImage 
                    src={img} 
                    alt={title} 
                    className="w-full h-44 object-cover rounded-xl"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.2 }} 
                />
            </div>

            <div className='w-full flex flex-col items-start justify-between mt-3 flex-grow'>
                <span className='text-primary font-bold text-[11px] uppercase tracking-wider dark:text-primaryDark'>
                    {type}
                </span>
                <h2 className='my-1 w-full text-left text-lg font-bold dark:text-light'>
                    {title}
                </h2>

                <p className='my-1 font-medium text-dark/80 dark:text-light/80 text-xs leading-relaxed'>
                    {summary}
                </p>

                {stack && (
                    <div className='my-2 flex flex-wrap gap-1'>
                        {stack.split(',').map((tech, i) => (
                            <span 
                                key={i} 
                                className='text-[10px] font-semibold px-2 py-0.5 rounded bg-dark/5 text-dark dark:bg-light/10 dark:text-light border border-dark/10 dark:border-light/10'
                            >
                                {tech.trim()}
                            </span>
                        ))}
                    </div>
                )}

                <div className='w-full mt-2.5 flex items-center justify-between pt-2 border-t border-dark/10 dark:border-light/10'>
                    {link && link !== '#' ? (
                        <Link href={link} target="_blank" className='text-xs font-semibold underline text-primary dark:text-primaryDark'>
                            Visit Project →
                        </Link>
                    ) : (
                        <span className='text-[10px] font-medium text-dark/50 dark:text-light/50'>
                            Enterprise Internal
                        </span>
                    )}

                    {github && (
                        <Link href={github} target="_blank" className='w-5 text-dark dark:text-light hover:opacity-80 transition-opacity'>
                            <GithubIcon />
                        </Link>
                    )}
                </div>
            </div>
        </article>
    );
};

const Projects = () => {
    return (
        <>
            <Head>
                <title>Alex Britto - Projects | .NET Full Stack Developer Portfolio</title>
                <meta name="description" content="Explore Alex Britto's .NET Full Stack development projects including enterprise shipping ERP (BLISS), HireWalks job portal, fintech money transfer, LMS admin portal, and Next.js portfolio." />
                <meta name="keywords" content="Alex Britto Projects, .NET Core Projects, Entity Framework Core, SQL Server, Angular Projects, React Projects, HireWalks, BLISS ERP, Full Stack Portfolio" />
            </Head>
            <StructuredData type="projects" />
            <TransitionEffect />

            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-6 sm:pt-4'>
                    <div className="text-center mb-8">
                        <span className="text-xs font-bold tracking-widest text-primary dark:text-primaryDark uppercase">
                            Portfolio Showcase
                        </span>
                        <AnimatedText 
                            text="Featured Enterprise Projects" 
                            className="!text-3xl md:!text-2xl sm:!text-xl mt-1 text-center" 
                        />
                        <p className="text-xs font-medium text-dark/70 dark:text-light/70 max-w-xl mx-auto mt-1.5">
                            End-to-end full stack enterprise solutions built with .NET Core, SQL Server, Entity Framework Core, Angular, and React.
                        </p>
                    </div>

                    <div className='grid grid-cols-12 gap-6 max-w-6xl mx-auto'>
                        {/* Project 1 - BLISS Shipping ERP */}
                        <div className="col-span-12">
                            <FeaturedProject 
                                title="BLISS – Shipping ERP Platform"
                                type="Enterprise ERP & Logistics • Blackstone Shipping"
                                summary="Enterprise logistics ERP solution. Engineered .NET Core backend APIs implementing freight quotation, vessel schedules, container tracking, and cargo manifests business logic. Modeled SQL Server relational databases with Entity Framework Core migrations and optimized LINQ data access layers, consumed by responsive Angular operator dashboards."
                                stack=".NET Core, Entity Framework Core, SQL Server, Angular, RESTful APIs, Git"
                                img={kadayanallurImg}
                                link='#'
                                github=''
                            />
                        </div>

                        {/* Project 2 - HireWalks */}
                        <div className="col-span-6 sm:col-span-12">
                            <Project 
                                title="HireWalks & GTX Job Portals"
                                type="Recruitment SaaS • Dotcod Innovation"
                                summary="Enterprise recruitment web platform supporting end-to-end hiring workflows. Built backend logic and data models for admin/recruiter portals covering candidate pipeline tracking, interview scheduling, and offers management; developed dynamic Angular/React client screens, deployed via automated Jenkins CI/CD pipelines."
                                stack="Angular, React, .NET Core, RESTful APIs, Jenkins, Firebase, Git"
                                img={hirewalksImg}
                                link='https://hirewalks.com/'
                                github=''
                            />
                        </div>

                        {/* Project 3 - International Money Transfer */}
                        <div className="col-span-6 sm:col-span-12">
                            <Project 
                                title="International Money Transfer Platform"
                                type="Fintech & Remittance • Dotcod Innovation"
                                summary="Secure cross-border money transfer and currency exchange platform. Built backend services with .NET Core for currency calculation, transaction validation, and SQL Server data models. Integrated Onfido identity verification (KYC) and built an Angular frontend with Reactive Forms."
                                stack="Angular, .NET Core, SQL Server, RESTful APIs, Onfido (KYC), Git"
                                img={instafidoImg}
                                link='#'
                                github=''
                            />
                        </div>

                        {/* Project 4 - LMS Admin Portal */}
                        <div className="col-span-6 sm:col-span-12">
                            <Project 
                                title="LMS Platform for Yoga Institute – Admin Portal"
                                type="EdTech & Administration • Dotcod Innovation"
                                summary="Administrative dashboard and learning management system. Built backend data models and .NET Core APIs powering quiz creation, curriculum scheduling, batch and lesson management, student attendance tracking, and multi-role RBAC security."
                                stack="Angular, .NET Core, SQL Server, RESTful APIs, Git"
                                img={degpegImg}
                                link='#'
                                github=''
                            />
                        </div>

                        {/* Project 5 - Portfolio Website */}
                        <div className="col-span-6 sm:col-span-12">
                            <Project 
                                title="Modern Developer Portfolio & Interview Hub"
                                type="Personal Project"
                                summary="Personal developer portfolio built with Next.js, React, and Tailwind CSS. Features Server-Side Rendering (SSR), dark/light theme switching, technical interview Q&A repository, interactive web resume, and downloadable PDF CV."
                                stack="Next.js, React, Tailwind CSS, Framer Motion"
                                img={portfolioImg}
                                link='https://alexbritto-portfolio.vercel.app'
                                github='https://github.com/alexbritto2000'
                            />
                        </div>

                        {/* Project 6 - Machine Learning */}
                        <div className="col-span-6 sm:col-span-12">
                            <Project 
                                title="Heart Disease Diagnostic Predictive Model"
                                type="Healthcare AI & Machine Learning"
                                summary="Predictive diagnostic machine learning model using the Random Forest classification algorithm to detect heart disease indicators from clinical health metrics. Serialized the trained model using Python pickle for fast, reliable inference in diagnostic workflows."
                                stack="Python, Machine Learning, Random Forest, Scikit-learn, Pickle"
                                img={mlImg}
                                link='https://github.com/alexbritto2000/heart-disease'
                                github='https://github.com/alexbritto2000/heart-disease'
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default Projects;
