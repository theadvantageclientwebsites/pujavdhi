export type PujaService = {
  id: number;
  slug: string;
  title: string;
  deity: string;
  description: string;
  benefits: string[];
  whenToPerform: string;
  ceremonyInvolves: string;
  pujasamagri: string;
  image: string; // path under /services/
  mantras: string;
};

export const PUJA_SERVICES: PujaService[] = [
  {
    id: 1,
    slug: "ganesh-puja",
    title: "Ganesh Puja",
    deity: "Lord Ganesha",
    description:
      "Traditionally performed to honour Lord Ganesha, the deity invoked before auspicious beginnings and associated with removing obstacles.",
    benefits: [
      "Removal of obstacles and delays",
      "Invoked for wisdom, clarity and auspicious beginnings",
      "Ideal before new ventures, ceremonies and milestones",
      "Creates a devotional atmosphere of peace and positivity",
    ],
    whenToPerform:
      "New business or venture, housewarming, weddings, birthdays, Ganesh Chaturthi and other auspicious occasions.",
    ceremonyInvolves:
      "Sankalp, Ganesh invocation, kalash and Ganapati worship, offerings of flowers and durva, sweets, mantra recitation, aarti and prasad.",
    pujasamagri:
      "Flowers, durva, modak/sweets, fruits, incense, diya, turmeric, kumkum, rice, water and customary puja items.",
    mantras: "Om Gam Ganapataye Namah; Ganapati Atharvashirsha may be included.",
    image: "/vedic_puja/ganesh_puja.webp",
  },
  {
    id: 2,
    slug: "rudra-abhishek",
    title: "Rudra Abhishek",
    deity: "Lord Shiva",
    description:
      "A sacred Shiva worship in which the Shiva Lingam is ceremonially bathed while Vedic and devotional mantras are recited.",
    benefits: [
      "Associated with purification and inner peace",
      "Seek Lord Shiva's blessings and protection",
      "Undertaken during difficult or transitional periods",
      "Encourages prayer, reflection and spiritual calm",
    ],
    whenToPerform:
      "Especially Mondays, Pradosh, Shravan and other auspicious Shiva occasions, or according to family tradition.",
    ceremonyInvolves:
      "Sankalp, Shiva invocation, abhishek with water and customary offerings, Rudra mantras, bilva leaves, flowers, aarti and prasad.",
    pujasamagri:
      "Water, milk, curd, honey, ghee, sugar, bilva leaves, flowers, sandalwood, fruits and customary offerings.",
    mantras: "Sri Rudram/Namakam-Chamakam and Maha Mrityunjaya Mantra as appropriate.",
    image: "/vedic_puja/rudra_abhishek.webp",
  },
  {
    id: 3,
    slug: "satyanarayan-katha",
    title: "Satyanarayan Vrat Katha",
    deity: "Lord Vishnu",
    description:
      "A traditional devotional ceremony dedicated to Lord Vishnu including worship, sacred Katha and prasad for peace and family wellbeing.",
    benefits: [
      "Seek divine blessings and grace",
      "Associated with peace and family wellbeing",
      "Performed for auspicious beginnings and milestones",
      "Encourages devotion, truthfulness and charitable giving",
    ],
    whenToPerform:
      "Auspicious dates, full moon days, after an achievement, housewarming or for important family occasions.",
    ceremonyInvolves:
      "Sankalp, Ganesh and kalash worship, Satyanarayan puja, recitation of the Katha, offerings, aarti and distribution of prasad.",
    pujasamagri:
      "Panchamrit ingredients, fruits, flowers, tulsi, sweets, wheat/rava for prasad, incense, diya and customary materials.",
    mantras: "Vishnu/Satyanarayan mantras and devotional prayers according to family tradition.",
    image: "/vedic_puja/Satyanarayan_Vrat_Katha.webp",
  },
  {
    id: 4,
    slug: "maha-mrityunjaya-jaap",
    title: "Maha Mrityunjaya Jaap",
    deity: "Lord Shiva",
    description:
      "A traditional Shiva mantra practice centred on the Maha Mrityunjaya Mantra for protection, courage, peace and wellbeing.",
    benefits: [
      "Traditionally associated with protection and spiritual strength",
      "Undertaken during worry, difficulty or uncertainty",
      "Encourages prayer, calmness and devotion",
      "Often performed for personal or family wellbeing",
    ],
    whenToPerform:
      "During difficult periods, for personal or family prayer, before or after significant life events.",
    ceremonyInvolves:
      "Sankalp, Shiva invocation, prescribed mantra repetitions, Shiva puja/abhishek where included, offerings, aarti and prasad.",
    pujasamagri:
      "Shiva puja items, water, milk, bilva leaves, flowers, incense, diya, fruits and customary offerings.",
    mantras: "Om Tryambakam Yajamahe... with the chosen jaap count.",
    image: "/vedic_puja/Maha_Mrityunjaya_Jaap_Puja.webp",
  },
  {
    id: 5,
    slug: "manglik-dosh-nivaran",
    title: "Manglik Dosh Nivaran",
    deity: "Mangal / Lord Shiva",
    description:
      "A traditional astrological-religious ceremony for harmony in relationships and seeking blessings in connection with Mangal considerations.",
    benefits: [
      "Seek harmony and auspiciousness in relationships",
      "Undertaken for Mangal considerations in a horoscope",
      "Prayers for stability, courage and balanced energy",
      "Included in pre-marriage religious observances",
    ],
    whenToPerform:
      "Before marriage or when recommended following a horoscope assessment; timing may depend on the individual's chart.",
    ceremonyInvolves:
      "Sankalp, Ganesh worship, Mangal-related mantra recitation, kalash and deity worship, havan where included, offerings, aarti and prasad.",
    pujasamagri:
      "Red flowers, red cloth, kumkum, grains, fruits, sweets, ghee, havan samagri and customary materials.",
    mantras: "Mangal/Angaraka mantras and Shiva prayers as prescribed.",
    image: "/vedic_puja/Manglik_Dosh_Nivaran_Puja.webp",
  },
  {
    id: 6,
    slug: "kaal-sarp-dosh-nivaran",
    title: "Kaal Sarp Dosh Nivaran",
    deity: "Lord Shiva & Naga Devatas",
    description:
      "A traditional remedial ritual for spiritual reassurance when a particular planetary combination is interpreted as Kaal Sarp Dosha.",
    benefits: [
      "Undertaken for spiritual reassurance and peace",
      "Seek relief from perceived obstacles or delays",
      "Associated with worship of Shiva and Naga Devatas",
      "Encourages prayer, discipline and positive intention",
    ],
    whenToPerform:
      "Usually after an astrologer's horoscope assessment, with timing selected according to the relevant tradition and muhurat.",
    ceremonyInvolves:
      "Sankalp, Ganesh puja, Shiva/Naga worship, mantra jaap, offerings and where included, homa/havan, aarti and prasad.",
    pujasamagri:
      "Flowers, milk/water for abhishek, fruits, sweets, sesame, grains, incense, diya and havan materials.",
    mantras: "Shiva, Naga and planetary mantras according to the prescribed ritual.",
    image: "/vedic_puja/Kaal_Sarp_Dosh_Nivaran_Puja.webp",
  },
  {
    id: 7,
    slug: "baglamukhi-mata-puja",
    title: "Baglamukhi Mata Puja",
    deity: "Maa Baglamukhi",
    description:
      "A Mahavidya worship associated with protection, focused speech, courage and overcoming adverse circumstances.",
    benefits: [
      "Traditionally associated with protection and strength",
      "Undertaken during periods of conflict or serious difficulty",
      "Seek clarity, confidence and control over speech",
      "Focused devotional and mantra practice",
    ],
    whenToPerform:
      "When advised by a qualified priest or within an established spiritual tradition, particularly for specific devotional or astrological purposes.",
    ceremonyInvolves:
      "Sankalp, deity invocation, yantra/mantra worship where appropriate, offerings, prescribed mantra jaap, havan if included, aarti and prasad.",
    pujasamagri:
      "Yellow flowers and cloth, turmeric, sweets, fruits, incense, diya and prescribed ritual materials.",
    mantras: "Baglamukhi mantras as prescribed by the priest's tradition.",
    image: "/vedic_puja/Baglamukhi_Mata_Puja.webp",
  },
  {
    id: 8,
    slug: "navgrah-shanti-puja",
    title: "Navgrah Shanti Puja",
    deity: "The Nine Grahas",
    description:
      "Traditional worship of the nine grahas to promote balance, peace and auspiciousness according to Hindu astrological traditions.",
    benefits: [
      "Performed for planetary harmony and peace",
      "Recommended for horoscope-based planetary considerations",
      "Seeking stability across family, work and personal life",
      "Structured prayer, mantra and devotional reflection",
    ],
    whenToPerform:
      "Following horoscope assessment, during important life transitions, or at an auspicious time selected according to tradition.",
    ceremonyInvolves:
      "Sankalp, Ganesh puja, kalash installation, worship of the nine grahas, prescribed mantra jaap, offerings, havan where included, aarti and prasad.",
    pujasamagri:
      "Nine graha-related offerings, flowers, grains, fruits, cloth, incense, diya, ghee and havan materials.",
    mantras: "Individual Navagraha mantras, Surya and other planetary prayers as prescribed.",
    image: "/vedic_puja/Navgrah_Shanti_Puja.webp",
  },
  {
    id: 9,
    slug: "pitra-dosh-nivaran",
    title: "Pitra Dosh Nivaran",
    deity: "Pitru Devatas",
    description:
      "A traditional ancestral remembrance and remedial ceremony to honour ancestors and seek peace and blessings for the family.",
    benefits: [
      "Honour and remember ancestors",
      "Seek peace and blessings for the family",
      "Performed for Pitra-related astrological considerations",
      "Encourages gratitude, remembrance and charity",
    ],
    whenToPerform:
      "Often associated with Pitru Paksha, Amavasya or dates advised by a priest according to family tradition.",
    ceremonyInvolves:
      "Sankalp, ancestral invocation, tarpan/pind offerings, mantra recitation, Vishnu or Shiva worship, charity/food offerings, aarti and prasad.",
    pujasamagri:
      "Black sesame, water, rice, kusha grass, flowers, fruits, food offerings and priest-prescribed materials.",
    mantras: "Pitru prayers and Vishnu/Shiva mantras according to the prescribed ceremony.",
    image: "/vedic_puja/Picture8.jpg",
  },
  {
    id: 10,
    slug: "shani-sade-sati-jaap",
    title: "Shani Sade Sati Jaap",
    deity: "Lord Shani",
    description:
      "A traditional devotional practice associated with Saturn and the Sade Sati period for peace and spiritual strength.",
    benefits: [
      "Peace and spiritual strength during challenging periods",
      "Associated with patience, discipline and responsible action",
      "Performed as horoscope-based remedial practice",
      "Encourages devotion, humility and reflection",
    ],
    whenToPerform:
      "During Sade Sati or other Shani-related periods, particularly after horoscope assessment.",
    ceremonyInvolves:
      "Sankalp, Shani Dev worship, oil offering where customary, prescribed mantra jaap, prayers, charity/daan where appropriate, aarti and prasad.",
    pujasamagri:
      "Black sesame, sesame oil, black cloth where customary, flowers, fruits, diya and prescribed materials.",
    mantras: "Shani mantra and related prayers according to the priest's tradition.",
    image: "/vedic_puja/sani_puja.jpg",
  },
];
