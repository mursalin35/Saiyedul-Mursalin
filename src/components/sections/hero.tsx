"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { FaArrowDown, FaFileDownload, FaProjectDiagram } from "react-icons/fa";
import profile from "../../assets/profile.png"

export function Hero() {
  return (
    <Section className=" relative overflow-hidden  pt-20 ">
      {/* Background Gradient/Effects */}
      <div className="absolute inset-0 -z-10 bg-background" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="flex flex-col md:flex-row items-center  justify-center gap-12 h-full">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 space-y-8 text-center md:text-left z-10  "
        >
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-medium text-primary">
              Hello, I&apos;m
            </h2>
            <h1 className="text-5xl md:text-7xl  font-bold tracking-tight  text-muted-foreground ">
              MERN Stack <span className="text-6xl">Developer</span> <br />
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              I build modern and responsive web applications that help
              businesses grow.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 pt-4">
            <Button
              size="lg"
              className="rounded-full px-8 text-lg h-14"
              asChild
            >
              <a href="#projects">
                <FaProjectDiagram className="mr-2" /> Get a project
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 text-lg h-14"
              asChild
            >
              <a href="https://drive.google.com/file/d/1QddF5QawbNIrbastedA-6szs6PA6EMcs/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <FaFileDownload className="mr-2" /> My resume
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Right Content - Image & Abstract Shapes */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 relative flex items-center justify-center"
        >
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
            {/* Abstract Symbols Background */}
            <div className="absolute -top-10 -right-10 text-9xl font-bold text-primary/10 select-none pointer-events-none">
              &gt;
            </div>
            <div className="absolute -bottom-10 -left-10 text-9xl font-bold text-primary/10 select-none pointer-events-none">
              &lt;
            </div>

            {/* Circular Image Frame */}
            <div className="w-[80%] h-[80%] rounded-full border-2 border-primary/20 p-4 relative">
              <div className="w-full h-full rounded-full border-2 border-primary/40 p-4 relative">
                <div className="w-full h-full rounded-full overflow-hidden bg-muted relative shadow-2xl shadow-primary/20">
                  {/* Placeholder for Profile Image */}
                  <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 text-zinc-500">
                    <span className="text-lg">Profile Photo</span>
                  </div>
                  <Image src={profile} alt="Jensen Omega" fill className="object-cover " />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute bottom-10 right-0 bg-card border border-border p-4 rounded-xl shadow-lg flex items-center gap-3"
            >
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="font-medium text-sm">Open to work</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block"
      >
        <a href="#about" aria-label="Scroll down">
          <FaArrowDown
            className="text-muted-foreground hover:text-primary transition-colors"
            size={24}
          />
        </a>
      </motion.div>
    </Section>
  );
}
