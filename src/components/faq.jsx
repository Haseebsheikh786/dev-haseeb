"use client";

import * as React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "./ui/card";
import { motion, } from "framer-motion";
import { fadeUp, scaleUp } from '@/lib/animations'

const faqs = [
    {
        question: "Which partnership model is right for my product?",
        answer:
            "If you have an early concept and need to validate it, we can design an MVP engineering framework to target core features. If you already have active users and need structural engineering, we can scale your infrastructure over an ongoing engagement. For isolated scopes or modules, a fixed feature milestone approach is ideal.",
    },
    {
        question: "How fast can you build and launch an MVP?",
        answer:
            "A standard MVP delivery phase spans 4-6 weeks. I focus heavily on core business workflows to validate your concept efficiently, engineering clean, reliable ground code so you can begin collecting live data immediately.",
    },
    {
        question: "What is typically handled during an MVP development lifecycle?",
        answer:
            "The lifecycle covers system architecture design, secure database optimization, user authentication, core workflows, an admin interface, robust API endpoints, and production deployment on environments like Vercel or Render with automated CI/CD pipelines.",
    },
    {
        question: "How does the ongoing scaling engagement work?",
        answer:
            "It functions as a dedicated engineering retainer. I integrate closely with your system goals to manage database optimization, feature extensions, codebase architecture refactoring, and stability. This offers priority focus and high predictability.",
    },
    {
        question: "Can I bring you on for a singular, specific feature?",
        answer:
            "Absolutely. If you have a specific roadblock—such as a complex Stripe payment ledger, custom workflow engine, third-party API sync, or deep AI integration—we can isolate it into a targeted 1-3 week sprint.",
    },
    {
        question: "What technologies do you specialize in?",
        answer:
            "I specialize natively in React, Next.js, TypeScript, Node.js, and PostgreSQL. This modern ecosystem ensures long-term backend scalability, exceptional frontend rendering speeds, and an easy codebase architecture to extend as your team grows.",
    },
    {
        question: "Can you integrate AI modules or automate system workflows?",
        answer:
            "Yes. I engineer smart automation sequences, deep LLM integrations, background message queues, and automated data parsing flows into existing architectures or brand-new MVPs.",
    },
    {
        question: "Do you handle deployment and server architecture setup?",
        answer:
            "Yes, full production rollout is standardized across all engineering milestones. I handle staging/production environments, secure environment variable configurations, SSL setups, and continuous deployment systems.",
    },
    {
        question: "What if I need ongoing engineering support post-launch?",
        answer:
            "An ongoing retainer models perfectly for scaling operations, monitoring traffic spikes, and mitigating bugs. If required, we can structure ad-hoc technical support hours tailored to your system's traffic patterns.",
    },
    {
        question: "How do you maintain high code quality?",
        answer:
            "I practice strict clean code principles, optimize database query indexing, enforce typing with TypeScript, implement automated system testing, and provide exhaustive README documentation for seamless knowledge transfers.",
    },
    {
        question: "Can you work directly with my existing engineering codebase?",
        answer:
            "Absolutely. I can dive straight into a legacy architecture or ongoing codebase, identify bottlenecks, refactor architectural technical debt, and build out features alongside your technical definitions seamlessly."
    }
];

export default function Pricing() {
    return (
        <motion.section
            id="faq"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="py-24"
        >
            <div className="container mx-auto px-4 sm:px-4 lg:px-8">
                {/* FAQ Section */}
                <div className="max-w-3xl mx-auto">
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
                            <span className="text-foreground">Frequently </span>
                            <span className="text-primary">Asked Questions</span>
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            className="text-muted-foreground max-w-2xl mx-auto"
                        >
                            Everything you need to know about working with me
                        </motion.p>
                    </motion.div>

                    {/* Accordion Items */}
                    <motion.div
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
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    variants={scaleUp}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -2 }}
                                >
                                    <Card className="py-0 px-6 rounded-xl mb-4 hover:border-primary/40 transition overflow-hidden">
                                        <AccordionItem value={`item-${index}`}>
                                            <AccordionTrigger className="text-left text-md group">
                                                <motion.span
                                                    whileHover={{ x: 5 }}
                                                    className="group-hover:text-primary transition-colors"
                                                >
                                                    {faq.question}
                                                </motion.span>
                                            </AccordionTrigger>
                                            <AccordionContent className="text-muted-foreground">
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    {faq.answer}
                                                </motion.div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Card>
                                </motion.div>
                            ))}
                        </Accordion>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}