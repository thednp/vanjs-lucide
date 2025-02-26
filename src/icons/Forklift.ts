// VanJS Lucide - Forklift
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Forklift = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 12H5a2 2 0 0 0-2 2v5" }),
    circle({ cx: "13", cy: "19", "r": "2" }),
    circle({ cx: "5", cy: "19", "r": "2" }),
    path({ "d": "M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5" }),
  );
};
