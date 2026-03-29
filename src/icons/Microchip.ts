// VanJS Lucide - Microchip
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Microchip = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M10 12h4" }),
    path({ "d": "M10 17h4" }),
    path({ "d": "M10 7h4" }),
    path({ "d": "M18 12h2" }),
    path({ "d": "M18 18h2" }),
    path({ "d": "M18 6h2" }),
    path({ "d": "M4 12h2" }),
    path({ "d": "M4 18h2" }),
    path({ "d": "M4 6h2" }),
    rect({
      "x": "6",
      "y": "2",
      width: "12",
      height: "20",
      rx: "2",
    }),
  );
};
