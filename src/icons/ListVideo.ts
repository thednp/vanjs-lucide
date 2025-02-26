// VanJS Lucide - ListVideo
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ListVideo = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 12H3" }),
    path({ "d": "M16 6H3" }),
    path({ "d": "M12 18H3" }),
    path({ "d": "m16 12 5 3-5 3v-6Z" }),
  );
};
