"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import classes from "@/components/images/image-slideshow.module.css";
import burgerImg from "@/assets/burger.jpg";
import curryImg from "@/assets/curry.jpg";
import dumplingsImg from "@/assets/dumplings.jpg";
import macncheese from "@/assets/macncheese.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import schnitzelImg from "@/assets/schnitzel.jpg";
import tomatoSaladImg from "@/assets/tomato-salad.jpg";

const images = [
  { image: burgerImg, alt: "burger" },
  { image: curryImg, alt: "curry" },
  { image: dumplingsImg, alt: "dumplings" },
  { image: macncheese, alt: "macncheese" },
  { image: pizzaImg, alt: "pizza" },
  { image: schnitzelImg, alt: "schnitzel" },
  { image: tomatoSaladImg, alt: "tomato salad" },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          alt={image.alt}
          className={index === currentImageIndex ? classes.active : ""}
        />
      ))}
    </div>
  );
}
