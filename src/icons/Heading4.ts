// VanJS Lucide - Heading4
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Heading4 = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 18V6" }),
    path({ "d": "M17 10v3a1 1 0 0 0 1 1h3" }),
    path({ "d": "M21 10v8" }),
    path({ "d": "M4 12h8" }),
    path({ "d": "M4 18V6" }),
  );
};
