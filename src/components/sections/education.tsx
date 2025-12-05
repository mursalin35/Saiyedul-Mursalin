"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    id: 1,
    degree: "Diploma in Computer Science and Technology",
    institution: "Islami Bank Institute of Technology, Dhaka",
    year: " Nov 2023 – Present",
    description: "Focused on software engineering, algorithms, and web development.",
  },
  // {
  //   id: 2,
  //   degree: "Higher Secondary Certificate",
  //   institution: "College Name",
  //   year: "2018 - 2020",
  //   description: "Science group with focus on mathematics and physics.",
  // },
];

export function Education() {
  return (
    <Section id="education">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          My academic journey and qualifications.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-8">
        {educationData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 flex gap-4 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <div className="mt-1">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <FaGraduationCap size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">{item.degree}</h3>
                <p className="text-primary font-medium">{item.institution}</p>
                <p className="text-sm text-muted-foreground mb-2">{item.year}</p>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
