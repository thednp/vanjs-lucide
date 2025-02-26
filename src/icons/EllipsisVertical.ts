// VanJS Lucide - EllipsisVertical
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const EllipsisVertical = (props: Partial<SVGProps> = {}) => {
  const { circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "1" }),
    circle({ cx: "12", cy: "5", "r": "1" }),
    circle({ cx: "12", cy: "19", "r": "1" }),
  );
};
