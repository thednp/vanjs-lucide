// VanJS Lucide - IndianRupee
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const IndianRupee = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M6 3h12" }),
    path({ "d": "M6 8h12" }),
    path({ "d": "m6 13 8.5 8" }),
    path({ "d": "M6 13h3" }),
    path({ "d": "M9 13c6.667 0 6.667-10 0-10" }),
  );
};
