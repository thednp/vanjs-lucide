// VanJS Lucide - Heading6
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Heading6 = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 12h8" }),
    path({ "d": "M4 18V6" }),
    path({ "d": "M12 18V6" }),
    circle({ cx: "19", cy: "16", "r": "2" }),
    path({ "d": "M20 10c-2 2-3 3.5-3 6" }),
  );
};
