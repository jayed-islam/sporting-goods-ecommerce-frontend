import banner1 from "../assets/banner--1.jpg";
import banner2 from "../assets/banner--2.jpg";
import banner3 from "../assets/banner--3.jpg";
import fitness from "../assets/category/fitness.webp";
import equipment from "../assets/category/Equipment.webp";
import nutrition from "../assets/category/Nutrition & Supplements.jpg";
import footwarel from "../assets/category/footwarel.jpg";
import Apparel from "../assets/category/Apparel.avif";
import { ICategory } from "../types/category";

const banners = [
  {
    imgPath: banner1,
    title: "Basketball Gear Sale",
    discountMessage: "Up to 50% off on all basketball gear!",
    description:
      "Find the best deals on top-quality basketball equipment, including shoes, jerseys, and accessories. Limited time offer, don't miss out!",
  },
  {
    imgPath: banner2,
    title: "Soccer Cleats & Accessories",
    discountMessage: "Save 30% on soccer cleats and accessories!",
    description:
      "Upgrade your soccer game with our exclusive discounts on cleats, balls, and other essential accessories. Shop now and save big!",
  },
  {
    imgPath: banner3,
    title: "Baseball Equipment Discount",
    discountMessage: "Exclusive 20% off on baseball equipment!",
    description:
      "Get ready for the season with top-notch baseball gear at unbeatable prices. Bats, gloves, and more are now available at a special discount.",
  },
];

const categories: ICategory[] = [
  { id: 1, name: "Footwear", image: footwarel },
  { id: 2, name: "Apparel", image: Apparel },
  { id: 3, name: "Equipment", image: equipment },
  {
    id: 4,
    name: "Supplements",
    image: nutrition,
  },
  {
    id: 5,
    name: "Fitness Accessories",
    image: fitness,
  },
];

export { banners, categories };
