"use client"

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rocket, Code2, Layers, ShieldCheck, Zap, Play, Sparkles } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeUp, scaleUp, slideInRight } from '@/lib/animations'

export default function Hero() {
  return (
    <motion.section
      initial="initial"
      animate="animate"
      variants={fadeUp}
      className="relative pt-28 pb-24 overflow-hidden"
    >
      <div className="container relative mx-auto px-4 lg:px-8">
        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            <motion.div variants={fadeUp}>
              <Badge className="mb-6 py-2 rounded-[20px]" variant="outline">
                🚀 Full-Stack SaaS Engineer
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl font-bold leading-tight mb-8"
            >
              <span className="text-foreground">
                I Build Production-Ready SaaS Products
              </span>
              <br />
              <span className="text-primary">
                From Idea to Scale
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-muted-foreground text-lg mb-8 max-w-xl"
            >I help founders and engineering teams turn ideas into scalable SaaS applications — including AI‑powered features and workflow automation.
              4+ years experience, 10+ MVPs launched, and a focus on clean, maintainable code that grows with your business.
            </motion.p>

            {/* rest unchanged */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="#contact">
                  <Button size="lg" className="sm:w-auto w-full">
                    <Sparkles className="mr-2 h-4 w-4" />
                    Free Consultation
                  </Button>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="#work">
                  <Button size="lg" variant="outline" className="sm:w-auto w-full">
                    View Work
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - PRODUCT PREVIEW CARD */}
          <motion.div
            variants={slideInRight}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden">
                <div className="aspect-video relative flex items-center justify-center bg-secondary/30 group cursor-pointer">
                  {/* Play Button */}
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary"
                  >
                    <Play className="h-8 w-8 text-primary ml-1" />
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* STATS SECTION */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
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
          <StatBox icon={<Layers />} value="10+" label="PRODUCTS BUILT" />
          <StatBox icon={<ShieldCheck />} value="100%" label="CODE OWNERSHIP" />
          <StatBox icon={<Zap />} value="4-6" label="WEEKS TO MVP" />
          <StatBox icon={<Rocket />} value="Scalable" label="ARCHITECTURE" />
        </motion.div>
      </div>
    </motion.section>
  );
}

function StatBox({ icon, value, label }) {
  return (
    <motion.div
      variants={scaleUp}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <Card className="p-4 sm:p-6 flex flex-col sm:flex-row items-center text-center sm:text-left gap-3 sm:gap-4 overflow-hidden h-full">
        <motion.div
          whileHover={{ rotate: 5, scale: 1.1 }}
          className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"
        >
          {icon}
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl font-bold text-foreground"
          >
            {value}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-xs text-muted-foreground tracking-wider"
          >
            {label}
          </motion.div>
        </div>
      </Card>
    </motion.div>
  );
}