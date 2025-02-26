// VanJS Lucide - CloudSnow
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CloudSnow = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }),
    path({ "d": "M8 15h.01" }),
    path({ "d": "M8 19h.01" }),
    path({ "d": "M12 17h.01" }),
    path({ "d": "M12 21h.01" }),
    path({ "d": "M16 15h.01" }),
    path({ "d": "M16 19h.01" }),
  );
};
