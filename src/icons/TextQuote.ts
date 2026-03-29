// VanJS Lucide - TextQuote
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const TextQuote = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M17 5H3" }),
    path({ "d": "M21 12H8" }),
    path({ "d": "M21 19H8" }),
    path({ "d": "M3 12v7" }),
  );
};
