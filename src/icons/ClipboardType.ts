// VanJS Lucide - ClipboardType
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ClipboardType = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "8", height: "4", "x": "8", "y": "2", rx: "1", ry: "1" }),
    path({
      "d":
        "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
    }),
    path({ "d": "M9 12v-1h6v1" }),
    path({ "d": "M11 17h2" }),
    path({ "d": "M12 11v6" }),
  );
};
