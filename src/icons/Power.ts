// VanJS Lucide - Power
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Power = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 2v10" }),
    path({ "d": "M18.4 6.6a9 9 0 1 1-12.77.04" }),
  );
};
