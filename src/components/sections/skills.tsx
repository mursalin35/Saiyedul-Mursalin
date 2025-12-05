"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb, SiFirebase } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  // { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Firebase", icon: SiFirebase, color: "text-orange-500" },
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
  { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
];

export function Skills() {
  return (
    <Section id="skills" className="bg-secondary/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          The tools and technologies I use to build Modern Website.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center justify-center p-4 bg-card rounded-xl shadow-sm border hover:border-primary/50 transition-colors"
          >
            <skill.icon className={`text-4xl mb-3 ${skill.color}`} />
            <span className="font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
