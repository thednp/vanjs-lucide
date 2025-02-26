// VanJS Lucide - MoveDiagonal
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const MoveDiagonal = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M11 19H5v-6" }),
    path({ "d": "M13 5h6v6" }),
    path({ "d": "M19 5 5 19" }),
  );
};
