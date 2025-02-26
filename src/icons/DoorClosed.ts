// VanJS Lucide - DoorClosed
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const DoorClosed = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" }),
    path({ "d": "M2 20h20" }),
    path({ "d": "M14 12v.01" }),
  );
};
