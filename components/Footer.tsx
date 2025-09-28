"use client";

import React from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import { FiGlobe } from "react-icons/fi"; // For portfolio/website icon

const Footer = () => {
  const accentColorClass = "text-teal-500 hover:text-teal-400";
  const baseTextColorClass = "text-neutral-500 dark:text-neutral-300";

  return (
    <footer className="w-full bg-neutral-100 dark:bg-gray-900 border-t border-neutral-300 dark:border-gray-800 pt-10 pb-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10">
          {/* About Me */}
          <div className="col-span-2 md:col-span-1 space-y-2">
            <h3 className={`text-2xl font-extrabold ${accentColorClass}`}>Bhakti Jadhav</h3>
            <p className={`text-sm ${baseTextColorClass}`}>Software Engineer</p>
            <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-2">
              Turning data into performance, from code to cloud.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-neutral-800 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className={`${baseTextColorClass} hover:underline ${accentColorClass}`}>Home</a></li>
              <li><a href="#about" className={`${baseTextColorClass} hover:underline ${accentColorClass}`}>About Me</a></li>
              <li><a href="#projects" className={`${baseTextColorClass} hover:underline ${accentColorClass}`}>Projects</a></li>
              <li><a href="#certifications" className={`${baseTextColorClass} hover:underline ${accentColorClass}`}>Certifications</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-neutral-800 dark:text-white mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li className={`flex items-center ${baseTextColorClass}`}>
                <FiGlobe className={`mr-2 ${accentColorClass} w-4 h-4`} />
                Pune, India
              </li>
              <li className={`flex items-center ${baseTextColorClass}`}>
                <a href="mailto:jadhavbhakti1512@gmail.com" className="hover:underline">jadhavbhakti1512@gmail.com</a>
              </li>
              <li className={`flex items-center ${baseTextColorClass}`}>+91 8805854457</li>
            </ul>
          </div>

          {/* Social Connect */}
          <div>
            <h4 className="text-lg font-semibold text-neutral-800 dark:text-white mb-4">Connect</h4>
            <div className="flex flex-row space-x-4">
              <a href="https://github.com/jadhavbhakti1512" target="_blank" rel="noreferrer" aria-label="GitHub">
                <AiOutlineGithub className={`hover:-translate-y-1 transition-transform cursor-pointer ${baseTextColorClass} ${accentColorClass} w-7 h-7`} />
              </a>
              <a href="https://www.linkedin.com/in/bhakti-jadhav-88167920b/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <AiOutlineLinkedin className={`hover:-translate-y-1 transition-transform cursor-pointer ${baseTextColorClass} ${accentColorClass} w-7 h-7`} />
              </a>
              <a href="https://www.instagram.com/art.ofwork/?igsh=Z2J3ZWF4cWhyd3dy#" target="_blank" rel="noreferrer" aria-label="Instagram">
                <AiOutlineInstagram className={`hover:-translate-y-1 transition-transform cursor-pointer ${baseTextColorClass} ${accentColorClass} w-7 h-7`} />
              </a>
              <a href="https://leetcode.com/u/bhakti_jadhav/" target="_blank" rel="noreferrer" aria-label="LeetCode">
                <SiLeetcode className={`hover:-translate-y-1 transition-transform cursor-pointer ${baseTextColorClass} ${accentColorClass} w-7 h-7`} />
              </a>
              <a href="https://bhaktij.vercel.app/" target="_blank" rel="noreferrer" aria-label="Portfolio">
                <FiGlobe className={`hover:-translate-y-1 transition-transform cursor-pointer ${baseTextColorClass} ${accentColorClass} w-7 h-7`} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <p className="text-center text-xs text-neutral-400 dark:text-neutral-500">
          &copy; {new Date().getFullYear()} Bhakti Jadhav. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
