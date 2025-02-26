// VanJS Lucide - CheckCheck
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CheckCheck = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M18 6 7 17l-5-5" }),
    path({ "d": "m22 10-7.5 7.5L13 16" }),
  );
};
