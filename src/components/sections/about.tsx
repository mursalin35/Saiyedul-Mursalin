"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { FaCode, FaLaptopCode, FaServer } from "react-icons/fa";

export function About() {
  return (
    <Section id="about" className="bg-secondary/30">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="aspect-square rounded-2xl overflow-hidden bg-muted relative">
            {/* Placeholder for Profile Image */}
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              Profile Image
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
          <div className="absolute -top-6 -left-6 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="text-lg text-muted-foreground">
            I am a passionate Frontend Developer with a strong foundation in modern web technologies. 
            I love creating intuitive, dynamic, and responsive user experiences. 
            My journey in web development started with a curiosity for how things work on the internet, 
            and it has grown into a career where I continuously learn and build.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <Card className="p-4 flex flex-col items-center text-center gap-2 hover:border-primary/50 transition-colors">
              <FaCode className="text-primary text-2xl" />
              <h3 className="font-semibold">Frontend</h3>
              <p className="text-sm text-muted-foreground">React, Next.js, Tailwind</p>
            </Card>
            <Card className="p-4 flex flex-col items-center text-center gap-2 hover:border-primary/50 transition-colors">
              <FaServer className="text-primary text-2xl" />
              <h3 className="font-semibold">Backend</h3>
              <p className="text-sm text-muted-foreground">Node.js, Express, MongoDB</p>
            </Card>
            <Card className="p-4 flex flex-col items-center text-center gap-2 hover:border-primary/50 transition-colors">
              <FaLaptopCode className="text-primary text-2xl" />
              <h3 className="font-semibold">Tools</h3>
              <p className="text-sm text-muted-foreground">Git, VS Code, Figma</p>
            </Card>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
