import Head from 'next/head';

const StructuredData = ({ type = 'homepage' }) => {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Alex Britto",
      "jobTitle": "Full Stack Developer",
      "description": "Full Stack Developer and UI/UX Designer with expertise in React, Angular, Next.js, and modern web technologies.",
      "url": "https://alexbritto.dev",
      "sameAs": [
        "https://github.com/alexbritto",
        "https://linkedin.com/in/alexbritto",
        "https://twitter.com/alexbritto"
      ],
      "knowsAbout": [
        "React.js",
        "Angular",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Web Development",
        "UI/UX Design",
        "Full Stack Development"
      ],
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Full Stack Developer",
        "description": "Develops web applications using modern technologies"
      }
    };

    const websiteData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Alex Britto - Full Stack Developer Portfolio",
      "url": "https://alexbritto.dev",
      "description": "Portfolio website of Alex Britto, a Full Stack Developer and UI/UX Designer",
      "author": {
        "@type": "Person",
        "name": "Alex Britto"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://alexbritto.dev/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
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
      "description": "Portfolio showcasing web development projects and articles",
      "url": "https://alexbritto.dev"
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
          "name": "Alex Britto Projects",
          "description": "Portfolio of web development projects",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "HireWalks",
              "description": "Web application project"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "DegPeg",
              "description": "Web development project"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "ML Projects",
              "description": "Machine Learning applications"
            }
          ]
        }];
      case 'articles':
        return [baseData, {
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Alex Britto Articles",
          "description": "Articles about React, Angular, Next.js, and web development",
          "author": {
            "@type": "Person",
            "name": "Alex Britto"
          },
          "blogPost": [
            {
              "@type": "BlogPosting",
              "headline": "Build A Custom Pagination Component In Reactjs From Scratch",
              "description": "Learn how to build a custom pagination component in ReactJS from scratch"
            },
            {
              "@type": "BlogPosting",
              "headline": "Create Loading Screen In React JS",
              "description": "Tutorial on creating loading screens in React applications"
            },
            {
              "@type": "BlogPosting",
              "headline": "Create Modal Component In React Using React Portals",
              "description": "Guide to creating modal components using React Portals"
            }
          ]
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