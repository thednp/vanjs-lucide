// VanJS Lucide - EyeClosed
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const EyeClosed = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m15 18-.722-3.25" }),
    path({ "d": "M2 8a10.645 10.645 0 0 0 20 0" }),
    path({ "d": "m20 15-1.726-2.05" }),
    path({ "d": "m4 15 1.726-2.05" }),
    path({ "d": "m9 18 .722-3.25" }),
  );
};
