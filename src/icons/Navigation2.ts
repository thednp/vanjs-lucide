// VanJS Lucide - Navigation2
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Navigation2 = (props: Partial<SVGProps> = {}) => {
  const { polygon } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    polygon({ points: "12 2 19 21 12 17 5 21 12 2" }),
  );
};
