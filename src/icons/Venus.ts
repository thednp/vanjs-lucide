// VanJS Lucide - Venus
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Venus = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 15v7" }),
    path({ "d": "M9 19h6" }),
    circle({ cx: "12", cy: "9", "r": "6" }),
  );
};
