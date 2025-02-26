// VanJS Lucide - ListMusic
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ListMusic = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21 15V6" }),
    path({ "d": "M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" }),
    path({ "d": "M12 12H3" }),
    path({ "d": "M16 6H3" }),
    path({ "d": "M12 18H3" }),
  );
};
