// VanJS Lucide - Wind
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Wind = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12.8 19.6A2 2 0 1 0 14 16H2" }),
    path({ "d": "M17.5 8a2.5 2.5 0 1 1 2 4H2" }),
    path({ "d": "M9.8 4.4A2 2 0 1 1 11 8H2" }),
  );
};
