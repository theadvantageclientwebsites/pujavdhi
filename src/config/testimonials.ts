export type Testimonial = {
  id: number;
  name: string;
  rating: number; // out of 5
  review: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Neha Verma",
    rating: 5,
    review:
      "Booking was easy and the experience was spiritual and peaceful!",
  },
  {
    id: 2,
    name: "Priya Sharma",
    rating: 5,
    review:
      "The Pooja was performed so beautifully and with so much devotion. Highly recommended!",
  },
  {
    id: 3,
    name: "Rajesh Patel",
    rating: 5,
    review:
      "Very professional and punctual Pandit. Everything was well organized.",
  },
  {
    id: 4,
    name: "Anita Desai",
    rating: 5,
    review:
      "Exceptional service! The Pandit was knowledgeable and performed the rituals with great authenticity.",
  },
  {
    id: 5,
    name: "Suresh Kumar",
    rating: 5,
    review:
      "Wonderful experience. The online booking process was seamless and the Pooja was divine.",
  },
  {
    id: 6,
    name: "Meena Iyer",
    rating: 5,
    review:
      "We had the Satyanarayan Katha performed and it was exactly as we envisioned. Truly blessed.",
  },
];
