"use client";

import Link from "next/link";
import {
  Mail,
  Linkedin,
  Instagram,
  Cpu,
  LayoutGrid,
  User,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, scaleUp } from '@/lib/animations'
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  return (
    <motion.footer
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeUp}
      className="border-t border-foreground/10"
    >
      <div className="container mx-auto px-4 sm:px-4 lg:px-8 py-12">
        {/* Main Footer Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-10 gap-8 md:gap-12 "
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
          {/* Column 1 - Brand (5 columns) */}
          <motion.div
            variants={scaleUp}
            className="col-span-1 md:col-span-4"
          >
            <motion.div>
              {/* Logo - Left side with icon */}
              <Link href="#home" className="inline-flex items-center space-x-2 mb-4">
                <span className="text-xl font-bold text-primary">
                  Haseeb
                </span>
              </Link>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-sm text-muted-foreground leading-relaxed max-w-96"
            >
              I'm a full-stack engineer helping startups build scalable SaaS products and MVPs with clean, maintainable code and modern technologies like React, Next.js, and Node.js.
            </motion.p>
          </motion.div>

          {/* Column 2 - Quick Links (2 columns) */}
          <motion.div
            variants={scaleUp}
            className="col-span-1 md:col-span-2"
          >
            <motion.h4
              variants={fadeUp}
              className="text-sm font-semibold text-foreground mb-4 tracking-wide"
            >
              Quick Links
            </motion.h4>

            <motion.ul
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
              className="space-y-3"
            >
              {[
                { href: "#work", label: "Work", icon: LayoutGrid },
                { href: "#services", label: "Services", icon: Cpu },
                { href: "#about", label: "About", icon: User },
                { href: "#contact", label: "Contact", icon: Mail },
              ].map((item, index) => {
                const isActive = pathname === item.href;

                return (
                  <motion.li key={index} variants={fadeUp}>
                    <Link
                      href={item.href}
                      className={`inline-flex items-center space-x-2 text-sm transition-colors group ${isActive
                        ? "text-primary font-semibold"
                        : "text-muted-foreground hover:text-primary"
                        }`}
                    >
                      <motion.div whileHover={{ x: 3 }} className="flex items-center gap-2">
                        <item.icon className={`h-4 w-4 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                        <span>{item.label}</span>
                      </motion.div>
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>

          {/* Column 3 - Services (2 columns) */}
          <motion.div
            variants={scaleUp}
            className="col-span-1 md:col-span-2"
          >
            <motion.h4
              variants={fadeUp}
              className="text-sm font-semibold text-foreground mb-4 tracking-wide"
            >
              Services
            </motion.h4>

            <motion.ul
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
              className="space-y-3"
            >
              {[
                "Rapid MVP Development",
                "SaaS Product Scaling",
                "Targeted Feature Delivery",
              ].map((service, index) => (
                <motion.li key={index} variants={fadeUp} whileHover={{ x: 3 }}>
                  <Link
                    href="#services"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Column 4 - Connect (2 columns) */}
          <motion.div
            variants={scaleUp}
            className="col-span-1 md:col-span-2"
          >
            <motion.h4
              variants={fadeUp}
              className="text-sm font-semibold text-foreground mb-4 tracking-wide"
            >
              Connect
            </motion.h4>

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
              className="flex flex-col space-y-3"
            >
              {[
                {
                  href: "https://linkedin.com/in/haseeb-farrukh",
                  icon: Linkedin,
                  label: "LinkedIn",
                },
                {
                  href: "https://www.instagram.com/muhammad.haseeb26/",
                  icon: Instagram,
                  label: "Instagram",
                },
                {
                  href: "mailto:haseeb99sh@gmail.com",
                  icon: Mail,
                  label: "haseeb99sh@gmail.com",
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith('http') ? "_blank" : undefined}
                  rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  variants={fadeUp}
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <motion.div whileHover={{ rotate: 5, scale: 1.1 }}>
                    <item.icon className="h-4 w-4" />
                  </motion.div>
                  <span className="truncate">{item.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-8 border-t border-foreground/10 text-center"
        >
          <div className="flex justify-center items-center gap-4">
            <motion.p
              whileHover={{ scale: 1.05 }}
              className="text-sm text-muted-foreground"
            >
              © 2026 Haseeb. All rights reserved.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}