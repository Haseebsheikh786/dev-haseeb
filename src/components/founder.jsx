"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Target,
  ChevronDown,
  Code2,
  Rocket,
  Star,
  Users,
  Layers,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, scaleUp, slideInLeft, slideInRight } from '@/lib/animations'

const sections = [
  {
    title: "The Beginning",
    icon: Code2,
    content:
      "My journey started by building MVPs for early-stage founders. I focused on execution speed, clean architecture, and delivering real business value instead of just writing code.",
  },
  {
    title: "The Mission",
    icon: Rocket,
    content:
      "My mission is to help founders validate ideas fast and turn them into scalable SaaS products using modern technologies and proven product strategies.",
  },
  {
    title: "The Vision",
    icon: Target,
    content:
      "I'm building my development practice to partner long-term with ambitious founders and help them scale confidently.",
  },
];

export default function Founder() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      id="about"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeUp}
      className="py-24"
    >
      <div className="container mx-auto px-4 sm:px-4 lg:px-8">

        {/* Header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="text-primary">My Story & Vision </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            The journey behind the work
          </motion.p>
        </motion.div>


        <div className="">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <motion.div
              variants={slideInLeft}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative overflow-hidden rounded-2xl bg-muted aspect-square"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src="/Haseeb.jpg"
                alt="Haseeb Farrukh"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-6 left-6"
              >
                <h3 className="text-2xl font-bold text-white">
                  Haseeb Farrukh
                </h3>
                <p className="text-primary font-medium">
                  Full-Stack Developer
                </p>
              </motion.div>
            </motion.div>

            {/* Right Accordion */}
            <motion.div
              variants={slideInRight}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {sections.map((item, index) => {
                const Icon = item.icon;
                const isOpen = openIndex === index;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card
                      onClick={() => toggle(index)}
                      className="p-6 cursor-pointer overflow-hidden"
                    >
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <motion.div
                          whileHover={{ rotate: 5, scale: 1.1 }}
                          className="bg-primary/10 p-3 rounded-full flex-shrink-0"
                        >
                          <Icon className="h-6 w-6 text-primary" />
                        </motion.div>

                        <div className="flex-grow">
                          {/* Title Row */}
                          <motion.div
                            className="flex items-center justify-between"
                            whileHover={{ x: 5 }}
                          >
                            <h3 className="text-lg font-semibold mt-2">
                              {item.title}
                            </h3>
                            <motion.div
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown className="h-5 w-5 text-muted-foreground" />
                            </motion.div>
                          </motion.div>

                          {/* Animated Content */}
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <motion.p
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.1 }}
                                  className="text-muted-foreground text-sm leading-relaxed mt-4"
                                >
                                  {item.content}
                                </motion.p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {[
              { label: "MVPs Launched", value: "10+", icon: Rocket },
              { label: "Founders Supported", value: "12+", icon: Users },
              { label: "SaaS Products Built", value: "3+", icon: Layers },
              { label: "Client Satisfaction", value: "100%", icon: Star },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleUp}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="p-8 flex flex-col items-center text-center space-y-4 overflow-hidden">
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
                  >
                    <stat.icon className="w-6 h-6 text-primary" />
                  </motion.div>

                  <div>
                    <motion.div
                      initial={{ scale: 0.9 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="text-xl font-bold"
                    >
                      {stat.value}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="text-xs text-muted-foreground tracking-wide"
                    >
                      {stat.label}
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}