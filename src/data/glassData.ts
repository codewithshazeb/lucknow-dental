import { BusinessConfig, GlassProduct, GlassService, GalleryItem, FAQItem } from '../types';

export const defaultBusinessConfig: BusinessConfig = {
  name: 'Bansal Glass',
  tagline: 'Clarity in Glass. Excellence in Every Detail.',
  city: 'Lucknow',
  state: 'Uttar Pradesh',
  country: 'India',
  phone: '+91 98765 43210',
  whatsAppNumber: '919876543210',
  email: 'info@bansalglasslucknow.com',
  address: 'Shop / Workshop Address to be confirmed by owner, Lucknow',
  landmark: 'Lucknow, Uttar Pradesh',
  operatingHours: 'Monday – Saturday: 10:00 AM – 8:00 PM (Subject to owner confirmation)',
  serviceAreas: [
    'Gomti Nagar & Gomti Nagar Extension',
    'Hazratganj & Central Lucknow',
    'Aliganj & Vikas Nagar',
    'Indira Nagar & Ring Road',
    'Mahanagar & Nishatganj',
    'Amar Shaheed Path & Sushant Golf City',
    'Ashiyana & Kanpur Road',
    'Rajajipuram & Chowk',
    'Transport Nagar & Industrial Belt',
    'Chinhat & Faizabad Road Corridor'
  ],
  defaultWhatsAppMessage: 'Hello Bansal Glass, I am looking for glass supply and installation in Lucknow. Please help me with suitable options and a quotation.',
  ownerConfirmedFields: {
    phone: false,
    whatsApp: false,
    email: false,
    address: false,
    operatingHours: false
  }
};

