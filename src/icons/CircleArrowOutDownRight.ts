// VanJS Lucide - CircleArrowOutDownRight
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CircleArrowOutDownRight = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 22a10 10 0 1 1 10-10" }),
    path({ "d": "M22 22 12 12" }),
    path({ "d": "M22 16v6h-6" }),
  );
};
