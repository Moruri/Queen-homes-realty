/* ============================================
   Queen Homes Realty - Property Database
   Each property has a unique ID used in URLs
   ============================================ */

var PROPERTIES = [
  {
    id: "amethyst-kilimani",
    title: "Amethyst — Luxury Apartments for Sale Near Kilimani",
    price: "KES 7,000,000",
    priceNum: 7000000,
    status: "sale",
    type: "Apartment",
    location: "Kilimani, Nairobi, Kenya",
    beds: 3,
    baths: 2,
    sqft: "1,400",
    parking: 1,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop"
    ],
    description: "Welcome to Amethyst, a luxury apartment development located in the heart of Kilimani, one of Nairobi's most sought-after neighborhoods. This stunning 3-bedroom apartment offers contemporary living with premium finishes throughout.\n\nThe spacious open-plan living and dining area features large windows that flood the space with natural light. The modern kitchen comes fully fitted with quality cabinets, granite countertops, and ample storage. Each bedroom is generously sized with built-in wardrobes, and the master bedroom includes an en-suite bathroom.\n\nResidents enjoy access to a rooftop terrace, gym, children's play area, and 24/7 security.",
    amenities: ["24/7 Security", "Backup Generator", "Rooftop Terrace", "Gym / Fitness Center", "Children's Play Area", "Borehole Water", "Covered Parking", "Lift / Elevator", "CCTV Surveillance", "Modern Kitchen", "En-suite Master", "Balcony"]
  },
  {
    id: "capital-garden-ruiru",
    title: "Capital Garden — Luxury Apartments for Sale",
    price: "KES 7,300,000",
    priceNum: 7300000,
    status: "sale",
    type: "Apartment",
    location: "Ruiru, Kiambu, Kenya",
    beds: 3,
    baths: 2,
    sqft: "1,100",
    parking: 1,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=600&h=400&fit=crop"
    ],
    description: "Capital Garden is a modern residential development in Ruiru offering spacious 3-bedroom apartments designed for comfortable family living. The development features contemporary architecture with quality finishes.\n\nEach unit includes an open-plan kitchen, generous living spaces, and private balconies with green views. The master bedroom has a walk-in closet and en-suite bathroom.\n\nThe compound offers landscaped gardens, ample parking, a children's play area, and round-the-clock security. Located minutes from Thika Superhighway with easy access to Nairobi CBD.",
    amenities: ["24/7 Security", "Backup Generator", "Landscaped Gardens", "Children's Play Area", "Borehole Water", "Covered Parking", "CCTV Surveillance", "Modern Kitchen", "En-suite Master", "Balcony", "Water Storage", "Perimeter Wall"]
  },
  {
    id: "karen-villa",
    title: "Exclusive Karen Villa with Pool",
    price: "KES 35,000,000",
    priceNum: 35000000,
    status: "sale",
    type: "Villa",
    location: "Karen, Nairobi, Kenya",
    beds: 5,
    baths: 4,
    sqft: "4,500",
    parking: 3,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=400&fit=crop"
    ],
    description: "This exclusive villa in Karen sits on a half-acre plot surrounded by mature trees and landscaped gardens. The property features 5 spacious bedrooms, a private swimming pool, and expansive outdoor entertainment areas.\n\nThe ground floor includes a grand entrance foyer, formal living and dining rooms, a family room, modern kitchen with pantry, and a guest bedroom with en-suite. Upstairs features the master suite with walk-in closet, private balcony, and luxury bathroom, plus 3 additional bedrooms.\n\nAdditional features include staff quarters, a 3-car garage, solar water heating, borehole, and mature landscaping throughout.",
    amenities: ["Swimming Pool", "Staff Quarters", "3-Car Garage", "Solar Heating", "Borehole Water", "Mature Garden", "CCTV Surveillance", "Electric Fence", "Modern Kitchen", "En-suite Bedrooms", "Fireplace", "Laundry Room"]
  },
  {
    id: "westlands-2br",
    title: "Modern 2BR Apartment, Westlands",
    price: "KES 5,000,000",
    priceNum: 5000000,
    status: "sale",
    type: "Apartment",
    location: "Westlands, Nairobi, Kenya",
    beds: 2,
    baths: 2,
    sqft: "950",
    parking: 1,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=600&h=400&fit=crop"
    ],
    description: "A modern 2-bedroom apartment in the heart of Westlands, perfect for young professionals or couples. The apartment features an open-plan living area, modern kitchen with built-in appliances, and two well-sized bedrooms.\n\nLocated within walking distance of Sarit Centre, Westgate Mall, and numerous restaurants and cafes. The building offers secure parking, a gym, and 24/7 security.\n\nAn excellent entry-level investment in one of Nairobi's most dynamic neighborhoods with strong rental demand.",
    amenities: ["24/7 Security", "Gym", "Covered Parking", "Lift / Elevator", "CCTV Surveillance", "Modern Kitchen", "En-suite Master", "Fiber Internet Ready", "Water Storage", "Backup Generator"]
  },
  {
    id: "lesonia-mlolongo",
    title: "Lesonia — Premium Townhouse, Mlolongo",
    price: "KES 8,400,000",
    priceNum: 8400000,
    status: "sale",
    type: "Townhouse",
    location: "Mlolongo, Machakos, Kenya",
    beds: 4,
    baths: 3,
    sqft: "2,800",
    parking: 2,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop"
    ],
    description: "Lesonia offers premium 4-bedroom townhouses in a gated community in Mlolongo. Each unit features spacious rooms, modern finishes, and a private garden area.\n\nThe ground floor has an open-plan living and dining area, fitted kitchen, guest cloakroom, and access to the private garden. The first floor has 3 bedrooms including the master en-suite with walk-in closet. The top floor features a family room that can serve as a 4th bedroom.\n\nThe estate has excellent amenities including a clubhouse, swimming pool, playground, and jogging track. Located along Mombasa Road with easy access to JKIA and Nairobi CBD.",
    amenities: ["Gated Community", "Swimming Pool", "Clubhouse", "Playground", "Jogging Track", "Private Garden", "Fitted Kitchen", "En-suite Master", "Walk-in Closet", "Visitor Parking", "CCTV Surveillance", "Borehole Water"]
  },
  {
    id: "kileleshwa-2br-rent",
    title: "Modern 2BR Apartment, Kileleshwa",
    price: "KES 85,000",
    priceNum: 85000,
    status: "rent",
    type: "Apartment",
    location: "Kileleshwa, Nairobi, Kenya",
    beds: 2,
    baths: 2,
    sqft: "1,100",
    parking: 1,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop"
    ],
    description: "A beautifully furnished 2-bedroom apartment available for rent in the leafy suburb of Kileleshwa. The apartment features modern finishes, an open-plan living area, and a fully equipped kitchen.\n\nBoth bedrooms are spacious with built-in wardrobes. The master has an en-suite bathroom. The apartment also has a separate laundry area and a private balcony.\n\nIdeal for professionals or small families looking for a quiet, well-connected neighborhood close to Lavington and Westlands.",
    amenities: ["Furnished", "24/7 Security", "Backup Generator", "Covered Parking", "Lift / Elevator", "Balcony", "Fitted Kitchen", "En-suite Master", "Fiber Internet", "Water Storage"]
  },
  {
    id: "skyline-penthouse-westlands",
    title: "Skyline Penthouse, Westlands",
    price: "KES 22,000,000",
    priceNum: 22000000,
    status: "sale",
    type: "Penthouse",
    location: "Westlands, Nairobi, Kenya",
    beds: 4,
    baths: 3,
    sqft: "3,200",
    parking: 2,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop"
    ],
    description: "An exceptional penthouse apartment in Westlands offering panoramic views of Nairobi's skyline. This 4-bedroom duplex penthouse spans two floors with floor-to-ceiling windows and a private rooftop terrace.\n\nThe main level features a grand living room, formal dining area, gourmet kitchen with island, and guest suite. The upper level houses the master suite with walk-in closet and luxury bathroom, plus two additional bedrooms.\n\nPremium building amenities include concierge service, infinity pool, gym, and underground parking.",
    amenities: ["Rooftop Terrace", "Panoramic Views", "Infinity Pool", "Gym", "Concierge", "Underground Parking", "Floor-to-Ceiling Windows", "Gourmet Kitchen", "Walk-in Closets", "Smart Home System", "En-suite Bedrooms", "Elevator Access"]
  },
  {
    id: "lavington-3br-rent",
    title: "Spacious 3BR, Lavington",
    price: "KES 120,000",
    priceNum: 120000,
    status: "rent",
    type: "Apartment",
    location: "Lavington, Nairobi, Kenya",
    beds: 3,
    baths: 2,
    sqft: "1,600",
    parking: 1,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=600&h=400&fit=crop"
    ],
    description: "A spacious 3-bedroom apartment for rent in Lavington, one of Nairobi's most prestigious residential areas. The apartment offers generous living spaces and modern finishes throughout.\n\nFeatures include an open-plan kitchen and living area, three large bedrooms with built-in wardrobes, master en-suite, and a utility area. The apartment has a private balcony overlooking the compound's landscaped gardens.\n\nThe building offers 24/7 security, backup power, and ample parking. Walking distance to Valley Arcade and Lavington Mall.",
    amenities: ["24/7 Security", "Backup Generator", "Covered Parking", "Landscaped Gardens", "Balcony", "Fitted Kitchen", "En-suite Master", "Built-in Wardrobes", "Water Storage", "Fiber Internet Ready"]
  },
  {
    id: "ruaka-maisonette",
    title: "Elegant 4BR Maisonette, Ruaka",
    price: "KES 18,500,000",
    priceNum: 18500000,
    status: "sale",
    type: "Maisonette",
    location: "Ruaka, Kiambu, Kenya",
    beds: 4,
    baths: 3,
    sqft: "2,400",
    parking: 2,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop"
    ],
    description: "An elegant 4-bedroom maisonette in a gated estate in Ruaka. This family home offers spacious interiors, quality finishes, and a private garden.\n\nThe ground floor features a large living room, dining area, modern fitted kitchen, and guest cloakroom. Upstairs, you'll find 4 bedrooms including the master suite with en-suite bathroom and walk-in closet. All bedrooms have built-in wardrobes.\n\nThe estate offers excellent amenities and is located close to Ruaka Town, schools, and the Northern Bypass for easy access to Nairobi.",
    amenities: ["Gated Estate", "Private Garden", "DSQ", "Fitted Kitchen", "En-suite Master", "Walk-in Closet", "Built-in Wardrobes", "Borehole Water", "Backup Generator", "CCTV Surveillance", "Children's Playground", "Perimeter Wall"]
  },
  {
    id: "brookside-kilimani",
    title: "Brookside Heights — Kilimani",
    price: "KES 12,000,000",
    priceNum: 12000000,
    status: "sale",
    type: "Apartment",
    location: "Kilimani, Nairobi, Kenya",
    beds: 3, baths: 3, sqft: "1,800", parking: 1,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=600&h=400&fit=crop"],
    description: "Brookside Heights is a premium development in Kilimani offering spacious 3-bedroom apartments with top-tier finishes. Each unit features an open-plan design, large windows, and private balcony.\n\nAmenities include a rooftop pool, gym, co-working lounge, and concierge service. Located near Yaya Centre and Prestige Plaza.",
    amenities: ["Rooftop Pool", "Gym", "Co-working Lounge", "Concierge", "Covered Parking", "Lift", "CCTV", "Backup Generator", "En-suite Master", "Balcony", "Fiber Internet", "Smart Access"]
  },
  {
    id: "karen-garden-villa",
    title: "Karen Garden Estate Villa",
    price: "KES 45,000,000",
    priceNum: 45000000,
    status: "sale",
    type: "Villa",
    location: "Karen, Nairobi, Kenya",
    beds: 6, baths: 5, sqft: "5,200", parking: 3,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&h=800&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=400&fit=crop"],
    description: "A magnificent 6-bedroom villa set on one acre in the prestigious Karen estate. Features include a grand entrance, formal dining, family room, home office, and a state-of-the-art kitchen.\n\nOutdoor highlights include a heated swimming pool, manicured gardens, outdoor BBQ area, and staff quarters. The property has solar panels, borehole, and a standby generator.",
    amenities: ["Heated Pool", "1-Acre Plot", "Staff Quarters", "Home Office", "BBQ Area", "Solar Panels", "Borehole", "Generator", "Electric Fence", "CCTV", "3-Car Garage", "Mature Trees"]
  },
  {
    id: "parklands-view",
    title: "Parklands View Apartment",
    price: "KES 95,000",
    priceNum: 95000,
    status: "rent",
    type: "Apartment",
    location: "Westlands, Nairobi, Kenya",
    beds: 2, baths: 1, sqft: "850", parking: 1,
    image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=1200&h=800&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop"],
    description: "A well-maintained 2-bedroom apartment in Parklands area of Westlands, ideal for young professionals. Open-plan living, modern kitchen, and a quiet compound.\n\nClose to Aga Khan Hospital, Diamond Plaza, and major bus routes. The building offers secure parking and 24-hour security.",
    amenities: ["24/7 Security", "Covered Parking", "Modern Kitchen", "Water Storage", "Quiet Compound", "Near Hospital", "Public Transport", "Fiber Ready", "Balcony", "Built-in Wardrobes"]
  },
  {
    id: "lavington-townhouse",
    title: "Lavington Green Townhouse",
    price: "KES 28,000,000",
    priceNum: 28000000,
    status: "sale",
    type: "Townhouse",
    location: "Lavington, Nairobi, Kenya",
    beds: 4, baths: 4, sqft: "3,100", parking: 2,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=800&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop"],
    description: "A luxurious 4-bedroom townhouse in a boutique gated community in Lavington. Features three levels of living space with premium finishes, private garden, and rooftop terrace.\n\nThe ground floor has an open living and dining area flowing to the garden. The kitchen is fully fitted with Bosch appliances. Upstairs features the bedrooms, all en-suite. The rooftop offers city views and entertainment space.",
    amenities: ["Gated Community", "Private Garden", "Rooftop Terrace", "Bosch Kitchen", "All En-suite", "DSQ", "2-Car Garage", "Backup Generator", "Borehole", "CCTV", "Intercom", "Smart Locks"]
  },
  {
    id: "riverside-kileleshwa",
    title: "Riverside 3BR — Kileleshwa",
    price: "KES 9,500,000",
    priceNum: 9500000,
    status: "sale",
    type: "Apartment",
    location: "Kileleshwa, Nairobi, Kenya",
    beds: 3, baths: 2, sqft: "1,350", parking: 1,
    image: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=1200&h=800&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=600&h=400&fit=crop"],
    description: "A beautifully designed 3-bedroom apartment near Riverside Drive in Kileleshwa. The apartment features contemporary finishes, an open-plan layout, and green views from every room.\n\nAmenities include a swimming pool, gym, and children's play area. Walking distance to schools, shopping, and restaurants.",
    amenities: ["Swimming Pool", "Gym", "Children's Play Area", "24/7 Security", "Covered Parking", "Lift", "Backup Generator", "En-suite Master", "Balcony", "Fiber Internet"]
  },
  {
    id: "monarch-penthouse-kilimani",
    title: "Monarch Penthouse — Kilimani",
    price: "KES 32,000,000",
    priceNum: 32000000,
    status: "sale",
    type: "Penthouse",
    location: "Kilimani, Nairobi, Kenya",
    beds: 4, baths: 4, sqft: "3,500", parking: 2,
    image: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=1200&h=800&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop"],
    description: "The Monarch Penthouse is a crown jewel of Kilimani living. This duplex penthouse features 4 bedrooms, all en-suite, with a private rooftop garden and 360-degree views of Nairobi.\n\nThe living spaces are expansive with double-height ceilings, imported marble floors, and a designer kitchen. The master suite occupies an entire wing with a spa bathroom and dressing room.",
    amenities: ["Private Rooftop Garden", "360° Views", "Double-height Ceilings", "Marble Floors", "Spa Bathroom", "Designer Kitchen", "Wine Cellar", "Smart Home", "Private Lift", "2 Parking Bays", "Concierge", "Infinity Pool"]
  },
  {
    id: "ruaka-studio-rent",
    title: "Cozy 1BR Studio — Ruaka",
    price: "KES 55,000",
    priceNum: 55000,
    status: "rent",
    type: "Apartment",
    location: "Ruaka, Kiambu, Kenya",
    beds: 1, baths: 1, sqft: "550", parking: 0,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&h=800&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop"],
    description: "A cozy and modern 1-bedroom studio apartment in Ruaka, perfect for a single professional or student. The unit features an open-plan design with a kitchenette, living area, and bedroom.\n\nThe building is secure with CCTV and an on-site caretaker. Located near Two Rivers Mall and Ruaka Town with easy access to public transport.",
    amenities: ["24/7 Security", "CCTV", "On-site Caretaker", "Water Storage", "Kitchenette", "Built-in Wardrobe", "Tiled Floors", "Near Shopping", "Public Transport", "Quiet Neighborhood"]
  },
  {
    id: "grand-lavington-mansion",
    title: "Grand Lavington Mansion",
    price: "KES 55,000,000",
    priceNum: 55000000,
    status: "sale",
    type: "Villa",
    location: "Lavington, Nairobi, Kenya",
    beds: 6, baths: 5, sqft: "6,000", parking: 4,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop",
    gallery: ["https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop","https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=400&fit=crop"],
    description: "A grand 6-bedroom mansion on a prime 1.5-acre plot in Lavington. This architectural masterpiece combines classical elegance with modern luxury. Features include a grand foyer, formal reception rooms, library, home cinema, and a chef's kitchen.\n\nThe outdoor spaces include a heated infinity pool, tennis court, manicured gardens, and a separate guest cottage. Staff quarters accommodate up to 4 staff members.",
    amenities: ["Infinity Pool", "Tennis Court", "Home Cinema", "Library", "Guest Cottage", "Staff Quarters", "4-Car Garage", "Solar System", "Borehole", "Generator", "Smart Security", "1.5-Acre Plot"]
  }
];

// Helper to find property by ID
function getPropertyById(id) {
  for (var i = 0; i < PROPERTIES.length; i++) {
    if (PROPERTIES[i].id === id) return PROPERTIES[i];
  }
  return null;
}
