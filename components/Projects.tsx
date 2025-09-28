"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsArrowUpRightSquare, BsGithub } from "react-icons/bs";

const projects = [
  {
    name: "Rotten Fruit Detector",
    description:
      "An AI/ML project that classifies fresh vs rotten fruits using CNN and ResNet models with ~92% accuracy. Built end-to-end: data preprocessing, model training, FastAPI backend, and React frontend. Deployed with Docker on cloud for real-time predictions.",
    image: "/Gemini_Generated_Image_vy1ryxvy1ryxvy1r.png",
    demoLink: "https://your-demo-link.com",
    githubLink: "https://github.com/jadhavbhakti1512/rotten-fruit-classifier",
  },
  {
    name: "Systel Project",
    description:
      "A modern web application developed with Next.js and Tailwind CSS, featuring responsive design, dynamic routing, and optimized performance. Deployed on Vercel for live usage and testing.",
    image: "/systel.png",
    demoLink: "https://systel.vercel.app/",
    githubLink: "https://github.com/yourusername/systel-project",
  },
  {
    name: "Portfolio Website",
    description:
      "My personal portfolio showcasing projects, skills, and experience. Built with Next.js, Tailwind CSS, and React, featuring smooth scrolling, responsive design, and interactive elements. Deployed on Vercel for live access.",
    image: "/portfolio.png", // add screenshot of your portfolio in public folder
    demoLink: "https://bhaktij.vercel.app/",
    githubLink: "https://github.com/jadhavbhakti1512/portfolio",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => (
          <div key={idx}>
            <SlideUp offset="-300px 0px -300px 0px">
              <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                <div className="md:w-1/2">
                  <Link
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={1000}
                      height={600}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  </Link>
                </div>
                <div className="mt-8 md:w-1/2">
                  <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <div className="flex flex-row align-bottom space-x-6">
                    <Link
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsArrowUpRightSquare
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <BsGithub
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </SlideUp>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
