// VanJS Lucide - FolderGit2
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const FolderGit2 = (props: Partial<SVGProps> = {}) => {
  const { path, circle } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d":
        "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",
    }),
    circle({ cx: "13", cy: "12", "r": "2" }),
    path({ "d": "M18 19c-2.8 0-5-2.2-5-5v8" }),
    circle({ cx: "20", cy: "19", "r": "2" }),
  );
};
