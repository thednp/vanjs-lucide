// VanJS Lucide - FlipHorizontal2
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const FlipHorizontal2 = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m3 7 5 5-5 5V7" }),
    path({ "d": "m21 7-5 5 5 5V7" }),
    path({ "d": "M12 20v2" }),
    path({ "d": "M12 14v2" }),
    path({ "d": "M12 8v2" }),
    path({ "d": "M12 2v2" }),
  );
};
