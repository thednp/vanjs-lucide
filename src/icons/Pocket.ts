// VanJS Lucide - Pocket
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Pocket = (props: Partial<SVGProps> = {}) => {
  const { path, polyline } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d":
        "M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z",
    }),
    polyline({ points: "8 10 12 14 16 10" }),
  );
};
