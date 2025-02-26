// VanJS Lucide - Utensils
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Utensils = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" }),
    path({ "d": "M7 2v20" }),
    path({ "d": "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" }),
  );
};
