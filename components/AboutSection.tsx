
"use client";
import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-8 md:pt-16 md:pb-16">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Bhakti and I am a{" "}
              <span className="font-bold">highly ambitious</span>,
              <span className="font-bold"> self-motivated</span>, and
              <span className="font-bold"> driven</span> software engineer
              based in Pune.
            </p>

            <p>
              I graduated with a B.Tech in Computer Science from RCPIT, Shirpur, in 2023 and have been working in the field ever since.
            </p>

            <p>
              I have a wide range of hobbies and passions that keep me engaged, from exploring new technologies and automating workflows to reading, traveling, and continuous learning.
            </p>

            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do. I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities.
            </p>

            <br />
            <p>
              Please explore my{" "}
              <a href="#projects" className="font-bold text-teal-500 hover:underline">
                Projects
              </a>{" "}
              section to see my work in action! 🙂
            </p>

            {/* Resume Button */}
            <div className="mt-6">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600 transition"
              >
                View Full CV
              </a>
            </div>
          </div>

          <div className="text-center md:w-1/2 md:text-left">
            <Image
              src="/Gemini_Generated_Image_byoxjbbyoxjbbyox.png"
              alt="Profile image"
              width={300}
              height={325}
              className="block mx-auto mt-6 md:mt-0 md:block md:relative md:bottom-4 md:left-27 md:z-0 md:top-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
