// VanJS Lucide - ClockArrowDown
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ClockArrowDown = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M12 6v6l2 1" }),
    path({ "d": "M12.337 21.994a10 10 0 1 1 9.588-8.767" }),
    path({ "d": "m14 18 4 4 4-4" }),
    path({ "d": "M18 14v8" }),
  );
};
