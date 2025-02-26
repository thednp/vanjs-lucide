// VanJS Lucide - Sticker
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Sticker = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d":
        "M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z",
    }),
    path({ "d": "M14 3v4a2 2 0 0 0 2 2h4" }),
    path({ "d": "M8 13h.01" }),
    path({ "d": "M16 13h.01" }),
    path({ "d": "M10 16s.8 1 2 1c1.3 0 2-1 2-1" }),
  );
};
