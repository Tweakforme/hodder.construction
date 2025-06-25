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
}, 


{
  id: 6,
  title: "Petro-Canada Dallas Station", 
  category: "commercial",
  status: "completed",
  year: "2022", // Update with actual year
  location: "5150 Dallas Dr, Kamloops, BC",
  description: "Complete gas station and convenience store construction at 5150 Dallas Drive. This modern facility serves the growing Dallas area with fuel services, convenience shopping, and automotive amenities.",
  fullDescription: "Complete construction of a modern Petro-Canada gas station and convenience store facility at 5150 Dallas Drive in Kamloops. This comprehensive project involved building a full-service fuel station with multiple pump islands, a spacious convenience store, car wash facilities, and all associated infrastructure. The location strategically serves the growing Dallas area of Kamloops with 24/7 fuel services, convenience shopping, and automotive services including restrooms, air pumps, and ATM services.",
  features: [
    "Multi-pump fuel station with covered canopy",
    "Full convenience store with extensive product selection",
    "Modern car wash facilities",
    "24/7 accessible fuel services",
    "Customer restrooms and facilities", 
    "Air pump stations for tire service",
    "ATM and payment processing systems",
    "Petro-Points loyalty program integration",
    "Wheelchair accessible design throughout",
    "Commercial-grade fuel storage and safety systems",
    "Professional signage and exterior lighting",
    "Ample customer parking and easy traffic flow"
  ],
  specifications: {
    "Property Type": "Gas Station & Convenience Store",
    "Project Type": "New Commercial Construction",
    "Location": "Dallas Drive, Kamloops",
    "Construction Type": "Fuel Retail Facility",
    "Operating Hours": "6:00 AM - 11:00 PM Daily",
    "Special Features": "Car Wash, Multi-Service Fuel Station"
  },
  tags: ["Commercial", "Gas Station", "New Build", "Petro-Canada", "Dallas", "Convenience Store"],
  value: "Confidential", 
  imageCount: 4,
  folder: "petro-canada-dallas"
},

{
  id: 7,
  title: "CBS Parts - Kamloops Locations",
  category: "commercial", 
  status: "completed",
  year: "2023", // Update with actual year
  location: "575 Athabasca St W & 657 Sarcee St W, Kamloops, BC",
  description: "Renovated facilities for this heavy-duty truck parts supplier founded in 1983. Completed work at both their original 657 Sarcee St W location and their new expanded 575 Athabasca St W facility.",
  fullDescription: "Comprehensive renovation project for CBS Parts, British Columbia's leading independent supplier of heavy-duty truck and trailer aftermarket parts. This project involved renovating their original Sarcee Street location and constructing their new expanded facility on Athabasca Street. CBS Parts serves the transportation, logging, mining, construction, and emergency services industries across Western Canada. The new location features over 7,500 square feet of showroom space and maintains over $10 million in inventory to serve fleets, repair shops, and end users throughout the province.",
  features: [
    "7,500+ sqft showroom space at new location",
    "Heavy-duty parts storage and warehouse systems",
    "Professional customer service areas",
    "Inventory management and tracking systems",
    "Loading dock facilities for delivery trucks",
    "Specialized storage for hydraulic and pneumatic components", 
    "Professional parts cataloging and display systems",
    "Customer parking and accessibility features",
    "Office spaces for sales and administration",
    "Secure storage for high-value truck components",
    "Climate-controlled environment for sensitive parts",
    "Multi-location coordination and operations"
  ],
  specifications: {
    "Property Type": "Industrial Parts Supply Facility", 
    "Project Type": "Commercial Renovation & Expansion",
    "Locations": "575 Athabasca St W (New) & 657 Sarcee St W (Original)",
    "Construction Type": "Industrial/Warehouse Renovation",
    "Business Founded": "1983",
    "Service Area": "British Columbia & Western Canada"
  },
  tags: ["Commercial", "Industrial", "Renovation", "Heavy Duty Parts", "Transportation", "Warehouse"],
  value: "Confidential",
  imageCount: 21, 
  folder: "cbs-parts-kamloops"
},