export const glassProducts: GlassProduct[] = [
  {
    id: 'clear-float-glass',
    name: 'Clear / Float Glass',
    category: 'Basic & Architectural',
    shortDesc: 'Smooth, distortion-free foundational glass for everyday interior and architectural glazing.',
    detailedDesc: 'Standard high-transmittance float glass manufactured through the molten tin float process. It provides excellent optical clarity, uniform surface flatness, and forms the baseline substrate for cutting, polishing, beveling, frosting, and tempering.',
    commonApplications: [
      'Window panes and ventilator lites',
      'Cabinet and wardrobe shelf glazing',
      'Picture frames and display cases',
      'Table covers and showcase panels'
    ],
    keyBenefits: [
      'Cost-effective baseline glazing',
      'High natural light transmittance',
      'Easily cut and edge-finished on site or workshop',
      'Readily available in standard custom sizes'
    ],
    typicalThicknessRange: 'Customizable (Typically 3mm to 12mm upon requirement)',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80',
    isConfirmed: true
  },
  {
    id: 'toughened-tempered-glass',
    name: 'Toughened / Tempered Glass',
    category: 'Safety & Security',
    shortDesc: 'Thermally treated high-strength safety glass engineered to withstand high impact and thermal stress.',
    detailedDesc: 'Processed through controlled thermal tempering, creating balanced internal compressive stresses. Up to 4 to 5 times stronger than regular annealed glass of the same thickness. In the rare event of breakage, it crumbles into small granular pebbles rather than jagged shards.',
    commonApplications: [
      'Frameless glass doors and patch fittings',
      'Office cabin partitions and sound cubicles',
      'Bathroom shower enclosures and screens',
      'Balcony balustrades and staircase railings',
      'Shopfront displays and showroom entrance gates'
    ],
    keyBenefits: [
      'Superior impact resistance and mechanical strength',
      'High thermal endurance across weather fluctuations',
      'Crumbles into blunt safe granules upon breakage',
      'Mandatory standard for public and commercial safety'
    ],
    typicalThicknessRange: 'Customizable (Typically 8mm, 10mm, 12mm to 19mm upon project specs)',
    imageUrl: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80',
    isConfirmed: true
  },
  {
    id: 'laminated-glass',
    name: 'Laminated Glass',
    category: 'Safety & Security',
    shortDesc: 'Multi-layer safety glazing bonded with a durable interlayer that holds glass in place upon impact.',
    detailedDesc: 'Consists of two or more glass sheets bonded under heat and pressure with a resilient Polyvinyl Butyral (PVB) or SentryGlas interlayer. Even if cracked, the glass fragments adhere firmly to the interlayer, preventing penetration, collapse, and injury.',
    commonApplications: [
      'Overhead glass canopies and skylights',
      'Structural glass floors and staircase treads',
      'Acoustic soundproof partitions for boardroom cabins',
      'High-security showroom fronts and jewellery counters',
      'Rooftop railings and perimeter glass balustrades'
    ],
    keyBenefits: [
      'Zero fall-out risk upon impact or fracture',
      'Superior acoustic insulation against exterior city noise',
      'Blocks up to 99% of damaging ultraviolet radiation',
      'Enhanced security against forced entry'
    ],
    typicalThicknessRange: 'Custom configurations (e.g. 6.38mm, 8.38mm, 10.76mm, 12.76mm+)',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=900&q=80',
    isConfirmed: true
  },
  {
    id: 'frosted-satin-glass',
    name: 'Frosted / Satin Glass',
    category: 'Decorative & Textured',
    shortDesc: 'Acid-etched or sandblasted translucent glass for soft ambient light and privacy.',
    detailedDesc: 'Features a uniform matte translucent finish produced via precision acid etching or fine sandblasting. It diffuses incoming illumination to eliminate harsh glare while shielding interior spaces from outside view.',
    commonApplications: [
      'Bathroom windows and shower partition screens',
      'Doctor clinics and consultation cabin cubicles',
      'Residential wardrobe doors and kitchen cabinets',
      'Office conference room modesty bands and modesty panels'
    ],
    keyBenefits: [
      'Maintains privacy without darkening rooms',
      'Smooth satin touch resistant to finger marks',
      'Uniform diffused glare-free daylighting',
      'Custom etched pattern band options available'
    ],
    typicalThicknessRange: 'Customizable (Typically 5mm to 12mm upon requirement)',
    imageUrl: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80',
    isConfirmed: true
  },
  {
    id: 'tinted-glass',
    name: 'Tinted Glass',
    category: 'Acoustic & Energy-Efficient',
    shortDesc: 'Body-tinted glass that reduces solar heat gain and bright sunlight glare.',
    detailedDesc: 'Manufactured by adding metal oxides during float glass production, resulting in consistent color throughout the glass body. Common hues include bronze, grey, green, and blue. It absorbs solar radiation to lower indoor cooling demands.',
    commonApplications: [
      'Commercial building facades and window glazing',
      'Sun-facing residential windows and balconies',
      'Interior partition screens and table accents',
      'Automotive and architectural privacy panels'
    ],
    keyBenefits: [
      'Lowers harsh afternoon solar glare',
      'Reduces indoor heat build-up and air-conditioning strain',
      'Contemporary tinted architectural tone',
      'Uniform tint with zero peeling or bubbling'
    ],
    typicalThicknessRange: 'Customizable (Typically 4mm to 12mm upon requirement)',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
    isConfirmed: true
  },
  {
    id: 'reflective-glass',
    name: 'Reflective Glass',
    category: 'Acoustic & Energy-Efficient',
    shortDesc: 'Metallic-coated solar control glass offering daytime one-way privacy and heat deflection.',
    detailedDesc: 'Coated with a microscopic layer of metal oxides on one surface that acts like a semi-mirror. During daylight hours, it reflects excess solar radiation and provides daytime one-way visibility from inside to outside.',
    commonApplications: [
      'Exterior office facades and curtain wall glazing',
      'Showroom exterior frontages',
      'Balcony enclosures facing direct harsh sunlight',
      'Commercial high-rise window systems'
    ],
    keyBenefits: [
      'High thermal reflection to reduce cooling energy',
      'Effective daytime one-way privacy',
      'Distinctive mirrored architectural aesthetic',
      'Durable weather-resistant pyrolytic coating'
    ],
    typicalThicknessRange: 'Customizable (Typically 5mm to 10mm upon requirement)',
    imageUrl: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=900&q=80',
    isConfirmed: true
  },
  {
    id: 'fluted-reeded-glass',
    name: 'Fluted / Reeded Glass',
    category: 'Decorative & Textured',
    shortDesc: 'Linear ribbed textured architectural glass providing vintage texture and modern optical privacy.',
    detailedDesc: 'Molded with parallel vertical flutes or reeded ribs on one face. The vertical ribs refract light in dynamic linear patterns, distorting silhouette views while transmitting warm ambient light.',
    commonApplications: [
      'Modern kitchen cabinetry and crockery unit shutters',
      'Bespoke room dividers and sliding barn doors',
      'Bathroom shower privacy screens',
      'Luxury residential entrance doors and vanity partitions'
    ],
    keyBenefits: [
      'Trending architectural interior design aesthetic',
      'Optical obscurity without loss of natural illumination',
      'Tactile ribbed texture that catches ambient lighting',
      'Pairs elegantly with black aluminium and brass profiles'
    ],
    typicalThicknessRange: 'Customizable (Typically 5mm to 10mm upon requirement)',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80',
    isConfirmed: true
  },
  {
    id: 'patterned-decorative-glass',
    name: 'Patterned / Decorative Glass',
    category: 'Decorative & Textured',
    shortDesc: 'Embossed textured glass featuring geometric, floral, or abstract tactile patterns.',
    detailedDesc: 'Rolled while semi-molten between textured rollers to imprint distinctive tactile motifs. Ideal for spaces where diffused light and decorative visual separation are desired.',
    commonApplications: [
      'Residential entrance door panels and sidelites',
      'Temple / Pooja room doors and partitions',
      'Interior partition screens and transoms',
      'Ventilator windows and bathroom privacy panes'
    ],
    keyBenefits: [
      'Decorative aesthetic character',
      'Diffuses direct vision for dependable privacy',
      'Scratch-concealing tactile surface texture',
      'Available in diverse decorative texture patterns'
    ],
    typicalThicknessRange: 'Customizable (Typically 4mm to 8mm upon requirement)',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    isConfirmed: true
  },
  {
    id: 'mirror-glass',
    name: 'Mirror Glass',
    category: 'Mirrors & Coloured',
    shortDesc: 'High-reflectivity silver-backed float glass for vanity, dressing, and spatial expansion.',
    detailedDesc: 'Manufactured by depositing a reflective silver layer followed by protective copper and waterproof paint coats onto distortion-free float glass. Delivers true-to-life reflections without optical distortion.',
    commonApplications: [
      'Bathroom vanity mirrors and LED backlit mirrors',
      'Gym, dance studio, and fitness center full-wall mirrors',
      'Wardrobe sliding shutters and dressing consoles',
      'Living room accent mirrors and restaurant wall claddings'
    ],
    keyBenefits: [
      'Visually doubles perceived room dimensions',
      'High-definition reflection with zero ripple distortion',
      'Custom edge beveling, pencil polish, and hole drilling',
      'Available with moisture-resistant copper-free backing'
    ],
    typicalThicknessRange: 'Customizable (Typically 4mm, 5mm, 6mm upon application)',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80',
    isConfirmed: true
  },
  {
    id: 'lacquered-back-painted-glass',
    name: 'Lacquered / Back-Painted Glass',
    category: 'Mirrors & Coloured',
    shortDesc: 'Opaque colored glass with a factory-applied durable cured lacquer backing.',
    detailedDesc: 'Float glass coated on the reverse side with premium opaque lacquer that is heat-cured. Provides a sleek glossy colored surface that is hygienic, non-porous, and impervious to moisture and grease.',
    commonApplications: [
      'Modern modular kitchen splashbacks and dado walls',
      'Office writing boards and conference room marker walls',
      'Wardrobe door claddings and interior column wraps',
      'Commercial reception feature walls and counter fronts'
    ],
    keyBenefits: [
      'Seamless, grout-free easy wipe cleaning',
      'Vibrant opaque color depth behind protective glass',
      'Highly resistant to humidity, steam, and everyday stains',
      'Sophisticated contemporary interior finish'
    ],
    typicalThicknessRange: 'Customizable (Typically 4mm, 5mm, 6mm upon application)',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80',
    isConfirmed: true
  },
  {
    id: 'double-glazed-insulated-glass',
    name: 'Double-Glazed / Insulated Glass (DGU)',
    category: 'Acoustic & Energy-Efficient',
    shortDesc: 'Hermetically sealed dual glass panels separated by an air/gas spacer for thermal & sound insulation.',
    detailedDesc: 'Consists of two glass panes separated by an aluminium spacer containing molecular sieve desiccant, sealed with primary and secondary polyisobutylene / silicone sealants. Creates an insulating barrier against heat transfer and street traffic noise.',
    commonApplications: [
      'UPVC and aluminium high-performance window systems',
      'Soundproof master bedroom windows facing busy roads',
      'Commercial building facades with central air-conditioning',
      'Hospitality guest rooms and hospital quiet zones'
    ],
    keyBenefits: [
      'Significant reduction in outdoor traffic and horn noise',
      'Lowers summer heat ingress, slashing AC electricity bills',
      'Eliminates interior glass condensation during winter',
      'Enhances overall building energy efficiency'
    ],
    typicalThicknessRange: 'Custom configurations (e.g. 5mm + 12A + 5mm, custom overall depths)',
    imageUrl: 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&w=900&q=80',
    isConfirmed: true
  },
  {
    id: 'low-iron-glass',
    name: 'Low-Iron Glass (Extra Clear)',
    category: 'Basic & Architectural',
    shortDesc: 'Ultra-clear float glass with reduced iron content, eliminating the green edge tint.',
    detailedDesc: 'Produced from silica sand with negligible ferric oxide content. Unlike standard float glass which displays a noticeable greenish tint, Low-Iron glass is crystal clear, rendering colors behind it with 100% fidelity.',
    commonApplications: [
      'Luxury jewellery and timepiece display vitrines',
      'Premium frameless shower cubicles and glass doors',
      'High-end museum display vitrines and art galleries',
      'Back-painted glass requiring pure white or pastel shades'
    ],
    keyBenefits: [
      'Near-invisible transparency with crystal clarity',
      'No greenish edge tint on thick glass panels',
      'True-color rendering for merchandise and paint',
      'Refined luxury finish for high-end residential interiors'
    ],
    typicalThicknessRange: 'Customizable (Typically 6mm, 8mm, 10mm, 12mm upon requirement)',
    imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=900&q=80',
    isConfirmed: true
  },
  {
    id: 'low-e-glass',
    name: 'Low-E Glass (Low Emissivity)',
    category: 'Acoustic & Energy-Efficient',
    shortDesc: 'Microscopic silver-coated glass that reflects infrared heat while allowing visible daylight.',
    detailedDesc: 'Features an invisible coating that reflects long-wave infrared thermal energy while permitting short-wave visible light to pass freely. Keeps interiors cool during hot Indian summers and preserves indoor warmth in winter.',
    commonApplications: [
      'Energy-conscious residential villas and apartments',
      'Corporate office glass envelopes and curtain walls',
      'Skylights and large glass sunrooms',
      'Eco-rated commercial architectural constructions'
    ],
    keyBenefits: [
      'Blocks radiant heat without making rooms dark',
      'Substantial reduction in air conditioning load',
      'Protects interior furniture and fabrics from fading',
      'Standard requirement for green building standards'
    ],
    typicalThicknessRange: 'Customizable (Typically incorporated into 6mm to 12mm or DGU units)',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
    isConfirmed: true
  }
];

