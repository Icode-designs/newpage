import bedroomCleaning from "assets/1-3_bedroom_cleaning.jpg";
import apartmentCleaning from "assets/apartment_cleaning.jpg";
import houseCleaning from "assets/house_cleaning.jpg";
import schoolCleaning from "assets/sch_cleaning.jpg";
import studioCleaning from "assets/studio_cleaning.jpg";
import warehouseCleaning from "assets/warehouse_cleaning.jpg";
import spaceCleaning from "assets/space_cleaning.jpg";
import test_img1 from "assets/test-img1.jpg";
import test_img2 from "assets/test-img2.jpg";
import test_img3 from "assets/test-img3.jpg";

export const ServiceSectionData = [
  {
    id: 1,
    name: "school cleaning",
    image: schoolCleaning,
    desc: "We provide a thorough and detailed clean, reaching areas that are often overlooked during regular cleaning.",
    moreDesc:
      "Experience a deeper level of clean with our professional deep cleaning services. Designed to tackle dirt, grime, and hidden buildup, our comprehensive approach leaves your space refreshed and revitalized. Perfect for seasonal cleaning, post-renovation cleanup, or preparing for special occasions, our expert team ensures every corner is spotless. Let us customize a deep cleaning plan that suits your needs and enjoy a healthier, more comfortable environment.",
    about:
      "Our deep cleaning services cover every corner, ensuring your space looks and feels revitalized. From scrubbing tiles and grout to cleaning inside appliances and sanitizing high-touch surfaces, we leave no detail overlooked. Our trained team uses specialized tools and eco-friendly products to eliminate dust, allergens, and bacteria, promoting a healthier and more hygienic environment.",
    includes: {
      includesDesc:
        "Our deep cleaning service is customizable to meet your specific needs, ensuring your space looks and feels its absolute best. Whether it’s a one-time clean or part of a regular maintenance schedule, we’re here to deliver exceptional results.",
      includesDetails: [
        {
          title: "Classrooms & Offices",
          services: [
            "Detailed dusting of desks, chairs, and shelves",
            "Sanitizing high-touch surfaces like door handles and switches",
            "Vacuuming carpets and mopping floors",
            "Trash removal and bin sanitization",
          ],
        },
        {
          title: "Restrooms",
          services: [
            "Deep cleaning and disinfection of toilets and sinks",
            "Refilling soap and paper supplies",
            "Scrubbing walls, tiles, and mirrors",
            "Emptying and sanitizing trash bins",
          ],
        },
        {
          title: "Hallways & Common Areas",
          services: [
            "Sweeping, mopping, and floor buffing",
            "Spot cleaning walls and lockers",
            "Dusting railings and furniture",
            "Glass cleaning for doors and windows",
          ],
        },
        {
          title: "Additional Services (Upon Request):",
          services: [
            "Window cleaning (interior only)",
            "Deep carpet shampooing",
            "Air duct cleaning",
            "Post-event or seasonal cleaning",
          ],
        },
      ],
    },
    summary:
      "Our school cleaning services ensure a clean, safe, and healthy environment for students and staff.",
    duration: "4-8 hours",
    availability: "Mon-Fri",
  },
  {
    id: 2,
    name: "warehouse cleaning",
    image: warehouseCleaning,
    desc: "From retail spaces to warehouses and medical facilities, we offer comprehensive cleaning solutions tailored to meet your specific needs.",
    moreDesc:
      "Our warehouse cleaning services focus on removing dust, debris, and hazardous waste to create a safer and more efficient workspace. Whether it's routine maintenance or a one-time deep clean, our team uses industrial-grade equipment to handle jobs of all sizes with precision and care.",
    about:
      "Keeping a warehouse clean is essential for safety, productivity, and compliance. We provide thorough cleaning solutions, including floor scrubbing, debris removal, and sanitizing common areas to maintain high standards of hygiene and organization.",
    includes: {
      includesDesc:
        "Our warehouse cleaning service is designed to handle large-scale spaces while focusing on safety and operational efficiency.",
      includesDetails: [
        {
          title: "Warehouse Floors",
          services: [
            "Sweeping and power-scrubbing floors",
            "Spill and stain removal",
            "Degreasing surfaces",
            "Polishing concrete where applicable",
          ],
        },
        {
          title: "Storage Areas",
          services: [
            "Dusting and cleaning shelves and storage units",
            "Removing cobwebs and debris",
            "Cleaning around pallets and racks",
            "Trash removal",
          ],
        },
        {
          title: "Offices and Break Rooms",
          services: [
            "Wiping down desks and common areas",
            "Disinfecting touchpoints",
            "Floor vacuuming and mopping",
            "Restocking supplies upon request",
          ],
        },
        {
          title: "Additional Services (Upon Request):",
          services: [
            "High dusting (ceilings, vents)",
            "Exterior warehouse cleaning",
            "Equipment deep cleaning",
            "Post-construction warehouse cleaning",
          ],
        },
      ],
    },
    summary:
      "Maintain a clean, safe, and organized warehouse environment with our professional cleaning services.",
    duration: "6-10 hours",
    availability: "Mon-Fri",
  },
  {
    id: 3,
    name: "studio cleaning",
    image: studioCleaning,
    desc: "Our comprehensive services cover everything from dusting and vacuuming to deep cleaning kitchens, bathrooms, and living spaces.",
    moreDesc:
      "Whether it's an art studio, recording space, or home studio, we understand the need for a clean, dust-free environment. Our customized services cater to delicate equipment and unique layouts, ensuring everything is spotless and preserved.",
    about:
      "Studios require special attention to maintain cleanliness without disrupting delicate items or setups. We use careful methods to clean surfaces, sanitize high-touch areas, and create a tidy, welcoming atmosphere for creativity and productivity.",
    includes: {
      includesDesc:
        "Our studio cleaning service adapts to the specific needs of creative and working environments.",
      includesDetails: [
        {
          title: "Work Areas",
          services: [
            "Dusting surfaces, including electronics and equipment",
            "Vacuuming carpets and area rugs",
            "Sanitizing tables, desks, and workstations",
            "Organizing and tidying up loose items",
          ],
        },
        {
          title: "Kitchenette & Bathrooms",
          services: [
            "Deep cleaning sinks and countertops",
            "Disinfecting appliances",
            "Scrubbing floors and tiles",
            "Restocking essentials (upon request)",
          ],
        },
        {
          title: "Living Spaces",
          services: [
            "Vacuuming and mopping floors",
            "Spot cleaning walls and windows",
            "Dusting shelves and furniture",
            "Emptying trash bins",
          ],
        },
        {
          title: "Additional Services (Upon Request):",
          services: [
            "Carpet shampooing",
            "Window cleaning (interior only)",
            "Equipment-specific cleaning",
            "After-event or session cleanup",
          ],
        },
      ],
    },
    summary:
      "We help maintain spotless, dust-free studios that inspire creativity and professionalism.",
    duration: "3-6 hours",
    availability: "Mon-Fri",
  },
  {
    id: 4,
    name: "1-3 Bedroom cleaning",
    image: bedroomCleaning,
    desc: "We provide regular upkeep upon request to maintain a clean, organized, and comfortable living space.",
    moreDesc:
      "Our bedroom cleaning service focuses on creating clean, restful environments where you can relax. We handle everything from dusting and vacuuming to changing bed linens and sanitizing surfaces for a complete refresh.",
    about:
      "Bedrooms are personal spaces that deserve detailed attention. We ensure all surfaces are dust-free, floors are clean, and your space feels welcoming and serene after every visit.",
    includes: {
      includesDesc:
        "Our 1-3 bedroom cleaning package ensures all living areas are refreshed and tidy, customized based on the number of rooms.",
      includesDetails: [
        {
          title: "Bedrooms",
          services: [
            "Changing bed linens and making beds",
            "Dusting furniture and shelves",
            "Vacuuming carpets and floors",
            "Spot cleaning mirrors and windows",
          ],
        },
        {
          title: "Living Areas",
          services: [
            "Wiping surfaces and electronics",
            "Cleaning under and around furniture",
            "Floor vacuuming and mopping",
            "Emptying trash bins",
          ],
        },
        {
          title: "Kitchen Areas",
          services: [
            "Cleaning countertops and appliances",
            "Washing dishes (upon request)",
            "Mopping and sanitizing floors",
            "Cleaning cabinet exteriors",
          ],
        },
        {
          title: "Additional Services (Upon Request):",
          services: [
            "Inside cabinet cleaning",
            "Fridge and oven deep cleaning",
            "Laundry services",
            "Window cleaning (interior only)",
          ],
        },
      ],
    },
    summary:
      "Our bedroom cleaning service ensures your space remains clean, cozy, and stress-free every day.",
    duration: "2-5 hours",
    availability: "Mon-Fri",
  },
  {
    id: 5,
    name: "house cleaning",
    image: houseCleaning,
    desc: "We ensure a spotless and refreshed space when transitioning to a new home or leaving a property.",
    moreDesc:
      "Our house cleaning services make moving in or out easier by providing deep, thorough cleaning of every room. From floors to fixtures, we prepare the house for its next chapter with meticulous attention to detail.",
    about:
      "Moving can be stressful. Our professional cleaning team ensures your old or new house is spotless, hygienic, and ready for new beginnings.",
    includes: {
      includesDesc:
        "Our house cleaning service covers every room and detail, ensuring your space is fresh, welcoming, and ready for use.",
      includesDetails: [
        {
          title: "General Areas",
          services: [
            "Dusting and wiping all surfaces",
            "Vacuuming carpets and floors",
            "Mopping tiles and wood floors",
            "Cleaning inside closets and cabinets",
          ],
        },
        {
          title: "Kitchen",
          services: [
            "Deep cleaning appliances",
            "Cleaning countertops and cabinet exteriors",
            "Mopping and sanitizing floors",
            "Scrubbing sinks and fixtures",
          ],
        },
        {
          title: "Bathrooms",
          services: [
            "Sanitizing toilets, sinks, and showers",
            "Cleaning mirrors and fixtures",
            "Removing soap scum and mildew",
            "Emptying and disinfecting bins",
          ],
        },
        {
          title: "Additional Services (Upon Request):",
          services: [
            "Garage sweeping and cleaning",
            "Window cleaning (interior only)",
            "Carpet shampooing",
            "Post-renovation cleaning",
          ],
        },
      ],
    },
    summary:
      "Make your move stress-free with our detailed house cleaning solutions for both moving in and moving out.",
    duration: "5-8 hours",
    availability: "Mon-Fri",
  },
  {
    id: 6,
    name: "apartment cleaning",
    image: apartmentCleaning,
    desc: "We are tailored for unique or one-time cleaning needs, such as post-event cleaning, move-in/move-out cleaning, or seasonal deep cleans.",
    moreDesc:
      "Our apartment cleaning services are designed for small to mid-sized living spaces that require detailed, efficient, and affordable cleaning. Whether it’s a regular clean or a special deep cleaning, we have you covered.",
    about:
      "Apartments can gather dust and clutter quickly. Our service ensures a consistently fresh, healthy environment without the hassle, customized based on your needs and lifestyle.",
    includes: {
      includesDesc:
        "Our apartment cleaning service fits busy schedules and different levels of cleaning requirements.",
      includesDetails: [
        {
          title: "Living and Bedroom Areas",
          services: [
            "Dusting furniture and shelves",
            "Vacuuming and mopping floors",
            "Wiping down electronics and decor",
            "Cleaning light switches and doors",
          ],
        },
        {
          title: "Kitchen",
          services: [
            "Sanitizing countertops and sinks",
            "Washing dishes (if requested)",
            "Cleaning appliance exteriors",
            "Mopping kitchen floors",
          ],
        },
        {
          title: "Bathrooms",
          services: [
            "Cleaning showers, tubs, toilets, and sinks",
            "Polishing mirrors and fixtures",
            "Emptying and sanitizing trash bins",
            "Scrubbing tiles and grout",
          ],
        },
        {
          title: "Additional Services (Upon Request):",
          services: [
            "Deep carpet cleaning",
            "Window cleaning (interior)",
            "Closet organization",
            "Post-event cleaning",
          ],
        },
      ],
    },
    summary:
      "Our apartment cleaning services deliver consistent, hassle-free results for busy urban lifestyles.",
    duration: "3-6 hours",
    availability: "Mon-Fri",
  },
];

