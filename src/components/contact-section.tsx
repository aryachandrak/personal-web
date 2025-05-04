"use client"

import type React from "react"

// import { useState } from "react"
import { motion } from "framer-motion"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin } from "lucide-react"

export function ContactSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   })

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     // In a real application, you would handle form submission here
//     console.log("Form submitted:", formData)
//     alert("Thank you for your message! This is a static site, so the form does not actually submit data.")
//     setFormData({ name: "", email: "", message: "" })
//   }

  return (
    <section id="contact" className="py-20 bg-muted dark:bg-muted/50">
      <div className="container">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        <div className="flex flex-row justify-center items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* <Card>
              <CardHeader>
                <CardTitle>Get In Touch</CardTitle>
                <CardDescription>Fill out the form and I&apos;ll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card> */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
           <div className="flex flex-row flex-wrap gap-10 mb-6 justify-center">
            <div className="flex items-start gap-4 w-full sm:w-auto">
                <a href="mailto:aryachandrak14@gmail.com" className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">aryachandrak14@gmail.com</p>
                </div>
                </a>
            </div>
            <div className="flex items-start gap-4 w-full sm:w-auto">
                <a href="http://wa.me/+6282199931466" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">+6282199931466</p>
                </div>
                </a>
            </div>
            <div className="flex items-start gap-4 w-full sm:w-auto">
                <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                    <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                    <h3 className="font-semibold">LinkedIn</h3>
                    <p className="text-muted-foreground">Arya Chandra</p>
                </div>
                </a>
            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
