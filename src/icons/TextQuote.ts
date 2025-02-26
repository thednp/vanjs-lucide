// VanJS Lucide - TextQuote
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const TextQuote = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M17 6H3" }),
    path({ "d": "M21 12H8" }),
    path({ "d": "M21 18H8" }),
    path({ "d": "M3 12v6" }),
  );
};
