// VanJS Lucide - Bed
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Bed = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 4v16" }),
    path({ "d": "M2 8h18a2 2 0 0 1 2 2v10" }),
    path({ "d": "M2 17h20" }),
    path({ "d": "M6 8v9" }),
  );
};
