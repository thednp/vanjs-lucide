// VanJS Lucide - LoaderCircle
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const LoaderCircle = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M21 12a9 9 0 1 1-6.219-8.56" }),
  );
};
