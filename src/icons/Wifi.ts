// VanJS Lucide - Wifi
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Wifi = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 20h.01" }),
    path({ "d": "M2 8.82a15 15 0 0 1 20 0" }),
    path({ "d": "M5 12.859a10 10 0 0 1 14 0" }),
    path({ "d": "M8.5 16.429a5 5 0 0 1 7 0" }),
  );
};
