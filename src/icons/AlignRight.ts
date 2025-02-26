// VanJS Lucide - AlignRight
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const AlignRight = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21 12H9" }),
    path({ "d": "M21 18H7" }),
    path({ "d": "M21 6H3" }),
  );
};
