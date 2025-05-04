"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "HRIS (Human Resource Information System)",
    description:
      "HRIS is a web-based human resource management system that helps companies manage employee data, attendance, leave, payroll, and performance.",
    image: "/HRIS.png",
    tags: ["Next.js", "React", "Tailwind CSS", "Golang"],
    githubUrl: "https://github.com/SukaMajuu/hris2",
  },
  {
    id: 2,
    title: "Glowbies (Acne Detection App)",
    description:
      "Glowbies is an AI-based application designed to automatically detect acne types and provide personalized skincare recommendations. Using Convolutional Neural Network (CNN) technology, this app is capable of recognizing various types of acne.",
    image: "/GLOWBIES.png",
    tags: ["Flutter", "Laravel", "Firebase"],
    githubUrl: "https://github.com/aryachandrak/Glowbies",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}>
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <Card className="h-full flex flex-col overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover object-top w-full h-full"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="mt-auto">
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
