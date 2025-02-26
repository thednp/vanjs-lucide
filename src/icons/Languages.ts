// VanJS Lucide - Languages
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Languages = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m5 8 6 6" }),
    path({ "d": "m4 14 6-6 2-3" }),
    path({ "d": "M2 5h12" }),
    path({ "d": "M7 2h1" }),
    path({ "d": "m22 22-5-10-5 10" }),
    path({ "d": "M14 18h6" }),
  );
};
