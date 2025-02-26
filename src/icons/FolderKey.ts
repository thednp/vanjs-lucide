// VanJS Lucide - FolderKey
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const FolderKey = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "16", cy: "20", "r": "2" }),
    path({
      "d":
        "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2",
    }),
    path({ "d": "m22 14-4.5 4.5" }),
    path({ "d": "m21 15 1 1" }),
  );
};
