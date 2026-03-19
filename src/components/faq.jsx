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
        question: "Which package is right for my startup?",
        answer:
            "If you have an idea and need to validate it, start with my MVP Launch Package. If you already have users and need to scale, choose the Scaling Retainer. For specific features, go with the Fixed Feature Package. Not sure? Book a free consultation and I'll guide you.",
    },
    {
        question: "How fast can you build an MVP?",
        answer:
            "My MVP Launch Package delivers a working product in 4-6 weeks. I focus on core features that validate your idea, so you can start getting user feedback quickly.",
    },
    {
        question: "What's included in the MVP Launch Package?",
        answer:
            "You get product architecture, user authentication, core feature development, admin dashboard, API development, and deployment. Everything you need to launch and test your idea.",
    },
    {
        question: "How does the Scaling Retainer work?",
        answer:
            "It's a monthly partnership. I handle performance optimization, new features, database scaling, and maintenance. You get priority support and predictable monthly pricing.",
    },
    {
        question: "Can I hire you for just one feature?",
        answer:
            "Yes! My Fixed Feature Package is perfect for specific needs like payment integration, custom admin panels, or API development. Typical delivery is 1-3 weeks.",
    },
    {
        question: "What technologies do you use?",
        answer:
            "I specialize in React, Next.js, Node.js, and PostgreSQL. This stack gives you scalability, performance, and a large talent pool for future hiring.",
    },
    {
        question: "Do you help with deployment?",
        answer:
            "Yes, deployment is included in all packages. I handle production setup on Vercel/Render, configure CI/CD, and ensure your app is live and working.",
    },
    {
        question: "What if I need ongoing support after launch?",
        answer:
            "The Scaling Retainer is perfect for post-launch support. It includes maintenance, bug fixes, and new features as you grow. You can also book hourly support if needed.",
    },
    {
        question: "How do you ensure code quality?",
        answer:
            "I follow clean architecture principles, write tests, conduct code reviews, and maintain documentation. Quality is built into every package.",
    },
    {
        question: "Can you work with my existing codebase?",
        answer:
            "Absolutely. I can integrate with your existing codebase, refactor as needed, and help you scale your current application.",
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