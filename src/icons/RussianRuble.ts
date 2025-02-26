// VanJS Lucide - RussianRuble
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const RussianRuble = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M6 11h8a4 4 0 0 0 0-8H9v18" }),
    path({ "d": "M6 15h8" }),
  );
};
