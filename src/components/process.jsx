"use client";

import { Card } from "@/components/ui/card";
import { Lightbulb, LayoutDashboard, Code2, Rocket, LifeBuoy } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, slideInLeft, slideInRight } from '@/lib/animations'

const processSteps = [
    {
        title: "Discovery & Strategy",
        description:
            "I deeply understand your idea, users, and business goals to define a clear MVP scope and technical direction.",
        icon: Lightbulb,
    },
    {
        title: "Planning & Architecture",
        description:
            "I design scalable system architecture, database structure, and define clean development milestones.",
        icon: LayoutDashboard,
    },
    {
        title: "Design & Development",
        description:
            "Using modern technologies like React, Next.js, TypeScript, & Node.js, I build your SaaS with clean, scalable code.",
        icon: Code2,
    },
    {
        title: "Testing & Deployment",
        description:
            "I ensure quality through testing, optimize performance, and deploy securely to production.",
        icon: Rocket,
    },
    {
        title: "Launch & Support",
        description:
            "After launch, I monitor performance, fix issues, and help you iterate based on user feedback.",
        icon: LifeBuoy,
    },
];

export default function Process() {
    return (
        <motion.section
            id="process"
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
                    className="text-center mb-20"
                >
                    <motion.h2
                        variants={fadeUp}
                        className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
                    >
                        How I Turn <span className="text-primary">Ideas Into Products</span>
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        className="text-muted-foreground max-w-2xl mx-auto text-lg"
                    >
                        A structured workflow designed to move your idea from concept to scalable product.
                    </motion.p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* LEFT SIDE - Process Steps */}
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
                        className="relative border-l border-border ml-4 space-y-16"
                    >
                        {processSteps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <motion.div
                                    key={index}
                                    variants={slideInLeft}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative pl-10"
                                >
                                    {/* Circle Indicator */}
                                    <motion.div
                                        initial={{ scale: 0.8 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 200,
                                            delay: index * 0.1 + 0.1
                                        }}
                                        whileHover={{ scale: 1.1 }}
                                        className="absolute -left-[18px] w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-md"
                                    >
                                        <span className="text-xs font-semibold text-white">
                                            {index + 1}
                                        </span>
                                    </motion.div>

                                    {/* Content */}
                                    <motion.div
                                        initial="initial"
                                        whileInView="animate"
                                        viewport={{ once: true }}
                                        variants={{
                                            animate: {
                                                transition: {
                                                    staggerChildren: 0.05
                                                }
                                            }
                                        }}
                                        className="max-w-xl"
                                    >
                                        <motion.h3
                                            variants={fadeUp}
                                            className="text-xl font-semibold mb-3 flex items-center gap-3"
                                        >
                                            <motion.div
                                                whileHover={{ rotate: 5, scale: 1.1 }}
                                            >
                                                <Icon className="w-5 h-5 text-primary" />
                                            </motion.div>
                                            {step.title}
                                        </motion.h3>

                                        <motion.p
                                            variants={fadeUp}
                                            className="text-muted-foreground leading-relaxed"
                                        >
                                            {step.description}
                                        </motion.p>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* RIGHT SIDE - Visual */}
                    <motion.div
                        variants={slideInRight}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="sticky top-24 hidden lg:block"
                    >
                        <motion.div
                            whileHover={{ y: -5, scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="rounded-2xl border bg-card shadow-xl p-6"
                        >
                            <motion.img
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                src="/process.png"
                                alt="Product development preview"
                                className="rounded-xl w-full h-auto"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}