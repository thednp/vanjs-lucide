// VanJS Lucide - Backpack
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Backpack = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d":
        "M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z",
    }),
    path({ "d": "M8 10h8" }),
    path({ "d": "M8 18h8" }),
    path({ "d": "M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6" }),
    path({ "d": "M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" }),
  );
};
