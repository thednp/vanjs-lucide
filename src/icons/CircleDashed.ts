// VanJS Lucide - CircleDashed
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const CircleDashed = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10.1 2.182a10 10 0 0 1 3.8 0" }),
    path({ "d": "M13.9 21.818a10 10 0 0 1-3.8 0" }),
    path({ "d": "M17.609 3.721a10 10 0 0 1 2.69 2.7" }),
    path({ "d": "M2.182 13.9a10 10 0 0 1 0-3.8" }),
    path({ "d": "M20.279 17.609a10 10 0 0 1-2.7 2.69" }),
    path({ "d": "M21.818 10.1a10 10 0 0 1 0 3.8" }),
    path({ "d": "M3.721 6.391a10 10 0 0 1 2.7-2.69" }),
    path({ "d": "M6.391 20.279a10 10 0 0 1-2.69-2.7" }),
  );
};
