export interface AreaDetail {
  slug: string;
  name: string;
  overview: string;
  apartmentLiving: string;
  balconySafety: string;
  birdProblem: string;
  weatherDetails: string;
  nearbySlugs: string[];
}

// Data details representing key unique features of each neighborhood to construct natural text
const localTraits: Record<string, { desc: string; housingType: string; localizedDetail: string }> = {
  "anna-nagar": {
    desc: "Anna Nagar is a premium, highly planned residential zone in Chennai known for its leafy avenues and upscale multi-story apartments.",
    housingType: "premium residential apartments and low-rise blocks",
    localizedDetail: "With many active families and young children playing around open balconies, child-safe netting is a top local priority.",
  },
  "adyar": {
    desc: "Adyar is an affluent residential neighborhood located close to the coast, featuring high-density housing blocks and villas.",
    housingType: "modern high-rise condominiums and coastal housing blocks",
    localizedDetail: "Close proximity to the coast means safety net installations here must feature high resistance to damp salty sea breezes.",
  },
  "velachery": {
    desc: "Velachery is a major commercial and residential hub in South Chennai, witnessing massive apartment growth over the last decade.",
    housingType: "densely packed multi-story residential blocks and flats",
    localizedDetail: "Due to dense urban nesting grounds, balconies here are frequently visited by pigeons, creating immediate bird exclusions needs.",
  },
  "tambaram": {
    desc: "Tambaram is a major transit gate and residential zone, witnessing rapid real estate expansion with newly built family complexes.",
    housingType: "modern residential flats and commercial shop structures",
    localizedDetail: "Newly constructed flats here require early child and pet balcony protection planning before move-ins.",
  },
  "porur": {
    desc: "Porur is an active IT and manufacturing hub in Chennai, seeing high residential demand from professionals in high-rise buildings.",
    housingType: "high-rise IT professional apartments and family blocks",
    localizedDetail: "Many residents own active pets, necessitating heavy-gauge scratch-resistant pet safety nets along balcony rails.",
  },
  "omr": {
    desc: "OMR is Chennai's primary IT corridor, lined with massive high-rise apartment townships going up to 30 stories high.",
    housingType: "premium high-rise gated community townships",
    localizedDetail: "High-floor wind pressures and children playing on high balconies make high-tensile safety netting and invisible grills crucial.",
  },
  "ecr": {
    desc: "ECR is a scenic coastal highway and luxury residential belt, lined with premium sea-view bungalows and apartments.",
    housingType: "coastal view apartments and luxury beach villas",
    localizedDetail: "Severe exposure to salty sea winds means that Vagdevi Enterprises' SS316 marine-grade invisible grills are the only rustproof solution here.",
  },
  "sholinganallur": {
    desc: "Sholinganallur is a crucial IT node along OMR, housing major tech hubs and massive residential complexes.",
    housingType: "massive IT professional gated communities and flats",
    localizedDetail: "With tall apartment structures, installing fall protection netting is a primary check for resident safety committees.",
  },
  "perungudi": {
    desc: "Perungudi is an IT-centric suburb near the Pallikaranai marshland, blending tech parks with residential complexes.",
    housingType: "modern residential townships and multi-story blocks",
    localizedDetail: "Pigeon populations near the wetlands are highly active, requiring heavy-duty monofilament netting in open ducts.",
  },
  "pallikaranai": {
    desc: "Pallikaranai is a rapidly developing residential suburb, located adjacent to the marshlands in South Chennai.",
    housingType: "newly constructed mid-rise and high-rise apartments",
    localizedDetail: "The nearby wetlands increase local bird activities, making pigeon-exclusion nets a necessity for balcony hygiene.",
  },
  "medavakkam": {
    desc: "Medavakkam is a fast-growing residential hotspot in Chennai, housing thousands of IT professionals in newly built apartments.",
    housingType: "new multi-family apartments and mid-rise complexes",
    localizedDetail: "Open vertical duct spaces in these developments attract birds, making Vagdevi Enterprises duct safety net covers a popular local setup.",
  },
  "mylapore": {
    desc: "Mylapore is a historic residential and cultural heart of Chennai, characterized by traditional houses and dense modern flats.",
    housingType: "traditional flats and close-quarter residential blocks",
    localizedDetail: "Compact apartment designs in this dense area make space-saving ceiling cloth hangers a highly requested installation.",
  },
  "t-nagar": {
    desc: "T. Nagar is Chennai's primary commercial shopping hub, surrounded by busy residential streets and dense housing.",
    housingType: "congested residential apartments and commercial structures",
    localizedDetail: "Close proximity to commercial buildings increases bird nesting on open windows, requiring window netting setup.",
  },
  "saidapet": {
    desc: "Saidapet is one of Chennai's oldest residential areas, featuring a blend of traditional markets and new apartment buildings.",
    housingType: "dense mix of traditional housing and new residential flats",
    localizedDetail: "Space-saving ceiling cloth hangers are highly requested in these compact residential layouts.",
  },
};

// Master list of 14 Chennai areas
export const areasList = Object.keys(localTraits);

// Dynamically generate the full data dictionary for 14 areas
export const areasData: Record<string, AreaDetail> = areasList.reduce((acc, slug) => {
  const trait = localTraits[slug];
  const areaName = slug
    .replace("-", " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  // Generate 5 nearby areas dynamically by slicing the master list
  const currentIdx = areasList.indexOf(slug);
  const nearbySlugs = [
    areasList[(currentIdx + 1) % areasList.length],
    areasList[(currentIdx + 2) % areasList.length],
    areasList[(currentIdx + 3) % areasList.length],
    areasList[(currentIdx + 4) % areasList.length],
    areasList[(currentIdx + 5) % areasList.length],
  ];

  acc[slug] = {
    slug,
    name: areaName,
    overview: `${trait.desc} As more families relocate to ${areaName} for its excellent infrastructure and proximity to work hubs, apartment living has become the standard. Vagdevi Enterprises provides premium safety netting and invisible grill solutions in ${areaName} to ensure safe spaces.`,
    apartmentLiving: `Living in modern high-rise apartments in ${areaName} offers convenience, but open balconies and windows pose safety risks. Balconies constructed with low handrail heights represent potential hazards for active children and pets. Vagdevi Enterprises installs custom-fit protective systems to secure these spaces.`,
    balconySafety: `Accidental balcony slips are a major concern. Our child safety systems and bite-resistant pet safety invisible grills seal open balcony gaps in ${areaName} homes. ${trait.localizedDetail}`,
    birdProblem: `Pigeons and other urban birds nesting in open ducts and window ledges present severe health risks. In ${areaName}, our transparent monofilament bird nets block pigeons out from duct shafts and windows, maintaining balcony cleanliness and hygiene.`,
    weatherDetails: `Chennai's hot weather, heavy monsoons, and high humidity require robust materials. For ${areaName} homes, Vagdevi Enterprises installs UV-treated netting and rustproof SS316 marine-grade invisible grills that withstand the local climate without degrading.`,
    nearbySlugs,
  };

  return acc;
}, {} as Record<string, AreaDetail>);
