// VanJS Lucide - Gpu
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Gpu = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M2 17h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H2" }),
    path({ "d": "M2 21V3" }),
    path({ "d": "M7 17v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3" }),
    circle({
      cx: "16",
      cy: "11",
      "r": "2",
    }),
    circle({
      cx: "8",
      cy: "11",
      "r": "2",
    }),
  );
};
