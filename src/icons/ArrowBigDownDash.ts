// VanJS Lucide - ArrowBigDownDash
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ArrowBigDownDash = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 5H9" }),
    path({ "d": "M15 9v3h4l-7 7-7-7h4V9z" }),
  );
};
