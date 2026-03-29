// VanJS Lucide - Calendars
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const Calendars = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M12 2v2" }),
    path({
      "d": "M15.726 21.01A2 2 0 0 1 14 22H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2",
    }),
    path({ "d": "M18 2v2" }),
    path({ "d": "M2 13h2" }),
    path({ "d": "M8 8h14" }),
    rect({
      "x": "8",
      "y": "3",
      width: "14",
      height: "14",
      rx: "2",
    }),
  );
};
