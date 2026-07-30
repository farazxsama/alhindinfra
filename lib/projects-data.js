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
        "/img/ongoing/hilltop-city-phase-1/hilltop1-site.jpg",
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
          value: "Mariyapur Village, Shabad",
        },
        // {
        //   icon: <FiGrid className="text-xl" style={{ color: "#C9A227" }} />,
        //   label: "Project Area",
        //   value: "25 Acres",
        // },
        // {
        //   icon: <FiSquare className="text-xl" style={{ color: "#C9A227" }} />,
        //   label: "Plot Sizes",
        //   value: "150–500 Sq.Yd",
        // },
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
        'Clear Title & Spot Registration',
        'Layout Designed as per Vaastu',
        'Gated Community with Compound Wall',
        'Metal Roads & Electric Poles',
        'Avenue Plantation',
        '24x7 Security | 10 Years Coverage',
        '50 Years Link Documents with Legal Opinion',
        'Within HMDA Limits (No 111GO)',
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
        { src: '/img/ongoing/hilltop-city-phase-1/hilltop1-aerial.jpg', alt: 'Hill Top City Phase 1' },
        { src: '/img/ongoing/hilltop-city-phase-1/hilltop1-highway.jpg', alt: 'Hill Top City Phase 1' },
        { src: '/img/ongoing/hilltop-city-phase-1/hilltop1-road.jpg', alt: 'Hill Top City Phase 1' },
        { src: '/img/ongoing/hilltop-city-phase-1/hilltop1-site.jpg', alt: 'Hill Top City Phase 1' },

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

  "hilltop-3": {
    slug: "hilltop-3",
    name: "HillTop City Phase 3",

    hero: {
      status: "Ongoing",
      description:
        "HillTop City Phase III is one of the latest residential projects launched by Hindustan Townships. It is located in the Shabad vicinity. The location is near the towns Shabad, Shamshabad, Shadnagar, Kothur, and Timmapur, which are 24 km south of Hyderabad",
      location: "Mariyapur Village, Shabad",
      // plotSize: "150–500 Sq. Yards",
      approval: "HMDA Approved",
      bannerImage:
        "/img/ongoing/hill-city-phase-3/hilltop3-3.jpg",
      priceLabel: "Starting From",
      price: "₹3,800 / Sq. Yard",
      priceNote: "Ready For Registration",
      brochureUrl: "#",
    },

    quickInfo: {
      items: [
        {
          icon: <FiDollarSign className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Starting Price",
          value: "₹3,800/Sq. Yd",
        },
        {
          icon: <FiMapPin className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Location",
          value: "Mariyapur Village, Shabad",
        },
        // {
        //   icon: <FiGrid className="text-xl" style={{ color: "#C9A227" }} />,
        //   label: "Project Area",
        //   value: "25 Acres",
        // },
        // {
        //   icon: <FiSquare className="text-xl" style={{ color: "#C9A227" }} />,
        //   label: "Plot Sizes",
        //   value: "150–500 Sq.Yd",
        // },
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
        "Plots in HillTop City are attractively priced at just Rs. 3,800/- per square yard remarkably affordable compared to the current market rates in nearby Shabad. This makes it not only a highly lucrative investment opportunity but also a rare chance to build your dream home within the Hyderabad metropolitan region. And it's not just the pricing that's appealing HillTop City offers exceptional locational advantages as well! This prime residential land parcel, facing the main road, is situated in the same vicinity as our other completed and newly launched projects. HillTop City is currently our most competitively priced residential offering—but these incredible prices won't last long!",
        "The project is Located In Shabad and conveniently just 25 minutes from Rajiv Gandhi International Airport (RGIA) in Shamshabad and is near upcoming RRR. Its proximity to several leading multinational companies makes it a strategically valuable residential location. Nearby companies include: Welspun Flooring Company, Amazon Data Centre, Katerra India Private Limited, Microsoft Data Centre, Kanha Shanti Vanam. Whether youre seeking a secure and high-potential real estate investment or planning to build a dream family home close to Hyderabads Central Business District, this is a golden opportunity. In addition to securing a plot in a prime location of your choice within HillTop City, youll also enjoy a smooth, transparent, and hassle-free transaction process. For more details about HillTop City Phase-I, II & III, feel free to get in touch with us today!",
      ],
    },

    features: {
      items: [
        'Clear Title & Spot Registration',
        'Layout Designed as per Vaastu',
        'Gated Community with Compound Wall',
        'Metal Roads & Electric Poles',
        'Avenue Plantation',
        '24x7 Security | 10 Years Coverage',
        '50 Years Link Documents with Legal Opinion',
        'Within HMDA Limits (No 111GO)',
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
        { src: '/img/ongoing/hill-city-phase-3/hilltop3-1.jpg', alt: 'Hill City Phase 3' },
        { src: '/img/ongoing/hill-city-phase-3/hilltop3-2.jpg', alt: 'Hill City Phase 3' },
        { src: '/img/ongoing/hill-city-phase-3/hilltop3-3.jpg', alt: 'Hill City Phase 3' },
        { src: '/img/ongoing/hill-city-phase-3/hilltop3-4.jpg', alt: 'Hill City Phase 3' },
        { src: '/img/ongoing/hill-city-phase-3/hilltop3-5.jpg', alt: 'Hill City Phase 3' },

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

  "global-city": {
    slug: "global-city",
    name: "Global City Phase 1",

    hero: {
      status: "Ongoing",
      description:
        "Hindustan Townships presents their latest project - Global City Phase 1. This brand-new project offers you attractive, highway-facing plots for sale. Global City Phase 1 is nestled within the same Shabad Mandal location as our recently completed projects: Prime City, Highway City, and Express City.",
      location: "Shabad Mandal, Near Shamshabad",
      // plotSize: "150–500 Sq. Yards",
      approval: "HMDA Approved",
      bannerImage:
        "/img/ongoing/global-city-phase-1/global-city-1.jpg",
      priceLabel: "Starting From",
      price: "₹16,000 / Sq. Yard",
      priceNote: "Ready For Registration",
      brochureUrl: "#",
    },

    quickInfo: {
      items: [
        {
          icon: <FiDollarSign className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Starting Price",
          value: "₹16,000/Sq. Yd",
        },
        {
          icon: <FiMapPin className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Location",
          value: "Shabad Mandal, Near Shamshabad",
        },
        // {
        //   icon: <FiGrid className="text-xl" style={{ color: "#C9A227" }} />,
        //   label: "Project Area",
        //   value: "25 Acres",
        // },
        // {
        //   icon: <FiSquare className="text-xl" style={{ color: "#C9A227" }} />,
        //   label: "Plot Sizes",
        //   value: "150–500 Sq.Yd",
        // },
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
        "There are many benefits to buying a residential plot in such an attractive location. By investing here, you are securing a foothold in an emerging region within the Hyderabad Metropolitan area. Additionally, the location of Global City Phase 1 is very close to the vibrant towns of Shamshabad and Shadnagar. This means you'll have all essential facilities like the best schools, hospitals, shopping centres, transport services, and more right at your fingertips.",
        "If you're planning to build your dream family home, there couldn't be a better opportunity! Along with being in a prime location offering promising returns, the current low land rates make this an opportunity of a lifetime. We offer attractive residential plot sizes at an affordable cost of Rs. 16,500/- per square yard. Different sizes of residential plots, many facing the highway. Only a 25-minute drive from Rajiv Gandhi International Airport (RGIA) in Shamshabad. Close to Symbiosis University. Close proximity to several major MNCs, making this a strategic residential location. Companies nearby include: ○ Welspun Flooring Company ○ Amazon Data Centre ○ Microsoft Data Centre ○ Katerra India Pvt. Ltd. ○ Kanha Shanti Vanam. Essential services like institutes (schools & colleges), petrol stations, banks, hospitals, hotels, and restaurants are all within easy reach.",
        "Located in South Hyderabad, where property rates are rapidly increasing. Owning a plot in Global City Phase 1 means investing in an open residential plot near the important towns of Shamshabad, Shadnagar, Kothur, and Timmapur. This is a great investment opportunity, offering strong returns and a secure future. Buying our plots guarantees peace of mind from start to finish, with a smooth, hassle-free transaction. For more information about Global City Phase 1, please contact us today",
      ],
    },

    features: {
      items: [
        'Clear Title & Spot Registration',
        'Layout Designed as per Vaastu',
        'Gated Community with Compound Wall',
        'Metal Roads & Electric Poles',
        'Avenue Plantation',
        '24x7 Security | 10 Years Coverage',
        '50 Years Link Documents with Legal Opinion',
        'Within HMDA Limits (No 111GO)',
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
        { src: '/img/ongoing/global-city-phase-1/global-city-1.jpg', alt: 'Global City Phase 1' },
        { src: '/img/ongoing/global-city-phase-1/global-city-2.jpg', alt: 'Global City Phase 1' },
        { src: '/img/ongoing/global-city-phase-1/global-city-3.jpg', alt: 'Global City Phase 1' },
        { src: '/img/ongoing/global-city-phase-1/global-city-4.jpg', alt: 'Global City Phase 1' },
        { src: '/img/ongoing/global-city-phase-1/global-city-5.jpg', alt: 'Global City Phase 1' },

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

  "global-2": {
    slug: "global-2",
    name: "Global City Phase 2",

    hero: {
      status: "Ongoing",
      description:
        "Hindustan Townships India presents their latest project - Global City Phase 2. This brand-new project offers you attractive, highway-facing plots for sale. Global City Phase 2 is nestled within the same Shabad Mandal location as our recently completed projects: Global City, Prime City, Highway City, and Express City.",
      location: "Nagarkunta Village, Shabad",
      // plotSize: "150–500 Sq. Yards",
      approval: "HMDA Approved",
      bannerImage:
        "/img/ongoing/global-city-phase-2/global2-site1.jpg",
      priceLabel: "Starting From",
      price: "₹11,000 / Sq. Yard",
      priceNote: "Ready For Registration",
      brochureUrl: "#",
    },

    quickInfo: {
      items: [
        {
          icon: <FiDollarSign className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Starting Price",
          value: "₹11,000/Sq. Yd",
        },
        {
          icon: <FiMapPin className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Location",
          value: "Nagarkunta Village, Shabad",
        },
        // {
        //   icon: <FiGrid className="text-xl" style={{ color: "#C9A227" }} />,
        //   label: "Project Area",
        //   value: "25 Acres",
        // },
        // {
        //   icon: <FiSquare className="text-xl" style={{ color: "#C9A227" }} />,
        //   label: "Plot Sizes",
        //   value: "150–500 Sq.Yd",
        // },
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
        "There are many benefits to buying a residential plot in such an attractive location. By investing here, you are securing a foothold in an emerging region within the Hyderabad Metropolitan area. Additionally, the location of Global City Phase 2 is very close to the vibrant towns of Shamshabad and Shadnagar. This means you'll have all essential facilities like the best schools, hospitals, shopping centres, transport services, and more right at your fingertips.",
        "If you're planning to build your dream family home, there couldn't be a better opportunity! Along with being in a prime location offering promising returns, the current low land rates make this an opportunity of a lifetime. We offer attractive residential plot sizes at an affordable cost of Rs. 11,000/- per square yard. Different sizes of residential plots, many facing the highway. Only a 25-minute drive from Rajiv Gandhi International Airport (RGIA) in Shamshabad. Close to Symbiosis University. Close proximity to several major MNCs, making this a strategic residential location. Companies nearby include: ○ Welspun Flooring Company ○ Amazon Data Centre ○ Microsoft Data Centre ○ Katerra India Pvt. Ltd. ○ Kanha Shanti Vanam. Essential services like institutes (schools & colleges), petrol stations, banks, hospitals, hotels, and restaurants are all within easy reach.",
        "Located in South Hyderabad, where property rates are rapidly increasing. Owning a plot in Global City Phase 2 means investing in an open residential plot near the important towns of Shamshabad, Shadnagar, Kothur, and Timmapur. This is a great investment opportunity, offering strong returns and a secure future. Buying our plots guarantees peace of mind from start to finish, with a smooth, hassle-free transaction. For more information about Global City Phase 2, please contact us today",
      ],
    },

    features: {
      items: [
        'Clear Title & Spot Registration',
        'Layout Designed as per Vaastu',
        'Gated Community with Compound Wall',
        'Metal Roads & Electric Poles',
        'Avenue Plantation',
        '24x7 Security | 10 Years Coverage',
        '50 Years Link Documents with Legal Opinion',
        'Within HMDA Limits (No 111GO)',
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
        { src: '/img/ongoing/global-city-phase-2/global2-site1.jpg', alt: 'Global City Phase 2' },
        { src: '/img/ongoing/global-city-phase-2/global2-site2.jpg', alt: 'Global City Phase 2' },
        { src: '/img/ongoing/global-city-phase-2/global2-site3.jpg', alt: 'Global City Phase 2' },
        { src: '/img/ongoing/global-city-phase-2/global2-visitor.jpg', alt: 'Global City Phase 2' },

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

  "regional-city": {
    slug: "regional-city",
    name: "Regional City",

    hero: {
      status: "Ongoing",
      description:
        "Regional City is a premium residential venture by Hindustan Townships, strategically located in Shabad Mandal near the upcoming Regional Ring Road (RRR). Spread across a well-planned gated community, it offers open plots starting at just Rs. 7,000/- per square yard.",
      location: "Manmarri Village, Shabad",
      // plotSize: "150–500 Sq. Yards",
      approval: "HMDA Approved",
      bannerImage:
        "/img/ongoing/regional-city/regional-sunset.jpg",
      priceLabel: "Starting From",
      price: "₹7,000 / Sq. Yard",
      priceNote: "Ready For Registration",
      brochureUrl: "#",
    },

    quickInfo: {
      items: [
        {
          icon: <FiDollarSign className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Starting Price",
          value: "₹7,000/Sq. Yd",
        },
        {
          icon: <FiMapPin className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Location",
          value: "Manmarri Village, Shabad",
        },
        // {
        //   icon: <FiGrid className="text-xl" style={{ color: "#C9A227" }} />,
        //   label: "Project Area",
        //   value: "25 Acres",
        // },
        // {
        //   icon: <FiSquare className="text-xl" style={{ color: "#C9A227" }} />,
        //   label: "Plot Sizes",
        //   value: "150–500 Sq.Yd",
        // },
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
        "Regional City offers premium open plots at Rs. 7,000/- per square yard, making it one of the most value-driven investments in South Hyderabad. Strategically positioned near the upcoming Regional Ring Road (RRR) and just 30 minutes from Rajiv Gandhi International Airport (RGIA), Shamshabad, this project is designed for families seeking peaceful living and investors looking for high-growth potential. The fully developed gated community features compound wall fencing, metal roads, electric poles, avenue plantation, and 24x7 security with 10 years of security coverage on all plots.",
        "This well-connected location lies near the Shabad Highway and is surrounded by major development hubs including Symbiosis University and a host of leading multinational companies like Amazon Data Centre, Microsoft Data Centre, Welspun Flooring, Katerra India Pvt. Ltd., Kanha Shanti Vanam. Located in one of South Hyderabad's most rapidly growing corridors, Regional City is an ideal destination for peaceful living and future growth. The gated community ensures a secure, well-planned environment with essential amenities such as schools, colleges, hospitals, banks, petrol stations, restaurants, and dhabas all within close proximity. With families already settled nearby, this area is developing into a thriving residential zone. Enjoy a smooth, worry-free buying process with Clear title deeds, Immediate spot registration, Link documents readily available. Close to key towns like Shamshabad, Shadnagar, Kothur, and Timmapur, this project promises strong appreciation potential and high returns available now at just Rs. 7,000/- per square yard. Our project offers unmatched value in a strategic, high-growth location. Don't miss this golden opportunity to invest in the future. Contact us now to reserve your plot at Regional City.",
      ],
    },

    features: {
      items: [
        'Clear Title & Spot Registration',
        'Layout Designed as per Vaastu',
        'Gated Community with Compound Wall',
        'Metal Roads & Electric Poles',
        'Avenue Plantation',
        '24x7 Security | 10 Years Coverage',
        '50 Years Link Documents with Legal Opinion',
        'Within HMDA Limits (No 111GO)',
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
        { src: '/img/ongoing/regional-city/regional-boundary.jpg', alt: 'Regional City' },
        { src: '/img/ongoing/regional-city/regional-plots.jpg', alt: 'Regional City' },
        { src: '/img/ongoing/regional-city/regional-site.jpg', alt: 'Regional City' },
        { src: '/img/ongoing/regional-city/regional-sunset.jpg', alt: 'Regional City' },
        { src: '/img/ongoing/regional-city/regional-tree.jpg', alt: 'Regional City' },

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

  "imperial-city": {
    slug: "imperial-city",
    name: "Imperial City",

    hero: {
      status: "Completed",
      description:
        "Rs 6000 /- Per Sq. Yard with EMI | Gated Community Plot for Sale | Ten Years of Security",
      location: "Shabad Mandal, Near Shamshabad",
      // plotSize: "150–500 Sq. Yards",
      approval: "HMDA Approved",
      bannerImage:
        "/img/completed/imperial-city/imperial-1.jpg",
      priceLabel: "Starting From",
      price: "₹6,000 / Sq. Yard",
      priceNote: "Ready For Registration",
      brochureUrl: "#",
    },

    quickInfo: {
      items: [
        {
          icon: <FiDollarSign className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Starting Price",
          value: "₹6,000/Sq. Yd",
        },
        {
          icon: <FiMapPin className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Location",
          value: "Shabad Mandal, Near Shamshabad",
        },
        // {
        //   icon: <FiGrid className="text-xl" style={{ color: "#C9A227" }} />,
        //   label: "Project Area",
        //   value: "25 Acres",
        // },
        // {
        //   icon: <FiSquare className="text-xl" style={{ color: "#C9A227" }} />,
        //   label: "Plot Sizes",
        //   value: "150–500 Sq.Yd",
        // },
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

    about: {
      paragraphs: [
        "We bring you safe and secure residential plots near Shamshabad, Hyderabad—an excellent opportunity for both investment and peaceful living. Located just 25 minutes from Shamshabad and only 2 minutes from Shabad Highway, this venture offers unbeatable connectivity and convenience.",
        "The project is surrounded by major development hubs including Symbiosis International University, TATA University, and leading multinational companies such as Amazon Data Centre, Microsoft Data Centre, Welspun Flooring, and Kanha Shanti Vanam. Located along the Shabad Highway with excellent connectivity to Shamshabad, Shadnagar, Kothur, and Timmapur, Regional City sits in one of South Hyderabads fastest appreciating corridors. Essential amenities including schools, colleges, hospitals, banks, petrol stations, and restaurants are all within close proximity. With clear title deeds, immediate spot registration, and link documents readily available, the buying process is smooth and hassle-free. The upcoming Special Economic Zone, Pharma City, and Smart City developments in the vicinity make this an exceptional long-term investment. Contact us now to reserve your plot at Regional City.",
      ],
    },

    features: {
      items: [
        'Clear Title & Spot Registration',
        'Layout Designed as per Vaastu',
        'Gated Community with Compound Wall',
        'Metal Roads & Electric Poles',
        'Avenue Plantation',
        '24x7 Security | 10 Years Coverage',
        '50 Years Link Documents with Legal Opinion',
        'Within HMDA Limits (No 111GO)',
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
        { src: '/img/completed/imperial-city/imperial-1.jpg', alt: 'Imperial City' },
        { src: '/img/completed/imperial-city/imperial-2.jpg', alt: 'Imperial City' },
        { src: '/img/completed/imperial-city/imperial-3.jpg', alt: 'Imperial City' },
        { src: '/img/completed/imperial-city/imperial-4.jpg', alt: 'Imperial City' },
        { src: '/img/completed/imperial-city/imperial-5.jpg', alt: 'Imperial City' },
        { src: '/img/completed/imperial-city/imperial-6.jpg', alt: 'Imperial City' },
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

  "crystal-city": {
    slug: "crystal-city",
    name: "Crystal City Project",

    hero: {
      status: "Completed",
      description:
        "Hindustan Townships proudly presents its latest venture 'Crystal City'. This brand-new project offers attractive open plots for sale, conveniently located adjacent to existing residential houses.",
      location: "Shabad Mandal, Near Shamshabad",
      // plotSize: "150–500 Sq. Yards",
      approval: "HMDA Approved",
      bannerImage:
        "/img/completed/crystal-city/highway-city-new.jpg",
      priceLabel: "Starting From",
      price: "₹7,000 / Sq. Yard",
      priceNote: "Ready For Registration",
      brochureUrl: "#",
    },

    quickInfo: {
      items: [
        {
          icon: <FiDollarSign className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Starting Price",
          value: "₹7,000/Sq. Yd",
        },
        {
          icon: <FiMapPin className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Location",
          value: "Shabad Mandal, Near Shamshabad",
        },
        // {
        //   icon: <FiGrid className="text-xl" style={{ color: "#C9A227" }} />,
        //   label: "Project Area",
        //   value: "25 Acres",
        // },
        // {
        //   icon: <FiSquare className="text-xl" style={{ color: "#C9A227" }} />,
        //   label: "Plot Sizes",
        //   value: "150–500 Sq.Yd",
        // },
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

    about: {
      paragraphs: [
        "Looking for a Residential Plot with a Promising Future? This is for You! Worried about investment security? Let us put your concerns to rest. Hindustan Townships proudly presents Crystal City a premium residential plotting project in Shabad Shamshabad, ideal for building villas, apartments, or farmhouses. Located in a residential free zone, Crystal City is a gated community that offers you not just open plots, but a lifestyle upgrade just 25 minutes from Shamshabad International Airport and only 2 minutes from Shabad.",
        "Investing in a residential plot here is a smart and secure decision with the potential for high returns. The area is developing rapidly, and top multinational companies like Welspun Flooring and Katerra are just 5 minutes away from the project, making this location even more valuable. We offer safe, secure, and future-ready plots near Shamshabad perfect for your family's future and long-term financial goals.",
      ],
    },

    features: {
      items: [
        'Clear Title & Spot Registration',
        'Layout Designed as per Vaastu',
        'Gated Community with Compound Wall',
        'Metal Roads & Electric Poles',
        'Avenue Plantation',
        '24x7 Security | 10 Years Coverage',
        '50 Years Link Documents with Legal Opinion',
        'Within HMDA Limits (No 111GO)',
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
        { src: '/img/completed/crystal-city/highway-city-new.jpg', alt: 'Crystal City' },
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

  "hilton-city": {
    slug: "hilton-city",
    name: "Hilton City",

    hero: {
      status: "Completed",
      description:
        "We bring you safe and secure plots near Shamshabad, an excellent investment opportunity for your future. The project is conveniently located just a 25-minute drive from Shamshabad and only 2 minutes from Shabad.",
      location: "Shabad Mandal, Near Shamshabad",
      // plotSize: "150–500 Sq. Yards",
      approval: "HMDA Approved",
      bannerImage:
        "/img/completed/hilton-city/hilton-city-4.jpg",
      priceLabel: "Starting From",
      price: "₹9,500 / Sq. Yard",
      priceNote: "Ready For Registration",
      brochureUrl: "#",
    },

    quickInfo: {
      items: [
        {
          icon: <FiDollarSign className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Starting Price",
          value: "₹9,500/Sq. Yd",
        },
        {
          icon: <FiMapPin className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Location",
          value: "Shabad Mandal, Near Shamshabad",
        },
        // {
        //   icon: <FiGrid className="text-xl" style={{ color: "#C9A227" }} />,
        //   label: "Project Area",
        //   value: "25 Acres",
        // },
        // {
        //   icon: <FiSquare className="text-xl" style={{ color: "#C9A227" }} />,
        //   label: "Plot Sizes",
        //   value: "150–500 Sq.Yd",
        // },
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

    about: {
      paragraphs: [
        "Imagine owning an attractive plot, a residential property, or a farmhouse in a serene and beautiful environment where security meets smart investment and promises high returns. What could bring more peace of mind than settling in such a place?",
        "Hilton City is a newly launched, outstanding project by Hindustan Townships, located just a 25-minute drive from Shamshabad, Telangana. While many residential projects are emerging in Shamshabad, Hilton City stands apart with its commitment to quality, innovation, and thoughtful features. This premium gated community offers well-planned, affordable plots at just ₹6,500 per square yard backed by essential amenities and a secure investment environment.",
      ],
    },

    features: {
      items: [
        'Clear Title & Spot Registration',
        'Layout Designed as per Vaastu',
        'Gated Community with Compound Wall',
        'Metal Roads & Electric Poles',
        'Avenue Plantation',
        '24x7 Security | 10 Years Coverage',
        '50 Years Link Documents with Legal Opinion',
        'Within HMDA Limits (No 111GO)',
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
        { src: '/img/completed/hilton-city/hilton-city-1.jpg', alt: 'Hilton City' },
        { src: '/img/completed/hilton-city/hilton-city-2.jpg', alt: 'Hilton City' },
        { src: '/img/completed/hilton-city/hilton-city-3.jpg', alt: 'Hilton City' },
        { src: '/img/completed/hilton-city/hilton-city-4.jpg', alt: 'Hilton City' },
        { src: '/img/completed/hilton-city/hilton-city-5.jpg', alt: 'Hilton City' },

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

  "express-city": {
    slug: "express-city",
    name: "Express City",

    hero: {
      status: "Completed",
      description:
        "Hindustan Townships presents their latest project - Express City. This project offers you attractive, highway-facing residential plots for sale. Express city is nestled within the same Shabad Mandal location as our recently completed projects like Highway City, Falcon City and Pearl City.",
      location: "Shabad Mandal, Near Shamshabad",
      // plotSize: "150–500 Sq. Yards",
      approval: "HMDA Approved",
      bannerImage:
        "/img/completed/express-city/express-1.jpg",
      priceLabel: "Starting From",
      price: "₹7,000 / Sq. Yard",
      priceNote: "Ready For Registration",
      brochureUrl: "#",
    },

    quickInfo: {
      items: [
        {
          icon: <FiDollarSign className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Starting Price",
          value: "₹7,000/Sq. Yd",
        },
        {
          icon: <FiMapPin className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Location",
          value: "Shabad Mandal, Near Shamshabad",
        },
        // {
        //   icon: <FiGrid className="text-xl" style={{ color: "#C9A227" }} />,
        //   label: "Project Area",
        //   value: "25 Acres",
        // },
        // {
        //   icon: <FiSquare className="text-xl" style={{ color: "#C9A227" }} />,
        //   label: "Plot Sizes",
        //   value: "150–500 Sq.Yd",
        // },
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

    about: {
      paragraphs: [
        "There are many advantages to buying a residential plot in such an appealing location. You will be investing in an upcoming region within the Hyderabad metropolitan area. Additionally, the location of Express City is very near the bustling towns of Shamshabad and Shadnagar. This means you have access to all the facilities like the best schools, hospitals, shopping, transportation, and more at your fingertips.",
        "If you're looking to build your dream family home here, there couldn't be a better opportunity! Besides being in an incredible location with promising returns, the current low land rate makes this a once-in-a-lifetime opportunity. Attractive residential plot sizes are on offer at an affordable cost of ₹8,500/- per square yard. Different sizes of residential plots facing the highway. Located just a 25-minute drive from Hyderabad's Rajiv Gandhi International Airport (RGIA) in Shamshabad. Close to Symbiosis University. The proximity to several well-known MNCs makes this a strategic residential location.",
        "The following companies are just a short drive away: Welspun Flooring Company, Amazon Data Centre, Katerra India Private Limited, Kanha Shanti Vanam. Institutes (schools & colleges), petrol stations, banks, hospitals, hotels, and restaurants are within reasonable reach. This area south of Hyderabad, which could cost a fortune, offers you a unique opportunity to own a plot in Express City, a residential plot for sale near the important towns of Shamshabad, Shadnagar, Kothur, and Timmapur, where you will benefit greatly from high returns and a secure future. Buying our plots will give you the ultimate peace of mind from beginning to end. We assure you of a smooth and hassle-free transaction throughout. For more information about Express City, please get in touch with us right away!",
      ],
    },

    features: {
      items: [
        'Clear Title & Spot Registration',
        'Layout Designed as per Vaastu',
        'Gated Community with Compound Wall',
        'Metal Roads & Electric Poles',
        'Avenue Plantation',
        '24x7 Security | 10 Years Coverage',
        '50 Years Link Documents with Legal Opinion',
        'Within HMDA Limits (No 111GO)',
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
        { src: '/img/completed/express-city/express-1.jpg', alt: 'Express City' },

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

  "highway-city": {
    slug: "highway-city",
    name: "Highway City",

    hero: {
      status: "Completed",
      description:
        "Gated Community Plots for Sale Near Shamshabad with Ten Years of Security at just Rs 5,500/- Per Sq. for Residential and 8,000/- Per Sq. for Commercial",
      location: "Shabad Mandal, Near Shamshabad",
      // plotSize: "150–500 Sq. Yards",
      approval: "HMDA Approved",
      bannerImage:
        "/img/completed/highway-city/highway-city-2.jpg",
      priceLabel: "Starting From",
      price: "₹10,000 / Sq. Yard",
      priceNote: "Ready For Registration",
      brochureUrl: "#",
    },

    quickInfo: {
      items: [
        {
          icon: <FiDollarSign className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Starting Price",
          value: "₹10,000/Sq. Yd",
        },
        {
          icon: <FiMapPin className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Location",
          value: "Shabad Mandal, Near Shamshabad",
        },
        // {
        //   icon: <FiGrid className="text-xl" style={{ color: "#C9A227" }} />,
        //   label: "Project Area",
        //   value: "25 Acres",
        // },
        // {
        //   icon: <FiSquare className="text-xl" style={{ color: "#C9A227" }} />,
        //   label: "Plot Sizes",
        //   value: "150–500 Sq.Yd",
        // },
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

    about: {
      paragraphs: [
        "Searching for affordable commercial plots near Shamshabad in Hyderabad can be challenging but Highway City makes it possible. This is a once-in-a-lifetime opportunity to own commercial land in a growing cosmopolitan zone at an exceptionally attractive price. Whether youre looking to invest for residential or commercial purposes, Highway City offers the perfect setting for a convenient and modern lifestyle. The project is within walking distance of Renowned schools and colleges, Reputed hospitals and healthcare facilities, Commercial centers, retail spaces, and urban conveniences",
        "Don't miss this unique investment opportunity. Contact us today to know more about the exceptional offerings of Highway City before it's too late!",
      ],
    },

    features: {
      items: [
        'Clear Title & Spot Registration',
        'Layout Designed as per Vaastu',
        'Gated Community with Compound Wall',
        'Metal Roads & Electric Poles',
        'Avenue Plantation',
        '24x7 Security | 10 Years Coverage',
        '50 Years Link Documents with Legal Opinion',
        'Within HMDA Limits (No 111GO)',
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
        { src: '/img/completed/highway-city/highway-city-1.jpg', alt: 'Highway City' },
        { src: '/img/completed/highway-city/highway-city-2.jpg', alt: 'Highway City' },
        { src: '/img/completed/highway-city/highway-city-3.jpg', alt: 'Highway City' },
        { src: '/img/completed/highway-city/highway-city-4.jpg', alt: 'Highway City' },

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

  "highway-phase-2": {
    slug: "highway-phase-2",
    name: "Highway City Phase 2",

    hero: {
      status: "Completed",
      description:
        "Hindustan Townships India' presents their latest project - 'Highway City Phase 2'. This brand new project offers you attractive, highway-facing plots for sale. Highway city Phase 2 is nestled within the same Shabad Mandal location as our recently completed projects: Silver City, Highway City, Royal City (HMDA), and Pearl City.",
      location: "Shabad Mandal, Near Shamshabad",
      // plotSize: "150–500 Sq. Yards",
      approval: "HMDA Approved",
      bannerImage:
        "/img/completed/highway-city-phase-2/highway2-1.jpg",
      priceLabel: "Starting From",
      price: "₹10,000 / Sq. Yard",
      priceNote: "Ready For Registration",
      brochureUrl: "#",
    },

    quickInfo: {
      items: [
        {
          icon: <FiDollarSign className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Starting Price",
          value: "₹10,000/Sq. Yd",
        },
        {
          icon: <FiMapPin className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Location",
          value: "Shabad Mandal, Near Shamshabad",
        },
        // {
        //   icon: <FiGrid className="text-xl" style={{ color: "#C9A227" }} />,
        //   label: "Project Area",
        //   value: "25 Acres",
        // },
        // {
        //   icon: <FiSquare className="text-xl" style={{ color: "#C9A227" }} />,
        //   label: "Plot Sizes",
        //   value: "150–500 Sq.Yd",
        // },
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

    about: {
      paragraphs: [
        "There are many advantages of buying a plot in such an appealing location. You end up investing in an upcoming region within the Hyderabad metropolitan area. Further, the location of Highway City Phase 2 is very near the bustling towns of Shamshabad and Shadnagar. This means you have all the facilities like the best schools, hospitals, shopping, transportation, and more at your fingertips.",
        "If you're looking to build your dream family home here, there couldn't be a better chance! Besides being in an incredible location with promising returns, the low current land rate makes this an opportunity of a lifetime. On offer are attractive plot sizes at an affordable cost of Rs.10,000 per square yard. ● Different sizes of plots facing the highway. ● Located a 30-minute drive away from Hyderabad's Rajiv Gandhi International Airport (RGIA) situated in Shamshabad. ● Located close to Symbiosis University. ● The proximity to several well-known MNC's makes this a strategic location. The following companies are just a short drive away: ○ Welspun Flooring Company ○ Amazon Data Bank Centre ○ Katerra India Private Limited ○ FourPole Precast Hub ○ Kanha Shanti Vanam ● There are Institutes (schools & college), Petrol stations, Banks, Hospitals, a Hotel & Restaurants within reasonable reach. ● This is south of Hyderabad, can cost a fortune. Yet, by owning an Highway city Phase 2 plot, you're investing in an open plot for sale right near the important towns of Shamshabad, an excellent investment opportunity! Plots in Shamshabad, which is about 24 km Shadnagar, Kothur, and Timmapur, wherein you'll greatly benefit from high returns and a secure future. Buying our plots will give you the ultimate peace of mind from beginning to end. We assure you a smooth sailing transaction all along. For more information about 'Highway city Phase 2' please get in touch with us right away!",
      ],
    },

    features: {
      items: [
        'Clear Title & Spot Registration',
        'Layout Designed as per Vaastu',
        'Gated Community with Compound Wall',
        'Metal Roads & Electric Poles',
        'Avenue Plantation',
        '24x7 Security | 10 Years Coverage',
        '50 Years Link Documents with Legal Opinion',
        'Within HMDA Limits (No 111GO)',
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
        { src: '/img/completed/highway-city-phase-2/highway2-1.jpg', alt: 'Highway City Phase 2' },
        { src: '/img/completed/highway-city-phase-2/highway2-2.jpg', alt: 'Highway City Phase 2' },
        { src: '/img/completed/highway-city-phase-2/highway2-3.jpg', alt: 'Highway City Phase 2' },
        { src: '/img/completed/highway-city-phase-2/highway2-4.jpg', alt: 'Highway City Phase 2' },
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

  "silver-city": {
    slug: "silver-city",
    name: "Silver City",

    hero: {
      status: "Completed",
      description:
        "Rs 4000 Per Sq. Yard with EMI | Gated Community Plot for Sale Near Shamshabad | Ten Years of Security",
      location: "Shabad Mandal, Near Shamshabad",
      // plotSize: "150–500 Sq. Yards",
      approval: "HMDA Approved",
      bannerImage:
        "/img/completed/silver-city/silver-2.jpg",
      priceLabel: "Starting From",
      price: "₹4,000 / Sq. Yard",
      priceNote: "Ready For Registration",
      brochureUrl: "#",
    },

    quickInfo: {
      items: [
        {
          icon: <FiDollarSign className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Starting Price",
          value: "₹4,000/Sq. Yd",
        },
        {
          icon: <FiMapPin className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Location",
          value: "Shabad Mandal, Near Shamshabad",
        },
        // {
        //   icon: <FiGrid className="text-xl" style={{ color: "#C9A227" }} />,
        //   label: "Project Area",
        //   value: "25 Acres",
        // },
        // {
        //   icon: <FiSquare className="text-xl" style={{ color: "#C9A227" }} />,
        //   label: "Plot Sizes",
        //   value: "150–500 Sq.Yd",
        // },
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

    about: {
      paragraphs: [
        "Looking for a residential plot with promising future returns? Concerned about investment safety? Silver City by Hindustan Townships is the perfect choice for you! We offer premium residential plots for sale in Shamshabad, ideal for villas, buildings, or even farmhouses. Located in a residential free zone, this gated community venture is just 25 minutes from Shamshabad International Airport and only 2 minutes from Shabad, ensuring excellent connectivity and convenience.The magic of silver city Gated Community Plot for sale near Shamshabad in a residential free zone gets you closer to the Shamshabad International Airport which is just 20mins drive from the venture and just 2mins drive from Upcoming Regional Ring Road of Shabad.",
        "Investing in land near Shamshabad is one of the most secure and high-return decisions you can make. With leading MNCs like Welspun Flooring and Katerra India Pvt. Ltd. just 5 minutes away, this location is poised for significant appreciation. At Silver City, you're not just buying a plot—you're securing a valuable asset for your future and your children's future. We bring you safe, legally clear, and well-located plots in one of Hyderabad's fastest-growing corridors. Don't miss this opportunity—contact us today to know more about Silver City!",
      ],
    },

    features: {
      items: [
        'Clear Title & Spot Registration',
        'Layout Designed as per Vaastu',
        'Gated Community with Compound Wall',
        'Metal Roads & Electric Poles',
        'Avenue Plantation',
        '24x7 Security | 10 Years Coverage',
        '50 Years Link Documents with Legal Opinion',
        'Within HMDA Limits (No 111GO)',
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
        { src: '/img/completed/silver-city/silver-1.jpg', alt: 'Silver City' },
        { src: '/img/completed/silver-city/silver-2.jpg', alt: 'Silver City' },
        { src: '/img/completed/silver-city/silver-3.jpg', alt: 'Silver City' },
        { src: '/img/completed/silver-city/silver-4.jpg', alt: 'Silver City' },
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

  "future-city": {
    slug: "future-city",
    name: "Future City",

    hero: {
      status: "Completed",
      description:
        "Plots for Sale Near Shamshabad @ Rs 4500/- Sq. Yard. In a Gated Community with Clear Title & Spot Registration, Ten Years of Security, 100% Vaastu, Link Documents Available. Working on the principal of integrity trust & transparency in all our business endeavours",
      location: "Shabad Mandal, Near Shamshabad",
      // plotSize: "150–500 Sq. Yards",
      approval: "HMDA Approved",
      bannerImage:
        "/img/completed/future-city/future-city-3.jpg",
      priceLabel: "Starting From",
      price: "₹4,500 / Sq. Yard",
      priceNote: "Ready For Registration",
      brochureUrl: "#",
    },

    quickInfo: {
      items: [
        {
          icon: <FiDollarSign className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Starting Price",
          value: "₹4,500/Sq. Yd",
        },
        {
          icon: <FiMapPin className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Location",
          value: "Shabad Mandal, Near Shamshabad",
        },
        // {
        //   icon: <FiGrid className="text-xl" style={{ color: "#C9A227" }} />,
        //   label: "Project Area",
        //   value: "25 Acres",
        // },
        // {
        //   icon: <FiSquare className="text-xl" style={{ color: "#C9A227" }} />,
        //   label: "Plot Sizes",
        //   value: "150–500 Sq.Yd",
        // },
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

    about: {
      paragraphs: [
        "We've all imagined the perfect property to invest in and now, Future City is here to turn that vision into reality. This premium project is designed to offer both luxury and quality, tailored to meet your aspirations.",
        "Plots are available for sale at just ₹4,500 per sq. yard. Isn't that an incredible deal? This could very well be your last chance to seize such a remarkable offer! Situated within HMDA limits, this project ensures a hassle-free investment with full legal clarity. You can place your trust in us with confidence. Some highlights of Future City: The area is ideal for long-term investment, with strong potential for future value appreciation. It's a one-time investment you won't regret. The region is developing at an exceptionally fast pace, with rapid infrastructure growth and increasing commercial activity. Within just 5 minutes' drive, you'll find key industrial and commercial establishments such as Welspun Flooring, Katerra, Siemens Energy, Amazon Data Centre, Microsoft Data Centre, Kundana Techno-Tex, Olectra Greentech, Symbiosis International University, Kanha Shanti Vanam and many more. Your search ends here! Visit us today and discover the home or investment of your dreams.",
      ],
    },

    features: {
      items: [
        'Clear Title & Spot Registration',
        'Layout Designed as per Vaastu',
        'Gated Community with Compound Wall',
        'Metal Roads & Electric Poles',
        'Avenue Plantation',
        '24x7 Security | 10 Years Coverage',
        '50 Years Link Documents with Legal Opinion',
        'Within HMDA Limits (No 111GO)',
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
        { src: '/img/completed/future-city/future-city-1.jpg', alt: 'Future City' },
        { src: '/img/completed/future-city/future-city-2.jpg', alt: 'Future City' },
        { src: '/img/completed/future-city/future-city-3.jpg', alt: 'Future City' },
        { src: '/img/completed/future-city/future-city-4.jpg', alt: 'Future City' },
        { src: '/img/completed/future-city/future-city-5.jpg', alt: 'Future City' },
        { src: '/img/completed/future-city/future-city-6.jpg', alt: 'Future City' },
       
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

  "pearl-city": {
    slug: "pearl-city",
    name: "Pearl City",

    hero: {
      status: "Completed",
      description:
        "Hindustan Townships India brings to you their latest project - Pearl City",
      location: "Shabad Mandal, Near Shamshabad",
      // plotSize: "150–500 Sq. Yards",
      approval: "HMDA Approved",
      bannerImage:
        "/img/completed/pearl-city/pearl-city-1.jpg",
      priceLabel: "Starting From",
      price: "₹5,000 / Sq. Yard",
      priceNote: "Ready For Registration",
      brochureUrl: "#",
    },

    quickInfo: {
      items: [
        {
          icon: <FiDollarSign className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Starting Price",
          value: "₹5,000/Sq. Yd",
        },
        {
          icon: <FiMapPin className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Location",
          value: "Shabad Mandal, Near Shamshabad",
        },
        // {
        //   icon: <FiGrid className="text-xl" style={{ color: "#C9A227" }} />,
        //   label: "Project Area",
        //   value: "25 Acres",
        // },
        // {
        //   icon: <FiSquare className="text-xl" style={{ color: "#C9A227" }} />,
        //   label: "Plot Sizes",
        //   value: "150–500 Sq.Yd",
        // },
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

    about: {
      paragraphs: [
        "Looking for an ideal investment in a fast-developing area? Pearl City in Shabad offers a rare opportunity to own plots of various sizes in a well-connected and amenity-rich location. The property prices in this area is rising rapidly, now is the perfect time to secure a high-return investment at a more affordable rate. By owning a plot in Pearl City, youre not only buying land but youre securing your financial future with a smart, long-term investment near Shamshabad.",
        "Strategically located on the main road, near Shabad Highway Just 25 minutes from Rajiv Gandhi International Airport (RGIA), Shamshabad Convenient access to Symbiosis International University Close to major MNCs and top global companies, including: Welspun Flooring Company, Amazon Data Centre Katerra India Pvt. Ltd., Microsoft Data Centre, Kanha Shanti Vanam and more multinational companies are developing just 5 minutes from the site. Nearby Amenities like Educational institutions (schools & colleges), Petrol stations, banks, hospitals, Hotels, restaurants, and more within easy reach With smooth processes, clear titles, and a trustworthy team, Pearl City ensures a hassle-free and secure investment experience. For more information, please contact us using the details provided.",
      ],
    },

    features: {
      items: [
        'Clear Title & Spot Registration',
        'Layout Designed as per Vaastu',
        'Gated Community with Compound Wall',
        'Metal Roads & Electric Poles',
        'Avenue Plantation',
        '24x7 Security | 10 Years Coverage',
        '50 Years Link Documents with Legal Opinion',
        'Within HMDA Limits (No 111GO)',
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
        { src: '/img/completed/pearl-city/pearl-city-1.jpg', alt: 'Pearl City' },
        { src: '/img/completed/pearl-city/pearl-city-2.jpg', alt: 'Pearl City' },
        { src: '/img/completed/pearl-city/pearl-city-3.jpg', alt: 'Pearl City' },
        { src: '/img/completed/pearl-city/pearl-city-4.jpg', alt: 'Pearl City' },
        { src: '/img/completed/pearl-city/pearl-city-5.jpg', alt: 'Pearl City' },
        { src: '/img/completed/pearl-city/pearl-city-6.jpg', alt: 'Pearl City' },
        
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

  "peace-city": {
    slug: "peace-city",
    name: "Peace City",

    hero: {
      status: "Completed",
      description:
        "Plot for sale in near Shamshabad @ Rs 4500/ Square Yard in a Gated Community, Clear Title and Spot Registration with link Documents Available, Ten years of security. 100% Vaastu.",
      location: "Shabad Mandal, Near Shamshabad",
      // plotSize: "150–500 Sq. Yards",
      approval: "HMDA Approved",
      bannerImage:
        "/img/completed/peace-city/peace-city-1.jpg",
      priceLabel: "Starting From",
      price: "₹4,500 / Sq. Yard",
      priceNote: "Ready For Registration",
      brochureUrl: "#",
    },

    quickInfo: {
      items: [
        {
          icon: <FiDollarSign className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Starting Price",
          value: "₹4,500/Sq. Yd",
        },
        {
          icon: <FiMapPin className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Location",
          value: "Shabad Mandal, Near Shamshabad",
        },
        // {
        //   icon: <FiGrid className="text-xl" style={{ color: "#C9A227" }} />,
        //   label: "Project Area",
        //   value: "25 Acres",
        // },
        // {
        //   icon: <FiSquare className="text-xl" style={{ color: "#C9A227" }} />,
        //   label: "Plot Sizes",
        //   value: "150–500 Sq.Yd",
        // },
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

    about: {
      paragraphs: [
        "Looking for a Gated Community plot with a fantastic future? Concerned about investment safety? Peace City by Hindustan Townships is the perfect solution for you! We proudly present residential plots for sale near Shamshabad, ideal for villas, apartment buildings, or farmhouses. Located in a residential free zone, this gated community offers excellent connectivity just 25 minutes from Shamshabad International Airport and only 2 minutes from Shabad.",
        "Peace City is more than just a land investment its a chance to build your dream home or secure a high-potential asset in one of Hyderabads fastest-growing areas. The location is further enhanced by its proximity to top MNCs like Welspun Flooring and Katerra India, just a 5-minute drive from the project. With a focus on safety, security, and long-term value, Peace city offers you and your family a reliable investment for the future. Own a plot in a peaceful environment with the promise of excellent returns. Contact us today to know more and reserve your plot at Peace City!",
      ],
    },

    features: {
      items: [
        'Clear Title & Spot Registration',
        'Layout Designed as per Vaastu',
        'Gated Community with Compound Wall',
        'Metal Roads & Electric Poles',
        'Avenue Plantation',
        '24x7 Security | 10 Years Coverage',
        '50 Years Link Documents with Legal Opinion',
        'Within HMDA Limits (No 111GO)',
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
        { src: '/img/completed/peace-city/peace-city-1.jpg', alt: 'Peace City' },
        { src: '/img/completed/peace-city/peace-city-2.jpg', alt: 'Peace City' },
        { src: '/img/completed/peace-city/peace-city-3.jpg', alt: 'Peace City' },
        { src: '/img/completed/peace-city/peace-city-4.jpg', alt: 'Peace City' },
        { src: '/img/completed/peace-city/peace-city-5.jpg', alt: 'Peace City' },
        
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

  "prime-city": {
    slug: "prime-city",
    name: "Prime City",

    hero: {
      status: "Completed",
      description:
        "Hindustan Townships India presents their latest project - Prime City. This brand-new project offers you attractive, highway-facing residential plots for sale. Prime city is nestled within the same Shabad Mandal location as our recently completed projects: Highway City and Express City",
      location: "Shabad Mandal, Near Shamshabad",
      // plotSize: "150–500 Sq. Yards",
      approval: "HMDA Approved",
      bannerImage:
        "/img/completed/prime-city-phase-1-2/prime-city-5.jpg",
      priceLabel: "Starting From",
      price: "₹14,500 / Sq. Yard",
      priceNote: "Ready For Registration",
      brochureUrl: "#",
    },

    quickInfo: {
      items: [
        {
          icon: <FiDollarSign className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Starting Price",
          value: "₹14,500/Sq. Yd",
        },
        {
          icon: <FiMapPin className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Location",
          value: "Shabad Mandal, Near Shamshabad",
        },
        // {
        //   icon: <FiGrid className="text-xl" style={{ color: "#C9A227" }} />,
        //   label: "Project Area",
        //   value: "25 Acres",
        // },
        // {
        //   icon: <FiSquare className="text-xl" style={{ color: "#C9A227" }} />,
        //   label: "Plot Sizes",
        //   value: "150–500 Sq.Yd",
        // },
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

    about: {
      paragraphs: [
        "There are many advantages to purchasing a residential plot in such an appealing location. By investing in Prime City, you are securing a property in an emerging region within the Hyderabad metropolitan area. Additionally, the project is strategically located near the bustling towns of Shamshabad and Shadnagar, offering you easy access to essential facilities such as top schools, hospitals, shopping centers, transportation, and more.",
        "If you're looking to build your dream family home, there couldn't be a better opportunity! In addition to the excellent location and promising returns, the current affordable land rate makes this a once-in-a-lifetime investment. Attractive residential plots are available at a competitive price of Rs. 14,500 per square yard. It has Residential plots of various sizes facing the highway. Located just 25 minutes from Hyderabad's Rajiv Gandhi International Airport (RGIA) in Shamshabad. Close to Symbiosis University. The proximity to several well-known MNCs makes this a prime residential location. Nearby companies include: Welspun Flooring Company, Amazon Data Centre, Katerra India Private Limited, Microsoft Data Centre, Kanha Shanti Vanam. Schools, colleges, petrol stations, banks, hospitals, hotels, and restaurants are all within reasonable reach. This area, located south of Hyderabad, is rapidly growing and can be quite expensive. However, with Prime City, you're investing in open residential plots for sale in a strategic location near Shamshabad, offering excellent returns on investment. Purchasing a plot with us ensures peace of mind from start to finish. We guarantee a smooth, hassle-free transaction every step of the way. For more information about Prime City, get in touch with us today!",
      ],
    },

    features: {
      items: [
        'Clear Title & Spot Registration',
        'Layout Designed as per Vaastu',
        'Gated Community with Compound Wall',
        'Metal Roads & Electric Poles',
        'Avenue Plantation',
        '24x7 Security | 10 Years Coverage',
        '50 Years Link Documents with Legal Opinion',
        'Within HMDA Limits (No 111GO)',
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
        { src: '/img/completed/prime-city-phase-1-2/prime-city-1.jpg', alt: 'Prime City' },
        { src: '/img/completed/prime-city-phase-1-2/prime-city-2.jpg', alt: 'Prime City' },
        { src: '/img/completed/prime-city-phase-1-2/prime-city-3.jpg', alt: 'Prime City' },
        { src: '/img/completed/prime-city-phase-1-2/prime-city-4.jpg', alt: 'Prime City' },
        { src: '/img/completed/prime-city-phase-1-2/prime-city-5.jpg', alt: 'Prime City' },
       
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

  "falcon-city": {
    slug: "falcon-city",
    name: "Falcon City",

    hero: {
      status: "Completed",
      description:
        "Plots for Sale Near Shamshabad @ Rs 7,500/ Sq. Yard. In a Gated Community with Clear Title & Spot Registration. Ten Years of Security. 100% Vaastu. Link Documents Available. Working on the principal of integrity trust & transparency in all our business endeavours",
      location: "Shabad Mandal, Near Shamshabad",
      // plotSize: "150–500 Sq. Yards",
      approval: "HMDA Approved",
      bannerImage:
        "/img/completed/falcon-city-phase-1-2-3/express-3.jpg",
      priceLabel: "Starting From",
      price: "₹9,500 / Sq. Yard",
      priceNote: "Ready For Registration",
      brochureUrl: "#",
    },

    quickInfo: {
      items: [
        {
          icon: <FiDollarSign className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Starting Price",
          value: "₹9,500/Sq. Yd",
        },
        {
          icon: <FiMapPin className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Location",
          value: "Shabad Mandal, Near Shamshabad",
        },
        // {
        //   icon: <FiGrid className="text-xl" style={{ color: "#C9A227" }} />,
        //   label: "Project Area",
        //   value: "25 Acres",
        // },
        // {
        //   icon: <FiSquare className="text-xl" style={{ color: "#C9A227" }} />,
        //   label: "Plot Sizes",
        //   value: "150–500 Sq.Yd",
        // },
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

    about: {
      paragraphs: [
        "While plot prices near Shamshabad are currently quite high, this nearby project offers plots priced at just Rs. 7,500/- per square yard. The affordable price isn't the only advantage of moving to Falcon City the prime location is another major attraction, making it a highly viable investment.",
        "Falcon City is a prime, main road-facing parcel of land, located near other completed and newly launched projects, including Highway City, Pearl City, and the latest, Express City and Prime City. This emerging area promises strong returns on investment and is situated within the Hyderabad metropolitan region. The main road-facing residential plots of various sizes, priced at Rs. 9,500/- per square yard. Hyderabad's Rajiv Gandhi International Airport (RGIA) is just 25 minutes away by car. Located close to Symbiosis University. The proximity to several well-known MNCs makes this a strategic residential location. Some of the companies nearby include: Welspun Flooring Company, Amazon Data Centre, Katerra India Private Limited, Microsoft Data Centre, Kanha Shanti Vanam. Schools, colleges, petrol stations, banks, hospitals, hotels, and restaurants are within reasonable reach. Are you looking to make a great real estate investment or build your dream family home for a secure future? If yes, this is the perfect opportunity! We'll ensure a smooth transaction every step of the way. For more information about Falcon City, get in touch with us soon",
      ],
    },

    features: {
      items: [
        'Clear Title & Spot Registration',
        'Layout Designed as per Vaastu',
        'Gated Community with Compound Wall',
        'Metal Roads & Electric Poles',
        'Avenue Plantation',
        '24x7 Security | 10 Years Coverage',
        '50 Years Link Documents with Legal Opinion',
        'Within HMDA Limits (No 111GO)',
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
        { src: '/img/completed/falcon-city-phase-1-2-3/express-2.jpg', alt: 'Falcon City' },
        { src: '/img/completed/falcon-city-phase-1-2-3/express-3.jpg', alt: 'Falcon City' },
        
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

  "dream-home": {
    slug: "dream-home",
    name: "Dream Home",

    hero: {
      status: "Completed",
      description:
        "Hindustan Townships presents their latest project - Dream Home City. This brand-new project offers you attractive, highway-facing residential plots. Dream Home is nestled in Hayatabad area within the same Shabad Mandal",
      location: "Shabad Mandal, Near Shamshabad",
      // plotSize: "150–500 Sq. Yards",
      approval: "HMDA Approved",
      bannerImage:
        "/img/completed/dream-home-city/dream-home-1.jpg",
      priceLabel: "Starting From",
      price: "₹24,000 / Sq. Yard",
      priceNote: "Ready For Registration",
      brochureUrl: "#",
    },

    quickInfo: {
      items: [
        {
          icon: <FiDollarSign className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Starting Price",
          value: "₹24,000/Sq. Yd",
        },
        {
          icon: <FiMapPin className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Location",
          value: "Shabad Mandal, Near Shamshabad",
        },
        // {
        //   icon: <FiGrid className="text-xl" style={{ color: "#C9A227" }} />,
        //   label: "Project Area",
        //   value: "25 Acres",
        // },
        // {
        //   icon: <FiSquare className="text-xl" style={{ color: "#C9A227" }} />,
        //   label: "Plot Sizes",
        //   value: "150–500 Sq.Yd",
        // },
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

    about: {
      paragraphs: [
        "There are many benefits to buying a residential plot in such an attractive location. You are investing in an emerging region within the Hyderabad Metropolitan Area. Additionally, the location of Dream Home City is very close to the vibrant towns of Shamshabad and Shabad. This means you will have access to all the important facilities like the best schools, hospitals, shopping centres, transport services, and more at your fingertips. If you're planning to build your dream family home here, there couldn't be a better opportunity! Along with being in a prime location with high growth potential, the currently low land rates make this an opportunity of a lifetime. We offer residential plots at an attractive and affordable price of Rs. 24,500/- per square yard.",
        "Different sizes of residential plots available, many facing the highway. ● Just a 20-minute drive from Hyderabad's Rajiv Gandhi International Airport (RGIA) ● Close proximity to Symbiosis University. ● Near several major MNCs, making it a strategic residential location. Key companies nearby include: ○ Welspun Flooring Company○ Amazon Data Centre○ Microsoft Data Centre ○ Katerra India Private Limited○ Kanha Shanti Vanam. ● Nearby access to institutions (schools and colleges), petrol stations, banks, hospitals, hotels, and restaurants. ● Located in South Hyderabad, where land costs are rising fast. By owning a plot in Dream Home City, you are investing in an open residential plot near important towns like Shamshabad and Shabad. This is an excellent investment opportunity, offering strong potential returns and a secure future. Buying our plots ensures peace of mind from start to finish. We guarantee a smooth and transparent buying process throughout. For more information about Dream Home City, please contact us today!",
      ],
    },

    features: {
      items: [
        'Clear Title & Spot Registration',
        'Layout Designed as per Vaastu',
        'Gated Community with Compound Wall',
        'Metal Roads & Electric Poles',
        'Avenue Plantation',
        '24x7 Security | 10 Years Coverage',
        '50 Years Link Documents with Legal Opinion',
        'Within HMDA Limits (No 111GO)',
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
        { src: '/img/completed/dream-home-city/dream-home-1.jpg', alt: 'Dream Home' },
        { src: '/img/completed/dream-home-city/dream-home-2.jpg', alt: 'Dream Home' },
        { src: '/img/completed/dream-home-city/dream-home-3.jpg', alt: 'Dream Home' },
        { src: '/img/completed/dream-home-city/dream-home-4.jpg', alt: 'Dream Home' },
        { src: '/img/completed/dream-home-city/dream-home-5.jpg', alt: 'Dream Home' },
        
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

  "regional-city": {
    slug: "regional-city",
    name: "Regional City",

    hero: {
      status: "Completed",
      description:
        "Regional City is a premium residential venture by Hindustan Townships, strategically located in Shabad Mandal near the upcoming Regional Ring Road (RRR). Spread across a well-planned gated community, it offers open plots starting at just Rs. 7,000/- per square yard.",
      location: "Manmarri Village, Shabad",
      // plotSize: "150–500 Sq. Yards",
      approval: "HMDA Approved",
      bannerImage:
        "/img/completed/regional-city/regional-boundary.jpg",
      priceLabel: "Starting From",
      price: "₹7,000 / Sq. Yard",
      priceNote: "Ready For Registration",
      brochureUrl: "#",
    },

    quickInfo: {
      items: [
        {
          icon: <FiDollarSign className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Starting Price",
          value: "₹7,000/Sq. Yd",
        },
        {
          icon: <FiMapPin className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Location",
          value: "Manmarri Village, Shabad",
        },
        // {
        //   icon: <FiGrid className="text-xl" style={{ color: "#C9A227" }} />,
        //   label: "Project Area",
        //   value: "25 Acres",
        // },
        // {
        //   icon: <FiSquare className="text-xl" style={{ color: "#C9A227" }} />,
        //   label: "Plot Sizes",
        //   value: "150–500 Sq.Yd",
        // },
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

    about: {
      paragraphs: [
        "Regional City offers premium open plots at Rs. 7,000/- per square yard, making it one of the most value-driven investments in South Hyderabad. Strategically positioned near the upcoming Regional Ring Road (RRR) and just 30 minutes from Rajiv Gandhi International Airport (RGIA), Shamshabad, this project is designed for families seeking peaceful living and investors looking for high-growth potential. The fully developed gated community features compound wall fencing, metal roads, electric poles, avenue plantation, and 24x7 security with 10 years of security coverage on all plots.",
        "This well-connected location lies near the Shabad Highway and is surrounded by major development hubs including Symbiosis University and a host of leading multinational companies like Amazon Data Centre, Microsoft Data Centre, Welspun Flooring, Katerra India Pvt. Ltd., Kanha Shanti Vanam. Located in one of South Hyderabad's most rapidly growing corridors, Regional City is an ideal destination for peaceful living and future growth. The gated community ensures a secure, well-planned environment with essential amenities such as schools, colleges, hospitals, banks, petrol stations, restaurants, and dhabas all within close proximity. With families already settled nearby, this area is developing into a thriving residential zone. Enjoy a smooth, worry-free buying process with Clear title deeds, Immediate spot registration, Link documents readily available. Close to key towns like Shamshabad, Shadnagar, Kothur, and Timmapur, this project promises strong appreciation potential and high returns available now at just Rs. 7,000/- per square yard. Our project offers unmatched value in a strategic, high-growth location. Don't miss this golden opportunity to invest in the future. Contact us now to reserve your plot at Regional City.",
      ],
    },

    features: {
      items: [
        'Clear Title & Spot Registration',
        'Layout Designed as per Vaastu',
        'Gated Community with Compound Wall',
        'Metal Roads & Electric Poles',
        'Avenue Plantation',
        '24x7 Security | 10 Years Coverage',
        '50 Years Link Documents with Legal Opinion',
        'Within HMDA Limits (No 111GO)',
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
        { src: '/img/completed/regional-city/regional-boundary.jpg', alt: 'Regional City' },
        { src: '/img/completed/regional-city/regional-plots.jpg', alt: 'Regional City' },
        { src: '/img/completed/regional-city/regional-site.jpg', alt: 'Regional City' },
        { src: '/img/completed/regional-city/regional-sunset.jpg', alt: 'Regional City' },
        { src: '/img/completed/regional-city/regional-tree.jpg', alt: 'Regional City' },
        
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

  "natural-city": {
    slug: "natural-city",
    name: "Natural City",

    hero: {
      status: "Completed",
      description:
        "Natural City is one of the latest projects launched by Hindustan Townships. It is located in the Shabad Mandal vicinity and close to Upcoming Regional Ring Road (RRR)",
      location: "Shabad Mandal, Near Shamshabad",
      // plotSize: "150–500 Sq. Yards",
      approval: "HMDA Approved",
      bannerImage:
        "/img/completed/natural-city/natural-city-3.jpg",
      priceLabel: "Starting From",
      price: "₹3,800 / Sq. Yard",
      priceNote: "Ready For Registration",
      brochureUrl: "#",
    },

    quickInfo: {
      items: [
        {
          icon: <FiDollarSign className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Starting Price",
          value: "₹3,800/Sq. Yd",
        },
        {
          icon: <FiMapPin className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Location",
          value: "Shabad Mandal, Near Shamshabad",
        },
        // {
        //   icon: <FiGrid className="text-xl" style={{ color: "#C9A227" }} />,
        //   label: "Project Area",
        //   value: "25 Acres",
        // },
        // {
        //   icon: <FiSquare className="text-xl" style={{ color: "#C9A227" }} />,
        //   label: "Plot Sizes",
        //   value: "150–500 Sq.Yd",
        // },
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

    about: {
      paragraphs: [
        "Natural City offers ready-to-build open plots at an unbeatable price of just Rs. 3,800/- per square yard, making it the perfect choice for building your dream farmhouse or securing a high-potential investment, located very close to the upcoming Regional Ring Road (RRR). It is just 30 minutes from Rajiv Gandhi International Airport (RGIA) Shamshabad, and is conveniently close to Shabad Highway and major hubs such as Symbiosis University and several renowned MNCs—including Welspun Flooring, Amazon Data Centre, Microsoft Data Centre, Katerra India Pvt. Ltd., and Kanha Shanti Vanam. This is a strategic and rapidly developing area in south Hyderabad. Our gated community ensures privacy, security, and a peaceful living environment, with residents already settled nearby. The location is well-connected and surrounded by essential amenities such as schools, colleges, banks, petrol stations, hospitals, hotels, dhabas, and restaurants—offering everything you need within easy reach. We provide a seamless and transparent buying process with clear title deeds, immediate spot registration, and link documents readily available.",
        "The location is also close to key towns like Shamshabad, Shadnagar, Kothur, and Timmapur. Plots in this region offer significant potential for high returns, available at just Rs. 3,800/- per square yard. Natural City delivers unmatched value in one of south Hyderabad's most promising corridors. Dont miss this rare opportunity to own a plot in a high-growth area. Contact us today to secure your future at Natural City.",
      ],
    },

    features: {
      items: [
        'Clear Title & Spot Registration',
        'Layout Designed as per Vaastu',
        'Gated Community with Compound Wall',
        'Metal Roads & Electric Poles',
        'Avenue Plantation',
        '24x7 Security | 10 Years Coverage',
        '50 Years Link Documents with Legal Opinion',
        'Within HMDA Limits (No 111GO)',
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
        { src: '/img/completed/natural-city/natural-city-1.jpg', alt: 'Natural City' },
        { src: '/img/completed/natural-city/natural-city-2.jpg', alt: 'Natural City' },
        { src: '/img/completed/natural-city/natural-city-3.jpg', alt: 'Natural City' },
        { src: '/img/completed/natural-city/natural-city-4.jpg', alt: 'Natural City' },
        
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

  "falcon-phase-4": {
    slug: "falcon-phase-4",
    name: "Falcon City Phase 4",

    hero: {
      status: "Completed",
      description:
        "Plots for Sale Near Shamshabad @ Rs 9,500/ Sq. Yard. In a Gated Community with Clear Title & Spot Registration. Ten Years of Security. 100% Vaastu. Link Documents Available. Working on the principal of integrity trust & transparency in all our business endeavours",
      location: "Shabad Mandal, Near Shamshabad",
      // plotSize: "150–500 Sq. Yards",
      approval: "HMDA Approved",
      bannerImage:
        "/img/completed/falcon-city-phase-4/falcon-city-1.jpg",
      priceLabel: "Starting From",
      price: "₹9,500 / Sq. Yard",
      priceNote: "Ready For Registration",
      brochureUrl: "#",
    },

    quickInfo: {
      items: [
        {
          icon: <FiDollarSign className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Starting Price",
          value: "₹9,500/Sq. Yd",
        },
        {
          icon: <FiMapPin className="text-xl" style={{ color: "#C9A227" }} />,
          label: "Location",
          value: "Shabad Mandal, Near Shamshabad",
        },
        // {
        //   icon: <FiGrid className="text-xl" style={{ color: "#C9A227" }} />,
        //   label: "Project Area",
        //   value: "25 Acres",
        // },
        // {
        //   icon: <FiSquare className="text-xl" style={{ color: "#C9A227" }} />,
        //   label: "Plot Sizes",
        //   value: "150–500 Sq.Yd",
        // },
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

    about: {
      paragraphs: [
        "While land prices near Shamshabad are currently quite high, Falcon City Phase-4 offers premium gated community plots at an incredibly affordable rate of just Rs. 9,500 per square yard. And its not just the price that makes this project stand out—the strategic location is a major advantage, making this a smart and promising investment. Falcon City Phase-4 is a main road-adjacent residential land parcel, located in the same area as our other successful and ongoing projects. This is an emerging region within the Hyderabad metropolitan area, offering excellent potential for future appreciation.",
        "Just 25 minutes from Rajiv Gandhi International Airport (RGIA), Shamshabad Close to Symbiosis University In close proximity to several leading multinational companies, including: ○ Welspun Flooring Company ○ Amazon Data Centre ○ Microsoft Data Centre ○ Katerra India Pvt. Ltd. ○ Kanha Shanti Vanam Easy access to essential services including schools, colleges, banks, petrol stations, hospitals, hotels, and restaurants. Whether youre planning to build your dream home or seeking a high-return real estate investment, Falcon City Phase-4 is an exceptional opportunity. Plus, we guarantee a smooth, transparent, and hassle-free buying process from start to finish. For more details about Falcon City Phase-4, get in touch with us today!",
      ],
    },

    features: {
      items: [
        'Clear Title & Spot Registration',
        'Layout Designed as per Vaastu',
        'Gated Community with Compound Wall',
        'Metal Roads & Electric Poles',
        'Avenue Plantation',
        '24x7 Security | 10 Years Coverage',
        '50 Years Link Documents with Legal Opinion',
        'Within HMDA Limits (No 111GO)',
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
        { src: '/img/completed/falcon-city-phase-4/falcon-city-1.jpg', alt: 'Falcon City Phase 4' },
        
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