// VanJS Lucide - MouseOff
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const MouseOff = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 6v.343" }),
    path({ "d": "M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218" }),
    path({ "d": "M19 13.343V9A7 7 0 0 0 8.56 2.902" }),
    path({ "d": "M22 22 2 2" }),
  );
};
