// VanJS Lucide - BluetoothConnected
import van from "vanjs-core";
import { LucideIcon, svgNamespace } from "../LucideIcon";
import { type SVGProps } from "../types";

export const BluetoothConnected = (props: Partial<SVGProps> = {}) => {
  const { path, line } = van.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m7 7 10 10-5 5V2l5 5L7 17" }),
    line({ x1: "18", x2: "21", y1: "12", y2: "12" }),
    line({ x1: "3", x2: "6", y1: "12", y2: "12" }),
  );
};
