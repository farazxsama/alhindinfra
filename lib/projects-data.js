import {
  FiDollarSign,
  FiMapPin,
  FiGrid,
  FiSquare,
  FiActivity,
  FiCheckCircle,
} from "react-icons/fi";

/* ════════════════════════════════════════════════════════════
   ONGOING PROJECTS — add/edit here
   slug must match the route: /ongoing/[slug]
═══════════════════════════════════════════════════════════════ */
export const ongoingProjectsData = {

  /* ── HILLTOP CITY PHASE 1 ──────────────────────────────── */
  "hilltop-1": {
    slug: "hilltop-1",
    name: "HillTop City Phase 1",

    hero: {
      status: "Ongoing",
      description:
        "HillTop City Phase I is one of the latest plotted developments launched by Al Hind Infra. It is located in the Shabad vicinity, near the towns Shabad, Shamshabad, Shadnagar, Kothur, and Timmapur, which are 24 km south of Hyderabad CBD.",
      location: "Mariyapur Village, Shabad",
      plotSize: "150–500 Sq. Yards",
      approval: "HMDA Approved",
      bannerImage:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop",
      priceLabel: "Starting From",
      price: "₹8,500 / Sq. Yard",
      priceNote: "Ready For Registration",
      brochureUrl: "#",
    },

    quickInfo: {
      items: [
        {
          icon: <FiDollarSign className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Starting Price",
          value: "₹8,500/Sq.Yd",
        },
        {
          icon: <FiMapPin className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Location",
          value: "Shabad",
        },
        {
          icon: <FiGrid className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Project Area",
          value: "25 Acres",
        },
        {
          icon: <FiSquare className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Plot Sizes",
          value: "150–500 Sq.Yd",
        },
        {
          icon: <FiActivity className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Project Status",
          value: "Ongoing",
        },
        {
          icon: <FiCheckCircle className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Approval",
          value: "HMDA Approved",
        },
      ],
    },

    about: {
      paragraphs: [
        "Plots in HillTop City are attractively priced at just ₹8,500 per square yard, remarkably affordable compared to the current market rates in nearby Shabad. This makes it not only a highly lucrative investment opportunity but also a rare chance to build your dream home within the Hyderabad metropolitan region.",
        "It's not just the pricing that's appealing — HillTop City offers exceptional locational advantages as well. This prime residential land parcel, facing the main road, is situated in the same vicinity as our other completed and newly launched projects.",
        "The project is located in Shabad and conveniently just 25 minutes from Rajiv Gandhi International Airport (RGIA) in Shamshabad, and near the upcoming RRR. Its proximity to several leading companies makes it a strategically valuable residential location.",
        "Whether you're seeking a secure, high-potential real estate investment or planning to build a dream family home close to Hyderabad's Central Business District, this is a golden opportunity — backed by a smooth, transparent, and hassle-free transaction process.",
      ],
    },

    features: {
      items: [
        'HMDA Approved',
        'Black Top Roads',
        'Underground Drainage',
        'Avenue Plantation',
        'Electricity Connection',
        'Water Connection',
        'Compound Wall',
        'Street Lighting',
        "Children's Park",
        '24x7 Security',
        'Rain Water Harvesting',
        'Clear Documentation',
      ],
    },

    location: {
      items: [
        { type: 'airport', label: 'RGIA Airport', duration: '20 mins' },
        { type: 'orr', label: 'ORR Exit', duration: '10 mins' },
        { type: 'itParks', label: 'Financial District', duration: '30 mins' },
        { type: 'schools', label: 'Schools', duration: '15 mins' },
        { type: 'hospitals', label: 'Hospitals', duration: '12 mins' },
      ],
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243716.75!2d78.36!3d17.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDEyJzAwLjAiTiA3OMKwMjInMDAuMCJF!5e0!3m2!1sen!2sin!4v0000000000',
    },

    gallery: {
      photos: [
        { src: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop', alt: 'Open plots site view' },
        { src: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?q=80&w=1200&auto=format&fit=crop', alt: 'Paved internal road' },
        { src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop', alt: 'Compound wall and boundary' },
        { src: 'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=1200&auto=format&fit=crop', alt: 'Plot markers on layout' },
        { src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&auto=format&fit=crop', alt: 'Aerial view of development' },
        { src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1200&auto=format&fit=crop', alt: 'Entrance and landscaping' },
      ],
      videos: [
        {
          src: 'https://www.w3schools.com/html/mov_bbb.mp4',
          thumbnail: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&auto=format&fit=crop',
          alt: 'Site walkthrough video',
        },
      ],
      masterPlan: [
        { src: 'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=1600&auto=format&fit=crop', alt: 'HillTop City Phase 1 master plan layout' },
      ],
    },
  },


};

/* ════════════════════════════════════════════════════════════
   COMPLETED PROJECTS — add/edit here
   slug must match the route: /completed/[slug]
═══════════════════════════════════════════════════════════════ */
export const completedProjectsData = {

  /* ── AL HIND RESIDENCY ─────────────────────────────────── */
  "al-hind-residency": {
    slug: "al-hind-residency",
    name: "Al Hind Residency",

    hero: {
      status: "Completed",
      description:
        "A fully developed plotted community known for timely delivery, clear titles, and lasting quality across every layout.",
      location: "Shamshabad, Hyderabad",
      plotSize: "150–300 Sq. Yards",
      approval: "HMDA Approved",
      bannerImage:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
      priceLabel: "Sold At",
      price: "₹7,800 / Sq. Yard",
      priceNote: "Fully Registered",
      brochureUrl: "#",
    },

    quickInfo: {
      items: [
        {
          icon: <FiDollarSign className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Sold At",
          value: "₹7,800/Sq.Yd",
        },
        {
          icon: <FiMapPin className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Location",
          value: "Shamshabad",
        },
        {
          icon: <FiGrid className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Project Area",
          value: "20 Acres",
        },
        {
          icon: <FiSquare className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Plot Sizes",
          value: "150–300 Sq.Yd",
        },
        {
          icon: <FiActivity className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Project Status",
          value: "Completed",
        },
        {
          icon: <FiCheckCircle className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Approval",
          value: "HMDA Approved",
        },
      ],
    },
  },

};

/* ════════════════════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════════════════════ */

/* Get a project by slug, scoped to its type */
export function getProjectBySlug(type, slug) {
  const source = type === "ongoing" ? ongoingProjectsData : completedProjectsData;
  return source[slug] ?? null;
}

/* Get all projects of a type, as an array (for listing pages) */
export function getProjectsByType(type) {
  const source = type === "ongoing" ? ongoingProjectsData : completedProjectsData;
  return Object.values(source);
}

/* Params for generateStaticParams */
export function getAllProjectParams(type) {
  return getProjectsByType(type).map((project) => ({ slug: project.slug }));
}

/* Related projects — same type, excluding current, capped at `count` */
export function getRelatedProjects(type, slug, count = 3) {
  return getProjectsByType(type)
    .filter((project) => project.slug !== slug)
    .slice(0, count);
}