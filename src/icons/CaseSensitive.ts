// VanJS Lucide - CaseSensitive
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const CaseSensitive = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m3 15 4-8 4 8" }),
    path({ "d": "M4 13h6" }),
    circle({ cx: "18", cy: "12", "r": "3" }),
    path({ "d": "M21 9v6" }),
  );
};
