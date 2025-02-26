// VanJS Lucide - ArrowBigRightDash
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ArrowBigRightDash = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M5 9v6" }),
    path({ "d": "M9 9h3V5l7 7-7 7v-4H9V9z" }),
  );
};
