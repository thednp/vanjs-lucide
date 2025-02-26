// VanJS Lucide - Goal
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Goal = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 13V2l8 4-8 4" }),
    path({ "d": "M20.561 10.222a9 9 0 1 1-12.55-5.29" }),
    path({ "d": "M8.002 9.997a5 5 0 1 0 8.9 2.02" }),
  );
};
