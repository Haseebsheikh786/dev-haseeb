"use client";

import { Star } from "lucide-react";
import { Card } from "./ui/card";
import { motion } from "framer-motion";
import { fadeUp, scaleUp } from '@/lib/animations'

const testimonials = [
  {
    name: "Daniel Brooks",
    role: "Startup Founder",
    content:
      "Haseeb delivered our MVP in just a few weeks with excellent code quality. His communication was clear and he truly understood the product vision.",
    rating: 5,
  },
  {
    name: "Emily Carter",
    role: "Product Manager",
    content:
      "His technical expertise and problem‑solving approach stood out. The development process was smooth and the final product was clean and scalable.",
    rating: 5,
  },
  {
    name: "Jason Miller",
    role: "Tech Consultant",
    content:
      "Professional, responsive, and highly skilled. He helped turn our early concept into a working product with great attention to detail.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <motion.section
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
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            What  <span className="text-primary"> Clients Say</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Hear from founders who grew their startups with my development and
            technical expertise.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
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
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={scaleUp}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="p-8 overflow-hidden h-full">
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
                >
                  {/* Rating Stars */}
                  <motion.div
                    variants={fadeUp}
                    className="flex gap-1 mb-4"
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        <Star className="h-5 w-5 fill-primary text-primary" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Testimonial Content */}
                  <motion.p
                    variants={fadeUp}
                    className="text-foreground mb-6 italic"
                  >
                    "{testimonial.content}"
                  </motion.p>

                  {/* Author Info */}
                  <motion.div variants={fadeUp}>
                    <motion.p
                      variants={fadeUp}
                      className="font-semibold"
                    >
                      {testimonial.name}
                    </motion.p>
                    <motion.p
                      variants={fadeUp}
                      className="text-sm text-muted-foreground"
                    >
                      {testimonial.role}
                    </motion.p>
                  </motion.div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}