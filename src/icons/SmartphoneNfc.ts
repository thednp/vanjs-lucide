// VanJS Lucide - SmartphoneNfc
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const SmartphoneNfc = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "7", height: "12", "x": "2", "y": "6", rx: "1" }),
    path({ "d": "M13 8.32a7.43 7.43 0 0 1 0 7.36" }),
    path({ "d": "M16.46 6.21a11.76 11.76 0 0 1 0 11.58" }),
    path({ "d": "M19.91 4.1a15.91 15.91 0 0 1 .01 15.8" }),
  );
};
