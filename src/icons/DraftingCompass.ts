// VanJS Lucide - DraftingCompass
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const DraftingCompass = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m12.99 6.74 1.93 3.44" }),
    path({ "d": "M19.136 12a10 10 0 0 1-14.271 0" }),
    path({ "d": "m21 21-2.16-3.84" }),
    path({ "d": "m3 21 8.02-14.26" }),
    circle({ cx: "12", cy: "5", "r": "2" }),
  );
};
