// VanJS Lucide - FileAudio2
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const FileAudio2 = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    circle({ cx: "3", cy: "17", "r": "1" }),
    path({ "d": "M2 17v-3a4 4 0 0 1 8 0v3" }),
    circle({ cx: "9", cy: "17", "r": "1" }),
  );
};
