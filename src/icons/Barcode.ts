// VanJS Lucide - Barcode
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Barcode = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 5v14" }),
    path({ "d": "M8 5v14" }),
    path({ "d": "M12 5v14" }),
    path({ "d": "M17 5v14" }),
    path({ "d": "M21 5v14" }),
  );
};
