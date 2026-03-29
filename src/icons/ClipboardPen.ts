// VanJS Lucide - ClipboardPen
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ClipboardPen = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M16 4h2a2 2 0 0 1 2 2v2" }),
    path({
      "d":
        "M21.34 15.664a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
    }),
    path({ "d": "M8 22H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }),
    rect({
      "x": "8",
      "y": "2",
      width: "8",
      height: "4",
      rx: "1",
    }),
  );
};
