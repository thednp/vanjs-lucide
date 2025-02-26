// VanJS Lucide - Orbit
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Orbit = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "3" }),
    circle({ cx: "19", cy: "5", "r": "2" }),
    circle({ cx: "5", cy: "19", "r": "2" }),
    path({ "d": "M10.4 21.9a10 10 0 0 0 9.941-15.416" }),
    path({ "d": "M13.5 2.1a10 10 0 0 0-9.841 15.416" }),
  );
};
