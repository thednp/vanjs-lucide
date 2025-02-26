// VanJS Lucide - ArrowBigLeftDash
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ArrowBigLeftDash = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M19 15V9" }),
    path({ "d": "M15 15h-3v4l-7-7 7-7v4h3v6z" }),
  );
};
