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
import Link from 'next/link'

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2500 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && Number(latest.toFixed(0)) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <>
      <Head>
        <title>Alex Britto - About Me | .NET Full Stack Developer</title>
        <meta
          name="description"
          content="Learn more about Alex Britto, a .NET Full Stack Developer with 4+ years of experience building enterprise systems with .NET Core, SQL Server, Entity Framework Core, Angular, and React."
        />
        <meta
          name="keywords"
          content="Alex Britto, .NET Core Developer, Full Stack Developer, Entity Framework Core, SQL Server, Angular Developer, React Developer, C#, Web API, Portfolio"
        />
      </Head>
      <TransitionEffect />

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-6 sm:pt-4">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="!text-3xl md:!text-2xl sm:!text-xl mb-6 text-center"
          />

          {/* Bio + Image + Quick Stats Grid */}
          <div className="grid w-full grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
            {/* Biography */}
            <div className="col-span-6 lg:col-span-7 md:col-span-12 flex flex-col items-start justify-start">
              <span className="text-xs font-bold tracking-widest text-primary dark:text-primaryDark uppercase mb-1">
                About Alex Britto
              </span>
              <h2 className="mb-3 text-xl font-bold text-dark dark:text-light">
                Enterprise .NET &amp; Modern Frontend Engineer
              </h2>
              <p className="font-medium text-dark/90 dark:text-light/90 leading-relaxed text-xs sm:text-xs">
                Hi, I&apos;m <strong>Alex Britto</strong>, a dedicated <strong>.NET Full Stack Developer</strong> with <strong>4+ years of experience</strong> architecting and implementing backend services using <strong>.NET Core, SQL Server, and Entity Framework Core</strong>, paired with dynamic <strong>Angular and React</strong> frontends.
              </p>

              <p className="my-2.5 font-medium text-dark/90 dark:text-light/90 leading-relaxed text-xs sm:text-xs">
                Across Blackstone Shipping and Dotcod Innovation, I have engineered solutions for enterprise shipping ERPs (BLISS), international currency transfer platforms, recruitment tracking portals (HireWalks &amp; GTX), and learning management systems. My core strength lies in designing normalized relational databases, high-performance LINQ data layers, secure RESTful Web APIs, and automated Jenkins CI/CD pipelines.
              </p>

              <p className="font-medium text-dark/90 dark:text-light/90 leading-relaxed text-xs sm:text-xs">
                I believe great software is defined by clean architecture, SOLID principles, high concurrency resilience, and intuitive user experiences.
              </p>

              <div className="mt-4 flex items-center gap-3 flex-wrap">
                <Link
                  href="/Alex_Britto_Resume.pdf"
                  download="Alex_Britto_Resume.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2 px-4 rounded-lg text-xs font-semibold hover:bg-light hover:text-dark border-2 border-solid border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light transition-all shadow-sm"
                >
                  📥 Download Resume
                </Link>
                <Link
                  href="/resume"
                  className="text-xs font-semibold underline text-primary dark:text-primaryDark"
                >
                  View Online Resume →
                </Link>
                <Link
                  href="/interview"
                  className="text-xs font-semibold underline text-primary dark:text-primaryDark ml-2"
                >
                  Interview Q&amp;A 💡
                </Link>
              </div>
            </div>

            {/* Profile Image */}
            <div className="col-span-3 lg:col-span-5 md:col-span-12 flex justify-center">
              <div className="relative w-full max-w-xs rounded-2xl border-2 border-solid border-dark bg-light p-3 dark:bg-dark dark:border-light shadow-xl">
                <div className="absolute top-0 -right-2 -z-10 w-[102%] h-[103%] rounded-[1.5rem] bg-dark dark:bg-light" />
                <Image
                  src={profilePic}
                  alt="Alex Britto"
                  className="w-full h-auto rounded-xl object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>

            {/* Stats Cards Column */}
            <div className="col-span-3 lg:col-span-12 flex flex-col justify-between gap-3 md:flex-row md:flex-wrap">
              <div className="p-4 rounded-2xl bg-dark/5 dark:bg-light/5 border border-dark/10 dark:border-light/10 text-center flex-1 min-w-[130px]">
                <span className="block text-4xl font-bold text-primary dark:text-primaryDark">
                  <AnimatedNumbers value={4} />+
                </span>
                <span className="text-[11px] font-semibold capitalize text-dark/75 dark:text-light/75 mt-1 block">
                  Years Experience
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-dark/5 dark:bg-light/5 border border-dark/10 dark:border-light/10 text-center flex-1 min-w-[130px]">
                <span className="block text-4xl font-bold text-dark dark:text-light">
                  <AnimatedNumbers value={15} />+
                </span>
                <span className="text-[11px] font-semibold capitalize text-dark/75 dark:text-light/75 mt-1 block">
                  Projects &amp; Modules
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-dark/5 dark:bg-light/5 border border-dark/10 dark:border-light/10 text-center flex-1 min-w-[130px]">
                <span className="block text-4xl font-bold text-dark dark:text-light">
                  <AnimatedNumbers value={10} />+
                </span>
                <span className="text-[11px] font-semibold capitalize text-dark/75 dark:text-light/75 mt-1 block">
                  Platforms &amp; Clients
                </span>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
