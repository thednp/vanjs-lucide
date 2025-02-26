// VanJS Lucide - ListTodo
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const ListTodo = (props: Partial<SVGProps> = {}) => {
  const { rect, path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ "x": "3", "y": "5", width: "6", height: "6", rx: "1" }),
    path({ "d": "m3 17 2 2 4-4" }),
    path({ "d": "M13 6h8" }),
    path({ "d": "M13 12h8" }),
    path({ "d": "M13 18h8" }),
  );
};
