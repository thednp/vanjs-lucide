// VanJS Lucide - Twitch
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Twitch = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" }),
  );
};
