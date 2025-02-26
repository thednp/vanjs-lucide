// VanJS Lucide - CircleArrowOutDownLeft
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CircleArrowOutDownLeft = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 12a10 10 0 1 1 10 10" }),
    path({ "d": "m2 22 10-10" }),
    path({ "d": "M8 22H2v-6" }),
  );
};
