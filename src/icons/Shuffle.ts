// VanJS Lucide - Shuffle
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Shuffle = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m18 14 4 4-4 4" }),
    path({ "d": "m18 2 4 4-4 4" }),
    path({
      "d": "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",
    }),
    path({ "d": "M2 6h1.972a4 4 0 0 1 3.6 2.2" }),
    path({ "d": "M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45" }),
  );
};
