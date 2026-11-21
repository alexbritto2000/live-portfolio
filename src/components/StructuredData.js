import Head from 'next/head';

const StructuredData = ({ type = 'homepage' }) => {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Alex Britto",
      "jobTitle": ".NET Full Stack Developer",
      "description": "Full Stack Developer with 4+ years of experience building enterprise systems with .NET Core, SQL Server, Entity Framework Core, Angular, and React.",
      "url": "https://alexbritto-portfolio.vercel.app",
      "email": "alexbritto099@gmail.com",
      "sameAs": [
        "https://github.com/alexbritto2000",
        "https://linkedin.com/in/alexbritto2000"
      ],
      "knowsAbout": [
        "C#",
        ".NET Core",
        "ASP.NET Core Web API",
        "Entity Framework Core",
        "SQL Server",
        "T-SQL",
        "Angular",
        "React",
        "TypeScript",
        "JavaScript",
        "Jenkins CI/CD",
        "RESTful API Design",
        "LINQ"
      ],
      "hasOccupation": {
        "@type": "Occupation",
        "name": ".NET Full Stack Developer",
        "description": "Designs and develops enterprise backend services and responsive client web applications."
      }
    };

    const websiteData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Alex Britto - .NET Full Stack Developer Portfolio",
      "url": "https://alexbritto-portfolio.vercel.app",
      "description": "Portfolio website of Alex Britto, a .NET Full Stack Developer specializing in .NET Core, SQL Server, Angular, and React",
      "author": {
        "@type": "Person",
        "name": "Alex Britto"
      }
    };

    const portfolioData = {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": "Alex Britto Portfolio",
      "author": {
        "@type": "Person",
        "name": "Alex Britto"
      },
      "description": "Portfolio showcasing .NET Core enterprise ERP, fintech, recruitment portals, and interview resources",
      "url": "https://alexbritto-portfolio.vercel.app"
    };

    switch (type) {
      case 'homepage':
        return [baseData, websiteData];
      case 'about':
        return [baseData, portfolioData];
      case 'projects':
        return [baseData, {
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Alex Britto Enterprise Projects",
          "description": "Portfolio of .NET Core, Angular, and React enterprise applications",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "BLISS – Shipping ERP Platform",
              "description": ".NET Core and Angular ERP system for Blackstone Shipping"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "HireWalks & GTX Job Portals",
              "description": "Recruitment web platform built with .NET Core, Angular, React, and Jenkins"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "International Money Transfer Platform",
              "description": "Fintech currency conversion and transaction platform"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "LMS Platform for Yoga Institute",
              "description": "Admin portal for learning management system"
            }
          ]
        }];
      case 'articles':
        return [baseData, {
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Alex Britto Technical Resources & Interview Prep",
          "description": "In-depth tutorials and interview preparation for .NET, C#, SQL Server, Angular, and JavaScript",
          "author": {
            "@type": "Person",
            "name": "Alex Britto"
          }
        }];
      default:
        return [baseData];
    }
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getStructuredData())
        }}
      />
    </Head>
  );
};

export default StructuredData;