{
  id: 8,
  title: "BC Fasteners & Tools",
  category: "commercial",
  status: "completed", 
  year: "2024", // Update with actual year
  location: "425 Mt Paul Way, Kamloops, BC",
  description: "Renovation of their new location at 425 Mt Paul Way. This 100% Canadian-owned supplier has been serving the Thompson-Okanagan since 1991 with industrial and construction supplies.",
  fullDescription: "Complete renovation and build-out of BC Fasteners & Tools' new Kamloops location at 425 Mt Paul Way. This project created a modern retail and warehouse facility for this 100% Canadian-owned company that has been serving the Thompson-Okanagan region since 1991. The new location provides improved accessibility and parking compared to their previous Dalhousie Drive location, while maintaining their extensive inventory of fasteners, power tools, hand tools, safety supplies, and industrial equipment for construction, manufacturing, and industrial companies throughout the region.",
  features: [
    "Modern retail showroom for tool and fastener display",
    "Extensive warehouse storage systems",
    "Professional customer service and sales areas", 
    "Loading and receiving facilities",
    "Inventory management and cataloging systems",
    "Power tool demonstration and testing areas",
    "Safety equipment display and fitting areas",
    "Improved customer parking and accessibility",
    "Administrative offices and customer consultation spaces",
    "Secure storage for high-value equipment",
    "Climate-controlled environment for sensitive materials",
    "Easy highway access for commercial customers"
  ],
  specifications: {
    "Property Type": "Industrial Supply Retail Facility",
    "Project Type": "Commercial Renovation & Relocation", 
    "Location": "Mt Paul Way Industrial Area",
    "Construction Type": "Retail/Warehouse Renovation",
    "Business Founded": "1991",
    "Service Area": "Thompson-Okanagan Region"
  },
  tags: ["Commercial", "Industrial Supply", "Renovation", "Tools", "Fasteners", "Canadian Owned"],
  value: "Confidential",
  imageCount: 0,
  folder: "bc-fasteners-kamloops"
},

{
  id: 9,
  title: "Erwin's Fine Baking & Deli", 
  category: "commercial",
  status: "completed",
  year: "2023", // Update with actual year  
  location: "419 Mt Paul Way, Kamloops, BC",
  description: "Renovation of this beloved European-style bakery that has maintained a tradition of excellence since 1972. Enhanced production facilities while preserving the authentic character of this Kamloops institution.",
  fullDescription: "Comprehensive renovation of Erwin's Fine Baking & Delicatessen, a beloved Kamloops institution that has been serving the community since 1972. This project involved relocating and renovating their facility at 419 Mt Paul Way, enhancing their production capabilities while preserving the authentic European bakery atmosphere that customers have come to love. The renovation included modern baking equipment, expanded retail space, improved customer seating, and enhanced food preparation areas while maintaining their commitment to traditional European baking methods and time-honoured recipes.",
  features: [
    "Modern commercial baking ovens and equipment",
    "Expanded retail bakery display cases",
    "Enhanced customer seating and dining area",
    "Professional deli and sandwich preparation areas",
    "Climate-controlled storage for ingredients and finished goods",
    "Improved customer accessibility and parking",
    "Traditional European bakery atmosphere preservation",
    "Fresh bread production and display systems",
    "Take-home meal preparation and packaging areas",
    "Professional cake decorating and custom order facilities",
    "Improved workflow for Red Seal certified bakers",
    "Enhanced food safety and sanitation systems"
  ],
  specifications: {
    "Property Type": "Commercial Bakery & Delicatessen",
    "Project Type": "Commercial Renovation & Relocation",
    "Location": "Mt Paul Way, Kamloops", 
    "Construction Type": "Food Service Renovation",
    "Business Founded": "1972",
    "Speciality": "European-style Traditional Baking"
  },
  tags: ["Commercial", "Bakery", "Renovation", "Food Service", "European", "Traditional", "Local Institution"],
  value: "Confidential",
  imageCount: 3,
  folder: "erwins-bakery-kamloops"
},

{
  id: 10,
  title: "Tumbleweed's Liquor Store",
  category: "commercial",
  status: "completed", 
  year: "2023", // Update with actual year
  location: "Downtown Kamloops, BC",
  description: "New downtown location for this family-owned business that takes great pride in providing the best customer service, prices and liquor selection in Kamloops, featuring a spectacular wine cellar and premium scotch selection.",
  fullDescription: "Complete commercial build-out for Tumbleweed's Liquor Store's new downtown Kamloops location. This project showcased our expertise in retail construction, featuring custom wine storage solutions, premium display areas, and modern point-of-sale infrastructure. The design maximizes product visibility while creating an inviting shopping environment for this beloved local business that has been serving the Kamloops community with the finest selection of wines, spirits, and craft beers.",
  features: [
    "Complete retail build-out from ground up",
    "Custom wine cellar construction with climate control", 
    "Premium product display systems and shelving",
    "Modern refrigeration systems for beer and wine",
    "Professional LED lighting design for optimal product showcase",
    "Secure storage areas and inventory management systems",
    "Accessible customer entrance and wide aisles",
    "Commercial-grade flooring with slip-resistant surfaces",
    "Modern point-of-sale infrastructure and customer service area",
    "Family-owned business atmosphere preservation"
  ],
  specifications: {
    "Property Type": "Retail Liquor Store",
    "Project Type": "New Commercial Build-out",
    "Location": "Downtown Kamloops",
    "Construction Type": "Retail Construction",
    "Special Features": "Wine Cellar, Premium Display Systems",
    "Business Focus": "Family-owned specialty liquor retail"
  },
  tags: ["Commercial", "Retail", "Liquor Store", "Downtown", "New Build", "Family Business"],
  value: "Confidential",
  imageCount: 1,
  folder: "tumbleweeds-liquor"
},



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