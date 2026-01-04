export type Language = "fr" | "en" | "ar";

export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    testimonials: string;
    contact: string;
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
      cta1: string;
      cta2: string;
    };
    intro: {
      title: string;
      description: string;
    };
    services: {
      title: string;
      subtitle: string;
    };
    projects: {
      title: string;
      subtitle: string;
      viewAll: string;
    };
    testimonials: {
      title: string;
      subtitle: string;
    };
  };
  about: {
    title: string;
    story: {
      title: string;
      content: string;
    };
    vision: {
      title: string;
      content: string;
    };
    expertise: {
      title: string;
      content: string;
    };
  };
  services: {
    title: string;
    subtitle: string;
    villa: {
      title: string;
      description: string;
    };
    apartment: {
      title: string;
      description: string;
    };
    office: {
      title: string;
      description: string;
    };
    restaurant: {
      title: string;
      description: string;
    };
    visualization: {
      title: string;
      description: string;
    };
    cta: {
      title: string;
      subtitle: string;
    };
    features: {
      villa: string[];
      apartment: string[];
      office: string[];
      restaurant: string[];
      visualization: string[];
    };
  };
  portfolio: {
    title: string;
    all: string;
    villa: string;
    apartment: string;
    office: string;
    restaurant: string;
    subtitle: string;
    viewProject: string;
    beforeAfter: {
      title: string;
      subtitle: string;
    };
  };
  testimonials: {
    title: string;
    subtitle: string;
    viewAll: string;
    projectLabel: string;
    cta: { title: string; subtitle: string };
    items: Array<{
      id: number;
      name: string;
      role: string;
      location: string;
      image: string;
      text: string;
      rating: number;
      project: string;
    }>;
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      phone: string;
      message: string;
      send: string;
      sending: string;
    };
    info: {
      address: string;
      phone: string;
      email: string;
    };
  };
  footer: {
    description: string;
    links: string;
    contact: string;
    rights: string;
  };
  whatsapp: {
    message: string;
  };
}

