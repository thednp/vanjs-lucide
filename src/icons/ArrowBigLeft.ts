// VanJS Lucide - ArrowBigLeft
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ArrowBigLeft = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M18 15h-6v4l-7-7 7-7v4h6v6z" }),
  );
};
