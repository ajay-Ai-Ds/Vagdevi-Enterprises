export interface LocalityProfile {
  slug: string;
  name: string;
  type: string; // e.g. coastal residential, IT corridor
  description: string;
  localChallenge: string;
}

export interface ServiceProfile {
  slug: string;
  name: string;
  categoryName: string;
  coreUtility: string;
  technicalSpec: string;
}

export const targetLocalities: string[] = ["adyar", "velachery", "omr", "ecr", "anna-nagar", "t-nagar", "porur", "tambaram"];

export const localityProfiles: Record<string, LocalityProfile> = {
  "adyar": {
    slug: "adyar",
    name: "Adyar",
    type: "coastal residential zone",
    description: "Adyar is an upscale, historic residential area in South Chennai close to the coast. It is populated by high-density luxury apartments, educational institutes, and independent villas, all situated near the sea breeze.",
    localChallenge: "Due to its close proximity to the Adyar River and the Bay of Bengal, homes experience high humidity and aggressive, salt-laden sea winds. This makes standard metal fittings highly prone to rapid oxidation and rust.",
  },
  "velachery": {
    slug: "velachery",
    name: "Velachery",
    type: "rapidly expanding residential hub",
    description: "Velachery has grown into one of Chennai's premier residential and commercial hotspots, featuring massive apartment blocks, shopping hubs, and dense high-rise developments housing thousands of families.",
    localChallenge: "Its urban structure, close proximity to water bodies, and dense apartment ducts create perfect nesting grounds for urban pigeons. Pigeons roosting in ducts and open balconies present severe respiratory health hazards and hygiene issues.",
  },
  "omr": {
    slug: "omr",
    name: "OMR",
    type: "high-rise IT corridor",
    description: "Old Mahabalipuram Road (OMR) is Chennai's primary technology corridor, characterized by massive high-rise apartment townships going up to 30 stories high, populated by busy IT professionals and their young families.",
    localChallenge: "At high-floor levels (10th floor and above), balconies are exposed to extreme wind pressures and gusty wind speeds. Open balconies with low handrails represent highly active falling hazards for small children and active household pets.",
  },
  "ecr": {
    slug: "ecr",
    name: "ECR",
    type: "coastal luxury villa belt",
    description: "East Coast Road (ECR) is a scenic coastal corridor in Chennai, known for its premium sea-facing apartments, beach houses, and luxury villas bordering the Bay of Bengal.",
    localChallenge: "Direct exposure to harsh marine environments, salt spray, and extreme humidity requires specialized corrosion-resistant materials. Traditional safety systems degrade and fail within months under ECR's salty atmosphere.",
  },
  "anna-nagar": {
    slug: "anna-nagar",
    name: "Anna Nagar",
    type: "planned premium township",
    description: "Anna Nagar is a highly planned, affluent residential township in North-West Chennai, featuring tree-lined avenues, green parks, and high-end residential complexes housing multi-generational families.",
    localChallenge: "With many active families, toddlers, and pets living in modern apartments, childproofing balconies and window frames is a critical concern. Residents demand safety solutions that preserve the premium look of their properties.",
  },
  "t-nagar": {
    slug: "t-nagar",
    name: "T. Nagar",
    type: "dense commercial and residential hub",
    description: "Thyagaraya Nagar (T. Nagar) is Chennai's primary commercial center, surrounded by busy residential streets and dense housing societies where apartments are closely packed and space is at a premium.",
    localChallenge: "Compact balcony layouts require optimized space-saving setups, while close proximity to commercial food joints increases local pigeon populations, leading to frequent bird nesting on open window ledges.",
  },
  "porur": {
    slug: "porur",
    name: "Porur",
    type: "active IT and industrial suburb",
    description: "Porur is a rapidly growing residential suburb in West Chennai, hosting IT parks and manufacturing hubs with a large population of young professionals residing in modern multi-family apartment communities.",
    localChallenge: "With a high density of pet owners, balconies require durable safety systems that are fully bite-proof and scratch-resistant, securing energetic cats and dogs without restricting fresh air circulation.",
  },
  "tambaram": {
    slug: "tambaram",
    name: "Tambaram",
    type: "booming transit residential zone",
    description: "Tambaram is a major transit gateway and residential zone in South Chennai, witnessing massive real estate expansion with newly built family complexes, schools, and gated residential blocks.",
    localChallenge: "Newly constructed apartments here require immediate safety planning before families move in. Securing open balconies early prevents accidental slips, especially for homes near busy roads.",
  },
};

