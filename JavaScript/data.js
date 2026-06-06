const data = {
  medicine: [
    {
      id: 1,
      name: "Dr Lyes",
      specialty: "Cardiologist",

      description:
        "Experienced cardiologist specialized in heart disease diagnosis, preventive care, and advanced cardiac treatments.",

      rating: 4.8,
      reviewsCount: 120,

      price: 4000,

      availability: "Monday - Friday",

      experience: "12 years",

      location: "Algiers, Algeria",

      image: "../images/doctors/doctor1.jpg",

      icon: "👨‍⚕️",
      badges: [
        " Board Certified",
        "Board Certified",
        "Online Available",
        " Same Day Booking",
      ],

      reviews: [
        {
          user: "Sarah",
          comment: "Very professional and helpful.",
        },

        {
          user: "Yacine",
          comment: "Excellent consultation and clear explanations.",
        },
      ],
    },

    {
      id: 2,
      name: "Dr Marwa",
      specialty: "Dentist",

      description:
        "Professional dentist providing cosmetic dentistry and oral healthcare services.",

      rating: 4.6,
      reviewsCount: 85,

      price: 2500,

      availability: "Saturday - Thursday",

      experience: "8 years",

      location: "Oran, Algeria",

      image: "../images/doctors/dentist1.jpg",

      icon: "🦷",
      badges: [
        " Board Certified",
        "7+ Years Exp.",
        "Online Available",
        " Flexible scheduling",
      ],

      reviews: [
        {
          user: "Lina",
          comment: "Very gentle and professional.",
        },
      ],
    },

    {
      id: 3,
      name: "Dr Mohamed",
      specialty: "Dentist",

      description:
        "Specialized in advanced dental care, teeth whitening, and orthodontics.",

      rating: 4.6,
      reviewsCount: 65,

      price: 3650,

      availability: "Monday - Saturday",

      experience: "6 years",

      location: "Constantine, Algeria",

      image: "../images/doctors/dentist2.jpg",

      icon: "🦷",
      badges: [
        "Teeth Whitening",
        "Orthodontics",
        "Modern Equipment",
        "Flexible scheduling",
      ],

      reviews: [
        {
          user: "Hichem",
          comment: "Amazing service and modern clinic.",
        },
      ],
    },
  ],

  development: [
    {
      id: 4,
      name: "Lyes Dev",
      specialty: "Frontend Developer",

      description:
        "Builds responsive and modern web applications using React and JavaScript.",

      rating: 4.9,
      reviewsCount: 150,

      price: 1000,

      availability: "Remote / Freelance",

      experience: "5 years",

      location: "Remote",

      image: "../images/developers/dev1.jpg",

      icon: "💻",
      badges: [
        "Responsive Websites",
        "React Specialist",
        "Remote Available",
        "Fast Delivery",
      ],

      reviews: [
        {
          user: "Karim",
          comment: "Delivered the website perfectly on time.",
        },
      ],
    },
  ],

  education: [
    {
      id: 5,
      name: "amine Lembi",
      specialty: "Math Teacher",

      description:
        "Private mathematics tutor for middle school, high school, and university students.",

      rating: 4.7,
      reviewsCount: 72,

      price: 2000,

      availability: "Evenings & Weekends",

      experience: "7 years",

      location: "Blida, Algeria",

      image: "../images/tutors/tutor1.jpg",

      icon: "📚",
      badges: [
        "Exam Prep",
        "7+ Years Teaching",
        "All Levels",
        "Online Sessions",
      ],

      reviews: [
        {
          user: "Diana",
          comment: "Explains lessons very clearly.",
        },
      ],
    },
  ],
  law: [
    {
      id: 6,
      name: " Yacine bendjedou",
      specialty: "Business Lawyer",

      description:
        "Experienced lawyer specialized in business law, contracts, and legal consulting for companies.",

      rating: 4.9,
      reviewsCount: 96,

      price: 5000,

      availability: "Monday - Thursday",

      experience: "10 years",

      location: "Algiers, Algeria",

      image: "../images/lawyers/lawyer1.jpg",

      icon: "⚖️",
      badges: [
        "Business Contracts",
        "10+ Years Experience",
        "Legal Consulting",
        "Certified Lawyer",
      ],

      reviews: [
        {
          user: "Karim",
          comment: "Very professional legal advice.",
        },
      ],
    },

    {
      id: 7,
      name: "Maître Melek",
      specialty: "Family Lawyer",

      description:
        "Specialized in family law, divorce cases, and legal counseling.",

      rating: 4.7,
      reviewsCount: 74,

      price: 4200,

      availability: "Sunday - Wednesday",

      experience: "7 years",

      location: "Oran, Algeria",

      image: "../images/lawyers/lawyer2.jpg",

      icon: "⚖️",
      badges: [
        "Family Law",
        "Divorce Cases",
        "Legal Support",
        "Client Focused",
      ],

      reviews: [
        {
          user: "Lina",
          comment: "Very understanding and supportive.",
        },
      ],
    },
  ],

  psychology: [
    {
      id: 8,
      name: "Dr Sirine",
      specialty: "Clinical Psychologist",

      description:
        "Provides therapy sessions for anxiety, stress management, and emotional wellbeing.",

      rating: 4.8,
      reviewsCount: 110,

      price: 3500,

      availability: "Monday - Friday",

      experience: "9 years",

      location: "Constantine, Algeria",

      image: "../images/psychology/psy1.jpg",

      icon: "🧠",
      badges: [""],
      badges: [
        "Stress Management",
        "Therapy Sessions",
        "Mental Wellness",
        "Online Consultation",
      ],

      reviews: [
        {
          user: "Diana",
          comment: "Very calm and understanding therapist.",
        },
      ],
    },

    {
      id: 9,
      name: " Dr Hichem",
      specialty: "Child Psychologist",

      description:
        "Specialized in child behavior, school anxiety, and emotional support for children.",

      rating: 3.6,
      reviewsCount: 58,

      price: 3000,

      availability: "Saturday - Thursday",

      experience: "6 years",

      location: "Blida, Algeria",

      image: "../images/psychology/psy2.jpg",

      icon: "🧠",
      badges: [
        "Child Therapy",
        "Behavior Analysis",
        "Emotional Support",
        "School Anxiety Help",
      ],

      reviews: [
        {
          user: "Sarah",
          comment: "Helped my child improve a lot.",
        },
      ],
    },
  ],

  design: [
    {
      id: 10,
      name: "Sarah design",
      specialty: "UI/UX Designer",

      description:
        "Creates modern interfaces, mobile app designs, and user experiences for digital products.",

      rating: 4.9,
      reviewsCount: 140,

      price: 2500,

      availability: "Remote / Freelance",

      experience: "5 years",

      location: "Remote",

      image: "../images/design/design1.jpg",

      icon: "🎨",
      badges: [
        "UI/UX Design",
        "Mobile Interfaces",
        "Modern Aesthetics",
        "Fast Delivery",
      ],

      reviews: [
        {
          user: "Hichem",
          comment: "Amazing modern designs and fast delivery.",
        },
      ],
    },

    {
      id: 11,
      name: "Karim Brand",
      specialty: "Brand Designer",

      description:
        "Specialized in logos, branding identity, and visual communication.",

      rating: 4.7,
      reviewsCount: 88,

      price: 2200,

      availability: "Monday - Saturday",

      experience: "4 years",

      location: "Algiers, Algeria",

      image: "../images/design/design2.jpg",

      icon: "🎨",
      badges: [
        "Logo Design",
        "Brand Identity",
        "Creative Direction",
        "Professional Branding",
      ],
      reviews: [
        {
          user: "Yacine",
          comment: "Created an excellent logo for my startup.",
        },
      ],
    },
  ],
};
