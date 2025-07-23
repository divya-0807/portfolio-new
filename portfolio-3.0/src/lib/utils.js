import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


// src/utils.js
export const ABOUT_1 =
  "I’m a full-stack web developer passionate about building scalable, user-centric software. From streamlining government systems to optimizing microservices, I craft solutions that blend performance and simplicity.";

export const ABOUT_2 =
  " Some say I write code, others think I write spells. I see databases not as tables, but as time machines — whispering stories in queries. Behind every optimized query and containerized service lies a quiet obsession with perfection. I build for the present, but I always code like someone’s future depends on it.";
