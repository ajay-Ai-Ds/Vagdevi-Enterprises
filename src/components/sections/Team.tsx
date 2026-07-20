"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Hammer, CheckCircle } from "lucide-react";
import { imageAssets } from "@/utils/images";

interface GalleryItem {
  id: number;
  image: string;
  alt: string;
  caption: string;
}

const teamWorkGallery: GalleryItem[] = [
  {
    id: 1,
    image: imageAssets.teamGrillInstall.url,
    alt: imageAssets.teamGrillInstall.alt,
    caption: "Invisible Grill Cable Tensioning",
  },
  {
    id: 2,
    image: imageAssets.teamCompletedBalcony.url,
    alt: imageAssets.teamCompletedBalcony.alt,
    caption: "Balcony Invisible Grill Setup",
  },
  {
    id: 3,
    image: imageAssets.teamCompletedWindow.url,
    alt: imageAssets.teamCompletedWindow.alt,
    caption: "Window Invisible Grill Finish",
  },
  {
    id: 4,
    image: imageAssets.teamSportsNet.url,
    alt: imageAssets.teamSportsNet.alt,
    caption: "Sports Court Boundary Nets",
  },
  {
    id: 5,
    image: imageAssets.teamCricketNet.url,
    alt: imageAssets.teamCricketNet.alt,
    caption: "Cricket Pitch Net Setup",
  },
  {
    id: 6,
    image: imageAssets.teamCompletedStaircase.url,
    alt: imageAssets.teamCompletedStaircase.alt,
    caption: "Staircase Invisible Grill Finish",
  },
];

export default function Team() {
  return (
    <section className="bg-white py-24 scroll-mt-12" id="team-at-work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-800 bg-orange-100 px-3.5 py-1.5 rounded-full inline-block self-center">
            Our Team at Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Professional & Insured Installation Team
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Our field technicians are trained in high-rise anchoring safety guidelines and use certified heavy-duty safety gear.
          </p>
        </div>

        {/* Visual Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamWorkGallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden shadow-md h-80"
            >
              {/* Technician Image */}
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>

              {/* Floating Content Badge */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between z-10">
                <div className="flex flex-col gap-1 text-white">
                  <span className="text-sm font-bold tracking-wide">{item.caption}</span>
                  <span className="text-[10px] text-slate-300 font-medium uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-success-green fill-success-green/10" />
                    <span>Verified Installation</span>
                  </span>
                </div>
                <div className="bg-accent-orange p-2.5 rounded-xl text-white">
                  <Hammer className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
