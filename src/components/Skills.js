import React from "react";
import { motion } from "framer-motion";

const SkillBadge = ({ name, level }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-dark/5 dark:bg-light/5 border border-dark/10 dark:border-light/10 hover:border-primary/50 dark:hover:border-primaryDark/50 transition-all cursor-default"
    >
      <span className="font-semibold text-xs text-dark dark:text-light">{name}</span>
      {level && (
        <span className="text-[10px] font-medium text-primary dark:text-primaryDark ml-2 px-1.5 py-0.5 rounded bg-primary/10 dark:bg-primaryDark/10">
          {level}
        </span>
      )}
    </motion.div>
  );
};

const SkillCategoryCard = ({ title, icon, description, skills, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="relative rounded-2xl border border-solid border-dark/20 dark:border-light/20 bg-light/80 dark:bg-dark/80 p-5 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center gap-2.5 mb-2.5">
          <span className="text-xl p-2 rounded-xl bg-primary/10 dark:bg-primaryDark/10 text-primary dark:text-primaryDark">
            {icon}
          </span>
          <div>
            <h3 className="text-lg font-bold text-dark dark:text-light">{title}</h3>
            <p className="text-[11px] text-dark/70 dark:text-light/70">{description}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 mt-3">
          {skills.map((skill, index) => (
            <SkillBadge key={index} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend & Core",
      icon: "⚡",
      description: "High-throughput APIs & business logic",
      skills: [
        { name: "C#", level: "Expert" },
        { name: ".NET Core / .NET 8", level: "Expert" },
        { name: "ASP.NET Core Web API", level: "Expert" },
        { name: "RESTful API Design", level: "Advanced" },
        { name: "LINQ & Async/Await", level: "Expert" },
        { name: "Clean Architecture", level: "Advanced" }
      ]
    },
    {
      title: "Database & ORM",
      icon: "🗄️",
      description: "Relational data modeling & optimization",
      skills: [
        { name: "SQL Server (T-SQL)", level: "Advanced" },
        { name: "Entity Framework Core", level: "Expert" },
        { name: "Stored Procedures", level: "Advanced" },
        { name: "Code-First Migrations", level: "Expert" },
        { name: "Query Optimization", level: "Advanced" },
        { name: "Indexes & Transactions", level: "Advanced" }
      ]
    },
    {
      title: "Modern Frontend",
      icon: "🎨",
      description: "Reactive, responsive user interfaces",
      skills: [
        { name: "Angular", level: "Advanced" },
        { name: "React & Next.js", level: "Advanced" },
        { name: "TypeScript", level: "Expert" },
        { name: "Reactive Forms", level: "Expert" },
        { name: "RxJS Observables", level: "Advanced" },
        { name: "Tailwind CSS & SCSS", level: "Advanced" }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: "🛠️",
      description: "CI/CD pipelines & team workflows",
      skills: [
        { name: "Jenkins CI/CD", level: "Advanced" },
        { name: "Git & GitHub", level: "Expert" },
        { name: "Bitbucket", level: "Advanced" },
        { name: "Firebase", level: "Proficient" },
        { name: "Postman API Testing", level: "Advanced" },
        { name: "Agile / Jira", level: "Advanced" }
      ]
    }
  ];

  return (
    <section className="mt-16 md:mt-10 w-full">
      <div className="text-center mb-8">
        <span className="text-xs font-bold tracking-widest text-primary dark:text-primaryDark uppercase">
          Core Competencies
        </span>
        <h2 className="font-bold text-3xl md:text-2xl text-center mt-1 mb-2 text-dark dark:text-light">
          Technical Skills
        </h2>
        <p className="text-xs font-medium text-dark/70 dark:text-light/70 max-w-xl mx-auto">
          Production-proven full stack engineering across enterprise backends, scalable databases, and reactive frontend architectures.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-1 gap-5 w-full max-w-6xl mx-auto">
        {skillCategories.map((cat, idx) => (
          <SkillCategoryCard
            key={idx}
            title={cat.title}
            icon={cat.icon}
            description={cat.description}
            skills={cat.skills}
            delay={idx * 0.08}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