export const glassServices: GlassService[] = [
  {
    id: 'glass-doors-entrances',
    slug: 'glass-doors-and-entrances',
    name: 'Glass Doors and Entrances',
    headline: 'Frameless & Framed Architectural Glass Entry Systems',
    description: 'Precision fabrication and installation of toughened glass entry doors, patch fitting pivot systems, floor spring systems, and sleek sliding glass door mechanisms for offices, commercial stores, and residences.',
    typicalApplications: [
      'Office main entry swing doors with stainless steel handles',
      'Patch-fitting frameless glass double doors',
      'Heavy-duty floor spring hydraulic pivot doors',
      'Sliding glass pocket doors for conference rooms & homes'
    ],
    technicalConsiderations: 'Requires 10mm or 12mm toughened safety glass. Floor springs, patch fittings, and locks must be calculated against door leaf weight, width, and traffic cycle expectations.',
    imageUrl: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80',
    isConfirmed: true
  },
  {
    id: 'glass-partitions-cabins',
    slug: 'glass-partitions-and-office-cabins',
    name: 'Glass Partitions and Office Cabins',
    headline: 'Modern Acoustic & Demountable Glass Partitions',
    description: 'Bespoke glass partition walls and executive cabin enclosures tailored for corporate workplaces, co-working studios, and clinics across Lucknow. Facilitates open-space visual connectivity while maintaining sound privacy.',
    typicalApplications: [
      'Executive director cabin enclosures',
      'Conference and board room acoustic glass dividers',
      'Slim aluminium profile channel glass partitions',
      'Frosted band / custom privacy film partition walls'
    ],
    technicalConsiderations: 'Glass thickness (10mm / 12mm toughened or acoustic laminated) and perimeter profile anchoring depend on slab-to-ceiling heights and floor deflection tolerances.',
    imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=900&q=80',
    isConfirmed: true
  },
  {
    id: 'shopfront-showroom-glass',
    slug: 'shopfront-and-showroom-glass',
    name: 'Shopfront and Showroom Glass',
    headline: 'High-Clarity Retail Facades & Commercial Showfronts',
    description: 'Expansive structural glass facades designed for retail shops, apparel boutiques, jewellery showrooms, and automotive dealerships to maximize product visibility from street frontage.',
    typicalApplications: [
      'Retail mall and high-street storefront glazing',
      'Jewellery showroom security glass displays',
      'Commercial automobile display facades',
      'Restaurant full-height panoramic glass frontages'
    ],
    technicalConsiderations: 'Requires wind-load calculations, heavy-duty structural glazing silicone or spider fittings, and safety glass compliance (12mm toughened or laminated).',
    imageUrl: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=900&q=80',
    isConfirmed: true
  },
  {
    id: 'residential-windows',
    slug: 'residential-glass-windows',
    name: 'Residential Glass Windows',
    headline: 'Custom Glazing for UPVC, Aluminium & Wooden Windows',
    description: 'Precision glass supply and replacement for residential window systems. From soundproof double glazing along busy roads to tinted solar-control glass for sunny balconies.',
    typicalApplications: [
      'Sliding and casement window glass replacement',
      'Soundproof double-glazed window installations',
      'Tinted heat-reduction glass for sun-facing bedrooms',
      'Fixed panoramic picture windows for living spaces'
    ],
    technicalConsiderations: 'Glass selection depends on window frame depth, wind exposure, floor level, and acoustic or thermal performance priorities.',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80',
    isConfirmed: true
  },
  {
    id: 'shower-enclosures',
    slug: 'bathroom-glass-and-shower-enclosures',
    name: 'Bathroom Glass & Shower Enclosures',
    headline: 'Custom Frameless Shower Cubicles & Wet Partitions',
    description: 'Custom-measured toughened glass shower cubicles, sliding shower enclosures, and walk-in fixed glass panels that keep bathroom dry zones clean, hygienic, and luxurious.',
    typicalApplications: [
      'Frameless corner 90-degree shower enclosures',
      'Wall-to-wall sliding glass shower screens',
      'Single fixed walk-in glass shower divider panels',
      'Fluted glass private shower partition cubicles'
    ],
    technicalConsiderations: 'Manufactured exclusively in 8mm or 10mm toughened glass with grade 304 stainless steel or solid brass hardware to withstand moisture and avoid corrosion.',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80',
    isConfirmed: true
  },
  {
    id: 'mirror-supply-fitting',
    slug: 'mirror-supply-and-fitting',
    name: 'Mirror Supply and Fitting',
    headline: 'Precision Mirror Cutting, Edge Beveling & Wall Mounting',
    description: 'Complete mirror supply and professional installation across Lucknow for vanity bathrooms, commercial gyms, dance academies, dressing alcoves, and decorative feature walls.',
    typicalApplications: [
      'Custom vanity mirrors with LED backlighting',
      'Full-height gym, fitness studio & yoga center wall mirrors',
      'Beveled edge mirrors for living rooms & foyers',
      'Wardrobe sliding door mirror claddings'
    ],
    technicalConsiderations: 'Requires specialized neutral-cure mirror adhesives and mechanical safety brackets. Surface flatness of the backing wall is inspected to prevent distortion.',
    imageUrl: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=900&q=80',
    isConfirmed: true
  },
  {
    id: 'shelves-table-tops',
    slug: 'glass-shelves-and-table-tops',
    name: 'Glass Shelves and Table Tops',
    headline: 'Heavy-Duty Tempered Glass Tops & Precision Cut Shelving',
    description: 'Custom cut and polished glass surfaces for dining tables, coffee tables, executive desks, display niche shelves, and bar cabinets with flawless pencil or beveled edges.',
    typicalApplications: [
      'Dining table protective glass tops (8mm, 10mm, 12mm)',
      'Conference room heavy-duty glass table surfaces',
      'Retail showcase floating glass display shelves',
      'Corner bathroom glass racks and bracket shelving'
    ],
    technicalConsiderations: 'Edge treatments include pencil polish, flat polish, or 1-inch bevel polish. Corner radius finishing (round corners) ensures child-safe usage.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    isConfirmed: true
  },
  {
    id: 'decorative-designer-glass',
    slug: 'decorative-and-designer-glass',
    name: 'Decorative and Designer Glass',
    headline: 'Fluted, Etched, Stained & Custom Back-Painted Accents',
    description: 'Artistic and architectural glass customization including reeded textures, acid-etched geometric motifs, back-painted lacquered panels, and colored glass highlights.',
    typicalApplications: [
      'Modern kitchen splashback lacquered glass walls',
      'Pooja room frosted & etched glass doors',
      'Decorative backlit room divider screens',
      'Reception counter decorative glass cladding'
    ],
    technicalConsiderations: 'Back-painted glass requires heat curing and non-acidic silicones for mounting. Fluted orientation (vertical vs horizontal) is confirmed prior to cutting.',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80',
    isConfirmed: true
  },
  {
    id: 'railings-balustrades',
    slug: 'glass-railings-and-balustrades',
    name: 'Glass Railings and Balustrades',
    headline: 'Structural Balcony Railings & Staircase Glass Balustrades',
    description: 'Architectural safety railings using toughened or laminated glass supported by stainless steel spigots, continuous aluminium base shoes, or side point fixings.',
    typicalApplications: [
      'Balcony glass railings with top handrail channel',
      'Staircase frameless glass balustrades',
      'Terrace perimeter glass safety parapets',
      'Atrium and mezzanine glass guardrails'
    ],
    technicalConsiderations: 'Strict safety codes apply: minimum 12mm toughened or 13.52mm laminated glass with load-tested base anchoring into RCC concrete slabs.',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=900&q=80',
    isConfirmed: true
  },
  {
    id: 'aluminium-glass-work',
    slug: 'aluminium-and-glass-work',
    name: 'Aluminium and Glass Work',
    headline: 'Profile Framing, Structural Glazing & Aluminium Systems',
    description: 'Comprehensive fabrication integrating aluminium sections with glass for doors, windows, partitions, office cubicles, and shopfront structures across Lucknow.',
    typicalApplications: [
      'Aluminium frame office cabin partitions',
      'Powder-coated sliding aluminium window frames',
      'Heavy-duty aluminium entrance door frames',
      'Commercial curtain wall framing'
    ],
    technicalConsiderations: 'Aluminium gauge thickness, anodizing / powder-coating finish, and weather-seal EPDM gaskets are selected to match durability requirements.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
    isConfirmed: true
  },
  {
    id: 'cutting-edge-polishing',
    slug: 'glass-cutting-and-edge-polishing',
    name: 'Glass Cutting and Edge Polishing',
    headline: 'Precision Sizing, Beveling, Hole Drilling & Cut-Outs',
    description: 'In-workshop glass processing services including CNC precision cutting, diamond wheel edge polishing, hole drilling for patch fittings, and hinge cut-outs.',
    typicalApplications: [
      'Flat edge polishing with arrissed safety corners',
      'Pencil round edge finishing for tabletop safety',
      'Beveled mirror borders (0.5 inch to 1.5 inch bevel)',
      'Hole drilling for electrical cut-outs, handles & hinges'
    ],
    technicalConsiderations: 'All drilling, cut-outs, and edge polishing must be executed BEFORE the glass is thermally tempered. Toughened glass cannot be cut or drilled.',
    imageUrl: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80',
    isConfirmed: true
  },
  {
    id: 'glass-replacement-repair',
    slug: 'glass-replacement-and-repair',
    name: 'Glass Replacement and Repair',
    headline: 'Site Measurement, Removal & Replacement of Broken Glazing',
    description: 'Prompt replacement of broken, cracked, or cloudy glass panes in windows, shopfronts, doors, and partitions for residential and commercial premises in Lucknow.',
    typicalApplications: [
      'Broken window pane removal and replacement',
      'Cracked tabletop or cabinet glass replacement',
      'Shopfront glass emergency replacement',
      'Damaged shower door hardware and glass replacement'
    ],
    technicalConsiderations: 'Safe extraction of damaged broken glass, clean frame rebate preparation, and re-glazing with proper gaskets and silicone sealant.',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80',
    isConfirmed: true
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Minimalist Glass Living Room Divider',
    category: 'Residential Interiors',
    description: 'Floor-to-ceiling glass partition screen dividing living and dining spaces with matte black aluminium grid framing.',
    suitableGlass: '10mm Toughened Clear or Fluted Glass',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    note: 'Illustrative Design Inspiration'
  },
  {
    id: 'gal-2',
    title: 'Frameless Shower Enclosure with Black Accents',
    category: 'Residential Interiors',
    description: 'Custom 90-degree corner shower partition with minimalist hardware maintaining a dry, clean bathroom layout.',
    suitableGlass: '10mm Toughened Safety Glass with Anti-Limescale Coating',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80',
    note: 'Illustrative Design Inspiration'
  },
  {
    id: 'gal-3',
    title: 'Executive Conference Room Acoustic Cabins',
    category: 'Office Partitions',
    description: 'Clean acoustic glass cabin walls providing sound containment while retaining natural perimeter daylight.',
    suitableGlass: '12mm Toughened or 10.76mm Acoustic Laminated Glass',
    imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=900&q=80',
    note: 'Illustrative Design Inspiration'
  },
  {
    id: 'gal-4',
    title: 'Corporate Main Entry Glass Pivot Doors',
    category: 'Glass Doors',
    description: 'Heavy-duty hydraulic floor spring glass entrance door with long stainless steel tubular pull handles.',
    suitableGlass: '12mm Toughened Clear Glass with Patch Fittings',
    imageUrl: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80',
    note: 'Illustrative Design Inspiration'
  },
  {
    id: 'gal-5',
    title: 'Luxury Retail Mall Showroom Facade',
    category: 'Commercial Spaces',
    description: 'High-transmittance panoramic shopfront glass creating an inviting merchandise display with minimal visual obstruction.',
    suitableGlass: '12mm Low-Iron Extra Clear Toughened Glass',
    imageUrl: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=900&q=80',
    note: 'Illustrative Design Inspiration'
  },
  {
    id: 'gal-6',
    title: 'Modern Fluted Glass Sliding Partition Door',
    category: 'Mirrors and Decorative Glass',
    description: 'Textured reeded glass sliding partition providing vintage interior character and soft diffused natural lighting.',
    suitableGlass: '8mm or 10mm Fluted Reeded Architectural Glass',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80',
    note: 'Illustrative Design Inspiration'
  },
  {
    id: 'gal-7',
    title: 'Vanity Mirror with Warm Backlight Illumination',
    category: 'Mirrors and Decorative Glass',
    description: 'Float silver mirror with beveled edges and integrated warm LED backlighting for modern residential vanity decor.',
    suitableGlass: '5mm / 6mm Copper-Free Silver Float Mirror',
    imageUrl: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=900&q=80',
    note: 'Illustrative Design Inspiration'
  },
  {
    id: 'gal-8',
    title: 'High-Performance Double-Glazed Facade Windows',
    category: 'Windows and Facades',
    description: 'Energy-saving double-glazed units providing solar heat deflection and urban traffic acoustic insulation.',
    suitableGlass: 'DGU 24mm Unit (6mm Low-E + 12mm Air Gap + 6mm Clear)',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
    note: 'Illustrative Design Inspiration'
  },
  {
    id: 'gal-9',
    title: 'Balcony Glass Balustrade with Stainless Steel Spigots',
    category: 'Commercial Spaces',
    description: 'Clean architectural balcony safety railing system with clear unobstructed view of the surrounding landscape.',
    suitableGlass: '12mm Toughened or Laminated Safety Glass',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=900&q=80',
    note: 'Illustrative Design Inspiration'
  }
];

