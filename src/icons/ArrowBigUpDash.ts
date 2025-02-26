// VanJS Lucide - ArrowBigUpDash
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ArrowBigUpDash = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M9 19h6" }),
    path({ "d": "M9 15v-3H5l7-7 7 7h-4v3H9z" }),
  );
};
