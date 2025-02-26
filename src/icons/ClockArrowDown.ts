// VanJS Lucide - ClockArrowDown
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ClockArrowDown = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12.338 21.994A10 10 0 1 1 21.925 13.227" }),
    path({ "d": "M12 6v6l2 1" }),
    path({ "d": "m14 18 4 4 4-4" }),
    path({ "d": "M18 14v8" }),
  );
};
