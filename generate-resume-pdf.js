const fs = require('fs');
const PDFDocument = require('pdfkit');

function generateResume(outputPath) {
  const doc = new PDFDocument({
    size: 'A4',
    margins: { top: 36, bottom: 36, left: 40, right: 40 }
  });

  const stream = fs.createWriteStream(outputPath);
  doc.pipe(stream);

  const primaryColor = '#111827'; // Dark charcoal
  const secondaryColor = '#2563EB'; // Professional Blue
  const textDark = '#1F2937';
  const textMuted = '#4B5563';
  const dividerColor = '#CBD5E1';

  // Header - Name
  doc.font('Helvetica-Bold')
     .fontSize(22)
     .fillColor(primaryColor)
     .text('ALEX BRITTO', { align: 'center' });

  // Subtitle
  doc.font('Helvetica-Bold')
     .fontSize(10.5)
     .fillColor(textDark)
     .text('.NET Core Developer | SQL & Entity Framework Core | Angular & React', { align: 'center' });

  doc.moveDown(0.25);

  // Contact Info
  doc.font('Helvetica')
     .fontSize(8.5)
     .fillColor(textMuted)
     .text('882-582-6770  |  alexbritto099@gmail.com  |  linkedin.com/in/alexbritto2000  |  alexbritto-portfolio.vercel.app', { align: 'center' });

  doc.moveDown(0.5);

  function drawSectionHeader(title) {
    doc.moveDown(0.4);
    doc.font('Helvetica-Bold')
       .fontSize(10.5)
       .fillColor(primaryColor)
       .text(title.toUpperCase(), { characterSpacing: 0.5 });
    
    const y = doc.y + 1;
    doc.strokeColor(dividerColor)
       .lineWidth(1)
       .moveTo(40, y)
       .lineTo(555, y)
       .stroke();
    doc.moveDown(0.35);
  }

  // SUMMARY
  drawSectionHeader('Summary');
  doc.font('Helvetica')
     .fontSize(8.8)
     .fillColor(textDark)
     .text('Full Stack Developer with 4+ years of experience building backend systems with .NET Core, SQL Server and Entity Framework Core, paired with Angular and React frontends. Strong in REST API design, database modelling and data access layers, with hands-on Jenkins CI/CD experience across enterprise ERP, shipping, LMS, job portal and fintech platforms.', {
       align: 'justify',
       lineGap: 1.5
     });

  // TECHNICAL SKILLS
  drawSectionHeader('Technical Skills');
  const skills = [
    { label: 'Backend:', value: 'C#, .NET Core, ASP.NET Core Web API, RESTful API Design, LINQ' },
    { label: 'Database / ORM:', value: 'SQL Server, T-SQL, Stored Procedures, Query Optimization, Entity Framework Core (Code-First & DB-First), Migrations' },
    { label: 'Frontend:', value: 'Angular, React, TypeScript, JavaScript, HTML, CSS, Reactive Forms' },
    { label: 'DevOps & Tools:', value: 'Jenkins (CI/CD Pipelines), Git, GitHub, Bitbucket, Firebase' },
  ];

  skills.forEach(s => {
    doc.font('Helvetica-Bold')
       .fontSize(8.5)
       .fillColor(primaryColor)
       .text(s.label + ' ', 40, doc.y, { continued: true });
    doc.font('Helvetica')
       .fillColor(textDark)
       .text(s.value, { lineGap: 1 });
  });

  // PROFESSIONAL EXPERIENCE
  drawSectionHeader('Professional Experience');

  // Job 1
  doc.font('Helvetica-Bold').fontSize(9.5).fillColor(primaryColor).text('Full Stack Developer', 40, doc.y, { continued: true });
  doc.font('Helvetica').fontSize(8.5).fillColor(textMuted).text('September 2025 – Present', { align: 'right' });
  doc.font('Helvetica-Bold').fontSize(8.8).fillColor(textDark).text('Blackstone Shipping Private Limited');
  doc.moveDown(0.2);

  const exp1 = [
    'Design and develop .NET Core backend APIs for the BLISS shipping ERP, implementing freight, vessel and cargo business logic.',
    'Model and maintain SQL Server databases using Entity Framework Core, including schema design, migrations and optimized LINQ queries.',
    'Build Angular screens that consume these APIs, translating shipping workflows into end-to-end full-stack solutions.'
  ];
  exp1.forEach(bullet => {
    doc.font('Helvetica').fontSize(8.5).fillColor(textDark)
       .text('•  ' + bullet, 46, doc.y, { lineGap: 1, indent: 0 });
  });
  doc.moveDown(0.35);

  // Job 2
  doc.font('Helvetica-Bold').fontSize(9.5).fillColor(primaryColor).text('Full Stack Developer', 40, doc.y, { continued: true });
  doc.font('Helvetica').fontSize(8.5).fillColor(textMuted).text('August 2022 – September 2025', { align: 'right' });
  doc.font('Helvetica-Bold').fontSize(8.8).fillColor(textDark).text('Dotcod Innovation Pvt Ltd | Bangalore');
  doc.moveDown(0.2);

  const exp2 = [
    'Developed .NET Core backend services and RESTful APIs for enterprise applications across job portals, LMS and fintech platforms.',
    'Designed database schemas and data access logic with SQL Server and Entity Framework Core, optimizing APIs for performance and reliability.',
    'Built Angular and React frontends consuming these APIs; participated in code reviews and architectural decisions.',
    'Set up and maintained Jenkins CI/CD pipelines to automate build, test and deployment workflows.'
  ];
  exp2.forEach(bullet => {
    doc.font('Helvetica').fontSize(8.5).fillColor(textDark)
       .text('•  ' + bullet, 46, doc.y, { lineGap: 1, indent: 0 });
  });
  doc.moveDown(0.35);

  // Job 3
  doc.font('Helvetica-Bold').fontSize(9.5).fillColor(primaryColor).text('Intern – Frontend Developer', 40, doc.y, { continued: true });
  doc.font('Helvetica').fontSize(8.5).fillColor(textMuted).text('April 2022 – August 2022', { align: 'right' });
  doc.font('Helvetica-Bold').fontSize(8.8).fillColor(textDark).text('SABBATECH | Chennai, Tamil Nadu');
  doc.moveDown(0.2);
  doc.font('Helvetica').fontSize(8.5).fillColor(textDark)
     .text('•  Contributed to Angular projects, implementing features and UI enhancements.', 46, doc.y, { lineGap: 1 });

  // PROJECTS
  drawSectionHeader('Projects');

  const projects = [
    {
      title: '1. BLISS – Shipping ERP Platform',
      company: '(Blackstone Shipping Private Limited)',
      desc: 'Build .NET Core APIs for business logic and data management, and Angular screens for the freight, vessel and cargo modules.',
      stack: 'Tech Stack: .NET Core, Entity Framework Core, SQL Server, Angular, RESTful APIs, Git'
    },
    {
      title: '2. HireWalks & GTX Job Portals',
      company: '(Dotcod Innovation Pvt Ltd)',
      desc: 'Built backend logic and data models for admin/recruiter portals covering pipeline stages, offers module and candidate tracking; developed Angular/React frontends consuming these APIs, deployed via a Jenkins CI/CD pipeline.',
      stack: 'Tech Stack: Angular, React, .NET Core, RESTful APIs, Jenkins, Firebase, Git'
    },
    {
      title: '3. LMS Platform for Yoga Institute – Admin Portal',
      company: '(Dotcod Innovation Pvt Ltd)',
      desc: 'Built backend data models, APIs and the Angular admin portal for quiz creation, curriculum, batch, lesson, attendance and multi-role management.',
      stack: 'Tech Stack: Angular, .NET Core, SQL, RESTful APIs, Git'
    },
    {
      title: '4. International Money Transfer Platform',
      company: '(Dotcod Innovation Pvt Ltd)',
      desc: 'Built backend logic for currency conversion and international transactions with SQL Server data models, plus an Angular UI using Reactive Forms.',
      stack: 'Tech Stack: Angular, .NET Core, SQL Server, RESTful APIs, Onfido (KYC), Git'
    },
    {
      title: '5. Portfolio Website',
      company: '(Personal Project)',
      desc: 'Personal portfolio with SSR, animations and SEO optimization. Demo: alexbritto-portfolio.vercel.app',
      stack: 'Tech Stack: Next.js, React, Tailwind CSS, Framer Motion'
    }
  ];

  projects.forEach((proj, idx) => {
    doc.font('Helvetica-Bold').fontSize(8.8).fillColor(primaryColor).text(proj.title + ' ', 40, doc.y, { continued: true });
    doc.font('Helvetica-Oblique').fontSize(8.2).fillColor(textMuted).text(proj.company);
    doc.font('Helvetica').fontSize(8.2).fillColor(textDark).text('•  ' + proj.desc, 46, doc.y, { lineGap: 0.8 });
    doc.font('Helvetica-Bold').fontSize(7.8).fillColor(textMuted).text('   ' + proj.stack, 46, doc.y, { lineGap: 0.8 });
    if (idx < projects.length - 1) doc.moveDown(0.2);
  });

  // EDUCATION
  drawSectionHeader('Education');
  doc.font('Helvetica-Bold').fontSize(9.2).fillColor(primaryColor).text('B.Tech – Information Technology', 40, doc.y, { continued: true });
  doc.font('Helvetica').fontSize(8.5).fillColor(textMuted).text('Graduated: July 2021', { align: 'right' });
  doc.font('Helvetica').fontSize(8.5).fillColor(textDark).text('JACSI College of Engineering (Affiliated to Anna University) | CGPA: 8.0');

  doc.end();

  return new Promise((resolve, reject) => {
    stream.on('finish', () => resolve(outputPath));
    stream.on('error', reject);
  });
}

(async () => {
  try {
    await generateResume('public/AlexBritto_CV.pdf');
    console.log('Successfully generated public/AlexBritto_CV.pdf');
    await generateResume('public/Alex_CV.pdf');
    console.log('Successfully generated public/Alex_CV.pdf');
  } catch (err) {
    console.error('Error generating PDF:', err);
    process.exit(1);
  }
})();
