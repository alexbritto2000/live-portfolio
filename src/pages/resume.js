import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import TransitionEffect from '@/components/TransitionEffect';
import Link from 'next/link';

const Resume = () => {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <>
      <Head>
        <title>Alex Britto - Resume | .NET Full Stack Developer</title>
        <meta
          name="description"
          content="Resume of Alex Britto - .NET Full Stack Developer with 4+ years of experience in .NET Core, SQL Server, Entity Framework Core, Angular, and React."
        />
      </Head>
      <TransitionEffect />

      <main className="w-full min-h-screen py-10 print:py-0 print:min-h-0 dark:text-light">
        <Layout className="pt-2 sm:pt-1 print:p-0 print:m-0 print:max-w-full print:w-full">
          {/* Header Action Bar - Hidden in Print */}
          <div className="flex items-center justify-between mb-6 sm:flex-col sm:gap-3 print:hidden max-w-4xl mx-auto">
            <div>
              <span className="text-primary dark:text-primaryDark text-xs font-bold uppercase tracking-wider">
                Curriculum Vitae
              </span>
              <h1 className="text-2xl font-bold text-dark dark:text-light sm:text-xl mt-0.5">
                Alex Britto&apos;s Resume
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="flex items-center bg-transparent border-2 border-solid border-dark dark:border-light text-dark dark:text-light font-semibold px-3.5 py-1.5 rounded-lg hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark transition-all text-xs"
              >
                🖨️ Print
              </button>
              <Link
                href="/Alex_Britto_Resume.pdf"
                download="Alex_Britto_Resume.pdf"
                target="_blank"
                className="flex items-center bg-dark text-light dark:bg-light dark:text-dark font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light border-2 border-solid border-dark dark:border-light transition-all text-xs"
              >
                📥 Download Resume
              </Link>
            </div>
          </div>

          {/* Resume Document - Zero padding and border in print to eliminate all extra white space */}
          <div className="resume-sheet bg-light dark:bg-dark border border-solid border-dark/25 dark:border-light/25 rounded-2xl p-8 md:p-5 shadow-xl max-w-4xl mx-auto print:border-none print:shadow-none print:rounded-none print:p-0 print:m-0 print:w-full print:max-w-full">
            {/* Header / Contact Details */}
            <div className="text-center pb-4 print:pb-2 border-b border-dark/20 dark:border-light/20 print:border-b-2 print:border-gray-900">
              <h2 className="text-2xl font-bold tracking-tight text-dark dark:text-light sm:text-xl uppercase print:text-xl print:tracking-normal">
                Alex Britto
              </h2>
              <p className="text-primary dark:text-primaryDark font-semibold text-sm sm:text-xs mt-0.5 print:text-xs print:text-gray-800">
                .NET Core Developer | SQL &amp; Entity Framework Core | Angular &amp; React
              </p>
              <div className="flex items-center justify-center flex-wrap gap-x-3 gap-y-1 text-xs text-dark/75 dark:text-light/75 mt-2 font-medium print:text-[8pt] print:mt-1">
                <span>📞 882-582-6770</span>
                <span className="print:inline">•</span>
                <a href="mailto:alexbritto099@gmail.com" className="hover:underline text-primary dark:text-primaryDark print:text-gray-800">
                  ✉️ alexbritto099@gmail.com
                </a>
                <span className="print:inline">•</span>
                <a
                  href="https://linkedin.com/in/alexbritto2000"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline print:text-gray-800"
                >
                  🔗 linkedin.com/in/alexbritto2000
                </a>
                <span className="print:inline">•</span>
                <a
                  href="https://alexbritto-portfolio.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline print:text-gray-800"
                >
                  🌐 alexbritto-portfolio.vercel.app
                </a>
              </div>
            </div>

            {/* Summary */}
            <div className="py-4 print:py-2 border-b border-dark/20 dark:border-light/20 print:border-b print:border-gray-300 print-avoid-break">
              <h3 className="text-sm font-bold uppercase tracking-wider text-dark dark:text-light mb-1.5 print:text-[10pt] print:mb-0.5">
                Summary
              </h3>
              <p className="text-dark/90 dark:text-light/90 text-xs sm:text-[11px] leading-relaxed text-justify print:text-[8.5pt] print:leading-snug">
                Full Stack Developer with <strong>4+ years of experience</strong> building backend systems with <strong>.NET Core, SQL Server, and Entity Framework Core</strong>, paired with <strong>Angular and React</strong> frontends. Strong in REST API design, database modelling, and data access layers, with hands-on Jenkins CI/CD experience across enterprise ERP, shipping, LMS, job portal, and fintech platforms.
              </p>
            </div>

            {/* Technical Skills */}
            <div className="py-4 print:py-2 border-b border-dark/20 dark:border-light/20 print:border-b print:border-gray-300 print-avoid-break">
              <h3 className="text-sm font-bold uppercase tracking-wider text-dark dark:text-light mb-2.5 print:text-[10pt] print:mb-1">
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs print:grid-cols-1 print:gap-1 print:text-[8.5pt]">
                <div className="p-2 print:p-0 rounded-lg bg-dark/5 dark:bg-light/5 print:bg-transparent">
                  <span className="font-bold text-dark dark:text-light inline mr-1">
                    Backend:
                  </span>
                  <span className="text-dark/85 dark:text-light/85">
                    C#, .NET Core, ASP.NET Core Web API, RESTful API Design, LINQ
                  </span>
                </div>

                <div className="p-2 print:p-0 rounded-lg bg-dark/5 dark:bg-light/5 print:bg-transparent">
                  <span className="font-bold text-dark dark:text-light inline mr-1">
                    Database / ORM:
                  </span>
                  <span className="text-dark/85 dark:text-light/85">
                    SQL Server, T-SQL, Stored Procedures, Query Optimization, Entity Framework Core (Code-First &amp; DB-First), Migrations
                  </span>
                </div>

                <div className="p-2 print:p-0 rounded-lg bg-dark/5 dark:bg-light/5 print:bg-transparent">
                  <span className="font-bold text-dark dark:text-light inline mr-1">
                    Frontend:
                  </span>
                  <span className="text-dark/85 dark:text-light/85">
                    Angular, React, TypeScript, JavaScript, HTML, CSS, Reactive Forms
                  </span>
                </div>

                <div className="p-2 print:p-0 rounded-lg bg-dark/5 dark:bg-light/5 print:bg-transparent">
                  <span className="font-bold text-dark dark:text-light inline mr-1">
                    DevOps &amp; Tools:
                  </span>
                  <span className="text-dark/85 dark:text-light/85">
                    Jenkins (CI/CD Pipelines), Git, GitHub, Bitbucket, Firebase
                  </span>
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="py-4 print:py-2 border-b border-dark/20 dark:border-light/20 print:border-b print:border-gray-300">
              <h3 className="text-sm font-bold uppercase tracking-wider text-dark dark:text-light mb-3 print:text-[10pt] print:mb-1">
                Professional Experience
              </h3>

              <div className="space-y-4 print:space-y-2">
                {/* Role 1 */}
                <div className="print-avoid-break">
                  <div className="flex justify-between items-baseline flex-wrap">
                    <h4 className="text-sm font-bold text-dark dark:text-light print:text-[9.5pt]">
                      Full Stack Developer
                    </h4>
                    <span className="text-xs font-semibold text-primary dark:text-primaryDark print:text-[8pt] print:text-gray-700">
                      September 2025 – Present
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-dark/70 dark:text-light/70 mb-1.5 print:text-[8.5pt] print:mb-0.5">
                    Blackstone Shipping Private Limited
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-dark/85 dark:text-light/85 print:space-y-0.5 print:text-[8.5pt] print:leading-snug">
                    <li>
                      Design and develop .NET Core backend APIs for the <strong>BLISS shipping ERP</strong>, implementing freight, vessel, and cargo business logic.
                    </li>
                    <li>
                      Model and maintain SQL Server databases using Entity Framework Core, including schema design, migrations, and optimized LINQ queries.
                    </li>
                    <li>
                      Build Angular screens that consume these APIs, translating shipping workflows into end-to-end full-stack solutions.
                    </li>
                  </ul>
                </div>

                {/* Role 2 */}
                <div className="print-avoid-break">
                  <div className="flex justify-between items-baseline flex-wrap">
                    <h4 className="text-sm font-bold text-dark dark:text-light print:text-[9.5pt]">
                      Full Stack Developer
                    </h4>
                    <span className="text-xs font-semibold text-primary dark:text-primaryDark print:text-[8pt] print:text-gray-700">
                      August 2022 – September 2025
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-dark/70 dark:text-light/70 mb-1.5 print:text-[8.5pt] print:mb-0.5">
                    Dotcod Innovation Pvt Ltd | Bangalore
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-dark/85 dark:text-light/85 print:space-y-0.5 print:text-[8.5pt] print:leading-snug">
                    <li>
                      Developed .NET Core backend services and RESTful APIs for enterprise applications across job portals, LMS, and fintech platforms.
                    </li>
                    <li>
                      Designed database schemas and data access logic with SQL Server and Entity Framework Core, optimizing APIs for performance and reliability.
                    </li>
                    <li>
                      Built Angular and React frontends consuming these APIs; participated in code reviews and architectural decisions.
                    </li>
                    <li>
                      Set up and maintained Jenkins CI/CD pipelines to automate build, test, and deployment workflows.
                    </li>
                  </ul>
                </div>

                {/* Role 3 */}
                <div className="print-avoid-break">
                  <div className="flex justify-between items-baseline flex-wrap">
                    <h4 className="text-sm font-bold text-dark dark:text-light print:text-[9.5pt]">
                      Intern – Frontend Developer
                    </h4>
                    <span className="text-xs font-semibold text-primary dark:text-primaryDark print:text-[8pt] print:text-gray-700">
                      April 2022 – August 2022
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-dark/70 dark:text-light/70 mb-1 print:text-[8.5pt] print:mb-0.5">
                    SABBATECH | Chennai, Tamil Nadu
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-dark/85 dark:text-light/85 print:text-[8.5pt]">
                    <li>
                      Contributed to Angular projects, implementing features and UI enhancements.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="py-4 print:py-2 border-b border-dark/20 dark:border-light/20 print:border-b print:border-gray-300">
              <h3 className="text-sm font-bold uppercase tracking-wider text-dark dark:text-light mb-2.5 print:text-[10pt] print:mb-1">
                Projects
              </h3>

              <div className="space-y-3 print:space-y-1.5">
                <div className="print-avoid-break">
                  <h4 className="text-xs font-bold text-dark dark:text-light print:text-[9pt]">
                    1. BLISS – Shipping ERP Platform <span className="font-normal text-xs text-dark/60 dark:text-light/60 print:text-[8pt]">(Blackstone Shipping Private Limited)</span>
                  </h4>
                  <p className="text-xs text-dark/80 dark:text-light/80 mt-0.5 print:text-[8.5pt] print:leading-snug">
                    • Build .NET Core APIs for business logic and data management, and Angular screens for freight, vessel, and cargo modules.
                  </p>
                  <p className="text-[11px] font-semibold text-primary dark:text-primaryDark mt-0.5 print:text-[8pt] print:text-gray-700">
                    Tech Stack: .NET Core, Entity Framework Core, SQL Server, Angular, RESTful APIs, Git
                  </p>
                </div>

                <div className="print-avoid-break">
                  <h4 className="text-xs font-bold text-dark dark:text-light print:text-[9pt]">
                    2. HireWalks &amp; GTX Job Portals <span className="font-normal text-xs text-dark/60 dark:text-light/60 print:text-[8pt]">(Dotcod Innovation Pvt Ltd)</span>
                  </h4>
                  <p className="text-xs text-dark/80 dark:text-light/80 mt-0.5 print:text-[8.5pt] print:leading-snug">
                    • Built backend logic and data models for admin/recruiter portals covering pipeline stages, offers module, and candidate tracking; developed Angular/React frontends consuming these APIs, deployed via a Jenkins CI/CD pipeline.
                  </p>
                  <p className="text-[11px] font-semibold text-primary dark:text-primaryDark mt-0.5 print:text-[8pt] print:text-gray-700">
                    Tech Stack: Angular, React, .NET Core, RESTful APIs, Jenkins, Firebase, Git
                  </p>
                </div>

                <div className="print-avoid-break">
                  <h4 className="text-xs font-bold text-dark dark:text-light print:text-[9pt]">
                    3. LMS Platform for Yoga Institute – Admin Portal <span className="font-normal text-xs text-dark/60 dark:text-light/60 print:text-[8pt]">(Dotcod Innovation Pvt Ltd)</span>
                  </h4>
                  <p className="text-xs text-dark/80 dark:text-light/80 mt-0.5 print:text-[8.5pt] print:leading-snug">
                    • Built backend data models, APIs, and the Angular admin portal for quiz creation, curriculum, batch, lesson, attendance, and multi-role management.
                  </p>
                  <p className="text-[11px] font-semibold text-primary dark:text-primaryDark mt-0.5 print:text-[8pt] print:text-gray-700">
                    Tech Stack: Angular, .NET Core, SQL, RESTful APIs, Git
                  </p>
                </div>

                <div className="print-avoid-break">
                  <h4 className="text-xs font-bold text-dark dark:text-light print:text-[9pt]">
                    4. International Money Transfer Platform <span className="font-normal text-xs text-dark/60 dark:text-light/60 print:text-[8pt]">(Dotcod Innovation Pvt Ltd)</span>
                  </h4>
                  <p className="text-xs text-dark/80 dark:text-light/80 mt-0.5 print:text-[8.5pt] print:leading-snug">
                    • Built backend logic for currency conversion and international transactions with SQL Server data models, plus an Angular UI using Reactive Forms.
                  </p>
                  <p className="text-[11px] font-semibold text-primary dark:text-primaryDark mt-0.5 print:text-[8pt] print:text-gray-700">
                    Tech Stack: Angular, .NET Core, SQL Server, RESTful APIs, Onfido (KYC), Git
                  </p>
                </div>

                <div className="print-avoid-break">
                  <h4 className="text-xs font-bold text-dark dark:text-light print:text-[9pt]">
                    5. Portfolio Website <span className="font-normal text-xs text-dark/60 dark:text-light/60 print:text-[8pt]">(Personal Project)</span>
                  </h4>
                  <p className="text-xs text-dark/80 dark:text-light/80 mt-0.5 print:text-[8.5pt] print:leading-snug">
                    • Personal portfolio with SSR, animations, and SEO optimization. Demo: alexbritto-portfolio.vercel.app
                  </p>
                  <p className="text-[11px] font-semibold text-primary dark:text-primaryDark mt-0.5 print:text-[8pt] print:text-gray-700">
                    Tech Stack: Next.js, React, Tailwind CSS, Framer Motion
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="pt-4 print:pt-2 print-avoid-break">
              <h3 className="text-sm font-bold uppercase tracking-wider text-dark dark:text-light mb-1.5 print:text-[10pt] print:mb-0.5">
                Education
              </h3>
              <div className="flex justify-between items-baseline flex-wrap">
                <div>
                  <h4 className="text-xs font-bold text-dark dark:text-light print:text-[9pt]">
                    B.Tech – Information Technology
                  </h4>
                  <p className="text-xs text-dark/70 dark:text-light/70 print:text-[8.5pt]">
                    JACSI College of Engineering (Affiliated to Anna University) | <strong>CGPA: 8.0</strong>
                  </p>
                </div>
                <span className="text-xs font-semibold text-primary dark:text-primaryDark print:text-[8pt] print:text-gray-700">
                  Graduated: July 2021
                </span>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Resume;
