// VanJS Lucide - Heater
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Heater = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M11 8c2-3-2-3 0-6" }),
    path({ "d": "M15.5 8c2-3-2-3 0-6" }),
    path({ "d": "M6 10h.01" }),
    path({ "d": "M6 14h.01" }),
    path({ "d": "M10 16v-4" }),
    path({ "d": "M14 16v-4" }),
    path({ "d": "M18 16v-4" }),
    path({
      "d":
        "M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3",
    }),
    path({ "d": "M5 20v2" }),
    path({ "d": "M19 20v2" }),
  );
};
