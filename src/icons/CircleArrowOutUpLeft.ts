// VanJS Lucide - CircleArrowOutUpLeft
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CircleArrowOutUpLeft = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 8V2h6" }),
    path({ "d": "m2 2 10 10" }),
    path({ "d": "M12 2A10 10 0 1 1 2 12" }),
  );
};
