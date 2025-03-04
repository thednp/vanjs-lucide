// VanJS Lucide - ScanHeart
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ScanHeart = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d":
        "M11.246 16.657a1 1 0 0 0 1.508 0l3.57-4.101A2.75 2.75 0 1 0 12 9.168a2.75 2.75 0 1 0-4.324 3.388z",
    }),
    path({ "d": "M17 3h2a2 2 0 0 1 2 2v2" }),
    path({ "d": "M21 17v2a2 2 0 0 1-2 2h-2" }),
    path({ "d": "M3 7V5a2 2 0 0 1 2-2h2" }),
    path({ "d": "M7 21H5a2 2 0 0 1-2-2v-2" }),
  );
};
