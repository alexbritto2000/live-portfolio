import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info, cgpa = "" }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-5 first:mt-0 last:mb-0 w-[70%] m-auto flex flex-col items-center justify-between md:w-[88%] sm:w-[94%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, type: "spring" }}
        className="w-full bg-light/60 dark:bg-dark/60 p-4 rounded-xl border border-solid border-dark/15 dark:border-light/15 shadow-sm hover:shadow-md transition-shadow"
      >
        <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
          <h3 className="capitalize font-bold text-lg sm:text-base text-dark dark:text-light">
            {type}&nbsp;
            {cgpa && (
              <span className="text-primary dark:text-primaryDark">
                ({cgpa})
              </span>
            )}
          </h3>
          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary dark:bg-primaryDark/10 dark:text-primaryDark">
            {time}
          </span>
        </div>

        <span className="capitalize font-medium text-[11px] text-dark/60 dark:text-light/60 block mb-1.5">
          🏛️ {place}
        </span>

        <p className="font-medium w-full text-xs text-dark/90 dark:text-light/90 leading-relaxed">
          {info}
        </p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <section className="my-16 md:my-12 w-full">
      <div className="text-center mb-8 md:mb-6">
        <span className="text-xs font-bold tracking-widest text-primary dark:text-primaryDark uppercase">
          Academic Background
        </span>
        <h2 className="font-bold text-3xl md:text-2xl text-center mt-1 text-dark dark:text-light">
          Education
        </h2>
      </div>

      <div ref={ref} className="w-[85%] mx-auto relative lg:w-[94%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[3px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="B.Tech – Information Technology"
            cgpa="CGPA: 8.0"
            time="2017 – 2021"
            place="JACSI College of Engineering (Affiliated to Anna University)"
            info="Graduated in July 2021 with distinction. Core curriculum: Data Structures & Algorithms, Database Management Systems (SQL), Object-Oriented Software Engineering, Computer Networks, and Web Application Architecture."
          />

          <Details
            type="HSC (Higher Secondary Certificate)"
            cgpa="91.8%"
            time="2016 – 2017"
            place="Margoschis Higher Secondary School, Tuticorin"
            info="Specialized in Mathematics & Biology, building strong quantitative reasoning, logic, and analytical problem-solving skills."
          />

          <Details
            type="SSLC (Secondary School Leaving Certificate)"
            cgpa="86.8%"
            time="2014 – 2015"
            place="Margoschis Higher Secondary School, Tuticorin"
            info="Completed secondary education under the Tamil Nadu State Board with honors in science and mathematics."
          />
        </ul>
      </div>
    </section>
  );
};

export default Education;
