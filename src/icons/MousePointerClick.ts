// VanJS Lucide - MousePointerClick
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const MousePointerClick = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M14 4.1 12 6" }),
    path({ "d": "m5.1 8-2.9-.8" }),
    path({ "d": "m6 12-1.9 2" }),
    path({ "d": "M7.2 2.2 8 5.1" }),
    path({
      "d":
        "M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z",
    }),
  );
};
