// VanJS Lucide - Settings2
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Settings2 = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M20 7h-9" }),
    path({ "d": "M14 17H5" }),
    circle({ cx: "17", cy: "17", "r": "3" }),
    circle({ cx: "7", cy: "7", "r": "3" }),
  );
};
