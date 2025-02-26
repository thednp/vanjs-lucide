// VanJS Lucide - WifiLow
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const WifiLow = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 20h.01" }),
    path({ "d": "M8.5 16.429a5 5 0 0 1 7 0" }),
  );
};
