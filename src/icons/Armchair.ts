// VanJS Lucide - Armchair
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Armchair = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" }),
    path({
      "d":
        "M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z",
    }),
    path({ "d": "M5 18v2" }),
    path({ "d": "M19 18v2" }),
  );
};
