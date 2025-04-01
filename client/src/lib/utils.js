import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const colors = [
  "bg-[#a3a3a357] text-[#f8f9fa] border-[1px] border-[#d1d5db]",
  "bg-[#ffd60a2a] text-[#ffd60a] border-[1px] border-[#ffd60abb]",
  "bg-[#06d6a02a] text-[#06d6a0] border-[1px] border-[#06d6a0bb]",
  "bg-[#4cc9f02a] text-[#4cc9f0] border-[1px] border-[#4cc9f0bb]",
  "bg-[#7a2c2c57] text-[#ff4d4d] border-[1px] border-[#cc3b3b]",
  "bg-[#f2b6c257] text-[#ffb6c1] border-[1px] border-[#e89aa0]",
  "bg-[#5f8d4e57] text-[#a2ff6b] border-[1px] border-[#79c254]",
];

export const getColor = (color) => {
  if (color >= 0 && color < colors.length) {
    return colors[color];
  }
  return colors[0];
};
