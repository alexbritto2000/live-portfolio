import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ position, company, companyLink, time, address, work, highlights = [] }) => {
    const ref = useRef(null);

    return (
        <li ref={ref} className="my-5 first:mt-0 last:mb-0 w-[70%] m-auto flex flex-col items-center justify-between md:w-[88%] sm:w-[94%]">
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 25, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, type: 'spring' }}
                className="w-full bg-light/60 dark:bg-dark/60 p-4 rounded-xl border border-solid border-dark/15 dark:border-light/15 shadow-sm hover:shadow-md transition-shadow"
            >
                <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                    <h3 className='capitalize font-bold text-lg sm:text-base'>
                        {position}&nbsp;
                        {companyLink && companyLink !== '#' ? (
                            <a href={companyLink} target="_blank" rel="noopener noreferrer" className='text-primary dark:text-primaryDark hover:underline'>
                                @{company}
                            </a>
                        ) : (
                            <span className='text-primary dark:text-primaryDark'>
                                @{company}
                            </span>
                        )}
                    </h3>
                    <span className='text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary dark:bg-primaryDark/10 dark:text-primaryDark'>
                        {time}
                    </span>
                </div>

                <span className='capitalize font-medium text-[11px] text-dark/60 dark:text-light/60 block mb-1.5'>
                    📍 {address}
                </span>

                <p className='font-medium w-full text-xs text-dark/90 dark:text-light/90 leading-relaxed mb-2'>
                    {work}
                </p>

                {highlights.length > 0 && (
                    <ul className='space-y-1 text-[11px] text-dark/80 dark:text-light/80 border-t border-dark/10 dark:border-light/10 pt-2'>
                        {highlights.map((point, index) => (
                            <li key={index} className='leading-relaxed flex items-start gap-1.5'>
                                <span className="text-primary dark:text-primaryDark font-bold mt-0.5">•</span>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </motion.div>
        </li>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });

    return (
        <section className='my-16 md:my-12 w-full'>
            <div className="text-center mb-8 md:mb-6">
                <span className="text-xs font-bold tracking-widest text-primary dark:text-primaryDark uppercase">
                    Career Journey
                </span>
                <h2 className='font-bold text-3xl md:text-2xl text-center mt-1 text-dark dark:text-light'>
                    Experience
                </h2>
            </div>

            <div ref={ref} className='w-[85%] mx-auto relative lg:w-[94%] md:w-full'> 
                <motion.div
                    style={{ scaleY: scrollYProgress }} 
                    className='absolute left-9 top-0 w-[3px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'
                />

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details 
                        position="Full Stack Developer"
                        company="Blackstone Shipping Private Limited"
                        companyLink="#"
                        time="Sept 2025 – Present"
                        address="Chennai, Tamil Nadu"
                        work="Leading backend architecture and UI implementation for the enterprise BLISS shipping ERP, automating core maritime freight logistics, vessel tracking, and cargo operations."
                        highlights={[
                            "Design and develop .NET Core backend APIs for the BLISS shipping ERP, implementing freight, vessel, and cargo business logic.",
                            "Model and maintain SQL Server databases using Entity Framework Core, including schema design, code-first migrations, and optimized LINQ queries.",
                            "Build Angular screens that consume these APIs, translating shipping workflows into end-to-end full-stack solutions."
                        ]}
                    />

                    <Details 
                        position="Full Stack Developer"
                        company="Dotcod Innovation Pvt Ltd"
                        companyLink="https://dotcod.in/"
                        time="Aug 2022 – Sept 2025"
                        address="Bangalore, Karnataka"
                        work="Engineered and delivered enterprise backend services, normalized databases, and interactive web applications across recruitment portals, LMS platforms, and fintech money transfer services."
                        highlights={[
                            "Developed .NET Core backend services and RESTful APIs for enterprise applications across job portals, LMS, and fintech platforms.",
                            "Designed database schemas and data access logic with SQL Server and Entity Framework Core, optimizing APIs for performance and reliability.",
                            "Built Angular and React frontends consuming these APIs; participated in code reviews and architectural decisions.",
                            "Set up and maintained Jenkins CI/CD pipelines to automate build, test, and deployment workflows."
                        ]}
                    />

                    <Details 
                        position="Intern – Frontend Developer"
                        company="SABBATECH"
                        companyLink="https://www.linkedin.com/company/sabbatech/about/"
                        time="Apr 2022 – Aug 2022"
                        address="Chennai, Tamil Nadu"
                        work="Contributed to production Angular applications, delivering UI features, bug fixes, and participating in agile sprint ceremonies."
                        highlights={[
                            "Contributed to Angular projects, implementing features and UI enhancements.",
                            "Collaborated in Agile teams, resolving Jira tickets and writing clean, maintainable TypeScript and SCSS."
                        ]}
                    />
                </ul>
            </div>
        </section>
    );
};

export default Experience;
