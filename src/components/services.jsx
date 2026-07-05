"use client";

import { Card } from "@/components/ui/card";
import { Rocket, Gauge, Wrench, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, scaleUp } from "@/lib/animations";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const services = [
    {
        title: "🚀 Rapid MVP Development",
        description: "Accelerated engineering to take early-stage concepts to production-ready products.",
        icon: Rocket,
        price: "$3,000 - $7,000",
        timeline: "4-6 weeks",
        features: [
            "Product architecture & database design",
            "User authentication system",
            "Core feature development",
            "Admin dashboard",
            "API development",
            "Deployment on Vercel/Render",
            "Ready for user testing"
        ],
        outcome: "A working MVP built with clean code, ready for users and investors",
        popular: true
    },
    {
        title: "⚙️ SaaS Product Scaling",
        description: "Perfect for growing products that need performance optimization and new features.",
        icon: Gauge,
        price: "$1,500 - $3,000/month",
        timeline: "Core Engineering",
        features: [
            "Performance optimization",
            "New feature development",
            "Database scaling",
            "Code refactoring",
            "Bug fixes",
            "Technical consulting",
            "Priority support"
        ],
        outcome: "Faster, reliable product that handles more users",
        popular: false
    },
    {
        title: "🔧 Targeted Feature Delivery",
        description: "Perfect for specific features, complex integrations, or automation modules needed quickly.",
        icon: Wrench,
        price: "$500 - $2,000",
        timeline: "1-3 weeks",
        features: [
            "Payment integration (Stripe)",
            "Custom admin panel",
            "API development",
            "Authentication system",
            "User dashboard",
            "AI integration & workflow automation",
            "Database updates"
        ],
        outcome: "One specific feature, done right, delivered fast",
        popular: false
    }
];

export default function ServicesList() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4 sm:px-8">

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
                        <span className="text-foreground">How I Partner With </span>
                        <span className="text-primary">Startups</span>
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        className="text-muted-foreground max-w-2xl mx-auto"
                    >
                        Three strategic frameworks to leverage my technical expertise. Pick what fits your stage.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={{
                        animate: { transition: { staggerChildren: 0.1 } }
                    }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={scaleUp}
                            whileHover={{ y: -5 }}
                            className="relative"
                        >
                            {service.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full shadow-md">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <Card className={`p-6 h-full flex flex-col ${service.popular ? 'border-primary shadow-md' : ''}`}>
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <service.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm font-medium text-primary">{service.timeline}</div>
                                    </div>
                                </div>

                                <h3 className="text-xl font-semibold mb-1">{service.title}</h3>
                                <p className="text-muted-foreground text-sm mb-3">{service.description}</p>

                                {/* Price block remains hidden perfectly via your comment block */}

                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold mb-2 flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-primary" />
                                        What's included:
                                    </h4>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                                <div className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-auto pt-4 border-t mb-4">
                                    <p className="text-sm">
                                        <span className="font-semibold">Outcome:</span>{' '}
                                        <span className="text-muted-foreground">{service.outcome}</span>
                                    </p>
                                </div>

                                <motion.div
                                    variants={fadeUp}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Link href="#contact">
                                        <Button
                                            size="lg"
                                            className={`w-full rounded-xl ${service.popular
                                                ? "bg-primary hover:bg-primary/90 text-white "
                                                : ""
                                                }`}
                                            variant={service.popular ? "default" : "outline"}
                                        >
                                            Discuss Your Project
                                        </Button>
                                    </Link>
                                </motion.div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}