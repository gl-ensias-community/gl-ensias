// <<<<<<< HEAD
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// import clsx, { ClassValue } from "clsx";
// import { twMerge } from "tailwind-merge";
 
// export function cn(...inputs: ClassValue[]) {
  // return twMerge(clsx(inputs));
// }
