// VanJS Lucide - CheckLine
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const CheckLine = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M20 4L9 15" }),
    path({ "d": "M21 19L3 19" }),
    path({ "d": "M9 15L4 10" }),
  );
};
