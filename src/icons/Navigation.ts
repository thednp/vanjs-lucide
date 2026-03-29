// VanJS Lucide - Navigation
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Navigation = (props: Partial<SVGProps> = {}) => {
  const { polygon } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    polygon({ points: "3 11 22 2 13 21 11 13 3 11" }),
  );
};