export const TeamData = [
  {
    id: 1,
    name: "Erik Reynolds",
    stars: 5,
    image: houseCleaning,
    desc: "He delivers expert deep cleaning with great attention to hygiene and detail.",
    about:
      "Erik is a seasoned cleaning specialist known for his meticulous approach and commitment to creating spotless, healthy environments.",
    experiences:
      "Over 8 years of experience in residential deep cleaning, sanitation practices, and specialized home maintenance projects.",
  },
  {
    id: 2,
    name: "Jane Cornelius",
    stars: 5,
    image: apartmentCleaning,
    desc: "She ensures organized apartment upkeep with precision and swift execution.",
    about:
      "Jane has a passion for neat, efficient spaces and is dedicated to providing high-quality apartment cleaning solutions tailored to client lifestyles.",
    experiences:
      "6 years of experience managing apartment turnovers, rental property maintenance, and detailed small-space organization.",
  },
  {
    id: 3,
    name: "Devon Sundermoth",
    stars: 5,
    image: spaceCleaning,
    desc: "He handles sensitive surface care with accuracy and a refined cleaning touch.",
    about:
      "Devon specializes in delicate and high-end material care, ensuring luxury surfaces and sensitive areas are cleaned without damage.",
    experiences:
      "7 years working with premium properties, museums, and custom interior cleaning that requires specialized knowledge and handling.",
  },
];

