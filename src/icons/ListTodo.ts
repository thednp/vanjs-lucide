// VanJS Lucide - ListTodo
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon.ts";
import { type SVGProps } from "../types.ts";

export const ListTodo = (props: Partial<SVGProps> = {}) => {
  const { path, rect } = van.tags(svgNamespace);

  return LucideIcon(
    props,
    path({ "d": "M13 5h8" }),
    path({ "d": "M13 12h8" }),
    path({ "d": "M13 19h8" }),
    path({ "d": "m3 17 2 2 4-4" }),
    rect({
      "x": "3",
      "y": "4",
      width: "6",
      height: "6",
      rx: "1",
    }),
  );
};
