// VanJS Lucide - FlaskConicalOff
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const FlaskConicalOff = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 2v2.343" }),
    path({ "d": "M14 2v6.343" }),
    path({ "d": "m2 2 20 20" }),
    path({ "d": "M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563" }),
    path({ "d": "M6.453 15H15" }),
    path({ "d": "M8.5 2h7" }),
  );
};
