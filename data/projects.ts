// /data/projects.js - Single source of truth for all projects

// Type definitions
export interface Project {
  id: number
  title: string
  category: 'residential' | 'commercial' | 'renovation'
  status: 'completed' | 'current'
  year: string
  location: string
  description: string
  fullDescription: string
  features: string[]
  specifications: Record<string, string>
  tags: string[]
  value: string
  imageCount: number
  folder: string
}

export interface ProjectStats {
  total: number
  residential: number
  commercial: number
  renovation: number
  completed: number
  current: number
}

export const projects: Project[] = [
  {
    id: 1,
    title: "1450 Capilano Drive",
    category: "residential",
    status: "completed",
    year: "2016",
    location: "Kamloops, BC",
    description: "Stunning residential rancher featuring a custom swimming pool and dedicated pool house. This exceptional property showcases our expertise in luxury residential construction.",
    fullDescription: "This exceptional rancher-style home represents the perfect blend of indoor-outdoor living. Featuring a custom swimming pool and dedicated pool house, this property showcases our commitment to creating luxurious residential spaces. The single-level design maximizes functionality while maintaining elegant design principles throughout.",
    features: [
      "Single-level rancher design",
      "Custom swimming pool",
      "Dedicated pool house",
      "Indoor-outdoor living spaces",
      "High-end interior finishes", 
      "Professional landscaping",
      "Premium construction materials"
    ],
    specifications: {
      "Property Type": "Residential Rancher",
      "Year Completed": "2016",
      "Special Features": "Swimming Pool & Pool House",
      "Construction Type": "Custom Build",
      "Location": "Capilano Drive, Kamloops"
    },
    tags: ["Custom Home", "Rancher", "Swimming Pool", "Pool House"],
    value: "Confidential",
    imageCount: 31,
    folder: "1450-capilano" // Just the folder name
  },
  {
    id: 2,
    title: "1470 Capilano Place",
    category: "residential",
    status: "completed",
    year: "2016",
    location: "Kamloops, BC",
    description: "Absolutely stunning view estate property with tons of privacy, located on over 4.5 acres featuring resort living with guest house. Sprawling rancher with heated infinity saltwater pool and breathtaking South Thompson River views.",
    fullDescription: "This absolutely stunning view estate property offers tons of privacy on over 4.5 acres and features true resort-style living with a detached guest house. The sprawling rancher design with two attached 3-car garages has been updated throughout and features an abundance of windows to showcase the spectacular views of the South Thompson River, mountains, and green space.",
    features: [
      "4.5 acres of privacy with South Thompson River views",
      "Detached guest house with heated floors and garage",
      "Heated infinity saltwater fiberglass pool",
      "Two attached 3-car garages plus entertainment space",
      "High-end kitchen with Sub-Zero, Jenn-Aire, and Miele appliances",
      "Radiant heated floors throughout kitchen and bathrooms",
      "Full daylight walkout basement with 9' ceilings",
      "Wet bar with Jenn-Aire beverage center",
      "Indoor/outdoor entertainment space with theatre and projector",
      "Fully serviced RV hookups"
    ],
    specifications: {
      "Property Type": "Estate Rancher",
      "Year Completed": "2016",
      "Lot Size": "4.5 Acres",
      "Special Features": "Guest House, Infinity Pool, RV Hookups",
      "Garages": "Two 3-Car Attached + Guest House Garage",
      "Basement": "Full Daylight Walkout",
      "Views": "South Thompson River & Mountains"
    },
    tags: ["Estate Home", "4.5 Acres", "Guest House", "Infinity Pool", "River Views"],
    value: "Confidential",
    imageCount: 35,
    folder: "1470-capilano"
  },

  {
  id: 3,
  title: "304 Rue Cheval Noir",
  category: "residential",
  status: "completed",
  year: "2016",
  location: "Tobiano, BC",
  description: "Tobiano's newest custom rancher on the golf course. This 5BR, 4bath nearly 4000sqft home features exceptional layout and finishing details with west-facing views across the 4th green to the mountains and lake.",
  fullDescription: "This stunning custom rancher represents the pinnacle of golf course living at Tobiano. Nearly 4000 square feet of carefully planned living space showcases exceptional finishing details throughout. The main floor features an open concept design with floor-to-ceiling windows and sliders opening to a covered patio with breathtaking west-facing views across the 4th green to the mountains and lake beyond.",
  features: [
    "Nearly 4000 sqft of luxury living space",
    "5 bedrooms and 4 full bathrooms",
    "Golf course location with 4th green views",
    "Open concept living, dining and gourmet kitchen",
    "Floor-to-ceiling windows throughout",
    "Covered walk-out patio with west-facing views",
    "Full-size walk-in pantry",
    "Oversized heated garage with mudroom",
    "Basement with potential 1BR in-law suite",
    "Separate entrance for basement suite",
    "Professionally landscaped oversized lot",
    "Underground irrigation system"
  ],
  specifications: {
    "Property Type": "Custom Golf Course Rancher",
    "Year Completed": "2024",
    "Square Footage": "Nearly 4000 sqft",
    "Bedrooms": "5",
    "Bathrooms": "4",
    "Location": "Golf Course Front",
    "Views": "4th Green, Mountains & Lake",
    "Special Features": "In-law Suite Potential"
  },
  tags: ["Golf Course", "Custom Rancher", "Mountain Views", "In-law Suite", "Tobiano"],
  value: "Confidential",
  imageCount: 25,
  folder: "304-tobiano"
},
{
  id: 4,
  title: "Tumbleweeds Neighbourhood Pub",
  category: "renovation",
  status: "completed",
  year: "2021", // Update with actual rebuild year
  location: "5220 Bogetti Rd, Dallas, BC",
  description: "Complete commercial reconstruction of Tumbleweeds Neighbourhood Pub following fire damage. This project restored the beloved local establishment with modern amenities while maintaining its welcoming neighborhood atmosphere.",
  fullDescription: "Following significant fire damage, Hodder Construction undertook the complete reconstruction of Tumbleweeds Neighbourhood Pub. This comprehensive renovation project required careful planning to restore the popular local gathering place while incorporating modern building standards, updated kitchen facilities, and enhanced safety systems. The rebuild maintained the pub's warm, neighborhood atmosphere that the community had come to love.",
  features: [
    "Complete fire damage reconstruction",
    "Modern commercial kitchen renovation",
    "Updated fire safety and suppression systems",
    "Accessible design compliance",
    "Enhanced ventilation systems",
    "Modern electrical and plumbing infrastructure",
    "Comfortable dining and bar areas renovation",
    "Professional commercial-grade finishes",
    "Improved parking and accessibility",
    "Full restoration to operational standards"
  ],
  specifications: {
    "Property Type": "Commercial Restaurant/Pub",
    "Year Completed": "2016", // Update as needed
    "Project Type": "Fire Damage Renovation", 
    "Building Use": "Restaurant & Pub",
    "Location": "Bogetti Road, Dallas, Kamloops",
    "Construction Type": "Commercial Renovation"
  },
  tags: ["Renovation", "Commercial", "Restaurant", "Fire Rebuild", "Pub", "Community Hub"],
  value: "Confidential",
  imageCount: 20, // Update with actual count
  folder: "tumbleweeds-pub"
},

{
  id: 5,
  title: "Heffley Creek Residence",
  category: "residential",
  status: "completed",
  year: "2005",
  location: "Heffley Creek, BC",
  description: "A beautiful, large home built in the Heffley Creek area. This home is full of eye-catching visuals and innovative architecture featuring striking timber frame construction and panoramic valley views.",
  fullDescription: "This stunning Heffley Creek residence showcases our expertise in distinctive architectural design and quality craftsmanship. The home features an innovative timber frame construction with dramatic angular rooflines and extensive use of natural materials. Large windows and covered outdoor living spaces take full advantage of the beautiful rural setting, while the unique circular window feature creates a striking focal point that defines the home's character.",
  features: [
    "Distinctive timber frame construction",
    "Innovative angular architectural design",
    "Large covered outdoor living spaces",
    "Extensive use of natural materials",
    "Panoramic rural valley views",
    "Unique circular window feature",
    "Multi-level design maximizing views",
    "Integration with natural landscape",
    "High-quality wood and stone finishes",
    "Spacious open-concept living areas",
    "Professional landscaping and outdoor spaces",
    "Rural privacy with mountain backdrop"
  ],
  specifications: {
    "Property Type": "Custom Residential Home",
    "Year Completed": "2005",
    "Location": "Heffley Creek Valley",
    "Construction Style": "Timber Frame",
    "Setting": "Rural/Mountain Views",
    "Special Features": "Innovative Architecture, Circular Window"
  },
  tags: ["Custom Home", "Timber Frame", "Rural", "Mountain Views", "Innovative Design", "Heffley Creek"],
  value: "Confidential",
  imageCount: 63,
  folder: "heffley-creek-residence"
}
  // Add your other 15 projects here - just copy this format
]

// Helper functions to automatically generate what we need
export const getProject = (id: string | number): Project | undefined => {
  return projects.find(project => project.id === parseInt(id.toString()))
}

export const getProjectImages = (project: Project): string[] => {
  return Array.from({ length: project.imageCount }, (_, i) => 
    `/projects/${project.folder}/${i + 1}.jpg`
  )
}

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects
  return projects.filter(project => project.category === category)
}

export const getProjectStats = (): ProjectStats => {
  return {
    total: projects.length,
    residential: projects.filter(p => p.category === 'residential').length,
    commercial: projects.filter(p => p.category === 'commercial').length,
    renovation: projects.filter(p => p.category === 'renovation').length,
    completed: projects.filter(p => p.status === 'completed').length,
    current: projects.filter(p => p.status === 'current').length
  }
}