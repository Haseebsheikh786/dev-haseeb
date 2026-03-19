"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarCheck, Sparkles, ArrowRight } from "lucide-react";

export default function CTASection() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4 sm:px-4 lg:px-8 text-center">
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                        animate: {
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    className="max-w-2xl mx-auto"
                >
                    <motion.h2
                        variants={{
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        Ready to <span className="text-primary">Start Your Project?</span>
                    </motion.h2>

                    <motion.p
                        variants={{
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-muted-foreground mb-8"
                    >
                        Let's discuss your idea and turn it into a scalable SaaS product.
                    </motion.p>

                    <motion.div
                        variants={{
                            initial: { opacity: 0, scale: 0.9 },
                            animate: { opacity: 1, scale: 1 }
                        }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link href="/contact">
                            <Button size="lg" className="gap-2">
                                Free Consultation
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}