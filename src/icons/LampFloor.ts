// VanJS Lucide - LampFloor
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const LampFloor = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M9 2h6l3 7H6l3-7Z" }),
    path({ "d": "M12 9v13" }),
    path({ "d": "M9 22h6" }),
  );
};
