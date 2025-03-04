// VanJS Lucide - Scale
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Scale = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" }),
    path({ "d": "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" }),
    path({ "d": "M7 21h10" }),
    path({ "d": "M12 3v18" }),
    path({ "d": "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" }),
  );
};
