"use client";

import { ExternalLink, } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, scaleUp, } from '@/lib/animations';
import Image from "next/image";
import { projects } from "../lib/projects";
import { ProjectDetail } from "./project-detail";
import { useState } from "react";

export default function Portfolio() {
  const [openProjectId, setOpenProjectId] = useState(null);

  // Open or toggle dialog
  const toggleDialog = (projectId) => {
    setOpenProjectId(prev => (prev === projectId ? null : projectId));
  };

  // Close dialog
  const closeDialog = () => {
    setOpenProjectId(null);
  };

  return (
    <motion.section
      id="work"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeUp}
      className="relative py-24 overflow-hidden"
    >
      <div className="container relative mx-auto px-4 lg:px-8">
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
            <span className="text-foreground">Featured   </span>
            <span className="text-primary">Work</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Discover how I've helped businesses transform their ideas into powerful, scalable solutions.
          </motion.p>
        </motion.div>
        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
          <AnimatePresence mode="wait">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                variants={scaleUp}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="group overflow-hidden hover:border-primary/40 transition duration-300 h-full">

                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden bg-secondary/20">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="flex-1"
                    >
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {project.shortDesc}
                      </p>

                      {/* Features Preview */}
                      <div className="space-y-2">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs">
                            <div className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                            <span className="text-muted-foreground line-clamp-1">{feature}</span>
                          </div>
                        ))}
                        {project.features.length > 3 && (
                          <div className="text-xs text-primary font-medium mt-1">
                            +{project.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </motion.div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border/50">
                      <Dialog
                        open={openProjectId === project.id}
                        onOpenChange={(open) => {
                          setOpenProjectId(open ? project.id : null);
                        }}
                      >
                        <DialogTrigger asChild>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1"
                            onClick={() => toggleDialog(project.id)}
                          >
                            <Button variant="outline" size="sm" className="w-full">
                              View Details
                            </Button>
                          </motion.div>
                        </DialogTrigger>

                        <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto p-0">
                          <ProjectDetail
                            project={project}
                            onClose={closeDialog}
                          />
                        </DialogContent>
                      </Dialog>

                      <Button
                        size="sm"
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20"
                        asChild
                      >
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          Live Demo
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
}