// VanJS Lucide - Search
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Search = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "m21 21-4.34-4.34" }),
    circle({
      cx: "11",
      cy: "11",
      "r": "8",
    }),
  );
};
