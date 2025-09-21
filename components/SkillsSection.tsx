"use client";

import { motion } from "framer-motion";
import React from "react";
import { SiReact, SiNextdotjs, SiNodedotjs, SiMysql, SiPython, SiPowerbi, SiGooglecloud, SiWordpress } from "react-icons/si";

const skills = [
  { name: "React.js", icon: <SiReact size={40} color="#61DBFB" />, level: 90 },
  { name: "Next.js", icon: <SiNextdotjs size={40} />, level: 85 },
  { name: "Node.js", icon: <SiNodedotjs size={40} color="#68A063" />, level: 80 },
  { name: "MySQL", icon: <SiMysql size={40} color="#4479A1" />, level: 80 },
  { name: "Python", icon: <SiPython size={40} color="#306998" />, level: 85 },
  { name: "Power BI", icon: <SiPowerbi size={40} color="#F2C811" />, level: 75 },
  { name: "GCP", icon: <SiGooglecloud size={40} color="#4285F4" />, level: 80 },
  { name: "WordPress", icon: <SiWordpress size={40} color="#21759B" />, level: 70 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-12 px-4 md:px-12">
      <h1 className="my-10 text-center font-bold text-4xl">
        My Skills
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-start space-y-2">
            {/* Skill Name + Icon */}
            <div className="flex items-center space-x-4">
              {skill.icon}
              <span className="text-xl font-semibold">{skill.name}</span>
            </div>

            {/* Animated Progress Bar */}
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">
              <motion.div
                className="bg-teal-500 h-4 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              ></motion.div>
            </div>
          </div>
        ))}
      </div>

      {/* Highlight Full-Stack + Cloud + AI/ML */}
      <p className="mt-6 text-center text-gray-600 dark:text-gray-400">
        Full-Stack Developer | Cloud Engineer | AI/ML Enthusiast
      </p>
    </section>
  );
};

export default SkillsSection;
