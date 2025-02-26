// VanJS Lucide - DiamondPercent
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const DiamondPercent = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d":
        "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z",
    }),
    path({ "d": "M9.2 9.2h.01" }),
    path({ "d": "m14.5 9.5-5 5" }),
    path({ "d": "M14.7 14.8h.01" }),
  );
};
