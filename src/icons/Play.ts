// VanJS Lucide - Play
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Play = (props: Partial<SVGProps> = {}) => {
  const { polygon } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    polygon({ points: "6 3 20 12 6 21 6 3" }),
  );
};
