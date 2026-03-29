// VanJS Lucide - FolderKey
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const FolderKey = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({
      "d":
        "M13 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.36",
    }),
    path({ "d": "M19 12v6" }),
    path({ "d": "M19 14h2" }),
    circle({
      cx: "19",
      cy: "20",
      "r": "2",
    }),
  );
};
