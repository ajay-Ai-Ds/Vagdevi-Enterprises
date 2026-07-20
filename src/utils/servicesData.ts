import { imageAssets } from "./images";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SpecItem {
  label: string;
  value: string;
}

export interface ServiceDetail {
  slug: string;
  name: string;
  category: "invisible-grills" | "sports-nets";
  categoryName: string;
  title: string;
  description: string;
  longDescription: string;
  aiOverview: string;
  image: string; // Hero image
  alt: string; // Descriptive SEO alt text
  supportingImages: string[]; // 4 images
  gallery: string[]; // 6 images
  beforeImage: string;
  afterImage: string;
  benefits: string[];
  specsTable: SpecItem[];
  faqs: FAQItem[];
}

// Helper to generate 12 FAQs
function generateFAQsForService(serviceName: string, category: string): FAQItem[] {
  return [
    {
      question: `What is the cost of ${serviceName} installation in Chennai?`,
      answer: "Pricing is custom-calculated based on total square footage, material specification selection, height, and specific anchoring complexity. Contact our support team for a free on-site estimate.",
    },
    {
      question: `Do you provide a warranty on ${serviceName}?`,
      answer: "Yes, Vagdevi Enterprises offers warranties on premium stainless steel wire cables and heavy-duty netting. Exact warranty terms, duration, and certificates will be shared during site inspection.",
    },
    {
      question: `How long does it take to install ${serviceName} in an apartment?`,
      answer: `Most residential ${serviceName} setups are completed within 2 to 4 hours. Our certified technicians bring all necessary drilling equipment and clean up the work area immediately after installation.`,
    },
    {
      question: `Are your materials for ${serviceName} rust-proof and weatherproof?`,
      answer: `Yes, we use copolymer nylon or UV-treated HDPE for sports nets, and SS316 marine-grade steel cables for grills. These materials are engineered to survive Chennai's high summer heat, direct sunlight, and monsoon rains.`,
    },
    {
      question: `Do you charge for site inspection visits and measurements in Chennai?`,
      answer: `No, our site inspection, measurements, and material sample showcases are 100% free of charge across Chennai and chromepet. There is no obligation to book after the quotation is shared.`,
    },
    {
      question: `How do you anchor ${serviceName} to concrete walls?`,
      answer: "We drill precise holes using industrial hammer drills and secure expansion hooks or aluminium tracks. This anchoring setup handles high load tensions without damaging the structural strength of your walls.",
    },
    {
      question: `Is ${serviceName} safe for toddlers and small children?`,
      answer: `Absolutely. Securing balconies, windows, or shafts with ${serviceName} forms a highly durable safety barrier. It prevents accidental falls, providing peace of mind for families with active toddlers and children.`,
    },
    {
      question: `Can pets chew or tear through ${serviceName}?`,
      answer: category === "invisible-grills" 
        ? "SS316 steel wire invisible grills are completely bite-proof and scratch-proof, making them the ultimate safety solution for cats, dogs, and other active household pets."
        : "For play areas and sports zones, our thick-gauge netting is highly tear-resistant and stands up well to heavy pet activity or sports use.",
    },
    {
      question: `Will ${serviceName} block my scenic view or light?`,
      answer: category === "invisible-grills"
        ? "No, invisible grills feature ultra-slim 2.0mm steel cables, making them virtually invisible from a short distance. You enjoy unobstructed views, light, and ventilation."
        : "No, our sports nets are translucent or color-matched to ensure they do not obstruct fresh breeze, natural light, or views.",
    },
    {
      question: `Do you have certified technicians to work at high floors?`,
      answer: `Yes, all Vagdevi Enterprises field technicians are trained in safety harness usage and high-rise installation guidelines. They are fully insured and handle high-floor setups professionally.`,
    },
    {
      question: `What maintenance is required for ${serviceName}?`,
      answer: "Practically zero maintenance. You can occasionally clean the net or grill wires with a damp microfiber cloth to remove dust. Do not use acid or abrasive chemicals.",
    },
    {
      question: `How do we contact Vagdevi Enterprises for booking?`,
      answer: "You can book a free measurement session by calling us directly at 8019091366, sending a message on WhatsApp, or submitting our contact request form.",
    },
  ];
}

