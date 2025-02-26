// VanJS Lucide - Umbrella
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const Umbrella = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M22 12a10.06 10.06 1 0 0-20 0Z" }),
    path({ "d": "M12 12v8a2 2 0 0 0 4 0" }),
    path({ "d": "M12 2v1" }),
  );
};
