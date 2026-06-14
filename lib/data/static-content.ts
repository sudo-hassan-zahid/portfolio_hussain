export const staticHeroImages = [
  {
    id: 1,
    imageUrl: "/images/lawyer/law1.jpg",
    alt: "Hussain Zahid - Legal Expert",
    captionName: "Hussain Zahid",
    captionTitle: "Shariah & Law Specialist",
    isActive: true,
    sortOrder: 0,
  },
];

export const staticExperiences = [
  {
    id: 1,
    period: "2024 - Present",
    role: "Certified Tax Advisor",
    firm: "FBR Tax Filing & Consultancy",
    description:
      "Advising individuals and businesses on NTN registration, FBR tax filing, returns, filer status, and regular tax compliance.",
    isActive: true,
    sortOrder: 0,
  },
  {
    id: 2,
    period: "2023 - Present",
    role: "Court Practice",
    firm: "RWP/ISB Session Courts",
    description:
      "Practicing before Rawalpindi and Islamabad session courts with a focus on criminal matters, case preparation, drafting, and client representation.",
    isActive: true,
    sortOrder: 1,
  },
  // {
  //   id: 3,
  //   period: "2023 - Present",
  //   role: "Licensed Mediator",
  //   firm: "Dispute Resolution Practice",
  //   description:
  //     "Supporting clients through structured mediation and settlement-focused dispute resolution where practical, efficient outcomes are possible.",
  //   isActive: true,
  //   sortOrder: 2,
  // },
];

export const staticEducations = [
  {
    id: 1,
    title: "BA/LLB (Hons) Shariah and Law",
    issuer: "International Islamic University Islamabad",
    year: "Education",
    detail: "Shariah & Law",
    isActive: true,
    sortOrder: 0,
  },
];

export const staticCertifications = [
  {
    id: 1,
    title: "Certified Tax Advisor",
    issuer: "Institute of Corporate and Taxation (ICT) Pakistan",
    year: "Certification",
    detail: "Tax Advisory",
    isActive: true,
    sortOrder: 0,
  },
  {
    id: 2,
    title: "Licensed Mediator",
    issuer: "Mediation Practice",
    year: "Active",
    detail: "ADR",
    isActive: true,
    sortOrder: 1,
  },
  {
    id: 3,
    title: "RWP/ISB Session Courts Practice",
    issuer: "Rawalpindi & Islamabad",
    year: "Active",
    detail: "Session Courts",
    isActive: true,
    sortOrder: 2,
  },
];

export const staticTestimonials = [
  {
    id: 1,
    quote:
      "Hussain handles our FBR business tax filing with excellent work quality, speed, and accuracy. The process has been smooth and reliable from start to finish.",
    author: "Khawar Shehzad",
    title: "Owner, Golden Five Star General Store, Rawalpindi",
    rating: 5,
    isActive: true,
    sortOrder: 0,
  },
  {
    id: 2,
    quote:
      "He helped with FBR NTN business tax filing, returns, and tax consultancy from business registration through regular filings. I was confused at the start, but he made everything clear.",
    author: "Jalal Khan Khattak",
    title: "Owner, Khattak Super Store, Rawalpindi",
    rating: 5,
    isActive: true,
    sortOrder: 1,
  },
  {
    id: 3,
    quote:
      "I needed to become a filer and was very anxious about the process. Hussain handled the work calmly and made it much easier than I expected.",
    author: "Rehan Nafees",
    title: "Government Employee",
    rating: 5,
    isActive: true,
    sortOrder: 2,
  },
];

export const staticSiteContent = {
  heroImages: staticHeroImages,
  experiences: staticExperiences,
  educations: staticEducations,
  certifications: staticCertifications,
  testimonials: staticTestimonials,
};

export type SiteContent = typeof staticSiteContent;
