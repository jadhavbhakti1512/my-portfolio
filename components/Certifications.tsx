"use client";

import React from "react";
import Image from "next/image";

const certifications = [
  {
    title: "Professional Data Engineer Certification",
    description:
      "A Professional Data Engineer makes data usable by designing, building, and managing secure, reliable data systems that collect, transform, and publish data to meet business and compliance needs.",
    link: "https://www.credly.com/badges/0640bc0e-58fe-4059-8b3d-a96c5343300e/public_url",
    image: "/GCP3.png",
  },
  {
    title: "Azure DP 203",
    description: "Microsoft Certified: Azure Data Engineer Associate",
    link: "https://learn.microsoft.com/en-gb/users/bhaktijadhav-1111/credentials/67f8b8dd261c1fc2",
    image: "/AZ.png",
  },
  {
    title: "Associate Cloud Engineer Certification",
    description:
      "Associate Cloud Engineers deploy, monitor, and manage applications on Google Cloud. They use the Cloud Console and CLI to maintain deployed solutions using Google-managed or self-managed services.",
    link: "https://www.credly.com/badges/f90c03d0-35db-47c1-b4b7-fe104a4503b3/public_url",
    image: "/GCP1.png",
  },
  {
    title: "Cloud Digital Leader Certification",
    description:
      "A Cloud Digital Leader understands Google Cloud's core products, their benefits, and common business use cases. This certification validates cloud computing basics and how Google Cloud helps achieve organizational goals.",
    link: "https://www.credly.com/badges/93b51362-125e-421f-91a5-883eae2b90d9/public_url",
    image: "/GCP2.png",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-12 px-4 md:px-12">
      <h1 className="my-10 text-center font-bold text-4xl">
        Certifications
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>
      <div className="grid md:grid-cols-4 gap-4">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow overflow-hidden flex flex-col"
          >
            {/* Certification Image */}
            {cert.image && (
              <Image
                src={cert.image}
                alt={cert.title}
                width={400}
                height={160}
                className="object-cover w-70 h-40"
              />
            )}
            {/* Certification Content */}
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-black text-sm mb-0 text-lg font-semibold mb-3">{cert.title}</h3>
                
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-1 text-sm rounded bg-teal-600 text-white hover:bg-teal-700 transition"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;