// VanJS Lucide - SearchAlert
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const SearchAlert = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    circle({
      cx: "11",
      cy: "11",
      "r": "8",
    }),
    path({ "d": "m21 21-4.3-4.3" }),
    path({ "d": "M11 7v4" }),
    path({ "d": "M11 15h.01" }),
  );
};
