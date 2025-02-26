// VanJS Lucide - BluetoothOff
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const BluetoothOff = (props: Partial<SVGProps> = {}) => {
  const { path } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m17 17-5 5V12l-5 5" }),
    path({ "d": "m2 2 20 20" }),
    path({ "d": "M14.5 9.5 17 7l-5-5v4.5" }),
  );
};
