// VanJS Lucide - SwitchCamera
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const SwitchCamera = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" }),
    path({ "d": "M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5" }),
    circle({ cx: "12", cy: "12", "r": "3" }),
    path({ "d": "m18 22-3-3 3-3" }),
    path({ "d": "m6 2 3 3-3 3" }),
  );
};
