// VanJS Lucide - FolderCog
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const FolderCog = (props: Partial<SVGProps> = {}) => {
  const { circle, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "18", cy: "18", "r": "3" }),
    path({
      "d":
        "M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3",
    }),
    path({ "d": "m21.7 19.4-.9-.3" }),
    path({ "d": "m15.2 16.9-.9-.3" }),
    path({ "d": "m16.6 21.7.3-.9" }),
    path({ "d": "m19.1 15.2.3-.9" }),
    path({ "d": "m19.6 21.7-.4-1" }),
    path({ "d": "m16.8 15.3-.4-1" }),
    path({ "d": "m14.3 19.6 1-.4" }),
    path({ "d": "m20.7 16.8 1-.4" }),
  );
};
