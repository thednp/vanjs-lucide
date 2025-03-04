// VanJS Lucide - Trophy
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Trophy = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M6 9H4.5a2.5 2.5 0 0 1 0-5H6" }),
    path({ "d": "M18 9h1.5a2.5 2.5 0 0 0 0-5H18" }),
    path({ "d": "M4 22h16" }),
    path({ "d": "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" }),
    path({
      "d": "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
    }),
    path({ "d": "M18 2H6v7a6 6 0 0 0 12 0V2Z" }),
  );
};
