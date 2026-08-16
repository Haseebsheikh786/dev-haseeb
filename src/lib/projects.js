export const projects = [
    {
        title: "EventFlow",
        category: "Sports Event Management SaaS",
        shortDesc: "Platform for managing gymnastics and cheerleading competitions",
        images: ["/projects/zip_1.png", "/projects/zip_2.png"],

        overview:
            "EventFlow is a SaaS platform designed to streamline the management of gymnastics and cheerleading competitions. The platform allows event organizers to handle registrations, scoring, scheduling, billing, and athlete management within a single system.",

        problem:
            "Sports competitions often rely on spreadsheets and manual processes for scoring, scheduling, and billing. This leads to delays, calculation errors, and poor communication between organizers and participating gyms.",

        solution:
            "EventFlow centralizes the entire competition workflow into a cloud-based platform with dedicated dashboards for organizers and gyms, enabling efficient event management and real-time results.",

        features: [
            "Multi-level scoring system with judge assignments and approval workflows",
            "Smart scheduling with division and category grouping",
            "Automated invoicing with crossover fees and discounts",
            "Digital waiver system with e-signatures",
            "Real-time scorecards and PDF reports",
            "Gym portal for athlete and team management",
            "AI-powered birth certificate verification using Google Gemini",
            "Background job pipelines for invoicing, emails, and long-running tasks",
        ],

        technologies: ["Next.js", "React", "Node.js", "PostgreSQL"],
        url: 'https://zipregistration.com/'
    },

    {
        title: "NutriFlow",
        category: "Subscription E-commerce Platform",
        shortDesc: "Subscription platform for meal-prep and wellness businesses",
        images: ["/projects/ash_1.png", "/projects/ash_2.png"],

        overview:
            "NutriFlow is a subscription-based e-commerce platform designed for meal-prep and wellness juice businesses to manage recurring orders, deliveries, and inventory.",

        problem:
            "Businesses offering subscription-based products struggle with managing recurring orders, delivery logistics, and inventory in a scalable way.",

        solution:
            "NutriFlow automates subscription management, delivery scheduling, and order processing while providing administrators with a powerful dashboard to manage operations.",

        features: [
            "Flexible subscription plans with recurring billing",
            "Smart delivery scheduling with configurable cutoff times",
            "Dynamic delivery fee calculations using location data",
            "Inventory tracking and low-stock alerts",
            "Coupon and discount management",
            "Customer portal for subscription management",
        ],

        technologies: [
            "Next.js",
            "React",
            "Node.js",

            "PostgreSQL",
            "Stripe",
            "Google Maps API",
        ],
        url: 'https://ash-crv-site.vercel.app/'
    },

    {
        title: "Event Ticketing & Management",
        category: "Event Ticketing & Management Platform",
        shortDesc: "Full-featured event ticketing platform with admin panel, artist dashboards, and mobile app",
        images: ["/projects/tiaz_1.png", "/projects/tiaz_2.png", "/projects/tiaz_3.png"],

        overview:
            "TicketsInAZip is a comprehensive event ticketing and management platform built for event organizers, artists, and attendees. It includes a powerful web admin panel for event creation, artist management, invoicing, marketing campaigns, and customer support, along with a mobile app for ticket discovery, purchase, and scanning.",

        problem:
            "Event organizers often manage ticket sales, artist settlements, marketing, and attendee support through disconnected tools, leading to inefficiency, data silos, and manual errors.",

        solution:
            "TicketsInAZip unifies the entire event lifecycle into one platform with role-based dashboards for admins, artists, and end-users. Real-time chat via Firebase, multi-day event support, automated email notifications, and Stripe payments keep operations smooth and scalable.",

        features: [
            "Multi-day event support with per-day scheduling and pricing",
            "Role-based access control with granular permissions",
            "Dynamic ticket pricing categories (Adult, Child, VIP)",
            "Real-time Firebase chat for customer support",
            "Artist management with revenue sharing, invoices, and ledger entries",
            "Automated email notifications (OTP, welcome, password reset, marketing campaigns)",
            "Marketing CRM with collections, templates, and campaign scheduling",
            "Stripe payment integration for ticket purchases",
            "Scanner API for ticket validation and attendance tracking",
            "Downloadable PDF invoices and statements",
        ],

        technologies: [
            "Next.js",
            "React",
            "Node.js",
            "Express",
            "PostgreSQL",
            "Firebase",
            "Stripe",
            "Cloudinary",
            "Mapbox",
        ],
        url: "https://ticketsinazip-site.vercel.app/"
    },
    
    {
        title: "ExpertConnect",
        category: "Expert Marketplace Platform",
        shortDesc: "Marketplace connecting fans with professionals for paid consultations",
        images: ["/projects/expert.png"],

        overview:
            "ExpertConnect is a marketplace platform that connects fans with professionals through paid interactions such as questions, messaging, and video consultations.",

        problem:
            "Professionals often struggle to monetize their expertise online, while fans lack reliable platforms to access verified experts for advice or guidance.",

        solution:
            "ExpertConnect provides a structured marketplace where experts can create profiles, offer services, schedule sessions, and receive payments securely.",

        features: [
            "Expert profiles with customizable services",
            "Session scheduling with availability management",
            "Secure payment processing with automated payouts",
            "Real-time messaging and video calls",
            "Review and rating system for quality assurance",
            "Admin dashboard for platform management",
        ],

        technologies: [
            "Next.js",
            "React",
            "Node.js",

            "PostgreSQL",
            "Stripe",
            "WebRTC",
            "Socket.io",
        ],
    },

    {
        title: "StaySync",
        category: "Hotel Operations Management SaaS",
        shortDesc: "Property management platform for hotels and rentals",
        images: ["/projects/dashboard.png"],
        overview:
            "StaySync is a property management system designed for hotels and short-term rental operators to centralize bookings, guest communication, and operational workflows.",

        problem:
            "Managing bookings across multiple platforms such as Airbnb and Booking.com often leads to double bookings and fragmented communication.",

        solution:
            "StaySync synchronizes reservations across channels while providing property managers with tools to manage pricing, guest communication, and operational tasks.",

        features: [
            "Multi-channel booking synchronization",
            "Unified guest communication inbox",
            "Automated digital check-in and ID verification",
            "Dynamic pricing management",
            "Housekeeping task scheduling",
            "Financial reporting and analytics",
        ],

        technologies: ["Next.js", "React", "Node.js", "PostgreSQL"],
    },

    {
        title: "RetailFlow",
        category: "Retail POS & Inventory Platform",
        shortDesc: "Point-of-sale and inventory management system for retail stores",
        images: ["/projects/pos_1.png", "/projects/pos_2.png"],

        overview:
            "RetailFlow is a point-of-sale and inventory management platform designed to help retail stores manage sales, products, and stock levels efficiently.",

        problem:
            "Retail businesses often rely on disconnected tools for billing, inventory tracking, and reporting, making daily operations inefficient.",

        solution:
            "RetailFlow integrates product management, billing, and analytics into a single platform to streamline retail operations.",

        features: [
            "Product catalog with barcode support",
            "Customer billing and invoice generation",
            "Inventory monitoring with stock alerts",
            "Customer purchase history tracking",
            "Sales analytics and reporting dashboard",
            "Role-based staff access",
        ],

        technologies: ["Next.js", "Node.js", "Supabase"],
        url: 'https://ash-crv-site.vercel.app/'
    },
];