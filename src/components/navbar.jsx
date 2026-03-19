"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";


const navItems = [
  { name: "Work", href: "work" },
  { name: "Services", href: "services" },
  { name: "About", href: "about" },
  { name: "Contact", href: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0px -40% 0px", // Adjusted values
        threshold: 0.1, // Added threshold
      }
    );

    sections.forEach((section) => observer.observe(section));

    // Set initial active section
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setActiveSection(hash);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Left side with icon */}
          <Link href="#home" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">
              Haseeb
            </span>
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => {
              return (
                <a
                  key={item.name}
                  href={`#${item.href}`}
                  className={`text-sm font-medium transition-colors ${activeSection === item.href
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSection(item.href);
                    document.getElementById(item.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href='#contact'>
                <Button
                  variant="default"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Free Consultation
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu - Sheet component */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-foreground hover:text-foreground"
                  aria-label="Toggle menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
                <div className="flex flex-col h-full">
                  {/* Sheet Header */}
                  <div className="border-b border-border p-6 flex items-center" >
                    <span className="text-xl font-bold text-primary">
                      Haseeb
                    </span>
                  </div>

                  {/* Navigation Links */}
                  <div className="flex-1 overflow-y-auto py-6">
                    <div className="flex flex-col space-y-1 ">
                      {navItems.map((item) => {
                        return (
                          <a
                            key={item.name}
                            href={`#${item.href}`}
                            onClick={(e) => {
                              e.preventDefault();
                              setIsOpen(false);
                              setActiveSection(item.href);
                              document.getElementById(item.href)?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className={`text-sm font-medium px-6 py-3 rounded-md transition-colors ${activeSection === item.href
                              ? "bg-primary text-white"
                              : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                              }`}
                          >
                            {item.name}
                          </a>
                        );
                      })}
                    </div>
                  </div>

                  {/* Sheet Footer */}
                  <div className="border-t border-border p-6">
                    <SheetClose asChild>
                      <Link href='#contact'>
                        <Button
                          className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
                          onClick={() => {
                            setIsOpen(false);
                            setActiveSection("contact");
                          }}
                        >
                          Free Consultation
                        </Button>
                      </Link>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}