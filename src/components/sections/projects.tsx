"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "LoanLink - Microloan Request & Approval Tracker System",
    description:
      "A role-based MERN Stack web application for managing microloan requests, approvals, and repayments with secure dashboards.",
    image: "https://i.ibb.co.com/Cs69zgk0/image.png",
    tags: ["React", "MongoDB", "Tailwind", "Firebase", "Node.js", "Express.js", "Stripe"],
    demoUrl: "https://loanlink-side.web.app",
    repoUrl: "https://github.com/mursalin35/LoanLink-Client.git",
  },
  {
    id: 2,
    title: "FinEase - Personal Finance Management Web App   ",
    description:
      "A finance app to track income, expenses, and insights with secure authentication and interactive dashboards.",
    image: "https://i.ibb.co.com/xK4BKNLv/image.png",
    tags: ["React", "MongoDB", "Tailwind", "Firebase", "Node.js", "Express.js"],
    demoUrl: "https://finease-db.web.app",
    repoUrl: "https://github.com/mursalin35/FinEase-Server-Side.git",
  },

  {
    id: 3,
    title: "WarmPaws",
    description:
      "A winter pet care app offering services, accessories, tips, and secure login for pet owners.",
    image: "https://i.ibb.co.com/cSCHht2P/image.png",
    tags: ["React", "Firebase", "Tailwind", "DaisyUI"],
    demoUrl: "https://pet-care-26f18.web.app/",
    repoUrl: "https://github.com/mursalin35/WarmPaws.git",
  },
  {
    id: 4,
    title: "M.S Homoeo Complex",
    description:
      "A homoeopathy shop system with protected login, product management, and a modern Next.js interface.",
    image: "https://i.ibb.co.com/B5q4KFSS/image.png",
    tags: ["Next.js", "Node.js", "Express", "MongoDB", "JWT"],
    demoUrl: "https://ms-homoeo-complex.vercel.app",
    repoUrl: "https://github.com/mursalin35/MS-Homoeo-Complex.git",
  },
  {
    id: 5,
    title: "Apps Store",
    description:
      "A responsive web app to explore, manage, and track applications with interactive charts and analytics.",
    image: "https://i.ibb.co.com/VWx7p1dT/image.png",
    tags: ["React", "Tailwind", "DaisyUI", "Recharts"],
    demoUrl: "https://apps-storebd.netlify.app",
    repoUrl: "https://github.com/mursalin35/Apps-Store.git",
  },
];

export function Projects() {
  return (
    <Section id="projects">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Featured Projects
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Here are some of the projects I've worked on.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full border-0">
              {/* Project Image */}
              <div className="relative w-full aspect-video overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay Buttons */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <Button size="sm" variant="secondary" asChild>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt className="mr-1" /> Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="secondary" asChild>
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="mr-1" /> Code
                    </a>
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
