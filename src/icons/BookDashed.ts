// VanJS Lucide - BookDashed
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const BookDashed = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 17h1.5" }),
    path({ "d": "M12 22h1.5" }),
    path({ "d": "M12 2h1.5" }),
    path({ "d": "M17.5 22H19a1 1 0 0 0 1-1" }),
    path({ "d": "M17.5 2H19a1 1 0 0 1 1 1v1.5" }),
    path({ "d": "M20 14v3h-2.5" }),
    path({ "d": "M20 8.5V10" }),
    path({ "d": "M4 10V8.5" }),
    path({ "d": "M4 19.5V14" }),
    path({ "d": "M4 4.5A2.5 2.5 0 0 1 6.5 2H8" }),
    path({ "d": "M8 22H6.5a1 1 0 0 1 0-5H8" }),
  );
};
