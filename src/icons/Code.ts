// VanJS Lucide - Code
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Code = (props: Partial<SVGProps> = {}) => {
  const { polyline } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    polyline({ points: "16 18 22 12 16 6" }),
    polyline({ points: "8 6 2 12 8 18" }),
  );
};
