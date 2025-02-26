// VanJS Lucide - LaptopMinimalCheck
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const LaptopMinimalCheck = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 20h20" }),
    path({ "d": "m9 10 2 2 4-4" }),
    rect({ "x": "3", "y": "4", width: "18", height: "12", rx: "2" }),
  );
};
