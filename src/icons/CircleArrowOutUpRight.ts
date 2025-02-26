// VanJS Lucide - CircleArrowOutUpRight
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CircleArrowOutUpRight = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M22 12A10 10 0 1 1 12 2" }),
    path({ "d": "M22 2 12 12" }),
    path({ "d": "M16 2h6v6" }),
  );
};
