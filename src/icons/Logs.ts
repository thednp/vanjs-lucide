// VanJS Lucide - Logs
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Logs = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M13 12h8" }),
    path({ "d": "M13 18h8" }),
    path({ "d": "M13 6h8" }),
    path({ "d": "M3 12h1" }),
    path({ "d": "M3 18h1" }),
    path({ "d": "M3 6h1" }),
    path({ "d": "M8 12h1" }),
    path({ "d": "M8 18h1" }),
    path({ "d": "M8 6h1" }),
  );
};
