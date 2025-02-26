// VanJS Lucide - MoonStar
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const MoonStar = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9" }),
    path({ "d": "M20 3v4" }),
    path({ "d": "M22 5h-4" }),
  );
};
