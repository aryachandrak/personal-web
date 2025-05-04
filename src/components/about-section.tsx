"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted dark:bg-muted/50">
      <div className="container">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}>
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center">
            <div className="relative h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden border-4 border-primary">
              <Image
                src="/me.jpg"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}>
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-muted-foreground mb-6">
              I am a web developer with a foundation in both front-end and
              back-end technologies. I am also passionate about UI/UX design,
              focusing on creating seamless and intuitive user experiences. I
              enjoy building responsive, functional websites and web
              applications that not only meet user needs but also provide an
              engaging design. My goal is to bridge the gap between
              functionality and design, ensuring that every project I work on is
              both visually appealing and highly usable.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Education</h4>
                  <p className="text-sm text-muted-foreground">
                    Student in Computer Science, Politeknik Negeri Malang
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Skills</h4>
                  <p className="text-sm text-muted-foreground">
                    Java, HTML, CSS, JavaScript PHP, Laravel, React, Next.js,
                    Tailwind, Git, Github
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
