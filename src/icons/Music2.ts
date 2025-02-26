// VanJS Lucide - Music2
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Music2 = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "8", cy: "18", "r": "4" }),
    path({ "d": "M12 18V2l7 4" }),
  );
};
