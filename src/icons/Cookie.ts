// VanJS Lucide - Cookie
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Cookie = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" }),
    path({ "d": "M8.5 8.5v.01" }),
    path({ "d": "M16 15.5v.01" }),
    path({ "d": "M12 12v.01" }),
    path({ "d": "M11 17v.01" }),
    path({ "d": "M7 14v.01" }),
  );
};