export const QualitiesData = [
  "Vetted professionals",
  "Affordable Prices",
  "Next day availability",
  "Best Quality",
  "Standard cleaning tasks",
  "Affordable Prices",
];
export const PackagesData = [
  {
    id: 1,
    name: "Basic Package",
    intro:
      "Our Basic Package is ideal for routine maintenance and general cleaning. It covers all the essential tasks to keep your home tidy and comfortable on a regular basis.",
    contents: [
      "Dusting of all surfaces",
      "Sweeping and mopping floors",
      "Vacuuming carpets and rugs",
      "Cleaning of kitchen surfaces",
      "Cleaning of bathroom surfaces",
      "Emptying trash bins",
    ],
    monthlyPlan: {
      description:
        "Our Basic Package ensures a regular and thorough cleaning of your home, covering essential tasks like dusting, sweeping, and mopping, so you can enjoy a fresh and tidy space without the hassle.",
      inclusiveServices: [
        "Weekly dusting of surfaces",
        "Mopping and vacuuming floors once a week",
        "Basic kitchen and bathroom cleaning",
        "Trash bin emptying weekly",
      ],
      priceAvailableOnDemand: true,
    },
    yearlyPlan: {
      description:
        "The yearly plan offers consistent cleaning throughout the year with all the benefits of the monthly plan, ensuring your home remains spotless all year round, saving you both time and money with an annual subscription.",
      inclusiveServices: [
        "All services from the Monthly Plan",
        "Monthly deep cleaning of kitchen and bathroom surfaces",
      ],
      priceAvailableOnDemand: true,
    },
  },
  {
    id: 2,
    name: "Enterprise Package",
    intro:
      "Our Enterprise cleaning Package is customizable to meet your specific needs, ensuring your space looks and feels its absolute best. Whether it’s a one-time clean or part of a regular maintenance schedule, we’re here to deliver exceptional results.",
    contents: [
      "All services in the Basic Plan",
      "Detailed dusting",
      "Wiping down of kitchen appliances",
      "Cleaning inside the microwave",
      "Changing bed linens",
      "Spot cleaning walls and doors",
    ],
    monthlyPlan: {
      description:
        "The Enterprise Package adds an extra level of care, providing a detailed cleaning for your kitchen appliances, changing your bed linens, and more. Perfect for those who want to go beyond basic cleaning.",
      inclusiveServices: [
        "Everything in the Basic Package",
        "Detailed dusting of hard-to-reach areas",
        "Wiping down kitchen appliances",
        "Cleaning inside microwave",
        "Bed linens changed bi-weekly",
        "Spot cleaning of walls and doors",
      ],
      priceAvailableOnDemand: true,
    },
    yearlyPlan: {
      description:
        "Opt for the Enterprise yearly plan and enjoy all the advantages of the monthly plan, plus additional premium services that keep your home sparkling clean for a full year. Includes more frequent and thorough cleaning throughout.",
      inclusiveServices: [
        "All services from the Monthly Plan",
        "Quarterly deep clean of kitchen and bathrooms",
        "More frequent bed linen changes",
      ],
      priceAvailableOnDemand: true,
    },
  },
  {
    id: 3,
    name: "Premium Package",
    intro:
      "Our most comprehensive offering, the Premium Package is for those who want an elite level of cleaning and organization. It includes detailed attention to every corner, plus closet and pantry organization to declutter your space.",
    contents: [
      "All services in the Enterprise Plan",
      "Deep cleaning of kitchen appliances",
      "Baseboards, door frames, & vents",
      "Organization of closets and pantries",
      "Carpet and upholstery spot cleaning",
      "Detailed bathroom cleaning",
    ],
    monthlyPlan: {
      description:
        "The Premium Package is designed for those who demand the best. With everything from deep cleaning kitchen appliances to organizing closets and pantries, this package ensures your home is pristine, fresh, and well-organized every day.",
      inclusiveServices: [
        "Everything in the Enterprise Package",
        "Deep cleaning of kitchen appliances",
        "Cleaning baseboards, door frames, and vents",
        "Closet and pantry organization",
        "Spot cleaning of carpets and upholstery",
        "Detailed bathroom cleaning",
      ],
      priceAvailableOnDemand: true,
    },
    yearlyPlan: {
      description:
        "The Premium yearly plan guarantees year-round exceptional care with the highest level of detail in every service. Regular deep cleans, organization, and spot cleaning keep your home in perfect condition, every day of the year.",
      inclusiveServices: [
        "All services from the Monthly Plan",
        "Quarterly organization of closets and pantries",
        "Twice-yearly deep cleaning of carpets and upholstery",
      ],
      priceAvailableOnDemand: true,
    },
  },
];

