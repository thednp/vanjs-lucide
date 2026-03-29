// VanJS Lucide - Combine
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Combine = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" }),
    path({ "d": "M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" }),
    path({ "d": "m7 15 3 3" }),
    path({ "d": "m7 21 3-3H5a2 2 0 0 1-2-2v-2" }),
    rect({
      "x": "14",
      "y": "14",
      width: "7",
      height: "7",
      rx: "1",
    }),
    rect({
      "x": "3",
      "y": "3",
      width: "7",
      height: "7",
      rx: "1",
    }),
  );
};