export const translations: Record<Language, Translations> = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      portfolio: "Portfolio",
      testimonials: "Témoignages",
      contact: "Contact",
    },
    home: {
      hero: {
        title: "Créons Ensemble des Espaces d'Exception",
        subtitle: "Design d'intérieur luxe et moderne au Maroc",
        cta1: "Contactez-nous",
        cta2: "Voir nos projets",
      },
      intro: {
        title: "Excellence en Design d'Intérieur",
        description: "M.M Design d'intérieur transforme vos espaces avec créativité et savoir-faire. Spécialisés dans le design luxe, moderne et industriel, nous créons des intérieurs qui reflètent votre personnalité et élèvent votre quotidien.",
      },
      services: {
        title: "Nos Services",
        subtitle: "Des solutions sur mesure pour chaque espace",
      },
      projects: {
        title: "Nos Réalisations",
        subtitle: "Découvrez nos projets phares",
        viewAll: "Voir tout le portfolio",
      },
      testimonials: {
        title: "Ce que disent nos clients",
        subtitle: "La satisfaction de nos clients est notre priorité",
      },
    },
    about: {
      title: "À Propos de Nous",
      story: {
        title: "Notre Histoire",
        content: "M.M Design d'intérieur est né d'une passion pour la création d'espaces exceptionnels. Depuis notre création, nous nous sommes spécialisés dans le design d'intérieur luxe au Maroc, combinant esthétique moderne et savoir-faire artisanal. Notre équipe de designers expérimentés travaille avec dévouement pour transformer chaque projet en une œuvre d'art intérieure.",
      },
      vision: {
        title: "Notre Vision",
        content: "Nous croyons que chaque espace mérite d'être transformé en un lieu d'inspiration. Notre vision est de créer des intérieurs qui allient fonctionnalité, beauté et luxe, en respectant l'identité culturelle marocaine tout en intégrant des tendances internationales contemporaines.",
      },
      expertise: {
        title: "Notre Expertise",
        content: "Spécialisés dans le design d'intérieur au Maroc, nous maîtrisons les subtilités de l'architecture locale et les attentes d'une clientèle exigeante. De Casablanca à Marrakech, en passant par Rabat et Tanger, nous intervenons dans toutes les villes du Maroc pour créer des espaces résidentiels et commerciaux d'exception.",
      },
    },
    services: {
      title: "Nos Services",
      subtitle: "Des solutions sur mesure pour transformer vos espaces",
      villa: {
        title: "Design de Villas",
        description: "Conception complète d'intérieurs de villas luxe. Espaces de vie, suites, cuisines, jardins intérieurs. Design sur mesure qui respecte l'architecture et vos besoins.",
      },
      apartment: {
        title: "Design d'Appartements",
        description: "Optimisation et design d'appartements modernes. Solutions intelligentes pour maximiser l'espace et créer des intérieurs élégants et fonctionnels.",
      },
      office: {
        title: "Espaces de Bureaux",
        description: "Aménagement d'espaces de travail contemporains. Bureaux, salles de réunion, espaces communs. Design qui favorise productivité et bien-être.",
      },
      restaurant: {
        title: "Restaurants & Cafés",
        description: "Création d'ambiances uniques pour restaurants et cafés. Design qui raconte votre histoire et attire votre clientèle. Expérience gastronomique complète.",
      },
      visualization: {
        title: "Visualisation 3D",
        description: "Rendu 3D photoréaliste de vos projets. Planification d'espace et visualisation avant réalisation. Prise de décision facilitée.",
      },
      cta: {
        title: "Prêt à transformer votre espace ?",
        subtitle: "Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé",
      },
      features: {
        villa: [
          "Conception complète sur mesure",
          "Espaces de vie, suites, cuisines",
          "Jardins intérieurs et terrasses",
          "Sélection de mobilier et décoration",
        ],
        apartment: [
          "Optimisation de l'espace",
          "Design fonctionnel et élégant",
          "Solutions de rangement innovantes",
          "Aménagement sur mesure",
        ],
        office: [
          "Aménagement d'espaces de travail",
          "Bureaux et salles de réunion",
          "Design favorisant productivité",
          "Espaces communs et cafétérias",
        ],
        restaurant: [
          "Création d'ambiance unique",
          "Design adapté à votre concept",
          "Expérience client optimale",
          "Conception de bar et salle",
        ],
        visualization: [
          "Rendu 3D photoréaliste",
          "Visualisation avant réalisation",
          "Planification d'espace détaillée",
          "Aide à la décision facilitée",
        ],
      },
    },
    portfolio: {
      title: "Portfolio",
      all: "Tous",
      villa: "Villas",
      apartment: "Appartements",
      office: "Bureaux",
      restaurant: "Restaurants",
      subtitle: "Découvrez nos réalisations d'exception",
      viewProject: "Voir le projet →",
      beforeAfter: {
        title: "Avant / Après",
        subtitle: "Découvrez la transformation de nos projets",
      },
    },
    testimonials: {
      title: "Témoignages Clients",
      subtitle: "La confiance de nos clients est notre récompense",
      viewAll: "Voir tous les témoignages →",
      projectLabel: "Projet :",
      cta: {
        title: "Rejoignez nos clients satisfaits",
        subtitle: "Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé",
      },
      items: [
        {
          id: 1,
          name: "Ahmed Benali",
          role: "Propriétaire Villa",
          location: "Casablanca",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
          text: "Un travail exceptionnel ! L'équipe de M.M Design d'intérieur a transformé notre villa en un véritable espace de luxe. Leur attention aux détails et leur professionnalisme sont remarquables. Nous recommandons vivement leurs services.",
          rating: 5,
          project: "Villa Moderne Casablanca",
        },
        {
          id: 2,
          name: "Sophie Martin",
          role: "Directrice Restaurant",
          location: "Marrakech",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces",
          text: "Le design de notre restaurant a dépassé toutes nos attentes. L'ambiance créée attire notre clientèle et reflète parfaitement notre identité. Merci pour ce magnifique travail !",
          rating: 5,
          project: "Restaurant Marrakech",
        },
        {
          id: 3,
          name: "Youssef Alaoui",
          role: "CEO",
          location: "Rabat",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces",
          text: "L'aménagement de nos bureaux a considérablement amélioré l'ambiance de travail. Nos collaborateurs apprécient ces nouveaux espaces modernes et fonctionnels. Excellent travail !",
          rating: 5,
          project: "Bureau Executive Rabat",
        },
        {
          id: 4,
          name: "Fatima Zahra",
          role: "Propriétaire Appartement",
          location: "Tanger",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces",
          text: "J'ai été impressionnée par la créativité et l'écoute de l'équipe. Mon appartement est maintenant un véritable cocon de bien-être. Merci pour cette transformation incroyable !",
          rating: 5,
          project: "Appartement Luxe Tanger",
        },
        {
          id: 5,
          name: "Karim Bensaid",
          role: "Propriétaire Villa",
          location: "Casablanca",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces",
          text: "De la conception à la réalisation, tout s'est déroulé à la perfection. Notre villa reflète maintenant notre personnalité et notre style de vie. Un travail d'artiste !",
          rating: 5,
          project: "Villa Traditionnelle Casablanca",
        },
        {
          id: 6,
          name: "Aicha Amrani",
          role: "Propriétaire Appartement",
          location: "Rabat",
          image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces",
          text: "L'optimisation de l'espace de mon appartement était un défi, mais l'équipe l'a relevé avec brio. Résultat : un espace fonctionnel et esthétique qui dépasse mes attentes.",
          rating: 5,
          project: "Studio Design Rabat",
        },
      ],
    },
    contact: {
      title: "Contactez-nous",
      subtitle: "Discutons de votre projet",
      form: {
        name: "Nom complet",
        email: "Email",
        phone: "Téléphone",
        message: "Votre message",
        send: "Envoyer",
        sending: "Envoi...",
      },
      info: {
        address: "Maroc - Toutes villes",
        phone: "+212 XXX XXX XXX",
        email: "contact@mmdesign.ma",
      },
    },
    footer: {
      description: "M.M Design d'intérieur - Créateurs d'espaces d'exception au Maroc",
      links: "Liens rapides",
      contact: "Contact",
      rights: "Tous droits réservés",
    },
    whatsapp: {
      message: "Bonjour, je souhaite discuter de mon projet de design d'intérieur.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      testimonials: "Testimonials",
      contact: "Contact",
    },
    home: {
      hero: {
        title: "Let's Create Exceptional Spaces Together",
        subtitle: "Luxury and modern interior design in Morocco",
        cta1: "Contact Us",
        cta2: "View Our Projects",
      },
      intro: {
        title: "Excellence in Interior Design",
        description: "M.M Design d'intérieur transforms your spaces with creativity and craftsmanship. Specialized in luxury, modern and industrial design, we create interiors that reflect your personality and elevate your daily life.",
      },
      services: {
        title: "Our Services",
        subtitle: "Custom solutions for every space",
      },
      projects: {
        title: "Our Projects",
        subtitle: "Discover our flagship projects",
        viewAll: "View all portfolio",
      },
      testimonials: {
        title: "What Our Clients Say",
        subtitle: "Our clients' satisfaction is our priority",
      },
    },
    about: {
      title: "About Us",
      story: {
        title: "Our Story",
        content: "M.M Design d'intérieur was born from a passion for creating exceptional spaces. Since our inception, we have specialized in luxury interior design in Morocco, combining modern aesthetics with artisanal craftsmanship. Our team of experienced designers works with dedication to transform each project into an interior work of art.",
      },
      vision: {
        title: "Our Vision",
        content: "We believe that every space deserves to be transformed into a place of inspiration. Our vision is to create interiors that combine functionality, beauty and luxury, respecting the Moroccan cultural identity while integrating contemporary international trends.",
      },
      expertise: {
        title: "Our Expertise",
        content: "Specialized in interior design in Morocco, we master the subtleties of local architecture and the expectations of demanding clients. From Casablanca to Marrakech, through Rabat and Tangier, we operate in all cities of Morocco to create exceptional residential and commercial spaces.",
      },
    },
    services: {
      title: "Our Services",
      subtitle: "Custom solutions to transform your spaces",
      villa: {
        title: "Villa Design",
        description: "Complete design of luxury villa interiors. Living spaces, suites, kitchens, interior gardens. Custom design that respects architecture and your needs.",
      },
      apartment: {
        title: "Apartment Design",
        description: "Optimization and design of modern apartments. Smart solutions to maximize space and create elegant and functional interiors.",
      },
      office: {
        title: "Office Spaces",
        description: "Fitting out contemporary workspaces. Offices, meeting rooms, common areas. Design that promotes productivity and well-being.",
      },
      restaurant: {
        title: "Restaurants & Cafés",
        description: "Creating unique atmospheres for restaurants and cafés. Design that tells your story and attracts your clientele. Complete gastronomic experience.",
      },
      visualization: {
        title: "3D Visualization",
        description: "Photorealistic 3D rendering of your projects. Space planning and visualization before implementation. Facilitated decision-making.",
      },
      cta: {
        title: "Ready to transform your space?",
        subtitle: "Contact us to discuss your project and get a personalized quote",
      },
      features: {
        villa: [
          "Complete custom design",
          "Living spaces, suites, kitchens",
          "Interior gardens and terraces",
          "Furniture and decoration selection",
        ],
        apartment: [
          "Space optimization",
          "Functional and elegant design",
          "Innovative storage solutions",
          "Custom fitting",
        ],
        office: [
          "Workspace fitting",
          "Offices and meeting rooms",
          "Productivity-focused design",
          "Common areas and cafeterias",
        ],
        restaurant: [
          "Unique atmosphere creation",
          "Design adapted to your concept",
          "Optimal customer experience",
          "Bar and dining room design",
        ],
        visualization: [
          "Photorealistic 3D rendering",
          "Pre-implementation visualization",
          "Detailed space planning",
          "Facilitated decision-making",
        ],
      },
    },
    portfolio: {
      title: "Portfolio",
      all: "All",
      villa: "Villas",
      apartment: "Apartments",
      office: "Offices",
      restaurant: "Restaurants",
      subtitle: "Discover our exceptional achievements",
      viewProject: "View project →",
      beforeAfter: {
        title: "Before / After",
        subtitle: "Discover the transformation of our projects",
      },
    },
    testimonials: {
      title: "Client Testimonials",
      subtitle: "Our clients' trust is our reward",
      viewAll: "View all testimonials →",
      projectLabel: "Project:",
      cta: {
        title: "Join our satisfied clients",
        subtitle: "Contact us today to discuss your project and get a personalized quote",
      },
      items: [
        {
          id: 1,
          name: "Ahmed Benali",
          role: "Villa Owner",
          location: "Casablanca",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
          text: "Exceptional work! The team at M.M Design d'intérieur transformed our villa into a true luxury space. Their attention to detail and professionalism are remarkable. We highly recommend their services.",
          rating: 5,
          project: "Modern Villa Casablanca",
        },
        {
          id: 2,
          name: "Sophie Martin",
          role: "Restaurant Director",
          location: "Marrakech",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces",
          text: "The design of our restaurant exceeded all our expectations. The ambiance created attracts our clientele and perfectly reflects our identity. Thank you for this magnificent work!",
          rating: 5,
          project: "Restaurant Marrakech",
        },
        {
          id: 3,
          name: "Youssef Alaoui",
          role: "CEO",
          location: "Rabat",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces",
          text: "The arrangement of our offices has significantly improved the working atmosphere. Our employees appreciate these new modern and functional spaces. Excellent work!",
          rating: 5,
          project: "Executive Office Rabat",
        },
        {
          id: 4,
          name: "Fatima Zahra",
          role: "Apartment Owner",
          location: "Tangier",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces",
          text: "I was impressed by the team's creativity and attentiveness. My apartment is now a true cocoon of well-being. Thank you for this incredible transformation!",
          rating: 5,
          project: "Luxury Apartment Tangier",
        },
        {
          id: 5,
          name: "Karim Bensaid",
          role: "Villa Owner",
          location: "Casablanca",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces",
          text: "From design to execution, everything went perfectly. Our villa now reflects our personality and lifestyle. A work of art!",
          rating: 5,
          project: "Traditional Villa Casablanca",
        },
        {
          id: 6,
          name: "Aicha Amrani",
          role: "Apartment Owner",
          location: "Rabat",
          image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces",
          text: "Optimizing the space in my apartment was a challenge, but the team rose to it brilliantly. The result: a functional and aesthetic space that exceeds my expectations.",
          rating: 5,
          project: "Studio Design Rabat",
        },
      ],
    },
    contact: {
      title: "Contact Us",
      subtitle: "Let's discuss your project",
      form: {
        name: "Full Name",
        email: "Email",
        phone: "Phone",
        message: "Your Message",
        send: "Send",
        sending: "Sending...",
      },
      info: {
        address: "Morocco - All cities",
        phone: "+212 XXX XXX XXX",
        email: "contact@mmdesign.ma",
      },
    },
    footer: {
      description: "M.M Design d'intérieur - Creators of exceptional spaces in Morocco",
      links: "Quick Links",
      contact: "Contact",
      rights: "All rights reserved",
    },
    whatsapp: {
      message: "Hello, I would like to discuss my interior design project.",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      portfolio: "المشاريع",
      testimonials: "الشهادات",
      contact: "اتصل بنا",
    },
    home: {
      hero: {
        title: "لننشئ مساحات استثنائية معاً",
        subtitle: "تصميم داخلي فاخر وحديث في المغرب",
        cta1: "اتصل بنا",
        cta2: "شاهد مشاريعنا",
      },
      intro: {
        title: "التميز في التصميم الداخلي",
        description: "M.M Design d'intérieur يحول مساحاتك بالإبداع والحرفية. متخصصون في التصميم الفاخر والحديث والصناعي، نخلق مساحات داخلية تعكس شخصيتك وترتقي بحياتك اليومية.",
      },
      services: {
        title: "خدماتنا",
        subtitle: "حلول مخصصة لكل مساحة",
      },
      projects: {
        title: "مشاريعنا",
        subtitle: "اكتشف مشاريعنا الرائدة",
        viewAll: "شاهد جميع المشاريع",
      },
      testimonials: {
        title: "ماذا يقول عملاؤنا",
        subtitle: "رضا عملائنا هو أولويتنا",
      },
    },
    about: {
      title: "من نحن",
      story: {
        title: "قصتنا",
        content: "M.M Design d'intérieur ولد من شغف بإنشاء مساحات استثنائية. منذ إنشائنا، تخصصنا في التصميم الداخلي الفاخر في المغرب، ونجمع بين الجماليات الحديثة والحرفية الحرفية. يعمل فريق المصممين ذوي الخبرة لدينا بتفان لتحويل كل مشروع إلى عمل فني داخلي.",
      },
      vision: {
        title: "رؤيتنا",
        content: "نؤمن أن كل مساحة تستحق التحول إلى مكان إلهام. رؤيتنا هي إنشاء مساحات داخلية تجمع بين الوظيفة والجمال والفخامة، مع احترام الهوية الثقافية المغربية مع دمج الاتجاهات الدولية المعاصرة.",
      },
      expertise: {
        title: "خبرتنا",
        content: "متخصصون في التصميم الداخلي في المغرب، نتقن دقائق العمارة المحلية وتوقعات العملاء المتطلبين. من الدار البيضاء إلى مراكش، مروراً بالرباط وطنجة، نعمل في جميع مدن المغرب لإنشاء مساحات سكنية وتجارية استثنائية.",
      },
    },
    services: {
      title: "خدماتنا",
      subtitle: "حلول مخصصة لتحويل مساحاتك",
      villa: {
        title: "تصميم الفلل",
        description: "تصميم كامل لداخل الفلل الفاخرة. مساحات المعيشة، الأجنحة، المطابخ، الحدائق الداخلية. تصميم مخصص يحترم الهندسة المعمارية واحتياجاتك.",
      },
      apartment: {
        title: "تصميم الشقق",
        description: "تحسين وتصميم الشقق الحديثة. حلول ذكية لتعظيم المساحة وإنشاء مساحات داخلية أنيقة وعملية.",
      },
      office: {
        title: "المساحات المكتبية",
        description: "تأثيث مساحات العمل المعاصرة. المكاتب، قاعات الاجتماعات، المساحات المشتركة. تصميم يعزز الإنتاجية والرفاهية.",
      },
      restaurant: {
        title: "المطاعم والمقاهي",
        description: "إنشاء أجواء فريدة للمطاعم والمقاهي. تصميم يروي قصتك ويجذب عملاءك. تجربة طعام كاملة.",
      },
      visualization: {
        title: "التصور ثلاثي الأبعاد",
        description: "عرض ثلاثي الأبعاد واقعي لمشاريعك. تخطيط المساحة والتصور قبل التنفيذ. تسهيل اتخاذ القرار.",
      },
      cta: {
        title: "هل أنت مستعد لتحويل مساحتك؟",
        subtitle: "اتصل بنا لمناقشة مشروعك والحصول على عرض سعر مخصص",
      },
      features: {
        villa: [
          "تصميم كامل مخصص",
          "مساحات المعيشة، الأجنحة، المطابخ",
          "الحدائق الداخلية والتراسات",
          "اختيار الأثاث والديكور",
        ],
        apartment: [
          "تحسين المساحة",
          "تصميم وظيفي وأنيق",
          "حلول تخزين مبتكرة",
          "تأثيث مخصص",
        ],
        office: [
          "تأثيث مساحات العمل",
          "المكاتب وقاعات الاجتماعات",
          "تصميم يعزز الإنتاجية",
          "المساحات المشتركة والمقاهي",
        ],
        restaurant: [
          "إنشاء أجواء فريدة",
          "تصميم يتكيف مع مفهومك",
          "تجربة عملاء مثالية",
          "تصميم البار وصالة الطعام",
        ],
        visualization: [
          "عرض ثلاثي الأبعاد واقعي",
          "تصور قبل التنفيذ",
          "تخطيط المساحة التفصيلي",
          "تسهيل اتخاذ القرار",
        ],
      },
    },
    portfolio: {
      title: "المشاريع",
      all: "الكل",
      villa: "الفلل",
      apartment: "الشقق",
      office: "المكاتب",
      restaurant: "المطاعم",
      subtitle: "اكتشف إنجازاتنا الاستثنائية",
      viewProject: "شاهد المشروع →",
      beforeAfter: {
        title: "قبل / بعد",
        subtitle: "اكتشف تحول مشاريعنا",
      },
    },
    testimonials: {
      title: "شهادات العملاء",
      subtitle: "ثقة عملائنا هي مكافأتنا",
      viewAll: "شاهد جميع الشهادات →",
      projectLabel: "المشروع:",
      cta: {
        title: "انضم إلى عملائنا الراضين",
        subtitle: "تواصل معنا اليوم لمناقشة مشروعك والحصول على عرض سعر مخصص",
      },
      items: [
        {
          id: 1,
          name: "أحمد بنعلي",
          role: "مالك فيلا",
          location: "الدار البيضاء",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
          text: "عمل استثنائي! فريق M.M Design d'intérieur حوّل فيلتنا إلى مساحة فاخرة حقيقية. انتباههم للتفاصيل واحترافيتهم ملحوظة. نوصي بخدماتهم بشدة.",
          rating: 5,
          project: "فيلا عصرية - الدار البيضاء",
        },
        {
          id: 2,
          name: "صوفي مارتان",
          role: "مديرة مطعم",
          location: "مراكش",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces",
          text: "تصميم مطعمنا تجاوز جميع توقعاتنا. الأجواء التي تم إنشاؤها تجذب عملاءنا وتعكس هويتنا بشكل مثالي. شكراً على هذا العمل الرائع!",
          rating: 5,
          project: "مطعم - مراكش",
        },
        {
          id: 3,
          name: "يوسف علوي",
          role: "الرئيس التنفيذي",
          location: "الرباط",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces",
          text: "تحسين مكاتبنا حسّن بشكل كبير أجواء العمل. موظفونا يقدّرون هذه المساحات الحديثة والوظيفية الجديدة. عمل ممتاز!",
          rating: 5,
          project: "مكتب تنفيذي - الرباط",
        },
        {
          id: 4,
          name: "فاطمة الزهراء",
          role: "مالكة شقة",
          location: "طنجة",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces",
          text: "أُعجبت بإبداع الفريق وحسن الاستماع. شقتي أصبحت الآن ملاذاً حقيقياً للراحة. شكراً على هذا التحوّل الرائع!",
          rating: 5,
          project: "شقة فاخرة - طنجة",
        },
        {
          id: 5,
          name: "كريم بنسعيد",
          role: "مالك فيلا",
          location: "الدار البيضاء",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces",
          text: "من التصميم إلى التنفيذ، كل شيء سار على أكمل وجه. فيلتنا تعكس الآن شخصيتنا وأسلوب حياتنا. عمل فني!",
          rating: 5,
          project: "فيلا تقليدية - الدار البيضاء",
        },
        {
          id: 6,
          name: "عائشة عمراني",
          role: "مالكة شقة",
          location: "الرباط",
          image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces",
          text: "تحسين مساحة شقتي كان تحدياً، لكن الفريق واجهه ببراعة. النتيجة: مساحة عملية وجمالية تتجاوز توقعاتي.",
          rating: 5,
          project: "تصميم استوديو - الرباط",
        },
      ],
    },
    contact: {
      title: "اتصل بنا",
      subtitle: "دعنا نناقش مشروعك",
      form: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "الهاتف",
        message: "رسالتك",
        send: "إرسال",
        sending: "جاري الإرسال...",
      },
      info: {
        address: "المغرب - جميع المدن",
        phone: "+212 XXX XXX XXX",
        email: "contact@mmdesign.ma",
      },
    },
    footer: {
      description: "M.M Design d'intérieur - مبتكرو المساحات الاستثنائية في المغرب",
      links: "روابط سريعة",
      contact: "اتصل",
      rights: "جميع الحقوق محفوظة",
    },
    whatsapp: {
      message: "مرحبا، أود مناقشة مشروع التصميم الداخلي الخاص بي.",
    },
  },
};