export const serviceProfiles: Record<string, ServiceProfile> = {
  "balcony-invisible-grills": {
    slug: "balcony-invisible-grills",
    name: "Balcony Invisible Grills",
    categoryName: "Invisible Grills",
    coreUtility: "securing open balconies using thin, high-tension steel cables that replace heavy iron bars.",
    technicalSpec: "utilize 316-grade marine stainless steel wire rope, pre-tensioned and sleeved in heavy nylon coating. This setup is anchored into heavy-duty structural aluminum tracks using rust-resistant hardware.",
  },
  "window-invisible-grills": {
    slug: "window-invisible-grills",
    name: "Window Invisible Grills",
    categoryName: "Invisible Grills",
    coreUtility: "protecting window openings from fall risks and intruder entries without blocking daylight.",
    technicalSpec: "feature SS316 high-tension steel cables spaced 2 to 3 inches apart. They are clamped firmly into structural window frames to provide a clean barrier that maximizes ventilation.",
  },
  "staircase-invisible-grills": {
    slug: "staircase-invisible-grills",
    name: "Staircase Invisible Grills",
    categoryName: "Invisible Grills",
    coreUtility: "securing open stair railings, banisters, and high atrium gaps in duplex apartments.",
    technicalSpec: "install vertical SS316 wire arrays running from stair treads to ceilings, creating a protective vertical grid that safeguards children from accidental slips through railing gaps.",
  },
  "sports-nets": {
    slug: "sports-nets",
    name: "Sports Nets",
    categoryName: "Sports Nets",
    coreUtility: "erecting durable boundary containment barriers for sports courts, playgrounds, and terraces.",
    technicalSpec: "use UV-stabilized, high-density polyethylene (HDPE) or braided nylon nets with reinforced border ropes. They are anchored to high structural poles or steel cables to absorb high impact ball strikes.",
  },
  "cricket-practice-nets": {
    slug: "cricket-practice-nets",
    name: "Cricket Practice Nets",
    categoryName: "Sports Nets",
    coreUtility: "installing enclosed 3D box cricket nets on terraces, sports academies, or backyard lawns.",
    technicalSpec: "employ thick, impact-absorbing UV-treated nylon twine netting secured to a structural iron frame or heavy anchors. This creates a safe, self-contained cricket cage that keeps balls inside.",
  },
  "children-safety-invisible-grills": {
    slug: "children-safety-invisible-grills",
    name: "Children Safety Invisible Grills",
    categoryName: "Invisible Grills",
    coreUtility: "safeguarding high-floor balconies and windows specifically for active toddlers and kids.",
    technicalSpec: "arrange SS316 marine-grade steel cables at a tight 2-inch spacing. This spacing prevents children from slipping through or inserting their heads, while keeping the structural tension locked.",
  },
  "pet-safety-invisible-grills": {
    slug: "pet-safety-invisible-grills",
    name: "Pet Safety Invisible Grills",
    categoryName: "Invisible Grills",
    coreUtility: "securing balconies and window gaps for active pets like cats and dogs.",
    technicalSpec: "utilize bite-proof, scratch-resistant SS316 stainless steel wires wrapped in heavy nylon. The cables are tensioned tightly to prevent pets from squeezing through the barrier.",
  },
  "pigeon-invisible-grills": {
    slug: "pigeon-invisible-grills",
    name: "Pigeon Invisible Grills",
    categoryName: "Invisible Grills",
    coreUtility: "preventing pigeons and other urban birds from nesting on balconies and window ledges.",
    technicalSpec: "install ultra-thin, high-tension SS316 steel wires spaced tightly (2 inches). This forms a transparent barrier that blocks bird entries without obstructing views or light.",
  },
  "cloth-hangers": {
    slug: "cloth-hangers",
    name: "Ceiling Cloth Hangers",
    categoryName: "Cloth Hangers",
    coreUtility: "optimizing balcony floor space by utilizing ceiling areas for heavy-duty cloth drying.",
    technicalSpec: "install premium stainless steel rods connected to a smooth nylon pulley system. This allows independent raising and lowering of individual drying rods.",
  },
};

