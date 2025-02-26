// VanJS Lucide - Lasso
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Lasso = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M7 22a5 5 0 0 1-2-4" }),
    path({
      "d":
        "M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1",
    }),
    path({ "d": "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" }),
  );
};