export const TestimonialsData = [
  {
    name: "robert fox",
    image: test_img1,
    role: "Business man",
    stars: 5,
    comment:
      "Outstanding experience! The cleaners were punctual, courteous, and left every corner of my house gleaming. Their professionalism and thoroughness exceeded my expectations. Highly recommended for anyone in need of top-notch cleaning services.",
  },
  {
    name: "candice drew",
    image: test_img2,
    role: "IT worker",
    stars: 5,
    comment:
      "Exceptional service! The team arrived promptly, worked diligently, and transformed my home into a spotless haven. Their attention to detail is unparalleled. I wholeheartedly recommend them to anyone seeking a dependable and meticulous cleaning service.",
  },
  {
    name: "john danison",
    image: test_img3,
    Role: "Accountant",
    stars: 5,
    comment:
      "​Impeccable job! The cleaning crew was on time, efficient, and left my apartment sparkling clean. Their meticulous approach and friendly demeanor made the entire process seamless. I highly recommend their services to anyone looking for quality cleaning.",
  },
];

export const FaqData = [
  {
    summary: "In which location do you service?",
    desc: " We proudly serve Los Angeles and the entire state of California. Whether you need residential, commercial, or specialized cleaning services, our professional team is ready to deliver top-quality service across various cities and communities in California.",
  },
  {
    summary: "Can I request to have the same cleaner every time?",
    desc: "Yes, absolutely. We understand how important it is to build trust and consistency. Upon request, we can assign the same cleaner for your scheduled services to ensure you have a familiar and reliable professional handling your cleaning needs.",
  },
  {
    summary: "Do you offer daily cleaning services?",
    desc: "Yes, we offer daily cleaning and janitorial services for homes, offices, and commercial spaces. Whether you require regular maintenance, full-time janitorial staffing, or customized daily cleaning schedules, we are flexible and ready to meet your specific needs.",
  },
  {
    summary: "Are you currently hiring cleaning staff?",
    desc: "Yes, we are actively hiring. If you're passionate about delivering excellent cleaning services and maintaining high standards, we would love to hear from you. We offer competitive pay, a supportive work environment, and opportunities for growth within our team.",
  },
];
