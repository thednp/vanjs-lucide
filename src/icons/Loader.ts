// VanJS Lucide - Loader
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Loader = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 2v4" }),
    path({ "d": "m16.2 7.8 2.9-2.9" }),
    path({ "d": "M18 12h4" }),
    path({ "d": "m16.2 16.2 2.9 2.9" }),
    path({ "d": "M12 18v4" }),
    path({ "d": "m4.9 19.1 2.9-2.9" }),
    path({ "d": "M2 12h4" }),
    path({ "d": "m4.9 4.9 2.9 2.9" }),
  );
};