export const faqs: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Products',
    question: 'What is the main difference between ordinary float glass and toughened (tempered) glass?',
    answer: 'Standard float glass breaks into sharp, dangerous shards when impacted. Toughened glass undergoes specialized high-temperature heating and rapid air-quenching, making it 4 to 5 times stronger. In the rare event of breakage, toughened glass shatters into harmless, blunt granules, making it the mandatory standard for doors, partitions, and railings.'
  },
  {
    id: 'faq-2',
    category: 'Products',
    question: 'Can toughened glass be cut, trimmed, or drilled after tempering?',
    answer: 'No. Toughened glass CANNOT be cut, trimmed, or drilled after the thermal tempering process. Any cutting or drilling attempted on tempered glass will cause the entire sheet to shatter instantly. All precision measurements, cut-outs, hole drilling, and edge polishing must be completed before the glass enters the tempering furnace.'
  },
  {
    id: 'faq-3',
    category: 'Quotations',
    question: 'How do I request a quotation for glass supply or installation in Lucknow?',
    answer: 'You can easily share your approximate measurements (height × width), glass type, and site location in Lucknow directly through WhatsApp or our website enquiry form. Our team discusses suitable options and provides an initial estimate. Final quotation is confirmed after exact site verification where required.'
  },
  {
    id: 'faq-4',
    category: 'Installation',
    question: 'Do you offer site visits and measurement assistance in Lucknow?',
    answer: 'Yes. Once preliminary requirements and project scope are discussed via phone or WhatsApp, site visits across Lucknow localities (such as Gomti Nagar, Aliganj, Hazratganj, Indira Nagar, etc.) can be scheduled to record exact laser measurements and inspect wall and floor conditions.'
  },
  {
    id: 'faq-5',
    category: 'Products',
    question: 'Which glass is recommended for bathroom shower enclosures?',
    answer: 'We recommend 8mm or 10mm Toughened Safety Glass fitted with grade 304 stainless steel or solid brass moisture-resistant hardware. For enhanced privacy, fluted or frosted satin toughened glass can also be specified.'
  },
  {
    id: 'faq-6',
    category: 'Installation',
    question: 'What glass is best for commercial office partitions to reduce sound?',
    answer: 'For standard executive cabins, 10mm or 12mm toughened glass provides strong acoustic isolation. For high-privacy boardrooms and meeting spaces, acoustic laminated glass (with sound-dampening PVB interlayers) or double-glazed partition systems deliver superior decibel reduction.'
  },
  {
    id: 'faq-7',
    category: 'Quotations',
    question: 'Are website quotations instant or guaranteed?',
    answer: 'No website estimate can be guaranteed until exact measurements, floor levels, wall strength, hardware grade, site access, and safety specifications are evaluated. All initial estimates provide an informed budgetary starting point.'
  },
  {
    id: 'faq-8',
    category: 'Maintenance',
    question: 'How should architectural glass and mirrors be cleaned and maintained?',
    answer: 'Use a clean microfiber cloth and a mild, ammonia-free glass cleaning solution or diluted isopropyl alcohol. Avoid abrasive scrubbers, harsh acids, or steel wool that can scratch glass surfaces or degrade mirror silver backing.'
  }
];

export const quotationSteps = [
  {
    step: '01',
    title: 'Select Glass Type or Service',
    description: 'Browse our catalogue to identify the right glass type (toughened, fluted, mirror, etc.) or installation service needed for your space.'
  },
  {
    step: '02',
    title: 'Share Approximate Dimensions & Location',
    description: 'Send rough height, width, project location in Lucknow, and photos/sketches via WhatsApp or our enquiry form.'
  },
  {
    step: '03',
    title: 'Requirement Discussion & Quotation',
    description: 'Bansal Glass discusses hardware specifications, safety requirements, and provides a customized transparent quotation.'
  },
  {
    step: '04',
    title: 'Site Measurement & Installation',
    description: 'Laser site measurements, glass fabrication, safety checks, and professional installation arrangements are finalized.'
  }
];