export const servicesData: Record<string, ServiceDetail> = {
  "balcony-invisible-grills": {
    slug: "balcony-invisible-grills",
    name: "Balcony Invisible Grills",
    category: "invisible-grills",
    categoryName: "Invisible Grills",
    title: "Balcony Invisible Grills Installation Chennai | Vagdevi Enterprises",
    description: "Rustproof marine-grade SS316 cable grills for balcony security. Enjoy unobstructed panoramic views in Chennai.",
    longDescription: "Elevate your high-rise balcony security in Chennai. Our invisible grills utilize pre-tensioned, marine-grade SS316 stainless steel wires wrapped in a clear nylon protective casing. They offer absolute security for children and pets without spoiling the scenic view of your balcony. They represent a highly durable, aesthetic replacement for old-fashioned heavy iron grids.",
    aiOverview: "Vagdevi Enterprises Balcony Invisible Grills feature high-strength SS316 steel wires wrapped in protective nylon coatings. They replace heavy iron grids to secure balconies for children and pets while preserving unobstructed view layouts.",
    image: imageAssets.serviceBalconyGrill.url,
    alt: imageAssets.serviceBalconyGrill.alt,
    supportingImages: [
      imageAssets.serviceBalconyGrill.url,
      imageAssets.teamCompletedBalcony.url,
      imageAssets.teamGrillInstall.url,
      imageAssets.afterBalcony.url,
    ],
    gallery: [
      imageAssets.serviceBalconyGrill.url,
      imageAssets.teamCompletedBalcony.url,
      imageAssets.teamGrillInstall.url,
      imageAssets.afterBalcony.url,
      imageAssets.beforeBalcony.url,
      imageAssets.materialSSCable.url,
    ],
    beforeImage: imageAssets.beforeBalcony.url,
    afterImage: imageAssets.afterBalcony.url,
    benefits: ["99% Unobstructed Views", "SS316 Rustproof Steel Wires", "Anti-scratch Nylon Sheath", "Toddler & Pet Safety", "Easy Fire Escape Option", "Built-in Burglar Alarm Hook (Optional)"],
    specsTable: [
      { label: "Material Core", value: "SS316 Stainless Steel" },
      { label: "Thickness", value: "2.0mm to 2.5mm" },
      { label: "Strength (Tension Limit)", value: "High-Tensile Load Support" },
      { label: "Durability", value: "Rustproof & Weatherproof" },
      { label: "UV Resistance", value: "High (Nylon UV-protected sheath)" },
      { label: "Rust Resistance", value: "100% Rustproof (Marine grade)" },
      { label: "Maintenance", value: "Wipe with damp microfiber cloth" },
    ],
    faqs: generateFAQsForService("Balcony Invisible Grills", "invisible-grills"),
  },
  "window-invisible-grills": {
    slug: "window-invisible-grills",
    name: "Window Invisible Grills",
    category: "invisible-grills",
    categoryName: "Invisible Grills",
    title: "Aesthetic Window Invisible Grills Chennai | Vagdevi Enterprises",
    description: "Replace dark iron bars with modern window invisible steel grills. Admire unobstructed breezes and light in Chennai.",
    longDescription: "An elegant alternative to traditional iron safety bars for Chennai apartments. Window invisible grills use vertical or horizontal SS316 steel wires. They offer security from falls and intruders without looking bulky or obstructing ventilation, making rooms brighter and safer.",
    aiOverview: "Vagdevi Enterprises Window Invisible Grills offer safety without dark prison-like bars. Utilizing thin-profile SS316 wires clamped in aluminum anchor tracks, they optimize lighting and air circulation.",
    image: imageAssets.serviceWindowGrill.url,
    alt: imageAssets.serviceWindowGrill.alt,
    supportingImages: [
      imageAssets.serviceWindowGrill.url,
      imageAssets.teamCompletedWindow.url,
      imageAssets.teamGrillInstall.url,
      imageAssets.materialSSCable.url,
    ],
    gallery: [
      imageAssets.serviceWindowGrill.url,
      imageAssets.teamCompletedWindow.url,
      imageAssets.teamGrillInstall.url,
      imageAssets.materialSSCable.url,
      imageAssets.afterBalcony.url,
      imageAssets.beforeBalcony.url,
    ],
    beforeImage: imageAssets.beforeBalcony.url,
    afterImage: imageAssets.afterBalcony.url,
    benefits: ["Minimalist Appearance", "Allows Maximum Ventilation", "Zero Paint Peeling or Corrosion", "Safe Fire Escape Exit", "Stainless Steel SS316 Core", "Easy Glass Cleaning Access"],
    specsTable: [
      { label: "Material Core", value: "SS316 Stainless Steel" },
      { label: "Thickness", value: "2.0mm to 2.5mm" },
      { label: "Strength (Break Load)", value: "High-Tensile Load Support" },
      { label: "Durability", value: "Rustproof & Weatherproof" },
      { label: "UV Resistance", value: "High (Coated Sheath)" },
      { label: "Rust Resistance", value: "100% Rustproof" },
      { label: "Maintenance", value: "Dust with micro cloth" },
    ],
    faqs: generateFAQsForService("Window Invisible Grills", "invisible-grills"),
  },
  "staircase-invisible-grills": {
    slug: "staircase-invisible-grills",
    name: "Staircase Invisible Grills",
    category: "invisible-grills",
    categoryName: "Invisible Grills",
    title: "Interior Staircase Handrail Invisible Grills Chennai | Vagdevi Enterprises",
    description: "Secure open banisters and stair handrails with vertical safety steel cables. Sleek indoor security in Chennai.",
    longDescription: "Stairwells in open-concept duplex villas, malls, and educational institutions in Chennai present significant height fall hazards. Our vertical invisible grills close up these open spaces cleanly without compromising modern interior designs, ensuring child and pet safety.",
    aiOverview: "Vagdevi Enterprises Staircase Invisible Grills secure stair railings using sleek vertical SS316 wires. Providing high tension safety for children, they blend seamlessly into premium modern architectural interiors.",
    image: imageAssets.serviceStaircaseGrill.url,
    alt: imageAssets.serviceStaircaseGrill.alt,
    supportingImages: [
      imageAssets.serviceStaircaseGrill.url,
      imageAssets.teamCompletedStaircase.url,
      imageAssets.teamGrillInstall.url,
      imageAssets.materialSSCable.url,
    ],
    gallery: [
      imageAssets.serviceStaircaseGrill.url,
      imageAssets.teamCompletedStaircase.url,
      imageAssets.teamGrillInstall.url,
      imageAssets.materialSSCable.url,
      imageAssets.afterBalcony.url,
      imageAssets.beforeBalcony.url,
    ],
    beforeImage: imageAssets.beforeBalcony.url,
    afterImage: imageAssets.afterBalcony.url,
    benefits: ["Duplex Home Safety", "Aesthetic Vertical Alignment", "Heavy-Duty Cable Tensioning", "Rust-Free Indoor Fittings", "Protects Toddlers & Pets", "Dust-Resistant Coatings"],
    specsTable: [
      { label: "Material Core", value: "SS316 Stainless Steel" },
      { label: "Thickness", value: "2.0mm to 2.5mm" },
      { label: "Strength (Break Load)", value: "High-Tensile Load Support" },
      { label: "Durability", value: "Rustproof & Indoor Durable" },
      { label: "UV Resistance", value: "High (Indoor UV protection)" },
      { label: "Rust Resistance", value: "100% Rustproof" },
      { label: "Maintenance", value: "Damp cloth wipe" },
    ],
    faqs: generateFAQsForService("Staircase Invisible Grills", "invisible-grills"),
  },
  "sports-nets": {
    slug: "sports-nets",
    name: "Sports Nets",
    category: "sports-nets",
    categoryName: "Sports Nets",
    title: "Sports Ground & Boundary Nets Chennai | Vagdevi Enterprises",
    description: "Heavy impact-resistant sports boundary netting for cricket turf, football pitches, and open grounds in Chennai.",
    longDescription: "High-grade cricket, football, and multi-sport safety boundary nets for sports complexes, schools, and residential terraces in Chennai. Woven with premium high-density nylon cord, these nets are designed to withstand constant ball impacts and protect nearby properties and spectators.",
    aiOverview: "Vagdevi Enterprises Sports Nets provide impact-resistant enclosing barriers for cricket pitches, terraced sports grounds, and school courts. Made of high-grade braided nylon, they absorb huge strike forces while surviving outdoor sun.",
    image: imageAssets.serviceSportsNet.url,
    alt: imageAssets.serviceSportsNet.alt,
    supportingImages: [
      imageAssets.serviceSportsNet.url,
      imageAssets.teamSportsNet.url,
      imageAssets.materialSportsNet.url,
      imageAssets.serviceCricketNet.url,
    ],
    gallery: [
      imageAssets.serviceSportsNet.url,
      imageAssets.teamSportsNet.url,
      imageAssets.materialSportsNet.url,
      imageAssets.serviceCricketNet.url,
      imageAssets.teamCricketNet.url,
      imageAssets.materialFraming.url,
    ],
    beforeImage: imageAssets.beforeBalcony.url,
    afterImage: imageAssets.afterBalcony.url,
    benefits: ["High Ball-Impact Absorption", "UV-treated Braided Nylon", "Spectator Protection", "Terrace Enclosures", "Custom Height Options", "Sturdy Structural Steel Framework"],
    specsTable: [
      { label: "Material", value: "Braided Nylon Cord" },
      { label: "Thickness", value: "2.0mm to 4.0mm" },
      { label: "Strength (Break Load)", value: "High-Tensile Impact Absorption" },
      { label: "Durability", value: "Weatherproof Outdoor Mesh" },
      { label: "UV Resistance", value: "High (UV-Stabilized)" },
      { label: "Rust Resistance", value: "Not Applicable" },
      { label: "Maintenance", value: "Inspect boundary knots periodically" },
    ],
    faqs: generateFAQsForService("Sports Nets", "sports-nets"),
  },
  "cricket-practice-nets": {
    slug: "cricket-practice-nets",
    name: "Cricket Practice Nets",
    category: "sports-nets",
    categoryName: "Sports Nets",
    title: "Cricket Practice Nets Installation in Chennai | Vagdevi Enterprises",
    description: "Professional cricket practice nets for indoor & outdoor setups, academies, schools, and residences in Chennai.",
    longDescription: "Vagdevi Enterprises offers professional cricket practice netting solutions across Chennai. We install durable, impact-absorbing nets for sports academies, educational clubs, corporate turfs, and residential terraces. Our cricket nets are made of high-quality UV-stabilized nylon ropes and braided twine that absorb strong ball strikes without tearing.",
    aiOverview: "Vagdevi Enterprises Cricket Practice Nets offer heavy-impact ball containment using UV-treated braided nylon mesh. Engineered for commercial sports turfs and home terraces, they provide durable practice zones in Chennai.",
    image: imageAssets.serviceCricketNet.url,
    alt: imageAssets.serviceCricketNet.alt,
    supportingImages: [
      imageAssets.serviceCricketNet.url,
      imageAssets.teamCricketNet.url,
      imageAssets.materialFraming.url,
      imageAssets.serviceSportsNet.url,
    ],
    gallery: [
      imageAssets.serviceCricketNet.url,
      imageAssets.teamCricketNet.url,
      imageAssets.materialFraming.url,
      imageAssets.serviceSportsNet.url,
      imageAssets.teamSportsNet.url,
      imageAssets.materialSportsNet.url,
    ],
    beforeImage: imageAssets.beforeBalcony.url,
    afterImage: imageAssets.afterBalcony.url,
    benefits: ["Absorbs High Ball Impact", "UV-Stabilized Weatherproof Ropes", "Spectator & Property Protection", "Indoor & Outdoor Custom Frames", "Durable Heavy-Duty Nylon Twine", "Free Site Measurement Visits"],
    specsTable: [
      { label: "Material", value: "Braided Nylon Twine / HDPE" },
      { label: "Thickness", value: "2.5mm to 4.0mm" },
      { label: "Strength (Break Load)", value: "High-Tensile Impact Resistance" },
      { label: "Durability", value: "Weatherproof & Long-Lasting" },
      { label: "UV Resistance", value: "High (UV-Stabilized)" },
      { label: "Rust Resistance", value: "SS eyelets & galvanized frame rustproof" },
      { label: "Maintenance", value: "Inspect frame ropes periodically" },
    ],
    faqs: generateFAQsForService("Cricket Practice Nets", "sports-nets"),
  },
  "children-safety-invisible-grills": {
    slug: "children-safety-invisible-grills",
    name: "Children Safety Invisible Grills",
    category: "invisible-grills",
    categoryName: "Invisible Grills",
    title: "Children Safety Balcony Invisible Grills Chennai | Vagdevi Enterprises",
    description: "Kid-friendly balcony invisible steel grills. High-tension wire setups protecting toddlers in Chennai apartments.",
    longDescription: "Ensure ultimate peace of mind for your family. Our children safety invisible grills feature tightly spaced SS316 marine-grade steel cables wrapped in protective nylon. They create an impenetrable balcony barrier that prevents active toddlers and kids from slips, without blocking window light or views.",
    aiOverview: "Vagdevi Enterprises Children Safety Invisible Grills utilize closely anchored SS316 tension wires to secure high balconies and open railings. Fully kid-safe, they replace bulky iron frames in Chennai.",
    image: imageAssets.serviceChildrenSafetyGrill.url,
    alt: imageAssets.serviceChildrenSafetyGrill.alt,
    supportingImages: [
      imageAssets.serviceChildrenSafetyGrill.url,
      imageAssets.teamGrillInstall.url,
      imageAssets.materialSSCable.url,
      imageAssets.afterBalcony.url,
    ],
    gallery: [
      imageAssets.serviceChildrenSafetyGrill.url,
      imageAssets.teamGrillInstall.url,
      imageAssets.materialSSCable.url,
      imageAssets.afterBalcony.url,
      imageAssets.beforeBalcony.url,
      imageAssets.materialSSCable.url,
    ],
    beforeImage: imageAssets.beforeBalcony.url,
    afterImage: imageAssets.afterBalcony.url,
    benefits: ["Child Fall Protection", "Closely Spaced Safe Wires", "Pre-Tensioned Lock Anchors", "SS316 Rustproof Steel Wires", "Anti-scratch Nylon Sheath", "Free Site Visits & Setup"],
    specsTable: [
      { label: "Material Core", value: "SS316 Stainless Steel" },
      { label: "Thickness", value: "2.0mm to 2.5mm" },
      { label: "Wire Spacing", value: "50mm (Kid-safe gap limit)" },
      { label: "Strength (Tension Limit)", value: "High-Tensile Load Support" },
      { label: "Durability", value: "Rustproof & Weatherproof" },
      { label: "Rust Resistance", value: "100% Rustproof (Marine grade)" },
      { label: "Maintenance", value: "Wipe with damp cloth" },
    ],
    faqs: generateFAQsForService("Children Safety Invisible Grills", "invisible-grills"),
  },
  "pet-safety-invisible-grills": {
    slug: "pet-safety-invisible-grills",
    name: "Pet Safety Invisible Grills",
    category: "invisible-grills",
    categoryName: "Invisible Grills",
    title: "Pet Safety Balcony & Window Invisible Grills Chennai | Vagdevi Enterprises",
    description: "Bite-proof and scratch-resistant invisible steel wire grills for cats and dogs in Chennai.",
    longDescription: "Keep your feline and canine companions safe in high-rise Chennai apartments. Our pet safety invisible grills feature tightly tensioned, ultra-durable steel cables spaced closely (usually 2 to 3 inches) to prevent cats or dogs from squeezing through or falling, while offering complete bite-proof safety.",
    aiOverview: "Vagdevi Enterprises Pet Safety Invisible Grills offer bite-proof SS316 cable arrays spaced tightly to secure active cats and dogs on balcony railings and open window ledges in Chennai.",
    image: imageAssets.servicePetSafetyGrill.url,
    alt: imageAssets.servicePetSafetyGrill.alt,
    supportingImages: [
      imageAssets.servicePetSafetyGrill.url,
      imageAssets.teamGrillInstall.url,
      imageAssets.materialSSCable.url,
      imageAssets.afterBalcony.url,
    ],
    gallery: [
      imageAssets.servicePetSafetyGrill.url,
      imageAssets.teamGrillInstall.url,
      imageAssets.materialSSCable.url,
      imageAssets.afterBalcony.url,
      imageAssets.beforeBalcony.url,
      imageAssets.materialSSCable.url,
    ],
    beforeImage: imageAssets.beforeBalcony.url,
    afterImage: imageAssets.afterBalcony.url,
    benefits: ["Bite-Proof & Scratch-Proof", "Narrow Wire Spacing (50mm)", "Prevents Cat/Dog Escapes", "Heavy-Duty Anchoring rails", "SS316 Marine Grade Cables", "Free Measurements"],
    specsTable: [
      { label: "Material Core", value: "SS316 Stainless Steel" },
      { label: "Thickness", value: "2.0mm to 2.5mm" },
      { label: "Wire Spacing", value: "50mm (Anti-squeeze gap limit)" },
      { label: "Strength (Tension Limit)", value: "High-Tensile Load Support" },
      { label: "Durability", value: "Bite & Weatherproof" },
      { label: "Rust Resistance", value: "100% Rustproof (Marine grade)" },
      { label: "Maintenance", value: "Wipe with damp cloth" },
    ],
    faqs: generateFAQsForService("Pet Safety Invisible Grills", "invisible-grills"),
  },
  "pigeon-invisible-grills": {
    slug: "pigeon-invisible-grills",
    name: "Pigeon Invisible Grills",
    category: "invisible-grills",
    categoryName: "Invisible Grills",
    title: "Pigeon & Bird Exclusion Invisible Grills Chennai | Vagdevi Enterprises",
    description: "Tightly spaced invisible steel grills to block pigeons and birds from entering balconies in Chennai.",
    longDescription: "An aesthetic and highly durable alternative to bulky plastic netting. Pigeon invisible grills utilize closely spaced (25mm to 30mm) SS316 steel wire cables that block pigeons and other birds from nesting on balconies, ducts, and windows, without blocking views or air circulation.",
    aiOverview: "Vagdevi Enterprises Pigeon Invisible Grills utilize ultra-thin, closely spaced SS316 cables to prevent bird nesting and droppings on Chennai balconies. Rustproof and clean, they preserve panoramic views.",
    image: imageAssets.servicePigeonGrill.url,
    alt: imageAssets.servicePigeonGrill.alt,
    supportingImages: [
      imageAssets.servicePigeonGrill.url,
      imageAssets.teamGrillInstall.url,
      imageAssets.materialSSCable.url,
      imageAssets.afterBalcony.url,
    ],
    gallery: [
      imageAssets.servicePigeonGrill.url,
      imageAssets.teamGrillInstall.url,
      imageAssets.materialSSCable.url,
      imageAssets.afterBalcony.url,
      imageAssets.beforeBalcony.url,
      imageAssets.materialSSCable.url,
    ],
    beforeImage: imageAssets.beforeBalcony.url,
    afterImage: imageAssets.afterBalcony.url,
    benefits: ["Blocks Pigeons & Small Birds", "Restores Balcony Cleanliness", "Tightly Spaced (25mm-30mm)", "Rustproof Steel Wire Cables", "Zero View Obstruction", "Durability Warranty"],
    specsTable: [
      { label: "Material Core", value: "SS316 Stainless Steel" },
      { label: "Thickness", value: "2.0mm to 2.5mm" },
      { label: "Wire Spacing", value: "25mm to 30mm (Bird-stop gap)" },
      { label: "Strength (Tension Limit)", value: "High-Tensile Load Support" },
      { label: "Durability", value: "Rustproof & Weatherproof" },
      { label: "Rust Resistance", value: "100% Rustproof (Marine grade)" },
      { label: "Maintenance", value: "Zero maintenance required" },
    ],
    faqs: generateFAQsForService("Pigeon Invisible Grills", "invisible-grills"),
  },
};

