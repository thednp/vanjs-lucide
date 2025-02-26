// VanJS Lucide - NotepadText
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const NotepadText = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 2v4" }),
    path({ "d": "M12 2v4" }),
    path({ "d": "M16 2v4" }),
    rect({ width: "16", height: "18", "x": "4", "y": "4", rx: "2" }),
    path({ "d": "M8 10h6" }),
    path({ "d": "M8 14h8" }),
    path({ "d": "M8 18h5" }),
  );
};
