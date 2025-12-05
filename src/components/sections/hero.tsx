"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { FaArrowDown } from "react-icons/fa";

export function Hero() {
  return (
    <Section className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden pt-0">
      {/* Background Gradient/Effects */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-primary/10 to-transparent blur-3xl -z-10" />

      <div className="text-center space-y-6 max-w-3xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            Available for Work
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
            Hi, I&apos;m <span className="text-primary">Developer Name</span>
            <br />
            <span className="text-muted-foreground text-2xl md:text-4xl lg:text-5xl font-semibold mt-2 block">
              Frontend Developer
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Building beautiful, accessible, and performant web experiences with modern technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Button size="lg" className="rounded-full px-8" asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <a href="#about" aria-label="Scroll down">
          <FaArrowDown className="text-muted-foreground hover:text-primary transition-colors" size={24} />
        </a>
      </motion.div>
    </Section>
  );
}
