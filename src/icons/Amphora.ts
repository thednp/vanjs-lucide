// VanJS Lucide - Amphora
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Amphora = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8",
    }),
    path({ "d": "M10 5H8a2 2 0 0 0 0 4h.68" }),
    path({
      "d": "M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8",
    }),
    path({ "d": "M14 5h2a2 2 0 0 1 0 4h-.68" }),
    path({ "d": "M18 22H6" }),
    path({ "d": "M9 2h6" }),
  );
};
