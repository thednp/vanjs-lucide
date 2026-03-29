// VanJS Lucide - DoorClosed
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const DoorClosed = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M10 12h.01" }),
    path({ "d": "M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" }),
    path({ "d": "M2 20h20" }),
  );
};
