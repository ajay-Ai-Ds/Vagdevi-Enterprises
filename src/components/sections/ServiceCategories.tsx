"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Eye, Shield, Target, ArrowRight } from "lucide-react";
import { imageAssets } from "@/utils/images";

interface Category {
  id: number;
  name: string;
  count: string;
  image: string;
  alt: string;
  icon: React.ReactNode;
  description: string;
  href: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Invisible Grills",
    count: "3 Services Available",
    image: imageAssets.serviceBalconyGrill.url,
    alt: imageAssets.serviceBalconyGrill.alt,
    icon: <Eye className="w-6 h-6 text-white" />,
    description: "Preserve beautiful scenic views while ensuring absolute balcony, window, and staircase security with modern nylon-coated SS316 stainless steel invisible grills.",
    href: "/services#invisible-grills",
  },
  {
    id: 2,
    name: "Sports Nets",
    count: "1 Service Available",
    image: imageAssets.serviceSportsNet.url,
    alt: imageAssets.serviceSportsNet.alt,
    icon: <Shield className="w-6 h-6 text-white" />,
    description: "Heavy-duty impact-absorbing sports boundary netting for play courts, schools, and terraces. Built to absorb high forces safely.",
    href: "/services/sports-nets",
  },
  {
    id: 3,
    name: "Cricket Practice Nets",
    count: "1 Service Available",
    image: imageAssets.serviceCricketNet.url,
    alt: imageAssets.serviceCricketNet.alt,
    icon: <Target className="w-6 h-6 text-white" />,
    description: "Professional-grade indoor & outdoor cricket netting enclosures for academies, schools, and residential terrace practice turfs.",
    href: "/services/cricket-practice-nets",
  },
];

export default function ServiceCategories() {
  return (
    <section id="services" className="bg-slate-50 py-24 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-800 bg-orange-100 px-3.5 py-1.5 rounded-full inline-block self-center">
            Our Specialties
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Engineered Safety & Sports Netting Solutions
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Protect your family, secure your pets, and optimize your sports play areas with our premium installation services in Chennai.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-xl border border-slate-100 transition-all duration-300 group flex flex-col h-full"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent"></div>

                {/* Floating Icon */}
                <div className="absolute top-4 right-4 bg-accent-orange p-3.5 rounded-2xl shadow-md z-10 transition-transform duration-300 group-hover:rotate-12">
                  {category.icon}
                </div>

                {/* Service count label */}
                <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-xs text-white text-xs font-bold px-3.5 py-1.5 rounded-full border border-white/20">
                  {category.count}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-accent-orange transition-colors">
                  {category.name}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                  {category.description}
                </p>

                {/* Action CTA */}
                <Link
                  href={category.href}
                  className="w-full flex items-center justify-between bg-slate-50 hover:bg-accent-orange hover:text-white text-slate-700 font-bold px-5 py-4 rounded-2xl transition-all duration-300 border border-slate-100"
                >
                  <span className="text-sm">Explore Specialty</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

