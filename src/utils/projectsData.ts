import { SpecItem } from "./servicesData";
import { imageAssets } from "./images";

export interface ProjectDetail {
  slug: string;
  name: string;
  category: "invisible-grills" | "sports-nets";
  service: string;
  serviceName: string;
  location: string;
  locationSlug: string;
  date: string; // Will display Content Required From Client
  description: string;
  problem: string;
  solution: string;
  materialsUsed: string[];
  process: string[];
  image: string;
  gallery: string[];
  beforeImage: string;
  afterImage: string;
  specs: SpecItem[];
}

export const projectsData: Record<string, ProjectDetail> = {
  "invisible-grills-omr": {
    slug: "invisible-grills-omr",
    name: "Window and Balcony Invisible Grills in omr High-Rise Apartment",
    category: "invisible-grills",
    service: "balcony-invisible-grills",
    serviceName: "Balcony Invisible Grills",
    location: "omr",
    locationSlug: "omr",
    date: "Content Required From Client",
    description: "Elegant invisible steel wire grill installation along balcony railings of a high-rise IT corridor apartment in omr.",
    problem: "The resident of a 14th-floor omr apartment wanted to secure their balcony for pet and child safety. Traditional heavy iron grills blocked the view and clashed with the modern glass facade of the building.",
    solution: "Vagdevi Enterprises installed SS316 marine-grade invisible steel wire grills spaced 3 inches apart. The wires are wrapped in a clear nylon sleeve to prevent scratches, clamped firmly in heavy aluminium base tracking.",
    materialsUsed: [
      "SS316 Stainless Steel wire core",
      "High-elastic Nylon protective sheath",
      "Heavy-duty Aluminium track clamps",
    ],
    process: [
      "Mapped and measured the balcony railing profile.",
      "Mounted the heavy aluminium tracking rails at the ceiling and floor base.",
      "Threaded and tensioned the SS316 cables through tracking guides.",
      "Locked the cables at high tension using internal copper sleeves.",
    ],
    image: imageAssets.projectomr.url,
    gallery: [
      imageAssets.projectomr.url,
      imageAssets.serviceWindowGrill.url,
      imageAssets.serviceStaircaseGrill.url,
      imageAssets.afterBalcony.url,
    ],
    beforeImage: imageAssets.beforeBalcony.url,
    afterImage: imageAssets.afterBalcony.url,
    specs: [
      { label: "Grill Core", value: "316 Stainless Steel" },
      { label: "Spacing", value: "3 inches (75mm)" },
      { label: "Cable Diameter", value: "2.5mm" },
      { label: "Strength Rating", value: "High-Tensile Load Support" },
    ],
  },
  "sports-nets-anna-nagar": {
    slug: "sports-nets-anna-nagar",
    name: "Sports Netting Installation at anna-nagar Sports Club",
    category: "sports-nets",
    service: "sports-nets",
    serviceName: "Sports Nets",
    location: "anna-nagar",
    locationSlug: "anna-nagar",
    date: "Content Required From Client",
    description: "Installation of heavy-duty sports boundary netting for a football and multi-sport play court in anna-nagar, Chennai.",
    problem: "A sports club in anna-nagar faced issues with balls repeatedly flying out of the playground, risking damage to neighboring residential windows and vehicles.",
    solution: "Vagdevi Enterprises installed a 20-foot-high, impact-absorbing sports boundary net utilizing UV-stabilized braided nylon mesh, secured with steel frame wires and anchored structural poles.",
    materialsUsed: [
      "UV-Stabilized braided nylon netting",
      "Galvanized structural iron border wires",
      "High-tensile border ropes",
    ],
    process: [
      "Conducted site inspection to check height requirements and wind speeds.",
      "Erected structural support poles at strategic boundary spots.",
      "Tensioned and tied the sports netting to border wires.",
      "Conducted high impact tests with footballs to verify net absorption.",
    ],
    image: imageAssets.projectAnnanagar.url,
    gallery: [
      imageAssets.projectAnnanagar.url,
      imageAssets.teamSportsNet.url,
      imageAssets.materialSportsNet.url,
    ],
    beforeImage: imageAssets.beforeBalcony.url,
    afterImage: imageAssets.afterBalcony.url,
    specs: [
      { label: "Netting Material", value: "UV-treated Braided Nylon" },
      { label: "Mesh Diameter", value: "40mm x 40mm" },
      { label: "Height Installed", value: "20 feet" },
      { label: "Tensile Strength", value: "Heavy ball impact proof" },
    ],
  },
  "cricket-nets-adyar": {
    slug: "cricket-nets-adyar",
    name: "Terrace Cricket Practice Net Installation in adyar",
    category: "sports-nets",
    service: "cricket-practice-nets",
    serviceName: "Cricket Practice Nets",
    location: "adyar",
    locationSlug: "adyar",
    date: "Content Required From Client",
    description: "Installation of professional-grade cricket practice netting on the terrace of a sports academy in adyar, Chennai.",
    problem: "The cricket academy needed a safe, enclosed practice zone on their building terrace to allow players to play full-shots without losing cricket balls or causing safety issues below.",
    solution: "Vagdevi Enterprises designed and installed a complete 3D box cricket net enclosure using thick UV-treated nylon twine and SS anchoring eyelets.",
    materialsUsed: [
      "Thick braided UV-stabilized nylon twine",
      "Stainless steel expansion anchoring eyelets",
      "Heavy boundary anchoring ropes",
    ],
    process: [
      "Measured terrace floor plan and mapped the 3D box net dimensions.",
      "Drilled hooks and anchored border cables along concrete walls.",
      "Suspended and tied the ceiling and side nets to form the practice box.",
      "Installed velcro-latch entry borders for players.",
    ],
    image: imageAssets.projectadyar.url,
    gallery: [
      imageAssets.projectadyar.url,
      imageAssets.teamCricketNet.url,
      imageAssets.serviceSportsNet.url,
    ],
    beforeImage: imageAssets.beforeBalcony.url,
    afterImage: imageAssets.afterBalcony.url,
    specs: [
      { label: "Netting Twine", value: "High-density UV nylon" },
      { label: "Mesh Size", value: "30mm x 30mm" },
      { label: "Warranty", value: "Content Required From Client" },
      { label: "Enclosure Type", value: "Full Box Enclosure" },
    ],
  },
};

