import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] m-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}&nbsp;
        </h3>

        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>

        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = ({ children, className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Bachelor Of Information Technology - 8.4% CGPA"
            time="2017-2021"
            place="JACSICE Engineering College, Nazareth."
            info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
                    Intelligence."
          />

          <Details
            type="HSC - 91.8%"
            time="2016-2017"
            place="Margoschis Higher Secondary School, Tuticorin"
            info="I pursued a curriculum focused on Biology and Mathematics during my schooling, delving into the intricate realms of life sciences and quantitative reasoning. This foundation honed my analytical skills and nurtured a deep appreciation for the natural world and mathematical principles."
          />

          <Details
            type="SSLC - 86.8%"
            time="2014-2015"
            place="Margoschis Higher Secondary School, Tuticorin"
            info="I completed my 10th standard education in the State Board curriculum, where I gained a strong academic foundation in core subjects following the state's educational guidelines."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
