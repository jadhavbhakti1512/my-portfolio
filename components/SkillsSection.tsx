"use client";

import React from "react";
import dynamic from "next/dynamic";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMysql,
  SiPython,
  SiPowerbi,
  SiGooglecloud,
  SiWordpress,
  SiPhp,
  SiShopify,
  SiTensorflow,
  SiPandas,
  SiNumpy,
} from "react-icons/si";

// Dynamically import motion from framer-motion to prevent SSR issues
const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

const skills = [
  { name: "React.js", icon: <SiReact size={40} color="#61DBFB" /> },
  { name: "Next.js", icon: <SiNextdotjs size={40} /> },
  { name: "Node.js", icon: <SiNodedotjs size={40} color="#68A063" /> },
  { name: "MySQL", icon: <SiMysql size={40} color="#4479A1" /> },
  { name: "Python", icon: <SiPython size={40} color="#306998" /> },
  { name: "Power BI", icon: <SiPowerbi size={40} color="#F2C811" /> },
  { name: "GCP", icon: <SiGooglecloud size={40} color="#4285F4" /> },
  { name: "WordPress", icon: <SiWordpress size={40} color="#21759B" /> },
  { name: "PHP", icon: <SiPhp size={40} color="#8892BE" /> },
  { name: "Shopify", icon: <SiShopify size={40} color="#95BF47" /> },
  { name: "TensorFlow", icon: <SiTensorflow size={40} color="#FF6F00" /> },
  { name: "Pandas", icon: <SiPandas size={40} color="#150458" /> },
  { name: "NumPy", icon: <SiNumpy size={40} color="#013243" /> },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 px-4 md:px-12">
      <h1 className="my-10 text-center font-bold text-4xl">
        My Skills
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>

      {/* Circular Skill Cloud */}
      <div className="relative w-full h-96 flex items-center justify-center">
        {skills.map((skill, index) => {
          const angle = (index / skills.length) * 2 * Math.PI;
          const radius = 140; // Circle radius
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);

          return (
            <MotionDiv
              key={index}
              className="absolute flex flex-col items-center justify-center cursor-pointer"
              initial={{ x: 0, y: 0, scale: 0 }}
              animate={{ x, y, scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.1 }}
              whileHover={{ scale: 1.3 }}
              title={skill.name}
            >
              {skill.icon}
            </MotionDiv>
          );
        })}
      </div>

      <p className="mt-10 text-center text-gray-600 dark:text-gray-400 text-lg">
        Full-Stack Developer | Cloud Engineer | AI/ML Enthusiast | Data Engineer
      </p>
    </section>
  );
};

export default SkillsSection;
