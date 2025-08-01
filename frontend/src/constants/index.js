import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";

import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    id: "air-jordan-01",
    imgURL: shoe4,
    name: "Nike Air Jordan-01",
    price: "$200.20",
  },
  {
    id: "air-jordan-10",
    imgURL: shoe5,
    name: "Nike Air Jordan-10",
    price: "$210.20",
  },
  {
    id: "air-jordan-100",
    imgURL: shoe6,
    name: "Nike Air Jordan-100",
    price: "$220.20",
  },
  {
    id: "air-jordan-001",
    imgURL: shoe7,
    name: "Nike Air Jordan-001",
    price: "$230.20",
  },
];

export const productsDetail = [
  {
    id: "air-jordan-01",
    imgURL: shoe4,
    name: "Nike Air Jordan-01",
    price: "$200.20",
    description:
      "The Nike Air Jordan-01 offers lightweight cushioning and bold design, making it a must-have for sneaker enthusiasts.",
    features: [
      "Lightweight mesh upper",
      "Durable rubber outsole",
      "Iconic Jumpman logo",
      "Responsive Air cushioning",
    ],
    rating: 4.5,
  },
  {
    id: "air-jordan-10",
    imgURL: shoe5,
    name: "Nike Air Jordan-10",
    price: "$210.20",
    description:
      "The Nike Air Jordan-10 blends performance and retro styling, with high ankle support and premium materials.",
    features: [
      "High-top design",
      "Premium leather finish",
      "Cushioned insole",
      "Breathable panels",
    ],
    rating: 4.7,
  },
  {
    id: "air-jordan-100",
    imgURL: shoe6,
    name: "Nike Air Jordan-100",
    price: "$220.20",
    description:
      "The Air Jordan-100 is built for comfort and control on the court, designed for athletes who demand more.",
    features: [
      "Performance-focused outsole",
      "Synthetic overlays",
      "Enhanced ankle grip",
      "Lightweight foam midsole",
    ],
    rating: 4.3,
  },
  {
    id: "air-jordan-001",
    imgURL: shoe7,
    name: "Nike Air Jordan-001",
    price: "$230.20",
    description:
      "The Air Jordan-001 delivers timeless style and next-level support for your everyday hustle and court battles.",
    features: [
      "Classic silhouette",
      "Air-infused midsole",
      "Bold contrast detailing",
      "Padded collar for comfort",
    ],
    rating: 4.8,
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
