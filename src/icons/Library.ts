// VanJS Lucide - Library
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Library = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m16 6 4 14" }),
    path({ "d": "M12 6v14" }),
    path({ "d": "M8 8v12" }),
    path({ "d": "M4 4v16" }),
  );
};
