"use client";

import { useState } from "react";
import { ExternalLink, ArrowRight, } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function ProjectDetail({ project, onClose }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleDiscussClick = () => {
        if (onClose) {
            onClose(); // Close the modal
        }
    };

    return (
        <div className="relative">
            {/* Hero Image Section with Carousel */}
            <div className="relative h-64 md:h-96 bg-secondary/20 group overflow-hidden">
                {/* Main Image with improved quality */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full h-full flex items-center justify-center bg-secondary/10"
                    >
                        <Image
                            src={project.images[currentImageIndex]}
                            alt={`${project.title} - Image ${currentImageIndex + 1}`}
                            fill
                            className="object-contain md:object-contain" /* Changed to contain for full view */
                            priority
                            sizes="(max-width: 768px) 100vw, 800px"
                            quality={100} /* Increased quality */
                            unoptimized={false} /* Ensures Next.js optimizes */
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Improved Gradient Overlay - More subtle */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />

                {/* Image Counter - Improved styling */}
                {project.images.length > 1 && (
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-medium">
                        {currentImageIndex + 1} / {project.images.length}
                    </div>
                )}

                {/* Image Thumbnails */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {project.images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)} // simply go to the clicked image
                            className={`transition-all duration-300 ${idx === currentImageIndex
                                ? "w-8 h-2 bg-primary rounded-full shadow-lg shadow-primary/50"
                                : "w-3 h-2 bg-white/60 hover:bg-white/90 rounded-full"
                                }`}
                            aria-label={`Go to image ${idx + 1}`}
                        />
                    ))}
                </div>

                {/* Title Overlay - Better positioning */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                    <Badge className="mb-3 bg-primary/90 text-primary-foreground border-0 shadow-lg">
                        {project.category}
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-xl">
                        {project.title}
                    </h2>
                </div>
            </div>
            {/* Rest of your content remains the same */}
            <div className="p-8 space-y-8">
                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {project.stats?.map((stat, idx) => (
                        <div key={idx} className="text-center p-4 bg-secondary/20 rounded-xl">
                            <div className="text-2xl font-bold text-primary">{stat.value}</div>
                            <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Overview */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                        <div className="w-1 h-6 bg-primary rounded-full" />
                        Overview
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                        {project.overview}
                    </p>
                </div>

                {/* Problem & Solution */}
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3 p-5 bg-red-500/5 rounded-xl border border-red-500/10">
                        <h4 className="font-semibold text-red-500 flex items-center gap-2">
                            <div className="w-1 h-5 bg-red-500 rounded-full" />
                            The Problem
                        </h4>
                        <p className="text-sm text-muted-foreground">
                            {project.problem}
                        </p>
                    </div>
                    <div className="space-y-3 p-5 bg-green-500/5 rounded-xl border border-green-500/10">
                        <h4 className="font-semibold text-green-500 flex items-center gap-2">
                            <div className="w-1 h-5 bg-green-500 rounded-full" />
                            The Solution
                        </h4>
                        <p className="text-sm text-muted-foreground">
                            {project.solution}
                        </p>
                    </div>
                </div>

                {/* Key Features */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                        <div className="w-1 h-6 bg-primary rounded-full" />
                        Key Features
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        {project.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-3 bg-secondary/10 rounded-lg">
                                <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                </div>
                                <span className="text-sm">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                        <div className="w-1 h-6 bg-primary rounded-full" />
                        Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                            <Badge
                                key={idx}
                                className="px-4 py-2 bg-primary/10 text-primary border-0"
                            >
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex sm:flex-row flex-col gap-4 pt-6 border-t border-border">
                    {/* External link stays as <a> since it's an external URL */}
                    <Button
                        className="flex-1 bg-primary hover:bg-primary/90"
                        asChild
                    >
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                            Visit Live Site
                            <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                    </Button>

                    {/* Internal link using Next.js Link */}
                    <Button
                        variant="outline"
                        className="flex-1"
                        onClick={handleDiscussClick}
                        asChild
                    >
                        <Link href="#contact" onClick={handleDiscussClick}>
                            Discuss This Project
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}