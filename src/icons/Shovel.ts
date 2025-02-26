// VanJS Lucide - Shovel
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Shovel = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 22v-5l5-5 5 5-5 5z" }),
    path({ "d": "M9.5 14.5 16 8" }),
    path({
      "d":
        "m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2",
    }),
  );
};
