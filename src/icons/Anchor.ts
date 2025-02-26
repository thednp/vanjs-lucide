// VanJS Lucide - Anchor
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Anchor = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 22V8" }),
    path({ "d": "M5 12H2a10 10 0 0 0 20 0h-3" }),
    circle({ cx: "12", cy: "5", "r": "3" }),
  );
};
