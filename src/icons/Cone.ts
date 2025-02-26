// VanJS Lucide - Cone
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Cone = (props: Partial<SVGProps> = {}) => {
  const { path, ellipse } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98" }),
    ellipse({ cx: "12", cy: "19", rx: "9", ry: "3" }),
  );
};
