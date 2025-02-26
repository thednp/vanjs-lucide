// VanJS Lucide - CircleUser
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CircleUser = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    circle({ cx: "12", cy: "10", "r": "3" }),
    path({ "d": "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" }),
  );
};
