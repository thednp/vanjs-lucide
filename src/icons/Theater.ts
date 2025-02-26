// VanJS Lucide - Theater
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Theater = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 10s3-3 3-8" }),
    path({ "d": "M22 10s-3-3-3-8" }),
    path({ "d": "M10 2c0 4.4-3.6 8-8 8" }),
    path({ "d": "M14 2c0 4.4 3.6 8 8 8" }),
    path({ "d": "M2 10s2 2 2 5" }),
    path({ "d": "M22 10s-2 2-2 5" }),
    path({ "d": "M8 15h8" }),
    path({ "d": "M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" }),
    path({ "d": "M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" }),
  );
};
