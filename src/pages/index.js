import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/Img.svg";
import AnimatedText from "@/components/AnimatedText";
import Link from 'next/link';
import HireMe from "@/components/HireMe";
import TransitionEffect from '@/components/TransitionEffect';
import StructuredData from '@/components/StructuredData';

export default function Home() {
  const techPills = [
    "C#", ".NET Core 8", "ASP.NET Web API", "Entity Framework Core",
    "SQL Server", "Angular", "React", "TypeScript", "Jenkins CI/CD"
  ];

  return (
    <>
      <Head>
        <title>Alex Britto - .NET Full Stack Developer | .NET Core, Angular &amp; React</title>
        <meta name="description" content="Alex Britto - .NET Full Stack Developer with 4+ years of experience building scalable backend systems with .NET Core, SQL Server, and EF Core, paired with Angular and React frontends." />
        <meta name="keywords" content="Alex Britto, .NET Full Stack Developer, .NET Core, C#, ASP.NET Core Web API, Entity Framework Core, SQL Server, Angular, React, RESTful APIs, Portfolio" />
      </Head>
      <StructuredData type="homepage" />
      <TransitionEffect />

      <main className="flex items-center text-dark w-full min-h-[calc(100vh-80px)] dark:text-light py-4">
        <Layout className="pt-2 md:pt-4">
          <div className="flex items-center justify-between w-full lg:flex-col gap-8">
            {/* Visual Hero Illustration */}
            <div className="w-1/2 md:w-full flex justify-center">
              <div className="relative max-w-md w-full">
                <Image
                  src={profilePic}
                  alt="Alex Britto - .NET Full Stack Developer"
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
              </div>
            </div>

            {/* Hero Copy */}
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <div className="self-start lg:self-center mb-2.5">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary dark:bg-primaryDark/10 dark:text-primaryDark border border-primary/20">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  4+ Years Experience • .NET Full Stack Developer
                </span>
              </div>

              <AnimatedText
                text="Engineering Scalable Systems With .NET &amp; Modern Frontends."
                className="!text-3xl md:!text-2xl sm:!text-xl leading-snug !text-left lg:!text-center"
              />

              <p className="my-3 text-xs sm:text-xs font-medium text-dark/85 dark:text-light/85 leading-relaxed text-left lg:text-center">
                Specialized in building high-throughput enterprise systems using <strong>.NET Core, SQL Server, and Entity Framework Core</strong>, paired with reactive <strong>Angular and React</strong> client applications. Proven delivery across shipping ERP (BLISS), fintech international remittance, recruiter portals, and automated Jenkins CI/CD pipelines.
              </p>

              {/* Tech stack badge pills */}
              <div className="flex items-center flex-wrap gap-1.5 mb-5 self-start lg:self-center justify-start lg:justify-center">
                {techPills.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-semibold px-2.5 py-0.5 rounded-lg bg-dark/5 dark:bg-light/10 text-dark dark:text-light border border-dark/10 dark:border-light/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center self-start mt-1 lg:self-center flex-wrap gap-2.5">
                <Link
                  href="/Alex_Britto_Resume.pdf"
                  download="Alex_Britto_Resume.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2 px-4 rounded-xl text-xs font-semibold hover:bg-light hover:text-dark border-2 border-solid border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light shadow-md transition-all"
                >
                  📥 Download Resume
                </Link>
                <Link
                  href="/resume"
                  className="flex items-center bg-transparent text-dark dark:text-light p-2 px-4 rounded-xl text-xs font-semibold hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark border-2 border-solid border-dark dark:border-light transition-all"
                >
                  View Resume
                </Link>
                <Link
                  href="/interview"
                  className="flex items-center bg-primary text-light dark:bg-primaryDark dark:text-dark p-2 px-4 rounded-xl text-xs font-semibold hover:opacity-90 transition-all shadow-md"
                >
                  Interview Q&amp;A 💡
                </Link>
                <Link
                  href="mailto:alexbritto099@gmail.com"
                  className="text-xs font-semibold capitalize text-dark underline dark:text-light ml-2 hover:text-primary dark:hover:text-primaryDark"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
      </main>
    </>
  );
}
