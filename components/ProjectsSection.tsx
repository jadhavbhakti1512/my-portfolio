import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Azure DP 203",
    description: "Microsoft Certified: Azure Data Engineer Associate",
    image: "/AZ.png",
    link: "https://learn.microsoft.com/en-gb/users/bhaktijadhav-1111/credentials/67f8b8dd261c1fc2",
  },
  {
    name: "Associate Cloud Engineer Certification",
    description:
      "Associate Cloud Engineers deploy, monitor, and manage applications on Google Cloud. They use the Cloud Console and CLI to maintain deployed solutions using Google-managed or self-managed services.",
    image: "/GCP1.png",
    link: "https://www.credly.com/badges/f90c03d0-35db-47c1-b4b7-fe104a4503b3/public_url",
  },
  {
    name: "Cloud Digital Leader Certification",
    description:
      "A Cloud Digital Leader understands Google Cloud's core products, their benefits, and common business use cases. This certification validates cloud computing basics and how Google Cloud helps achieve organizational goals.",
    image: "/GCP2.png",
    link: "https://www.credly.com/badges/93b51362-125e-421f-91a5-883eae2b90d9/public_url",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Certifications
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => (
          <div key={idx}>
            <SlideUp offset="-300px 0px -300px 0px">
              <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                <div className="md:w-1/2">
                  <Link href={project.link} target="_blank">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  </Link>
                </div>
                <div className="mt-8 md:w-1/2">
                  <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <div className="flex flex-row align-bottom space-x-4">
                    <Link href={project.link} target="_blank">
                      <BsArrowUpRightSquare
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
  )
}

export default ProjectsSection
