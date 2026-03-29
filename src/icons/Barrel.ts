// VanJS Lucide - Barrel
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Barrel = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M10 3a41 41 0 0 0 0 18" }),
    path({ "d": "M14 3a41 41 0 0 1 0 18" }),
    path({
      "d":
        "M17 3a2 2 0 0 1 1.68.92 15.25 15.25 0 0 1 0 16.16A2 2 0 0 1 17 21H7a2 2 0 0 1-1.68-.92 15.25 15.25 0 0 1 0-16.16A2 2 0 0 1 7 3z",
    }),
    path({ "d": "M3.84 17h16.32" }),
    path({ "d": "M3.84 7h16.32" }),
  );
};
