import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


// src/utils.js
export const ABOUT_1 =
  "I am a skilled web developer with a unique blend of coding expertise and aesthetic sensibility. My passion for technology drives me to continuously expand my skill set.";

export const ABOUT_2 =
  " I am an enthusiast learning cutting-edge editing software like Premiere Pro and Lightroom. This dedication to learning allows me to stay at the forefront of web trends.";
