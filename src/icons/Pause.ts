// VanJS Lucide - Pause
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Pause = (props: Partial<SVGProps> = {}) => {
  const { rect } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    rect({
      "x": "14",
      "y": "3",
      width: "5",
      height: "18",
      rx: "1",
    }),
    rect({
      "x": "5",
      "y": "3",
      width: "5",
      height: "18",
      rx: "1",
    }),
  );
};
