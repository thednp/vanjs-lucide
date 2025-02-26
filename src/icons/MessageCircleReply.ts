// VanJS Lucide - MessageCircleReply
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const MessageCircleReply = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }),
    path({ "d": "m10 15-3-3 3-3" }),
    path({ "d": "M7 12h7a2 2 0 0 1 2 2v1" }),
  );
};
