// VanJS Lucide - SunMedium
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const SunMedium = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "4" }),
    path({ "d": "M12 3v1" }),
    path({ "d": "M12 20v1" }),
    path({ "d": "M3 12h1" }),
    path({ "d": "M20 12h1" }),
    path({ "d": "m18.364 5.636-.707.707" }),
    path({ "d": "m6.343 17.657-.707.707" }),
    path({ "d": "m5.636 5.636.707.707" }),
    path({ "d": "m17.657 17.657.707.707" }),
  );
};
