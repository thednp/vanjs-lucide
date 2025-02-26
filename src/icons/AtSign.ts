// VanJS Lucide - AtSign
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const AtSign = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "4" }),
    path({ "d": "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" }),
  );
};
