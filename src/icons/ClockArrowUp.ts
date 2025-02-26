// VanJS Lucide - ClockArrowUp
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ClockArrowUp = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M13.228 21.925A10 10 0 1 1 21.994 12.338" }),
    path({ "d": "M12 6v6l1.562.781" }),
    path({ "d": "m14 18 4-4 4 4" }),
    path({ "d": "M18 22v-8" }),
  );
};
