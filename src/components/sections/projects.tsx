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
    title: "Project One",
    description: "A full-stack web application built with Next.js and MongoDB. Features user authentication and real-time updates.",
    image: "/placeholder-project.jpg", // Placeholder
    tags: ["Next.js", "MongoDB", "Tailwind"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: 2,
    title: "Project Two",
    description: "An e-commerce platform with stripe integration and admin dashboard.",
    image: "/placeholder-project.jpg", // Placeholder
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: 3,
    title: "Project Three",
    description: "A portfolio website template for developers.",
    image: "/placeholder-project.jpg", // Placeholder
    tags: ["Next.js", "Framer Motion"],
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: 4,
    title: "Project Four",
    description: "A task management app with drag and drop functionality.",
    image: "/placeholder-project.jpg", // Placeholder
    tags: ["React", "Redux", "Firebase"],
    demoUrl: "#",
    repoUrl: "#",
  },
];

export function Projects() {
  return (
    <Section id="projects">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Here are some of the projects I&apos;ve worked on.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden group h-full flex flex-col">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt className="mr-2" /> Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="mr-2" /> Code
                    </a>
                  </Button>
                </div>
                {/* Placeholder for Project Image */}
                <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-secondary/50">
                  Project Image
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md font-medium"
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
