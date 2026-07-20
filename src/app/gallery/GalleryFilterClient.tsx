"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, MapPin } from "lucide-react";
import MasonryGrid from "@/components/ui/masonry-grid";
import LightboxGallery from "@/components/ui/lightbox-gallery";
import { imageAssets } from "@/utils/images";

interface GalleryPhoto {
  image: string;
  alt: string;
  category: "sports-nets" | "invisible-grills" | "projects" | "team" | "materials" | "apartment";
  categoryLabel: string;
  location: string;
  serviceName: string;
  description: string;
}

const galleryData: GalleryPhoto[] = [
  {
    image: imageAssets.serviceBalconyGrill.url,
    alt: imageAssets.serviceBalconyGrill.alt,
    category: "invisible-grills",
    categoryLabel: "Invisible Grills",
    location: "omr, Chennai",
    serviceName: "Balcony Invisible Grills",
    description: "Elegant SS316 steel wire invisible grills offering panoramic views.",
  },
  {
    image: imageAssets.teamGrillInstall.url,
    alt: imageAssets.teamGrillInstall.alt,
    category: "team",
    categoryLabel: "Team",
    location: "anna-nagar, Chennai",
    serviceName: "Vagdevi Enterprises Technicians",
    description: "Insured field technicians securing brackets at high floor structures.",
  },
  {
    image: imageAssets.serviceSportsNet.url,
    alt: imageAssets.serviceSportsNet.alt,
    category: "sports-nets",
    categoryLabel: "Sports Nets",
    location: "perungudi, Chennai",
    serviceName: "Sports Nets",
    description: "Cricket practice pitches netting boundary cage installation.",
  },
  {
    image: imageAssets.serviceStaircaseGrill.url,
    alt: imageAssets.serviceStaircaseGrill.alt,
    category: "apartment",
    categoryLabel: "Apartment Installations",
    location: "adyar, Chennai",
    serviceName: "Staircase Invisible Grills",
    description: "Reinforced kid-safe boundary wires tied securely around open railings.",
  },
  {
    image: imageAssets.serviceWindowGrill.url,
    alt: imageAssets.serviceWindowGrill.alt,
    category: "invisible-grills",
    categoryLabel: "Invisible Grills",
    location: "Velachery, Chennai",
    serviceName: "Window Invisible Grills",
    description: "SS316 safety wire grids replacing dark iron rods.",
  },
  {
    image: imageAssets.serviceCricketNet.url,
    alt: imageAssets.serviceCricketNet.alt,
    category: "sports-nets",
    categoryLabel: "Sports Nets",
    location: "pallikaranai, Chennai",
    serviceName: "Cricket Practice Nets",
    description: "Heavy-duty cricket netting secured around training turf frameworks.",
  },
  {
    image: imageAssets.serviceChildrenSafetyGrill.url,
    alt: imageAssets.serviceChildrenSafetyGrill.alt,
    category: "invisible-grills",
    categoryLabel: "Invisible Grills",
    location: "t-nagar, Chennai",
    serviceName: "Children Safety Invisible Grills",
    description: "Secure high-floor balcony safety grills custom-anchored for active toddlers.",
  },
  {
    image: imageAssets.servicePetSafetyGrill.url,
    alt: imageAssets.servicePetSafetyGrill.alt,
    category: "invisible-grills",
    categoryLabel: "Invisible Grills",
    location: "tambaram, Chennai",
    serviceName: "Pet Safety Invisible Grills",
    description: "Bite-resistant, tightly spaced monofilament cat safety invisible grills.",
  },
  {
    image: imageAssets.servicePigeonGrill.url,
    alt: imageAssets.servicePigeonGrill.alt,
    category: "invisible-grills",
    categoryLabel: "Invisible Grills",
    location: "porur, Chennai",
    serviceName: "Pigeon Invisible Grills",
    description: "Transparent bird control exclusion invisible steel grills.",
  },
];

const filters = [
  { value: "all", label: "All Photos" },
  { value: "invisible-grills", label: "Invisible Grills" },
  { value: "sports-nets", label: "Sports Nets" },
  { value: "projects", label: "Projects" },
  { value: "team", label: "Team" },
  { value: "materials", label: "Materials" },
  { value: "apartment", label: "Apartments" },
];

export default function GalleryFilterClient() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [photoIndex, setPhotoIndex] = useState<number | null>(null);

  const filteredPhotos = galleryData.filter(
    (photo) => activeFilter === "all" || photo.category === activeFilter
  );

  const imagesList = filteredPhotos.map((p) => p.image);

  return (
    <div className="flex flex-col gap-10">
      {/* Category Filter Toolbar */}
      <div className="flex flex-wrap gap-2.5 bg-white p-5 rounded-3xl border border-slate-200 shadow-xs justify-center sm:justify-start">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            className={`text-xs sm:text-sm font-bold px-4.5 py-2.5 rounded-full cursor-pointer transition-all ${
              activeFilter === filter.value
                ? "bg-primary-700 text-white shadow-xs"
                : "bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <MasonryGrid>
        {filteredPhotos.map((photo, index) => (
          <div
            key={index}
            onClick={() => setPhotoIndex(index)}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-md border border-slate-200 transition-all duration-300 cursor-pointer w-full"
          >
            {/* Image */}
            <div className="relative w-full h-64 md:h-80 bg-slate-200">
              <Image
                src={photo.image}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-103"
              />
              {/* Zoom hover glass overlay */}
              <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/90 p-3 rounded-full text-slate-800 backdrop-blur-xs scale-90 group-hover:scale-100 transition-all duration-300">
                  <Maximize2 className="w-4.5 h-4.5" />
                </div>
              </div>
            </div>

            {/* Meta Footer */}
            <div className="p-5 border-t border-slate-100">
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-slate-500 font-bold uppercase mb-1.5">
                <MapPin className="w-3.5 h-3.5 text-accent-orange" />
                <span>{photo.location}</span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-800 mb-1 group-hover:text-accent-orange transition-colors">
                {photo.serviceName}
              </h3>
              <p className="text-slate-500 text-[11px] leading-relaxed line-clamp-2">
                {photo.description}
              </p>
            </div>
          </div>
        ))}
      </MasonryGrid>

      {/* Lightbox Trigger Modal */}
      {photoIndex !== null && (
        <LightboxGallery
          images={imagesList}
          serviceName={filteredPhotos[photoIndex].serviceName}
        />
      )}
    </div>
  );
}

