// VanJS Lucide - BluetoothSearching
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const BluetoothSearching = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m7 7 10 10-5 5V2l5 5L7 17" }),
    path({ "d": "M20.83 14.83a4 4 0 0 0 0-5.66" }),
    path({ "d": "M18 12h.01" }),
  );
};
