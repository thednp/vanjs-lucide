// VanJS Lucide - Pilcrow
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Pilcrow = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M13 4v16" }),
    path({ "d": "M17 4v16" }),
    path({ "d": "M19 4H9.5a4.5 4.5 0 0 0 0 9H13" }),
  );
};
