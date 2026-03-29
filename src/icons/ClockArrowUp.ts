// VanJS Lucide - ClockArrowUp
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ClockArrowUp = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M12 6v6l1.56.78" }),
    path({ "d": "M13.227 21.925a10 10 0 1 1 8.767-9.588" }),
    path({ "d": "m14 18 4-4 4 4" }),
    path({ "d": "M18 22v-8" }),
  );
};