export interface LocalizedArticle {
  title: string;
  description: string;
  h1: string;
  intro: string;
  whyMatters: string;
  installationDetails: string;
  cta: string;
  wordCount: number;
}

export function generateLocalityServiceContent(serviceSlug: string, localitySlug: string): LocalizedArticle {
  const loc = localityProfiles[localitySlug];
  const ser = serviceProfiles[serviceSlug];

  if (!loc || !ser) {
    throw new Error(`Invalid locality (${localitySlug}) or service (${serviceSlug}) slug.`);
  }

  // Construct Unique Title & Meta Description
  const title = `Premium ${ser.name} in ${loc.name}, Chennai | Vagdevi Enterprises`;
  const description = `Vagdevi Enterprises offers professional ${ser.name} installation in ${loc.name}, Chennai. High-tensile SS316 rustproof materials, child & pet safety. Free site visit.`;
  const h1 = `${ser.name} Installation in ${loc.name}`;

  // Unique Intro Paragraph (~100 words)
  let intro = "";
  if (localitySlug === "adyar" || localitySlug === "ecr") {
    intro = `${loc.description} For homeowners and building managers in this coastal belt, maintaining safety barriers that can withstand the coastal atmosphere is a primary priority. Vagdevi Enterprises is proud to offer professional ${ser.name} services tailored specifically for ${loc.name}. By ${ser.coreUtility} we provide local residents with a premium safety solution that blends beautifully with the architectural layout of beach-facing properties, ensuring peace of mind without compromising style.`;
  } else if (localitySlug === "omr" || localitySlug === "porur") {
    intro = `${loc.description} With thousands of professionals residing in multi-story towers in this active tech hub, apartment safety is a vital consideration. Vagdevi Enterprises specializes in professional ${ser.name} setups in ${loc.name}. Our services are designed around ${ser.coreUtility} This modern setup provides absolute structural protection for high-floor residents, ensuring that families can live safely in high-rise towers.`;
  } else if (localitySlug === "velachery" || localitySlug === "t-nagar") {
    intro = `${loc.description} In these densely populated commercial and residential blocks, space optimization and pest safety are daily topics for families. Vagdevi Enterprises provides professional ${ser.name} setups across ${loc.name} apartments. By ${ser.coreUtility} we help local residents secure their windows and balconies from falls and external pests while maintaining fresh air ventilation.`;
  } else {
    // anna-nagar, tambaram
    intro = `${loc.description} As a major residential township housing families, children, and pets, childproofing and space-securing are top homeowner priorities. Vagdevi Enterprises is the trusted local provider of professional ${ser.name} installations in ${loc.name}. By ${ser.coreUtility} we deliver durable, long-lasting safety barriers that keep your loved ones safe.`;
  }

  // Unique Why It Matters Paragraph (~120 words)
  let whyMatters = "";
  if (localitySlug === "adyar" || localitySlug === "ecr") {
    whyMatters = `Implementing ${ser.name} in ${loc.name} requires a deep understanding of local environmental factors. ${loc.localChallenge} Vagdevi Enterprises addresses this directly by installing safety solutions that utilize marine-grade materials. Unlike standard iron grills that rust, scale, and weaken, our systems remain rustproof, structural, and visually clean for years. For seaside residences along ${loc.name}, this represents the only viable safety solution that preserves panoramic sea views while protecting children and pets from accidental balcony slips.`;
  } else if (localitySlug === "omr" || localitySlug === "porur") {
    whyMatters = `High-rise living brings unique structural challenges. ${loc.localChallenge} This makes the installation of ${ser.name} an absolute necessity rather than an option for OMR and Porur residents. Vagdevi Enterprises designs specialized setups to withstand these high wind loads. Traditional heavy grills block fire escape routes and clash with modern architectural facades. In contrast, our safety wire grids provide high-tension load resistance, creating a robust barrier that ensures children and pets are safe while maintaining exit accessibility.`;
  } else if (localitySlug === "velachery" || localitySlug === "t-nagar") {
    whyMatters = `Density and hygiene are key concerns in busy neighborhoods. ${loc.localChallenge} Vagdevi Enterprises solves this using specialized bird-exclusion installations. By selecting ${ser.name}, you block pigeons and other urban birds from nesting on window ledges and balconies, eliminating dirty droppings and allergens. Our installations are designed to fit compact layouts cleanly, ensuring you get maximum utility from your balcony space without sacrificing hygiene.`;
  } else {
    // anna-nagar, tambaram
    whyMatters = `Securing a family home requires a safety barrier that is both highly durable and child-safe. ${loc.localChallenge} Vagdevi Enterprises provides custom-tensioned ${ser.name} to address this need. Our systems are engineered to prevent toddlers and pets from squeezing through railing gaps, securing open spaces cleanly. In residential areas like ${loc.name}, our aesthetic setups offer premium protection that matches the local community guidelines.`;
  }

  // Unique Technical/Installation Details (~100 words)
  let installationDetails = "";
  if (serviceSlug.includes("grill")) {
    installationDetails = `For every ${ser.name} project in ${loc.name}, Vagdevi Enterprises adheres to strict engineering guidelines. We ${ser.technicalSpec} Our field crew begins with a precise measurement of your balcony or window frame, followed by securely drilling aluminum tracking rails into structural concrete walls. We then run individual SS316 steel wire cables through tension-lock anchors, ensuring that the wires are pre-tensioned to a load capacity of over 150kg. The result is a clean, rustproof grid that keeps your space highly secure.`;
  } else if (serviceSlug === "cloth-hangers") {
    installationDetails = `Our technical installation process for ${ser.name} in ${loc.name} is designed for maximum convenience and durability. We ${ser.technicalSpec} Vagdevi Enterprises technicians expertly mount the heavy-duty pulley brackets to your ceiling concrete. We then string the premium nylon ropes and attach the rustproof stainless steel rods, ensuring the entire pulley drop system operates smoothly and securely.`;
  } else {
    // sports nets, cricket nets
    installationDetails = `Our technical installation process for ${ser.name} in ${loc.name} is designed for high impact resistance. We ${ser.technicalSpec} Vagdevi Enterprises technicians assess the installation site for structural anchors and wind load forces. We mount heavy-duty steel support cables or poles, suspend the net, and apply custom tension to prevent sagging. This ensures the net remains stable during monsoon rains and absorbs heavy sports strikes without tearing or structural damage.`;
  }

  // Unique CTA (~50 words)
  const cta = `Ready to secure your home in ${loc.name}? Contact Vagdevi Enterprises today at 8019091366 or message us on WhatsApp to schedule a free, on-site measurement session. Our team will bring material samples, inspect your layout, and provide an accurate cost quotation without any obligations.`;

  const combinedText = `${intro}\n\n${whyMatters}\n\n${installationDetails}\n\n${cta}`;
  const wordCount = combinedText.split(/\s+/).filter(Boolean).length;

  return {
    title,
    description,
    h1,
    intro,
    whyMatters,
    installationDetails,
    cta,
    wordCount
  };
}
