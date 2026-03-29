// VanJS Lucide - Mic
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Mic = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M12 19v3" }),
    path({ "d": "M19 10v2a7 7 0 0 1-14 0v-2" }),
    rect({
      "x": "9",
      "y": "2",
      width: "6",
      height: "13",
      rx: "3",
    }),
  );
};
