require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");
const Monument = require("../models/Monument");

const monuments = [
   //TAJ MAHAL
  {
  name: "Taj Mahal",
  state: "Uttar Pradesh",
  era: "Mughal",
  category: "Mausoleum",
  builtBy: "Shah Jahan",
  year: "1653",
  description: "A white marble mausoleum built in memory of Mumtaz Mahal.",
  image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",

  about: "The Taj Mahal is one of the most celebrated monuments in the world and a timeless symbol of love. Located in Agra, it represents the artistic brilliance of Mughal architecture and attracts millions of visitors globally.",

  history: "Commissioned in 1632 by Shah Jahan after the death of Mumtaz Mahal, the construction of the Taj Mahal took over two decades. Thousands of artisans and craftsmen contributed to its creation, making it one of the most ambitious architectural projects of its time.",

  architecture: "Built using white Makrana marble, the Taj Mahal showcases symmetry, intricate carvings, and pietra dura inlay work. The central dome is flanked by four minarets that are slightly tilted outward for structural protection.",

  culturalSignificance: "The monument is a symbol of eternal love and represents India's rich Mughal heritage. It is also a UNESCO World Heritage Site and one of the New Seven Wonders of the World.",

  highlights: [
    "White marble masterpiece",
    "Perfect symmetrical design",
    "Charbagh garden layout",
    "Intricate stone inlay work",
    "UNESCO World Heritage Site"
  ],

  facts: [
    "Construction took over 20 years",
    "More than 20,000 workers were involved",
    "Changes color depending on sunlight",
    "Minarets tilt outward for safety",
    "Recognized as one of the Seven Wonders of the World"
  ]
},
  // QUTUB MINAR
 {
  name: "Qutub Minar",
  state: "Delhi",
  era: "Delhi Sultanate",
  category: "Tower",
  builtBy: "Qutb-ud-din Aibak",
  year: "1193",
  description: "A towering minaret and UNESCO World Heritage Site in Delhi.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Qutb_Minartower.jpg",

  about: "Qutub Minar is one of the most iconic historical structures in India and the tallest brick minaret in the world. It stands as a remarkable example of Indo-Islamic architecture and attracts visitors from across the globe.",

  history: "Construction of Qutub Minar began in 1193 under Qutb-ud-din Aibak after the defeat of Delhi’s last Hindu kingdom. It was later completed by his successor Iltutmish and further renovations were carried out by Firoz Shah Tughlaq.",

  architecture: "The tower is made of red sandstone and marble and is divided into five distinct storeys, each marked by a projecting balcony. Intricate carvings and verses from the Quran decorate its surface, showcasing fine craftsmanship of the era.",

  culturalSignificance: "Qutub Minar represents the beginning of Muslim rule in India and is an important symbol of Delhi’s historical legacy. It is also recognized as a UNESCO World Heritage Site.",

  highlights: [
    "Height of 73 meters making it the tallest brick minaret",
    "Five storeys with unique architectural design",
    "Intricate Arabic inscriptions and carvings",
    "UNESCO World Heritage Site",
    "Located in Qutub complex with other historic structures"
  ],

  facts: [
    "It is slightly tapering from base to top for stability",
    "Lightning strikes damaged it multiple times and it was rebuilt",
    "No one is allowed to climb it now due to safety reasons",
    "It is surrounded by ancient ruins and monuments",
    "Built using red sandstone and marble"
  ]
},
  // RED FORT
  {
  name: "Red Fort",
  state: "Delhi",
  era: "Mughal",
  category: "Fort",
  builtBy: "Shah Jahan",
  year: "1648",
  description: "A historic fort that served as the residence of Mughal emperors.",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Red_Fort%2C_Delhi.jpg",

  about: "The Red Fort is one of the most significant historical monuments in India and a symbol of the country’s rich heritage. Built using red sandstone, it served as the main residence of Mughal emperors for nearly 200 years.",

  history: "The fort was constructed by Shah Jahan in 1648 when he moved his capital from Agra to Delhi. It remained the center of Mughal power until the British colonial period, after which it became a symbol of India’s independence.",

  architecture: "The Red Fort showcases a blend of Persian, Timurid, and Indian architectural styles. It includes structures like Diwan-i-Aam and Diwan-i-Khas, with intricate decorations, arches, and large courtyards surrounded by massive walls.",

  culturalSignificance: "The Red Fort holds immense national importance as the Prime Minister of India hoists the national flag here every Independence Day. It is also a UNESCO World Heritage Site.",

  highlights: [
    "Massive red sandstone walls stretching over 2 km",
    "Diwan-i-Aam and Diwan-i-Khas halls",
    "Beautiful Mughal gardens",
    "UNESCO World Heritage Site",
    "Historic center of Mughal administration"
  ],

  facts: [
    "Flag hoisting ceremony takes place here every 15 August",
    "Walls are up to 33 meters high",
    "Used by Mughals for around 200 years",
    "British used it as military base",
    "It attracts millions of tourists annually"
  ]
},

  // KONARK TEMPLE
  {
  name: "Konark Sun Temple",
  state: "Odisha",
  era: "Eastern Ganga Dynasty",
  category: "Temple",
  builtBy: "King Narasimhadeva I",
  year: "1250",
  description: "A temple dedicated to the Sun God designed as a chariot.",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Konark_Sun_Temple_-_Front_View.jpg",

  about: "The Konark Sun Temple is a magnificent example of ancient Indian architecture dedicated to Surya, the Sun God. It is designed in the shape of a gigantic chariot with intricately carved stone wheels.",

  history: "Built in the 13th century by King Narasimhadeva I, the temple served as a major center of religious and cultural activity. Over time, parts of the temple fell into ruins, but it still remains a UNESCO World Heritage Site.",

  architecture: "The temple is constructed from stone and features 24 intricately carved wheels that function as sundials. The entire structure resembles a moving chariot pulled by seven horses.",

  culturalSignificance: "It reflects the scientific and artistic achievements of ancient India and holds great religious importance in Hindu culture.",

  highlights: [
    "Chariot-shaped temple design",
    "Stone wheels acting as sundials",
    "Intricate carvings",
    "UNESCO World Heritage Site",
    "Dedicated to Sun God"
  ],

  facts: [
    "Built in the 13th century",
    "Wheels can measure time accurately",
    "Designed to capture sunrise rays",
    "One of India's most iconic temples",
    "Partially in ruins today"
  ]
},
  // HAMPI
  {
  name: "Hampi",
  state: "Karnataka",
  era: "Vijayanagara Empire",
  category: "Ancient City",
  builtBy: "Vijayanagara Kings",
  year: "14th Century",
  description: "Ancient ruins of a powerful empire.",
  image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Virupaksha_Temple_Hampi.jpg",

  about: "Hampi is one of the largest and most important archaeological sites in India, known for its vast ruins and temples that reflect the glory of the Vijayanagara Empire.",

  history: "Hampi served as the capital of the Vijayanagara Empire in the 14th century. It was one of the richest cities in the world before being destroyed in the 16th century.",

  architecture: "The site includes temples, marketplaces, and monuments built with granite stones. The famous stone chariot and Virupaksha Temple are major highlights.",

  culturalSignificance: "Hampi represents the peak of South Indian architecture and is a UNESCO World Heritage Site.",

  highlights: [
    "Stone chariot monument",
    "Virupaksha Temple",
    "Massive ruins spread across landscape",
    "Ancient marketplaces",
    "UNESCO World Heritage Site"
  ],

  facts: [
    "Spread across 4000 hectares",
    "Once one of the richest cities",
    "Destroyed in 1565",
    "Famous for rock formations",
    "Major tourist attraction"
  ]
},
//AjantaCaves
{
  name: "Ajanta Caves",
  state: "Maharashtra",
  era: "Ancient India",
  category: "Caves",
  builtBy: "Satavahana Dynasty",
  year: "2nd Century BCE",
  description: "Ancient Buddhist rock-cut caves known for paintings and sculptures.",
  image: "https://upload.wikimedia.org/wikipedia/commons/d/da/ajantaCaves.jpg",

  about: "The Ajanta Caves are a series of 30 rock-cut caves that represent some of the finest examples of ancient Indian art, particularly expressive paintings and sculptures associated with Buddhist traditions.",

  history: "The caves were built in two phases, starting from the 2nd century BCE and continuing until around the 6th century CE. They served as monasteries and prayer halls for Buddhist monks and were rediscovered in 1819 by a British officer.",

  architecture: "The caves are carved directly into the rock face and include chaityas (prayer halls) and viharas (monasteries). The interiors are adorned with intricate sculptures and detailed frescoes depicting the life of Buddha.",

  culturalSignificance: "Ajanta Caves are an important representation of Buddhist religious art and provide deep insights into ancient Indian culture, spirituality, and artistic excellence.",

  highlights: [
    "Rock-cut architecture carved into cliffs",
    "Ancient fresco paintings depicting Buddha's life",
    "Monasteries and prayer halls",
    "UNESCO World Heritage Site",
    "Detailed sculptures and carvings"
  ],

  facts: [
    "Consists of around 30 caves",
    "Rediscovered in 1819",
    "Paintings have survived for over 2000 years",
    "Depicts Jataka tales of Buddha",
    "One of the oldest surviving art forms in India"
  ]
},

{
  name: "Meenakshi Temple",
  state: "Tamil Nadu",
  era: "Dravidian",
  category: "Temple",
  builtBy: "Pandya Dynasty",
  year: "17th Century",
  description: "A historic temple dedicated to Goddess Meenakshi in Madurai.",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Meenakshi_Amman_Temple.jpg",

  about: "The Meenakshi Temple is one of the most famous and architecturally stunning temples in India, dedicated to Goddess Meenakshi and Lord Shiva, located in the city of Madurai.",

  history: "The temple has ancient origins but was significantly expanded during the Nayak dynasty in the 16th–17th centuries. It has been an important religious and cultural center for centuries.",

  architecture: "The temple is known for its towering gopurams (gateway towers) covered with thousands of colorful sculptures. The complex includes multiple halls, shrines, and a sacred water tank.",

  culturalSignificance: "It is one of the most important pilgrimage sites in South India and plays a central role in Tamil culture and religious traditions.",

  highlights: [
    "14 towering gopurams",
    "Thousands of colorful sculptures",
    "Golden Lotus Tank",
    "Dravidian architectural style",
    "Large temple complex"
  ],

  facts: [
    "One of the busiest temples in India",
    "Each tower has unique sculptures",
    "Temple complex spans over 14 acres",
    "Dedicated to both Shiva and Parvati",
    "Major cultural festivals held annually"
  ]
},

{
  name: "Gateway of India",
  state: "Mumbai",
  era: "British",
  category: "Monument",
  builtBy: "British Government",
  year: "1924",
  description: "An iconic arch monument overlooking the Arabian Sea.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Gateway_of_India.jpg",

  about: "The Gateway of India is one of Mumbai’s most famous landmarks, built during the British colonial era as a ceremonial entrance to India.",

  history: "It was constructed to commemorate the visit of King George V and Queen Mary in 1911. Completed in 1924, it later became a symbolic point marking the end of British rule in India.",

  architecture: "The monument is built in Indo-Saracenic style, combining Hindu and Muslim architectural elements. It stands facing the Arabian Sea and features intricate latticework and arches.",

  culturalSignificance: "The Gateway of India represents colonial history as well as India’s transition to independence, making it an important national landmark.",

  highlights: [
    "Indo-Saracenic architectural style",
    "Overlooks the Arabian Sea",
    "Major tourist attraction",
    "Symbolic historical site",
    "Boat rides available nearby"
  ],

  facts: [
    "Last British troops left India through this site",
    "Made of basalt stone",
    "Height is around 26 meters",
    "Located in South Mumbai",
    "One of the most photographed monuments in India"
  ]
},

{
  name: "Charminar",
  state: "Hyderabad",
  era: "Qutb Shahi",
  category: "Monument",
  builtBy: "Muhammad Quli Qutb Shah",
  year: "1591",
  description: "A historic monument and symbol of Hyderabad.",
  image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Charminar_Hyderabad.jpg",

  about: "Charminar is one of the most recognizable landmarks in India and stands at the heart of Hyderabad, representing the city's rich cultural heritage.",

  history: "It was built in 1591 by Muhammad Quli Qutb Shah to commemorate the end of a deadly plague in the region.",

  architecture: "The structure features four grand minarets connected by arches and is built using granite and limestone. It reflects Indo-Islamic architectural style.",

  culturalSignificance: "Charminar is a symbol of Hyderabad’s identity and is surrounded by bustling markets that reflect the city's vibrant culture.",

  highlights: [
    "Four towering minarets",
    "Central location in Hyderabad",
    "Indo-Islamic architecture",
    "Nearby markets and bazaars",
    "Iconic city landmark"
  ],

  facts: [
    "Charminar means 'Four Towers'",
    "Built to mark end of plague",
    "Located in old city of Hyderabad",
    "Surrounded by Laad Bazaar",
    "One of the oldest monuments in the city"
  ]
}

];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB Connected");

    await Monument.deleteMany({});
    console.log("Old monuments removed");

    await Monument.insertMany(monuments);
    console.log("New monuments inserted");

    process.exit();
  })
  .catch((err) => console.log(err));