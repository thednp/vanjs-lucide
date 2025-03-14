var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/icons/AArrowDown.ts
import van2 from "vanjs-core";

// src/LucideIcon.ts
import van from "vanjs-core";
var svgNamespace = "http://www.w3.org/2000/svg";
var LucideIcon = /* @__PURE__ */ __name((initialProps = {}, ...children) => {
  const { svg } = van.tags(svgNamespace);
  const props = Object.fromEntries(
    Object.entries(initialProps).filter(([_, val]) => val)
  );
  const defaultProps = {
    xmlns: svgNamespace,
    viewBox: "0 0 24 24",
    fill: "none",
    width: 24,
    height: 24,
    stroke: "currentColor",
    "stroke-width": 2,
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  };
  return svg(
    {
      ...defaultProps,
      ...props
    },
    children
  );
}, "LucideIcon");

// src/icons/AArrowDown.ts
var AArrowDown = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van2.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3.5 13h6" }),
    path({ "d": "m2 16 4.5-9 4.5 9" }),
    path({ "d": "M18 7v9" }),
    path({ "d": "m14 12 4 4 4-4" })
  );
}, "AArrowDown");

// src/icons/AArrowUp.ts
import van3 from "vanjs-core";
var AArrowUp = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van3.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3.5 13h6" }),
    path({ "d": "m2 16 4.5-9 4.5 9" }),
    path({ "d": "M18 16V7" }),
    path({ "d": "m14 11 4-4 4 4" })
  );
}, "AArrowUp");

// src/icons/ALargeSmall.ts
import van4 from "vanjs-core";
var ALargeSmall = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van4.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21 14h-5" }),
    path({ "d": "M16 16v-3.5a2.5 2.5 0 0 1 5 0V16" }),
    path({ "d": "M4.5 13h6" }),
    path({ "d": "m3 16 4.5-9 4.5 9" })
  );
}, "ALargeSmall");

// src/icons/Accessibility.ts
import van5 from "vanjs-core";
var Accessibility = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van5.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "16", cy: "4", "r": "1" }),
    path({ "d": "m18 19 1-7-6 1" }),
    path({ "d": "m5 8 3-3 5.5 3-2.36 3.5" }),
    path({ "d": "M4.24 14.5a5 5 0 0 0 6.88 6" }),
    path({ "d": "M13.76 17.5a5 5 0 0 0-6.88-6" })
  );
}, "Accessibility");

// src/icons/Activity.ts
import van6 from "vanjs-core";
var Activity = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van6.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
    })
  );
}, "Activity");

// src/icons/AirVent.ts
import van7 from "vanjs-core";
var AirVent = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van7.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
    }),
    path({ "d": "M6 8h12" }),
    path({
      "d": "M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12"
    }),
    path({ "d": "M6.6 15.6A2 2 0 1 0 10 17v-5" })
  );
}, "AirVent");

// src/icons/Airplay.ts
import van8 from "vanjs-core";
var Airplay = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van8.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"
    }),
    path({ "d": "m12 15 5 6H7Z" })
  );
}, "Airplay");

// src/icons/AlarmClockCheck.ts
import van9 from "vanjs-core";
var AlarmClockCheck = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van9.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "13", "r": "8" }),
    path({ "d": "M5 3 2 6" }),
    path({ "d": "m22 6-3-3" }),
    path({ "d": "M6.38 18.7 4 21" }),
    path({ "d": "M17.64 18.67 20 21" }),
    path({ "d": "m9 13 2 2 4-4" })
  );
}, "AlarmClockCheck");

// src/icons/AlarmClockMinus.ts
import van10 from "vanjs-core";
var AlarmClockMinus = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van10.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "13", "r": "8" }),
    path({ "d": "M5 3 2 6" }),
    path({ "d": "m22 6-3-3" }),
    path({ "d": "M6.38 18.7 4 21" }),
    path({ "d": "M17.64 18.67 20 21" }),
    path({ "d": "M9 13h6" })
  );
}, "AlarmClockMinus");

// src/icons/AlarmClockOff.ts
import van11 from "vanjs-core";
var AlarmClockOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van11.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M6.87 6.87a8 8 0 1 0 11.26 11.26" }),
    path({ "d": "M19.9 14.25a8 8 0 0 0-9.15-9.15" }),
    path({ "d": "m22 6-3-3" }),
    path({ "d": "M6.26 18.67 4 21" }),
    path({ "d": "m2 2 20 20" }),
    path({ "d": "M4 4 2 6" })
  );
}, "AlarmClockOff");

// src/icons/AlarmClockPlus.ts
import van12 from "vanjs-core";
var AlarmClockPlus = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van12.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "13", "r": "8" }),
    path({ "d": "M5 3 2 6" }),
    path({ "d": "m22 6-3-3" }),
    path({ "d": "M6.38 18.7 4 21" }),
    path({ "d": "M17.64 18.67 20 21" }),
    path({ "d": "M12 10v6" }),
    path({ "d": "M9 13h6" })
  );
}, "AlarmClockPlus");

// src/icons/AlarmClock.ts
import van13 from "vanjs-core";
var AlarmClock = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van13.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "13", "r": "8" }),
    path({ "d": "M12 9v4l2 2" }),
    path({ "d": "M5 3 2 6" }),
    path({ "d": "m22 6-3-3" }),
    path({ "d": "M6.38 18.7 4 21" }),
    path({ "d": "M17.64 18.67 20 21" })
  );
}, "AlarmClock");

// src/icons/AlarmSmoke.ts
import van14 from "vanjs-core";
var AlarmSmoke = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van14.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M11 21c0-2.5 2-2.5 2-5" }),
    path({ "d": "M16 21c0-2.5 2-2.5 2-5" }),
    path({
      "d": "m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8"
    }),
    path({
      "d": "M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z"
    }),
    path({ "d": "M6 21c0-2.5 2-2.5 2-5" })
  );
}, "AlarmSmoke");

// src/icons/Album.ts
import van15 from "vanjs-core";
var Album = /* @__PURE__ */ __name((props = {}) => {
  const { rect, polyline } = van15.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2", ry: "2" }),
    polyline({ points: "11 3 11 11 14 8 17 11 17 3" })
  );
}, "Album");

// src/icons/AlignCenterHorizontal.ts
import van16 from "vanjs-core";
var AlignCenterHorizontal = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van16.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 12h20" }),
    path({ "d": "M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4" }),
    path({ "d": "M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4" }),
    path({ "d": "M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1" }),
    path({ "d": "M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1" })
  );
}, "AlignCenterHorizontal");

// src/icons/AlignCenterVertical.ts
import van17 from "vanjs-core";
var AlignCenterVertical = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van17.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 2v20" }),
    path({ "d": "M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4" }),
    path({ "d": "M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4" }),
    path({ "d": "M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1" }),
    path({ "d": "M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1" })
  );
}, "AlignCenterVertical");

// src/icons/AlignCenter.ts
import van18 from "vanjs-core";
var AlignCenter = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van18.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M17 12H7" }),
    path({ "d": "M19 18H5" }),
    path({ "d": "M21 6H3" })
  );
}, "AlignCenter");

// src/icons/AlignEndHorizontal.ts
import van19 from "vanjs-core";
var AlignEndHorizontal = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van19.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "6", height: "16", "x": "4", "y": "2", rx: "2" }),
    rect({ width: "6", height: "9", "x": "14", "y": "9", rx: "2" }),
    path({ "d": "M22 22H2" })
  );
}, "AlignEndHorizontal");

// src/icons/AlignEndVertical.ts
import van20 from "vanjs-core";
var AlignEndVertical = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van20.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "16", height: "6", "x": "2", "y": "4", rx: "2" }),
    rect({ width: "9", height: "6", "x": "9", "y": "14", rx: "2" }),
    path({ "d": "M22 22V2" })
  );
}, "AlignEndVertical");

// src/icons/AlignHorizontalDistributeCenter.ts
import van21 from "vanjs-core";
var AlignHorizontalDistributeCenter = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van21.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "6", height: "14", "x": "4", "y": "5", rx: "2" }),
    rect({ width: "6", height: "10", "x": "14", "y": "7", rx: "2" }),
    path({ "d": "M17 22v-5" }),
    path({ "d": "M17 7V2" }),
    path({ "d": "M7 22v-3" }),
    path({ "d": "M7 5V2" })
  );
}, "AlignHorizontalDistributeCenter");

// src/icons/AlignHorizontalDistributeEnd.ts
import van22 from "vanjs-core";
var AlignHorizontalDistributeEnd = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van22.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "6", height: "14", "x": "4", "y": "5", rx: "2" }),
    rect({ width: "6", height: "10", "x": "14", "y": "7", rx: "2" }),
    path({ "d": "M10 2v20" }),
    path({ "d": "M20 2v20" })
  );
}, "AlignHorizontalDistributeEnd");

// src/icons/AlignHorizontalDistributeStart.ts
import van23 from "vanjs-core";
var AlignHorizontalDistributeStart = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van23.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "6", height: "14", "x": "4", "y": "5", rx: "2" }),
    rect({ width: "6", height: "10", "x": "14", "y": "7", rx: "2" }),
    path({ "d": "M4 2v20" }),
    path({ "d": "M14 2v20" })
  );
}, "AlignHorizontalDistributeStart");

// src/icons/AlignHorizontalJustifyCenter.ts
import van24 from "vanjs-core";
var AlignHorizontalJustifyCenter = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van24.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "6", height: "14", "x": "2", "y": "5", rx: "2" }),
    rect({ width: "6", height: "10", "x": "16", "y": "7", rx: "2" }),
    path({ "d": "M12 2v20" })
  );
}, "AlignHorizontalJustifyCenter");

// src/icons/AlignHorizontalJustifyEnd.ts
import van25 from "vanjs-core";
var AlignHorizontalJustifyEnd = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van25.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "6", height: "14", "x": "2", "y": "5", rx: "2" }),
    rect({ width: "6", height: "10", "x": "12", "y": "7", rx: "2" }),
    path({ "d": "M22 2v20" })
  );
}, "AlignHorizontalJustifyEnd");

// src/icons/AlignHorizontalJustifyStart.ts
import van26 from "vanjs-core";
var AlignHorizontalJustifyStart = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van26.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "6", height: "14", "x": "6", "y": "5", rx: "2" }),
    rect({ width: "6", height: "10", "x": "16", "y": "7", rx: "2" }),
    path({ "d": "M2 2v20" })
  );
}, "AlignHorizontalJustifyStart");

// src/icons/AlignHorizontalSpaceAround.ts
import van27 from "vanjs-core";
var AlignHorizontalSpaceAround = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van27.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "6", height: "10", "x": "9", "y": "7", rx: "2" }),
    path({ "d": "M4 22V2" }),
    path({ "d": "M20 22V2" })
  );
}, "AlignHorizontalSpaceAround");

// src/icons/AlignHorizontalSpaceBetween.ts
import van28 from "vanjs-core";
var AlignHorizontalSpaceBetween = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van28.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "6", height: "14", "x": "3", "y": "5", rx: "2" }),
    rect({ width: "6", height: "10", "x": "15", "y": "7", rx: "2" }),
    path({ "d": "M3 2v20" }),
    path({ "d": "M21 2v20" })
  );
}, "AlignHorizontalSpaceBetween");

// src/icons/AlignJustify.ts
import van29 from "vanjs-core";
var AlignJustify = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van29.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 12h18" }),
    path({ "d": "M3 18h18" }),
    path({ "d": "M3 6h18" })
  );
}, "AlignJustify");

// src/icons/AlignLeft.ts
import van30 from "vanjs-core";
var AlignLeft = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van30.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 12H3" }),
    path({ "d": "M17 18H3" }),
    path({ "d": "M21 6H3" })
  );
}, "AlignLeft");

// src/icons/AlignRight.ts
import van31 from "vanjs-core";
var AlignRight = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van31.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21 12H9" }),
    path({ "d": "M21 18H7" }),
    path({ "d": "M21 6H3" })
  );
}, "AlignRight");

// src/icons/AlignStartHorizontal.ts
import van32 from "vanjs-core";
var AlignStartHorizontal = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van32.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "6", height: "16", "x": "4", "y": "6", rx: "2" }),
    rect({ width: "6", height: "9", "x": "14", "y": "6", rx: "2" }),
    path({ "d": "M22 2H2" })
  );
}, "AlignStartHorizontal");

// src/icons/AlignStartVertical.ts
import van33 from "vanjs-core";
var AlignStartVertical = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van33.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "9", height: "6", "x": "6", "y": "14", rx: "2" }),
    rect({ width: "16", height: "6", "x": "6", "y": "4", rx: "2" }),
    path({ "d": "M2 2v20" })
  );
}, "AlignStartVertical");

// src/icons/AlignVerticalDistributeCenter.ts
import van34 from "vanjs-core";
var AlignVerticalDistributeCenter = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van34.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M22 17h-3" }),
    path({ "d": "M22 7h-5" }),
    path({ "d": "M5 17H2" }),
    path({ "d": "M7 7H2" }),
    rect({ "x": "5", "y": "14", width: "14", height: "6", rx: "2" }),
    rect({ "x": "7", "y": "4", width: "10", height: "6", rx: "2" })
  );
}, "AlignVerticalDistributeCenter");

// src/icons/AlignVerticalDistributeEnd.ts
import van35 from "vanjs-core";
var AlignVerticalDistributeEnd = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van35.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "14", height: "6", "x": "5", "y": "14", rx: "2" }),
    rect({ width: "10", height: "6", "x": "7", "y": "4", rx: "2" }),
    path({ "d": "M2 20h20" }),
    path({ "d": "M2 10h20" })
  );
}, "AlignVerticalDistributeEnd");

// src/icons/AlignVerticalDistributeStart.ts
import van36 from "vanjs-core";
var AlignVerticalDistributeStart = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van36.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "14", height: "6", "x": "5", "y": "14", rx: "2" }),
    rect({ width: "10", height: "6", "x": "7", "y": "4", rx: "2" }),
    path({ "d": "M2 14h20" }),
    path({ "d": "M2 4h20" })
  );
}, "AlignVerticalDistributeStart");

// src/icons/AlignVerticalJustifyCenter.ts
import van37 from "vanjs-core";
var AlignVerticalJustifyCenter = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van37.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "14", height: "6", "x": "5", "y": "16", rx: "2" }),
    rect({ width: "10", height: "6", "x": "7", "y": "2", rx: "2" }),
    path({ "d": "M2 12h20" })
  );
}, "AlignVerticalJustifyCenter");

// src/icons/AlignVerticalJustifyEnd.ts
import van38 from "vanjs-core";
var AlignVerticalJustifyEnd = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van38.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "14", height: "6", "x": "5", "y": "12", rx: "2" }),
    rect({ width: "10", height: "6", "x": "7", "y": "2", rx: "2" }),
    path({ "d": "M2 22h20" })
  );
}, "AlignVerticalJustifyEnd");

// src/icons/AlignVerticalJustifyStart.ts
import van39 from "vanjs-core";
var AlignVerticalJustifyStart = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van39.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "14", height: "6", "x": "5", "y": "16", rx: "2" }),
    rect({ width: "10", height: "6", "x": "7", "y": "6", rx: "2" }),
    path({ "d": "M2 2h20" })
  );
}, "AlignVerticalJustifyStart");

// src/icons/AlignVerticalSpaceAround.ts
import van40 from "vanjs-core";
var AlignVerticalSpaceAround = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van40.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "10", height: "6", "x": "7", "y": "9", rx: "2" }),
    path({ "d": "M22 20H2" }),
    path({ "d": "M22 4H2" })
  );
}, "AlignVerticalSpaceAround");

// src/icons/AlignVerticalSpaceBetween.ts
import van41 from "vanjs-core";
var AlignVerticalSpaceBetween = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van41.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "14", height: "6", "x": "5", "y": "15", rx: "2" }),
    rect({ width: "10", height: "6", "x": "7", "y": "3", rx: "2" }),
    path({ "d": "M2 21h20" }),
    path({ "d": "M2 3h20" })
  );
}, "AlignVerticalSpaceBetween");

// src/icons/Ambulance.ts
import van42 from "vanjs-core";
var Ambulance = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van42.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 10H6" }),
    path({ "d": "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" }),
    path({
      "d": "M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14"
    }),
    path({ "d": "M8 8v4" }),
    path({ "d": "M9 18h6" }),
    circle({ cx: "17", cy: "18", "r": "2" }),
    circle({ cx: "7", cy: "18", "r": "2" })
  );
}, "Ambulance");

// src/icons/Ampersand.ts
import van43 from "vanjs-core";
var Ampersand = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van43.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13"
    }),
    path({ "d": "M16 12h3" })
  );
}, "Ampersand");

// src/icons/Ampersands.ts
import van44 from "vanjs-core";
var Ampersands = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van44.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"
    }),
    path({
      "d": "M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"
    })
  );
}, "Ampersands");

// src/icons/Amphora.ts
import van45 from "vanjs-core";
var Amphora = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van45.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8"
    }),
    path({ "d": "M10 5H8a2 2 0 0 0 0 4h.68" }),
    path({
      "d": "M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8"
    }),
    path({ "d": "M14 5h2a2 2 0 0 1 0 4h-.68" }),
    path({ "d": "M18 22H6" }),
    path({ "d": "M9 2h6" })
  );
}, "Amphora");

// src/icons/Anchor.ts
import van46 from "vanjs-core";
var Anchor = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van46.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 22V8" }),
    path({ "d": "M5 12H2a10 10 0 0 0 20 0h-3" }),
    circle({ cx: "12", cy: "5", "r": "3" })
  );
}, "Anchor");

// src/icons/Angry.ts
import van47 from "vanjs-core";
var Angry = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van47.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "M16 16s-1.5-2-4-2-4 2-4 2" }),
    path({ "d": "M7.5 8 10 9" }),
    path({ "d": "m14 9 2.5-1" }),
    path({ "d": "M9 10h.01" }),
    path({ "d": "M15 10h.01" })
  );
}, "Angry");

// src/icons/Annoyed.ts
import van48 from "vanjs-core";
var Annoyed = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van48.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "M8 15h8" }),
    path({ "d": "M8 9h2" }),
    path({ "d": "M14 9h2" })
  );
}, "Annoyed");

// src/icons/Antenna.ts
import van49 from "vanjs-core";
var Antenna = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van49.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 12 7 2" }),
    path({ "d": "m7 12 5-10" }),
    path({ "d": "m12 12 5-10" }),
    path({ "d": "m17 12 5-10" }),
    path({ "d": "M4.5 7h15" }),
    path({ "d": "M12 16v6" })
  );
}, "Antenna");

// src/icons/Anvil.ts
import van50 from "vanjs-core";
var Anvil = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van50.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4" }),
    path({
      "d": "M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z"
    }),
    path({ "d": "M9 12v5" }),
    path({ "d": "M15 12v5" }),
    path({
      "d": "M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1"
    })
  );
}, "Anvil");

// src/icons/Aperture.ts
import van51 from "vanjs-core";
var Aperture = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van51.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "m14.31 8 5.74 9.94" }),
    path({ "d": "M9.69 8h11.48" }),
    path({ "d": "m7.38 12 5.74-9.94" }),
    path({ "d": "M9.69 16 3.95 6.06" }),
    path({ "d": "M14.31 16H2.83" }),
    path({ "d": "m16.62 12-5.74 9.94" })
  );
}, "Aperture");

// src/icons/AppWindowMac.ts
import van52 from "vanjs-core";
var AppWindowMac = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van52.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "20", height: "16", "x": "2", "y": "4", rx: "2" }),
    path({ "d": "M6 8h.01" }),
    path({ "d": "M10 8h.01" }),
    path({ "d": "M14 8h.01" })
  );
}, "AppWindowMac");

// src/icons/AppWindow.ts
import van53 from "vanjs-core";
var AppWindow = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van53.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ "x": "2", "y": "4", width: "20", height: "16", rx: "2" }),
    path({ "d": "M10 4v4" }),
    path({ "d": "M2 8h20" }),
    path({ "d": "M6 4v4" })
  );
}, "AppWindow");

// src/icons/Apple.ts
import van54 from "vanjs-core";
var Apple = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van54.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"
    }),
    path({ "d": "M10 2c1 .5 2 2 2 5" })
  );
}, "Apple");

// src/icons/ArchiveRestore.ts
import van55 from "vanjs-core";
var ArchiveRestore = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van55.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "20", height: "5", "x": "2", "y": "3", rx: "1" }),
    path({ "d": "M4 8v11a2 2 0 0 0 2 2h2" }),
    path({ "d": "M20 8v11a2 2 0 0 1-2 2h-2" }),
    path({ "d": "m9 15 3-3 3 3" }),
    path({ "d": "M12 12v9" })
  );
}, "ArchiveRestore");

// src/icons/ArchiveX.ts
import van56 from "vanjs-core";
var ArchiveX = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van56.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "20", height: "5", "x": "2", "y": "3", rx: "1" }),
    path({ "d": "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" }),
    path({ "d": "m9.5 17 5-5" }),
    path({ "d": "m9.5 12 5 5" })
  );
}, "ArchiveX");

// src/icons/Archive.ts
import van57 from "vanjs-core";
var Archive = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van57.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "20", height: "5", "x": "2", "y": "3", rx: "1" }),
    path({ "d": "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" }),
    path({ "d": "M10 12h4" })
  );
}, "Archive");

// src/icons/Armchair.ts
import van58 from "vanjs-core";
var Armchair = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van58.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" }),
    path({
      "d": "M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"
    }),
    path({ "d": "M5 18v2" }),
    path({ "d": "M19 18v2" })
  );
}, "Armchair");

// src/icons/ArrowBigDownDash.ts
import van59 from "vanjs-core";
var ArrowBigDownDash = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van59.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 5H9" }),
    path({ "d": "M15 9v3h4l-7 7-7-7h4V9z" })
  );
}, "ArrowBigDownDash");

// src/icons/ArrowBigDown.ts
import van60 from "vanjs-core";
var ArrowBigDown = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van60.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 6v6h4l-7 7-7-7h4V6h6z" })
  );
}, "ArrowBigDown");

// src/icons/ArrowBigLeftDash.ts
import van61 from "vanjs-core";
var ArrowBigLeftDash = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van61.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M19 15V9" }),
    path({ "d": "M15 15h-3v4l-7-7 7-7v4h3v6z" })
  );
}, "ArrowBigLeftDash");

// src/icons/ArrowBigLeft.ts
import van62 from "vanjs-core";
var ArrowBigLeft = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van62.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M18 15h-6v4l-7-7 7-7v4h6v6z" })
  );
}, "ArrowBigLeft");

// src/icons/ArrowBigRightDash.ts
import van63 from "vanjs-core";
var ArrowBigRightDash = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van63.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M5 9v6" }),
    path({ "d": "M9 9h3V5l7 7-7 7v-4H9V9z" })
  );
}, "ArrowBigRightDash");

// src/icons/ArrowBigRight.ts
import van64 from "vanjs-core";
var ArrowBigRight = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van64.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M6 9h6V5l7 7-7 7v-4H6V9z" })
  );
}, "ArrowBigRight");

// src/icons/ArrowBigUpDash.ts
import van65 from "vanjs-core";
var ArrowBigUpDash = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van65.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M9 19h6" }),
    path({ "d": "M9 15v-3H5l7-7 7 7h-4v3H9z" })
  );
}, "ArrowBigUpDash");

// src/icons/ArrowBigUp.ts
import van66 from "vanjs-core";
var ArrowBigUp = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van66.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M9 18v-6H5l7-7 7 7h-4v6H9z" })
  );
}, "ArrowBigUp");

// src/icons/ArrowDown01.ts
import van67 from "vanjs-core";
var ArrowDown01 = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van67.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m3 16 4 4 4-4" }),
    path({ "d": "M7 20V4" }),
    rect({ "x": "15", "y": "4", width: "4", height: "6", ry: "2" }),
    path({ "d": "M17 20v-6h-2" }),
    path({ "d": "M15 20h4" })
  );
}, "ArrowDown01");

// src/icons/ArrowDown10.ts
import van68 from "vanjs-core";
var ArrowDown10 = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van68.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m3 16 4 4 4-4" }),
    path({ "d": "M7 20V4" }),
    path({ "d": "M17 10V4h-2" }),
    path({ "d": "M15 10h4" }),
    rect({ "x": "15", "y": "14", width: "4", height: "6", ry: "2" })
  );
}, "ArrowDown10");

// src/icons/ArrowDownAZ.ts
import van69 from "vanjs-core";
var ArrowDownAZ = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van69.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m3 16 4 4 4-4" }),
    path({ "d": "M7 20V4" }),
    path({ "d": "M20 8h-5" }),
    path({ "d": "M15 10V6.5a2.5 2.5 0 0 1 5 0V10" }),
    path({ "d": "M15 14h5l-5 6h5" })
  );
}, "ArrowDownAZ");

// src/icons/ArrowDownFromLine.ts
import van70 from "vanjs-core";
var ArrowDownFromLine = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van70.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M19 3H5" }),
    path({ "d": "M12 21V7" }),
    path({ "d": "m6 15 6 6 6-6" })
  );
}, "ArrowDownFromLine");

// src/icons/ArrowDownLeft.ts
import van71 from "vanjs-core";
var ArrowDownLeft = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van71.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M17 7 7 17" }),
    path({ "d": "M17 17H7V7" })
  );
}, "ArrowDownLeft");

// src/icons/ArrowDownNarrowWide.ts
import van72 from "vanjs-core";
var ArrowDownNarrowWide = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van72.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m3 16 4 4 4-4" }),
    path({ "d": "M7 20V4" }),
    path({ "d": "M11 4h4" }),
    path({ "d": "M11 8h7" }),
    path({ "d": "M11 12h10" })
  );
}, "ArrowDownNarrowWide");

// src/icons/ArrowDownRight.ts
import van73 from "vanjs-core";
var ArrowDownRight = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van73.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m7 7 10 10" }),
    path({ "d": "M17 7v10H7" })
  );
}, "ArrowDownRight");

// src/icons/ArrowDownToDot.ts
import van74 from "vanjs-core";
var ArrowDownToDot = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van74.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 2v14" }),
    path({ "d": "m19 9-7 7-7-7" }),
    circle({ cx: "12", cy: "21", "r": "1" })
  );
}, "ArrowDownToDot");

// src/icons/ArrowDownToLine.ts
import van75 from "vanjs-core";
var ArrowDownToLine = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van75.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 17V3" }),
    path({ "d": "m6 11 6 6 6-6" }),
    path({ "d": "M19 21H5" })
  );
}, "ArrowDownToLine");

// src/icons/ArrowDownUp.ts
import van76 from "vanjs-core";
var ArrowDownUp = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van76.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m3 16 4 4 4-4" }),
    path({ "d": "M7 20V4" }),
    path({ "d": "m21 8-4-4-4 4" }),
    path({ "d": "M17 4v16" })
  );
}, "ArrowDownUp");

// src/icons/ArrowDownWideNarrow.ts
import van77 from "vanjs-core";
var ArrowDownWideNarrow = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van77.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m3 16 4 4 4-4" }),
    path({ "d": "M7 20V4" }),
    path({ "d": "M11 4h10" }),
    path({ "d": "M11 8h7" }),
    path({ "d": "M11 12h4" })
  );
}, "ArrowDownWideNarrow");

// src/icons/ArrowDownZA.ts
import van78 from "vanjs-core";
var ArrowDownZA = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van78.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m3 16 4 4 4-4" }),
    path({ "d": "M7 4v16" }),
    path({ "d": "M15 4h5l-5 6h5" }),
    path({ "d": "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" }),
    path({ "d": "M20 18h-5" })
  );
}, "ArrowDownZA");

// src/icons/ArrowDown.ts
import van79 from "vanjs-core";
var ArrowDown = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van79.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 5v14" }),
    path({ "d": "m19 12-7 7-7-7" })
  );
}, "ArrowDown");

// src/icons/ArrowLeftFromLine.ts
import van80 from "vanjs-core";
var ArrowLeftFromLine = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van80.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m9 6-6 6 6 6" }),
    path({ "d": "M3 12h14" }),
    path({ "d": "M21 19V5" })
  );
}, "ArrowLeftFromLine");

// src/icons/ArrowLeftRight.ts
import van81 from "vanjs-core";
var ArrowLeftRight = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van81.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 3 4 7l4 4" }),
    path({ "d": "M4 7h16" }),
    path({ "d": "m16 21 4-4-4-4" }),
    path({ "d": "M20 17H4" })
  );
}, "ArrowLeftRight");

// src/icons/ArrowLeftToLine.ts
import van82 from "vanjs-core";
var ArrowLeftToLine = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van82.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 19V5" }),
    path({ "d": "m13 6-6 6 6 6" }),
    path({ "d": "M7 12h14" })
  );
}, "ArrowLeftToLine");

// src/icons/ArrowLeft.ts
import van83 from "vanjs-core";
var ArrowLeft = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van83.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m12 19-7-7 7-7" }),
    path({ "d": "M19 12H5" })
  );
}, "ArrowLeft");

// src/icons/ArrowRightFromLine.ts
import van84 from "vanjs-core";
var ArrowRightFromLine = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van84.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 5v14" }),
    path({ "d": "M21 12H7" }),
    path({ "d": "m15 18 6-6-6-6" })
  );
}, "ArrowRightFromLine");

// src/icons/ArrowRightLeft.ts
import van85 from "vanjs-core";
var ArrowRightLeft = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van85.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m16 3 4 4-4 4" }),
    path({ "d": "M20 7H4" }),
    path({ "d": "m8 21-4-4 4-4" }),
    path({ "d": "M4 17h16" })
  );
}, "ArrowRightLeft");

// src/icons/ArrowRightToLine.ts
import van86 from "vanjs-core";
var ArrowRightToLine = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van86.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M17 12H3" }),
    path({ "d": "m11 18 6-6-6-6" }),
    path({ "d": "M21 5v14" })
  );
}, "ArrowRightToLine");

// src/icons/ArrowRight.ts
import van87 from "vanjs-core";
var ArrowRight = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van87.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M5 12h14" }),
    path({ "d": "m12 5 7 7-7 7" })
  );
}, "ArrowRight");

// src/icons/ArrowUp01.ts
import van88 from "vanjs-core";
var ArrowUp01 = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van88.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m3 8 4-4 4 4" }),
    path({ "d": "M7 4v16" }),
    rect({ "x": "15", "y": "4", width: "4", height: "6", ry: "2" }),
    path({ "d": "M17 20v-6h-2" }),
    path({ "d": "M15 20h4" })
  );
}, "ArrowUp01");

// src/icons/ArrowUp10.ts
import van89 from "vanjs-core";
var ArrowUp10 = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van89.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m3 8 4-4 4 4" }),
    path({ "d": "M7 4v16" }),
    path({ "d": "M17 10V4h-2" }),
    path({ "d": "M15 10h4" }),
    rect({ "x": "15", "y": "14", width: "4", height: "6", ry: "2" })
  );
}, "ArrowUp10");

// src/icons/ArrowUpAZ.ts
import van90 from "vanjs-core";
var ArrowUpAZ = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van90.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m3 8 4-4 4 4" }),
    path({ "d": "M7 4v16" }),
    path({ "d": "M20 8h-5" }),
    path({ "d": "M15 10V6.5a2.5 2.5 0 0 1 5 0V10" }),
    path({ "d": "M15 14h5l-5 6h5" })
  );
}, "ArrowUpAZ");

// src/icons/ArrowUpDown.ts
import van91 from "vanjs-core";
var ArrowUpDown = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van91.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m21 16-4 4-4-4" }),
    path({ "d": "M17 20V4" }),
    path({ "d": "m3 8 4-4 4 4" }),
    path({ "d": "M7 4v16" })
  );
}, "ArrowUpDown");

// src/icons/ArrowUpFromDot.ts
import van92 from "vanjs-core";
var ArrowUpFromDot = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van92.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m5 9 7-7 7 7" }),
    path({ "d": "M12 16V2" }),
    circle({ cx: "12", cy: "21", "r": "1" })
  );
}, "ArrowUpFromDot");

// src/icons/ArrowUpFromLine.ts
import van93 from "vanjs-core";
var ArrowUpFromLine = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van93.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m18 9-6-6-6 6" }),
    path({ "d": "M12 3v14" }),
    path({ "d": "M5 21h14" })
  );
}, "ArrowUpFromLine");

// src/icons/ArrowUpLeft.ts
import van94 from "vanjs-core";
var ArrowUpLeft = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van94.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M7 17V7h10" }),
    path({ "d": "M17 17 7 7" })
  );
}, "ArrowUpLeft");

// src/icons/ArrowUpNarrowWide.ts
import van95 from "vanjs-core";
var ArrowUpNarrowWide = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van95.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m3 8 4-4 4 4" }),
    path({ "d": "M7 4v16" }),
    path({ "d": "M11 12h4" }),
    path({ "d": "M11 16h7" }),
    path({ "d": "M11 20h10" })
  );
}, "ArrowUpNarrowWide");

// src/icons/ArrowUpRight.ts
import van96 from "vanjs-core";
var ArrowUpRight = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van96.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M7 7h10v10" }),
    path({ "d": "M7 17 17 7" })
  );
}, "ArrowUpRight");

// src/icons/ArrowUpToLine.ts
import van97 from "vanjs-core";
var ArrowUpToLine = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van97.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M5 3h14" }),
    path({ "d": "m18 13-6-6-6 6" }),
    path({ "d": "M12 7v14" })
  );
}, "ArrowUpToLine");

// src/icons/ArrowUpWideNarrow.ts
import van98 from "vanjs-core";
var ArrowUpWideNarrow = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van98.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m3 8 4-4 4 4" }),
    path({ "d": "M7 4v16" }),
    path({ "d": "M11 12h10" }),
    path({ "d": "M11 16h7" }),
    path({ "d": "M11 20h4" })
  );
}, "ArrowUpWideNarrow");

// src/icons/ArrowUpZA.ts
import van99 from "vanjs-core";
var ArrowUpZA = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van99.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m3 8 4-4 4 4" }),
    path({ "d": "M7 4v16" }),
    path({ "d": "M15 4h5l-5 6h5" }),
    path({ "d": "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" }),
    path({ "d": "M20 18h-5" })
  );
}, "ArrowUpZA");

// src/icons/ArrowUp.ts
import van100 from "vanjs-core";
var ArrowUp = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van100.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m5 12 7-7 7 7" }),
    path({ "d": "M12 19V5" })
  );
}, "ArrowUp");

// src/icons/ArrowsUpFromLine.ts
import van101 from "vanjs-core";
var ArrowsUpFromLine = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van101.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m4 6 3-3 3 3" }),
    path({ "d": "M7 17V3" }),
    path({ "d": "m14 6 3-3 3 3" }),
    path({ "d": "M17 17V3" }),
    path({ "d": "M4 21h16" })
  );
}, "ArrowsUpFromLine");

// src/icons/Asterisk.ts
import van102 from "vanjs-core";
var Asterisk = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van102.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 6v12" }),
    path({ "d": "M17.196 9 6.804 15" }),
    path({ "d": "m6.804 9 10.392 6" })
  );
}, "Asterisk");

// src/icons/AtSign.ts
import van103 from "vanjs-core";
var AtSign = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van103.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "4" }),
    path({ "d": "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" })
  );
}, "AtSign");

// src/icons/Atom.ts
import van104 from "vanjs-core";
var Atom = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van104.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "1" }),
    path({
      "d": "M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"
    }),
    path({
      "d": "M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"
    })
  );
}, "Atom");

// src/icons/AudioLines.ts
import van105 from "vanjs-core";
var AudioLines = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van105.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 10v3" }),
    path({ "d": "M6 6v11" }),
    path({ "d": "M10 3v18" }),
    path({ "d": "M14 8v7" }),
    path({ "d": "M18 5v13" }),
    path({ "d": "M22 10v3" })
  );
}, "AudioLines");

// src/icons/AudioWaveform.ts
import van106 from "vanjs-core";
var AudioWaveform = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van106.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"
    })
  );
}, "AudioWaveform");

// src/icons/Award.ts
import van107 from "vanjs-core";
var Award = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van107.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
    }),
    circle({ cx: "12", cy: "8", "r": "6" })
  );
}, "Award");

// src/icons/Axe.ts
import van108 from "vanjs-core";
var Axe = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van108.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9" }),
    path({ "d": "M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z" })
  );
}, "Axe");

// src/icons/Axis3d.ts
import van109 from "vanjs-core";
var Axis3d = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van109.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 4v16h16" }),
    path({ "d": "m4 20 7-7" })
  );
}, "Axis3d");

// src/icons/Baby.ts
import van110 from "vanjs-core";
var Baby = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van110.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M9 12h.01" }),
    path({ "d": "M15 12h.01" }),
    path({ "d": "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }),
    path({
      "d": "M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"
    })
  );
}, "Baby");

// src/icons/Backpack.ts
import van111 from "vanjs-core";
var Backpack = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van111.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"
    }),
    path({ "d": "M8 10h8" }),
    path({ "d": "M8 18h8" }),
    path({ "d": "M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6" }),
    path({ "d": "M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" })
  );
}, "Backpack");

// src/icons/BadgeAlert.ts
import van112 from "vanjs-core";
var BadgeAlert = /* @__PURE__ */ __name((props = {}) => {
  const { path, line } = van112.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
    }),
    line({ x1: "12", x2: "12", y1: "8", y2: "12" }),
    line({ x1: "12", x2: "12.01", y1: "16", y2: "16" })
  );
}, "BadgeAlert");

// src/icons/BadgeCent.ts
import van113 from "vanjs-core";
var BadgeCent = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van113.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
    }),
    path({ "d": "M12 7v10" }),
    path({ "d": "M15.4 10a4 4 0 1 0 0 4" })
  );
}, "BadgeCent");

// src/icons/BadgeCheck.ts
import van114 from "vanjs-core";
var BadgeCheck = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van114.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
    }),
    path({ "d": "m9 12 2 2 4-4" })
  );
}, "BadgeCheck");

// src/icons/BadgeDollarSign.ts
import van115 from "vanjs-core";
var BadgeDollarSign = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van115.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
    }),
    path({ "d": "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" }),
    path({ "d": "M12 18V6" })
  );
}, "BadgeDollarSign");

// src/icons/BadgeEuro.ts
import van116 from "vanjs-core";
var BadgeEuro = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van116.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
    }),
    path({ "d": "M7 12h5" }),
    path({ "d": "M15 9.4a4 4 0 1 0 0 5.2" })
  );
}, "BadgeEuro");

// src/icons/BadgeHelp.ts
import van117 from "vanjs-core";
var BadgeHelp = /* @__PURE__ */ __name((props = {}) => {
  const { path, line } = van117.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
    }),
    path({ "d": "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }),
    line({ x1: "12", x2: "12.01", y1: "17", y2: "17" })
  );
}, "BadgeHelp");

// src/icons/BadgeIndianRupee.ts
import van118 from "vanjs-core";
var BadgeIndianRupee = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van118.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
    }),
    path({ "d": "M8 8h8" }),
    path({ "d": "M8 12h8" }),
    path({ "d": "m13 17-5-1h1a4 4 0 0 0 0-8" })
  );
}, "BadgeIndianRupee");

// src/icons/BadgeInfo.ts
import van119 from "vanjs-core";
var BadgeInfo = /* @__PURE__ */ __name((props = {}) => {
  const { path, line } = van119.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
    }),
    line({ x1: "12", x2: "12", y1: "16", y2: "12" }),
    line({ x1: "12", x2: "12.01", y1: "8", y2: "8" })
  );
}, "BadgeInfo");

// src/icons/BadgeJapaneseYen.ts
import van120 from "vanjs-core";
var BadgeJapaneseYen = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van120.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
    }),
    path({ "d": "m9 8 3 3v7" }),
    path({ "d": "m12 11 3-3" }),
    path({ "d": "M9 12h6" }),
    path({ "d": "M9 16h6" })
  );
}, "BadgeJapaneseYen");

// src/icons/BadgeMinus.ts
import van121 from "vanjs-core";
var BadgeMinus = /* @__PURE__ */ __name((props = {}) => {
  const { path, line } = van121.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
    }),
    line({ x1: "8", x2: "16", y1: "12", y2: "12" })
  );
}, "BadgeMinus");

// src/icons/BadgePercent.ts
import van122 from "vanjs-core";
var BadgePercent = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van122.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
    }),
    path({ "d": "m15 9-6 6" }),
    path({ "d": "M9 9h.01" }),
    path({ "d": "M15 15h.01" })
  );
}, "BadgePercent");

// src/icons/BadgePlus.ts
import van123 from "vanjs-core";
var BadgePlus = /* @__PURE__ */ __name((props = {}) => {
  const { path, line } = van123.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
    }),
    line({ x1: "12", x2: "12", y1: "8", y2: "16" }),
    line({ x1: "8", x2: "16", y1: "12", y2: "12" })
  );
}, "BadgePlus");

// src/icons/BadgePoundSterling.ts
import van124 from "vanjs-core";
var BadgePoundSterling = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van124.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
    }),
    path({ "d": "M8 12h4" }),
    path({ "d": "M10 16V9.5a2.5 2.5 0 0 1 5 0" }),
    path({ "d": "M8 16h7" })
  );
}, "BadgePoundSterling");

// src/icons/BadgeRussianRuble.ts
import van125 from "vanjs-core";
var BadgeRussianRuble = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van125.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
    }),
    path({ "d": "M9 16h5" }),
    path({ "d": "M9 12h5a2 2 0 1 0 0-4h-3v9" })
  );
}, "BadgeRussianRuble");

// src/icons/BadgeSwissFranc.ts
import van126 from "vanjs-core";
var BadgeSwissFranc = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van126.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
    }),
    path({ "d": "M11 17V8h4" }),
    path({ "d": "M11 12h3" }),
    path({ "d": "M9 16h4" })
  );
}, "BadgeSwissFranc");

// src/icons/BadgeX.ts
import van127 from "vanjs-core";
var BadgeX = /* @__PURE__ */ __name((props = {}) => {
  const { path, line } = van127.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
    }),
    line({ x1: "15", x2: "9", y1: "9", y2: "15" }),
    line({ x1: "9", x2: "15", y1: "9", y2: "15" })
  );
}, "BadgeX");

// src/icons/Badge.ts
import van128 from "vanjs-core";
var Badge = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van128.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
    })
  );
}, "Badge");

// src/icons/BaggageClaim.ts
import van129 from "vanjs-core";
var BaggageClaim = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect, circle } = van129.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2" }),
    path({ "d": "M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10" }),
    rect({ width: "13", height: "8", "x": "8", "y": "6", rx: "1" }),
    circle({ cx: "18", cy: "20", "r": "2" }),
    circle({ cx: "9", cy: "20", "r": "2" })
  );
}, "BaggageClaim");

// src/icons/Ban.ts
import van130 from "vanjs-core";
var Ban = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van130.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "m4.9 4.9 14.2 14.2" })
  );
}, "Ban");

// src/icons/Banana.ts
import van131 from "vanjs-core";
var Banana = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van131.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5" }),
    path({
      "d": "M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z"
    })
  );
}, "Banana");

// src/icons/Bandage.ts
import van132 from "vanjs-core";
var Bandage = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van132.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 10.01h.01" }),
    path({ "d": "M10 14.01h.01" }),
    path({ "d": "M14 10.01h.01" }),
    path({ "d": "M14 14.01h.01" }),
    path({ "d": "M18 6v11.5" }),
    path({ "d": "M6 6v12" }),
    rect({ "x": "2", "y": "6", width: "20", height: "12", rx: "2" })
  );
}, "Bandage");

// src/icons/Banknote.ts
import van133 from "vanjs-core";
var Banknote = /* @__PURE__ */ __name((props = {}) => {
  const { rect, circle, path } = van133.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "20", height: "12", "x": "2", "y": "6", rx: "2" }),
    circle({ cx: "12", cy: "12", "r": "2" }),
    path({ "d": "M6 12h.01M18 12h.01" })
  );
}, "Banknote");

// src/icons/Barcode.ts
import van134 from "vanjs-core";
var Barcode = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van134.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 5v14" }),
    path({ "d": "M8 5v14" }),
    path({ "d": "M12 5v14" }),
    path({ "d": "M17 5v14" }),
    path({ "d": "M21 5v14" })
  );
}, "Barcode");

// src/icons/Baseline.ts
import van135 from "vanjs-core";
var Baseline = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van135.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 20h16" }),
    path({ "d": "m6 16 6-12 6 12" }),
    path({ "d": "M8 12h8" })
  );
}, "Baseline");

// src/icons/Bath.ts
import van136 from "vanjs-core";
var Bath = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van136.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 4 8 6" }),
    path({ "d": "M17 19v2" }),
    path({ "d": "M2 12h20" }),
    path({ "d": "M7 19v2" }),
    path({
      "d": "M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"
    })
  );
}, "Bath");

// src/icons/BatteryCharging.ts
import van137 from "vanjs-core";
var BatteryCharging = /* @__PURE__ */ __name((props = {}) => {
  const { path, line } = van137.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" }),
    path({ "d": "M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1" }),
    path({ "d": "m11 7-3 5h4l-3 5" }),
    line({ x1: "22", x2: "22", y1: "11", y2: "13" })
  );
}, "BatteryCharging");

// src/icons/BatteryFull.ts
import van138 from "vanjs-core";
var BatteryFull = /* @__PURE__ */ __name((props = {}) => {
  const { rect, line } = van138.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "16", height: "10", "x": "2", "y": "7", rx: "2", ry: "2" }),
    line({ x1: "22", x2: "22", y1: "11", y2: "13" }),
    line({ x1: "6", x2: "6", y1: "11", y2: "13" }),
    line({ x1: "10", x2: "10", y1: "11", y2: "13" }),
    line({ x1: "14", x2: "14", y1: "11", y2: "13" })
  );
}, "BatteryFull");

// src/icons/BatteryLow.ts
import van139 from "vanjs-core";
var BatteryLow = /* @__PURE__ */ __name((props = {}) => {
  const { rect, line } = van139.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "16", height: "10", "x": "2", "y": "7", rx: "2", ry: "2" }),
    line({ x1: "22", x2: "22", y1: "11", y2: "13" }),
    line({ x1: "6", x2: "6", y1: "11", y2: "13" })
  );
}, "BatteryLow");

// src/icons/BatteryMedium.ts
import van140 from "vanjs-core";
var BatteryMedium = /* @__PURE__ */ __name((props = {}) => {
  const { rect, line } = van140.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "16", height: "10", "x": "2", "y": "7", rx: "2", ry: "2" }),
    line({ x1: "22", x2: "22", y1: "11", y2: "13" }),
    line({ x1: "6", x2: "6", y1: "11", y2: "13" }),
    line({ x1: "10", x2: "10", y1: "11", y2: "13" })
  );
}, "BatteryMedium");

// src/icons/BatteryPlus.ts
import van141 from "vanjs-core";
var BatteryPlus = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van141.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 9v6" }),
    path({ "d": "M13.5 7H16a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2.5" }),
    path({ "d": "M22 11v2" }),
    path({ "d": "M6.5 17H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2.5" }),
    path({ "d": "M7 12h6" })
  );
}, "BatteryPlus");

// src/icons/BatteryWarning.ts
import van142 from "vanjs-core";
var BatteryWarning = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van142.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 17h.01" }),
    path({ "d": "M10 7v6" }),
    path({ "d": "M14 7h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" }),
    path({ "d": "M22 11v2" }),
    path({ "d": "M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" })
  );
}, "BatteryWarning");

// src/icons/Battery.ts
import van143 from "vanjs-core";
var Battery = /* @__PURE__ */ __name((props = {}) => {
  const { rect, line } = van143.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "16", height: "10", "x": "2", "y": "7", rx: "2", ry: "2" }),
    line({ x1: "22", x2: "22", y1: "11", y2: "13" })
  );
}, "Battery");

// src/icons/Beaker.ts
import van144 from "vanjs-core";
var Beaker = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van144.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4.5 3h15" }),
    path({ "d": "M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" }),
    path({ "d": "M6 14h12" })
  );
}, "Beaker");

// src/icons/BeanOff.ts
import van145 from "vanjs-core";
var BeanOff = /* @__PURE__ */ __name((props = {}) => {
  const { path, line } = van145.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1"
    }),
    path({ "d": "M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66" }),
    path({
      "d": "M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04"
    }),
    line({ x1: "2", x2: "22", y1: "2", y2: "22" })
  );
}, "BeanOff");

// src/icons/Bean.ts
import van146 from "vanjs-core";
var Bean = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van146.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"
    }),
    path({ "d": "M5.341 10.62a4 4 0 1 0 5.279-5.28" })
  );
}, "Bean");

// src/icons/BedDouble.ts
import van147 from "vanjs-core";
var BedDouble = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van147.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" }),
    path({ "d": "M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" }),
    path({ "d": "M12 4v6" }),
    path({ "d": "M2 18h20" })
  );
}, "BedDouble");

// src/icons/BedSingle.ts
import van148 from "vanjs-core";
var BedSingle = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van148.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8" }),
    path({ "d": "M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" }),
    path({ "d": "M3 18h18" })
  );
}, "BedSingle");

// src/icons/Bed.ts
import van149 from "vanjs-core";
var Bed = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van149.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 4v16" }),
    path({ "d": "M2 8h18a2 2 0 0 1 2 2v10" }),
    path({ "d": "M2 17h20" }),
    path({ "d": "M6 8v9" })
  );
}, "Bed");

// src/icons/Beef.ts
import van150 from "vanjs-core";
var Beef = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van150.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3"
    }),
    path({
      "d": "m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"
    }),
    circle({ cx: "12.5", cy: "8.5", "r": "2.5" })
  );
}, "Beef");

// src/icons/BeerOff.ts
import van151 from "vanjs-core";
var BeerOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van151.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M13 13v5" }),
    path({ "d": "M17 11.47V8" }),
    path({ "d": "M17 11h1a3 3 0 0 1 2.745 4.211" }),
    path({ "d": "m2 2 20 20" }),
    path({ "d": "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3" }),
    path({
      "d": "M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268"
    }),
    path({
      "d": "M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12"
    }),
    path({ "d": "M9 14.6V18" })
  );
}, "BeerOff");

// src/icons/Beer.ts
import van152 from "vanjs-core";
var Beer = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van152.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M17 11h1a3 3 0 0 1 0 6h-1" }),
    path({ "d": "M9 12v6" }),
    path({ "d": "M13 12v6" }),
    path({
      "d": "M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"
    }),
    path({ "d": "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" })
  );
}, "Beer");

// src/icons/BellDot.ts
import van153 from "vanjs-core";
var BellDot = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van153.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10.268 21a2 2 0 0 0 3.464 0" }),
    path({
      "d": "M13.916 2.314A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.74 7.327A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673 9 9 0 0 1-.585-.665"
    }),
    circle({ cx: "18", cy: "8", "r": "3" })
  );
}, "BellDot");

// src/icons/BellElectric.ts
import van154 from "vanjs-core";
var BellElectric = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle, rect } = van154.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M18.8 4A6.3 8.7 0 0 1 20 9" }),
    path({ "d": "M9 9h.01" }),
    circle({ cx: "9", cy: "9", "r": "7" }),
    rect({ width: "10", height: "6", "x": "4", "y": "16", rx: "2" }),
    path({ "d": "M14 19c3 0 4.6-1.6 4.6-1.6" }),
    circle({ cx: "20", cy: "16", "r": "2" })
  );
}, "BellElectric");

// src/icons/BellMinus.ts
import van155 from "vanjs-core";
var BellMinus = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van155.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10.268 21a2 2 0 0 0 3.464 0" }),
    path({ "d": "M15 8h6" }),
    path({
      "d": "M16.243 3.757A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673A9.4 9.4 0 0 1 18.667 12"
    })
  );
}, "BellMinus");

// src/icons/BellOff.ts
import van156 from "vanjs-core";
var BellOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van156.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10.268 21a2 2 0 0 0 3.464 0" }),
    path({
      "d": "M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742"
    }),
    path({ "d": "m2 2 20 20" }),
    path({ "d": "M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05" })
  );
}, "BellOff");

// src/icons/BellPlus.ts
import van157 from "vanjs-core";
var BellPlus = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van157.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10.268 21a2 2 0 0 0 3.464 0" }),
    path({ "d": "M15 8h6" }),
    path({ "d": "M18 5v6" }),
    path({
      "d": "M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332"
    })
  );
}, "BellPlus");

// src/icons/BellRing.ts
import van158 from "vanjs-core";
var BellRing = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van158.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10.268 21a2 2 0 0 0 3.464 0" }),
    path({ "d": "M22 8c0-2.3-.8-4.3-2-6" }),
    path({
      "d": "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
    }),
    path({ "d": "M4 2C2.8 3.7 2 5.7 2 8" })
  );
}, "BellRing");

// src/icons/Bell.ts
import van159 from "vanjs-core";
var Bell = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van159.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10.268 21a2 2 0 0 0 3.464 0" }),
    path({
      "d": "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
    })
  );
}, "Bell");

// src/icons/BetweenHorizontalEnd.ts
import van160 from "vanjs-core";
var BetweenHorizontalEnd = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van160.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "13", height: "7", "x": "3", "y": "3", rx: "1" }),
    path({ "d": "m22 15-3-3 3-3" }),
    rect({ width: "13", height: "7", "x": "3", "y": "14", rx: "1" })
  );
}, "BetweenHorizontalEnd");

// src/icons/BetweenHorizontalStart.ts
import van161 from "vanjs-core";
var BetweenHorizontalStart = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van161.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "13", height: "7", "x": "8", "y": "3", rx: "1" }),
    path({ "d": "m2 9 3 3-3 3" }),
    rect({ width: "13", height: "7", "x": "8", "y": "14", rx: "1" })
  );
}, "BetweenHorizontalStart");

// src/icons/BetweenVerticalEnd.ts
import van162 from "vanjs-core";
var BetweenVerticalEnd = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van162.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "7", height: "13", "x": "3", "y": "3", rx: "1" }),
    path({ "d": "m9 22 3-3 3 3" }),
    rect({ width: "7", height: "13", "x": "14", "y": "3", rx: "1" })
  );
}, "BetweenVerticalEnd");

// src/icons/BetweenVerticalStart.ts
import van163 from "vanjs-core";
var BetweenVerticalStart = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van163.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "7", height: "13", "x": "3", "y": "8", rx: "1" }),
    path({ "d": "m15 2-3 3-3-3" }),
    rect({ width: "7", height: "13", "x": "14", "y": "8", rx: "1" })
  );
}, "BetweenVerticalStart");

// src/icons/BicepsFlexed.ts
import van164 from "vanjs-core";
var BicepsFlexed = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van164.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1"
    }),
    path({ "d": "M15 14a5 5 0 0 0-7.584 2" }),
    path({ "d": "M9.964 6.825C8.019 7.977 9.5 13 8 15" })
  );
}, "BicepsFlexed");

// src/icons/Bike.ts
import van165 from "vanjs-core";
var Bike = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van165.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "18.5", cy: "17.5", "r": "3.5" }),
    circle({ cx: "5.5", cy: "17.5", "r": "3.5" }),
    circle({ cx: "15", cy: "5", "r": "1" }),
    path({ "d": "M12 17.5V14l-3-3 4-3 2 3h2" })
  );
}, "Bike");

// src/icons/Binary.ts
import van166 from "vanjs-core";
var Binary = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van166.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ "x": "14", "y": "14", width: "4", height: "6", rx: "2" }),
    rect({ "x": "6", "y": "4", width: "4", height: "6", rx: "2" }),
    path({ "d": "M6 20h4" }),
    path({ "d": "M14 10h4" }),
    path({ "d": "M6 14h2v6" }),
    path({ "d": "M14 4h2v6" })
  );
}, "Binary");

// src/icons/Binoculars.ts
import van167 from "vanjs-core";
var Binoculars = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van167.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 10h4" }),
    path({ "d": "M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3" }),
    path({
      "d": "M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z"
    }),
    path({ "d": "M 22 16 L 2 16" }),
    path({
      "d": "M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z"
    }),
    path({ "d": "M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3" })
  );
}, "Binoculars");

// src/icons/Biohazard.ts
import van168 from "vanjs-core";
var Biohazard = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van168.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "11.9", "r": "2" }),
    path({ "d": "M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6" }),
    path({ "d": "m8.9 10.1 1.4.8" }),
    path({ "d": "M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5" }),
    path({ "d": "m15.1 10.1-1.4.8" }),
    path({ "d": "M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2" }),
    path({ "d": "M12 13.9v1.6" }),
    path({ "d": "M13.5 5.4c-1-.2-2-.2-3 0" }),
    path({ "d": "M17 16.4c.7-.7 1.2-1.6 1.5-2.5" }),
    path({ "d": "M5.5 13.9c.3.9.8 1.8 1.5 2.5" })
  );
}, "Biohazard");

// src/icons/Bird.ts
import van169 from "vanjs-core";
var Bird = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van169.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 7h.01" }),
    path({ "d": "M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" }),
    path({ "d": "m20 7 2 .5-2 .5" }),
    path({ "d": "M10 18v3" }),
    path({ "d": "M14 17.75V21" }),
    path({ "d": "M7 18a6 6 0 0 0 3.84-10.61" })
  );
}, "Bird");

// src/icons/Bitcoin.ts
import van170 from "vanjs-core";
var Bitcoin = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van170.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"
    })
  );
}, "Bitcoin");

// src/icons/Blend.ts
import van171 from "vanjs-core";
var Blend = /* @__PURE__ */ __name((props = {}) => {
  const { circle } = van171.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "9", cy: "9", "r": "7" }),
    circle({ cx: "15", cy: "15", "r": "7" })
  );
}, "Blend");

// src/icons/Blinds.ts
import van172 from "vanjs-core";
var Blinds = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van172.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 3h18" }),
    path({ "d": "M20 7H8" }),
    path({ "d": "M20 11H8" }),
    path({ "d": "M10 19h10" }),
    path({ "d": "M8 15h12" }),
    path({ "d": "M4 3v14" }),
    circle({ cx: "4", cy: "19", "r": "2" })
  );
}, "Blinds");

// src/icons/Blocks.ts
import van173 from "vanjs-core";
var Blocks = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van173.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "7", height: "7", "x": "14", "y": "3", rx: "1" }),
    path({
      "d": "M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"
    })
  );
}, "Blocks");

// src/icons/BluetoothConnected.ts
import van174 from "vanjs-core";
var BluetoothConnected = /* @__PURE__ */ __name((props = {}) => {
  const { path, line } = van174.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m7 7 10 10-5 5V2l5 5L7 17" }),
    line({ x1: "18", x2: "21", y1: "12", y2: "12" }),
    line({ x1: "3", x2: "6", y1: "12", y2: "12" })
  );
}, "BluetoothConnected");

// src/icons/BluetoothOff.ts
import van175 from "vanjs-core";
var BluetoothOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van175.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m17 17-5 5V12l-5 5" }),
    path({ "d": "m2 2 20 20" }),
    path({ "d": "M14.5 9.5 17 7l-5-5v4.5" })
  );
}, "BluetoothOff");

// src/icons/BluetoothSearching.ts
import van176 from "vanjs-core";
var BluetoothSearching = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van176.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m7 7 10 10-5 5V2l5 5L7 17" }),
    path({ "d": "M20.83 14.83a4 4 0 0 0 0-5.66" }),
    path({ "d": "M18 12h.01" })
  );
}, "BluetoothSearching");

// src/icons/Bluetooth.ts
import van177 from "vanjs-core";
var Bluetooth = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van177.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m7 7 10 10-5 5V2l5 5L7 17" })
  );
}, "Bluetooth");

// src/icons/Bold.ts
import van178 from "vanjs-core";
var Bold = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van178.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"
    })
  );
}, "Bold");

// src/icons/Bolt.ts
import van179 from "vanjs-core";
var Bolt = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van179.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
    }),
    circle({ cx: "12", cy: "12", "r": "4" })
  );
}, "Bolt");

// src/icons/Bomb.ts
import van180 from "vanjs-core";
var Bomb = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van180.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "11", cy: "13", "r": "9" }),
    path({
      "d": "M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95"
    }),
    path({ "d": "m22 2-1.5 1.5" })
  );
}, "Bomb");

// src/icons/Bone.ts
import van181 from "vanjs-core";
var Bone = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van181.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"
    })
  );
}, "Bone");

// src/icons/BookA.ts
import van182 from "vanjs-core";
var BookA = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van182.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
    }),
    path({ "d": "m8 13 4-7 4 7" }),
    path({ "d": "M9.1 11h5.7" })
  );
}, "BookA");

// src/icons/BookAudio.ts
import van183 from "vanjs-core";
var BookAudio = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van183.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 6v7" }),
    path({ "d": "M16 8v3" }),
    path({
      "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
    }),
    path({ "d": "M8 8v3" })
  );
}, "BookAudio");

// src/icons/BookCheck.ts
import van184 from "vanjs-core";
var BookCheck = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van184.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
    }),
    path({ "d": "m9 9.5 2 2 4-4" })
  );
}, "BookCheck");

// src/icons/BookCopy.ts
import van185 from "vanjs-core";
var BookCopy = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van185.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 16V4a2 2 0 0 1 2-2h11" }),
    path({
      "d": "M22 18H11a2 2 0 1 0 0 4h10.5a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5H11a2 2 0 0 0-2 2v12"
    }),
    path({ "d": "M5 14H4a2 2 0 1 0 0 4h1" })
  );
}, "BookCopy");

// src/icons/BookDashed.ts
import van186 from "vanjs-core";
var BookDashed = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van186.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 17h1.5" }),
    path({ "d": "M12 22h1.5" }),
    path({ "d": "M12 2h1.5" }),
    path({ "d": "M17.5 22H19a1 1 0 0 0 1-1" }),
    path({ "d": "M17.5 2H19a1 1 0 0 1 1 1v1.5" }),
    path({ "d": "M20 14v3h-2.5" }),
    path({ "d": "M20 8.5V10" }),
    path({ "d": "M4 10V8.5" }),
    path({ "d": "M4 19.5V14" }),
    path({ "d": "M4 4.5A2.5 2.5 0 0 1 6.5 2H8" }),
    path({ "d": "M8 22H6.5a1 1 0 0 1 0-5H8" })
  );
}, "BookDashed");

// src/icons/BookDown.ts
import van187 from "vanjs-core";
var BookDown = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van187.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 13V7" }),
    path({
      "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
    }),
    path({ "d": "m9 10 3 3 3-3" })
  );
}, "BookDown");

// src/icons/BookHeadphones.ts
import van188 from "vanjs-core";
var BookHeadphones = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van188.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
    }),
    path({ "d": "M8 12v-2a4 4 0 0 1 8 0v2" }),
    circle({ cx: "15", cy: "12", "r": "1" }),
    circle({ cx: "9", cy: "12", "r": "1" })
  );
}, "BookHeadphones");

// src/icons/BookHeart.ts
import van189 from "vanjs-core";
var BookHeart = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van189.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M16 8.2A2.22 2.22 0 0 0 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9A2.22 2.22 0 0 0 8 8.2c0 .6.3 1.2.7 1.6A226.652 226.652 0 0 0 12 13a404 404 0 0 0 3.3-3.1 2.413 2.413 0 0 0 .7-1.7"
    }),
    path({
      "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
    })
  );
}, "BookHeart");

// src/icons/BookImage.ts
import van190 from "vanjs-core";
var BookImage = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van190.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17" }),
    path({
      "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
    }),
    circle({ cx: "10", cy: "8", "r": "2" })
  );
}, "BookImage");

// src/icons/BookKey.ts
import van191 from "vanjs-core";
var BookKey = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van191.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m19 3 1 1" }),
    path({ "d": "m20 2-4.5 4.5" }),
    path({ "d": "M20 8v13a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }),
    path({ "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14" }),
    circle({ cx: "14", cy: "8", "r": "2" })
  );
}, "BookKey");

// src/icons/BookLock.ts
import van192 from "vanjs-core";
var BookLock = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van192.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M18 6V4a2 2 0 1 0-4 0v2" }),
    path({ "d": "M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }),
    path({ "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10" }),
    rect({ "x": "12", "y": "6", width: "8", height: "5", rx: "1" })
  );
}, "BookLock");

// src/icons/BookMarked.ts
import van193 from "vanjs-core";
var BookMarked = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van193.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 2v8l3-3 3 3V2" }),
    path({
      "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
    })
  );
}, "BookMarked");

// src/icons/BookMinus.ts
import van194 from "vanjs-core";
var BookMinus = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van194.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
    }),
    path({ "d": "M9 10h6" })
  );
}, "BookMinus");

// src/icons/BookOpenCheck.ts
import van195 from "vanjs-core";
var BookOpenCheck = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van195.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 21V7" }),
    path({ "d": "m16 12 2 2 4-4" }),
    path({
      "d": "M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3"
    })
  );
}, "BookOpenCheck");

// src/icons/BookOpenText.ts
import van196 from "vanjs-core";
var BookOpenText = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van196.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 7v14" }),
    path({ "d": "M16 12h2" }),
    path({ "d": "M16 8h2" }),
    path({
      "d": "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"
    }),
    path({ "d": "M6 12h2" }),
    path({ "d": "M6 8h2" })
  );
}, "BookOpenText");

// src/icons/BookOpen.ts
import van197 from "vanjs-core";
var BookOpen = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van197.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 7v14" }),
    path({
      "d": "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"
    })
  );
}, "BookOpen");

// src/icons/BookPlus.ts
import van198 from "vanjs-core";
var BookPlus = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van198.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 7v6" }),
    path({
      "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
    }),
    path({ "d": "M9 10h6" })
  );
}, "BookPlus");

// src/icons/BookText.ts
import van199 from "vanjs-core";
var BookText = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van199.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
    }),
    path({ "d": "M8 11h8" }),
    path({ "d": "M8 7h6" })
  );
}, "BookText");

// src/icons/BookType.ts
import van200 from "vanjs-core";
var BookType = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van200.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 13h4" }),
    path({ "d": "M12 6v7" }),
    path({ "d": "M16 8V6H8v2" }),
    path({
      "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
    })
  );
}, "BookType");

// src/icons/BookUp2.ts
import van201 from "vanjs-core";
var BookUp2 = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van201.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 13V7" }),
    path({
      "d": "M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
    }),
    path({ "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2" }),
    path({ "d": "m9 10 3-3 3 3" }),
    path({ "d": "m9 5 3-3 3 3" })
  );
}, "BookUp2");

// src/icons/BookUp.ts
import van202 from "vanjs-core";
var BookUp = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van202.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 13V7" }),
    path({
      "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
    }),
    path({ "d": "m9 10 3-3 3 3" })
  );
}, "BookUp");

// src/icons/BookUser.ts
import van203 from "vanjs-core";
var BookUser = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van203.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 13a3 3 0 1 0-6 0" }),
    path({
      "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
    }),
    circle({ cx: "12", cy: "8", "r": "2" })
  );
}, "BookUser");

// src/icons/BookX.ts
import van204 from "vanjs-core";
var BookX = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van204.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m14.5 7-5 5" }),
    path({
      "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
    }),
    path({ "d": "m9.5 7 5 5" })
  );
}, "BookX");

// src/icons/Book.ts
import van205 from "vanjs-core";
var Book = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van205.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
    })
  );
}, "Book");

// src/icons/BookmarkCheck.ts
import van206 from "vanjs-core";
var BookmarkCheck = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van206.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" }),
    path({ "d": "m9 10 2 2 4-4" })
  );
}, "BookmarkCheck");

// src/icons/BookmarkMinus.ts
import van207 from "vanjs-core";
var BookmarkMinus = /* @__PURE__ */ __name((props = {}) => {
  const { path, line } = van207.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" }),
    line({ x1: "15", x2: "9", y1: "10", y2: "10" })
  );
}, "BookmarkMinus");

// src/icons/BookmarkPlus.ts
import van208 from "vanjs-core";
var BookmarkPlus = /* @__PURE__ */ __name((props = {}) => {
  const { path, line } = van208.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" }),
    line({ x1: "12", x2: "12", y1: "7", y2: "13" }),
    line({ x1: "15", x2: "9", y1: "10", y2: "10" })
  );
}, "BookmarkPlus");

// src/icons/BookmarkX.ts
import van209 from "vanjs-core";
var BookmarkX = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van209.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" }),
    path({ "d": "m14.5 7.5-5 5" }),
    path({ "d": "m9.5 7.5 5 5" })
  );
}, "BookmarkX");

// src/icons/Bookmark.ts
import van210 from "vanjs-core";
var Bookmark = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van210.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" })
  );
}, "Bookmark");

// src/icons/BoomBox.ts
import van211 from "vanjs-core";
var BoomBox = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect, circle } = van211.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" }),
    path({ "d": "M8 8v1" }),
    path({ "d": "M12 8v1" }),
    path({ "d": "M16 8v1" }),
    rect({ width: "20", height: "12", "x": "2", "y": "9", rx: "2" }),
    circle({ cx: "8", cy: "15", "r": "2" }),
    circle({ cx: "16", cy: "15", "r": "2" })
  );
}, "BoomBox");

// src/icons/BotMessageSquare.ts
import van212 from "vanjs-core";
var BotMessageSquare = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van212.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 6V2H8" }),
    path({
      "d": "m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z"
    }),
    path({ "d": "M2 12h2" }),
    path({ "d": "M9 11v2" }),
    path({ "d": "M15 11v2" }),
    path({ "d": "M20 12h2" })
  );
}, "BotMessageSquare");

// src/icons/BotOff.ts
import van213 from "vanjs-core";
var BotOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van213.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M13.67 8H18a2 2 0 0 1 2 2v4.33" }),
    path({ "d": "M2 14h2" }),
    path({ "d": "M20 14h2" }),
    path({ "d": "M22 22 2 2" }),
    path({
      "d": "M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586"
    }),
    path({ "d": "M9 13v2" }),
    path({ "d": "M9.67 4H12v2.33" })
  );
}, "BotOff");

// src/icons/Bot.ts
import van214 from "vanjs-core";
var Bot = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van214.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 8V4H8" }),
    rect({ width: "16", height: "12", "x": "4", "y": "8", rx: "2" }),
    path({ "d": "M2 14h2" }),
    path({ "d": "M20 14h2" }),
    path({ "d": "M15 13v2" }),
    path({ "d": "M9 13v2" })
  );
}, "Bot");

// src/icons/Box.ts
import van215 from "vanjs-core";
var Box = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van215.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
    }),
    path({ "d": "m3.3 7 8.7 5 8.7-5" }),
    path({ "d": "M12 22V12" })
  );
}, "Box");

// src/icons/Boxes.ts
import van216 from "vanjs-core";
var Boxes = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van216.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"
    }),
    path({ "d": "m7 16.5-4.74-2.85" }),
    path({ "d": "m7 16.5 5-3" }),
    path({ "d": "M7 16.5v5.17" }),
    path({
      "d": "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"
    }),
    path({ "d": "m17 16.5-5-3" }),
    path({ "d": "m17 16.5 4.74-2.85" }),
    path({ "d": "M17 16.5v5.17" }),
    path({
      "d": "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"
    }),
    path({ "d": "M12 8 7.26 5.15" }),
    path({ "d": "m12 8 4.74-2.85" }),
    path({ "d": "M12 13.5V8" })
  );
}, "Boxes");

// src/icons/Braces.ts
import van217 from "vanjs-core";
var Braces = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van217.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"
    }),
    path({
      "d": "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"
    })
  );
}, "Braces");

// src/icons/Brackets.ts
import van218 from "vanjs-core";
var Brackets = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van218.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 3h3v18h-3" }),
    path({ "d": "M8 21H5V3h3" })
  );
}, "Brackets");

// src/icons/BrainCircuit.ts
import van219 from "vanjs-core";
var BrainCircuit = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van219.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"
    }),
    path({ "d": "M9 13a4.5 4.5 0 0 0 3-4" }),
    path({ "d": "M6.003 5.125A3 3 0 0 0 6.401 6.5" }),
    path({ "d": "M3.477 10.896a4 4 0 0 1 .585-.396" }),
    path({ "d": "M6 18a4 4 0 0 1-1.967-.516" }),
    path({ "d": "M12 13h4" }),
    path({ "d": "M12 18h6a2 2 0 0 1 2 2v1" }),
    path({ "d": "M12 8h8" }),
    path({ "d": "M16 8V5a2 2 0 0 1 2-2" }),
    circle({ cx: "16", cy: "13", "r": ".5" }),
    circle({ cx: "18", cy: "3", "r": ".5" }),
    circle({ cx: "20", cy: "21", "r": ".5" }),
    circle({ cx: "20", cy: "8", "r": ".5" })
  );
}, "BrainCircuit");

// src/icons/BrainCog.ts
import van220 from "vanjs-core";
var BrainCog = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van220.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588 4 4 0 0 0 7.636 2.106 3.2 3.2 0 0 0 .164-.546c.028-.13.306-.13.335 0a3.2 3.2 0 0 0 .163.546 4 4 0 0 0 7.636-2.106 4 4 0 0 0 .556-6.588 4 4 0 0 0-2.526-5.77A3 3 0 1 0 12 5"
    }),
    path({ "d": "M17.599 6.5a3 3 0 0 0 .399-1.375" }),
    path({ "d": "M6.003 5.125A3 3 0 0 0 6.401 6.5" }),
    path({ "d": "M3.477 10.896a4 4 0 0 1 .585-.396" }),
    path({ "d": "M19.938 10.5a4 4 0 0 1 .585.396" }),
    path({ "d": "M6 18a4 4 0 0 1-1.967-.516" }),
    path({ "d": "M19.967 17.484A4 4 0 0 1 18 18" }),
    circle({ cx: "12", cy: "12", "r": "3" }),
    path({ "d": "m15.7 10.4-.9.4" }),
    path({ "d": "m9.2 13.2-.9.4" }),
    path({ "d": "m13.6 15.7-.4-.9" }),
    path({ "d": "m10.8 9.2-.4-.9" }),
    path({ "d": "m15.7 13.5-.9-.4" }),
    path({ "d": "m9.2 10.9-.9-.4" }),
    path({ "d": "m10.5 15.7.4-.9" }),
    path({ "d": "m13.1 9.2.4-.9" })
  );
}, "BrainCog");

// src/icons/Brain.ts
import van221 from "vanjs-core";
var Brain = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van221.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"
    }),
    path({
      "d": "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"
    }),
    path({ "d": "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" }),
    path({ "d": "M17.599 6.5a3 3 0 0 0 .399-1.375" }),
    path({ "d": "M6.003 5.125A3 3 0 0 0 6.401 6.5" }),
    path({ "d": "M3.477 10.896a4 4 0 0 1 .585-.396" }),
    path({ "d": "M19.938 10.5a4 4 0 0 1 .585.396" }),
    path({ "d": "M6 18a4 4 0 0 1-1.967-.516" }),
    path({ "d": "M19.967 17.484A4 4 0 0 1 18 18" })
  );
}, "Brain");

// src/icons/BrickWall.ts
import van222 from "vanjs-core";
var BrickWall = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van222.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M12 9v6" }),
    path({ "d": "M16 15v6" }),
    path({ "d": "M16 3v6" }),
    path({ "d": "M3 15h18" }),
    path({ "d": "M3 9h18" }),
    path({ "d": "M8 15v6" }),
    path({ "d": "M8 3v6" })
  );
}, "BrickWall");

// src/icons/BriefcaseBusiness.ts
import van223 from "vanjs-core";
var BriefcaseBusiness = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van223.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 12h.01" }),
    path({ "d": "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" }),
    path({ "d": "M22 13a18.15 18.15 0 0 1-20 0" }),
    rect({ width: "20", height: "14", "x": "2", "y": "6", rx: "2" })
  );
}, "BriefcaseBusiness");

// src/icons/BriefcaseConveyorBelt.ts
import van224 from "vanjs-core";
var BriefcaseConveyorBelt = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van224.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 20v2" }),
    path({ "d": "M14 20v2" }),
    path({ "d": "M18 20v2" }),
    path({ "d": "M21 20H3" }),
    path({ "d": "M6 20v2" }),
    path({ "d": "M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12" }),
    rect({ "x": "4", "y": "6", width: "16", height: "10", rx: "2" })
  );
}, "BriefcaseConveyorBelt");

// src/icons/BriefcaseMedical.ts
import van225 from "vanjs-core";
var BriefcaseMedical = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van225.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 11v4" }),
    path({ "d": "M14 13h-4" }),
    path({ "d": "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" }),
    path({ "d": "M18 6v14" }),
    path({ "d": "M6 6v14" }),
    rect({ width: "20", height: "14", "x": "2", "y": "6", rx: "2" })
  );
}, "BriefcaseMedical");

// src/icons/Briefcase.ts
import van226 from "vanjs-core";
var Briefcase = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van226.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" }),
    rect({ width: "20", height: "14", "x": "2", "y": "6", rx: "2" })
  );
}, "Briefcase");

// src/icons/BringToFront.ts
import van227 from "vanjs-core";
var BringToFront = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van227.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ "x": "8", "y": "8", width: "8", height: "8", rx: "2" }),
    path({ "d": "M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2" }),
    path({ "d": "M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2" })
  );
}, "BringToFront");

// src/icons/Brush.ts
import van228 from "vanjs-core";
var Brush = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van228.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" }),
    path({
      "d": "M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"
    })
  );
}, "Brush");

// src/icons/BugOff.ts
import van229 from "vanjs-core";
var BugOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van229.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2" }),
    path({ "d": "M14.12 3.88 16 2" }),
    path({ "d": "M22 13h-4v-2a4 4 0 0 0-4-4h-1.3" }),
    path({ "d": "M20.97 5c0 2.1-1.6 3.8-3.5 4" }),
    path({ "d": "m2 2 20 20" }),
    path({ "d": "M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13" }),
    path({ "d": "M12 20v-8" }),
    path({ "d": "M6 13H2" }),
    path({ "d": "M3 21c0-2.1 1.7-3.9 3.8-4" })
  );
}, "BugOff");

// src/icons/BugPlay.ts
import van230 from "vanjs-core";
var BugPlay = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van230.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M12.765 21.522a.5.5 0 0 1-.765-.424v-8.196a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z"
    }),
    path({ "d": "M14.12 3.88 16 2" }),
    path({
      "d": "M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5"
    }),
    path({ "d": "M20.97 5c0 2.1-1.6 3.8-3.5 4" }),
    path({ "d": "M3 21c0-2.1 1.7-3.9 3.8-4" }),
    path({ "d": "M6 13H2" }),
    path({ "d": "M6.53 9C4.6 8.8 3 7.1 3 5" }),
    path({ "d": "m8 2 1.88 1.88" }),
    path({ "d": "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" })
  );
}, "BugPlay");

// src/icons/Bug.ts
import van231 from "vanjs-core";
var Bug = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van231.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m8 2 1.88 1.88" }),
    path({ "d": "M14.12 3.88 16 2" }),
    path({ "d": "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" }),
    path({
      "d": "M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"
    }),
    path({ "d": "M12 20v-9" }),
    path({ "d": "M6.53 9C4.6 8.8 3 7.1 3 5" }),
    path({ "d": "M6 13H2" }),
    path({ "d": "M3 21c0-2.1 1.7-3.9 3.8-4" }),
    path({ "d": "M20.97 5c0 2.1-1.6 3.8-3.5 4" }),
    path({ "d": "M22 13h-4" }),
    path({ "d": "M17.2 17c2.1.1 3.8 1.9 3.8 4" })
  );
}, "Bug");

// src/icons/Building2.ts
import van232 from "vanjs-core";
var Building2 = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van232.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" }),
    path({ "d": "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" }),
    path({ "d": "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" }),
    path({ "d": "M10 6h4" }),
    path({ "d": "M10 10h4" }),
    path({ "d": "M10 14h4" }),
    path({ "d": "M10 18h4" })
  );
}, "Building2");

// src/icons/Building.ts
import van233 from "vanjs-core";
var Building = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van233.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "16", height: "20", "x": "4", "y": "2", rx: "2", ry: "2" }),
    path({ "d": "M9 22v-4h6v4" }),
    path({ "d": "M8 6h.01" }),
    path({ "d": "M16 6h.01" }),
    path({ "d": "M12 6h.01" }),
    path({ "d": "M12 10h.01" }),
    path({ "d": "M12 14h.01" }),
    path({ "d": "M16 10h.01" }),
    path({ "d": "M16 14h.01" }),
    path({ "d": "M8 10h.01" }),
    path({ "d": "M8 14h.01" })
  );
}, "Building");

// src/icons/BusFront.ts
import van234 from "vanjs-core";
var BusFront = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van234.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 6 2 7" }),
    path({ "d": "M10 6h4" }),
    path({ "d": "m22 7-2-1" }),
    rect({ width: "16", height: "16", "x": "4", "y": "3", rx: "2" }),
    path({ "d": "M4 11h16" }),
    path({ "d": "M8 15h.01" }),
    path({ "d": "M16 15h.01" }),
    path({ "d": "M6 19v2" }),
    path({ "d": "M18 21v-2" })
  );
}, "BusFront");

// src/icons/Bus.ts
import van235 from "vanjs-core";
var Bus = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van235.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 6v6" }),
    path({ "d": "M15 6v6" }),
    path({ "d": "M2 12h19.6" }),
    path({
      "d": "M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"
    }),
    circle({ cx: "7", cy: "18", "r": "2" }),
    path({ "d": "M9 18h5" }),
    circle({ cx: "16", cy: "18", "r": "2" })
  );
}, "Bus");

// src/icons/CableCar.ts
import van236 from "vanjs-core";
var CableCar = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van236.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 3h.01" }),
    path({ "d": "M14 2h.01" }),
    path({ "d": "m2 9 20-5" }),
    path({ "d": "M12 12V6.5" }),
    rect({ width: "16", height: "10", "x": "4", "y": "12", rx: "3" }),
    path({ "d": "M9 12v5" }),
    path({ "d": "M15 12v5" }),
    path({ "d": "M4 17h16" })
  );
}, "CableCar");

// src/icons/Cable.ts
import van237 from "vanjs-core";
var Cable = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van237.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1"
    }),
    path({ "d": "M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9" }),
    path({ "d": "M21 21v-2h-4" }),
    path({ "d": "M3 5h4V3" }),
    path({
      "d": "M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3"
    })
  );
}, "Cable");

// src/icons/CakeSlice.ts
import van238 from "vanjs-core";
var CakeSlice = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van238.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "9", cy: "7", "r": "2" }),
    path({
      "d": "M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6"
    }),
    path({ "d": "M16 13H3" }),
    path({ "d": "M16 17H3" })
  );
}, "CakeSlice");

// src/icons/Cake.ts
import van239 from "vanjs-core";
var Cake = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van239.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" }),
    path({ "d": "M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" }),
    path({ "d": "M2 21h20" }),
    path({ "d": "M7 8v3" }),
    path({ "d": "M12 8v3" }),
    path({ "d": "M17 8v3" }),
    path({ "d": "M7 4h.01" }),
    path({ "d": "M12 4h.01" }),
    path({ "d": "M17 4h.01" })
  );
}, "Cake");

// src/icons/Calculator.ts
import van240 from "vanjs-core";
var Calculator = /* @__PURE__ */ __name((props = {}) => {
  const { rect, line, path } = van240.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "16", height: "20", "x": "4", "y": "2", rx: "2" }),
    line({ x1: "8", x2: "16", y1: "6", y2: "6" }),
    line({ x1: "16", x2: "16", y1: "14", y2: "18" }),
    path({ "d": "M16 10h.01" }),
    path({ "d": "M12 10h.01" }),
    path({ "d": "M8 10h.01" }),
    path({ "d": "M12 14h.01" }),
    path({ "d": "M8 14h.01" }),
    path({ "d": "M12 18h.01" }),
    path({ "d": "M8 18h.01" })
  );
}, "Calculator");

// src/icons/Calendar1.ts
import van241 from "vanjs-core";
var Calendar1 = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van241.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M11 14h1v4" }),
    path({ "d": "M16 2v4" }),
    path({ "d": "M3 10h18" }),
    path({ "d": "M8 2v4" }),
    rect({ "x": "3", "y": "4", width: "18", height: "18", rx: "2" })
  );
}, "Calendar1");

// src/icons/CalendarArrowDown.ts
import van242 from "vanjs-core";
var CalendarArrowDown = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van242.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m14 18 4 4 4-4" }),
    path({ "d": "M16 2v4" }),
    path({ "d": "M18 14v8" }),
    path({
      "d": "M21 11.354V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.343"
    }),
    path({ "d": "M3 10h18" }),
    path({ "d": "M8 2v4" })
  );
}, "CalendarArrowDown");

// src/icons/CalendarArrowUp.ts
import van243 from "vanjs-core";
var CalendarArrowUp = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van243.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m14 18 4-4 4 4" }),
    path({ "d": "M16 2v4" }),
    path({ "d": "M18 22v-8" }),
    path({
      "d": "M21 11.343V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9"
    }),
    path({ "d": "M3 10h18" }),
    path({ "d": "M8 2v4" })
  );
}, "CalendarArrowUp");

// src/icons/CalendarCheck2.ts
import van244 from "vanjs-core";
var CalendarCheck2 = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van244.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 2v4" }),
    path({ "d": "M16 2v4" }),
    path({ "d": "M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" }),
    path({ "d": "M3 10h18" }),
    path({ "d": "m16 20 2 2 4-4" })
  );
}, "CalendarCheck2");

// src/icons/CalendarCheck.ts
import van245 from "vanjs-core";
var CalendarCheck = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van245.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 2v4" }),
    path({ "d": "M16 2v4" }),
    rect({ width: "18", height: "18", "x": "3", "y": "4", rx: "2" }),
    path({ "d": "M3 10h18" }),
    path({ "d": "m9 16 2 2 4-4" })
  );
}, "CalendarCheck");

// src/icons/CalendarClock.ts
import van246 from "vanjs-core";
var CalendarClock = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van246.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"
    }),
    path({ "d": "M16 2v4" }),
    path({ "d": "M8 2v4" }),
    path({ "d": "M3 10h5" }),
    path({ "d": "M17.5 17.5 16 16.3V14" }),
    circle({ cx: "16", cy: "16", "r": "6" })
  );
}, "CalendarClock");

// src/icons/CalendarCog.ts
import van247 from "vanjs-core";
var CalendarCog = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van247.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m15.2 16.9-.9-.4" }),
    path({ "d": "m15.2 19.1-.9.4" }),
    path({ "d": "M16 2v4" }),
    path({ "d": "m16.9 15.2-.4-.9" }),
    path({ "d": "m16.9 20.8-.4.9" }),
    path({ "d": "m19.5 14.3-.4.9" }),
    path({ "d": "m19.5 21.7-.4-.9" }),
    path({
      "d": "M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"
    }),
    path({ "d": "m21.7 16.5-.9.4" }),
    path({ "d": "m21.7 19.5-.9-.4" }),
    path({ "d": "M3 10h18" }),
    path({ "d": "M8 2v4" }),
    circle({ cx: "18", cy: "18", "r": "3" })
  );
}, "CalendarCog");

// src/icons/CalendarDays.ts
import van248 from "vanjs-core";
var CalendarDays = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van248.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 2v4" }),
    path({ "d": "M16 2v4" }),
    rect({ width: "18", height: "18", "x": "3", "y": "4", rx: "2" }),
    path({ "d": "M3 10h18" }),
    path({ "d": "M8 14h.01" }),
    path({ "d": "M12 14h.01" }),
    path({ "d": "M16 14h.01" }),
    path({ "d": "M8 18h.01" }),
    path({ "d": "M12 18h.01" }),
    path({ "d": "M16 18h.01" })
  );
}, "CalendarDays");

// src/icons/CalendarFold.ts
import van249 from "vanjs-core";
var CalendarFold = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van249.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 2v4" }),
    path({ "d": "M16 2v4" }),
    path({
      "d": "M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z"
    }),
    path({ "d": "M3 10h18" }),
    path({ "d": "M15 22v-4a2 2 0 0 1 2-2h4" })
  );
}, "CalendarFold");

// src/icons/CalendarHeart.ts
import van250 from "vanjs-core";
var CalendarHeart = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van250.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7"
    }),
    path({ "d": "M8 2v4" }),
    path({ "d": "M16 2v4" }),
    path({
      "d": "M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"
    })
  );
}, "CalendarHeart");

// src/icons/CalendarMinus2.ts
import van251 from "vanjs-core";
var CalendarMinus2 = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van251.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 2v4" }),
    path({ "d": "M16 2v4" }),
    rect({ width: "18", height: "18", "x": "3", "y": "4", rx: "2" }),
    path({ "d": "M3 10h18" }),
    path({ "d": "M10 16h4" })
  );
}, "CalendarMinus2");

// src/icons/CalendarMinus.ts
import van252 from "vanjs-core";
var CalendarMinus = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van252.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 19h6" }),
    path({ "d": "M16 2v4" }),
    path({
      "d": "M21 15V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"
    }),
    path({ "d": "M3 10h18" }),
    path({ "d": "M8 2v4" })
  );
}, "CalendarMinus");

// src/icons/CalendarOff.ts
import van253 from "vanjs-core";
var CalendarOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van253.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18"
    }),
    path({ "d": "M21 15.5V6a2 2 0 0 0-2-2H9.5" }),
    path({ "d": "M16 2v4" }),
    path({ "d": "M3 10h7" }),
    path({ "d": "M21 10h-5.5" }),
    path({ "d": "m2 2 20 20" })
  );
}, "CalendarOff");

// src/icons/CalendarPlus2.ts
import van254 from "vanjs-core";
var CalendarPlus2 = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van254.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 2v4" }),
    path({ "d": "M16 2v4" }),
    rect({ width: "18", height: "18", "x": "3", "y": "4", rx: "2" }),
    path({ "d": "M3 10h18" }),
    path({ "d": "M10 16h4" }),
    path({ "d": "M12 14v4" })
  );
}, "CalendarPlus2");

// src/icons/CalendarPlus.ts
import van255 from "vanjs-core";
var CalendarPlus = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van255.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 2v4" }),
    path({ "d": "M16 2v4" }),
    path({ "d": "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" }),
    path({ "d": "M3 10h18" }),
    path({ "d": "M16 19h6" }),
    path({ "d": "M19 16v6" })
  );
}, "CalendarPlus");

// src/icons/CalendarRange.ts
import van256 from "vanjs-core";
var CalendarRange = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van256.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "4", rx: "2" }),
    path({ "d": "M16 2v4" }),
    path({ "d": "M3 10h18" }),
    path({ "d": "M8 2v4" }),
    path({ "d": "M17 14h-6" }),
    path({ "d": "M13 18H7" }),
    path({ "d": "M7 14h.01" }),
    path({ "d": "M17 18h.01" })
  );
}, "CalendarRange");

// src/icons/CalendarSearch.ts
import van257 from "vanjs-core";
var CalendarSearch = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van257.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 2v4" }),
    path({
      "d": "M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25"
    }),
    path({ "d": "m22 22-1.875-1.875" }),
    path({ "d": "M3 10h18" }),
    path({ "d": "M8 2v4" }),
    circle({ cx: "18", cy: "18", "r": "3" })
  );
}, "CalendarSearch");

// src/icons/CalendarSync.ts
import van258 from "vanjs-core";
var CalendarSync = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van258.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M11 10v4h4" }),
    path({ "d": "m11 14 1.535-1.605a5 5 0 0 1 8 1.5" }),
    path({ "d": "M16 2v4" }),
    path({ "d": "m21 18-1.535 1.605a5 5 0 0 1-8-1.5" }),
    path({ "d": "M21 22v-4h-4" }),
    path({
      "d": "M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3"
    }),
    path({ "d": "M3 10h4" }),
    path({ "d": "M8 2v4" })
  );
}, "CalendarSync");

// src/icons/CalendarX2.ts
import van259 from "vanjs-core";
var CalendarX2 = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van259.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 2v4" }),
    path({ "d": "M16 2v4" }),
    path({ "d": "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" }),
    path({ "d": "M3 10h18" }),
    path({ "d": "m17 22 5-5" }),
    path({ "d": "m17 17 5 5" })
  );
}, "CalendarX2");

// src/icons/CalendarX.ts
import van260 from "vanjs-core";
var CalendarX = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van260.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 2v4" }),
    path({ "d": "M16 2v4" }),
    rect({ width: "18", height: "18", "x": "3", "y": "4", rx: "2" }),
    path({ "d": "M3 10h18" }),
    path({ "d": "m14 14-4 4" }),
    path({ "d": "m10 14 4 4" })
  );
}, "CalendarX");

// src/icons/Calendar.ts
import van261 from "vanjs-core";
var Calendar = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van261.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 2v4" }),
    path({ "d": "M16 2v4" }),
    rect({ width: "18", height: "18", "x": "3", "y": "4", rx: "2" }),
    path({ "d": "M3 10h18" })
  );
}, "Calendar");

// src/icons/CameraOff.ts
import van262 from "vanjs-core";
var CameraOff = /* @__PURE__ */ __name((props = {}) => {
  const { line, path } = van262.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "2", x2: "22", y1: "2", y2: "22" }),
    path({ "d": "M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16" }),
    path({ "d": "M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5" }),
    path({ "d": "M14.121 15.121A3 3 0 1 1 9.88 10.88" })
  );
}, "CameraOff");

// src/icons/Camera.ts
import van263 from "vanjs-core";
var Camera = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van263.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"
    }),
    circle({ cx: "12", cy: "13", "r": "3" })
  );
}, "Camera");

// src/icons/CandyCane.ts
import van264 from "vanjs-core";
var CandyCane = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van264.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"
    }),
    path({ "d": "M17.75 7 15 2.1" }),
    path({ "d": "M10.9 4.8 13 9" }),
    path({ "d": "m7.9 9.7 2 4.4" }),
    path({ "d": "M4.9 14.7 7 18.9" })
  );
}, "CandyCane");

// src/icons/CandyOff.ts
import van265 from "vanjs-core";
var CandyOff = /* @__PURE__ */ __name((props = {}) => {
  const { path, line } = van265.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1" }),
    path({
      "d": "M11.843 6.187A4.947 4.947 0 0 1 16.5 7.5a4.947 4.947 0 0 1 1.313 4.657"
    }),
    path({ "d": "M14 16.5V14" }),
    path({ "d": "M14 6.5v1.843" }),
    path({ "d": "M10 10v7.5" }),
    path({
      "d": "m16 7 1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1"
    }),
    path({
      "d": "m8 17-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1"
    }),
    line({ x1: "2", x2: "22", y1: "2", y2: "22" })
  );
}, "CandyOff");

// src/icons/Candy.ts
import van266 from "vanjs-core";
var Candy = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van266.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z" }),
    path({ "d": "M14 6.5v10" }),
    path({ "d": "M10 7.5v10" }),
    path({
      "d": "m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1"
    }),
    path({
      "d": "m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1"
    })
  );
}, "Candy");

// src/icons/Cannabis.ts
import van267 from "vanjs-core";
var Cannabis = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van267.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 22v-4" }),
    path({
      "d": "M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6"
    })
  );
}, "Cannabis");

// src/icons/CaptionsOff.ts
import van268 from "vanjs-core";
var CaptionsOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van268.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10.5 5H19a2 2 0 0 1 2 2v8.5" }),
    path({ "d": "M17 11h-.5" }),
    path({ "d": "M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2" }),
    path({ "d": "m2 2 20 20" }),
    path({ "d": "M7 11h4" }),
    path({ "d": "M7 15h2.5" })
  );
}, "CaptionsOff");

// src/icons/Captions.ts
import van269 from "vanjs-core";
var Captions = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van269.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "14", "x": "3", "y": "5", rx: "2", ry: "2" }),
    path({ "d": "M7 15h4M15 15h2M7 11h2M13 11h4" })
  );
}, "Captions");

// src/icons/CarFront.ts
import van270 from "vanjs-core";
var CarFront = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van270.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"
    }),
    path({ "d": "M7 14h.01" }),
    path({ "d": "M17 14h.01" }),
    rect({ width: "18", height: "8", "x": "3", "y": "10", rx: "2" }),
    path({ "d": "M5 18v2" }),
    path({ "d": "M19 18v2" })
  );
}, "CarFront");

// src/icons/CarTaxiFront.ts
import van271 from "vanjs-core";
var CarTaxiFront = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van271.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 2h4" }),
    path({
      "d": "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"
    }),
    path({ "d": "M7 14h.01" }),
    path({ "d": "M17 14h.01" }),
    rect({ width: "18", height: "8", "x": "3", "y": "10", rx: "2" }),
    path({ "d": "M5 18v2" }),
    path({ "d": "M19 18v2" })
  );
}, "CarTaxiFront");

// src/icons/Car.ts
import van272 from "vanjs-core";
var Car = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van272.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"
    }),
    circle({ cx: "7", cy: "17", "r": "2" }),
    path({ "d": "M9 17h6" }),
    circle({ cx: "17", cy: "17", "r": "2" })
  );
}, "Car");

// src/icons/Caravan.ts
import van273 from "vanjs-core";
var Caravan = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van273.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2" }),
    path({ "d": "M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2" }),
    path({
      "d": "M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9"
    }),
    circle({ cx: "8", cy: "19", "r": "2" })
  );
}, "Caravan");

// src/icons/Carrot.ts
import van274 from "vanjs-core";
var Carrot = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van274.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"
    }),
    path({
      "d": "M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"
    }),
    path({
      "d": "M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"
    })
  );
}, "Carrot");

// src/icons/CaseLower.ts
import van275 from "vanjs-core";
var CaseLower = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van275.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "7", cy: "12", "r": "3" }),
    path({ "d": "M10 9v6" }),
    circle({ cx: "17", cy: "12", "r": "3" }),
    path({ "d": "M14 7v8" })
  );
}, "CaseLower");

// src/icons/CaseSensitive.ts
import van276 from "vanjs-core";
var CaseSensitive = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van276.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m3 15 4-8 4 8" }),
    path({ "d": "M4 13h6" }),
    circle({ cx: "18", cy: "12", "r": "3" }),
    path({ "d": "M21 9v6" })
  );
}, "CaseSensitive");

// src/icons/CaseUpper.ts
import van277 from "vanjs-core";
var CaseUpper = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van277.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m3 15 4-8 4 8" }),
    path({ "d": "M4 13h6" }),
    path({ "d": "M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4" })
  );
}, "CaseUpper");

// src/icons/CassetteTape.ts
import van278 from "vanjs-core";
var CassetteTape = /* @__PURE__ */ __name((props = {}) => {
  const { rect, circle, path } = van278.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "20", height: "16", "x": "2", "y": "4", rx: "2" }),
    circle({ cx: "8", cy: "10", "r": "2" }),
    path({ "d": "M8 12h8" }),
    circle({ cx: "16", cy: "10", "r": "2" }),
    path({
      "d": "m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3"
    })
  );
}, "CassetteTape");

// src/icons/Cast.ts
import van279 from "vanjs-core";
var Cast = /* @__PURE__ */ __name((props = {}) => {
  const { path, line } = van279.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" }),
    path({ "d": "M2 12a9 9 0 0 1 8 8" }),
    path({ "d": "M2 16a5 5 0 0 1 4 4" }),
    line({ x1: "2", x2: "2.01", y1: "20", y2: "20" })
  );
}, "Cast");

// src/icons/Castle.ts
import van280 from "vanjs-core";
var Castle = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van280.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z" }),
    path({ "d": "M18 11V4H6v7" }),
    path({ "d": "M15 22v-4a3 3 0 0 0-3-3a3 3 0 0 0-3 3v4" }),
    path({ "d": "M22 11V9" }),
    path({ "d": "M2 11V9" }),
    path({ "d": "M6 4V2" }),
    path({ "d": "M18 4V2" }),
    path({ "d": "M10 4V2" }),
    path({ "d": "M14 4V2" })
  );
}, "Castle");

// src/icons/Cat.ts
import van281 from "vanjs-core";
var Cat = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van281.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"
    }),
    path({ "d": "M8 14v.5" }),
    path({ "d": "M16 14v.5" }),
    path({ "d": "M11.25 16.25h1.5L12 17l-.75-.75Z" })
  );
}, "Cat");

// src/icons/Cctv.ts
import van282 from "vanjs-core";
var Cctv = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van282.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97"
    }),
    path({
      "d": "M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z"
    }),
    path({ "d": "M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15" }),
    path({ "d": "M2 21v-4" }),
    path({ "d": "M7 9h.01" })
  );
}, "Cctv");

// src/icons/ChartArea.ts
import van283 from "vanjs-core";
var ChartArea = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van283.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" }),
    path({
      "d": "M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"
    })
  );
}, "ChartArea");

// src/icons/ChartBarBig.ts
import van284 from "vanjs-core";
var ChartBarBig = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van284.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" }),
    rect({ "x": "7", "y": "13", width: "9", height: "4", rx: "1" }),
    rect({ "x": "7", "y": "5", width: "12", height: "4", rx: "1" })
  );
}, "ChartBarBig");

// src/icons/ChartBarDecreasing.ts
import van285 from "vanjs-core";
var ChartBarDecreasing = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van285.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" }),
    path({ "d": "M7 11h8" }),
    path({ "d": "M7 16h3" }),
    path({ "d": "M7 6h12" })
  );
}, "ChartBarDecreasing");

// src/icons/ChartBarIncreasing.ts
import van286 from "vanjs-core";
var ChartBarIncreasing = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van286.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" }),
    path({ "d": "M7 11h8" }),
    path({ "d": "M7 16h12" }),
    path({ "d": "M7 6h3" })
  );
}, "ChartBarIncreasing");

// src/icons/ChartBarStacked.ts
import van287 from "vanjs-core";
var ChartBarStacked = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van287.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M11 13v4" }),
    path({ "d": "M15 5v4" }),
    path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" }),
    rect({ "x": "7", "y": "13", width: "9", height: "4", rx: "1" }),
    rect({ "x": "7", "y": "5", width: "12", height: "4", rx: "1" })
  );
}, "ChartBarStacked");

// src/icons/ChartBar.ts
import van288 from "vanjs-core";
var ChartBar = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van288.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" }),
    path({ "d": "M7 16h8" }),
    path({ "d": "M7 11h12" }),
    path({ "d": "M7 6h3" })
  );
}, "ChartBar");

// src/icons/ChartCandlestick.ts
import van289 from "vanjs-core";
var ChartCandlestick = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van289.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M9 5v4" }),
    rect({ width: "4", height: "6", "x": "7", "y": "9", rx: "1" }),
    path({ "d": "M9 15v2" }),
    path({ "d": "M17 3v2" }),
    rect({ width: "4", height: "8", "x": "15", "y": "5", rx: "1" }),
    path({ "d": "M17 13v3" }),
    path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" })
  );
}, "ChartCandlestick");

// src/icons/ChartColumnBig.ts
import van290 from "vanjs-core";
var ChartColumnBig = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van290.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" }),
    rect({ "x": "15", "y": "5", width: "4", height: "12", rx: "1" }),
    rect({ "x": "7", "y": "8", width: "4", height: "9", rx: "1" })
  );
}, "ChartColumnBig");

// src/icons/ChartColumnDecreasing.ts
import van291 from "vanjs-core";
var ChartColumnDecreasing = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van291.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M13 17V9" }),
    path({ "d": "M18 17v-3" }),
    path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" }),
    path({ "d": "M8 17V5" })
  );
}, "ChartColumnDecreasing");

// src/icons/ChartColumnIncreasing.ts
import van292 from "vanjs-core";
var ChartColumnIncreasing = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van292.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M13 17V9" }),
    path({ "d": "M18 17V5" }),
    path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" }),
    path({ "d": "M8 17v-3" })
  );
}, "ChartColumnIncreasing");

// src/icons/ChartColumnStacked.ts
import van293 from "vanjs-core";
var ChartColumnStacked = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van293.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M11 13H7" }),
    path({ "d": "M19 9h-4" }),
    path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" }),
    rect({ "x": "15", "y": "5", width: "4", height: "12", rx: "1" }),
    rect({ "x": "7", "y": "8", width: "4", height: "9", rx: "1" })
  );
}, "ChartColumnStacked");

// src/icons/ChartColumn.ts
import van294 from "vanjs-core";
var ChartColumn = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van294.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" }),
    path({ "d": "M18 17V9" }),
    path({ "d": "M13 17V5" }),
    path({ "d": "M8 17v-3" })
  );
}, "ChartColumn");

// src/icons/ChartGantt.ts
import van295 from "vanjs-core";
var ChartGantt = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van295.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 6h8" }),
    path({ "d": "M12 16h6" }),
    path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" }),
    path({ "d": "M8 11h7" })
  );
}, "ChartGantt");

// src/icons/ChartLine.ts
import van296 from "vanjs-core";
var ChartLine = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van296.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" }),
    path({ "d": "m19 9-5 5-4-4-3 3" })
  );
}, "ChartLine");

// src/icons/ChartNetwork.ts
import van297 from "vanjs-core";
var ChartNetwork = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van297.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m13.11 7.664 1.78 2.672" }),
    path({ "d": "m14.162 12.788-3.324 1.424" }),
    path({ "d": "m20 4-6.06 1.515" }),
    path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" }),
    circle({ cx: "12", cy: "6", "r": "2" }),
    circle({ cx: "16", cy: "12", "r": "2" }),
    circle({ cx: "9", cy: "15", "r": "2" })
  );
}, "ChartNetwork");

// src/icons/ChartNoAxesColumnDecreasing.ts
import van298 from "vanjs-core";
var ChartNoAxesColumnDecreasing = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van298.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 20V10" }),
    path({ "d": "M18 20v-4" }),
    path({ "d": "M6 20V4" })
  );
}, "ChartNoAxesColumnDecreasing");

// src/icons/ChartNoAxesColumnIncreasing.ts
import van299 from "vanjs-core";
var ChartNoAxesColumnIncreasing = /* @__PURE__ */ __name((props = {}) => {
  const { line } = van299.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "12", x2: "12", y1: "20", y2: "10" }),
    line({ x1: "18", x2: "18", y1: "20", y2: "4" }),
    line({ x1: "6", x2: "6", y1: "20", y2: "16" })
  );
}, "ChartNoAxesColumnIncreasing");

// src/icons/ChartNoAxesColumn.ts
import van300 from "vanjs-core";
var ChartNoAxesColumn = /* @__PURE__ */ __name((props = {}) => {
  const { line } = van300.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "18", x2: "18", y1: "20", y2: "10" }),
    line({ x1: "12", x2: "12", y1: "20", y2: "4" }),
    line({ x1: "6", x2: "6", y1: "20", y2: "14" })
  );
}, "ChartNoAxesColumn");

// src/icons/ChartNoAxesCombined.ts
import van301 from "vanjs-core";
var ChartNoAxesCombined = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van301.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 16v5" }),
    path({ "d": "M16 14v7" }),
    path({ "d": "M20 10v11" }),
    path({
      "d": "m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"
    }),
    path({ "d": "M4 18v3" }),
    path({ "d": "M8 14v7" })
  );
}, "ChartNoAxesCombined");

// src/icons/ChartNoAxesGantt.ts
import van302 from "vanjs-core";
var ChartNoAxesGantt = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van302.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 6h10" }),
    path({ "d": "M6 12h9" }),
    path({ "d": "M11 18h7" })
  );
}, "ChartNoAxesGantt");

// src/icons/ChartPie.ts
import van303 from "vanjs-core";
var ChartPie = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van303.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"
    }),
    path({ "d": "M21.21 15.89A10 10 0 1 1 8 2.83" })
  );
}, "ChartPie");

// src/icons/ChartScatter.ts
import van304 from "vanjs-core";
var ChartScatter = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van304.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "7.5", cy: "7.5", "r": ".5", fill: "currentColor" }),
    circle({ cx: "18.5", cy: "5.5", "r": ".5", fill: "currentColor" }),
    circle({ cx: "11.5", cy: "11.5", "r": ".5", fill: "currentColor" }),
    circle({ cx: "7.5", cy: "16.5", "r": ".5", fill: "currentColor" }),
    circle({ cx: "17.5", cy: "14.5", "r": ".5", fill: "currentColor" }),
    path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" })
  );
}, "ChartScatter");

// src/icons/ChartSpline.ts
import van305 from "vanjs-core";
var ChartSpline = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van305.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" }),
    path({ "d": "M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7" })
  );
}, "ChartSpline");

// src/icons/CheckCheck.ts
import van306 from "vanjs-core";
var CheckCheck = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van306.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M18 6 7 17l-5-5" }),
    path({ "d": "m22 10-7.5 7.5L13 16" })
  );
}, "CheckCheck");

// src/icons/Check.ts
import van307 from "vanjs-core";
var Check = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van307.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M20 6 9 17l-5-5" })
  );
}, "Check");

// src/icons/ChefHat.ts
import van308 from "vanjs-core";
var ChefHat = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van308.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"
    }),
    path({ "d": "M6 17h12" })
  );
}, "ChefHat");

// src/icons/Cherry.ts
import van309 from "vanjs-core";
var Cherry = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van309.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z" }),
    path({ "d": "M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z" }),
    path({ "d": "M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12" }),
    path({ "d": "M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z" })
  );
}, "Cherry");

// src/icons/ChevronDown.ts
import van310 from "vanjs-core";
var ChevronDown = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van310.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m6 9 6 6 6-6" })
  );
}, "ChevronDown");

// src/icons/ChevronFirst.ts
import van311 from "vanjs-core";
var ChevronFirst = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van311.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m17 18-6-6 6-6" }),
    path({ "d": "M7 6v12" })
  );
}, "ChevronFirst");

// src/icons/ChevronLast.ts
import van312 from "vanjs-core";
var ChevronLast = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van312.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m7 18 6-6-6-6" }),
    path({ "d": "M17 6v12" })
  );
}, "ChevronLast");

// src/icons/ChevronLeft.ts
import van313 from "vanjs-core";
var ChevronLeft = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van313.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m15 18-6-6 6-6" })
  );
}, "ChevronLeft");

// src/icons/ChevronRight.ts
import van314 from "vanjs-core";
var ChevronRight = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van314.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m9 18 6-6-6-6" })
  );
}, "ChevronRight");

// src/icons/ChevronUp.ts
import van315 from "vanjs-core";
var ChevronUp = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van315.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m18 15-6-6-6 6" })
  );
}, "ChevronUp");

// src/icons/ChevronsDownUp.ts
import van316 from "vanjs-core";
var ChevronsDownUp = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van316.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m7 20 5-5 5 5" }),
    path({ "d": "m7 4 5 5 5-5" })
  );
}, "ChevronsDownUp");

// src/icons/ChevronsDown.ts
import van317 from "vanjs-core";
var ChevronsDown = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van317.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m7 6 5 5 5-5" }),
    path({ "d": "m7 13 5 5 5-5" })
  );
}, "ChevronsDown");

// src/icons/ChevronsLeftRightEllipsis.ts
import van318 from "vanjs-core";
var ChevronsLeftRightEllipsis = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van318.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m18 8 4 4-4 4" }),
    path({ "d": "m6 8-4 4 4 4" }),
    path({ "d": "M8 12h.01" }),
    path({ "d": "M12 12h.01" }),
    path({ "d": "M16 12h.01" })
  );
}, "ChevronsLeftRightEllipsis");

// src/icons/ChevronsLeftRight.ts
import van319 from "vanjs-core";
var ChevronsLeftRight = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van319.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m9 7-5 5 5 5" }),
    path({ "d": "m15 7 5 5-5 5" })
  );
}, "ChevronsLeftRight");

// src/icons/ChevronsLeft.ts
import van320 from "vanjs-core";
var ChevronsLeft = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van320.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m11 17-5-5 5-5" }),
    path({ "d": "m18 17-5-5 5-5" })
  );
}, "ChevronsLeft");

// src/icons/ChevronsRightLeft.ts
import van321 from "vanjs-core";
var ChevronsRightLeft = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van321.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m20 17-5-5 5-5" }),
    path({ "d": "m4 17 5-5-5-5" })
  );
}, "ChevronsRightLeft");

// src/icons/ChevronsRight.ts
import van322 from "vanjs-core";
var ChevronsRight = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van322.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m6 17 5-5-5-5" }),
    path({ "d": "m13 17 5-5-5-5" })
  );
}, "ChevronsRight");

// src/icons/ChevronsUpDown.ts
import van323 from "vanjs-core";
var ChevronsUpDown = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van323.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m7 15 5 5 5-5" }),
    path({ "d": "m7 9 5-5 5 5" })
  );
}, "ChevronsUpDown");

// src/icons/ChevronsUp.ts
import van324 from "vanjs-core";
var ChevronsUp = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van324.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m17 11-5-5-5 5" }),
    path({ "d": "m17 18-5-5-5 5" })
  );
}, "ChevronsUp");

// src/icons/Chrome.ts
import van325 from "vanjs-core";
var Chrome = /* @__PURE__ */ __name((props = {}) => {
  const { circle, line } = van325.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    circle({ cx: "12", cy: "12", "r": "4" }),
    line({ x1: "21.17", x2: "12", y1: "8", y2: "8" }),
    line({ x1: "3.95", x2: "8.54", y1: "6.06", y2: "14" }),
    line({ x1: "10.88", x2: "15.46", y1: "21.94", y2: "14" })
  );
}, "Chrome");

// src/icons/Church.ts
import van326 from "vanjs-core";
var Church = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van326.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 9h4" }),
    path({ "d": "M12 7v5" }),
    path({ "d": "M14 22v-4a2 2 0 0 0-4 0v4" }),
    path({
      "d": "M18 22V5.618a1 1 0 0 0-.553-.894l-4.553-2.277a2 2 0 0 0-1.788 0L6.553 4.724A1 1 0 0 0 6 5.618V22"
    }),
    path({
      "d": "m18 7 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.618a1 1 0 0 1 .553-.894L6 7"
    })
  );
}, "Church");

// src/icons/CigaretteOff.ts
import van327 from "vanjs-core";
var CigaretteOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van327.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13" }),
    path({ "d": "M18 8c0-2.5-2-2.5-2-5" }),
    path({ "d": "m2 2 20 20" }),
    path({ "d": "M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866" }),
    path({ "d": "M22 8c0-2.5-2-2.5-2-5" }),
    path({ "d": "M7 12v4" })
  );
}, "CigaretteOff");

// src/icons/Cigarette.ts
import van328 from "vanjs-core";
var Cigarette = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van328.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14" }),
    path({ "d": "M18 8c0-2.5-2-2.5-2-5" }),
    path({ "d": "M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" }),
    path({ "d": "M22 8c0-2.5-2-2.5-2-5" }),
    path({ "d": "M7 12v4" })
  );
}, "Cigarette");

// src/icons/CircleAlert.ts
import van329 from "vanjs-core";
var CircleAlert = /* @__PURE__ */ __name((props = {}) => {
  const { circle, line } = van329.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    line({ x1: "12", x2: "12", y1: "8", y2: "12" }),
    line({ x1: "12", x2: "12.01", y1: "16", y2: "16" })
  );
}, "CircleAlert");

// src/icons/CircleArrowDown.ts
import van330 from "vanjs-core";
var CircleArrowDown = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van330.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "M12 8v8" }),
    path({ "d": "m8 12 4 4 4-4" })
  );
}, "CircleArrowDown");

// src/icons/CircleArrowLeft.ts
import van331 from "vanjs-core";
var CircleArrowLeft = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van331.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "M16 12H8" }),
    path({ "d": "m12 8-4 4 4 4" })
  );
}, "CircleArrowLeft");

// src/icons/CircleArrowOutDownLeft.ts
import van332 from "vanjs-core";
var CircleArrowOutDownLeft = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van332.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 12a10 10 0 1 1 10 10" }),
    path({ "d": "m2 22 10-10" }),
    path({ "d": "M8 22H2v-6" })
  );
}, "CircleArrowOutDownLeft");

// src/icons/CircleArrowOutDownRight.ts
import van333 from "vanjs-core";
var CircleArrowOutDownRight = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van333.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 22a10 10 0 1 1 10-10" }),
    path({ "d": "M22 22 12 12" }),
    path({ "d": "M22 16v6h-6" })
  );
}, "CircleArrowOutDownRight");

// src/icons/CircleArrowOutUpLeft.ts
import van334 from "vanjs-core";
var CircleArrowOutUpLeft = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van334.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 8V2h6" }),
    path({ "d": "m2 2 10 10" }),
    path({ "d": "M12 2A10 10 0 1 1 2 12" })
  );
}, "CircleArrowOutUpLeft");

// src/icons/CircleArrowOutUpRight.ts
import van335 from "vanjs-core";
var CircleArrowOutUpRight = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van335.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M22 12A10 10 0 1 1 12 2" }),
    path({ "d": "M22 2 12 12" }),
    path({ "d": "M16 2h6v6" })
  );
}, "CircleArrowOutUpRight");

// src/icons/CircleArrowRight.ts
import van336 from "vanjs-core";
var CircleArrowRight = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van336.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "M8 12h8" }),
    path({ "d": "m12 16 4-4-4-4" })
  );
}, "CircleArrowRight");

// src/icons/CircleArrowUp.ts
import van337 from "vanjs-core";
var CircleArrowUp = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van337.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "m16 12-4-4-4 4" }),
    path({ "d": "M12 16V8" })
  );
}, "CircleArrowUp");

// src/icons/CircleCheckBig.ts
import van338 from "vanjs-core";
var CircleCheckBig = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van338.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21.801 10A10 10 0 1 1 17 3.335" }),
    path({ "d": "m9 11 3 3L22 4" })
  );
}, "CircleCheckBig");

// src/icons/CircleCheck.ts
import van339 from "vanjs-core";
var CircleCheck = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van339.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "m9 12 2 2 4-4" })
  );
}, "CircleCheck");

// src/icons/CircleChevronDown.ts
import van340 from "vanjs-core";
var CircleChevronDown = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van340.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "m16 10-4 4-4-4" })
  );
}, "CircleChevronDown");

// src/icons/CircleChevronLeft.ts
import van341 from "vanjs-core";
var CircleChevronLeft = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van341.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "m14 16-4-4 4-4" })
  );
}, "CircleChevronLeft");

// src/icons/CircleChevronRight.ts
import van342 from "vanjs-core";
var CircleChevronRight = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van342.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "m10 8 4 4-4 4" })
  );
}, "CircleChevronRight");

// src/icons/CircleChevronUp.ts
import van343 from "vanjs-core";
var CircleChevronUp = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van343.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "m8 14 4-4 4 4" })
  );
}, "CircleChevronUp");

// src/icons/CircleDashed.ts
import van344 from "vanjs-core";
var CircleDashed = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van344.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10.1 2.182a10 10 0 0 1 3.8 0" }),
    path({ "d": "M13.9 21.818a10 10 0 0 1-3.8 0" }),
    path({ "d": "M17.609 3.721a10 10 0 0 1 2.69 2.7" }),
    path({ "d": "M2.182 13.9a10 10 0 0 1 0-3.8" }),
    path({ "d": "M20.279 17.609a10 10 0 0 1-2.7 2.69" }),
    path({ "d": "M21.818 10.1a10 10 0 0 1 0 3.8" }),
    path({ "d": "M3.721 6.391a10 10 0 0 1 2.7-2.69" }),
    path({ "d": "M6.391 20.279a10 10 0 0 1-2.69-2.7" })
  );
}, "CircleDashed");

// src/icons/CircleDivide.ts
import van345 from "vanjs-core";
var CircleDivide = /* @__PURE__ */ __name((props = {}) => {
  const { line, circle } = van345.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "8", x2: "16", y1: "12", y2: "12" }),
    line({ x1: "12", x2: "12", y1: "16", y2: "16" }),
    line({ x1: "12", x2: "12", y1: "8", y2: "8" }),
    circle({ cx: "12", cy: "12", "r": "10" })
  );
}, "CircleDivide");

// src/icons/CircleDollarSign.ts
import van346 from "vanjs-core";
var CircleDollarSign = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van346.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" }),
    path({ "d": "M12 18V6" })
  );
}, "CircleDollarSign");

// src/icons/CircleDotDashed.ts
import van347 from "vanjs-core";
var CircleDotDashed = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van347.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10.1 2.18a9.93 9.93 0 0 1 3.8 0" }),
    path({ "d": "M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7" }),
    path({ "d": "M21.82 10.1a9.93 9.93 0 0 1 0 3.8" }),
    path({ "d": "M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69" }),
    path({ "d": "M13.9 21.82a9.94 9.94 0 0 1-3.8 0" }),
    path({ "d": "M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7" }),
    path({ "d": "M2.18 13.9a9.93 9.93 0 0 1 0-3.8" }),
    path({ "d": "M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69" }),
    circle({ cx: "12", cy: "12", "r": "1" })
  );
}, "CircleDotDashed");

// src/icons/CircleDot.ts
import van348 from "vanjs-core";
var CircleDot = /* @__PURE__ */ __name((props = {}) => {
  const { circle } = van348.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    circle({ cx: "12", cy: "12", "r": "1" })
  );
}, "CircleDot");

// src/icons/CircleEllipsis.ts
import van349 from "vanjs-core";
var CircleEllipsis = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van349.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "M17 12h.01" }),
    path({ "d": "M12 12h.01" }),
    path({ "d": "M7 12h.01" })
  );
}, "CircleEllipsis");

// src/icons/CircleEqual.ts
import van350 from "vanjs-core";
var CircleEqual = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van350.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M7 10h10" }),
    path({ "d": "M7 14h10" }),
    circle({ cx: "12", cy: "12", "r": "10" })
  );
}, "CircleEqual");

// src/icons/CircleFadingArrowUp.ts
import van351 from "vanjs-core";
var CircleFadingArrowUp = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van351.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 2a10 10 0 0 1 7.38 16.75" }),
    path({ "d": "m16 12-4-4-4 4" }),
    path({ "d": "M12 16V8" }),
    path({ "d": "M2.5 8.875a10 10 0 0 0-.5 3" }),
    path({ "d": "M2.83 16a10 10 0 0 0 2.43 3.4" }),
    path({ "d": "M4.636 5.235a10 10 0 0 1 .891-.857" }),
    path({ "d": "M8.644 21.42a10 10 0 0 0 7.631-.38" })
  );
}, "CircleFadingArrowUp");

// src/icons/CircleFadingPlus.ts
import van352 from "vanjs-core";
var CircleFadingPlus = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van352.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 2a10 10 0 0 1 7.38 16.75" }),
    path({ "d": "M12 8v8" }),
    path({ "d": "M16 12H8" }),
    path({ "d": "M2.5 8.875a10 10 0 0 0-.5 3" }),
    path({ "d": "M2.83 16a10 10 0 0 0 2.43 3.4" }),
    path({ "d": "M4.636 5.235a10 10 0 0 1 .891-.857" }),
    path({ "d": "M8.644 21.42a10 10 0 0 0 7.631-.38" })
  );
}, "CircleFadingPlus");

// src/icons/CircleGauge.ts
import van353 from "vanjs-core";
var CircleGauge = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van353.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15.6 2.7a10 10 0 1 0 5.7 5.7" }),
    circle({ cx: "12", cy: "12", "r": "2" }),
    path({ "d": "M13.4 10.6 19 5" })
  );
}, "CircleGauge");

// src/icons/CircleHelp.ts
import van354 from "vanjs-core";
var CircleHelp = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van354.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }),
    path({ "d": "M12 17h.01" })
  );
}, "CircleHelp");

// src/icons/CircleMinus.ts
import van355 from "vanjs-core";
var CircleMinus = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van355.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "M8 12h8" })
  );
}, "CircleMinus");

// src/icons/CircleOff.ts
import van356 from "vanjs-core";
var CircleOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van356.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m2 2 20 20" }),
    path({ "d": "M8.35 2.69A10 10 0 0 1 21.3 15.65" }),
    path({ "d": "M19.08 19.08A10 10 0 1 1 4.92 4.92" })
  );
}, "CircleOff");

// src/icons/CircleParkingOff.ts
import van357 from "vanjs-core";
var CircleParkingOff = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van357.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "m5 5 14 14" }),
    path({ "d": "M13 13a3 3 0 1 0 0-6H9v2" }),
    path({ "d": "M9 17v-2.34" })
  );
}, "CircleParkingOff");

// src/icons/CircleParking.ts
import van358 from "vanjs-core";
var CircleParking = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van358.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "M9 17V7h4a3 3 0 0 1 0 6H9" })
  );
}, "CircleParking");

// src/icons/CirclePause.ts
import van359 from "vanjs-core";
var CirclePause = /* @__PURE__ */ __name((props = {}) => {
  const { circle, line } = van359.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    line({ x1: "10", x2: "10", y1: "15", y2: "9" }),
    line({ x1: "14", x2: "14", y1: "15", y2: "9" })
  );
}, "CirclePause");

// src/icons/CirclePercent.ts
import van360 from "vanjs-core";
var CirclePercent = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van360.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "m15 9-6 6" }),
    path({ "d": "M9 9h.01" }),
    path({ "d": "M15 15h.01" })
  );
}, "CirclePercent");

// src/icons/CirclePlay.ts
import van361 from "vanjs-core";
var CirclePlay = /* @__PURE__ */ __name((props = {}) => {
  const { circle, polygon } = van361.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    polygon({ points: "10 8 16 12 10 16 10 8" })
  );
}, "CirclePlay");

// src/icons/CirclePlus.ts
import van362 from "vanjs-core";
var CirclePlus = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van362.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "M8 12h8" }),
    path({ "d": "M12 8v8" })
  );
}, "CirclePlus");

// src/icons/CirclePower.ts
import van363 from "vanjs-core";
var CirclePower = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van363.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 7v4" }),
    path({ "d": "M7.998 9.003a5 5 0 1 0 8-.005" }),
    circle({ cx: "12", cy: "12", "r": "10" })
  );
}, "CirclePower");

// src/icons/CircleSlash2.ts
import van364 from "vanjs-core";
var CircleSlash2 = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van364.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M22 2 2 22" }),
    circle({ cx: "12", cy: "12", "r": "10" })
  );
}, "CircleSlash2");

// src/icons/CircleSlash.ts
import van365 from "vanjs-core";
var CircleSlash = /* @__PURE__ */ __name((props = {}) => {
  const { circle, line } = van365.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    line({ x1: "9", x2: "15", y1: "15", y2: "9" })
  );
}, "CircleSlash");

// src/icons/CircleSmall.ts
import van366 from "vanjs-core";
var CircleSmall = /* @__PURE__ */ __name((props = {}) => {
  const { circle } = van366.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "6" })
  );
}, "CircleSmall");

// src/icons/CircleStop.ts
import van367 from "vanjs-core";
var CircleStop = /* @__PURE__ */ __name((props = {}) => {
  const { circle, rect } = van367.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    rect({ "x": "9", "y": "9", width: "6", height: "6", rx: "1" })
  );
}, "CircleStop");

// src/icons/CircleUserRound.ts
import van368 from "vanjs-core";
var CircleUserRound = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van368.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M18 20a6 6 0 0 0-12 0" }),
    circle({ cx: "12", cy: "10", "r": "4" }),
    circle({ cx: "12", cy: "12", "r": "10" })
  );
}, "CircleUserRound");

// src/icons/CircleUser.ts
import van369 from "vanjs-core";
var CircleUser = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van369.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    circle({ cx: "12", cy: "10", "r": "3" }),
    path({ "d": "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" })
  );
}, "CircleUser");

// src/icons/CircleX.ts
import van370 from "vanjs-core";
var CircleX = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van370.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "m15 9-6 6" }),
    path({ "d": "m9 9 6 6" })
  );
}, "CircleX");

// src/icons/Circle.ts
import van371 from "vanjs-core";
var Circle = /* @__PURE__ */ __name((props = {}) => {
  const { circle } = van371.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" })
  );
}, "Circle");

// src/icons/CircuitBoard.ts
import van372 from "vanjs-core";
var CircuitBoard = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path, circle } = van372.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M11 9h4a2 2 0 0 0 2-2V3" }),
    circle({ cx: "9", cy: "9", "r": "2" }),
    path({ "d": "M7 21v-4a2 2 0 0 1 2-2h4" }),
    circle({ cx: "15", cy: "15", "r": "2" })
  );
}, "CircuitBoard");

// src/icons/Citrus.ts
import van373 from "vanjs-core";
var Citrus = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van373.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z"
    }),
    path({ "d": "M19.65 15.66A8 8 0 0 1 8.35 4.34" }),
    path({ "d": "m14 10-5.5 5.5" }),
    path({ "d": "M14 17.85V10H6.15" })
  );
}, "Citrus");

// src/icons/Clapperboard.ts
import van374 from "vanjs-core";
var Clapperboard = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van374.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"
    }),
    path({ "d": "m6.2 5.3 3.1 3.9" }),
    path({ "d": "m12.4 3.4 3.1 4" }),
    path({ "d": "M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" })
  );
}, "Clapperboard");

// src/icons/ClipboardCheck.ts
import van375 from "vanjs-core";
var ClipboardCheck = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van375.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "8", height: "4", "x": "8", "y": "2", rx: "1", ry: "1" }),
    path({
      "d": "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
    }),
    path({ "d": "m9 14 2 2 4-4" })
  );
}, "ClipboardCheck");

// src/icons/ClipboardCopy.ts
import van376 from "vanjs-core";
var ClipboardCopy = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van376.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "8", height: "4", "x": "8", "y": "2", rx: "1", ry: "1" }),
    path({ "d": "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" }),
    path({ "d": "M16 4h2a2 2 0 0 1 2 2v4" }),
    path({ "d": "M21 14H11" }),
    path({ "d": "m15 10-4 4 4 4" })
  );
}, "ClipboardCopy");

// src/icons/ClipboardList.ts
import van377 from "vanjs-core";
var ClipboardList = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van377.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "8", height: "4", "x": "8", "y": "2", rx: "1", ry: "1" }),
    path({
      "d": "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
    }),
    path({ "d": "M12 11h4" }),
    path({ "d": "M12 16h4" }),
    path({ "d": "M8 11h.01" }),
    path({ "d": "M8 16h.01" })
  );
}, "ClipboardList");

// src/icons/ClipboardMinus.ts
import van378 from "vanjs-core";
var ClipboardMinus = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van378.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "8", height: "4", "x": "8", "y": "2", rx: "1", ry: "1" }),
    path({
      "d": "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
    }),
    path({ "d": "M9 14h6" })
  );
}, "ClipboardMinus");

// src/icons/ClipboardPaste.ts
import van379 from "vanjs-core";
var ClipboardPaste = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van379.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z"
    }),
    path({
      "d": "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10"
    }),
    path({ "d": "m17 10 4 4-4 4" })
  );
}, "ClipboardPaste");

// src/icons/ClipboardPenLine.ts
import van380 from "vanjs-core";
var ClipboardPenLine = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van380.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "8", height: "4", "x": "8", "y": "2", rx: "1" }),
    path({ "d": "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5" }),
    path({ "d": "M16 4h2a2 2 0 0 1 1.73 1" }),
    path({ "d": "M8 18h1" }),
    path({
      "d": "M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
    })
  );
}, "ClipboardPenLine");

// src/icons/ClipboardPen.ts
import van381 from "vanjs-core";
var ClipboardPen = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van381.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "8", height: "4", "x": "8", "y": "2", rx: "1" }),
    path({ "d": "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5" }),
    path({ "d": "M4 13.5V6a2 2 0 0 1 2-2h2" }),
    path({
      "d": "M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
    })
  );
}, "ClipboardPen");

// src/icons/ClipboardPlus.ts
import van382 from "vanjs-core";
var ClipboardPlus = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van382.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "8", height: "4", "x": "8", "y": "2", rx: "1", ry: "1" }),
    path({
      "d": "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
    }),
    path({ "d": "M9 14h6" }),
    path({ "d": "M12 17v-6" })
  );
}, "ClipboardPlus");

// src/icons/ClipboardType.ts
import van383 from "vanjs-core";
var ClipboardType = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van383.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "8", height: "4", "x": "8", "y": "2", rx: "1", ry: "1" }),
    path({
      "d": "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
    }),
    path({ "d": "M9 12v-1h6v1" }),
    path({ "d": "M11 17h2" }),
    path({ "d": "M12 11v6" })
  );
}, "ClipboardType");

// src/icons/ClipboardX.ts
import van384 from "vanjs-core";
var ClipboardX = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van384.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "8", height: "4", "x": "8", "y": "2", rx: "1", ry: "1" }),
    path({
      "d": "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
    }),
    path({ "d": "m15 11-6 6" }),
    path({ "d": "m9 11 6 6" })
  );
}, "ClipboardX");

// src/icons/Clipboard.ts
import van385 from "vanjs-core";
var Clipboard = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van385.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "8", height: "4", "x": "8", "y": "2", rx: "1", ry: "1" }),
    path({
      "d": "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
    })
  );
}, "Clipboard");

// src/icons/Clock1.ts
import van386 from "vanjs-core";
var Clock1 = /* @__PURE__ */ __name((props = {}) => {
  const { circle, polyline } = van386.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    polyline({ points: "12 6 12 12 14.5 8" })
  );
}, "Clock1");

// src/icons/Clock10.ts
import van387 from "vanjs-core";
var Clock10 = /* @__PURE__ */ __name((props = {}) => {
  const { circle, polyline } = van387.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    polyline({ points: "12 6 12 12 8 10" })
  );
}, "Clock10");

// src/icons/Clock11.ts
import van388 from "vanjs-core";
var Clock11 = /* @__PURE__ */ __name((props = {}) => {
  const { circle, polyline } = van388.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    polyline({ points: "12 6 12 12 9.5 8" })
  );
}, "Clock11");

// src/icons/Clock12.ts
import van389 from "vanjs-core";
var Clock12 = /* @__PURE__ */ __name((props = {}) => {
  const { circle, polyline } = van389.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    polyline({ points: "12 6 12 12" })
  );
}, "Clock12");

// src/icons/Clock2.ts
import van390 from "vanjs-core";
var Clock2 = /* @__PURE__ */ __name((props = {}) => {
  const { circle, polyline } = van390.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    polyline({ points: "12 6 12 12 16 10" })
  );
}, "Clock2");

// src/icons/Clock3.ts
import van391 from "vanjs-core";
var Clock3 = /* @__PURE__ */ __name((props = {}) => {
  const { circle, polyline } = van391.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    polyline({ points: "12 6 12 12 16.5 12" })
  );
}, "Clock3");

// src/icons/Clock4.ts
import van392 from "vanjs-core";
var Clock4 = /* @__PURE__ */ __name((props = {}) => {
  const { circle, polyline } = van392.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    polyline({ points: "12 6 12 12 16 14" })
  );
}, "Clock4");

// src/icons/Clock5.ts
import van393 from "vanjs-core";
var Clock5 = /* @__PURE__ */ __name((props = {}) => {
  const { circle, polyline } = van393.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    polyline({ points: "12 6 12 12 14.5 16" })
  );
}, "Clock5");

// src/icons/Clock6.ts
import van394 from "vanjs-core";
var Clock6 = /* @__PURE__ */ __name((props = {}) => {
  const { circle, polyline } = van394.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    polyline({ points: "12 6 12 12 12 16.5" })
  );
}, "Clock6");

// src/icons/Clock7.ts
import van395 from "vanjs-core";
var Clock7 = /* @__PURE__ */ __name((props = {}) => {
  const { circle, polyline } = van395.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    polyline({ points: "12 6 12 12 9.5 16" })
  );
}, "Clock7");

// src/icons/Clock8.ts
import van396 from "vanjs-core";
var Clock8 = /* @__PURE__ */ __name((props = {}) => {
  const { circle, polyline } = van396.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    polyline({ points: "12 6 12 12 8 14" })
  );
}, "Clock8");

// src/icons/Clock9.ts
import van397 from "vanjs-core";
var Clock9 = /* @__PURE__ */ __name((props = {}) => {
  const { circle, polyline } = van397.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    polyline({ points: "12 6 12 12 7.5 12" })
  );
}, "Clock9");

// src/icons/ClockAlert.ts
import van398 from "vanjs-core";
var ClockAlert = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van398.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 6v6l4 2" }),
    path({ "d": "M16 21.16a10 10 0 1 1 5-13.516" }),
    path({ "d": "M20 11.5v6" }),
    path({ "d": "M20 21.5h.01" })
  );
}, "ClockAlert");

// src/icons/ClockArrowDown.ts
import van399 from "vanjs-core";
var ClockArrowDown = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van399.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12.338 21.994A10 10 0 1 1 21.925 13.227" }),
    path({ "d": "M12 6v6l2 1" }),
    path({ "d": "m14 18 4 4 4-4" }),
    path({ "d": "M18 14v8" })
  );
}, "ClockArrowDown");

// src/icons/ClockArrowUp.ts
import van400 from "vanjs-core";
var ClockArrowUp = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van400.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M13.228 21.925A10 10 0 1 1 21.994 12.338" }),
    path({ "d": "M12 6v6l1.562.781" }),
    path({ "d": "m14 18 4-4 4 4" }),
    path({ "d": "M18 22v-8" })
  );
}, "ClockArrowUp");

// src/icons/Clock.ts
import van401 from "vanjs-core";
var Clock = /* @__PURE__ */ __name((props = {}) => {
  const { circle, polyline } = van401.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    polyline({ points: "12 6 12 12 16 14" })
  );
}, "Clock");

// src/icons/CloudAlert.ts
import van402 from "vanjs-core";
var CloudAlert = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van402.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 12v4" }),
    path({ "d": "M12 20h.01" }),
    path({ "d": "M17 18h.5a1 1 0 0 0 0-9h-1.79A7 7 0 1 0 7 17.708" })
  );
}, "CloudAlert");

// src/icons/CloudCog.ts
import van403 from "vanjs-core";
var CloudCog = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van403.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "17", "r": "3" }),
    path({ "d": "M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2" }),
    path({ "d": "m15.7 18.4-.9-.3" }),
    path({ "d": "m9.2 15.9-.9-.3" }),
    path({ "d": "m10.6 20.7.3-.9" }),
    path({ "d": "m13.1 14.2.3-.9" }),
    path({ "d": "m13.6 20.7-.4-1" }),
    path({ "d": "m10.8 14.3-.4-1" }),
    path({ "d": "m8.3 18.6 1-.4" }),
    path({ "d": "m14.7 15.8 1-.4" })
  );
}, "CloudCog");

// src/icons/CloudDownload.ts
import van404 from "vanjs-core";
var CloudDownload = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van404.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 13v8l-4-4" }),
    path({ "d": "m12 21 4-4" }),
    path({
      "d": "M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"
    })
  );
}, "CloudDownload");

// src/icons/CloudDrizzle.ts
import van405 from "vanjs-core";
var CloudDrizzle = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van405.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }),
    path({ "d": "M8 19v1" }),
    path({ "d": "M8 14v1" }),
    path({ "d": "M16 19v1" }),
    path({ "d": "M16 14v1" }),
    path({ "d": "M12 21v1" }),
    path({ "d": "M12 16v1" })
  );
}, "CloudDrizzle");

// src/icons/CloudFog.ts
import van406 from "vanjs-core";
var CloudFog = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van406.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }),
    path({ "d": "M16 17H7" }),
    path({ "d": "M17 21H9" })
  );
}, "CloudFog");

// src/icons/CloudHail.ts
import van407 from "vanjs-core";
var CloudHail = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van407.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }),
    path({ "d": "M16 14v2" }),
    path({ "d": "M8 14v2" }),
    path({ "d": "M16 20h.01" }),
    path({ "d": "M8 20h.01" }),
    path({ "d": "M12 16v2" }),
    path({ "d": "M12 22h.01" })
  );
}, "CloudHail");

// src/icons/CloudLightning.ts
import van408 from "vanjs-core";
var CloudLightning = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van408.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" }),
    path({ "d": "m13 12-3 5h4l-3 5" })
  );
}, "CloudLightning");

// src/icons/CloudMoonRain.ts
import van409 from "vanjs-core";
var CloudMoonRain = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van409.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197" }),
    path({ "d": "M11 20v2" }),
    path({ "d": "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24" }),
    path({ "d": "M7 19v2" })
  );
}, "CloudMoonRain");

// src/icons/CloudMoon.ts
import van410 from "vanjs-core";
var CloudMoon = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van410.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197" }),
    path({ "d": "M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z" })
  );
}, "CloudMoon");

// src/icons/CloudOff.ts
import van411 from "vanjs-core";
var CloudOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van411.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m2 2 20 20" }),
    path({ "d": "M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193" }),
    path({
      "d": "M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07"
    })
  );
}, "CloudOff");

// src/icons/CloudRainWind.ts
import van412 from "vanjs-core";
var CloudRainWind = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van412.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }),
    path({ "d": "m9.2 22 3-7" }),
    path({ "d": "m9 13-3 7" }),
    path({ "d": "m17 13-3 7" })
  );
}, "CloudRainWind");

// src/icons/CloudRain.ts
import van413 from "vanjs-core";
var CloudRain = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van413.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }),
    path({ "d": "M16 14v6" }),
    path({ "d": "M8 14v6" }),
    path({ "d": "M12 16v6" })
  );
}, "CloudRain");

// src/icons/CloudSnow.ts
import van414 from "vanjs-core";
var CloudSnow = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van414.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }),
    path({ "d": "M8 15h.01" }),
    path({ "d": "M8 19h.01" }),
    path({ "d": "M12 17h.01" }),
    path({ "d": "M12 21h.01" }),
    path({ "d": "M16 15h.01" }),
    path({ "d": "M16 19h.01" })
  );
}, "CloudSnow");

// src/icons/CloudSunRain.ts
import van415 from "vanjs-core";
var CloudSunRain = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van415.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 2v2" }),
    path({ "d": "m4.93 4.93 1.41 1.41" }),
    path({ "d": "M20 12h2" }),
    path({ "d": "m19.07 4.93-1.41 1.41" }),
    path({ "d": "M15.947 12.65a4 4 0 0 0-5.925-4.128" }),
    path({ "d": "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24" }),
    path({ "d": "M11 20v2" }),
    path({ "d": "M7 19v2" })
  );
}, "CloudSunRain");

// src/icons/CloudSun.ts
import van416 from "vanjs-core";
var CloudSun = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van416.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 2v2" }),
    path({ "d": "m4.93 4.93 1.41 1.41" }),
    path({ "d": "M20 12h2" }),
    path({ "d": "m19.07 4.93-1.41 1.41" }),
    path({ "d": "M15.947 12.65a4 4 0 0 0-5.925-4.128" }),
    path({ "d": "M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" })
  );
}, "CloudSun");

// src/icons/CloudUpload.ts
import van417 from "vanjs-core";
var CloudUpload = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van417.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 13v8" }),
    path({ "d": "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }),
    path({ "d": "m8 17 4-4 4 4" })
  );
}, "CloudUpload");

// src/icons/Cloud.ts
import van418 from "vanjs-core";
var Cloud = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van418.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" })
  );
}, "Cloud");

// src/icons/Cloudy.ts
import van419 from "vanjs-core";
var Cloudy = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van419.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" }),
    path({ "d": "M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5" })
  );
}, "Cloudy");

// src/icons/Clover.ts
import van420 from "vanjs-core";
var Clover = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van420.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16.17 7.83 2 22" }),
    path({
      "d": "M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12"
    }),
    path({ "d": "m7.83 7.83 8.34 8.34" })
  );
}, "Clover");

// src/icons/Club.ts
import van421 from "vanjs-core";
var Club = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van421.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z"
    }),
    path({ "d": "M12 17.66L12 22" })
  );
}, "Club");

// src/icons/CodeXml.ts
import van422 from "vanjs-core";
var CodeXml = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van422.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m18 16 4-4-4-4" }),
    path({ "d": "m6 8-4 4 4 4" }),
    path({ "d": "m14.5 4-5 16" })
  );
}, "CodeXml");

// src/icons/Code.ts
import van423 from "vanjs-core";
var Code = /* @__PURE__ */ __name((props = {}) => {
  const { polyline } = van423.tags(svgNamespace);
  return LucideIcon(
    props,
    polyline({ points: "16 18 22 12 16 6" }),
    polyline({ points: "8 6 2 12 8 18" })
  );
}, "Code");

// src/icons/Codepen.ts
import van424 from "vanjs-core";
var Codepen = /* @__PURE__ */ __name((props = {}) => {
  const { polygon, line, polyline } = van424.tags(svgNamespace);
  return LucideIcon(
    props,
    polygon({ points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" }),
    line({ x1: "12", x2: "12", y1: "22", y2: "15.5" }),
    polyline({ points: "22 8.5 12 15.5 2 8.5" }),
    polyline({ points: "2 15.5 12 8.5 22 15.5" }),
    line({ x1: "12", x2: "12", y1: "2", y2: "8.5" })
  );
}, "Codepen");

// src/icons/Codesandbox.ts
import van425 from "vanjs-core";
var Codesandbox = /* @__PURE__ */ __name((props = {}) => {
  const { path, polyline, line } = van425.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
    }),
    polyline({ points: "7.5 4.21 12 6.81 16.5 4.21" }),
    polyline({ points: "7.5 19.79 7.5 14.6 3 12" }),
    polyline({ points: "21 12 16.5 14.6 16.5 19.79" }),
    polyline({ points: "3.27 6.96 12 12.01 20.73 6.96" }),
    line({ x1: "12", x2: "12", y1: "22.08", y2: "12" })
  );
}, "Codesandbox");

// src/icons/Coffee.ts
import van426 from "vanjs-core";
var Coffee = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van426.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 2v2" }),
    path({ "d": "M14 2v2" }),
    path({
      "d": "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"
    }),
    path({ "d": "M6 2v2" })
  );
}, "Coffee");

// src/icons/Cog.ts
import van427 from "vanjs-core";
var Cog = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van427.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" }),
    path({ "d": "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" }),
    path({ "d": "M12 2v2" }),
    path({ "d": "M12 22v-2" }),
    path({ "d": "m17 20.66-1-1.73" }),
    path({ "d": "M11 10.27 7 3.34" }),
    path({ "d": "m20.66 17-1.73-1" }),
    path({ "d": "m3.34 7 1.73 1" }),
    path({ "d": "M14 12h8" }),
    path({ "d": "M2 12h2" }),
    path({ "d": "m20.66 7-1.73 1" }),
    path({ "d": "m3.34 17 1.73-1" }),
    path({ "d": "m17 3.34-1 1.73" }),
    path({ "d": "m11 13.73-4 6.93" })
  );
}, "Cog");

// src/icons/Coins.ts
import van428 from "vanjs-core";
var Coins = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van428.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "8", cy: "8", "r": "6" }),
    path({ "d": "M18.09 10.37A6 6 0 1 1 10.34 18" }),
    path({ "d": "M7 6h1v4" }),
    path({ "d": "m16.71 13.88.7.71-2.82 2.82" })
  );
}, "Coins");

// src/icons/Columns2.ts
import van429 from "vanjs-core";
var Columns2 = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van429.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M12 3v18" })
  );
}, "Columns2");

// src/icons/Columns3.ts
import van430 from "vanjs-core";
var Columns3 = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van430.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M9 3v18" }),
    path({ "d": "M15 3v18" })
  );
}, "Columns3");

// src/icons/Columns4.ts
import van431 from "vanjs-core";
var Columns4 = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van431.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M7.5 3v18" }),
    path({ "d": "M12 3v18" }),
    path({ "d": "M16.5 3v18" })
  );
}, "Columns4");

// src/icons/Combine.ts
import van432 from "vanjs-core";
var Combine = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van432.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 18H5a3 3 0 0 1-3-3v-1" }),
    path({ "d": "M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" }),
    path({ "d": "M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" }),
    path({ "d": "m7 21 3-3-3-3" }),
    rect({ "x": "14", "y": "14", width: "8", height: "8", rx: "2" }),
    rect({ "x": "2", "y": "2", width: "8", height: "8", rx: "2" })
  );
}, "Combine");

// src/icons/Command.ts
import van433 from "vanjs-core";
var Command = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van433.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"
    })
  );
}, "Command");

// src/icons/Compass.ts
import van434 from "vanjs-core";
var Compass = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van434.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
    }),
    circle({ cx: "12", cy: "12", "r": "10" })
  );
}, "Compass");

// src/icons/Component.ts
import van435 from "vanjs-core";
var Component = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van435.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"
    }),
    path({
      "d": "M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"
    }),
    path({
      "d": "M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"
    }),
    path({
      "d": "M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"
    })
  );
}, "Component");

// src/icons/Computer.ts
import van436 from "vanjs-core";
var Computer = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van436.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "14", height: "8", "x": "5", "y": "2", rx: "2" }),
    rect({ width: "20", height: "8", "x": "2", "y": "14", rx: "2" }),
    path({ "d": "M6 18h2" }),
    path({ "d": "M12 18h6" })
  );
}, "Computer");

// src/icons/ConciergeBell.ts
import van437 from "vanjs-core";
var ConciergeBell = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van437.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z"
    }),
    path({ "d": "M20 16a8 8 0 1 0-16 0" }),
    path({ "d": "M12 4v4" }),
    path({ "d": "M10 4h4" })
  );
}, "ConciergeBell");

// src/icons/Cone.ts
import van438 from "vanjs-core";
var Cone = /* @__PURE__ */ __name((props = {}) => {
  const { path, ellipse } = van438.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98" }),
    ellipse({ cx: "12", cy: "19", rx: "9", ry: "3" })
  );
}, "Cone");

// src/icons/Construction.ts
import van439 from "vanjs-core";
var Construction = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van439.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ "x": "2", "y": "6", width: "20", height: "8", rx: "1" }),
    path({ "d": "M17 14v7" }),
    path({ "d": "M7 14v7" }),
    path({ "d": "M17 3v3" }),
    path({ "d": "M7 3v3" }),
    path({ "d": "M10 14 2.3 6.3" }),
    path({ "d": "m14 6 7.7 7.7" }),
    path({ "d": "m8 6 8 8" })
  );
}, "Construction");

// src/icons/ContactRound.ts
import van440 from "vanjs-core";
var ContactRound = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle, rect } = van440.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 2v2" }),
    path({ "d": "M17.915 22a6 6 0 0 0-12 0" }),
    path({ "d": "M8 2v2" }),
    circle({ cx: "12", cy: "12", "r": "4" }),
    rect({ "x": "3", "y": "4", width: "18", height: "18", rx: "2" })
  );
}, "ContactRound");

// src/icons/Contact.ts
import van441 from "vanjs-core";
var Contact = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle, rect } = van441.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 2v2" }),
    path({ "d": "M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" }),
    path({ "d": "M8 2v2" }),
    circle({ cx: "12", cy: "11", "r": "3" }),
    rect({ "x": "3", "y": "4", width: "18", height: "18", rx: "2" })
  );
}, "Contact");

// src/icons/Container.ts
import van442 from "vanjs-core";
var Container = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van442.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"
    }),
    path({ "d": "M10 21.9V14L2.1 9.1" }),
    path({ "d": "m10 14 11.9-6.9" }),
    path({ "d": "M14 19.8v-8.1" }),
    path({ "d": "M18 17.5V9.4" })
  );
}, "Container");

// src/icons/Contrast.ts
import van443 from "vanjs-core";
var Contrast = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van443.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "M12 18a6 6 0 0 0 0-12v12z" })
  );
}, "Contrast");

// src/icons/Cookie.ts
import van444 from "vanjs-core";
var Cookie = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van444.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" }),
    path({ "d": "M8.5 8.5v.01" }),
    path({ "d": "M16 15.5v.01" }),
    path({ "d": "M12 12v.01" }),
    path({ "d": "M11 17v.01" }),
    path({ "d": "M7 14v.01" })
  );
}, "Cookie");

// src/icons/CookingPot.ts
import van445 from "vanjs-core";
var CookingPot = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van445.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 12h20" }),
    path({ "d": "M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" }),
    path({ "d": "m4 8 16-4" }),
    path({
      "d": "m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"
    })
  );
}, "CookingPot");

// src/icons/CopyCheck.ts
import van446 from "vanjs-core";
var CopyCheck = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van446.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m12 15 2 2 4-4" }),
    rect({ width: "14", height: "14", "x": "8", "y": "8", rx: "2", ry: "2" }),
    path({ "d": "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" })
  );
}, "CopyCheck");

// src/icons/CopyMinus.ts
import van447 from "vanjs-core";
var CopyMinus = /* @__PURE__ */ __name((props = {}) => {
  const { line, rect, path } = van447.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "12", x2: "18", y1: "15", y2: "15" }),
    rect({ width: "14", height: "14", "x": "8", "y": "8", rx: "2", ry: "2" }),
    path({ "d": "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" })
  );
}, "CopyMinus");

// src/icons/CopyPlus.ts
import van448 from "vanjs-core";
var CopyPlus = /* @__PURE__ */ __name((props = {}) => {
  const { line, rect, path } = van448.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "15", x2: "15", y1: "12", y2: "18" }),
    line({ x1: "12", x2: "18", y1: "15", y2: "15" }),
    rect({ width: "14", height: "14", "x": "8", "y": "8", rx: "2", ry: "2" }),
    path({ "d": "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" })
  );
}, "CopyPlus");

// src/icons/CopySlash.ts
import van449 from "vanjs-core";
var CopySlash = /* @__PURE__ */ __name((props = {}) => {
  const { line, rect, path } = van449.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "12", x2: "18", y1: "18", y2: "12" }),
    rect({ width: "14", height: "14", "x": "8", "y": "8", rx: "2", ry: "2" }),
    path({ "d": "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" })
  );
}, "CopySlash");

// src/icons/CopyX.ts
import van450 from "vanjs-core";
var CopyX = /* @__PURE__ */ __name((props = {}) => {
  const { line, rect, path } = van450.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "12", x2: "18", y1: "12", y2: "18" }),
    line({ x1: "12", x2: "18", y1: "18", y2: "12" }),
    rect({ width: "14", height: "14", "x": "8", "y": "8", rx: "2", ry: "2" }),
    path({ "d": "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" })
  );
}, "CopyX");

// src/icons/Copy.ts
import van451 from "vanjs-core";
var Copy = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van451.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "14", height: "14", "x": "8", "y": "8", rx: "2", ry: "2" }),
    path({ "d": "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" })
  );
}, "Copy");

// src/icons/Copyleft.ts
import van452 from "vanjs-core";
var Copyleft = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van452.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "M9.17 14.83a4 4 0 1 0 0-5.66" })
  );
}, "Copyleft");

// src/icons/Copyright.ts
import van453 from "vanjs-core";
var Copyright = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van453.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "M14.83 14.83a4 4 0 1 1 0-5.66" })
  );
}, "Copyright");

// src/icons/CornerDownLeft.ts
import van454 from "vanjs-core";
var CornerDownLeft = /* @__PURE__ */ __name((props = {}) => {
  const { polyline, path } = van454.tags(svgNamespace);
  return LucideIcon(
    props,
    polyline({ points: "9 10 4 15 9 20" }),
    path({ "d": "M20 4v7a4 4 0 0 1-4 4H4" })
  );
}, "CornerDownLeft");

// src/icons/CornerDownRight.ts
import van455 from "vanjs-core";
var CornerDownRight = /* @__PURE__ */ __name((props = {}) => {
  const { polyline, path } = van455.tags(svgNamespace);
  return LucideIcon(
    props,
    polyline({ points: "15 10 20 15 15 20" }),
    path({ "d": "M4 4v7a4 4 0 0 0 4 4h12" })
  );
}, "CornerDownRight");

// src/icons/CornerLeftDown.ts
import van456 from "vanjs-core";
var CornerLeftDown = /* @__PURE__ */ __name((props = {}) => {
  const { polyline, path } = van456.tags(svgNamespace);
  return LucideIcon(
    props,
    polyline({ points: "14 15 9 20 4 15" }),
    path({ "d": "M20 4h-7a4 4 0 0 0-4 4v12" })
  );
}, "CornerLeftDown");

// src/icons/CornerLeftUp.ts
import van457 from "vanjs-core";
var CornerLeftUp = /* @__PURE__ */ __name((props = {}) => {
  const { polyline, path } = van457.tags(svgNamespace);
  return LucideIcon(
    props,
    polyline({ points: "14 9 9 4 4 9" }),
    path({ "d": "M20 20h-7a4 4 0 0 1-4-4V4" })
  );
}, "CornerLeftUp");

// src/icons/CornerRightDown.ts
import van458 from "vanjs-core";
var CornerRightDown = /* @__PURE__ */ __name((props = {}) => {
  const { polyline, path } = van458.tags(svgNamespace);
  return LucideIcon(
    props,
    polyline({ points: "10 15 15 20 20 15" }),
    path({ "d": "M4 4h7a4 4 0 0 1 4 4v12" })
  );
}, "CornerRightDown");

// src/icons/CornerRightUp.ts
import van459 from "vanjs-core";
var CornerRightUp = /* @__PURE__ */ __name((props = {}) => {
  const { polyline, path } = van459.tags(svgNamespace);
  return LucideIcon(
    props,
    polyline({ points: "10 9 15 4 20 9" }),
    path({ "d": "M4 20h7a4 4 0 0 0 4-4V4" })
  );
}, "CornerRightUp");

// src/icons/CornerUpLeft.ts
import van460 from "vanjs-core";
var CornerUpLeft = /* @__PURE__ */ __name((props = {}) => {
  const { polyline, path } = van460.tags(svgNamespace);
  return LucideIcon(
    props,
    polyline({ points: "9 14 4 9 9 4" }),
    path({ "d": "M20 20v-7a4 4 0 0 0-4-4H4" })
  );
}, "CornerUpLeft");

// src/icons/CornerUpRight.ts
import van461 from "vanjs-core";
var CornerUpRight = /* @__PURE__ */ __name((props = {}) => {
  const { polyline, path } = van461.tags(svgNamespace);
  return LucideIcon(
    props,
    polyline({ points: "15 14 20 9 15 4" }),
    path({ "d": "M4 20v-7a4 4 0 0 1 4-4h12" })
  );
}, "CornerUpRight");

// src/icons/Cpu.ts
import van462 from "vanjs-core";
var Cpu = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van462.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "16", height: "16", "x": "4", "y": "4", rx: "2" }),
    rect({ width: "6", height: "6", "x": "9", "y": "9", rx: "1" }),
    path({ "d": "M15 2v2" }),
    path({ "d": "M15 20v2" }),
    path({ "d": "M2 15h2" }),
    path({ "d": "M2 9h2" }),
    path({ "d": "M20 15h2" }),
    path({ "d": "M20 9h2" }),
    path({ "d": "M9 2v2" }),
    path({ "d": "M9 20v2" })
  );
}, "Cpu");

// src/icons/CreativeCommons.ts
import van463 from "vanjs-core";
var CreativeCommons = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van463.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({
      "d": "M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"
    }),
    path({
      "d": "M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"
    })
  );
}, "CreativeCommons");

// src/icons/CreditCard.ts
import van464 from "vanjs-core";
var CreditCard = /* @__PURE__ */ __name((props = {}) => {
  const { rect, line } = van464.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "20", height: "14", "x": "2", "y": "5", rx: "2" }),
    line({ x1: "2", x2: "22", y1: "10", y2: "10" })
  );
}, "CreditCard");

// src/icons/Croissant.ts
import van465 from "vanjs-core";
var Croissant = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van465.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z"
    }),
    path({
      "d": "m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83"
    }),
    path({ "d": "M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4" }),
    path({
      "d": "m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2"
    }),
    path({ "d": "M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5" })
  );
}, "Croissant");

// src/icons/Crop.ts
import van466 from "vanjs-core";
var Crop = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van466.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M6 2v14a2 2 0 0 0 2 2h14" }),
    path({ "d": "M18 22V8a2 2 0 0 0-2-2H2" })
  );
}, "Crop");

// src/icons/Cross.ts
import van467 from "vanjs-core";
var Cross = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van467.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z"
    })
  );
}, "Cross");

// src/icons/Crosshair.ts
import van468 from "vanjs-core";
var Crosshair = /* @__PURE__ */ __name((props = {}) => {
  const { circle, line } = van468.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    line({ x1: "22", x2: "18", y1: "12", y2: "12" }),
    line({ x1: "6", x2: "2", y1: "12", y2: "12" }),
    line({ x1: "12", x2: "12", y1: "6", y2: "2" }),
    line({ x1: "12", x2: "12", y1: "22", y2: "18" })
  );
}, "Crosshair");

// src/icons/Crown.ts
import van469 from "vanjs-core";
var Crown = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van469.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"
    }),
    path({ "d": "M5 21h14" })
  );
}, "Crown");

// src/icons/Cuboid.ts
import van470 from "vanjs-core";
var Cuboid = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van470.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z"
    }),
    path({ "d": "M10 22v-8L2.25 9.15" }),
    path({ "d": "m10 14 11.77-6.87" })
  );
}, "Cuboid");

// src/icons/CupSoda.ts
import van471 from "vanjs-core";
var CupSoda = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van471.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8"
    }),
    path({ "d": "M5 8h14" }),
    path({ "d": "M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0" }),
    path({ "d": "m12 8 1-6h2" })
  );
}, "CupSoda");

// src/icons/Currency.ts
import van472 from "vanjs-core";
var Currency = /* @__PURE__ */ __name((props = {}) => {
  const { circle, line } = van472.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "8" }),
    line({ x1: "3", x2: "6", y1: "3", y2: "6" }),
    line({ x1: "21", x2: "18", y1: "3", y2: "6" }),
    line({ x1: "3", x2: "6", y1: "21", y2: "18" }),
    line({ x1: "21", x2: "18", y1: "21", y2: "18" })
  );
}, "Currency");

// src/icons/Cylinder.ts
import van473 from "vanjs-core";
var Cylinder = /* @__PURE__ */ __name((props = {}) => {
  const { ellipse, path } = van473.tags(svgNamespace);
  return LucideIcon(
    props,
    ellipse({ cx: "12", cy: "5", rx: "9", ry: "3" }),
    path({ "d": "M3 5v14a9 3 0 0 0 18 0V5" })
  );
}, "Cylinder");

// src/icons/Dam.ts
import van474 from "vanjs-core";
var Dam = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van474.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M11 11.31c1.17.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
    }),
    path({
      "d": "M11.75 18c.35.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
    }),
    path({ "d": "M2 10h4" }),
    path({ "d": "M2 14h4" }),
    path({ "d": "M2 18h4" }),
    path({ "d": "M2 6h4" }),
    path({
      "d": "M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z"
    })
  );
}, "Dam");

// src/icons/DatabaseBackup.ts
import van475 from "vanjs-core";
var DatabaseBackup = /* @__PURE__ */ __name((props = {}) => {
  const { ellipse, path } = van475.tags(svgNamespace);
  return LucideIcon(
    props,
    ellipse({ cx: "12", cy: "5", rx: "9", ry: "3" }),
    path({ "d": "M3 12a9 3 0 0 0 5 2.69" }),
    path({ "d": "M21 9.3V5" }),
    path({ "d": "M3 5v14a9 3 0 0 0 6.47 2.88" }),
    path({ "d": "M12 12v4h4" }),
    path({
      "d": "M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16"
    })
  );
}, "DatabaseBackup");

// src/icons/DatabaseZap.ts
import van476 from "vanjs-core";
var DatabaseZap = /* @__PURE__ */ __name((props = {}) => {
  const { ellipse, path } = van476.tags(svgNamespace);
  return LucideIcon(
    props,
    ellipse({ cx: "12", cy: "5", rx: "9", ry: "3" }),
    path({ "d": "M3 5V19A9 3 0 0 0 15 21.84" }),
    path({ "d": "M21 5V8" }),
    path({ "d": "M21 12L18 17H22L19 22" }),
    path({ "d": "M3 12A9 3 0 0 0 14.59 14.87" })
  );
}, "DatabaseZap");

// src/icons/Database.ts
import van477 from "vanjs-core";
var Database = /* @__PURE__ */ __name((props = {}) => {
  const { ellipse, path } = van477.tags(svgNamespace);
  return LucideIcon(
    props,
    ellipse({ cx: "12", cy: "5", rx: "9", ry: "3" }),
    path({ "d": "M3 5V19A9 3 0 0 0 21 19V5" }),
    path({ "d": "M3 12A9 3 0 0 0 21 12" })
  );
}, "Database");

// src/icons/Delete.ts
import van478 from "vanjs-core";
var Delete = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van478.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"
    }),
    path({ "d": "m12 9 6 6" }),
    path({ "d": "m18 9-6 6" })
  );
}, "Delete");

// src/icons/Dessert.ts
import van479 from "vanjs-core";
var Dessert = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van479.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "4", "r": "2" }),
    path({
      "d": "M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8"
    }),
    path({ "d": "M3.2 14.8a9 9 0 0 0 17.6 0" })
  );
}, "Dessert");

// src/icons/Diameter.ts
import van480 from "vanjs-core";
var Diameter = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van480.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "19", cy: "19", "r": "2" }),
    circle({ cx: "5", cy: "5", "r": "2" }),
    path({ "d": "M6.48 3.66a10 10 0 0 1 13.86 13.86" }),
    path({ "d": "m6.41 6.41 11.18 11.18" }),
    path({ "d": "M3.66 6.48a10 10 0 0 0 13.86 13.86" })
  );
}, "Diameter");

// src/icons/DiamondMinus.ts
import van481 from "vanjs-core";
var DiamondMinus = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van481.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"
    }),
    path({ "d": "M8 12h8" })
  );
}, "DiamondMinus");

// src/icons/DiamondPercent.ts
import van482 from "vanjs-core";
var DiamondPercent = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van482.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z"
    }),
    path({ "d": "M9.2 9.2h.01" }),
    path({ "d": "m14.5 9.5-5 5" }),
    path({ "d": "M14.7 14.8h.01" })
  );
}, "DiamondPercent");

// src/icons/DiamondPlus.ts
import van483 from "vanjs-core";
var DiamondPlus = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van483.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 8v8" }),
    path({
      "d": "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"
    }),
    path({ "d": "M8 12h8" })
  );
}, "DiamondPlus");

// src/icons/Diamond.ts
import van484 from "vanjs-core";
var Diamond = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van484.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"
    })
  );
}, "Diamond");

// src/icons/Dice1.ts
import van485 from "vanjs-core";
var Dice1 = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van485.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2", ry: "2" }),
    path({ "d": "M12 12h.01" })
  );
}, "Dice1");

// src/icons/Dice2.ts
import van486 from "vanjs-core";
var Dice2 = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van486.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2", ry: "2" }),
    path({ "d": "M15 9h.01" }),
    path({ "d": "M9 15h.01" })
  );
}, "Dice2");

// src/icons/Dice3.ts
import van487 from "vanjs-core";
var Dice3 = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van487.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2", ry: "2" }),
    path({ "d": "M16 8h.01" }),
    path({ "d": "M12 12h.01" }),
    path({ "d": "M8 16h.01" })
  );
}, "Dice3");

// src/icons/Dice4.ts
import van488 from "vanjs-core";
var Dice4 = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van488.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2", ry: "2" }),
    path({ "d": "M16 8h.01" }),
    path({ "d": "M8 8h.01" }),
    path({ "d": "M8 16h.01" }),
    path({ "d": "M16 16h.01" })
  );
}, "Dice4");

// src/icons/Dice5.ts
import van489 from "vanjs-core";
var Dice5 = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van489.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2", ry: "2" }),
    path({ "d": "M16 8h.01" }),
    path({ "d": "M8 8h.01" }),
    path({ "d": "M8 16h.01" }),
    path({ "d": "M16 16h.01" }),
    path({ "d": "M12 12h.01" })
  );
}, "Dice5");

// src/icons/Dice6.ts
import van490 from "vanjs-core";
var Dice6 = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van490.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2", ry: "2" }),
    path({ "d": "M16 8h.01" }),
    path({ "d": "M16 12h.01" }),
    path({ "d": "M16 16h.01" }),
    path({ "d": "M8 8h.01" }),
    path({ "d": "M8 12h.01" }),
    path({ "d": "M8 16h.01" })
  );
}, "Dice6");

// src/icons/Dices.ts
import van491 from "vanjs-core";
var Dices = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van491.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "12", height: "12", "x": "2", "y": "10", rx: "2", ry: "2" }),
    path({
      "d": "m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"
    }),
    path({ "d": "M6 18h.01" }),
    path({ "d": "M10 14h.01" }),
    path({ "d": "M15 6h.01" }),
    path({ "d": "M18 9h.01" })
  );
}, "Dices");

// src/icons/Diff.ts
import van492 from "vanjs-core";
var Diff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van492.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 3v14" }),
    path({ "d": "M5 10h14" }),
    path({ "d": "M5 21h14" })
  );
}, "Diff");

// src/icons/Disc2.ts
import van493 from "vanjs-core";
var Disc2 = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van493.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    circle({ cx: "12", cy: "12", "r": "4" }),
    path({ "d": "M12 12h.01" })
  );
}, "Disc2");

// src/icons/Disc3.ts
import van494 from "vanjs-core";
var Disc3 = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van494.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "M6 12c0-1.7.7-3.2 1.8-4.2" }),
    circle({ cx: "12", cy: "12", "r": "2" }),
    path({ "d": "M18 12c0 1.7-.7 3.2-1.8 4.2" })
  );
}, "Disc3");

// src/icons/DiscAlbum.ts
import van495 from "vanjs-core";
var DiscAlbum = /* @__PURE__ */ __name((props = {}) => {
  const { rect, circle, path } = van495.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    circle({ cx: "12", cy: "12", "r": "5" }),
    path({ "d": "M12 12h.01" })
  );
}, "DiscAlbum");

// src/icons/Disc.ts
import van496 from "vanjs-core";
var Disc = /* @__PURE__ */ __name((props = {}) => {
  const { circle } = van496.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    circle({ cx: "12", cy: "12", "r": "2" })
  );
}, "Disc");

// src/icons/Divide.ts
import van497 from "vanjs-core";
var Divide = /* @__PURE__ */ __name((props = {}) => {
  const { circle, line } = van497.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "6", "r": "1" }),
    line({ x1: "5", x2: "19", y1: "12", y2: "12" }),
    circle({ cx: "12", cy: "18", "r": "1" })
  );
}, "Divide");

// src/icons/DnaOff.ts
import van498 from "vanjs-core";
var DnaOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van498.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8" }),
    path({ "d": "m17 6-2.891-2.891" }),
    path({ "d": "M2 15c3.333-3 6.667-3 10-3" }),
    path({ "d": "m2 2 20 20" }),
    path({ "d": "m20 9 .891.891" }),
    path({ "d": "M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1" }),
    path({ "d": "M3.109 14.109 4 15" }),
    path({ "d": "m6.5 12.5 1 1" }),
    path({ "d": "m7 18 2.891 2.891" }),
    path({ "d": "M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16" })
  );
}, "DnaOff");

// src/icons/Dna.ts
import van499 from "vanjs-core";
var Dna = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van499.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m10 16 1.5 1.5" }),
    path({ "d": "m14 8-1.5-1.5" }),
    path({ "d": "M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" }),
    path({ "d": "m16.5 10.5 1 1" }),
    path({ "d": "m17 6-2.891-2.891" }),
    path({ "d": "M2 15c6.667-6 13.333 0 20-6" }),
    path({ "d": "m20 9 .891.891" }),
    path({ "d": "M3.109 14.109 4 15" }),
    path({ "d": "m6.5 12.5 1 1" }),
    path({ "d": "m7 18 2.891 2.891" }),
    path({ "d": "M9 22c1.798-1.998 2.518-3.995 2.807-5.993" })
  );
}, "Dna");

// src/icons/Dock.ts
import van500 from "vanjs-core";
var Dock = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van500.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 8h20" }),
    rect({ width: "20", height: "16", "x": "2", "y": "4", rx: "2" }),
    path({ "d": "M6 16h12" })
  );
}, "Dock");

// src/icons/Dog.ts
import van501 from "vanjs-core";
var Dog = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van501.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M11.25 16.25h1.5L12 17z" }),
    path({ "d": "M16 14v.5" }),
    path({
      "d": "M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309"
    }),
    path({ "d": "M8 14v.5" }),
    path({
      "d": "M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"
    })
  );
}, "Dog");

// src/icons/DollarSign.ts
import van502 from "vanjs-core";
var DollarSign = /* @__PURE__ */ __name((props = {}) => {
  const { line, path } = van502.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "12", x2: "12", y1: "2", y2: "22" }),
    path({ "d": "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" })
  );
}, "DollarSign");

// src/icons/Donut.ts
import van503 from "vanjs-core";
var Donut = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van503.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3"
    }),
    circle({ cx: "12", cy: "12", "r": "3" })
  );
}, "Donut");

// src/icons/DoorClosed.ts
import van504 from "vanjs-core";
var DoorClosed = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van504.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" }),
    path({ "d": "M2 20h20" }),
    path({ "d": "M14 12v.01" })
  );
}, "DoorClosed");

// src/icons/DoorOpen.ts
import van505 from "vanjs-core";
var DoorOpen = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van505.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M13 4h3a2 2 0 0 1 2 2v14" }),
    path({ "d": "M2 20h3" }),
    path({ "d": "M13 20h9" }),
    path({ "d": "M10 12v.01" }),
    path({
      "d": "M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z"
    })
  );
}, "DoorOpen");

// src/icons/Dot.ts
import van506 from "vanjs-core";
var Dot = /* @__PURE__ */ __name((props = {}) => {
  const { circle } = van506.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12.1", cy: "12.1", "r": "1" })
  );
}, "Dot");

// src/icons/Download.ts
import van507 from "vanjs-core";
var Download = /* @__PURE__ */ __name((props = {}) => {
  const { path, polyline, line } = van507.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
    polyline({ points: "7 10 12 15 17 10" }),
    line({ x1: "12", x2: "12", y1: "15", y2: "3" })
  );
}, "Download");

// src/icons/DraftingCompass.ts
import van508 from "vanjs-core";
var DraftingCompass = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van508.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m12.99 6.74 1.93 3.44" }),
    path({ "d": "M19.136 12a10 10 0 0 1-14.271 0" }),
    path({ "d": "m21 21-2.16-3.84" }),
    path({ "d": "m3 21 8.02-14.26" }),
    circle({ cx: "12", cy: "5", "r": "2" })
  );
}, "DraftingCompass");

// src/icons/Drama.ts
import van509 from "vanjs-core";
var Drama = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van509.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 11h.01" }),
    path({ "d": "M14 6h.01" }),
    path({ "d": "M18 6h.01" }),
    path({ "d": "M6.5 13.1h.01" }),
    path({ "d": "M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3" }),
    path({ "d": "M17.4 9.9c-.8.8-2 .8-2.8 0" }),
    path({
      "d": "M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7"
    }),
    path({ "d": "M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4" })
  );
}, "Drama");

// src/icons/Dribbble.ts
import van510 from "vanjs-core";
var Dribbble = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van510.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" }),
    path({ "d": "M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" }),
    path({ "d": "M8.56 2.75c4.37 6 6 9.42 8 17.72" })
  );
}, "Dribbble");

// src/icons/Drill.ts
import van511 from "vanjs-core";
var Drill = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van511.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z"
    }),
    path({
      "d": "M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8"
    }),
    path({ "d": "M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3" }),
    path({ "d": "M18 6h4" }),
    path({ "d": "m5 10-2 8" }),
    path({ "d": "m7 18 2-8" })
  );
}, "Drill");

// src/icons/DropletOff.ts
import van512 from "vanjs-core";
var DropletOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van512.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M18.715 13.186C18.29 11.858 17.384 10.607 16 9.5c-2-1.6-3.5-4-4-6.5a10.7 10.7 0 0 1-.884 2.586"
    }),
    path({ "d": "m2 2 20 20" }),
    path({
      "d": "M8.795 8.797A11 11 0 0 1 8 9.5C6 11.1 5 13 5 15a7 7 0 0 0 13.222 3.208"
    })
  );
}, "DropletOff");

// src/icons/Droplet.ts
import van513 from "vanjs-core";
var Droplet = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van513.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"
    })
  );
}, "Droplet");

// src/icons/Droplets.ts
import van514 from "vanjs-core";
var Droplets = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van514.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"
    }),
    path({
      "d": "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"
    })
  );
}, "Droplets");

// src/icons/Drum.ts
import van515 from "vanjs-core";
var Drum = /* @__PURE__ */ __name((props = {}) => {
  const { path, ellipse } = van515.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m2 2 8 8" }),
    path({ "d": "m22 2-8 8" }),
    ellipse({ cx: "12", cy: "9", rx: "10", ry: "5" }),
    path({ "d": "M7 13.4v7.9" }),
    path({ "d": "M12 14v8" }),
    path({ "d": "M17 13.4v7.9" }),
    path({ "d": "M2 9v8a10 5 0 0 0 20 0V9" })
  );
}, "Drum");

// src/icons/Drumstick.ts
import van516 from "vanjs-core";
var Drumstick = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van516.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23"
    }),
    path({
      "d": "m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59"
    })
  );
}, "Drumstick");

// src/icons/Dumbbell.ts
import van517 from "vanjs-core";
var Dumbbell = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van517.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M14.4 14.4 9.6 9.6" }),
    path({
      "d": "M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"
    }),
    path({ "d": "m21.5 21.5-1.4-1.4" }),
    path({ "d": "M3.9 3.9 2.5 2.5" }),
    path({
      "d": "M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z"
    })
  );
}, "Dumbbell");

// src/icons/EarOff.ts
import van518 from "vanjs-core";
var EarOff = /* @__PURE__ */ __name((props = {}) => {
  const { path, line } = van518.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46" }),
    path({ "d": "M6 8.5c0-.75.13-1.47.36-2.14" }),
    path({ "d": "M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76" }),
    path({ "d": "M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18" }),
    line({ x1: "2", x2: "22", y1: "2", y2: "22" })
  );
}, "EarOff");

// src/icons/Ear.ts
import van519 from "vanjs-core";
var Ear = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van519.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0" }),
    path({ "d": "M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4" })
  );
}, "Ear");

// src/icons/EarthLock.ts
import van520 from "vanjs-core";
var EarthLock = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van520.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M7 3.34V5a3 3 0 0 0 3 3" }),
    path({
      "d": "M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"
    }),
    path({ "d": "M21.54 15H17a2 2 0 0 0-2 2v4.54" }),
    path({ "d": "M12 2a10 10 0 1 0 9.54 13" }),
    path({ "d": "M20 6V4a2 2 0 1 0-4 0v2" }),
    rect({ width: "8", height: "5", "x": "14", "y": "6", rx: "1" })
  );
}, "EarthLock");

// src/icons/Earth.ts
import van521 from "vanjs-core";
var Earth = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van521.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21.54 15H17a2 2 0 0 0-2 2v4.54" }),
    path({
      "d": "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"
    }),
    path({
      "d": "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"
    }),
    circle({ cx: "12", cy: "12", "r": "10" })
  );
}, "Earth");

// src/icons/Eclipse.ts
import van522 from "vanjs-core";
var Eclipse = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van522.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "M12 2a7 7 0 1 0 10 10" })
  );
}, "Eclipse");

// src/icons/EggFried.ts
import van523 from "vanjs-core";
var EggFried = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van523.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "11.5", cy: "12.5", "r": "3.5" }),
    path({
      "d": "M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z"
    })
  );
}, "EggFried");

// src/icons/EggOff.ts
import van524 from "vanjs-core";
var EggOff = /* @__PURE__ */ __name((props = {}) => {
  const { path, line } = van524.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625"
    }),
    path({
      "d": "M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297"
    }),
    line({ x1: "2", x2: "22", y1: "2", y2: "22" })
  );
}, "EggOff");

// src/icons/Egg.ts
import van525 from "vanjs-core";
var Egg = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van525.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z"
    })
  );
}, "Egg");

// src/icons/EllipsisVertical.ts
import van526 from "vanjs-core";
var EllipsisVertical = /* @__PURE__ */ __name((props = {}) => {
  const { circle } = van526.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "1" }),
    circle({ cx: "12", cy: "5", "r": "1" }),
    circle({ cx: "12", cy: "19", "r": "1" })
  );
}, "EllipsisVertical");

// src/icons/Ellipsis.ts
import van527 from "vanjs-core";
var Ellipsis = /* @__PURE__ */ __name((props = {}) => {
  const { circle } = van527.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "1" }),
    circle({ cx: "19", cy: "12", "r": "1" }),
    circle({ cx: "5", cy: "12", "r": "1" })
  );
}, "Ellipsis");

// src/icons/EqualApproximately.ts
import van528 from "vanjs-core";
var EqualApproximately = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van528.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0" }),
    path({ "d": "M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0" })
  );
}, "EqualApproximately");

// src/icons/EqualNot.ts
import van529 from "vanjs-core";
var EqualNot = /* @__PURE__ */ __name((props = {}) => {
  const { line } = van529.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "5", x2: "19", y1: "9", y2: "9" }),
    line({ x1: "5", x2: "19", y1: "15", y2: "15" }),
    line({ x1: "19", x2: "5", y1: "5", y2: "19" })
  );
}, "EqualNot");

// src/icons/Equal.ts
import van530 from "vanjs-core";
var Equal = /* @__PURE__ */ __name((props = {}) => {
  const { line } = van530.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "5", x2: "19", y1: "9", y2: "9" }),
    line({ x1: "5", x2: "19", y1: "15", y2: "15" })
  );
}, "Equal");

// src/icons/Eraser.ts
import van531 from "vanjs-core";
var Eraser = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van531.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"
    }),
    path({ "d": "M22 21H7" }),
    path({ "d": "m5 11 9 9" })
  );
}, "Eraser");

// src/icons/EthernetPort.ts
import van532 from "vanjs-core";
var EthernetPort = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van532.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3z"
    }),
    path({ "d": "M6 8v1" }),
    path({ "d": "M10 8v1" }),
    path({ "d": "M14 8v1" }),
    path({ "d": "M18 8v1" })
  );
}, "EthernetPort");

// src/icons/Euro.ts
import van533 from "vanjs-core";
var Euro = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van533.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 10h12" }),
    path({ "d": "M4 14h9" }),
    path({
      "d": "M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"
    })
  );
}, "Euro");

// src/icons/Expand.ts
import van534 from "vanjs-core";
var Expand = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van534.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m15 15 6 6" }),
    path({ "d": "m15 9 6-6" }),
    path({ "d": "M21 16.2V21h-4.8" }),
    path({ "d": "M21 7.8V3h-4.8" }),
    path({ "d": "M3 16.2V21h4.8" }),
    path({ "d": "m3 21 6-6" }),
    path({ "d": "M3 7.8V3h4.8" }),
    path({ "d": "M9 9 3 3" })
  );
}, "Expand");

// src/icons/ExternalLink.ts
import van535 from "vanjs-core";
var ExternalLink = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van535.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 3h6v6" }),
    path({ "d": "M10 14 21 3" }),
    path({ "d": "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" })
  );
}, "ExternalLink");

// src/icons/EyeClosed.ts
import van536 from "vanjs-core";
var EyeClosed = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van536.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m15 18-.722-3.25" }),
    path({ "d": "M2 8a10.645 10.645 0 0 0 20 0" }),
    path({ "d": "m20 15-1.726-2.05" }),
    path({ "d": "m4 15 1.726-2.05" }),
    path({ "d": "m9 18 .722-3.25" })
  );
}, "EyeClosed");

// src/icons/EyeOff.ts
import van537 from "vanjs-core";
var EyeOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van537.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"
    }),
    path({ "d": "M14.084 14.158a3 3 0 0 1-4.242-4.242" }),
    path({
      "d": "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"
    }),
    path({ "d": "m2 2 20 20" })
  );
}, "EyeOff");

// src/icons/Eye.ts
import van538 from "vanjs-core";
var Eye = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van538.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
    }),
    circle({ cx: "12", cy: "12", "r": "3" })
  );
}, "Eye");

// src/icons/Facebook.ts
import van539 from "vanjs-core";
var Facebook = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van539.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
    })
  );
}, "Facebook");

// src/icons/Factory.ts
import van540 from "vanjs-core";
var Factory = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van540.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
    }),
    path({ "d": "M17 18h1" }),
    path({ "d": "M12 18h1" }),
    path({ "d": "M7 18h1" })
  );
}, "Factory");

// src/icons/Fan.ts
import van541 from "vanjs-core";
var Fan = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van541.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"
    }),
    path({ "d": "M12 12v.01" })
  );
}, "Fan");

// src/icons/FastForward.ts
import van542 from "vanjs-core";
var FastForward = /* @__PURE__ */ __name((props = {}) => {
  const { polygon } = van542.tags(svgNamespace);
  return LucideIcon(
    props,
    polygon({ points: "13 19 22 12 13 5 13 19" }),
    polygon({ points: "2 19 11 12 2 5 2 19" })
  );
}, "FastForward");

// src/icons/Feather.ts
import van543 from "vanjs-core";
var Feather = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van543.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"
    }),
    path({ "d": "M16 8 2 22" }),
    path({ "d": "M17.5 15H9" })
  );
}, "Feather");

// src/icons/Fence.ts
import van544 from "vanjs-core";
var Fence = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van544.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" }),
    path({ "d": "M6 8h4" }),
    path({ "d": "M6 18h4" }),
    path({ "d": "m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" }),
    path({ "d": "M14 8h4" }),
    path({ "d": "M14 18h4" }),
    path({ "d": "m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" })
  );
}, "Fence");

// src/icons/FerrisWheel.ts
import van545 from "vanjs-core";
var FerrisWheel = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van545.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "2" }),
    path({ "d": "M12 2v4" }),
    path({ "d": "m6.8 15-3.5 2" }),
    path({ "d": "m20.7 7-3.5 2" }),
    path({ "d": "M6.8 9 3.3 7" }),
    path({ "d": "m20.7 17-3.5-2" }),
    path({ "d": "m9 22 3-8 3 8" }),
    path({ "d": "M8 22h8" }),
    path({ "d": "M18 18.7a9 9 0 1 0-12 0" })
  );
}, "FerrisWheel");

// src/icons/Figma.ts
import van546 from "vanjs-core";
var Figma = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van546.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" }),
    path({ "d": "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" }),
    path({ "d": "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" }),
    path({ "d": "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" }),
    path({ "d": "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" })
  );
}, "Figma");

// src/icons/FileArchive.ts
import van547 from "vanjs-core";
var FileArchive = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van547.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 12v-1" }),
    path({ "d": "M10 18v-2" }),
    path({ "d": "M10 7V6" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({
      "d": "M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01"
    }),
    circle({ cx: "10", cy: "20", "r": "2" })
  );
}, "FileArchive");

// src/icons/FileAudio2.ts
import van548 from "vanjs-core";
var FileAudio2 = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van548.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    circle({ cx: "3", cy: "17", "r": "1" }),
    path({ "d": "M2 17v-3a4 4 0 0 1 8 0v3" }),
    circle({ cx: "9", cy: "17", "r": "1" })
  );
}, "FileAudio2");

// src/icons/FileAudio.ts
import van549 from "vanjs-core";
var FileAudio = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van549.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({
      "d": "M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0"
    })
  );
}, "FileAudio");

// src/icons/FileAxis3d.ts
import van550 from "vanjs-core";
var FileAxis3d = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van550.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({ "d": "m8 18 4-4" }),
    path({ "d": "M8 10v8h8" })
  );
}, "FileAxis3d");

// src/icons/FileBadge2.ts
import van551 from "vanjs-core";
var FileBadge2 = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van551.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
    circle({ cx: "12", cy: "10", "r": "3" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({ "d": "m14 12.5 1 5.5-3-1-3 1 1-5.5" })
  );
}, "FileBadge2");

// src/icons/FileBadge.ts
import van552 from "vanjs-core";
var FileBadge = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van552.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({ "d": "M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" }),
    path({ "d": "M7 16.5 8 22l-3-1-3 1 1-5.5" })
  );
}, "FileBadge");

// src/icons/FileBox.ts
import van553 from "vanjs-core";
var FileBox = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van553.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M14.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({
      "d": "M3 13.1a2 2 0 0 0-1 1.76v3.24a2 2 0 0 0 .97 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01Z"
    }),
    path({ "d": "M7 17v5" }),
    path({ "d": "M11.7 14.2 7 17l-4.7-2.8" })
  );
}, "FileBox");

// src/icons/FileChartColumnIncreasing.ts
import van554 from "vanjs-core";
var FileChartColumnIncreasing = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van554.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({ "d": "M8 18v-2" }),
    path({ "d": "M12 18v-4" }),
    path({ "d": "M16 18v-6" })
  );
}, "FileChartColumnIncreasing");

// src/icons/FileChartColumn.ts
import van555 from "vanjs-core";
var FileChartColumn = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van555.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({ "d": "M8 18v-1" }),
    path({ "d": "M12 18v-6" }),
    path({ "d": "M16 18v-3" })
  );
}, "FileChartColumn");

// src/icons/FileChartLine.ts
import van556 from "vanjs-core";
var FileChartLine = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van556.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({ "d": "m16 13-3.5 3.5-2-2L8 17" })
  );
}, "FileChartLine");

// src/icons/FileChartPie.ts
import van557 from "vanjs-core";
var FileChartPie = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van557.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({ "d": "M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.5" }),
    path({ "d": "M4.017 11.512a6 6 0 1 0 8.466 8.475" }),
    path({
      "d": "M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z"
    })
  );
}, "FileChartPie");

// src/icons/FileCheck2.ts
import van558 from "vanjs-core";
var FileCheck2 = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van558.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({ "d": "m3 15 2 2 4-4" })
  );
}, "FileCheck2");

// src/icons/FileCheck.ts
import van559 from "vanjs-core";
var FileCheck = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van559.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({ "d": "m9 15 2 2 4-4" })
  );
}, "FileCheck");

// src/icons/FileClock.ts
import van560 from "vanjs-core";
var FileClock = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van560.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    circle({ cx: "8", cy: "16", "r": "6" }),
    path({ "d": "M9.5 17.5 8 16.25V14" })
  );
}, "FileClock");

// src/icons/FileCode2.ts
import van561 from "vanjs-core";
var FileCode2 = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van561.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({ "d": "m5 12-3 3 3 3" }),
    path({ "d": "m9 18 3-3-3-3" })
  );
}, "FileCode2");

// src/icons/FileCode.ts
import van562 from "vanjs-core";
var FileCode = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van562.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 12.5 8 15l2 2.5" }),
    path({ "d": "m14 12.5 2 2.5-2 2.5" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({ "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" })
  );
}, "FileCode");

// src/icons/FileCog.ts
import van563 from "vanjs-core";
var FileCog = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van563.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({ "d": "m3.2 12.9-.9-.4" }),
    path({ "d": "m3.2 15.1-.9.4" }),
    path({
      "d": "M4.677 21.5a2 2 0 0 0 1.313.5H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2.5"
    }),
    path({ "d": "m4.9 11.2-.4-.9" }),
    path({ "d": "m4.9 16.8-.4.9" }),
    path({ "d": "m7.5 10.3-.4.9" }),
    path({ "d": "m7.5 17.7-.4-.9" }),
    path({ "d": "m9.7 12.5-.9.4" }),
    path({ "d": "m9.7 15.5-.9-.4" }),
    circle({ cx: "6", cy: "14", "r": "3" })
  );
}, "FileCog");

// src/icons/FileDiff.ts
import van564 from "vanjs-core";
var FileDiff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van564.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
    path({ "d": "M9 10h6" }),
    path({ "d": "M12 13V7" }),
    path({ "d": "M9 17h6" })
  );
}, "FileDiff");

// src/icons/FileDigit.ts
import van565 from "vanjs-core";
var FileDigit = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van565.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    rect({ width: "4", height: "6", "x": "2", "y": "12", rx: "2" }),
    path({ "d": "M10 12h2v6" }),
    path({ "d": "M10 18h4" })
  );
}, "FileDigit");

// src/icons/FileDown.ts
import van566 from "vanjs-core";
var FileDown = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van566.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({ "d": "M12 18v-6" }),
    path({ "d": "m9 15 3 3 3-3" })
  );
}, "FileDown");

// src/icons/FileHeart.ts
import van567 from "vanjs-core";
var FileHeart = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van567.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({
      "d": "M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"
    })
  );
}, "FileHeart");

// src/icons/FileImage.ts
import van568 from "vanjs-core";
var FileImage = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van568.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    circle({ cx: "10", cy: "12", "r": "2" }),
    path({ "d": "m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22" })
  );
}, "FileImage");

// src/icons/FileInput.ts
import van569 from "vanjs-core";
var FileInput = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van569.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({ "d": "M2 15h10" }),
    path({ "d": "m9 18 3-3-3-3" })
  );
}, "FileInput");

// src/icons/FileJson2.ts
import van570 from "vanjs-core";
var FileJson2 = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van570.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({
      "d": "M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"
    }),
    path({
      "d": "M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"
    })
  );
}, "FileJson2");

// src/icons/FileJson.ts
import van571 from "vanjs-core";
var FileJson = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van571.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({
      "d": "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"
    }),
    path({
      "d": "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"
    })
  );
}, "FileJson");

// src/icons/FileKey2.ts
import van572 from "vanjs-core";
var FileKey2 = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van572.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    circle({ cx: "4", cy: "16", "r": "2" }),
    path({ "d": "m10 10-4.5 4.5" }),
    path({ "d": "m9 11 1 1" })
  );
}, "FileKey2");

// src/icons/FileKey.ts
import van573 from "vanjs-core";
var FileKey = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van573.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
    circle({ cx: "10", cy: "16", "r": "2" }),
    path({ "d": "m16 10-4.5 4.5" }),
    path({ "d": "m15 11 1 1" })
  );
}, "FileKey");

// src/icons/FileLock2.ts
import van574 from "vanjs-core";
var FileLock2 = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van574.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    rect({ width: "8", height: "5", "x": "2", "y": "13", rx: "1" }),
    path({ "d": "M8 13v-2a2 2 0 1 0-4 0v2" })
  );
}, "FileLock2");

// src/icons/FileLock.ts
import van575 from "vanjs-core";
var FileLock = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van575.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
    rect({ width: "8", height: "6", "x": "8", "y": "12", rx: "1" }),
    path({ "d": "M10 12v-2a2 2 0 1 1 4 0v2" })
  );
}, "FileLock");

// src/icons/FileMinus2.ts
import van576 from "vanjs-core";
var FileMinus2 = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van576.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({ "d": "M3 15h6" })
  );
}, "FileMinus2");

// src/icons/FileMinus.ts
import van577 from "vanjs-core";
var FileMinus = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van577.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({ "d": "M9 15h6" })
  );
}, "FileMinus");

// src/icons/FileMusic.ts
import van578 from "vanjs-core";
var FileMusic = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van578.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v8.4" }),
    path({ "d": "M8 18v-7.7L16 9v7" }),
    circle({ cx: "14", cy: "16", "r": "2" }),
    circle({ cx: "6", cy: "18", "r": "2" })
  );
}, "FileMusic");

// src/icons/FileOutput.ts
import van579 from "vanjs-core";
var FileOutput = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van579.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({ "d": "M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2" }),
    path({ "d": "M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6" }),
    path({ "d": "m5 11-3 3" }),
    path({ "d": "m5 17-3-3h10" })
  );
}, "FileOutput");

// src/icons/FilePenLine.ts
import van580 from "vanjs-core";
var FilePenLine = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van580.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"
    }),
    path({
      "d": "M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
    }),
    path({ "d": "M8 18h1" })
  );
}, "FilePenLine");

// src/icons/FilePen.ts
import van581 from "vanjs-core";
var FilePen = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van581.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({
      "d": "M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
    })
  );
}, "FilePen");

// src/icons/FilePlus2.ts
import van582 from "vanjs-core";
var FilePlus2 = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van582.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({ "d": "M3 15h6" }),
    path({ "d": "M6 12v6" })
  );
}, "FilePlus2");

// src/icons/FilePlus.ts
import van583 from "vanjs-core";
var FilePlus = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van583.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({ "d": "M9 15h6" }),
    path({ "d": "M12 18v-6" })
  );
}, "FilePlus");

// src/icons/FileQuestion.ts
import van584 from "vanjs-core";
var FileQuestion = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van584.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 17h.01" }),
    path({ "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" }),
    path({ "d": "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" })
  );
}, "FileQuestion");

// src/icons/FileScan.ts
import van585 from "vanjs-core";
var FileScan = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van585.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({ "d": "M16 14a2 2 0 0 0-2 2" }),
    path({ "d": "M20 14a2 2 0 0 1 2 2" }),
    path({ "d": "M20 22a2 2 0 0 0 2-2" }),
    path({ "d": "M16 22a2 2 0 0 1-2-2" })
  );
}, "FileScan");

// src/icons/FileSearch2.ts
import van586 from "vanjs-core";
var FileSearch2 = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van586.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    circle({ cx: "11.5", cy: "14.5", "r": "2.5" }),
    path({ "d": "M13.3 16.3 15 18" })
  );
}, "FileSearch2");

// src/icons/FileSearch.ts
import van587 from "vanjs-core";
var FileSearch = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van587.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({
      "d": "M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"
    }),
    path({ "d": "m9 18-1.5-1.5" }),
    circle({ cx: "5", cy: "14", "r": "3" })
  );
}, "FileSearch");

// src/icons/FileSliders.ts
import van588 from "vanjs-core";
var FileSliders = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van588.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({ "d": "M8 12h8" }),
    path({ "d": "M10 11v2" }),
    path({ "d": "M8 17h8" }),
    path({ "d": "M14 16v2" })
  );
}, "FileSliders");

// src/icons/FileSpreadsheet.ts
import van589 from "vanjs-core";
var FileSpreadsheet = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van589.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({ "d": "M8 13h2" }),
    path({ "d": "M14 13h2" }),
    path({ "d": "M8 17h2" }),
    path({ "d": "M14 17h2" })
  );
}, "FileSpreadsheet");

// src/icons/FileStack.ts
import van590 from "vanjs-core";
var FileStack = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van590.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21 7h-3a2 2 0 0 1-2-2V2" }),
    path({
      "d": "M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z"
    }),
    path({ "d": "M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15" }),
    path({ "d": "M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11" })
  );
}, "FileStack");

// src/icons/FileSymlink.ts
import van591 from "vanjs-core";
var FileSymlink = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van591.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m10 18 3-3-3-3" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({
      "d": "M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"
    })
  );
}, "FileSymlink");

// src/icons/FileTerminal.ts
import van592 from "vanjs-core";
var FileTerminal = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van592.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({ "d": "m8 16 2-2-2-2" }),
    path({ "d": "M12 18h4" })
  );
}, "FileTerminal");

// src/icons/FileText.ts
import van593 from "vanjs-core";
var FileText = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van593.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({ "d": "M10 9H8" }),
    path({ "d": "M16 13H8" }),
    path({ "d": "M16 17H8" })
  );
}, "FileText");

// src/icons/FileType2.ts
import van594 from "vanjs-core";
var FileType2 = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van594.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({ "d": "M2 13v-1h6v1" }),
    path({ "d": "M5 12v6" }),
    path({ "d": "M4 18h2" })
  );
}, "FileType2");

// src/icons/FileType.ts
import van595 from "vanjs-core";
var FileType = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van595.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({ "d": "M9 13v-1h6v1" }),
    path({ "d": "M12 12v6" }),
    path({ "d": "M11 18h2" })
  );
}, "FileType");

// src/icons/FileUp.ts
import van596 from "vanjs-core";
var FileUp = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van596.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({ "d": "M12 12v6" }),
    path({ "d": "m15 15-3-3-3 3" })
  );
}, "FileUp");

// src/icons/FileUser.ts
import van597 from "vanjs-core";
var FileUser = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van597.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({ "d": "M15 18a3 3 0 1 0-6 0" }),
    path({ "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" }),
    circle({ cx: "12", cy: "13", "r": "2" })
  );
}, "FileUser");

// src/icons/FileVideo2.ts
import van598 from "vanjs-core";
var FileVideo2 = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van598.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    rect({ width: "8", height: "6", "x": "2", "y": "12", rx: "1" }),
    path({ "d": "m10 15.5 4 2.5v-6l-4 2.5" })
  );
}, "FileVideo2");

// src/icons/FileVideo.ts
import van599 from "vanjs-core";
var FileVideo = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van599.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({ "d": "m10 11 5 3-5 3v-6Z" })
  );
}, "FileVideo");

// src/icons/FileVolume2.ts
import van600 from "vanjs-core";
var FileVolume2 = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van600.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({ "d": "M8 15h.01" }),
    path({ "d": "M11.5 13.5a2.5 2.5 0 0 1 0 3" }),
    path({ "d": "M15 12a5 5 0 0 1 0 6" })
  );
}, "FileVolume2");

// src/icons/FileVolume.ts
import van601 from "vanjs-core";
var FileVolume = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van601.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M11 11a5 5 0 0 1 0 6" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({
      "d": "M4 6.765V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-.93-.23"
    }),
    path({
      "d": "M7 10.51a.5.5 0 0 0-.826-.38l-1.893 1.628A1 1 0 0 1 3.63 12H2.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.129a1 1 0 0 1 .652.242l1.893 1.63a.5.5 0 0 0 .826-.38z"
    })
  );
}, "FileVolume");

// src/icons/FileWarning.ts
import van602 from "vanjs-core";
var FileWarning = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van602.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
    path({ "d": "M12 9v4" }),
    path({ "d": "M12 17h.01" })
  );
}, "FileWarning");

// src/icons/FileX2.ts
import van603 from "vanjs-core";
var FileX2 = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van603.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({ "d": "m8 12.5-5 5" }),
    path({ "d": "m3 12.5 5 5" })
  );
}, "FileX2");

// src/icons/FileX.ts
import van604 from "vanjs-core";
var FileX = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van604.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" }),
    path({ "d": "m14.5 12.5-5 5" }),
    path({ "d": "m9.5 12.5 5 5" })
  );
}, "FileX");

// src/icons/File.ts
import van605 from "vanjs-core";
var File = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van605.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
    path({ "d": "M14 2v4a2 2 0 0 0 2 2h4" })
  );
}, "File");

// src/icons/Files.ts
import van606 from "vanjs-core";
var Files = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van606.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M20 7h-3a2 2 0 0 1-2-2V2" }),
    path({
      "d": "M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z"
    }),
    path({ "d": "M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8" })
  );
}, "Files");

// src/icons/Film.ts
import van607 from "vanjs-core";
var Film = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van607.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M7 3v18" }),
    path({ "d": "M3 7.5h4" }),
    path({ "d": "M3 12h18" }),
    path({ "d": "M3 16.5h4" }),
    path({ "d": "M17 3v18" }),
    path({ "d": "M17 7.5h4" }),
    path({ "d": "M17 16.5h4" })
  );
}, "Film");

// src/icons/FilterX.ts
import van608 from "vanjs-core";
var FilterX = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van608.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055" }),
    path({ "d": "m22 3-5 5" }),
    path({ "d": "m17 3 5 5" })
  );
}, "FilterX");

// src/icons/Filter.ts
import van609 from "vanjs-core";
var Filter = /* @__PURE__ */ __name((props = {}) => {
  const { polygon } = van609.tags(svgNamespace);
  return LucideIcon(
    props,
    polygon({ points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" })
  );
}, "Filter");

// src/icons/Fingerprint.ts
import van610 from "vanjs-core";
var Fingerprint = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van610.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" }),
    path({ "d": "M14 13.12c0 2.38 0 6.38-1 8.88" }),
    path({ "d": "M17.29 21.02c.12-.6.43-2.3.5-3.02" }),
    path({ "d": "M2 12a10 10 0 0 1 18-6" }),
    path({ "d": "M2 16h.01" }),
    path({ "d": "M21.8 16c.2-2 .131-5.354 0-6" }),
    path({ "d": "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" }),
    path({ "d": "M8.65 22c.21-.66.45-1.32.57-2" }),
    path({ "d": "M9 6.8a6 6 0 0 1 9 5.2v2" })
  );
}, "Fingerprint");

// src/icons/FireExtinguisher.ts
import van611 from "vanjs-core";
var FireExtinguisher = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van611.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5" }),
    path({ "d": "M9 18h8" }),
    path({ "d": "M18 3h-3" }),
    path({ "d": "M11 3a6 6 0 0 0-6 6v11" }),
    path({ "d": "M5 13h4" }),
    path({ "d": "M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z" })
  );
}, "FireExtinguisher");

// src/icons/FishOff.ts
import van612 from "vanjs-core";
var FishOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van612.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058"
    }),
    path({
      "d": "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618"
    }),
    path({
      "d": "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20"
    })
  );
}, "FishOff");

// src/icons/FishSymbol.ts
import van613 from "vanjs-core";
var FishSymbol = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van613.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 16s9-15 20-4C11 23 2 8 2 8" })
  );
}, "FishSymbol");

// src/icons/Fish.ts
import van614 from "vanjs-core";
var Fish = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van614.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"
    }),
    path({ "d": "M18 12v.5" }),
    path({ "d": "M16 17.93a9.77 9.77 0 0 1 0-11.86" }),
    path({
      "d": "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"
    }),
    path({
      "d": "M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"
    }),
    path({
      "d": "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"
    })
  );
}, "Fish");

// src/icons/FlagOff.ts
import van615 from "vanjs-core";
var FlagOff = /* @__PURE__ */ __name((props = {}) => {
  const { path, line } = van615.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 2c3 0 5 2 8 2s4-1 4-1v11" }),
    path({ "d": "M4 22V4" }),
    path({ "d": "M4 15s1-1 4-1 5 2 8 2" }),
    line({ x1: "2", x2: "22", y1: "2", y2: "22" })
  );
}, "FlagOff");

// src/icons/FlagTriangleLeft.ts
import van616 from "vanjs-core";
var FlagTriangleLeft = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van616.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M17 22V2L7 7l10 5" })
  );
}, "FlagTriangleLeft");

// src/icons/FlagTriangleRight.ts
import van617 from "vanjs-core";
var FlagTriangleRight = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van617.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M7 22V2l10 5-10 5" })
  );
}, "FlagTriangleRight");

// src/icons/Flag.ts
import van618 from "vanjs-core";
var Flag = /* @__PURE__ */ __name((props = {}) => {
  const { path, line } = van618.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" }),
    line({ x1: "4", x2: "4", y1: "22", y2: "15" })
  );
}, "Flag");

// src/icons/FlameKindling.ts
import van619 from "vanjs-core";
var FlameKindling = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van619.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z"
    }),
    path({ "d": "m5 22 14-4" }),
    path({ "d": "m5 18 14 4" })
  );
}, "FlameKindling");

// src/icons/Flame.ts
import van620 from "vanjs-core";
var Flame = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van620.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
    })
  );
}, "Flame");

// src/icons/FlashlightOff.ts
import van621 from "vanjs-core";
var FlashlightOff = /* @__PURE__ */ __name((props = {}) => {
  const { path, line } = van621.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4" }),
    path({ "d": "M7 2h11v4c0 2-2 2-2 4v1" }),
    line({ x1: "11", x2: "18", y1: "6", y2: "6" }),
    line({ x1: "2", x2: "22", y1: "2", y2: "22" })
  );
}, "FlashlightOff");

// src/icons/Flashlight.ts
import van622 from "vanjs-core";
var Flashlight = /* @__PURE__ */ __name((props = {}) => {
  const { path, line } = van622.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z"
    }),
    line({ x1: "6", x2: "18", y1: "6", y2: "6" }),
    line({ x1: "12", x2: "12", y1: "12", y2: "12" })
  );
}, "Flashlight");

// src/icons/FlaskConicalOff.ts
import van623 from "vanjs-core";
var FlaskConicalOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van623.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 2v2.343" }),
    path({ "d": "M14 2v6.343" }),
    path({ "d": "m2 2 20 20" }),
    path({ "d": "M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563" }),
    path({ "d": "M6.453 15H15" }),
    path({ "d": "M8.5 2h7" })
  );
}, "FlaskConicalOff");

// src/icons/FlaskConical.ts
import van624 from "vanjs-core";
var FlaskConical = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van624.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"
    }),
    path({ "d": "M6.453 15h11.094" }),
    path({ "d": "M8.5 2h7" })
  );
}, "FlaskConical");

// src/icons/FlaskRound.ts
import van625 from "vanjs-core";
var FlaskRound = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van625.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 2v6.292a7 7 0 1 0 4 0V2" }),
    path({ "d": "M5 15h14" }),
    path({ "d": "M8.5 2h7" })
  );
}, "FlaskRound");

// src/icons/FlipHorizontal2.ts
import van626 from "vanjs-core";
var FlipHorizontal2 = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van626.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m3 7 5 5-5 5V7" }),
    path({ "d": "m21 7-5 5 5 5V7" }),
    path({ "d": "M12 20v2" }),
    path({ "d": "M12 14v2" }),
    path({ "d": "M12 8v2" }),
    path({ "d": "M12 2v2" })
  );
}, "FlipHorizontal2");

// src/icons/FlipHorizontal.ts
import van627 from "vanjs-core";
var FlipHorizontal = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van627.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3" }),
    path({ "d": "M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3" }),
    path({ "d": "M12 20v2" }),
    path({ "d": "M12 14v2" }),
    path({ "d": "M12 8v2" }),
    path({ "d": "M12 2v2" })
  );
}, "FlipHorizontal");

// src/icons/FlipVertical2.ts
import van628 from "vanjs-core";
var FlipVertical2 = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van628.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m17 3-5 5-5-5h10" }),
    path({ "d": "m17 21-5-5-5 5h10" }),
    path({ "d": "M4 12H2" }),
    path({ "d": "M10 12H8" }),
    path({ "d": "M16 12h-2" }),
    path({ "d": "M22 12h-2" })
  );
}, "FlipVertical2");

// src/icons/FlipVertical.ts
import van629 from "vanjs-core";
var FlipVertical = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van629.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" }),
    path({ "d": "M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" }),
    path({ "d": "M4 12H2" }),
    path({ "d": "M10 12H8" }),
    path({ "d": "M16 12h-2" }),
    path({ "d": "M22 12h-2" })
  );
}, "FlipVertical");

// src/icons/Flower2.ts
import van630 from "vanjs-core";
var Flower2 = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van630.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"
    }),
    circle({ cx: "12", cy: "8", "r": "2" }),
    path({ "d": "M12 10v12" }),
    path({ "d": "M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z" }),
    path({ "d": "M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z" })
  );
}, "Flower2");

// src/icons/Flower.ts
import van631 from "vanjs-core";
var Flower = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van631.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "3" }),
    path({
      "d": "M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"
    }),
    path({ "d": "M12 7.5V9" }),
    path({ "d": "M7.5 12H9" }),
    path({ "d": "M16.5 12H15" }),
    path({ "d": "M12 16.5V15" }),
    path({ "d": "m8 8 1.88 1.88" }),
    path({ "d": "M14.12 9.88 16 8" }),
    path({ "d": "m8 16 1.88-1.88" }),
    path({ "d": "M14.12 14.12 16 16" })
  );
}, "Flower");

// src/icons/Focus.ts
import van632 from "vanjs-core";
var Focus = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van632.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "3" }),
    path({ "d": "M3 7V5a2 2 0 0 1 2-2h2" }),
    path({ "d": "M17 3h2a2 2 0 0 1 2 2v2" }),
    path({ "d": "M21 17v2a2 2 0 0 1-2 2h-2" }),
    path({ "d": "M7 21H5a2 2 0 0 1-2-2v-2" })
  );
}, "Focus");

// src/icons/FoldHorizontal.ts
import van633 from "vanjs-core";
var FoldHorizontal = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van633.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 12h6" }),
    path({ "d": "M22 12h-6" }),
    path({ "d": "M12 2v2" }),
    path({ "d": "M12 8v2" }),
    path({ "d": "M12 14v2" }),
    path({ "d": "M12 20v2" }),
    path({ "d": "m19 9-3 3 3 3" }),
    path({ "d": "m5 15 3-3-3-3" })
  );
}, "FoldHorizontal");

// src/icons/FoldVertical.ts
import van634 from "vanjs-core";
var FoldVertical = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van634.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 22v-6" }),
    path({ "d": "M12 8V2" }),
    path({ "d": "M4 12H2" }),
    path({ "d": "M10 12H8" }),
    path({ "d": "M16 12h-2" }),
    path({ "d": "M22 12h-2" }),
    path({ "d": "m15 19-3-3-3 3" }),
    path({ "d": "m15 5-3 3-3-3" })
  );
}, "FoldVertical");

// src/icons/FolderArchive.ts
import van635 from "vanjs-core";
var FolderArchive = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van635.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "15", cy: "19", "r": "2" }),
    path({
      "d": "M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1"
    }),
    path({ "d": "M15 11v-1" }),
    path({ "d": "M15 17v-2" })
  );
}, "FolderArchive");

// src/icons/FolderCheck.ts
import van636 from "vanjs-core";
var FolderCheck = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van636.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
    }),
    path({ "d": "m9 13 2 2 4-4" })
  );
}, "FolderCheck");

// src/icons/FolderClock.ts
import van637 from "vanjs-core";
var FolderClock = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van637.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "16", cy: "16", "r": "6" }),
    path({
      "d": "M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2"
    }),
    path({ "d": "M16 14v2l1 1" })
  );
}, "FolderClock");

// src/icons/FolderClosed.ts
import van638 from "vanjs-core";
var FolderClosed = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van638.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
    }),
    path({ "d": "M2 10h20" })
  );
}, "FolderClosed");

// src/icons/FolderCode.ts
import van639 from "vanjs-core";
var FolderCode = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van639.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 10.5 8 13l2 2.5" }),
    path({ "d": "m14 10.5 2 2.5-2 2.5" }),
    path({
      "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z"
    })
  );
}, "FolderCode");

// src/icons/FolderCog.ts
import van640 from "vanjs-core";
var FolderCog = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van640.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "18", cy: "18", "r": "3" }),
    path({
      "d": "M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3"
    }),
    path({ "d": "m21.7 19.4-.9-.3" }),
    path({ "d": "m15.2 16.9-.9-.3" }),
    path({ "d": "m16.6 21.7.3-.9" }),
    path({ "d": "m19.1 15.2.3-.9" }),
    path({ "d": "m19.6 21.7-.4-1" }),
    path({ "d": "m16.8 15.3-.4-1" }),
    path({ "d": "m14.3 19.6 1-.4" }),
    path({ "d": "m20.7 16.8 1-.4" })
  );
}, "FolderCog");

// src/icons/FolderDot.ts
import van641 from "vanjs-core";
var FolderDot = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van641.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
    }),
    circle({ cx: "12", cy: "13", "r": "1" })
  );
}, "FolderDot");

// src/icons/FolderDown.ts
import van642 from "vanjs-core";
var FolderDown = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van642.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
    }),
    path({ "d": "M12 10v6" }),
    path({ "d": "m15 13-3 3-3-3" })
  );
}, "FolderDown");

// src/icons/FolderGit2.ts
import van643 from "vanjs-core";
var FolderGit2 = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van643.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"
    }),
    circle({ cx: "13", cy: "12", "r": "2" }),
    path({ "d": "M18 19c-2.8 0-5-2.2-5-5v8" }),
    circle({ cx: "20", cy: "19", "r": "2" })
  );
}, "FolderGit2");

// src/icons/FolderGit.ts
import van644 from "vanjs-core";
var FolderGit = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van644.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "13", "r": "2" }),
    path({
      "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
    }),
    path({ "d": "M14 13h3" }),
    path({ "d": "M7 13h3" })
  );
}, "FolderGit");

// src/icons/FolderHeart.ts
import van645 from "vanjs-core";
var FolderHeart = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van645.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5"
    }),
    path({
      "d": "M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01c.95.95 1 2.53-.2 3.74L17.5 21Z"
    })
  );
}, "FolderHeart");

// src/icons/FolderInput.ts
import van646 from "vanjs-core";
var FolderInput = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van646.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1"
    }),
    path({ "d": "M2 13h10" }),
    path({ "d": "m9 16 3-3-3-3" })
  );
}, "FolderInput");

// src/icons/FolderKanban.ts
import van647 from "vanjs-core";
var FolderKanban = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van647.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
    }),
    path({ "d": "M8 10v4" }),
    path({ "d": "M12 10v2" }),
    path({ "d": "M16 10v6" })
  );
}, "FolderKanban");

// src/icons/FolderKey.ts
import van648 from "vanjs-core";
var FolderKey = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van648.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "16", cy: "20", "r": "2" }),
    path({
      "d": "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2"
    }),
    path({ "d": "m22 14-4.5 4.5" }),
    path({ "d": "m21 15 1 1" })
  );
}, "FolderKey");

// src/icons/FolderLock.ts
import van649 from "vanjs-core";
var FolderLock = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van649.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "8", height: "5", "x": "14", "y": "17", rx: "1" }),
    path({
      "d": "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5"
    }),
    path({ "d": "M20 17v-2a2 2 0 1 0-4 0v2" })
  );
}, "FolderLock");

// src/icons/FolderMinus.ts
import van650 from "vanjs-core";
var FolderMinus = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van650.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M9 13h6" }),
    path({
      "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
    })
  );
}, "FolderMinus");

// src/icons/FolderOpenDot.ts
import van651 from "vanjs-core";
var FolderOpenDot = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van651.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"
    }),
    circle({ cx: "14", cy: "15", "r": "1" })
  );
}, "FolderOpenDot");

// src/icons/FolderOpen.ts
import van652 from "vanjs-core";
var FolderOpen = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van652.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"
    })
  );
}, "FolderOpen");

// src/icons/FolderOutput.ts
import van653 from "vanjs-core";
var FolderOutput = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van653.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5"
    }),
    path({ "d": "M2 13h10" }),
    path({ "d": "m5 10-3 3 3 3" })
  );
}, "FolderOutput");

// src/icons/FolderPen.ts
import van654 from "vanjs-core";
var FolderPen = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van654.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5"
    }),
    path({
      "d": "M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
    })
  );
}, "FolderPen");

// src/icons/FolderPlus.ts
import van655 from "vanjs-core";
var FolderPlus = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van655.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 10v6" }),
    path({ "d": "M9 13h6" }),
    path({
      "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
    })
  );
}, "FolderPlus");

// src/icons/FolderRoot.ts
import van656 from "vanjs-core";
var FolderRoot = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van656.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
    }),
    circle({ cx: "12", cy: "13", "r": "2" }),
    path({ "d": "M12 15v5" })
  );
}, "FolderRoot");

// src/icons/FolderSearch2.ts
import van657 from "vanjs-core";
var FolderSearch2 = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van657.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "11.5", cy: "12.5", "r": "2.5" }),
    path({
      "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
    }),
    path({ "d": "M13.3 14.3 15 16" })
  );
}, "FolderSearch2");

// src/icons/FolderSearch.ts
import van658 from "vanjs-core";
var FolderSearch = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van658.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1"
    }),
    path({ "d": "m21 21-1.9-1.9" }),
    circle({ cx: "17", cy: "17", "r": "3" })
  );
}, "FolderSearch");

// src/icons/FolderSymlink.ts
import van659 from "vanjs-core";
var FolderSymlink = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van659.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"
    }),
    path({ "d": "m8 16 3-3-3-3" })
  );
}, "FolderSymlink");

// src/icons/FolderSync.ts
import van660 from "vanjs-core";
var FolderSync = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van660.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5"
    }),
    path({ "d": "M12 10v4h4" }),
    path({ "d": "m12 14 1.535-1.605a5 5 0 0 1 8 1.5" }),
    path({ "d": "M22 22v-4h-4" }),
    path({ "d": "m22 18-1.535 1.605a5 5 0 0 1-8-1.5" })
  );
}, "FolderSync");

// src/icons/FolderTree.ts
import van661 from "vanjs-core";
var FolderTree = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van661.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"
    }),
    path({
      "d": "M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"
    }),
    path({ "d": "M3 5a2 2 0 0 0 2 2h3" }),
    path({ "d": "M3 3v13a2 2 0 0 0 2 2h3" })
  );
}, "FolderTree");

// src/icons/FolderUp.ts
import van662 from "vanjs-core";
var FolderUp = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van662.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
    }),
    path({ "d": "M12 10v6" }),
    path({ "d": "m9 13 3-3 3 3" })
  );
}, "FolderUp");

// src/icons/FolderX.ts
import van663 from "vanjs-core";
var FolderX = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van663.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
    }),
    path({ "d": "m9.5 10.5 5 5" }),
    path({ "d": "m14.5 10.5-5 5" })
  );
}, "FolderX");

// src/icons/Folder.ts
import van664 from "vanjs-core";
var Folder = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van664.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
    })
  );
}, "Folder");

// src/icons/Folders.ts
import van665 from "vanjs-core";
var Folders = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van665.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z"
    }),
    path({ "d": "M2 8v11a2 2 0 0 0 2 2h14" })
  );
}, "Folders");

// src/icons/Footprints.ts
import van666 from "vanjs-core";
var Footprints = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van666.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"
    }),
    path({
      "d": "M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"
    }),
    path({ "d": "M16 17h4" }),
    path({ "d": "M4 13h4" })
  );
}, "Footprints");

// src/icons/Forklift.ts
import van667 from "vanjs-core";
var Forklift = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van667.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 12H5a2 2 0 0 0-2 2v5" }),
    circle({ cx: "13", cy: "19", "r": "2" }),
    circle({ cx: "5", cy: "19", "r": "2" }),
    path({ "d": "M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5" })
  );
}, "Forklift");

// src/icons/Forward.ts
import van668 from "vanjs-core";
var Forward = /* @__PURE__ */ __name((props = {}) => {
  const { polyline, path } = van668.tags(svgNamespace);
  return LucideIcon(
    props,
    polyline({ points: "15 17 20 12 15 7" }),
    path({ "d": "M4 18v-2a4 4 0 0 1 4-4h12" })
  );
}, "Forward");

// src/icons/Frame.ts
import van669 from "vanjs-core";
var Frame = /* @__PURE__ */ __name((props = {}) => {
  const { line } = van669.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "22", x2: "2", y1: "6", y2: "6" }),
    line({ x1: "22", x2: "2", y1: "18", y2: "18" }),
    line({ x1: "6", x2: "6", y1: "2", y2: "22" }),
    line({ x1: "18", x2: "18", y1: "2", y2: "22" })
  );
}, "Frame");

// src/icons/Framer.ts
import van670 from "vanjs-core";
var Framer = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van670.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7" })
  );
}, "Framer");

// src/icons/Frown.ts
import van671 from "vanjs-core";
var Frown = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path, line } = van671.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "M16 16s-1.5-2-4-2-4 2-4 2" }),
    line({ x1: "9", x2: "9.01", y1: "9", y2: "9" }),
    line({ x1: "15", x2: "15.01", y1: "9", y2: "9" })
  );
}, "Frown");

// src/icons/Fuel.ts
import van672 from "vanjs-core";
var Fuel = /* @__PURE__ */ __name((props = {}) => {
  const { line, path } = van672.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "3", x2: "15", y1: "22", y2: "22" }),
    line({ x1: "4", x2: "14", y1: "9", y2: "9" }),
    path({ "d": "M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" }),
    path({
      "d": "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"
    })
  );
}, "Fuel");

// src/icons/Fullscreen.ts
import van673 from "vanjs-core";
var Fullscreen = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van673.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 7V5a2 2 0 0 1 2-2h2" }),
    path({ "d": "M17 3h2a2 2 0 0 1 2 2v2" }),
    path({ "d": "M21 17v2a2 2 0 0 1-2 2h-2" }),
    path({ "d": "M7 21H5a2 2 0 0 1-2-2v-2" }),
    rect({ width: "10", height: "8", "x": "7", "y": "8", rx: "1" })
  );
}, "Fullscreen");

// src/icons/GalleryHorizontalEnd.ts
import van674 from "vanjs-core";
var GalleryHorizontalEnd = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van674.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 7v10" }),
    path({ "d": "M6 5v14" }),
    rect({ width: "12", height: "18", "x": "10", "y": "3", rx: "2" })
  );
}, "GalleryHorizontalEnd");

// src/icons/GalleryHorizontal.ts
import van675 from "vanjs-core";
var GalleryHorizontal = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van675.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 3v18" }),
    rect({ width: "12", height: "18", "x": "6", "y": "3", rx: "2" }),
    path({ "d": "M22 3v18" })
  );
}, "GalleryHorizontal");

// src/icons/GalleryThumbnails.ts
import van676 from "vanjs-core";
var GalleryThumbnails = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van676.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "14", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M4 21h1" }),
    path({ "d": "M9 21h1" }),
    path({ "d": "M14 21h1" }),
    path({ "d": "M19 21h1" })
  );
}, "GalleryThumbnails");

// src/icons/GalleryVerticalEnd.ts
import van677 from "vanjs-core";
var GalleryVerticalEnd = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van677.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M7 2h10" }),
    path({ "d": "M5 6h14" }),
    rect({ width: "18", height: "12", "x": "3", "y": "10", rx: "2" })
  );
}, "GalleryVerticalEnd");

// src/icons/GalleryVertical.ts
import van678 from "vanjs-core";
var GalleryVertical = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van678.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 2h18" }),
    rect({ width: "18", height: "12", "x": "3", "y": "6", rx: "2" }),
    path({ "d": "M3 22h18" })
  );
}, "GalleryVertical");

// src/icons/Gamepad2.ts
import van679 from "vanjs-core";
var Gamepad2 = /* @__PURE__ */ __name((props = {}) => {
  const { line, path } = van679.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "6", x2: "10", y1: "11", y2: "11" }),
    line({ x1: "8", x2: "8", y1: "9", y2: "13" }),
    line({ x1: "15", x2: "15.01", y1: "12", y2: "12" }),
    line({ x1: "18", x2: "18.01", y1: "10", y2: "10" }),
    path({
      "d": "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"
    })
  );
}, "Gamepad2");

// src/icons/Gamepad.ts
import van680 from "vanjs-core";
var Gamepad = /* @__PURE__ */ __name((props = {}) => {
  const { line, rect } = van680.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "6", x2: "10", y1: "12", y2: "12" }),
    line({ x1: "8", x2: "8", y1: "10", y2: "14" }),
    line({ x1: "15", x2: "15.01", y1: "13", y2: "13" }),
    line({ x1: "18", x2: "18.01", y1: "11", y2: "11" }),
    rect({ width: "20", height: "12", "x": "2", "y": "6", rx: "2" })
  );
}, "Gamepad");

// src/icons/Gauge.ts
import van681 from "vanjs-core";
var Gauge = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van681.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m12 14 4-4" }),
    path({ "d": "M3.34 19a10 10 0 1 1 17.32 0" })
  );
}, "Gauge");

// src/icons/Gavel.ts
import van682 from "vanjs-core";
var Gavel = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van682.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8" }),
    path({ "d": "m16 16 6-6" }),
    path({ "d": "m8 8 6-6" }),
    path({ "d": "m9 7 8 8" }),
    path({ "d": "m21 11-8-8" })
  );
}, "Gavel");

// src/icons/Gem.ts
import van683 from "vanjs-core";
var Gem = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van683.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M6 3h12l4 6-10 13L2 9Z" }),
    path({ "d": "M11 3 8 9l4 13 4-13-3-6" }),
    path({ "d": "M2 9h20" })
  );
}, "Gem");

// src/icons/Ghost.ts
import van684 from "vanjs-core";
var Ghost = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van684.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M9 10h.01" }),
    path({ "d": "M15 10h.01" }),
    path({
      "d": "M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"
    })
  );
}, "Ghost");

// src/icons/Gift.ts
import van685 from "vanjs-core";
var Gift = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van685.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ "x": "3", "y": "8", width: "18", height: "4", rx: "1" }),
    path({ "d": "M12 8v13" }),
    path({ "d": "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" }),
    path({
      "d": "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"
    })
  );
}, "Gift");

// src/icons/GitBranchPlus.ts
import van686 from "vanjs-core";
var GitBranchPlus = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van686.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M6 3v12" }),
    path({ "d": "M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" }),
    path({ "d": "M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" }),
    path({ "d": "M15 6a9 9 0 0 0-9 9" }),
    path({ "d": "M18 15v6" }),
    path({ "d": "M21 18h-6" })
  );
}, "GitBranchPlus");

// src/icons/GitBranch.ts
import van687 from "vanjs-core";
var GitBranch = /* @__PURE__ */ __name((props = {}) => {
  const { line, circle, path } = van687.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "6", x2: "6", y1: "3", y2: "15" }),
    circle({ cx: "18", cy: "6", "r": "3" }),
    circle({ cx: "6", cy: "18", "r": "3" }),
    path({ "d": "M18 9a9 9 0 0 1-9 9" })
  );
}, "GitBranch");

// src/icons/GitCommitHorizontal.ts
import van688 from "vanjs-core";
var GitCommitHorizontal = /* @__PURE__ */ __name((props = {}) => {
  const { circle, line } = van688.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "3" }),
    line({ x1: "3", x2: "9", y1: "12", y2: "12" }),
    line({ x1: "15", x2: "21", y1: "12", y2: "12" })
  );
}, "GitCommitHorizontal");

// src/icons/GitCommitVertical.ts
import van689 from "vanjs-core";
var GitCommitVertical = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van689.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 3v6" }),
    circle({ cx: "12", cy: "12", "r": "3" }),
    path({ "d": "M12 15v6" })
  );
}, "GitCommitVertical");

// src/icons/GitCompareArrows.ts
import van690 from "vanjs-core";
var GitCompareArrows = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van690.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "5", cy: "6", "r": "3" }),
    path({ "d": "M12 6h5a2 2 0 0 1 2 2v7" }),
    path({ "d": "m15 9-3-3 3-3" }),
    circle({ cx: "19", cy: "18", "r": "3" }),
    path({ "d": "M12 18H7a2 2 0 0 1-2-2V9" }),
    path({ "d": "m9 15 3 3-3 3" })
  );
}, "GitCompareArrows");

// src/icons/GitCompare.ts
import van691 from "vanjs-core";
var GitCompare = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van691.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "18", cy: "18", "r": "3" }),
    circle({ cx: "6", cy: "6", "r": "3" }),
    path({ "d": "M13 6h3a2 2 0 0 1 2 2v7" }),
    path({ "d": "M11 18H8a2 2 0 0 1-2-2V9" })
  );
}, "GitCompare");

// src/icons/GitFork.ts
import van692 from "vanjs-core";
var GitFork = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van692.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "18", "r": "3" }),
    circle({ cx: "6", cy: "6", "r": "3" }),
    circle({ cx: "18", cy: "6", "r": "3" }),
    path({ "d": "M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" }),
    path({ "d": "M12 12v3" })
  );
}, "GitFork");

// src/icons/GitGraph.ts
import van693 from "vanjs-core";
var GitGraph = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van693.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "5", cy: "6", "r": "3" }),
    path({ "d": "M5 9v6" }),
    circle({ cx: "5", cy: "18", "r": "3" }),
    path({ "d": "M12 3v18" }),
    circle({ cx: "19", cy: "6", "r": "3" }),
    path({ "d": "M16 15.7A9 9 0 0 0 19 9" })
  );
}, "GitGraph");

// src/icons/GitMerge.ts
import van694 from "vanjs-core";
var GitMerge = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van694.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "18", cy: "18", "r": "3" }),
    circle({ cx: "6", cy: "6", "r": "3" }),
    path({ "d": "M6 21V9a9 9 0 0 0 9 9" })
  );
}, "GitMerge");

// src/icons/GitPullRequestArrow.ts
import van695 from "vanjs-core";
var GitPullRequestArrow = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van695.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "5", cy: "6", "r": "3" }),
    path({ "d": "M5 9v12" }),
    circle({ cx: "19", cy: "18", "r": "3" }),
    path({ "d": "m15 9-3-3 3-3" }),
    path({ "d": "M12 6h5a2 2 0 0 1 2 2v7" })
  );
}, "GitPullRequestArrow");

// src/icons/GitPullRequestClosed.ts
import van696 from "vanjs-core";
var GitPullRequestClosed = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van696.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "6", cy: "6", "r": "3" }),
    path({ "d": "M6 9v12" }),
    path({ "d": "m21 3-6 6" }),
    path({ "d": "m21 9-6-6" }),
    path({ "d": "M18 11.5V15" }),
    circle({ cx: "18", cy: "18", "r": "3" })
  );
}, "GitPullRequestClosed");

// src/icons/GitPullRequestCreateArrow.ts
import van697 from "vanjs-core";
var GitPullRequestCreateArrow = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van697.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "5", cy: "6", "r": "3" }),
    path({ "d": "M5 9v12" }),
    path({ "d": "m15 9-3-3 3-3" }),
    path({ "d": "M12 6h5a2 2 0 0 1 2 2v3" }),
    path({ "d": "M19 15v6" }),
    path({ "d": "M22 18h-6" })
  );
}, "GitPullRequestCreateArrow");

// src/icons/GitPullRequestCreate.ts
import van698 from "vanjs-core";
var GitPullRequestCreate = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van698.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "6", cy: "6", "r": "3" }),
    path({ "d": "M6 9v12" }),
    path({ "d": "M13 6h3a2 2 0 0 1 2 2v3" }),
    path({ "d": "M18 15v6" }),
    path({ "d": "M21 18h-6" })
  );
}, "GitPullRequestCreate");

// src/icons/GitPullRequestDraft.ts
import van699 from "vanjs-core";
var GitPullRequestDraft = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path, line } = van699.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "18", cy: "18", "r": "3" }),
    circle({ cx: "6", cy: "6", "r": "3" }),
    path({ "d": "M18 6V5" }),
    path({ "d": "M18 11v-1" }),
    line({ x1: "6", x2: "6", y1: "9", y2: "21" })
  );
}, "GitPullRequestDraft");

// src/icons/GitPullRequest.ts
import van700 from "vanjs-core";
var GitPullRequest = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path, line } = van700.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "18", cy: "18", "r": "3" }),
    circle({ cx: "6", cy: "6", "r": "3" }),
    path({ "d": "M13 6h3a2 2 0 0 1 2 2v7" }),
    line({ x1: "6", x2: "6", y1: "9", y2: "21" })
  );
}, "GitPullRequest");

// src/icons/Github.ts
import van701 from "vanjs-core";
var Github = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van701.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
    }),
    path({ "d": "M9 18c-4.51 2-5-2-7-2" })
  );
}, "Github");

// src/icons/Gitlab.ts
import van702 from "vanjs-core";
var Gitlab = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van702.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z"
    })
  );
}, "Gitlab");

// src/icons/GlassWater.ts
import van703 from "vanjs-core";
var GlassWater = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van703.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z"
    }),
    path({ "d": "M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0" })
  );
}, "GlassWater");

// src/icons/Glasses.ts
import van704 from "vanjs-core";
var Glasses = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van704.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "6", cy: "15", "r": "4" }),
    circle({ cx: "18", cy: "15", "r": "4" }),
    path({ "d": "M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2" }),
    path({ "d": "M2.5 13 5 7c.7-1.3 1.4-2 3-2" }),
    path({ "d": "M21.5 13 19 7c-.7-1.3-1.5-2-3-2" })
  );
}, "Glasses");

// src/icons/GlobeLock.ts
import van705 from "vanjs-core";
var GlobeLock = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van705.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13"
    }),
    path({ "d": "M2 12h8.5" }),
    path({ "d": "M20 6V4a2 2 0 1 0-4 0v2" }),
    rect({ width: "8", height: "5", "x": "14", "y": "6", rx: "1" })
  );
}, "GlobeLock");

// src/icons/Globe.ts
import van706 from "vanjs-core";
var Globe = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van706.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" }),
    path({ "d": "M2 12h20" })
  );
}, "Globe");

// src/icons/Goal.ts
import van707 from "vanjs-core";
var Goal = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van707.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 13V2l8 4-8 4" }),
    path({ "d": "M20.561 10.222a9 9 0 1 1-12.55-5.29" }),
    path({ "d": "M8.002 9.997a5 5 0 1 0 8.9 2.02" })
  );
}, "Goal");

// src/icons/Grab.ts
import van708 from "vanjs-core";
var Grab = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van708.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4" }),
    path({ "d": "M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" }),
    path({ "d": "M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5" }),
    path({ "d": "M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2" }),
    path({
      "d": "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0"
    })
  );
}, "Grab");

// src/icons/GraduationCap.ts
import van709 from "vanjs-core";
var GraduationCap = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van709.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"
    }),
    path({ "d": "M22 10v6" }),
    path({ "d": "M6 12.5V16a6 3 0 0 0 12 0v-3.5" })
  );
}, "GraduationCap");

// src/icons/Grape.ts
import van710 from "vanjs-core";
var Grape = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van710.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M22 5V2l-5.89 5.89" }),
    circle({ cx: "16.6", cy: "15.89", "r": "3" }),
    circle({ cx: "8.11", cy: "7.4", "r": "3" }),
    circle({ cx: "12.35", cy: "11.65", "r": "3" }),
    circle({ cx: "13.91", cy: "5.85", "r": "3" }),
    circle({ cx: "18.15", cy: "10.09", "r": "3" }),
    circle({ cx: "6.56", cy: "13.2", "r": "3" }),
    circle({ cx: "10.8", cy: "17.44", "r": "3" }),
    circle({ cx: "5", cy: "19", "r": "3" })
  );
}, "Grape");

// src/icons/Grid2x2Check.ts
import van711 from "vanjs-core";
var Grid2x2Check = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van711.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"
    }),
    path({ "d": "m16 19 2 2 4-4" })
  );
}, "Grid2x2Check");

// src/icons/Grid2x2Plus.ts
import van712 from "vanjs-core";
var Grid2x2Plus = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van712.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"
    }),
    path({ "d": "M16 19h6" }),
    path({ "d": "M19 22v-6" })
  );
}, "Grid2x2Plus");

// src/icons/Grid2x2X.ts
import van713 from "vanjs-core";
var Grid2x2X = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van713.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"
    }),
    path({ "d": "m16 16 5 5" }),
    path({ "d": "m16 21 5-5" })
  );
}, "Grid2x2X");

// src/icons/Grid2x2.ts
import van714 from "vanjs-core";
var Grid2x2 = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van714.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 3v18" }),
    path({ "d": "M3 12h18" }),
    rect({ "x": "3", "y": "3", width: "18", height: "18", rx: "2" })
  );
}, "Grid2x2");

// src/icons/Grid3x3.ts
import van715 from "vanjs-core";
var Grid3x3 = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van715.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M3 9h18" }),
    path({ "d": "M3 15h18" }),
    path({ "d": "M9 3v18" }),
    path({ "d": "M15 3v18" })
  );
}, "Grid3x3");

// src/icons/GripHorizontal.ts
import van716 from "vanjs-core";
var GripHorizontal = /* @__PURE__ */ __name((props = {}) => {
  const { circle } = van716.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "9", "r": "1" }),
    circle({ cx: "19", cy: "9", "r": "1" }),
    circle({ cx: "5", cy: "9", "r": "1" }),
    circle({ cx: "12", cy: "15", "r": "1" }),
    circle({ cx: "19", cy: "15", "r": "1" }),
    circle({ cx: "5", cy: "15", "r": "1" })
  );
}, "GripHorizontal");

// src/icons/GripVertical.ts
import van717 from "vanjs-core";
var GripVertical = /* @__PURE__ */ __name((props = {}) => {
  const { circle } = van717.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "9", cy: "12", "r": "1" }),
    circle({ cx: "9", cy: "5", "r": "1" }),
    circle({ cx: "9", cy: "19", "r": "1" }),
    circle({ cx: "15", cy: "12", "r": "1" }),
    circle({ cx: "15", cy: "5", "r": "1" }),
    circle({ cx: "15", cy: "19", "r": "1" })
  );
}, "GripVertical");

// src/icons/Grip.ts
import van718 from "vanjs-core";
var Grip = /* @__PURE__ */ __name((props = {}) => {
  const { circle } = van718.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "5", "r": "1" }),
    circle({ cx: "19", cy: "5", "r": "1" }),
    circle({ cx: "5", cy: "5", "r": "1" }),
    circle({ cx: "12", cy: "12", "r": "1" }),
    circle({ cx: "19", cy: "12", "r": "1" }),
    circle({ cx: "5", cy: "12", "r": "1" }),
    circle({ cx: "12", cy: "19", "r": "1" }),
    circle({ cx: "19", cy: "19", "r": "1" }),
    circle({ cx: "5", cy: "19", "r": "1" })
  );
}, "Grip");

// src/icons/Group.ts
import van719 from "vanjs-core";
var Group = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van719.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 7V5c0-1.1.9-2 2-2h2" }),
    path({ "d": "M17 3h2c1.1 0 2 .9 2 2v2" }),
    path({ "d": "M21 17v2c0 1.1-.9 2-2 2h-2" }),
    path({ "d": "M7 21H5c-1.1 0-2-.9-2-2v-2" }),
    rect({ width: "7", height: "5", "x": "7", "y": "7", rx: "1" }),
    rect({ width: "7", height: "5", "x": "10", "y": "12", rx: "1" })
  );
}, "Group");

// src/icons/Guitar.ts
import van720 from "vanjs-core";
var Guitar = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van720.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m11.9 12.1 4.514-4.514" }),
    path({
      "d": "M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z"
    }),
    path({ "d": "m6 16 2 2" }),
    path({
      "d": "M8.2 9.9C8.7 8.8 9.8 8 11 8c2.8 0 5 2.2 5 5 0 1.2-.8 2.3-1.9 2.8l-.9.4A2 2 0 0 0 12 18a4 4 0 0 1-4 4c-3.3 0-6-2.7-6-6a4 4 0 0 1 4-4 2 2 0 0 0 1.8-1.2z"
    }),
    circle({ cx: "11.5", cy: "12.5", "r": ".5", fill: "currentColor" })
  );
}, "Guitar");

// src/icons/Ham.ts
import van721 from "vanjs-core";
var Ham = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van721.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856" }),
    path({
      "d": "M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288"
    }),
    path({
      "d": "M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025"
    }),
    path({ "d": "m8.5 16.5-1-1" })
  );
}, "Ham");

// src/icons/Hammer.ts
import van722 from "vanjs-core";
var Hammer = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van722.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9" }),
    path({ "d": "m18 15 4-4" }),
    path({
      "d": "m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"
    })
  );
}, "Hammer");

// src/icons/HandCoins.ts
import van723 from "vanjs-core";
var HandCoins = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van723.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" }),
    path({
      "d": "m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"
    }),
    path({ "d": "m2 16 6 6" }),
    circle({ cx: "16", cy: "9", "r": "2.9" }),
    circle({ cx: "6", cy: "5", "r": "3" })
  );
}, "HandCoins");

// src/icons/HandHeart.ts
import van724 from "vanjs-core";
var HandHeart = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van724.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" }),
    path({
      "d": "m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"
    }),
    path({ "d": "m2 15 6 6" }),
    path({
      "d": "M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z"
    })
  );
}, "HandHeart");

// src/icons/HandHelping.ts
import van725 from "vanjs-core";
var HandHelping = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van725.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" }),
    path({
      "d": "m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"
    }),
    path({ "d": "m2 13 6 6" })
  );
}, "HandHelping");

// src/icons/HandMetal.ts
import van726 from "vanjs-core";
var HandMetal = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van726.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4" }),
    path({ "d": "M14 11V9a2 2 0 1 0-4 0v2" }),
    path({ "d": "M10 10.5V5a2 2 0 1 0-4 0v9" }),
    path({
      "d": "m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5"
    })
  );
}, "HandMetal");

// src/icons/HandPlatter.ts
import van727 from "vanjs-core";
var HandPlatter = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van727.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 3V2" }),
    path({
      "d": "m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5"
    }),
    path({ "d": "M2 14h12a2 2 0 0 1 0 4h-2" }),
    path({ "d": "M4 10h16" }),
    path({ "d": "M5 10a7 7 0 0 1 14 0" }),
    path({ "d": "M5 14v6a1 1 0 0 1-1 1H2" })
  );
}, "HandPlatter");

// src/icons/Hand.ts
import van728 from "vanjs-core";
var Hand = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van728.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" }),
    path({ "d": "M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" }),
    path({ "d": "M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" }),
    path({
      "d": "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"
    })
  );
}, "Hand");

// src/icons/Handshake.ts
import van729 from "vanjs-core";
var Handshake = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van729.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m11 17 2 2a1 1 0 1 0 3-3" }),
    path({
      "d": "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"
    }),
    path({ "d": "m21 3 1 11h-2" }),
    path({ "d": "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" }),
    path({ "d": "M3 4h8" })
  );
}, "Handshake");

// src/icons/HardDriveDownload.ts
import van730 from "vanjs-core";
var HardDriveDownload = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van730.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 2v8" }),
    path({ "d": "m16 6-4 4-4-4" }),
    rect({ width: "20", height: "8", "x": "2", "y": "14", rx: "2" }),
    path({ "d": "M6 18h.01" }),
    path({ "d": "M10 18h.01" })
  );
}, "HardDriveDownload");

// src/icons/HardDriveUpload.ts
import van731 from "vanjs-core";
var HardDriveUpload = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van731.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m16 6-4-4-4 4" }),
    path({ "d": "M12 2v8" }),
    rect({ width: "20", height: "8", "x": "2", "y": "14", rx: "2" }),
    path({ "d": "M6 18h.01" }),
    path({ "d": "M10 18h.01" })
  );
}, "HardDriveUpload");

// src/icons/HardDrive.ts
import van732 from "vanjs-core";
var HardDrive = /* @__PURE__ */ __name((props = {}) => {
  const { line, path } = van732.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "22", x2: "2", y1: "12", y2: "12" }),
    path({
      "d": "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
    }),
    line({ x1: "6", x2: "6.01", y1: "16", y2: "16" }),
    line({ x1: "10", x2: "10.01", y1: "16", y2: "16" })
  );
}, "HardDrive");

// src/icons/HardHat.ts
import van733 from "vanjs-core";
var HardHat = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van733.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" }),
    path({ "d": "M14 6a6 6 0 0 1 6 6v3" }),
    path({ "d": "M4 15v-3a6 6 0 0 1 6-6" }),
    rect({ "x": "2", "y": "15", width: "20", height: "4", rx: "1" })
  );
}, "HardHat");

// src/icons/Hash.ts
import van734 from "vanjs-core";
var Hash = /* @__PURE__ */ __name((props = {}) => {
  const { line } = van734.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "4", x2: "20", y1: "9", y2: "9" }),
    line({ x1: "4", x2: "20", y1: "15", y2: "15" }),
    line({ x1: "10", x2: "8", y1: "3", y2: "21" }),
    line({ x1: "16", x2: "14", y1: "3", y2: "21" })
  );
}, "Hash");

// src/icons/Haze.ts
import van735 from "vanjs-core";
var Haze = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van735.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m5.2 6.2 1.4 1.4" }),
    path({ "d": "M2 13h2" }),
    path({ "d": "M20 13h2" }),
    path({ "d": "m17.4 7.6 1.4-1.4" }),
    path({ "d": "M22 17H2" }),
    path({ "d": "M22 21H2" }),
    path({ "d": "M16 13a4 4 0 0 0-8 0" }),
    path({ "d": "M12 5V2.5" })
  );
}, "Haze");

// src/icons/HdmiPort.ts
import van736 from "vanjs-core";
var HdmiPort = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van736.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z"
    }),
    path({ "d": "M7.5 12h9" })
  );
}, "HdmiPort");

// src/icons/Heading1.ts
import van737 from "vanjs-core";
var Heading1 = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van737.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 12h8" }),
    path({ "d": "M4 18V6" }),
    path({ "d": "M12 18V6" }),
    path({ "d": "m17 12 3-2v8" })
  );
}, "Heading1");

// src/icons/Heading2.ts
import van738 from "vanjs-core";
var Heading2 = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van738.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 12h8" }),
    path({ "d": "M4 18V6" }),
    path({ "d": "M12 18V6" }),
    path({ "d": "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1" })
  );
}, "Heading2");

// src/icons/Heading3.ts
import van739 from "vanjs-core";
var Heading3 = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van739.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 12h8" }),
    path({ "d": "M4 18V6" }),
    path({ "d": "M12 18V6" }),
    path({ "d": "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2" }),
    path({ "d": "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2" })
  );
}, "Heading3");

// src/icons/Heading4.ts
import van740 from "vanjs-core";
var Heading4 = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van740.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 18V6" }),
    path({ "d": "M17 10v3a1 1 0 0 0 1 1h3" }),
    path({ "d": "M21 10v8" }),
    path({ "d": "M4 12h8" }),
    path({ "d": "M4 18V6" })
  );
}, "Heading4");

// src/icons/Heading5.ts
import van741 from "vanjs-core";
var Heading5 = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van741.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 12h8" }),
    path({ "d": "M4 18V6" }),
    path({ "d": "M12 18V6" }),
    path({ "d": "M17 13v-3h4" }),
    path({
      "d": "M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17"
    })
  );
}, "Heading5");

// src/icons/Heading6.ts
import van742 from "vanjs-core";
var Heading6 = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van742.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 12h8" }),
    path({ "d": "M4 18V6" }),
    path({ "d": "M12 18V6" }),
    circle({ cx: "19", cy: "16", "r": "2" }),
    path({ "d": "M20 10c-2 2-3 3.5-3 6" })
  );
}, "Heading6");

// src/icons/Heading.ts
import van743 from "vanjs-core";
var Heading = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van743.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M6 12h12" }),
    path({ "d": "M6 20V4" }),
    path({ "d": "M18 20V4" })
  );
}, "Heading");

// src/icons/HeadphoneOff.ts
import van744 from "vanjs-core";
var HeadphoneOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van744.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21 14h-1.343" }),
    path({ "d": "M9.128 3.47A9 9 0 0 1 21 12v3.343" }),
    path({ "d": "m2 2 20 20" }),
    path({ "d": "M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3" }),
    path({
      "d": "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364"
    })
  );
}, "HeadphoneOff");

// src/icons/Headphones.ts
import van745 from "vanjs-core";
var Headphones = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van745.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"
    })
  );
}, "Headphones");

// src/icons/Headset.ts
import van746 from "vanjs-core";
var Headset = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van746.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"
    }),
    path({ "d": "M21 16v2a4 4 0 0 1-4 4h-5" })
  );
}, "Headset");

// src/icons/HeartCrack.ts
import van747 from "vanjs-core";
var HeartCrack = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van747.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
    }),
    path({ "d": "m12 13-1-1 2-2-3-3 2-2" })
  );
}, "HeartCrack");

// src/icons/HeartHandshake.ts
import van748 from "vanjs-core";
var HeartHandshake = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van748.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
    }),
    path({
      "d": "M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"
    }),
    path({ "d": "m18 15-2-2" }),
    path({ "d": "m15 18-2-2" })
  );
}, "HeartHandshake");

// src/icons/HeartOff.ts
import van749 from "vanjs-core";
var HeartOff = /* @__PURE__ */ __name((props = {}) => {
  const { line, path } = van749.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "2", y1: "2", x2: "22", y2: "22" }),
    path({
      "d": "M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35"
    }),
    path({
      "d": "M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17"
    })
  );
}, "HeartOff");

// src/icons/HeartPulse.ts
import van750 from "vanjs-core";
var HeartPulse = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van750.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
    }),
    path({ "d": "M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" })
  );
}, "HeartPulse");

// src/icons/Heart.ts
import van751 from "vanjs-core";
var Heart = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van751.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
    })
  );
}, "Heart");

// src/icons/Heater.ts
import van752 from "vanjs-core";
var Heater = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van752.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M11 8c2-3-2-3 0-6" }),
    path({ "d": "M15.5 8c2-3-2-3 0-6" }),
    path({ "d": "M6 10h.01" }),
    path({ "d": "M6 14h.01" }),
    path({ "d": "M10 16v-4" }),
    path({ "d": "M14 16v-4" }),
    path({ "d": "M18 16v-4" }),
    path({
      "d": "M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3"
    }),
    path({ "d": "M5 20v2" }),
    path({ "d": "M19 20v2" })
  );
}, "Heater");

// src/icons/Hexagon.ts
import van753 from "vanjs-core";
var Hexagon = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van753.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
    })
  );
}, "Hexagon");

// src/icons/Highlighter.ts
import van754 from "vanjs-core";
var Highlighter = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van754.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m9 11-6 6v3h9l3-3" }),
    path({
      "d": "m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"
    })
  );
}, "Highlighter");

// src/icons/History.ts
import van755 from "vanjs-core";
var History = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van755.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }),
    path({ "d": "M3 3v5h5" }),
    path({ "d": "M12 7v5l4 2" })
  );
}, "History");

// src/icons/HopOff.ts
import van756 from "vanjs-core";
var HopOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van756.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27" }),
    path({
      "d": "M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28"
    }),
    path({ "d": "M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26" }),
    path({
      "d": "M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25"
    }),
    path({ "d": "M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75" }),
    path({
      "d": "M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24"
    }),
    path({
      "d": "M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28"
    }),
    path({
      "d": "M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05"
    }),
    path({ "d": "m2 2 20 20" })
  );
}, "HopOff");

// src/icons/Hop.ts
import van757 from "vanjs-core";
var Hop = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van757.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18"
    }),
    path({
      "d": "M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88"
    }),
    path({
      "d": "M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36"
    }),
    path({
      "d": "M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87"
    }),
    path({
      "d": "M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08"
    }),
    path({
      "d": "M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57"
    }),
    path({ "d": "M4.93 4.93 3 3a.7.7 0 0 1 0-1" }),
    path({
      "d": "M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15"
    })
  );
}, "Hop");

// src/icons/Hospital.ts
import van758 from "vanjs-core";
var Hospital = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van758.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 6v4" }),
    path({ "d": "M14 14h-4" }),
    path({ "d": "M14 18h-4" }),
    path({ "d": "M14 8h-4" }),
    path({
      "d": "M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"
    }),
    path({ "d": "M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18" })
  );
}, "Hospital");

// src/icons/Hotel.ts
import van759 from "vanjs-core";
var Hotel = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van759.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 22v-6.57" }),
    path({ "d": "M12 11h.01" }),
    path({ "d": "M12 7h.01" }),
    path({ "d": "M14 15.43V22" }),
    path({ "d": "M15 16a5 5 0 0 0-6 0" }),
    path({ "d": "M16 11h.01" }),
    path({ "d": "M16 7h.01" }),
    path({ "d": "M8 11h.01" }),
    path({ "d": "M8 7h.01" }),
    rect({ "x": "4", "y": "2", width: "16", height: "20", rx: "2" })
  );
}, "Hotel");

// src/icons/Hourglass.ts
import van760 from "vanjs-core";
var Hourglass = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van760.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M5 22h14" }),
    path({ "d": "M5 2h14" }),
    path({
      "d": "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"
    }),
    path({
      "d": "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"
    })
  );
}, "Hourglass");

// src/icons/HousePlug.ts
import van761 from "vanjs-core";
var HousePlug = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van761.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 12V8.964" }),
    path({ "d": "M14 12V8.964" }),
    path({
      "d": "M15 12a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z"
    }),
    path({
      "d": "M8.5 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2"
    })
  );
}, "HousePlug");

// src/icons/HousePlus.ts
import van762 from "vanjs-core";
var HousePlus = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van762.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M13.22 2.416a2 2 0 0 0-2.511.057l-7 5.999A2 2 0 0 0 3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.354"
    }),
    path({ "d": "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }),
    path({ "d": "M15 6h6" }),
    path({ "d": "M18 3v6" })
  );
}, "HousePlus");

// src/icons/HouseWifi.ts
import van763 from "vanjs-core";
var HouseWifi = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van763.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M9.5 13.866a4 4 0 0 1 5 .01" }),
    path({ "d": "M12 17h.01" }),
    path({
      "d": "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
    }),
    path({ "d": "M7 10.754a8 8 0 0 1 10 0" })
  );
}, "HouseWifi");

// src/icons/House.ts
import van764 from "vanjs-core";
var House = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van764.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }),
    path({
      "d": "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
    })
  );
}, "House");

// src/icons/IceCreamBowl.ts
import van765 from "vanjs-core";
var IceCreamBowl = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van765.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0"
    }),
    path({ "d": "M12.14 11a3.5 3.5 0 1 1 6.71 0" }),
    path({ "d": "M15.5 6.5a3.5 3.5 0 1 0-7 0" })
  );
}, "IceCreamBowl");

// src/icons/IceCreamCone.ts
import van766 from "vanjs-core";
var IceCreamCone = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van766.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11" }),
    path({ "d": "M17 7A5 5 0 0 0 7 7" }),
    path({ "d": "M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4" })
  );
}, "IceCreamCone");

// src/icons/IdCard.ts
import van767 from "vanjs-core";
var IdCard = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle, rect } = van767.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 10h2" }),
    path({ "d": "M16 14h2" }),
    path({ "d": "M6.17 15a3 3 0 0 1 5.66 0" }),
    circle({ cx: "9", cy: "11", "r": "2" }),
    rect({ "x": "2", "y": "5", width: "20", height: "14", rx: "2" })
  );
}, "IdCard");

// src/icons/ImageDown.ts
import van768 from "vanjs-core";
var ImageDown = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van768.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"
    }),
    path({ "d": "m14 19 3 3v-5.5" }),
    path({ "d": "m17 22 3-3" }),
    circle({ cx: "9", cy: "9", "r": "2" })
  );
}, "ImageDown");

// src/icons/ImageMinus.ts
import van769 from "vanjs-core";
var ImageMinus = /* @__PURE__ */ __name((props = {}) => {
  const { path, line, circle } = van769.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" }),
    line({ x1: "16", x2: "22", y1: "5", y2: "5" }),
    circle({ cx: "9", cy: "9", "r": "2" }),
    path({ "d": "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" })
  );
}, "ImageMinus");

// src/icons/ImageOff.ts
import van770 from "vanjs-core";
var ImageOff = /* @__PURE__ */ __name((props = {}) => {
  const { line, path } = van770.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "2", x2: "22", y1: "2", y2: "22" }),
    path({ "d": "M10.41 10.41a2 2 0 1 1-2.83-2.83" }),
    line({ x1: "13.5", x2: "6", y1: "13.5", y2: "21" }),
    line({ x1: "18", x2: "21", y1: "12", y2: "15" }),
    path({
      "d": "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"
    }),
    path({ "d": "M21 15V5a2 2 0 0 0-2-2H9" })
  );
}, "ImageOff");

// src/icons/ImagePlay.ts
import van771 from "vanjs-core";
var ImagePlay = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van771.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m11 16-5 5" }),
    path({
      "d": "M11 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6.5"
    }),
    path({
      "d": "M15.765 22a.5.5 0 0 1-.765-.424V13.38a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z"
    }),
    circle({ cx: "9", cy: "9", "r": "2" })
  );
}, "ImagePlay");

// src/icons/ImagePlus.ts
import van772 from "vanjs-core";
var ImagePlus = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van772.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 5h6" }),
    path({ "d": "M19 2v6" }),
    path({
      "d": "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5"
    }),
    path({ "d": "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }),
    circle({ cx: "9", cy: "9", "r": "2" })
  );
}, "ImagePlus");

// src/icons/ImageUp.ts
import van773 from "vanjs-core";
var ImageUp = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van773.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"
    }),
    path({ "d": "m14 19.5 3-3 3 3" }),
    path({ "d": "M17 22v-5.5" }),
    circle({ cx: "9", cy: "9", "r": "2" })
  );
}, "ImageUp");

// src/icons/ImageUpscale.ts
import van774 from "vanjs-core";
var ImageUpscale = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van774.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 3h5v5" }),
    path({ "d": "M17 21h2a2 2 0 0 0 2-2" }),
    path({ "d": "M21 12v3" }),
    path({ "d": "m21 3-5 5" }),
    path({ "d": "M3 7V5a2 2 0 0 1 2-2" }),
    path({ "d": "m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19" }),
    path({ "d": "M9 3h3" }),
    rect({ "x": "3", "y": "11", width: "10", height: "10", rx: "1" })
  );
}, "ImageUpscale");

// src/icons/Image.ts
import van775 from "vanjs-core";
var Image = /* @__PURE__ */ __name((props = {}) => {
  const { rect, circle, path } = van775.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2", ry: "2" }),
    circle({ cx: "9", cy: "9", "r": "2" }),
    path({ "d": "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" })
  );
}, "Image");

// src/icons/Images.ts
import van776 from "vanjs-core";
var Images = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle, rect } = van776.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M18 22H4a2 2 0 0 1-2-2V6" }),
    path({ "d": "m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18" }),
    circle({ cx: "12", cy: "8", "r": "2" }),
    rect({ width: "16", height: "16", "x": "6", "y": "2", rx: "2" })
  );
}, "Images");

// src/icons/Import.ts
import van777 from "vanjs-core";
var Import = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van777.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 3v12" }),
    path({ "d": "m8 11 4 4 4-4" }),
    path({
      "d": "M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"
    })
  );
}, "Import");

// src/icons/Inbox.ts
import van778 from "vanjs-core";
var Inbox = /* @__PURE__ */ __name((props = {}) => {
  const { polyline, path } = van778.tags(svgNamespace);
  return LucideIcon(
    props,
    polyline({ points: "22 12 16 12 14 15 10 15 8 12 2 12" }),
    path({
      "d": "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
    })
  );
}, "Inbox");

// src/icons/IndentDecrease.ts
import van779 from "vanjs-core";
var IndentDecrease = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van779.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21 12H11" }),
    path({ "d": "M21 18H11" }),
    path({ "d": "M21 6H11" }),
    path({ "d": "m7 8-4 4 4 4" })
  );
}, "IndentDecrease");

// src/icons/IndentIncrease.ts
import van780 from "vanjs-core";
var IndentIncrease = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van780.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21 12H11" }),
    path({ "d": "M21 18H11" }),
    path({ "d": "M21 6H11" }),
    path({ "d": "m3 8 4 4-4 4" })
  );
}, "IndentIncrease");

// src/icons/IndianRupee.ts
import van781 from "vanjs-core";
var IndianRupee = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van781.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M6 3h12" }),
    path({ "d": "M6 8h12" }),
    path({ "d": "m6 13 8.5 8" }),
    path({ "d": "M6 13h3" }),
    path({ "d": "M9 13c6.667 0 6.667-10 0-10" })
  );
}, "IndianRupee");

// src/icons/InfinityIcon.ts
import van782 from "vanjs-core";
var InfinityIcon = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van782.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z"
    })
  );
}, "InfinityIcon");

// src/icons/Info.ts
import van783 from "vanjs-core";
var Info = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van783.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "M12 16v-4" }),
    path({ "d": "M12 8h.01" })
  );
}, "Info");

// src/icons/InspectionPanel.ts
import van784 from "vanjs-core";
var InspectionPanel = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van784.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M7 7h.01" }),
    path({ "d": "M17 7h.01" }),
    path({ "d": "M7 17h.01" }),
    path({ "d": "M17 17h.01" })
  );
}, "InspectionPanel");

// src/icons/Instagram.ts
import van785 from "vanjs-core";
var Instagram = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path, line } = van785.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "20", height: "20", "x": "2", "y": "2", rx: "5", ry: "5" }),
    path({ "d": "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }),
    line({ x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5" })
  );
}, "Instagram");

// src/icons/Italic.ts
import van786 from "vanjs-core";
var Italic = /* @__PURE__ */ __name((props = {}) => {
  const { line } = van786.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "19", x2: "10", y1: "4", y2: "4" }),
    line({ x1: "14", x2: "5", y1: "20", y2: "20" }),
    line({ x1: "15", x2: "9", y1: "4", y2: "20" })
  );
}, "Italic");

// src/icons/IterationCcw.ts
import van787 from "vanjs-core";
var IterationCcw = /* @__PURE__ */ __name((props = {}) => {
  const { path, polyline } = van787.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8" }),
    polyline({ points: "16 14 20 18 16 22" })
  );
}, "IterationCcw");

// src/icons/IterationCw.ts
import van788 from "vanjs-core";
var IterationCw = /* @__PURE__ */ __name((props = {}) => {
  const { path, polyline } = van788.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4" }),
    polyline({ points: "8 22 4 18 8 14" })
  );
}, "IterationCw");

// src/icons/JapaneseYen.ts
import van789 from "vanjs-core";
var JapaneseYen = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van789.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 9.5V21m0-11.5L6 3m6 6.5L18 3" }),
    path({ "d": "M6 15h12" }),
    path({ "d": "M6 11h12" })
  );
}, "JapaneseYen");

// src/icons/Joystick.ts
import van790 from "vanjs-core";
var Joystick = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van790.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z"
    }),
    path({ "d": "M6 15v-2" }),
    path({ "d": "M12 15V9" }),
    circle({ cx: "12", cy: "6", "r": "3" })
  );
}, "Joystick");

// src/icons/Kanban.ts
import van791 from "vanjs-core";
var Kanban = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van791.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M6 5v11" }),
    path({ "d": "M12 5v6" }),
    path({ "d": "M18 5v14" })
  );
}, "Kanban");

// src/icons/KeyRound.ts
import van792 from "vanjs-core";
var KeyRound = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van792.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
    }),
    circle({ cx: "16.5", cy: "7.5", "r": ".5", fill: "currentColor" })
  );
}, "KeyRound");

// src/icons/KeySquare.ts
import van793 from "vanjs-core";
var KeySquare = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van793.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4z"
    }),
    path({ "d": "m14 7 3 3" }),
    path({
      "d": "m9.4 10.6-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814"
    })
  );
}, "KeySquare");

// src/icons/Key.ts
import van794 from "vanjs-core";
var Key = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van794.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"
    }),
    path({ "d": "m21 2-9.6 9.6" }),
    circle({ cx: "7.5", cy: "15.5", "r": "5.5" })
  );
}, "Key");

// src/icons/KeyboardMusic.ts
import van795 from "vanjs-core";
var KeyboardMusic = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van795.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "20", height: "16", "x": "2", "y": "4", rx: "2" }),
    path({ "d": "M6 8h4" }),
    path({ "d": "M14 8h.01" }),
    path({ "d": "M18 8h.01" }),
    path({ "d": "M2 12h20" }),
    path({ "d": "M6 12v4" }),
    path({ "d": "M10 12v4" }),
    path({ "d": "M14 12v4" }),
    path({ "d": "M18 12v4" })
  );
}, "KeyboardMusic");

// src/icons/KeyboardOff.ts
import van796 from "vanjs-core";
var KeyboardOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van796.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M 20 4 A2 2 0 0 1 22 6" }),
    path({ "d": "M 22 6 L 22 16.41" }),
    path({ "d": "M 7 16 L 16 16" }),
    path({ "d": "M 9.69 4 L 20 4" }),
    path({ "d": "M14 8h.01" }),
    path({ "d": "M18 8h.01" }),
    path({ "d": "m2 2 20 20" }),
    path({ "d": "M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" }),
    path({ "d": "M6 8h.01" }),
    path({ "d": "M8 12h.01" })
  );
}, "KeyboardOff");

// src/icons/Keyboard.ts
import van797 from "vanjs-core";
var Keyboard = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van797.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 8h.01" }),
    path({ "d": "M12 12h.01" }),
    path({ "d": "M14 8h.01" }),
    path({ "d": "M16 12h.01" }),
    path({ "d": "M18 8h.01" }),
    path({ "d": "M6 8h.01" }),
    path({ "d": "M7 16h10" }),
    path({ "d": "M8 12h.01" }),
    rect({ width: "20", height: "16", "x": "2", "y": "4", rx: "2" })
  );
}, "Keyboard");

// src/icons/LampCeiling.ts
import van798 from "vanjs-core";
var LampCeiling = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van798.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 2v5" }),
    path({ "d": "M6 7h12l4 9H2l4-9Z" }),
    path({ "d": "M9.17 16a3 3 0 1 0 5.66 0" })
  );
}, "LampCeiling");

// src/icons/LampDesk.ts
import van799 from "vanjs-core";
var LampDesk = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van799.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m14 5-3 3 2 7 8-8-7-2Z" }),
    path({ "d": "m14 5-3 3-3-3 3-3 3 3Z" }),
    path({ "d": "M9.5 6.5 4 12l3 6" }),
    path({ "d": "M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z" })
  );
}, "LampDesk");

// src/icons/LampFloor.ts
import van800 from "vanjs-core";
var LampFloor = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van800.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M9 2h6l3 7H6l3-7Z" }),
    path({ "d": "M12 9v13" }),
    path({ "d": "M9 22h6" })
  );
}, "LampFloor");

// src/icons/LampWallDown.ts
import van801 from "vanjs-core";
var LampWallDown = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van801.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M11 13h6l3 7H8l3-7Z" }),
    path({ "d": "M14 13V8a2 2 0 0 0-2-2H8" }),
    path({ "d": "M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z" })
  );
}, "LampWallDown");

// src/icons/LampWallUp.ts
import van802 from "vanjs-core";
var LampWallUp = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van802.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M11 4h6l3 7H8l3-7Z" }),
    path({ "d": "M14 11v5a2 2 0 0 1-2 2H8" }),
    path({ "d": "M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z" })
  );
}, "LampWallUp");

// src/icons/Lamp.ts
import van803 from "vanjs-core";
var Lamp = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van803.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 2h8l4 10H4L8 2Z" }),
    path({ "d": "M12 12v6" }),
    path({ "d": "M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z" })
  );
}, "Lamp");

// src/icons/LandPlot.ts
import van804 from "vanjs-core";
var LandPlot = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van804.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m12 8 6-3-6-3v10" }),
    path({
      "d": "m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12"
    }),
    path({ "d": "m6.49 12.85 11.02 6.3" }),
    path({ "d": "M17.51 12.85 6.5 19.15" })
  );
}, "LandPlot");

// src/icons/Landmark.ts
import van805 from "vanjs-core";
var Landmark = /* @__PURE__ */ __name((props = {}) => {
  const { line, polygon } = van805.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "3", x2: "21", y1: "22", y2: "22" }),
    line({ x1: "6", x2: "6", y1: "18", y2: "11" }),
    line({ x1: "10", x2: "10", y1: "18", y2: "11" }),
    line({ x1: "14", x2: "14", y1: "18", y2: "11" }),
    line({ x1: "18", x2: "18", y1: "18", y2: "11" }),
    polygon({ points: "12 2 20 7 4 7" })
  );
}, "Landmark");

// src/icons/Languages.ts
import van806 from "vanjs-core";
var Languages = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van806.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m5 8 6 6" }),
    path({ "d": "m4 14 6-6 2-3" }),
    path({ "d": "M2 5h12" }),
    path({ "d": "M7 2h1" }),
    path({ "d": "m22 22-5-10-5 10" }),
    path({ "d": "M14 18h6" })
  );
}, "Languages");

// src/icons/LaptopMinimalCheck.ts
import van807 from "vanjs-core";
var LaptopMinimalCheck = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van807.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 20h20" }),
    path({ "d": "m9 10 2 2 4-4" }),
    rect({ "x": "3", "y": "4", width: "18", height: "12", rx: "2" })
  );
}, "LaptopMinimalCheck");

// src/icons/LaptopMinimal.ts
import van808 from "vanjs-core";
var LaptopMinimal = /* @__PURE__ */ __name((props = {}) => {
  const { rect, line } = van808.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "12", "x": "3", "y": "4", rx: "2", ry: "2" }),
    line({ x1: "2", x2: "22", y1: "20", y2: "20" })
  );
}, "LaptopMinimal");

// src/icons/Laptop.ts
import van809 from "vanjs-core";
var Laptop = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van809.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"
    })
  );
}, "Laptop");

// src/icons/LassoSelect.ts
import van810 from "vanjs-core";
var LassoSelect = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van810.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M7 22a5 5 0 0 1-2-4" }),
    path({ "d": "M7 16.93c.96.43 1.96.74 2.99.91" }),
    path({
      "d": "M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2"
    }),
    path({ "d": "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" }),
    path({
      "d": "M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z"
    })
  );
}, "LassoSelect");

// src/icons/Lasso.ts
import van811 from "vanjs-core";
var Lasso = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van811.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M7 22a5 5 0 0 1-2-4" }),
    path({
      "d": "M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1"
    }),
    path({ "d": "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" })
  );
}, "Lasso");

// src/icons/Laugh.ts
import van812 from "vanjs-core";
var Laugh = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path, line } = van812.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z" }),
    line({ x1: "9", x2: "9.01", y1: "9", y2: "9" }),
    line({ x1: "15", x2: "15.01", y1: "9", y2: "9" })
  );
}, "Laugh");

// src/icons/Layers2.ts
import van813 from "vanjs-core";
var Layers2 = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van813.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12"
    }),
    path({
      "d": "M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z"
    })
  );
}, "Layers2");

// src/icons/Layers.ts
import van814 from "vanjs-core";
var Layers = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van814.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"
    }),
    path({
      "d": "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"
    }),
    path({
      "d": "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"
    })
  );
}, "Layers");

// src/icons/LayoutDashboard.ts
import van815 from "vanjs-core";
var LayoutDashboard = /* @__PURE__ */ __name((props = {}) => {
  const { rect } = van815.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "7", height: "9", "x": "3", "y": "3", rx: "1" }),
    rect({ width: "7", height: "5", "x": "14", "y": "3", rx: "1" }),
    rect({ width: "7", height: "9", "x": "14", "y": "12", rx: "1" }),
    rect({ width: "7", height: "5", "x": "3", "y": "16", rx: "1" })
  );
}, "LayoutDashboard");

// src/icons/LayoutGrid.ts
import van816 from "vanjs-core";
var LayoutGrid = /* @__PURE__ */ __name((props = {}) => {
  const { rect } = van816.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "7", height: "7", "x": "3", "y": "3", rx: "1" }),
    rect({ width: "7", height: "7", "x": "14", "y": "3", rx: "1" }),
    rect({ width: "7", height: "7", "x": "14", "y": "14", rx: "1" }),
    rect({ width: "7", height: "7", "x": "3", "y": "14", rx: "1" })
  );
}, "LayoutGrid");

// src/icons/LayoutList.ts
import van817 from "vanjs-core";
var LayoutList = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van817.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "7", height: "7", "x": "3", "y": "3", rx: "1" }),
    rect({ width: "7", height: "7", "x": "3", "y": "14", rx: "1" }),
    path({ "d": "M14 4h7" }),
    path({ "d": "M14 9h7" }),
    path({ "d": "M14 15h7" }),
    path({ "d": "M14 20h7" })
  );
}, "LayoutList");

// src/icons/LayoutPanelLeft.ts
import van818 from "vanjs-core";
var LayoutPanelLeft = /* @__PURE__ */ __name((props = {}) => {
  const { rect } = van818.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "7", height: "18", "x": "3", "y": "3", rx: "1" }),
    rect({ width: "7", height: "7", "x": "14", "y": "3", rx: "1" }),
    rect({ width: "7", height: "7", "x": "14", "y": "14", rx: "1" })
  );
}, "LayoutPanelLeft");

// src/icons/LayoutPanelTop.ts
import van819 from "vanjs-core";
var LayoutPanelTop = /* @__PURE__ */ __name((props = {}) => {
  const { rect } = van819.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "7", "x": "3", "y": "3", rx: "1" }),
    rect({ width: "7", height: "7", "x": "3", "y": "14", rx: "1" }),
    rect({ width: "7", height: "7", "x": "14", "y": "14", rx: "1" })
  );
}, "LayoutPanelTop");

// src/icons/LayoutTemplate.ts
import van820 from "vanjs-core";
var LayoutTemplate = /* @__PURE__ */ __name((props = {}) => {
  const { rect } = van820.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "7", "x": "3", "y": "3", rx: "1" }),
    rect({ width: "9", height: "7", "x": "3", "y": "14", rx: "1" }),
    rect({ width: "5", height: "7", "x": "16", "y": "14", rx: "1" })
  );
}, "LayoutTemplate");

// src/icons/Leaf.ts
import van821 from "vanjs-core";
var Leaf = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van821.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
    }),
    path({ "d": "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" })
  );
}, "Leaf");

// src/icons/LeafyGreen.ts
import van822 from "vanjs-core";
var LeafyGreen = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van822.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22"
    }),
    path({ "d": "M2 22 17 7" })
  );
}, "LeafyGreen");

// src/icons/Lectern.ts
import van823 from "vanjs-core";
var Lectern = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van823.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3"
    }),
    path({ "d": "M18 6V3a1 1 0 0 0-1-1h-3" }),
    rect({ width: "8", height: "12", "x": "8", "y": "10", rx: "1" })
  );
}, "Lectern");

// src/icons/LetterText.ts
import van824 from "vanjs-core";
var LetterText = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van824.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 12h6" }),
    path({ "d": "M15 6h6" }),
    path({ "d": "m3 13 3.553-7.724a.5.5 0 0 1 .894 0L11 13" }),
    path({ "d": "M3 18h18" }),
    path({ "d": "M4 11h6" })
  );
}, "LetterText");

// src/icons/LibraryBig.ts
import van825 from "vanjs-core";
var LibraryBig = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van825.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "8", height: "18", "x": "3", "y": "3", rx: "1" }),
    path({ "d": "M7 3v18" }),
    path({
      "d": "M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"
    })
  );
}, "LibraryBig");

// src/icons/Library.ts
import van826 from "vanjs-core";
var Library = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van826.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m16 6 4 14" }),
    path({ "d": "M12 6v14" }),
    path({ "d": "M8 8v12" }),
    path({ "d": "M4 4v16" })
  );
}, "Library");

// src/icons/LifeBuoy.ts
import van827 from "vanjs-core";
var LifeBuoy = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van827.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "m4.93 4.93 4.24 4.24" }),
    path({ "d": "m14.83 9.17 4.24-4.24" }),
    path({ "d": "m14.83 14.83 4.24 4.24" }),
    path({ "d": "m9.17 14.83-4.24 4.24" }),
    circle({ cx: "12", cy: "12", "r": "4" })
  );
}, "LifeBuoy");

// src/icons/Ligature.ts
import van828 from "vanjs-core";
var Ligature = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van828.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2" }),
    path({ "d": "M6 12h4" }),
    path({ "d": "M14 12h2v8" }),
    path({ "d": "M6 20h4" }),
    path({ "d": "M14 20h4" })
  );
}, "Ligature");

// src/icons/LightbulbOff.ts
import van829 from "vanjs-core";
var LightbulbOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van829.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5" }),
    path({ "d": "m2 2 20 20" }),
    path({ "d": "M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5" }),
    path({ "d": "M9 18h6" }),
    path({ "d": "M10 22h4" })
  );
}, "LightbulbOff");

// src/icons/Lightbulb.ts
import van830 from "vanjs-core";
var Lightbulb = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van830.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
    }),
    path({ "d": "M9 18h6" }),
    path({ "d": "M10 22h4" })
  );
}, "Lightbulb");

// src/icons/Link2Off.ts
import van831 from "vanjs-core";
var Link2Off = /* @__PURE__ */ __name((props = {}) => {
  const { path, line } = van831.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M9 17H7A5 5 0 0 1 7 7" }),
    path({ "d": "M15 7h2a5 5 0 0 1 4 8" }),
    line({ x1: "8", x2: "12", y1: "12", y2: "12" }),
    line({ x1: "2", x2: "22", y1: "2", y2: "22" })
  );
}, "Link2Off");

// src/icons/Link2.ts
import van832 from "vanjs-core";
var Link2 = /* @__PURE__ */ __name((props = {}) => {
  const { path, line } = van832.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M9 17H7A5 5 0 0 1 7 7h2" }),
    path({ "d": "M15 7h2a5 5 0 1 1 0 10h-2" }),
    line({ x1: "8", x2: "16", y1: "12", y2: "12" })
  );
}, "Link2");

// src/icons/Link.ts
import van833 from "vanjs-core";
var Link = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van833.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
    }),
    path({
      "d": "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
    })
  );
}, "Link");

// src/icons/Linkedin.ts
import van834 from "vanjs-core";
var Linkedin = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect, circle } = van834.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
    }),
    rect({ width: "4", height: "12", "x": "2", "y": "9" }),
    circle({ cx: "4", cy: "4", "r": "2" })
  );
}, "Linkedin");

// src/icons/ListCheck.ts
import van835 from "vanjs-core";
var ListCheck = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van835.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M11 18H3" }),
    path({ "d": "m15 18 2 2 4-4" }),
    path({ "d": "M16 12H3" }),
    path({ "d": "M16 6H3" })
  );
}, "ListCheck");

// src/icons/ListChecks.ts
import van836 from "vanjs-core";
var ListChecks = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van836.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m3 17 2 2 4-4" }),
    path({ "d": "m3 7 2 2 4-4" }),
    path({ "d": "M13 6h8" }),
    path({ "d": "M13 12h8" }),
    path({ "d": "M13 18h8" })
  );
}, "ListChecks");

// src/icons/ListCollapse.ts
import van837 from "vanjs-core";
var ListCollapse = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van837.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m3 10 2.5-2.5L3 5" }),
    path({ "d": "m3 19 2.5-2.5L3 14" }),
    path({ "d": "M10 6h11" }),
    path({ "d": "M10 12h11" }),
    path({ "d": "M10 18h11" })
  );
}, "ListCollapse");

// src/icons/ListEnd.ts
import van838 from "vanjs-core";
var ListEnd = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van838.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 12H3" }),
    path({ "d": "M16 6H3" }),
    path({ "d": "M10 18H3" }),
    path({ "d": "M21 6v10a2 2 0 0 1-2 2h-5" }),
    path({ "d": "m16 16-2 2 2 2" })
  );
}, "ListEnd");

// src/icons/ListFilterPlus.ts
import van839 from "vanjs-core";
var ListFilterPlus = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van839.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 18h4" }),
    path({ "d": "M11 6H3" }),
    path({ "d": "M15 6h6" }),
    path({ "d": "M18 9V3" }),
    path({ "d": "M7 12h8" })
  );
}, "ListFilterPlus");

// src/icons/ListFilter.ts
import van840 from "vanjs-core";
var ListFilter = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van840.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 6h18" }),
    path({ "d": "M7 12h10" }),
    path({ "d": "M10 18h4" })
  );
}, "ListFilter");

// src/icons/ListMinus.ts
import van841 from "vanjs-core";
var ListMinus = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van841.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M11 12H3" }),
    path({ "d": "M16 6H3" }),
    path({ "d": "M16 18H3" }),
    path({ "d": "M21 12h-6" })
  );
}, "ListMinus");

// src/icons/ListMusic.ts
import van842 from "vanjs-core";
var ListMusic = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van842.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21 15V6" }),
    path({ "d": "M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" }),
    path({ "d": "M12 12H3" }),
    path({ "d": "M16 6H3" }),
    path({ "d": "M12 18H3" })
  );
}, "ListMusic");

// src/icons/ListOrdered.ts
import van843 from "vanjs-core";
var ListOrdered = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van843.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 12h11" }),
    path({ "d": "M10 18h11" }),
    path({ "d": "M10 6h11" }),
    path({ "d": "M4 10h2" }),
    path({ "d": "M4 6h1v4" }),
    path({ "d": "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" })
  );
}, "ListOrdered");

// src/icons/ListPlus.ts
import van844 from "vanjs-core";
var ListPlus = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van844.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M11 12H3" }),
    path({ "d": "M16 6H3" }),
    path({ "d": "M16 18H3" }),
    path({ "d": "M18 9v6" }),
    path({ "d": "M21 12h-6" })
  );
}, "ListPlus");

// src/icons/ListRestart.ts
import van845 from "vanjs-core";
var ListRestart = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van845.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21 6H3" }),
    path({ "d": "M7 12H3" }),
    path({ "d": "M7 18H3" }),
    path({
      "d": "M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14"
    }),
    path({ "d": "M11 10v4h4" })
  );
}, "ListRestart");

// src/icons/ListStart.ts
import van846 from "vanjs-core";
var ListStart = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van846.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 12H3" }),
    path({ "d": "M16 18H3" }),
    path({ "d": "M10 6H3" }),
    path({ "d": "M21 18V8a2 2 0 0 0-2-2h-5" }),
    path({ "d": "m16 8-2-2 2-2" })
  );
}, "ListStart");

// src/icons/ListTodo.ts
import van847 from "vanjs-core";
var ListTodo = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van847.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ "x": "3", "y": "5", width: "6", height: "6", rx: "1" }),
    path({ "d": "m3 17 2 2 4-4" }),
    path({ "d": "M13 6h8" }),
    path({ "d": "M13 12h8" }),
    path({ "d": "M13 18h8" })
  );
}, "ListTodo");

// src/icons/ListTree.ts
import van848 from "vanjs-core";
var ListTree = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van848.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21 12h-8" }),
    path({ "d": "M21 6H8" }),
    path({ "d": "M21 18h-8" }),
    path({ "d": "M3 6v4c0 1.1.9 2 2 2h3" }),
    path({ "d": "M3 10v6c0 1.1.9 2 2 2h3" })
  );
}, "ListTree");

// src/icons/ListVideo.ts
import van849 from "vanjs-core";
var ListVideo = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van849.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 12H3" }),
    path({ "d": "M16 6H3" }),
    path({ "d": "M12 18H3" }),
    path({ "d": "m16 12 5 3-5 3v-6Z" })
  );
}, "ListVideo");

// src/icons/ListX.ts
import van850 from "vanjs-core";
var ListX = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van850.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M11 12H3" }),
    path({ "d": "M16 6H3" }),
    path({ "d": "M16 18H3" }),
    path({ "d": "m19 10-4 4" }),
    path({ "d": "m15 10 4 4" })
  );
}, "ListX");

// src/icons/List.ts
import van851 from "vanjs-core";
var List = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van851.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 12h.01" }),
    path({ "d": "M3 18h.01" }),
    path({ "d": "M3 6h.01" }),
    path({ "d": "M8 12h13" }),
    path({ "d": "M8 18h13" }),
    path({ "d": "M8 6h13" })
  );
}, "List");

// src/icons/LoaderCircle.ts
import van852 from "vanjs-core";
var LoaderCircle = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van852.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21 12a9 9 0 1 1-6.219-8.56" })
  );
}, "LoaderCircle");

// src/icons/LoaderPinwheel.ts
import van853 from "vanjs-core";
var LoaderPinwheel = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van853.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0" }),
    path({ "d": "M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6" }),
    path({ "d": "M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6" }),
    circle({ cx: "12", cy: "12", "r": "10" })
  );
}, "LoaderPinwheel");

// src/icons/Loader.ts
import van854 from "vanjs-core";
var Loader = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van854.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 2v4" }),
    path({ "d": "m16.2 7.8 2.9-2.9" }),
    path({ "d": "M18 12h4" }),
    path({ "d": "m16.2 16.2 2.9 2.9" }),
    path({ "d": "M12 18v4" }),
    path({ "d": "m4.9 19.1 2.9-2.9" }),
    path({ "d": "M2 12h4" }),
    path({ "d": "m4.9 4.9 2.9 2.9" })
  );
}, "Loader");

// src/icons/LocateFixed.ts
import van855 from "vanjs-core";
var LocateFixed = /* @__PURE__ */ __name((props = {}) => {
  const { line, circle } = van855.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "2", x2: "5", y1: "12", y2: "12" }),
    line({ x1: "19", x2: "22", y1: "12", y2: "12" }),
    line({ x1: "12", x2: "12", y1: "2", y2: "5" }),
    line({ x1: "12", x2: "12", y1: "19", y2: "22" }),
    circle({ cx: "12", cy: "12", "r": "7" }),
    circle({ cx: "12", cy: "12", "r": "3" })
  );
}, "LocateFixed");

// src/icons/LocateOff.ts
import van856 from "vanjs-core";
var LocateOff = /* @__PURE__ */ __name((props = {}) => {
  const { line, path } = van856.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "2", x2: "5", y1: "12", y2: "12" }),
    line({ x1: "19", x2: "22", y1: "12", y2: "12" }),
    line({ x1: "12", x2: "12", y1: "2", y2: "5" }),
    line({ x1: "12", x2: "12", y1: "19", y2: "22" }),
    path({
      "d": "M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11"
    }),
    path({
      "d": "M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29"
    }),
    line({ x1: "2", x2: "22", y1: "2", y2: "22" })
  );
}, "LocateOff");

// src/icons/Locate.ts
import van857 from "vanjs-core";
var Locate = /* @__PURE__ */ __name((props = {}) => {
  const { line, circle } = van857.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "2", x2: "5", y1: "12", y2: "12" }),
    line({ x1: "19", x2: "22", y1: "12", y2: "12" }),
    line({ x1: "12", x2: "12", y1: "2", y2: "5" }),
    line({ x1: "12", x2: "12", y1: "19", y2: "22" }),
    circle({ cx: "12", cy: "12", "r": "7" })
  );
}, "Locate");

// src/icons/LockKeyholeOpen.ts
import van858 from "vanjs-core";
var LockKeyholeOpen = /* @__PURE__ */ __name((props = {}) => {
  const { circle, rect, path } = van858.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "16", "r": "1" }),
    rect({ width: "18", height: "12", "x": "3", "y": "10", rx: "2" }),
    path({ "d": "M7 10V7a5 5 0 0 1 9.33-2.5" })
  );
}, "LockKeyholeOpen");

// src/icons/LockKeyhole.ts
import van859 from "vanjs-core";
var LockKeyhole = /* @__PURE__ */ __name((props = {}) => {
  const { circle, rect, path } = van859.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "16", "r": "1" }),
    rect({ "x": "3", "y": "10", width: "18", height: "12", rx: "2" }),
    path({ "d": "M7 10V7a5 5 0 0 1 10 0v3" })
  );
}, "LockKeyhole");

// src/icons/LockOpen.ts
import van860 from "vanjs-core";
var LockOpen = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van860.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "11", "x": "3", "y": "11", rx: "2", ry: "2" }),
    path({ "d": "M7 11V7a5 5 0 0 1 9.9-1" })
  );
}, "LockOpen");

// src/icons/Lock.ts
import van861 from "vanjs-core";
var Lock = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van861.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "11", "x": "3", "y": "11", rx: "2", ry: "2" }),
    path({ "d": "M7 11V7a5 5 0 0 1 10 0v4" })
  );
}, "Lock");

// src/icons/LogIn.ts
import van862 from "vanjs-core";
var LogIn = /* @__PURE__ */ __name((props = {}) => {
  const { path, polyline, line } = van862.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" }),
    polyline({ points: "10 17 15 12 10 7" }),
    line({ x1: "15", x2: "3", y1: "12", y2: "12" })
  );
}, "LogIn");

// src/icons/LogOut.ts
import van863 from "vanjs-core";
var LogOut = /* @__PURE__ */ __name((props = {}) => {
  const { path, polyline, line } = van863.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }),
    polyline({ points: "16 17 21 12 16 7" }),
    line({ x1: "21", x2: "9", y1: "12", y2: "12" })
  );
}, "LogOut");

// src/icons/Logs.ts
import van864 from "vanjs-core";
var Logs = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van864.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M13 12h8" }),
    path({ "d": "M13 18h8" }),
    path({ "d": "M13 6h8" }),
    path({ "d": "M3 12h1" }),
    path({ "d": "M3 18h1" }),
    path({ "d": "M3 6h1" }),
    path({ "d": "M8 12h1" }),
    path({ "d": "M8 18h1" }),
    path({ "d": "M8 6h1" })
  );
}, "Logs");

// src/icons/Lollipop.ts
import van865 from "vanjs-core";
var Lollipop = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van865.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "11", cy: "11", "r": "8" }),
    path({ "d": "m21 21-4.3-4.3" }),
    path({ "d": "M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0" })
  );
}, "Lollipop");

// src/icons/Luggage.ts
import van866 from "vanjs-core";
var Luggage = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van866.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"
    }),
    path({ "d": "M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14" }),
    path({ "d": "M10 20h4" }),
    circle({ cx: "16", cy: "20", "r": "2" }),
    circle({ cx: "8", cy: "20", "r": "2" })
  );
}, "Luggage");

// src/icons/Magnet.ts
import van867 from "vanjs-core";
var Magnet = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van867.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15"
    }),
    path({ "d": "m5 8 4 4" }),
    path({ "d": "m12 15 4 4" })
  );
}, "Magnet");

// src/icons/MailCheck.ts
import van868 from "vanjs-core";
var MailCheck = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van868.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" }),
    path({ "d": "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }),
    path({ "d": "m16 19 2 2 4-4" })
  );
}, "MailCheck");

// src/icons/MailMinus.ts
import van869 from "vanjs-core";
var MailMinus = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van869.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" }),
    path({ "d": "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }),
    path({ "d": "M16 19h6" })
  );
}, "MailMinus");

// src/icons/MailOpen.ts
import van870 from "vanjs-core";
var MailOpen = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van870.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"
    }),
    path({ "d": "m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" })
  );
}, "MailOpen");

// src/icons/MailPlus.ts
import van871 from "vanjs-core";
var MailPlus = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van871.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" }),
    path({ "d": "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }),
    path({ "d": "M19 16v6" }),
    path({ "d": "M16 19h6" })
  );
}, "MailPlus");

// src/icons/MailQuestion.ts
import van872 from "vanjs-core";
var MailQuestion = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van872.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"
    }),
    path({ "d": "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }),
    path({
      "d": "M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"
    }),
    path({ "d": "M20 22v.01" })
  );
}, "MailQuestion");

// src/icons/MailSearch.ts
import van873 from "vanjs-core";
var MailSearch = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van873.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5"
    }),
    path({ "d": "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }),
    path({ "d": "M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" }),
    circle({ cx: "18", cy: "18", "r": "3" }),
    path({ "d": "m22 22-1.5-1.5" })
  );
}, "MailSearch");

// src/icons/MailWarning.ts
import van874 from "vanjs-core";
var MailWarning = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van874.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"
    }),
    path({ "d": "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }),
    path({ "d": "M20 14v4" }),
    path({ "d": "M20 22v.01" })
  );
}, "MailWarning");

// src/icons/MailX.ts
import van875 from "vanjs-core";
var MailX = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van875.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9" }),
    path({ "d": "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }),
    path({ "d": "m17 17 4 4" }),
    path({ "d": "m21 17-4 4" })
  );
}, "MailX");

// src/icons/Mail.ts
import van876 from "vanjs-core";
var Mail = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van876.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "20", height: "16", "x": "2", "y": "4", rx: "2" }),
    path({ "d": "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" })
  );
}, "Mail");

// src/icons/Mailbox.ts
import van877 from "vanjs-core";
var Mailbox = /* @__PURE__ */ __name((props = {}) => {
  const { path, polyline, line } = van877.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"
    }),
    polyline({ points: "15,9 18,9 18,11" }),
    path({ "d": "M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2" }),
    line({ x1: "6", x2: "7", y1: "10", y2: "10" })
  );
}, "Mailbox");

// src/icons/Mails.ts
import van878 from "vanjs-core";
var Mails = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van878.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "16", height: "13", "x": "6", "y": "4", rx: "2" }),
    path({ "d": "m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7" }),
    path({ "d": "M2 8v11c0 1.1.9 2 2 2h14" })
  );
}, "Mails");

// src/icons/MapPinCheckInside.ts
import van879 from "vanjs-core";
var MapPinCheckInside = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van879.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
    }),
    path({ "d": "m9 10 2 2 4-4" })
  );
}, "MapPinCheckInside");

// src/icons/MapPinCheck.ts
import van880 from "vanjs-core";
var MapPinCheck = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van880.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728"
    }),
    circle({ cx: "12", cy: "10", "r": "3" }),
    path({ "d": "m16 18 2 2 4-4" })
  );
}, "MapPinCheck");

// src/icons/MapPinHouse.ts
import van881 from "vanjs-core";
var MapPinHouse = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van881.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z"
    }),
    path({
      "d": "M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2"
    }),
    path({ "d": "M18 22v-3" }),
    circle({ cx: "10", cy: "10", "r": "3" })
  );
}, "MapPinHouse");

// src/icons/MapPinMinusInside.ts
import van882 from "vanjs-core";
var MapPinMinusInside = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van882.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
    }),
    path({ "d": "M9 10h6" })
  );
}, "MapPinMinusInside");

// src/icons/MapPinMinus.ts
import van883 from "vanjs-core";
var MapPinMinus = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van883.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M18.977 14C19.6 12.701 20 11.343 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738"
    }),
    circle({ cx: "12", cy: "10", "r": "3" }),
    path({ "d": "M16 18h6" })
  );
}, "MapPinMinus");

// src/icons/MapPinOff.ts
import van884 from "vanjs-core";
var MapPinOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van884.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12.75 7.09a3 3 0 0 1 2.16 2.16" }),
    path({
      "d": "M17.072 17.072c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568"
    }),
    path({ "d": "m2 2 20 20" }),
    path({ "d": "M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533" }),
    path({ "d": "M9.13 9.13a3 3 0 0 0 3.74 3.74" })
  );
}, "MapPinOff");

// src/icons/MapPinPlusInside.ts
import van885 from "vanjs-core";
var MapPinPlusInside = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van885.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
    }),
    path({ "d": "M12 7v6" }),
    path({ "d": "M9 10h6" })
  );
}, "MapPinPlusInside");

// src/icons/MapPinPlus.ts
import van886 from "vanjs-core";
var MapPinPlus = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van886.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738"
    }),
    circle({ cx: "12", cy: "10", "r": "3" }),
    path({ "d": "M16 18h6" }),
    path({ "d": "M19 15v6" })
  );
}, "MapPinPlus");

// src/icons/MapPinXInside.ts
import van887 from "vanjs-core";
var MapPinXInside = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van887.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
    }),
    path({ "d": "m14.5 7.5-5 5" }),
    path({ "d": "m9.5 7.5 5 5" })
  );
}, "MapPinXInside");

// src/icons/MapPinX.ts
import van888 from "vanjs-core";
var MapPinX = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van888.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M19.752 11.901A7.78 7.78 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 19 19 0 0 0 .09-.077"
    }),
    circle({ cx: "12", cy: "10", "r": "3" }),
    path({ "d": "m21.5 15.5-5 5" }),
    path({ "d": "m21.5 20.5-5-5" })
  );
}, "MapPinX");

// src/icons/MapPin.ts
import van889 from "vanjs-core";
var MapPin = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van889.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
    }),
    circle({ cx: "12", cy: "10", "r": "3" })
  );
}, "MapPin");

// src/icons/MapPinned.ts
import van890 from "vanjs-core";
var MapPinned = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van890.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"
    }),
    circle({ cx: "12", cy: "8", "r": "2" }),
    path({
      "d": "M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"
    })
  );
}, "MapPinned");

// src/icons/MapPlus.ts
import van891 from "vanjs-core";
var MapPlus = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van891.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V12"
    }),
    path({ "d": "M15 5.764V12" }),
    path({ "d": "M18 15v6" }),
    path({ "d": "M21 18h-6" }),
    path({ "d": "M9 3.236v15" })
  );
}, "MapPlus");

// src/icons/Map.ts
import van892 from "vanjs-core";
var Map = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van892.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"
    }),
    path({ "d": "M15 5.764v15" }),
    path({ "d": "M9 3.236v15" })
  );
}, "Map");

// src/icons/MarsStroke.ts
import van893 from "vanjs-core";
var MarsStroke = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van893.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m14 6 4 4" }),
    path({ "d": "M17 3h4v4" }),
    path({ "d": "m21 3-7.75 7.75" }),
    circle({ cx: "9", cy: "15", "r": "6" })
  );
}, "MarsStroke");

// src/icons/Mars.ts
import van894 from "vanjs-core";
var Mars = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van894.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 3h5v5" }),
    path({ "d": "m21 3-6.75 6.75" }),
    circle({ cx: "10", cy: "14", "r": "6" })
  );
}, "Mars");

// src/icons/Martini.ts
import van895 from "vanjs-core";
var Martini = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van895.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 22h8" }),
    path({ "d": "M12 11v11" }),
    path({ "d": "m19 3-7 8-7-8Z" })
  );
}, "Martini");

// src/icons/Maximize2.ts
import van896 from "vanjs-core";
var Maximize2 = /* @__PURE__ */ __name((props = {}) => {
  const { polyline, line } = van896.tags(svgNamespace);
  return LucideIcon(
    props,
    polyline({ points: "15 3 21 3 21 9" }),
    polyline({ points: "9 21 3 21 3 15" }),
    line({ x1: "21", x2: "14", y1: "3", y2: "10" }),
    line({ x1: "3", x2: "10", y1: "21", y2: "14" })
  );
}, "Maximize2");

// src/icons/Maximize.ts
import van897 from "vanjs-core";
var Maximize = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van897.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 3H5a2 2 0 0 0-2 2v3" }),
    path({ "d": "M21 8V5a2 2 0 0 0-2-2h-3" }),
    path({ "d": "M3 16v3a2 2 0 0 0 2 2h3" }),
    path({ "d": "M16 21h3a2 2 0 0 0 2-2v-3" })
  );
}, "Maximize");

// src/icons/Medal.ts
import van898 from "vanjs-core";
var Medal = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van898.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"
    }),
    path({ "d": "M11 12 5.12 2.2" }),
    path({ "d": "m13 12 5.88-9.8" }),
    path({ "d": "M8 7h8" }),
    circle({ cx: "12", cy: "17", "r": "5" }),
    path({ "d": "M12 18v-2h-.5" })
  );
}, "Medal");

// src/icons/MegaphoneOff.ts
import van899 from "vanjs-core";
var MegaphoneOff = /* @__PURE__ */ __name((props = {}) => {
  const { path, line } = van899.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M9.26 9.26 3 11v3l14.14 3.14" }),
    path({ "d": "M21 15.34V6l-7.31 2.03" }),
    path({ "d": "M11.6 16.8a3 3 0 1 1-5.8-1.6" }),
    line({ x1: "2", x2: "22", y1: "2", y2: "22" })
  );
}, "MegaphoneOff");

// src/icons/Megaphone.ts
import van900 from "vanjs-core";
var Megaphone = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van900.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m3 11 18-5v12L3 14v-3z" }),
    path({ "d": "M11.6 16.8a3 3 0 1 1-5.8-1.6" })
  );
}, "Megaphone");

// src/icons/Meh.ts
import van901 from "vanjs-core";
var Meh = /* @__PURE__ */ __name((props = {}) => {
  const { circle, line } = van901.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    line({ x1: "8", x2: "16", y1: "15", y2: "15" }),
    line({ x1: "9", x2: "9.01", y1: "9", y2: "9" }),
    line({ x1: "15", x2: "15.01", y1: "9", y2: "9" })
  );
}, "Meh");

// src/icons/MemoryStick.ts
import van902 from "vanjs-core";
var MemoryStick = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van902.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M6 19v-3" }),
    path({ "d": "M10 19v-3" }),
    path({ "d": "M14 19v-3" }),
    path({ "d": "M18 19v-3" }),
    path({ "d": "M8 11V9" }),
    path({ "d": "M16 11V9" }),
    path({ "d": "M12 11V9" }),
    path({ "d": "M2 15h20" }),
    path({
      "d": "M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z"
    })
  );
}, "MemoryStick");

// src/icons/Menu.ts
import van903 from "vanjs-core";
var Menu = /* @__PURE__ */ __name((props = {}) => {
  const { line } = van903.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "4", x2: "20", y1: "12", y2: "12" }),
    line({ x1: "4", x2: "20", y1: "6", y2: "6" }),
    line({ x1: "4", x2: "20", y1: "18", y2: "18" })
  );
}, "Menu");

// src/icons/Merge.ts
import van904 from "vanjs-core";
var Merge = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van904.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m8 6 4-4 4 4" }),
    path({ "d": "M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" }),
    path({ "d": "m20 22-5-5" })
  );
}, "Merge");

// src/icons/MessageCircleCode.ts
import van905 from "vanjs-core";
var MessageCircleCode = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van905.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 9.5 8 12l2 2.5" }),
    path({ "d": "m14 9.5 2 2.5-2 2.5" }),
    path({ "d": "M7.9 20A9 9 0 1 0 4 16.1L2 22z" })
  );
}, "MessageCircleCode");

// src/icons/MessageCircleDashed.ts
import van906 from "vanjs-core";
var MessageCircleDashed = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van906.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1" }),
    path({ "d": "M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1" }),
    path({ "d": "M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5" }),
    path({ "d": "M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1" }),
    path({ "d": "M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1" }),
    path({ "d": "M3.5 17.5 2 22l4.5-1.5" }),
    path({ "d": "M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5" }),
    path({ "d": "M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1" })
  );
}, "MessageCircleDashed");

// src/icons/MessageCircleHeart.ts
import van907 from "vanjs-core";
var MessageCircleHeart = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van907.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }),
    path({
      "d": "M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7"
    })
  );
}, "MessageCircleHeart");

// src/icons/MessageCircleMore.ts
import van908 from "vanjs-core";
var MessageCircleMore = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van908.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }),
    path({ "d": "M8 12h.01" }),
    path({ "d": "M12 12h.01" }),
    path({ "d": "M16 12h.01" })
  );
}, "MessageCircleMore");

// src/icons/MessageCircleOff.ts
import van909 from "vanjs-core";
var MessageCircleOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van909.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M20.5 14.9A9 9 0 0 0 9.1 3.5" }),
    path({ "d": "m2 2 20 20" }),
    path({
      "d": "M5.6 5.6C3 8.3 2.2 12.5 4 16l-2 6 6-2c3.4 1.8 7.6 1.1 10.3-1.7"
    })
  );
}, "MessageCircleOff");

// src/icons/MessageCirclePlus.ts
import van910 from "vanjs-core";
var MessageCirclePlus = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van910.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }),
    path({ "d": "M8 12h8" }),
    path({ "d": "M12 8v8" })
  );
}, "MessageCirclePlus");

// src/icons/MessageCircleQuestion.ts
import van911 from "vanjs-core";
var MessageCircleQuestion = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van911.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }),
    path({ "d": "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }),
    path({ "d": "M12 17h.01" })
  );
}, "MessageCircleQuestion");

// src/icons/MessageCircleReply.ts
import van912 from "vanjs-core";
var MessageCircleReply = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van912.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }),
    path({ "d": "m10 15-3-3 3-3" }),
    path({ "d": "M7 12h7a2 2 0 0 1 2 2v1" })
  );
}, "MessageCircleReply");

// src/icons/MessageCircleWarning.ts
import van913 from "vanjs-core";
var MessageCircleWarning = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van913.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }),
    path({ "d": "M12 8v4" }),
    path({ "d": "M12 16h.01" })
  );
}, "MessageCircleWarning");

// src/icons/MessageCircleX.ts
import van914 from "vanjs-core";
var MessageCircleX = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van914.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }),
    path({ "d": "m15 9-6 6" }),
    path({ "d": "m9 9 6 6" })
  );
}, "MessageCircleX");

// src/icons/MessageCircle.ts
import van915 from "vanjs-core";
var MessageCircle = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van915.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" })
  );
}, "MessageCircle");

// src/icons/MessageSquareCode.ts
import van916 from "vanjs-core";
var MessageSquareCode = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van916.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 7.5 8 10l2 2.5" }),
    path({ "d": "m14 7.5 2 2.5-2 2.5" }),
    path({
      "d": "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
    })
  );
}, "MessageSquareCode");

// src/icons/MessageSquareDashed.ts
import van917 from "vanjs-core";
var MessageSquareDashed = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van917.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 17H7l-4 4v-7" }),
    path({ "d": "M14 17h1" }),
    path({ "d": "M14 3h1" }),
    path({ "d": "M19 3a2 2 0 0 1 2 2" }),
    path({ "d": "M21 14v1a2 2 0 0 1-2 2" }),
    path({ "d": "M21 9v1" }),
    path({ "d": "M3 9v1" }),
    path({ "d": "M5 3a2 2 0 0 0-2 2" }),
    path({ "d": "M9 3h1" })
  );
}, "MessageSquareDashed");

// src/icons/MessageSquareDiff.ts
import van918 from "vanjs-core";
var MessageSquareDiff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van918.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"
    }),
    path({ "d": "M9 10h6" }),
    path({ "d": "M12 7v6" }),
    path({ "d": "M9 17h6" })
  );
}, "MessageSquareDiff");

// src/icons/MessageSquareDot.ts
import van919 from "vanjs-core";
var MessageSquareDot = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van919.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7" }),
    circle({ cx: "18", cy: "6", "r": "3" })
  );
}, "MessageSquareDot");

// src/icons/MessageSquareHeart.ts
import van920 from "vanjs-core";
var MessageSquareHeart = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van920.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
    }),
    path({
      "d": "M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8"
    })
  );
}, "MessageSquareHeart");

// src/icons/MessageSquareLock.ts
import van921 from "vanjs-core";
var MessageSquareLock = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van921.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M19 15v-2a2 2 0 1 0-4 0v2" }),
    path({ "d": "M9 17H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3.5" }),
    rect({ "x": "13", "y": "15", width: "8", height: "5", rx: "1" })
  );
}, "MessageSquareLock");

// src/icons/MessageSquareMore.ts
import van922 from "vanjs-core";
var MessageSquareMore = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van922.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
    }),
    path({ "d": "M8 10h.01" }),
    path({ "d": "M12 10h.01" }),
    path({ "d": "M16 10h.01" })
  );
}, "MessageSquareMore");

// src/icons/MessageSquareOff.ts
import van923 from "vanjs-core";
var MessageSquareOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van923.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21 15V5a2 2 0 0 0-2-2H9" }),
    path({ "d": "m2 2 20 20" }),
    path({ "d": "M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10" })
  );
}, "MessageSquareOff");

// src/icons/MessageSquarePlus.ts
import van924 from "vanjs-core";
var MessageSquarePlus = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van924.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
    }),
    path({ "d": "M12 7v6" }),
    path({ "d": "M9 10h6" })
  );
}, "MessageSquarePlus");

// src/icons/MessageSquareQuote.ts
import van925 from "vanjs-core";
var MessageSquareQuote = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van925.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
    }),
    path({ "d": "M8 12a2 2 0 0 0 2-2V8H8" }),
    path({ "d": "M14 12a2 2 0 0 0 2-2V8h-2" })
  );
}, "MessageSquareQuote");

// src/icons/MessageSquareReply.ts
import van926 from "vanjs-core";
var MessageSquareReply = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van926.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
    }),
    path({ "d": "m10 7-3 3 3 3" }),
    path({ "d": "M17 13v-1a2 2 0 0 0-2-2H7" })
  );
}, "MessageSquareReply");

// src/icons/MessageSquareShare.ts
import van927 from "vanjs-core";
var MessageSquareShare = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van927.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7" }),
    path({ "d": "M16 3h5v5" }),
    path({ "d": "m16 8 5-5" })
  );
}, "MessageSquareShare");

// src/icons/MessageSquareText.ts
import van928 from "vanjs-core";
var MessageSquareText = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van928.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
    }),
    path({ "d": "M13 8H7" }),
    path({ "d": "M17 12H7" })
  );
}, "MessageSquareText");

// src/icons/MessageSquareWarning.ts
import van929 from "vanjs-core";
var MessageSquareWarning = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van929.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
    }),
    path({ "d": "M12 7v2" }),
    path({ "d": "M12 13h.01" })
  );
}, "MessageSquareWarning");

// src/icons/MessageSquareX.ts
import van930 from "vanjs-core";
var MessageSquareX = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van930.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
    }),
    path({ "d": "m14.5 7.5-5 5" }),
    path({ "d": "m9.5 7.5 5 5" })
  );
}, "MessageSquareX");

// src/icons/MessageSquare.ts
import van931 from "vanjs-core";
var MessageSquare = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van931.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
    })
  );
}, "MessageSquare");

// src/icons/MessagesSquare.ts
import van932 from "vanjs-core";
var MessagesSquare = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van932.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"
    }),
    path({ "d": "M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" })
  );
}, "MessagesSquare");

// src/icons/MicOff.ts
import van933 from "vanjs-core";
var MicOff = /* @__PURE__ */ __name((props = {}) => {
  const { line, path } = van933.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "2", x2: "22", y1: "2", y2: "22" }),
    path({ "d": "M18.89 13.23A7.12 7.12 0 0 0 19 12v-2" }),
    path({ "d": "M5 10v2a7 7 0 0 0 12 5" }),
    path({ "d": "M15 9.34V5a3 3 0 0 0-5.68-1.33" }),
    path({ "d": "M9 9v3a3 3 0 0 0 5.12 2.12" }),
    line({ x1: "12", x2: "12", y1: "19", y2: "22" })
  );
}, "MicOff");

// src/icons/MicVocal.ts
import van934 from "vanjs-core";
var MicVocal = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van934.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12"
    }),
    path({
      "d": "M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5"
    }),
    circle({ cx: "16", cy: "7", "r": "5" })
  );
}, "MicVocal");

// src/icons/Mic.ts
import van935 from "vanjs-core";
var Mic = /* @__PURE__ */ __name((props = {}) => {
  const { path, line } = van935.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" }),
    path({ "d": "M19 10v2a7 7 0 0 1-14 0v-2" }),
    line({ x1: "12", x2: "12", y1: "19", y2: "22" })
  );
}, "Mic");

// src/icons/Microchip.ts
import van936 from "vanjs-core";
var Microchip = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van936.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M18 12h2" }),
    path({ "d": "M18 16h2" }),
    path({ "d": "M18 20h2" }),
    path({ "d": "M18 4h2" }),
    path({ "d": "M18 8h2" }),
    path({ "d": "M4 12h2" }),
    path({ "d": "M4 16h2" }),
    path({ "d": "M4 20h2" }),
    path({ "d": "M4 4h2" }),
    path({ "d": "M4 8h2" }),
    path({
      "d": "M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.5c-.276 0-.494.227-.562.495a2 2 0 0 1-3.876 0C9.994 2.227 9.776 2 9.5 2z"
    })
  );
}, "Microchip");

// src/icons/Microscope.ts
import van937 from "vanjs-core";
var Microscope = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van937.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M6 18h8" }),
    path({ "d": "M3 22h18" }),
    path({ "d": "M14 22a7 7 0 1 0 0-14h-1" }),
    path({ "d": "M9 14h2" }),
    path({ "d": "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" }),
    path({ "d": "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" })
  );
}, "Microscope");

// src/icons/Microwave.ts
import van938 from "vanjs-core";
var Microwave = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van938.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "20", height: "15", "x": "2", "y": "4", rx: "2" }),
    rect({ width: "8", height: "7", "x": "6", "y": "8", rx: "1" }),
    path({ "d": "M18 8v7" }),
    path({ "d": "M6 19v2" }),
    path({ "d": "M18 19v2" })
  );
}, "Microwave");

// src/icons/Milestone.ts
import van939 from "vanjs-core";
var Milestone = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van939.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 13v8" }),
    path({ "d": "M12 3v3" }),
    path({
      "d": "M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z"
    })
  );
}, "Milestone");

// src/icons/MilkOff.ts
import van940 from "vanjs-core";
var MilkOff = /* @__PURE__ */ __name((props = {}) => {
  const { path, line } = van940.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 2h8" }),
    path({
      "d": "M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3"
    }),
    path({ "d": "M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435" }),
    line({ x1: "2", x2: "22", y1: "2", y2: "22" })
  );
}, "MilkOff");

// src/icons/Milk.ts
import van941 from "vanjs-core";
var Milk = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van941.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 2h8" }),
    path({
      "d": "M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2"
    }),
    path({ "d": "M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0" })
  );
}, "Milk");

// src/icons/Minimize2.ts
import van942 from "vanjs-core";
var Minimize2 = /* @__PURE__ */ __name((props = {}) => {
  const { polyline, line } = van942.tags(svgNamespace);
  return LucideIcon(
    props,
    polyline({ points: "4 14 10 14 10 20" }),
    polyline({ points: "20 10 14 10 14 4" }),
    line({ x1: "14", x2: "21", y1: "10", y2: "3" }),
    line({ x1: "3", x2: "10", y1: "21", y2: "14" })
  );
}, "Minimize2");

// src/icons/Minimize.ts
import van943 from "vanjs-core";
var Minimize = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van943.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 3v3a2 2 0 0 1-2 2H3" }),
    path({ "d": "M21 8h-3a2 2 0 0 1-2-2V3" }),
    path({ "d": "M3 16h3a2 2 0 0 1 2 2v3" }),
    path({ "d": "M16 21v-3a2 2 0 0 1 2-2h3" })
  );
}, "Minimize");

// src/icons/Minus.ts
import van944 from "vanjs-core";
var Minus = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van944.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M5 12h14" })
  );
}, "Minus");

// src/icons/MonitorCheck.ts
import van945 from "vanjs-core";
var MonitorCheck = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van945.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m9 10 2 2 4-4" }),
    rect({ width: "20", height: "14", "x": "2", "y": "3", rx: "2" }),
    path({ "d": "M12 17v4" }),
    path({ "d": "M8 21h8" })
  );
}, "MonitorCheck");

// src/icons/MonitorCog.ts
import van946 from "vanjs-core";
var MonitorCog = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van946.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 17v4" }),
    path({ "d": "m15.2 4.9-.9-.4" }),
    path({ "d": "m15.2 7.1-.9.4" }),
    path({ "d": "m16.9 3.2-.4-.9" }),
    path({ "d": "m16.9 8.8-.4.9" }),
    path({ "d": "m19.5 2.3-.4.9" }),
    path({ "d": "m19.5 9.7-.4-.9" }),
    path({ "d": "m21.7 4.5-.9.4" }),
    path({ "d": "m21.7 7.5-.9-.4" }),
    path({ "d": "M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" }),
    path({ "d": "M8 21h8" }),
    circle({ cx: "18", cy: "6", "r": "3" })
  );
}, "MonitorCog");

// src/icons/MonitorDot.ts
import van947 from "vanjs-core";
var MonitorDot = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van947.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "19", cy: "6", "r": "3" }),
    path({ "d": "M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9" }),
    path({ "d": "M12 17v4" }),
    path({ "d": "M8 21h8" })
  );
}, "MonitorDot");

// src/icons/MonitorDown.ts
import van948 from "vanjs-core";
var MonitorDown = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van948.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 13V7" }),
    path({ "d": "m15 10-3 3-3-3" }),
    rect({ width: "20", height: "14", "x": "2", "y": "3", rx: "2" }),
    path({ "d": "M12 17v4" }),
    path({ "d": "M8 21h8" })
  );
}, "MonitorDown");

// src/icons/MonitorOff.ts
import van949 from "vanjs-core";
var MonitorOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van949.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2" }),
    path({ "d": "M22 15V5a2 2 0 0 0-2-2H9" }),
    path({ "d": "M8 21h8" }),
    path({ "d": "M12 17v4" }),
    path({ "d": "m2 2 20 20" })
  );
}, "MonitorOff");

// src/icons/MonitorPause.ts
import van950 from "vanjs-core";
var MonitorPause = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van950.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 13V7" }),
    path({ "d": "M14 13V7" }),
    rect({ width: "20", height: "14", "x": "2", "y": "3", rx: "2" }),
    path({ "d": "M12 17v4" }),
    path({ "d": "M8 21h8" })
  );
}, "MonitorPause");

// src/icons/MonitorPlay.ts
import van951 from "vanjs-core";
var MonitorPlay = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van951.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z"
    }),
    path({ "d": "M12 17v4" }),
    path({ "d": "M8 21h8" }),
    rect({ "x": "2", "y": "3", width: "20", height: "14", rx: "2" })
  );
}, "MonitorPlay");

// src/icons/MonitorSmartphone.ts
import van952 from "vanjs-core";
var MonitorSmartphone = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van952.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" }),
    path({ "d": "M10 19v-3.96 3.15" }),
    path({ "d": "M7 19h5" }),
    rect({ width: "6", height: "10", "x": "16", "y": "12", rx: "2" })
  );
}, "MonitorSmartphone");

// src/icons/MonitorSpeaker.ts
import van953 from "vanjs-core";
var MonitorSpeaker = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect, circle } = van953.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M5.5 20H8" }),
    path({ "d": "M17 9h.01" }),
    rect({ width: "10", height: "16", "x": "12", "y": "4", rx: "2" }),
    path({ "d": "M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4" }),
    circle({ cx: "17", cy: "15", "r": "1" })
  );
}, "MonitorSpeaker");

// src/icons/MonitorStop.ts
import van954 from "vanjs-core";
var MonitorStop = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van954.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 17v4" }),
    path({ "d": "M8 21h8" }),
    rect({ "x": "2", "y": "3", width: "20", height: "14", rx: "2" }),
    rect({ "x": "9", "y": "7", width: "6", height: "6", rx: "1" })
  );
}, "MonitorStop");

// src/icons/MonitorUp.ts
import van955 from "vanjs-core";
var MonitorUp = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van955.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m9 10 3-3 3 3" }),
    path({ "d": "M12 13V7" }),
    rect({ width: "20", height: "14", "x": "2", "y": "3", rx: "2" }),
    path({ "d": "M12 17v4" }),
    path({ "d": "M8 21h8" })
  );
}, "MonitorUp");

// src/icons/MonitorX.ts
import van956 from "vanjs-core";
var MonitorX = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van956.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m14.5 12.5-5-5" }),
    path({ "d": "m9.5 12.5 5-5" }),
    rect({ width: "20", height: "14", "x": "2", "y": "3", rx: "2" }),
    path({ "d": "M12 17v4" }),
    path({ "d": "M8 21h8" })
  );
}, "MonitorX");

// src/icons/Monitor.ts
import van957 from "vanjs-core";
var Monitor = /* @__PURE__ */ __name((props = {}) => {
  const { rect, line } = van957.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "20", height: "14", "x": "2", "y": "3", rx: "2" }),
    line({ x1: "8", x2: "16", y1: "21", y2: "21" }),
    line({ x1: "12", x2: "12", y1: "17", y2: "21" })
  );
}, "Monitor");

// src/icons/MoonStar.ts
import van958 from "vanjs-core";
var MoonStar = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van958.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9" }),
    path({ "d": "M20 3v4" }),
    path({ "d": "M22 5h-4" })
  );
}, "MoonStar");

// src/icons/Moon.ts
import van959 from "vanjs-core";
var Moon = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van959.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" })
  );
}, "Moon");

// src/icons/MountainSnow.ts
import van960 from "vanjs-core";
var MountainSnow = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van960.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m8 3 4 8 5-5 5 15H2L8 3z" }),
    path({
      "d": "M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"
    })
  );
}, "MountainSnow");

// src/icons/Mountain.ts
import van961 from "vanjs-core";
var Mountain = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van961.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m8 3 4 8 5-5 5 15H2L8 3z" })
  );
}, "Mountain");

// src/icons/MouseOff.ts
import van962 from "vanjs-core";
var MouseOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van962.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 6v.343" }),
    path({ "d": "M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218" }),
    path({ "d": "M19 13.343V9A7 7 0 0 0 8.56 2.902" }),
    path({ "d": "M22 22 2 2" })
  );
}, "MouseOff");

// src/icons/MousePointer2.ts
import van963 from "vanjs-core";
var MousePointer2 = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van963.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"
    })
  );
}, "MousePointer2");

// src/icons/MousePointerBan.ts
import van964 from "vanjs-core";
var MousePointerBan = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van964.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M2.034 2.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033z"
    }),
    circle({ cx: "16", cy: "16", "r": "6" }),
    path({ "d": "m11.8 11.8 8.4 8.4" })
  );
}, "MousePointerBan");

// src/icons/MousePointerClick.ts
import van965 from "vanjs-core";
var MousePointerClick = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van965.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M14 4.1 12 6" }),
    path({ "d": "m5.1 8-2.9-.8" }),
    path({ "d": "m6 12-1.9 2" }),
    path({ "d": "M7.2 2.2 8 5.1" }),
    path({
      "d": "M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"
    })
  );
}, "MousePointerClick");

// src/icons/MousePointer.ts
import van966 from "vanjs-core";
var MousePointer = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van966.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12.586 12.586 19 19" }),
    path({
      "d": "M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"
    })
  );
}, "MousePointer");

// src/icons/Mouse.ts
import van967 from "vanjs-core";
var Mouse = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van967.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ "x": "5", "y": "2", width: "14", height: "20", rx: "7" }),
    path({ "d": "M12 6v4" })
  );
}, "Mouse");

// src/icons/Move3d.ts
import van968 from "vanjs-core";
var Move3d = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van968.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M5 3v16h16" }),
    path({ "d": "m5 19 6-6" }),
    path({ "d": "m2 6 3-3 3 3" }),
    path({ "d": "m18 16 3 3-3 3" })
  );
}, "Move3d");

// src/icons/MoveDiagonal2.ts
import van969 from "vanjs-core";
var MoveDiagonal2 = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van969.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M19 13v6h-6" }),
    path({ "d": "M5 11V5h6" }),
    path({ "d": "m5 5 14 14" })
  );
}, "MoveDiagonal2");

// src/icons/MoveDiagonal.ts
import van970 from "vanjs-core";
var MoveDiagonal = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van970.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M11 19H5v-6" }),
    path({ "d": "M13 5h6v6" }),
    path({ "d": "M19 5 5 19" })
  );
}, "MoveDiagonal");

// src/icons/MoveDownLeft.ts
import van971 from "vanjs-core";
var MoveDownLeft = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van971.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M11 19H5V13" }),
    path({ "d": "M19 5L5 19" })
  );
}, "MoveDownLeft");

// src/icons/MoveDownRight.ts
import van972 from "vanjs-core";
var MoveDownRight = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van972.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M19 13V19H13" }),
    path({ "d": "M5 5L19 19" })
  );
}, "MoveDownRight");

// src/icons/MoveDown.ts
import van973 from "vanjs-core";
var MoveDown = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van973.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 18L12 22L16 18" }),
    path({ "d": "M12 2V22" })
  );
}, "MoveDown");

// src/icons/MoveHorizontal.ts
import van974 from "vanjs-core";
var MoveHorizontal = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van974.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m18 8 4 4-4 4" }),
    path({ "d": "M2 12h20" }),
    path({ "d": "m6 8-4 4 4 4" })
  );
}, "MoveHorizontal");

// src/icons/MoveLeft.ts
import van975 from "vanjs-core";
var MoveLeft = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van975.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M6 8L2 12L6 16" }),
    path({ "d": "M2 12H22" })
  );
}, "MoveLeft");

// src/icons/MoveRight.ts
import van976 from "vanjs-core";
var MoveRight = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van976.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M18 8L22 12L18 16" }),
    path({ "d": "M2 12H22" })
  );
}, "MoveRight");

// src/icons/MoveUpLeft.ts
import van977 from "vanjs-core";
var MoveUpLeft = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van977.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M5 11V5H11" }),
    path({ "d": "M5 5L19 19" })
  );
}, "MoveUpLeft");

// src/icons/MoveUpRight.ts
import van978 from "vanjs-core";
var MoveUpRight = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van978.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M13 5H19V11" }),
    path({ "d": "M19 5L5 19" })
  );
}, "MoveUpRight");

// src/icons/MoveUp.ts
import van979 from "vanjs-core";
var MoveUp = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van979.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 6L12 2L16 6" }),
    path({ "d": "M12 2V22" })
  );
}, "MoveUp");

// src/icons/MoveVertical.ts
import van980 from "vanjs-core";
var MoveVertical = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van980.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 2v20" }),
    path({ "d": "m8 18 4 4 4-4" }),
    path({ "d": "m8 6 4-4 4 4" })
  );
}, "MoveVertical");

// src/icons/Move.ts
import van981 from "vanjs-core";
var Move = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van981.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 2v20" }),
    path({ "d": "m15 19-3 3-3-3" }),
    path({ "d": "m19 9 3 3-3 3" }),
    path({ "d": "M2 12h20" }),
    path({ "d": "m5 9-3 3 3 3" }),
    path({ "d": "m9 5 3-3 3 3" })
  );
}, "Move");

// src/icons/Music2.ts
import van982 from "vanjs-core";
var Music2 = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van982.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "8", cy: "18", "r": "4" }),
    path({ "d": "M12 18V2l7 4" })
  );
}, "Music2");

// src/icons/Music3.ts
import van983 from "vanjs-core";
var Music3 = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van983.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "18", "r": "4" }),
    path({ "d": "M16 18V2" })
  );
}, "Music3");

// src/icons/Music4.ts
import van984 from "vanjs-core";
var Music4 = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van984.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M9 18V5l12-2v13" }),
    path({ "d": "m9 9 12-2" }),
    circle({ cx: "6", cy: "18", "r": "3" }),
    circle({ cx: "18", cy: "16", "r": "3" })
  );
}, "Music4");

// src/icons/Music.ts
import van985 from "vanjs-core";
var Music = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van985.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M9 18V5l12-2v13" }),
    circle({ cx: "6", cy: "18", "r": "3" }),
    circle({ cx: "18", cy: "16", "r": "3" })
  );
}, "Music");

// src/icons/Navigation2Off.ts
import van986 from "vanjs-core";
var Navigation2Off = /* @__PURE__ */ __name((props = {}) => {
  const { path, line } = van986.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M9.31 9.31 5 21l7-4 7 4-1.17-3.17" }),
    path({ "d": "M14.53 8.88 12 2l-1.17 3.17" }),
    line({ x1: "2", x2: "22", y1: "2", y2: "22" })
  );
}, "Navigation2Off");

// src/icons/Navigation2.ts
import van987 from "vanjs-core";
var Navigation2 = /* @__PURE__ */ __name((props = {}) => {
  const { polygon } = van987.tags(svgNamespace);
  return LucideIcon(
    props,
    polygon({ points: "12 2 19 21 12 17 5 21 12 2" })
  );
}, "Navigation2");

// src/icons/NavigationOff.ts
import van988 from "vanjs-core";
var NavigationOff = /* @__PURE__ */ __name((props = {}) => {
  const { path, line } = van988.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8.43 8.43 3 11l8 2 2 8 2.57-5.43" }),
    path({ "d": "M17.39 11.73 22 2l-9.73 4.61" }),
    line({ x1: "2", x2: "22", y1: "2", y2: "22" })
  );
}, "NavigationOff");

// src/icons/Navigation.ts
import van989 from "vanjs-core";
var Navigation = /* @__PURE__ */ __name((props = {}) => {
  const { polygon } = van989.tags(svgNamespace);
  return LucideIcon(
    props,
    polygon({ points: "3 11 22 2 13 21 11 13 3 11" })
  );
}, "Navigation");

// src/icons/Network.ts
import van990 from "vanjs-core";
var Network = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van990.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ "x": "16", "y": "16", width: "6", height: "6", rx: "1" }),
    rect({ "x": "2", "y": "16", width: "6", height: "6", rx: "1" }),
    rect({ "x": "9", "y": "2", width: "6", height: "6", rx: "1" }),
    path({ "d": "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" }),
    path({ "d": "M12 12V8" })
  );
}, "Network");

// src/icons/Newspaper.ts
import van991 from "vanjs-core";
var Newspaper = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van991.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"
    }),
    path({ "d": "M18 14h-8" }),
    path({ "d": "M15 18h-5" }),
    path({ "d": "M10 6h8v4h-8V6Z" })
  );
}, "Newspaper");

// src/icons/Nfc.ts
import van992 from "vanjs-core";
var Nfc = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van992.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M6 8.32a7.43 7.43 0 0 1 0 7.36" }),
    path({ "d": "M9.46 6.21a11.76 11.76 0 0 1 0 11.58" }),
    path({ "d": "M12.91 4.1a15.91 15.91 0 0 1 .01 15.8" }),
    path({ "d": "M16.37 2a20.16 20.16 0 0 1 0 20" })
  );
}, "Nfc");

// src/icons/NonBinary.ts
import van993 from "vanjs-core";
var NonBinary = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van993.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 2v10" }),
    path({ "d": "m9 4 6 4" }),
    path({ "d": "m9 8 6-4" }),
    circle({ cx: "12", cy: "17", "r": "5" })
  );
}, "NonBinary");

// src/icons/NotebookPen.ts
import van994 from "vanjs-core";
var NotebookPen = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van994.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"
    }),
    path({ "d": "M2 6h4" }),
    path({ "d": "M2 10h4" }),
    path({ "d": "M2 14h4" }),
    path({ "d": "M2 18h4" }),
    path({
      "d": "M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
    })
  );
}, "NotebookPen");

// src/icons/NotebookTabs.ts
import van995 from "vanjs-core";
var NotebookTabs = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van995.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 6h4" }),
    path({ "d": "M2 10h4" }),
    path({ "d": "M2 14h4" }),
    path({ "d": "M2 18h4" }),
    rect({ width: "16", height: "20", "x": "4", "y": "2", rx: "2" }),
    path({ "d": "M15 2v20" }),
    path({ "d": "M15 7h5" }),
    path({ "d": "M15 12h5" }),
    path({ "d": "M15 17h5" })
  );
}, "NotebookTabs");

// src/icons/NotebookText.ts
import van996 from "vanjs-core";
var NotebookText = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van996.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 6h4" }),
    path({ "d": "M2 10h4" }),
    path({ "d": "M2 14h4" }),
    path({ "d": "M2 18h4" }),
    rect({ width: "16", height: "20", "x": "4", "y": "2", rx: "2" }),
    path({ "d": "M9.5 8h5" }),
    path({ "d": "M9.5 12H16" }),
    path({ "d": "M9.5 16H14" })
  );
}, "NotebookText");

// src/icons/Notebook.ts
import van997 from "vanjs-core";
var Notebook = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van997.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 6h4" }),
    path({ "d": "M2 10h4" }),
    path({ "d": "M2 14h4" }),
    path({ "d": "M2 18h4" }),
    rect({ width: "16", height: "20", "x": "4", "y": "2", rx: "2" }),
    path({ "d": "M16 2v20" })
  );
}, "Notebook");

// src/icons/NotepadTextDashed.ts
import van998 from "vanjs-core";
var NotepadTextDashed = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van998.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 2v4" }),
    path({ "d": "M12 2v4" }),
    path({ "d": "M16 2v4" }),
    path({ "d": "M16 4h2a2 2 0 0 1 2 2v2" }),
    path({ "d": "M20 12v2" }),
    path({ "d": "M20 18v2a2 2 0 0 1-2 2h-1" }),
    path({ "d": "M13 22h-2" }),
    path({ "d": "M7 22H6a2 2 0 0 1-2-2v-2" }),
    path({ "d": "M4 14v-2" }),
    path({ "d": "M4 8V6a2 2 0 0 1 2-2h2" }),
    path({ "d": "M8 10h6" }),
    path({ "d": "M8 14h8" }),
    path({ "d": "M8 18h5" })
  );
}, "NotepadTextDashed");

// src/icons/NotepadText.ts
import van999 from "vanjs-core";
var NotepadText = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van999.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 2v4" }),
    path({ "d": "M12 2v4" }),
    path({ "d": "M16 2v4" }),
    rect({ width: "16", height: "18", "x": "4", "y": "4", rx: "2" }),
    path({ "d": "M8 10h6" }),
    path({ "d": "M8 14h8" }),
    path({ "d": "M8 18h5" })
  );
}, "NotepadText");

// src/icons/NutOff.ts
import van1000 from "vanjs-core";
var NutOff = /* @__PURE__ */ __name((props = {}) => {
  const { path, line } = van1000.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 4V2" }),
    path({
      "d": "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939"
    }),
    path({ "d": "M19 10v3.343" }),
    path({
      "d": "M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192"
    }),
    line({ x1: "2", x2: "22", y1: "2", y2: "22" })
  );
}, "NutOff");

// src/icons/Nut.ts
import van1001 from "vanjs-core";
var Nut = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1001.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 4V2" }),
    path({
      "d": "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4"
    }),
    path({
      "d": "M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z"
    })
  );
}, "Nut");

// src/icons/OctagonAlert.ts
import van1002 from "vanjs-core";
var OctagonAlert = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1002.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 16h.01" }),
    path({ "d": "M12 8v4" }),
    path({
      "d": "M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z"
    })
  );
}, "OctagonAlert");

// src/icons/OctagonMinus.ts
import van1003 from "vanjs-core";
var OctagonMinus = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1003.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"
    }),
    path({ "d": "M8 12h8" })
  );
}, "OctagonMinus");

// src/icons/OctagonPause.ts
import van1004 from "vanjs-core";
var OctagonPause = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1004.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 15V9" }),
    path({ "d": "M14 15V9" }),
    path({
      "d": "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"
    })
  );
}, "OctagonPause");

// src/icons/OctagonX.ts
import van1005 from "vanjs-core";
var OctagonX = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1005.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m15 9-6 6" }),
    path({
      "d": "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"
    }),
    path({ "d": "m9 9 6 6" })
  );
}, "OctagonX");

// src/icons/Octagon.ts
import van1006 from "vanjs-core";
var Octagon = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1006.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"
    })
  );
}, "Octagon");

// src/icons/Omega.ts
import van1007 from "vanjs-core";
var Omega = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1007.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M3 20h4.5a.5.5 0 0 0 .5-.5v-.282a.52.52 0 0 0-.247-.437 8 8 0 1 1 8.494-.001.52.52 0 0 0-.247.438v.282a.5.5 0 0 0 .5.5H21"
    })
  );
}, "Omega");

// src/icons/Option.ts
import van1008 from "vanjs-core";
var Option = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1008.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 3h6l6 18h6" }),
    path({ "d": "M14 3h7" })
  );
}, "Option");

// src/icons/Orbit.ts
import van1009 from "vanjs-core";
var Orbit = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van1009.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "3" }),
    circle({ cx: "19", cy: "5", "r": "2" }),
    circle({ cx: "5", cy: "19", "r": "2" }),
    path({ "d": "M10.4 21.9a10 10 0 0 0 9.941-15.416" }),
    path({ "d": "M13.5 2.1a10 10 0 0 0-9.841 15.416" })
  );
}, "Orbit");

// src/icons/Origami.ts
import van1010 from "vanjs-core";
var Origami = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1010.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025"
    }),
    path({
      "d": "m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009"
    }),
    path({
      "d": "m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027"
    })
  );
}, "Origami");

// src/icons/Package2.ts
import van1011 from "vanjs-core";
var Package2 = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1011.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" }),
    path({ "d": "m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" }),
    path({ "d": "M12 3v6" })
  );
}, "Package2");

// src/icons/PackageCheck.ts
import van1012 from "vanjs-core";
var PackageCheck = /* @__PURE__ */ __name((props = {}) => {
  const { path, polyline, line } = van1012.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m16 16 2 2 4-4" }),
    path({
      "d": "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
    }),
    path({ "d": "m7.5 4.27 9 5.15" }),
    polyline({ points: "3.29 7 12 12 20.71 7" }),
    line({ x1: "12", x2: "12", y1: "22", y2: "12" })
  );
}, "PackageCheck");

// src/icons/PackageMinus.ts
import van1013 from "vanjs-core";
var PackageMinus = /* @__PURE__ */ __name((props = {}) => {
  const { path, polyline, line } = van1013.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 16h6" }),
    path({
      "d": "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
    }),
    path({ "d": "m7.5 4.27 9 5.15" }),
    polyline({ points: "3.29 7 12 12 20.71 7" }),
    line({ x1: "12", x2: "12", y1: "22", y2: "12" })
  );
}, "PackageMinus");

// src/icons/PackageOpen.ts
import van1014 from "vanjs-core";
var PackageOpen = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1014.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 22v-9" }),
    path({
      "d": "M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"
    }),
    path({
      "d": "M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13"
    }),
    path({
      "d": "M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z"
    })
  );
}, "PackageOpen");

// src/icons/PackagePlus.ts
import van1015 from "vanjs-core";
var PackagePlus = /* @__PURE__ */ __name((props = {}) => {
  const { path, polyline, line } = van1015.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 16h6" }),
    path({ "d": "M19 13v6" }),
    path({
      "d": "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
    }),
    path({ "d": "m7.5 4.27 9 5.15" }),
    polyline({ points: "3.29 7 12 12 20.71 7" }),
    line({ x1: "12", x2: "12", y1: "22", y2: "12" })
  );
}, "PackagePlus");

// src/icons/PackageSearch.ts
import van1016 from "vanjs-core";
var PackageSearch = /* @__PURE__ */ __name((props = {}) => {
  const { path, polyline, line, circle } = van1016.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
    }),
    path({ "d": "m7.5 4.27 9 5.15" }),
    polyline({ points: "3.29 7 12 12 20.71 7" }),
    line({ x1: "12", x2: "12", y1: "22", y2: "12" }),
    circle({ cx: "18.5", cy: "15.5", "r": "2.5" }),
    path({ "d": "M20.27 17.27 22 19" })
  );
}, "PackageSearch");

// src/icons/PackageX.ts
import van1017 from "vanjs-core";
var PackageX = /* @__PURE__ */ __name((props = {}) => {
  const { path, polyline, line } = van1017.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
    }),
    path({ "d": "m7.5 4.27 9 5.15" }),
    polyline({ points: "3.29 7 12 12 20.71 7" }),
    line({ x1: "12", x2: "12", y1: "22", y2: "12" }),
    path({ "d": "m17 13 5 5m-5 0 5-5" })
  );
}, "PackageX");

// src/icons/Package.ts
import van1018 from "vanjs-core";
var Package = /* @__PURE__ */ __name((props = {}) => {
  const { path, polyline } = van1018.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"
    }),
    path({ "d": "M12 22V12" }),
    polyline({ points: "3.29 7 12 12 20.71 7" }),
    path({ "d": "m7.5 4.27 9 5.15" })
  );
}, "Package");

// src/icons/PaintBucket.ts
import van1019 from "vanjs-core";
var PaintBucket = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1019.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"
    }),
    path({ "d": "m5 2 5 5" }),
    path({ "d": "M2 13h15" }),
    path({ "d": "M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z" })
  );
}, "PaintBucket");

// src/icons/PaintRoller.ts
import van1020 from "vanjs-core";
var PaintRoller = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1020.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "16", height: "6", "x": "2", "y": "2", rx: "2" }),
    path({ "d": "M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" }),
    rect({ width: "4", height: "6", "x": "8", "y": "16", rx: "1" })
  );
}, "PaintRoller");

// src/icons/PaintbrushVertical.ts
import van1021 from "vanjs-core";
var PaintbrushVertical = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1021.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 2v2" }),
    path({ "d": "M14 2v4" }),
    path({ "d": "M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z" }),
    path({
      "d": "M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1"
    })
  );
}, "PaintbrushVertical");

// src/icons/Paintbrush.ts
import van1022 from "vanjs-core";
var Paintbrush = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1022.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m14.622 17.897-10.68-2.913" }),
    path({
      "d": "M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"
    }),
    path({
      "d": "M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"
    })
  );
}, "Paintbrush");

// src/icons/Palette.ts
import van1023 from "vanjs-core";
var Palette = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van1023.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "13.5", cy: "6.5", "r": ".5", fill: "currentColor" }),
    circle({ cx: "17.5", cy: "10.5", "r": ".5", fill: "currentColor" }),
    circle({ cx: "8.5", cy: "7.5", "r": ".5", fill: "currentColor" }),
    circle({ cx: "6.5", cy: "12.5", "r": ".5", fill: "currentColor" }),
    path({
      "d": "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"
    })
  );
}, "Palette");

// src/icons/PanelBottomClose.ts
import van1024 from "vanjs-core";
var PanelBottomClose = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1024.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M3 15h18" }),
    path({ "d": "m15 8-3 3-3-3" })
  );
}, "PanelBottomClose");

// src/icons/PanelBottomDashed.ts
import van1025 from "vanjs-core";
var PanelBottomDashed = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1025.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M14 15h1" }),
    path({ "d": "M19 15h2" }),
    path({ "d": "M3 15h2" }),
    path({ "d": "M9 15h1" })
  );
}, "PanelBottomDashed");

// src/icons/PanelBottomOpen.ts
import van1026 from "vanjs-core";
var PanelBottomOpen = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1026.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M3 15h18" }),
    path({ "d": "m9 10 3-3 3 3" })
  );
}, "PanelBottomOpen");

// src/icons/PanelBottom.ts
import van1027 from "vanjs-core";
var PanelBottom = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1027.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M3 15h18" })
  );
}, "PanelBottom");

// src/icons/PanelLeftClose.ts
import van1028 from "vanjs-core";
var PanelLeftClose = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1028.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M9 3v18" }),
    path({ "d": "m16 15-3-3 3-3" })
  );
}, "PanelLeftClose");

// src/icons/PanelLeftDashed.ts
import van1029 from "vanjs-core";
var PanelLeftDashed = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1029.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M9 14v1" }),
    path({ "d": "M9 19v2" }),
    path({ "d": "M9 3v2" }),
    path({ "d": "M9 9v1" })
  );
}, "PanelLeftDashed");

// src/icons/PanelLeftOpen.ts
import van1030 from "vanjs-core";
var PanelLeftOpen = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1030.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M9 3v18" }),
    path({ "d": "m14 9 3 3-3 3" })
  );
}, "PanelLeftOpen");

// src/icons/PanelLeft.ts
import van1031 from "vanjs-core";
var PanelLeft = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1031.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M9 3v18" })
  );
}, "PanelLeft");

// src/icons/PanelRightClose.ts
import van1032 from "vanjs-core";
var PanelRightClose = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1032.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M15 3v18" }),
    path({ "d": "m8 9 3 3-3 3" })
  );
}, "PanelRightClose");

// src/icons/PanelRightDashed.ts
import van1033 from "vanjs-core";
var PanelRightDashed = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1033.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M15 14v1" }),
    path({ "d": "M15 19v2" }),
    path({ "d": "M15 3v2" }),
    path({ "d": "M15 9v1" })
  );
}, "PanelRightDashed");

// src/icons/PanelRightOpen.ts
import van1034 from "vanjs-core";
var PanelRightOpen = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1034.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M15 3v18" }),
    path({ "d": "m10 15-3-3 3-3" })
  );
}, "PanelRightOpen");

// src/icons/PanelRight.ts
import van1035 from "vanjs-core";
var PanelRight = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1035.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M15 3v18" })
  );
}, "PanelRight");

// src/icons/PanelTopClose.ts
import van1036 from "vanjs-core";
var PanelTopClose = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1036.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M3 9h18" }),
    path({ "d": "m9 16 3-3 3 3" })
  );
}, "PanelTopClose");

// src/icons/PanelTopDashed.ts
import van1037 from "vanjs-core";
var PanelTopDashed = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1037.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M14 9h1" }),
    path({ "d": "M19 9h2" }),
    path({ "d": "M3 9h2" }),
    path({ "d": "M9 9h1" })
  );
}, "PanelTopDashed");

// src/icons/PanelTopOpen.ts
import van1038 from "vanjs-core";
var PanelTopOpen = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1038.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M3 9h18" }),
    path({ "d": "m15 14-3 3-3-3" })
  );
}, "PanelTopOpen");

// src/icons/PanelTop.ts
import van1039 from "vanjs-core";
var PanelTop = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1039.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M3 9h18" })
  );
}, "PanelTop");

// src/icons/PanelsLeftBottom.ts
import van1040 from "vanjs-core";
var PanelsLeftBottom = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1040.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M9 3v18" }),
    path({ "d": "M9 15h12" })
  );
}, "PanelsLeftBottom");

// src/icons/PanelsRightBottom.ts
import van1041 from "vanjs-core";
var PanelsRightBottom = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1041.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M3 15h12" }),
    path({ "d": "M15 3v18" })
  );
}, "PanelsRightBottom");

// src/icons/PanelsTopLeft.ts
import van1042 from "vanjs-core";
var PanelsTopLeft = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1042.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M3 9h18" }),
    path({ "d": "M9 21V9" })
  );
}, "PanelsTopLeft");

// src/icons/Paperclip.ts
import van1043 from "vanjs-core";
var Paperclip = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1043.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M13.234 20.252 21 12.3" }),
    path({
      "d": "m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486"
    })
  );
}, "Paperclip");

// src/icons/Parentheses.ts
import van1044 from "vanjs-core";
var Parentheses = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1044.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 21s-4-3-4-9 4-9 4-9" }),
    path({ "d": "M16 3s4 3 4 9-4 9-4 9" })
  );
}, "Parentheses");

// src/icons/ParkingMeter.ts
import van1045 from "vanjs-core";
var ParkingMeter = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1045.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M11 15h2" }),
    path({ "d": "M12 12v3" }),
    path({ "d": "M12 19v3" }),
    path({
      "d": "M15.282 19a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z"
    }),
    path({ "d": "M9 9a3 3 0 1 1 6 0" })
  );
}, "ParkingMeter");

// src/icons/PartyPopper.ts
import van1046 from "vanjs-core";
var PartyPopper = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1046.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M5.8 11.3 2 22l10.7-3.79" }),
    path({ "d": "M4 3h.01" }),
    path({ "d": "M22 8h.01" }),
    path({ "d": "M15 2h.01" }),
    path({ "d": "M22 20h.01" }),
    path({
      "d": "m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"
    }),
    path({
      "d": "m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"
    }),
    path({
      "d": "m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"
    }),
    path({
      "d": "M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"
    })
  );
}, "PartyPopper");

// src/icons/Pause.ts
import van1047 from "vanjs-core";
var Pause = /* @__PURE__ */ __name((props = {}) => {
  const { rect } = van1047.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ "x": "14", "y": "4", width: "4", height: "16", rx: "1" }),
    rect({ "x": "6", "y": "4", width: "4", height: "16", rx: "1" })
  );
}, "Pause");

// src/icons/PawPrint.ts
import van1048 from "vanjs-core";
var PawPrint = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van1048.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "11", cy: "4", "r": "2" }),
    circle({ cx: "18", cy: "8", "r": "2" }),
    circle({ cx: "20", cy: "16", "r": "2" }),
    path({
      "d": "M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"
    })
  );
}, "PawPrint");

// src/icons/PcCase.ts
import van1049 from "vanjs-core";
var PcCase = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1049.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "14", height: "20", "x": "5", "y": "2", rx: "2" }),
    path({ "d": "M15 14h.01" }),
    path({ "d": "M9 6h6" }),
    path({ "d": "M9 10h6" })
  );
}, "PcCase");

// src/icons/PenLine.ts
import van1050 from "vanjs-core";
var PenLine = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1050.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 20h9" }),
    path({
      "d": "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"
    })
  );
}, "PenLine");

// src/icons/PenOff.ts
import van1051 from "vanjs-core";
var PenOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1051.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982"
    }),
    path({
      "d": "m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353"
    }),
    path({ "d": "m2 2 20 20" })
  );
}, "PenOff");

// src/icons/PenTool.ts
import van1052 from "vanjs-core";
var PenTool = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1052.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"
    }),
    path({
      "d": "m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"
    }),
    path({ "d": "m2.3 2.3 7.286 7.286" }),
    circle({ cx: "11", cy: "11", "r": "2" })
  );
}, "PenTool");

// src/icons/Pen.ts
import van1053 from "vanjs-core";
var Pen = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1053.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
    })
  );
}, "Pen");

// src/icons/PencilLine.ts
import van1054 from "vanjs-core";
var PencilLine = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1054.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 20h9" }),
    path({
      "d": "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"
    }),
    path({ "d": "m15 5 3 3" })
  );
}, "PencilLine");

// src/icons/PencilOff.ts
import van1055 from "vanjs-core";
var PencilOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1055.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982"
    }),
    path({
      "d": "m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353"
    }),
    path({ "d": "m15 5 4 4" }),
    path({ "d": "m2 2 20 20" })
  );
}, "PencilOff");

// src/icons/PencilRuler.ts
import van1056 from "vanjs-core";
var PencilRuler = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1056.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"
    }),
    path({ "d": "m8 6 2-2" }),
    path({ "d": "m18 16 2-2" }),
    path({
      "d": "m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"
    }),
    path({
      "d": "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
    }),
    path({ "d": "m15 5 4 4" })
  );
}, "PencilRuler");

// src/icons/Pencil.ts
import van1057 from "vanjs-core";
var Pencil = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1057.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
    }),
    path({ "d": "m15 5 4 4" })
  );
}, "Pencil");

// src/icons/Pentagon.ts
import van1058 from "vanjs-core";
var Pentagon = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1058.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M10.83 2.38a2 2 0 0 1 2.34 0l8 5.74a2 2 0 0 1 .73 2.25l-3.04 9.26a2 2 0 0 1-1.9 1.37H7.04a2 2 0 0 1-1.9-1.37L2.1 10.37a2 2 0 0 1 .73-2.25z"
    })
  );
}, "Pentagon");

// src/icons/Percent.ts
import van1059 from "vanjs-core";
var Percent = /* @__PURE__ */ __name((props = {}) => {
  const { line, circle } = van1059.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "19", x2: "5", y1: "5", y2: "19" }),
    circle({ cx: "6.5", cy: "6.5", "r": "2.5" }),
    circle({ cx: "17.5", cy: "17.5", "r": "2.5" })
  );
}, "Percent");

// src/icons/PersonStanding.ts
import van1060 from "vanjs-core";
var PersonStanding = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van1060.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "5", "r": "1" }),
    path({ "d": "m9 20 3-6 3 6" }),
    path({ "d": "m6 8 6 2 6-2" }),
    path({ "d": "M12 10v4" })
  );
}, "PersonStanding");

// src/icons/PhilippinePeso.ts
import van1061 from "vanjs-core";
var PhilippinePeso = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1061.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M20 11H4" }),
    path({ "d": "M20 7H4" }),
    path({ "d": "M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7" })
  );
}, "PhilippinePeso");

// src/icons/PhoneCall.ts
import van1062 from "vanjs-core";
var PhoneCall = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1062.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
    }),
    path({ "d": "M14.05 2a9 9 0 0 1 8 7.94" }),
    path({ "d": "M14.05 6A5 5 0 0 1 18 10" })
  );
}, "PhoneCall");

// src/icons/PhoneForwarded.ts
import van1063 from "vanjs-core";
var PhoneForwarded = /* @__PURE__ */ __name((props = {}) => {
  const { polyline, line, path } = van1063.tags(svgNamespace);
  return LucideIcon(
    props,
    polyline({ points: "18 2 22 6 18 10" }),
    line({ x1: "14", x2: "22", y1: "6", y2: "6" }),
    path({
      "d": "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
    })
  );
}, "PhoneForwarded");

// src/icons/PhoneIncoming.ts
import van1064 from "vanjs-core";
var PhoneIncoming = /* @__PURE__ */ __name((props = {}) => {
  const { polyline, line, path } = van1064.tags(svgNamespace);
  return LucideIcon(
    props,
    polyline({ points: "16 2 16 8 22 8" }),
    line({ x1: "22", x2: "16", y1: "2", y2: "8" }),
    path({
      "d": "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
    })
  );
}, "PhoneIncoming");

// src/icons/PhoneMissed.ts
import van1065 from "vanjs-core";
var PhoneMissed = /* @__PURE__ */ __name((props = {}) => {
  const { line, path } = van1065.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "22", x2: "16", y1: "2", y2: "8" }),
    line({ x1: "16", x2: "22", y1: "2", y2: "8" }),
    path({
      "d": "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
    })
  );
}, "PhoneMissed");

// src/icons/PhoneOff.ts
import van1066 from "vanjs-core";
var PhoneOff = /* @__PURE__ */ __name((props = {}) => {
  const { path, line } = van1066.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"
    }),
    line({ x1: "22", x2: "2", y1: "2", y2: "22" })
  );
}, "PhoneOff");

// src/icons/PhoneOutgoing.ts
import van1067 from "vanjs-core";
var PhoneOutgoing = /* @__PURE__ */ __name((props = {}) => {
  const { polyline, line, path } = van1067.tags(svgNamespace);
  return LucideIcon(
    props,
    polyline({ points: "22 8 22 2 16 2" }),
    line({ x1: "16", x2: "22", y1: "8", y2: "2" }),
    path({
      "d": "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
    })
  );
}, "PhoneOutgoing");

// src/icons/Phone.ts
import van1068 from "vanjs-core";
var Phone = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1068.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
    })
  );
}, "Phone");

// src/icons/Pi.ts
import van1069 from "vanjs-core";
var Pi = /* @__PURE__ */ __name((props = {}) => {
  const { line, path } = van1069.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "9", x2: "9", y1: "4", y2: "20" }),
    path({ "d": "M4 7c0-1.7 1.3-3 3-3h13" }),
    path({ "d": "M18 20c-1.7 0-3-1.3-3-3V4" })
  );
}, "Pi");

// src/icons/Piano.ts
import van1070 from "vanjs-core";
var Piano = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1070.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8"
    }),
    path({ "d": "M2 14h20" }),
    path({ "d": "M6 14v4" }),
    path({ "d": "M10 14v4" }),
    path({ "d": "M14 14v4" }),
    path({ "d": "M18 14v4" })
  );
}, "Piano");

// src/icons/Pickaxe.ts
import van1071 from "vanjs-core";
var Pickaxe = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1071.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912" }),
    path({
      "d": "M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393"
    }),
    path({
      "d": "M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z"
    }),
    path({
      "d": "M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319"
    })
  );
}, "Pickaxe");

// src/icons/PictureInPicture2.ts
import van1072 from "vanjs-core";
var PictureInPicture2 = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van1072.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4" }),
    rect({ width: "10", height: "7", "x": "12", "y": "13", rx: "2" })
  );
}, "PictureInPicture2");

// src/icons/PictureInPicture.ts
import van1073 from "vanjs-core";
var PictureInPicture = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van1073.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 10h6V4" }),
    path({ "d": "m2 4 6 6" }),
    path({ "d": "M21 10V7a2 2 0 0 0-2-2h-7" }),
    path({ "d": "M3 14v2a2 2 0 0 0 2 2h3" }),
    rect({ "x": "12", "y": "14", width: "10", height: "7", rx: "1" })
  );
}, "PictureInPicture");

// src/icons/PiggyBank.ts
import van1074 from "vanjs-core";
var PiggyBank = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1074.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z"
    }),
    path({ "d": "M2 9v1c0 1.1.9 2 2 2h1" }),
    path({ "d": "M16 11h.01" })
  );
}, "PiggyBank");

// src/icons/PilcrowLeft.ts
import van1075 from "vanjs-core";
var PilcrowLeft = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1075.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M14 3v11" }),
    path({ "d": "M14 9h-3a3 3 0 0 1 0-6h9" }),
    path({ "d": "M18 3v11" }),
    path({ "d": "M22 18H2l4-4" }),
    path({ "d": "m6 22-4-4" })
  );
}, "PilcrowLeft");

// src/icons/PilcrowRight.ts
import van1076 from "vanjs-core";
var PilcrowRight = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1076.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 3v11" }),
    path({ "d": "M10 9H7a1 1 0 0 1 0-6h8" }),
    path({ "d": "M14 3v11" }),
    path({ "d": "m18 14 4 4H2" }),
    path({ "d": "m22 18-4 4" })
  );
}, "PilcrowRight");

// src/icons/Pilcrow.ts
import van1077 from "vanjs-core";
var Pilcrow = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1077.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M13 4v16" }),
    path({ "d": "M17 4v16" }),
    path({ "d": "M19 4H9.5a4.5 4.5 0 0 0 0 9H13" })
  );
}, "Pilcrow");

// src/icons/PillBottle.ts
import van1078 from "vanjs-core";
var PillBottle = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van1078.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4" }),
    path({ "d": "M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7" }),
    rect({ width: "16", height: "5", "x": "4", "y": "2", rx: "1" })
  );
}, "PillBottle");

// src/icons/Pill.ts
import van1079 from "vanjs-core";
var Pill = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1079.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"
    }),
    path({ "d": "m8.5 8.5 7 7" })
  );
}, "Pill");

// src/icons/PinOff.ts
import van1080 from "vanjs-core";
var PinOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1080.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 17v5" }),
    path({ "d": "M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89" }),
    path({ "d": "m2 2 20 20" }),
    path({
      "d": "M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11"
    })
  );
}, "PinOff");

// src/icons/Pin.ts
import van1081 from "vanjs-core";
var Pin = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1081.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 17v5" }),
    path({
      "d": "M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
    })
  );
}, "Pin");

// src/icons/Pipette.ts
import van1082 from "vanjs-core";
var Pipette = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1082.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m2 22 1-1h3l9-9" }),
    path({ "d": "M3 21v-3l9-9" }),
    path({
      "d": "m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"
    })
  );
}, "Pipette");

// src/icons/Pizza.ts
import van1083 from "vanjs-core";
var Pizza = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1083.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m12 14-1 1" }),
    path({ "d": "m13.75 18.25-1.25 1.42" }),
    path({ "d": "M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12" }),
    path({ "d": "M18.8 9.3a1 1 0 0 0 2.1 7.7" }),
    path({
      "d": "M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z"
    })
  );
}, "Pizza");

// src/icons/PlaneLanding.ts
import van1084 from "vanjs-core";
var PlaneLanding = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1084.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 22h20" }),
    path({
      "d": "M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z"
    })
  );
}, "PlaneLanding");

// src/icons/PlaneTakeoff.ts
import van1085 from "vanjs-core";
var PlaneTakeoff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1085.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 22h20" }),
    path({
      "d": "M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"
    })
  );
}, "PlaneTakeoff");

// src/icons/Plane.ts
import van1086 from "vanjs-core";
var Plane = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1086.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
    })
  );
}, "Plane");

// src/icons/Play.ts
import van1087 from "vanjs-core";
var Play = /* @__PURE__ */ __name((props = {}) => {
  const { polygon } = van1087.tags(svgNamespace);
  return LucideIcon(
    props,
    polygon({ points: "6 3 20 12 6 21 6 3" })
  );
}, "Play");

// src/icons/Plug2.ts
import van1088 from "vanjs-core";
var Plug2 = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1088.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M9 2v6" }),
    path({ "d": "M15 2v6" }),
    path({ "d": "M12 17v5" }),
    path({ "d": "M5 8h14" }),
    path({ "d": "M6 11V8h12v3a6 6 0 1 1-12 0Z" })
  );
}, "Plug2");

// src/icons/PlugZap.ts
import van1089 from "vanjs-core";
var PlugZap = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1089.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"
    }),
    path({ "d": "m2 22 3-3" }),
    path({ "d": "M7.5 13.5 10 11" }),
    path({ "d": "M10.5 16.5 13 14" }),
    path({ "d": "m18 3-4 4h6l-4 4" })
  );
}, "PlugZap");

// src/icons/Plug.ts
import van1090 from "vanjs-core";
var Plug = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1090.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 22v-5" }),
    path({ "d": "M9 8V2" }),
    path({ "d": "M15 8V2" }),
    path({ "d": "M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" })
  );
}, "Plug");

// src/icons/Plus.ts
import van1091 from "vanjs-core";
var Plus = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1091.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M5 12h14" }),
    path({ "d": "M12 5v14" })
  );
}, "Plus");

// src/icons/PocketKnife.ts
import van1092 from "vanjs-core";
var PocketKnife = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1092.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2" }),
    path({ "d": "M18 6h.01" }),
    path({ "d": "M6 18h.01" }),
    path({
      "d": "M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z"
    }),
    path({ "d": "M18 11.66V22a4 4 0 0 0 4-4V6" })
  );
}, "PocketKnife");

// src/icons/Pocket.ts
import van1093 from "vanjs-core";
var Pocket = /* @__PURE__ */ __name((props = {}) => {
  const { path, polyline } = van1093.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"
    }),
    polyline({ points: "8 10 12 14 16 10" })
  );
}, "Pocket");

// src/icons/Podcast.ts
import van1094 from "vanjs-core";
var Podcast = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1094.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16.85 18.58a9 9 0 1 0-9.7 0" }),
    path({ "d": "M8 14a5 5 0 1 1 8 0" }),
    circle({ cx: "12", cy: "11", "r": "1" }),
    path({ "d": "M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z" })
  );
}, "Podcast");

// src/icons/PointerOff.ts
import van1095 from "vanjs-core";
var PointerOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1095.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 4.5V4a2 2 0 0 0-2.41-1.957" }),
    path({ "d": "M13.9 8.4a2 2 0 0 0-1.26-1.295" }),
    path({
      "d": "M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158"
    }),
    path({
      "d": "m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343"
    }),
    path({ "d": "M6 6v8" }),
    path({ "d": "m2 2 20 20" })
  );
}, "PointerOff");

// src/icons/Pointer.ts
import van1096 from "vanjs-core";
var Pointer = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1096.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M22 14a8 8 0 0 1-8 8" }),
    path({ "d": "M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2" }),
    path({ "d": "M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1" }),
    path({ "d": "M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10" }),
    path({
      "d": "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"
    })
  );
}, "Pointer");

// src/icons/Popcorn.ts
import van1097 from "vanjs-core";
var Popcorn = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1097.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4"
    }),
    path({ "d": "M10 22 9 8" }),
    path({ "d": "m14 22 1-14" }),
    path({
      "d": "M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z"
    })
  );
}, "Popcorn");

// src/icons/Popsicle.ts
import van1098 from "vanjs-core";
var Popsicle = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1098.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z"
    }),
    path({ "d": "m22 22-5.5-5.5" })
  );
}, "Popsicle");

// src/icons/PoundSterling.ts
import van1099 from "vanjs-core";
var PoundSterling = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1099.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M18 7c0-5.333-8-5.333-8 0" }),
    path({ "d": "M10 7v14" }),
    path({ "d": "M6 21h12" }),
    path({ "d": "M6 13h10" })
  );
}, "PoundSterling");

// src/icons/PowerOff.ts
import van1100 from "vanjs-core";
var PowerOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1100.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M18.36 6.64A9 9 0 0 1 20.77 15" }),
    path({ "d": "M6.16 6.16a9 9 0 1 0 12.68 12.68" }),
    path({ "d": "M12 2v4" }),
    path({ "d": "m2 2 20 20" })
  );
}, "PowerOff");

// src/icons/Power.ts
import van1101 from "vanjs-core";
var Power = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1101.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 2v10" }),
    path({ "d": "M18.4 6.6a9 9 0 1 1-12.77.04" })
  );
}, "Power");

// src/icons/Presentation.ts
import van1102 from "vanjs-core";
var Presentation = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1102.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 3h20" }),
    path({ "d": "M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" }),
    path({ "d": "m7 21 5-5 5 5" })
  );
}, "Presentation");

// src/icons/PrinterCheck.ts
import van1103 from "vanjs-core";
var PrinterCheck = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1103.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5"
    }),
    path({ "d": "m16 19 2 2 4-4" }),
    path({ "d": "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2" }),
    path({ "d": "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" })
  );
}, "PrinterCheck");

// src/icons/Printer.ts
import van1104 from "vanjs-core";
var Printer = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van1104.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
    }),
    path({ "d": "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" }),
    rect({ "x": "6", "y": "14", width: "12", height: "8", rx: "1" })
  );
}, "Printer");

// src/icons/Projector.ts
import van1105 from "vanjs-core";
var Projector = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1105.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M5 7 3 5" }),
    path({ "d": "M9 6V3" }),
    path({ "d": "m13 7 2-2" }),
    circle({ cx: "9", cy: "13", "r": "3" }),
    path({
      "d": "M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17"
    }),
    path({ "d": "M16 16h2" })
  );
}, "Projector");

// src/icons/Proportions.ts
import van1106 from "vanjs-core";
var Proportions = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1106.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "20", height: "16", "x": "2", "y": "4", rx: "2" }),
    path({ "d": "M12 9v11" }),
    path({ "d": "M2 9h13a2 2 0 0 1 2 2v9" })
  );
}, "Proportions");

// src/icons/Puzzle.ts
import van1107 from "vanjs-core";
var Puzzle = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1107.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"
    })
  );
}, "Puzzle");

// src/icons/Pyramid.ts
import van1108 from "vanjs-core";
var Pyramid = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1108.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z"
    }),
    path({ "d": "M12 2v20" })
  );
}, "Pyramid");

// src/icons/QrCode.ts
import van1109 from "vanjs-core";
var QrCode = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1109.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "5", height: "5", "x": "3", "y": "3", rx: "1" }),
    rect({ width: "5", height: "5", "x": "16", "y": "3", rx: "1" }),
    rect({ width: "5", height: "5", "x": "3", "y": "16", rx: "1" }),
    path({ "d": "M21 16h-3a2 2 0 0 0-2 2v3" }),
    path({ "d": "M21 21v.01" }),
    path({ "d": "M12 7v3a2 2 0 0 1-2 2H7" }),
    path({ "d": "M3 12h.01" }),
    path({ "d": "M12 3h.01" }),
    path({ "d": "M12 16v.01" }),
    path({ "d": "M16 12h1" }),
    path({ "d": "M21 12v.01" }),
    path({ "d": "M12 21v-1" })
  );
}, "QrCode");

// src/icons/Quote.ts
import van1110 from "vanjs-core";
var Quote = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1110.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
    }),
    path({
      "d": "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
    })
  );
}, "Quote");

// src/icons/Rabbit.ts
import van1111 from "vanjs-core";
var Rabbit = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1111.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M13 16a3 3 0 0 1 2.24 5" }),
    path({ "d": "M18 12h.01" }),
    path({
      "d": "M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3"
    }),
    path({ "d": "M20 8.54V4a2 2 0 1 0-4 0v3" }),
    path({ "d": "M7.612 12.524a3 3 0 1 0-1.6 4.3" })
  );
}, "Rabbit");

// src/icons/Radar.ts
import van1112 from "vanjs-core";
var Radar = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1112.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M19.07 4.93A10 10 0 0 0 6.99 3.34" }),
    path({ "d": "M4 6h.01" }),
    path({ "d": "M2.29 9.62A10 10 0 1 0 21.31 8.35" }),
    path({ "d": "M16.24 7.76A6 6 0 1 0 8.23 16.67" }),
    path({ "d": "M12 18h.01" }),
    path({ "d": "M17.99 11.66A6 6 0 0 1 15.77 16.67" }),
    circle({ cx: "12", cy: "12", "r": "2" }),
    path({ "d": "m13.41 10.59 5.66-5.66" })
  );
}, "Radar");

// src/icons/Radiation.ts
import van1113 from "vanjs-core";
var Radiation = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1113.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 12h.01" }),
    path({
      "d": "M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z"
    }),
    path({
      "d": "M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z"
    }),
    path({
      "d": "M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z"
    })
  );
}, "Radiation");

// src/icons/Radical.ts
import van1114 from "vanjs-core";
var Radical = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1114.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21"
    })
  );
}, "Radical");

// src/icons/RadioReceiver.ts
import van1115 from "vanjs-core";
var RadioReceiver = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van1115.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M5 16v2" }),
    path({ "d": "M19 16v2" }),
    rect({ width: "20", height: "8", "x": "2", "y": "8", rx: "2" }),
    path({ "d": "M18 12h.01" })
  );
}, "RadioReceiver");

// src/icons/RadioTower.ts
import van1116 from "vanjs-core";
var RadioTower = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1116.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4.9 16.1C1 12.2 1 5.8 4.9 1.9" }),
    path({ "d": "M7.8 4.7a6.14 6.14 0 0 0-.8 7.5" }),
    circle({ cx: "12", cy: "9", "r": "2" }),
    path({ "d": "M16.2 4.8c2 2 2.26 5.11.8 7.47" }),
    path({ "d": "M19.1 1.9a9.96 9.96 0 0 1 0 14.1" }),
    path({ "d": "M9.5 18h5" }),
    path({ "d": "m8 22 4-11 4 11" })
  );
}, "RadioTower");

// src/icons/Radio.ts
import van1117 from "vanjs-core";
var Radio = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1117.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4.9 19.1C1 15.2 1 8.8 4.9 4.9" }),
    path({ "d": "M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" }),
    circle({ cx: "12", cy: "12", "r": "2" }),
    path({ "d": "M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" }),
    path({ "d": "M19.1 4.9C23 8.8 23 15.1 19.1 19" })
  );
}, "Radio");

// src/icons/Radius.ts
import van1118 from "vanjs-core";
var Radius = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1118.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M20.34 17.52a10 10 0 1 0-2.82 2.82" }),
    circle({ cx: "19", cy: "19", "r": "2" }),
    path({ "d": "m13.41 13.41 4.18 4.18" }),
    circle({ cx: "12", cy: "12", "r": "2" })
  );
}, "Radius");

// src/icons/RailSymbol.ts
import van1119 from "vanjs-core";
var RailSymbol = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1119.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M5 15h14" }),
    path({ "d": "M5 9h14" }),
    path({ "d": "m14 20-5-5 6-6-5-5" })
  );
}, "RailSymbol");

// src/icons/Rainbow.ts
import van1120 from "vanjs-core";
var Rainbow = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1120.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M22 17a10 10 0 0 0-20 0" }),
    path({ "d": "M6 17a6 6 0 0 1 12 0" }),
    path({ "d": "M10 17a2 2 0 0 1 4 0" })
  );
}, "Rainbow");

// src/icons/Rat.ts
import van1121 from "vanjs-core";
var Rat = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1121.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M13 22H4a2 2 0 0 1 0-4h12" }),
    path({ "d": "M13.236 18a3 3 0 0 0-2.2-5" }),
    path({ "d": "M16 9h.01" }),
    path({
      "d": "M16.82 3.94a3 3 0 1 1 3.237 4.868l1.815 2.587a1.5 1.5 0 0 1-1.5 2.1l-2.872-.453a3 3 0 0 0-3.5 3"
    }),
    path({
      "d": "M17 4.988a3 3 0 1 0-5.2 2.052A7 7 0 0 0 4 14.015 4 4 0 0 0 8 18"
    })
  );
}, "Rat");

// src/icons/Ratio.ts
import van1122 from "vanjs-core";
var Ratio = /* @__PURE__ */ __name((props = {}) => {
  const { rect } = van1122.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "12", height: "20", "x": "6", "y": "2", rx: "2" }),
    rect({ width: "20", height: "12", "x": "2", "y": "6", rx: "2" })
  );
}, "Ratio");

// src/icons/ReceiptCent.ts
import van1123 from "vanjs-core";
var ReceiptCent = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1123.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"
    }),
    path({ "d": "M12 6.5v11" }),
    path({ "d": "M15 9.4a4 4 0 1 0 0 5.2" })
  );
}, "ReceiptCent");

// src/icons/ReceiptEuro.ts
import van1124 from "vanjs-core";
var ReceiptEuro = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1124.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"
    }),
    path({ "d": "M8 12h5" }),
    path({ "d": "M16 9.5a4 4 0 1 0 0 5.2" })
  );
}, "ReceiptEuro");

// src/icons/ReceiptIndianRupee.ts
import van1125 from "vanjs-core";
var ReceiptIndianRupee = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1125.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"
    }),
    path({ "d": "M8 7h8" }),
    path({ "d": "M12 17.5 8 15h1a4 4 0 0 0 0-8" }),
    path({ "d": "M8 11h8" })
  );
}, "ReceiptIndianRupee");

// src/icons/ReceiptJapaneseYen.ts
import van1126 from "vanjs-core";
var ReceiptJapaneseYen = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1126.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"
    }),
    path({ "d": "m12 10 3-3" }),
    path({ "d": "m9 7 3 3v7.5" }),
    path({ "d": "M9 11h6" }),
    path({ "d": "M9 15h6" })
  );
}, "ReceiptJapaneseYen");

// src/icons/ReceiptPoundSterling.ts
import van1127 from "vanjs-core";
var ReceiptPoundSterling = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1127.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"
    }),
    path({ "d": "M8 13h5" }),
    path({ "d": "M10 17V9.5a2.5 2.5 0 0 1 5 0" }),
    path({ "d": "M8 17h7" })
  );
}, "ReceiptPoundSterling");

// src/icons/ReceiptRussianRuble.ts
import van1128 from "vanjs-core";
var ReceiptRussianRuble = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1128.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"
    }),
    path({ "d": "M8 15h5" }),
    path({ "d": "M8 11h5a2 2 0 1 0 0-4h-3v10" })
  );
}, "ReceiptRussianRuble");

// src/icons/ReceiptSwissFranc.ts
import van1129 from "vanjs-core";
var ReceiptSwissFranc = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1129.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"
    }),
    path({ "d": "M10 17V7h5" }),
    path({ "d": "M10 11h4" }),
    path({ "d": "M8 15h5" })
  );
}, "ReceiptSwissFranc");

// src/icons/ReceiptText.ts
import van1130 from "vanjs-core";
var ReceiptText = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1130.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"
    }),
    path({ "d": "M14 8H8" }),
    path({ "d": "M16 12H8" }),
    path({ "d": "M13 16H8" })
  );
}, "ReceiptText");

// src/icons/Receipt.ts
import van1131 from "vanjs-core";
var Receipt = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1131.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"
    }),
    path({ "d": "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" }),
    path({ "d": "M12 17.5v-11" })
  );
}, "Receipt");

// src/icons/RectangleEllipsis.ts
import van1132 from "vanjs-core";
var RectangleEllipsis = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1132.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "20", height: "12", "x": "2", "y": "6", rx: "2" }),
    path({ "d": "M12 12h.01" }),
    path({ "d": "M17 12h.01" }),
    path({ "d": "M7 12h.01" })
  );
}, "RectangleEllipsis");

// src/icons/RectangleHorizontal.ts
import van1133 from "vanjs-core";
var RectangleHorizontal = /* @__PURE__ */ __name((props = {}) => {
  const { rect } = van1133.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "20", height: "12", "x": "2", "y": "6", rx: "2" })
  );
}, "RectangleHorizontal");

// src/icons/RectangleVertical.ts
import van1134 from "vanjs-core";
var RectangleVertical = /* @__PURE__ */ __name((props = {}) => {
  const { rect } = van1134.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "12", height: "20", "x": "6", "y": "2", rx: "2" })
  );
}, "RectangleVertical");

// src/icons/Recycle.ts
import van1135 from "vanjs-core";
var Recycle = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1135.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"
    }),
    path({
      "d": "M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"
    }),
    path({ "d": "m14 16-3 3 3 3" }),
    path({ "d": "M8.293 13.596 7.196 9.5 3.1 10.598" }),
    path({
      "d": "m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"
    }),
    path({ "d": "m13.378 9.633 4.096 1.098 1.097-4.096" })
  );
}, "Recycle");

// src/icons/Redo2.ts
import van1136 from "vanjs-core";
var Redo2 = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1136.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m15 14 5-5-5-5" }),
    path({ "d": "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13" })
  );
}, "Redo2");

// src/icons/RedoDot.ts
import van1137 from "vanjs-core";
var RedoDot = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van1137.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "17", "r": "1" }),
    path({ "d": "M21 7v6h-6" }),
    path({ "d": "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" })
  );
}, "RedoDot");

// src/icons/Redo.ts
import van1138 from "vanjs-core";
var Redo = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1138.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21 7v6h-6" }),
    path({ "d": "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" })
  );
}, "Redo");

// src/icons/RefreshCcwDot.ts
import van1139 from "vanjs-core";
var RefreshCcwDot = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1139.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 2v6h6" }),
    path({ "d": "M21 12A9 9 0 0 0 6 5.3L3 8" }),
    path({ "d": "M21 22v-6h-6" }),
    path({ "d": "M3 12a9 9 0 0 0 15 6.7l3-2.7" }),
    circle({ cx: "12", cy: "12", "r": "1" })
  );
}, "RefreshCcwDot");

// src/icons/RefreshCcw.ts
import van1140 from "vanjs-core";
var RefreshCcw = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1140.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }),
    path({ "d": "M3 3v5h5" }),
    path({ "d": "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" }),
    path({ "d": "M16 16h5v5" })
  );
}, "RefreshCcw");

// src/icons/RefreshCwOff.ts
import van1141 from "vanjs-core";
var RefreshCwOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1141.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47"
    }),
    path({ "d": "M8 16H3v5" }),
    path({ "d": "M3 12C3 9.51 4 7.26 5.64 5.64" }),
    path({
      "d": "m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64"
    }),
    path({ "d": "M21 12c0 1-.16 1.97-.47 2.87" }),
    path({ "d": "M21 3v5h-5" }),
    path({ "d": "M22 22 2 2" })
  );
}, "RefreshCwOff");

// src/icons/RefreshCw.ts
import van1142 from "vanjs-core";
var RefreshCw = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1142.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" }),
    path({ "d": "M21 3v5h-5" }),
    path({ "d": "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" }),
    path({ "d": "M8 16H3v5" })
  );
}, "RefreshCw");

// src/icons/Refrigerator.ts
import van1143 from "vanjs-core";
var Refrigerator = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1143.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"
    }),
    path({ "d": "M5 10h14" }),
    path({ "d": "M15 7v6" })
  );
}, "Refrigerator");

// src/icons/Regex.ts
import van1144 from "vanjs-core";
var Regex = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1144.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M17 3v10" }),
    path({ "d": "m12.67 5.5 8.66 5" }),
    path({ "d": "m12.67 10.5 8.66-5" }),
    path({
      "d": "M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z"
    })
  );
}, "Regex");

// src/icons/RemoveFormatting.ts
import van1145 from "vanjs-core";
var RemoveFormatting = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1145.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 7V4h16v3" }),
    path({ "d": "M5 20h6" }),
    path({ "d": "M13 4 8 20" }),
    path({ "d": "m15 15 5 5" }),
    path({ "d": "m20 15-5 5" })
  );
}, "RemoveFormatting");

// src/icons/Repeat1.ts
import van1146 from "vanjs-core";
var Repeat1 = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1146.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m17 2 4 4-4 4" }),
    path({ "d": "M3 11v-1a4 4 0 0 1 4-4h14" }),
    path({ "d": "m7 22-4-4 4-4" }),
    path({ "d": "M21 13v1a4 4 0 0 1-4 4H3" }),
    path({ "d": "M11 10h1v4" })
  );
}, "Repeat1");

// src/icons/Repeat2.ts
import van1147 from "vanjs-core";
var Repeat2 = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1147.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m2 9 3-3 3 3" }),
    path({ "d": "M13 18H7a2 2 0 0 1-2-2V6" }),
    path({ "d": "m22 15-3 3-3-3" }),
    path({ "d": "M11 6h6a2 2 0 0 1 2 2v10" })
  );
}, "Repeat2");

// src/icons/Repeat.ts
import van1148 from "vanjs-core";
var Repeat = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1148.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m17 2 4 4-4 4" }),
    path({ "d": "M3 11v-1a4 4 0 0 1 4-4h14" }),
    path({ "d": "m7 22-4-4 4-4" }),
    path({ "d": "M21 13v1a4 4 0 0 1-4 4H3" })
  );
}, "Repeat");

// src/icons/ReplaceAll.ts
import van1149 from "vanjs-core";
var ReplaceAll = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van1149.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M14 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" }),
    path({ "d": "M14 4a2 2 0 0 1 2-2" }),
    path({ "d": "M16 10a2 2 0 0 1-2-2" }),
    path({ "d": "M20 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2" }),
    path({ "d": "M20 2a2 2 0 0 1 2 2" }),
    path({ "d": "M22 8a2 2 0 0 1-2 2" }),
    path({ "d": "m3 7 3 3 3-3" }),
    path({ "d": "M6 10V5a 3 3 0 0 1 3-3h1" }),
    rect({ "x": "2", "y": "14", width: "8", height: "8", rx: "2" })
  );
}, "ReplaceAll");

// src/icons/Replace.ts
import van1150 from "vanjs-core";
var Replace = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van1150.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M14 4a2 2 0 0 1 2-2" }),
    path({ "d": "M16 10a2 2 0 0 1-2-2" }),
    path({ "d": "M20 2a2 2 0 0 1 2 2" }),
    path({ "d": "M22 8a2 2 0 0 1-2 2" }),
    path({ "d": "m3 7 3 3 3-3" }),
    path({ "d": "M6 10V5a3 3 0 0 1 3-3h1" }),
    rect({ "x": "2", "y": "14", width: "8", height: "8", rx: "2" })
  );
}, "Replace");

// src/icons/ReplyAll.ts
import van1151 from "vanjs-core";
var ReplyAll = /* @__PURE__ */ __name((props = {}) => {
  const { polyline, path } = van1151.tags(svgNamespace);
  return LucideIcon(
    props,
    polyline({ points: "7 17 2 12 7 7" }),
    polyline({ points: "12 17 7 12 12 7" }),
    path({ "d": "M22 18v-2a4 4 0 0 0-4-4H7" })
  );
}, "ReplyAll");

// src/icons/Reply.ts
import van1152 from "vanjs-core";
var Reply = /* @__PURE__ */ __name((props = {}) => {
  const { polyline, path } = van1152.tags(svgNamespace);
  return LucideIcon(
    props,
    polyline({ points: "9 17 4 12 9 7" }),
    path({ "d": "M20 18v-2a4 4 0 0 0-4-4H4" })
  );
}, "Reply");

// src/icons/Rewind.ts
import van1153 from "vanjs-core";
var Rewind = /* @__PURE__ */ __name((props = {}) => {
  const { polygon } = van1153.tags(svgNamespace);
  return LucideIcon(
    props,
    polygon({ points: "11 19 2 12 11 5 11 19" }),
    polygon({ points: "22 19 13 12 22 5 22 19" })
  );
}, "Rewind");

// src/icons/Ribbon.ts
import van1154 from "vanjs-core";
var Ribbon = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1154.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22"
    }),
    path({ "d": "m12 18 2.57-3.5" }),
    path({ "d": "M6.243 9.016a7 7 0 0 1 11.507-.009" }),
    path({ "d": "M9.35 14.53 12 11.22" }),
    path({
      "d": "M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z"
    })
  );
}, "Ribbon");

// src/icons/Rocket.ts
import van1155 from "vanjs-core";
var Rocket = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1155.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
    }),
    path({
      "d": "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
    }),
    path({ "d": "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" }),
    path({ "d": "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" })
  );
}, "Rocket");

// src/icons/RockingChair.ts
import van1156 from "vanjs-core";
var RockingChair = /* @__PURE__ */ __name((props = {}) => {
  const { polyline, line, path } = van1156.tags(svgNamespace);
  return LucideIcon(
    props,
    polyline({ points: "3.5 2 6.5 12.5 18 12.5" }),
    line({ x1: "9.5", x2: "5.5", y1: "12.5", y2: "20" }),
    line({ x1: "15", x2: "18.5", y1: "12.5", y2: "20" }),
    path({ "d": "M2.75 18a13 13 0 0 0 18.5 0" })
  );
}, "RockingChair");

// src/icons/RollerCoaster.ts
import van1157 from "vanjs-core";
var RollerCoaster = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1157.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M6 19V5" }),
    path({ "d": "M10 19V6.8" }),
    path({ "d": "M14 19v-7.8" }),
    path({ "d": "M18 5v4" }),
    path({ "d": "M18 19v-6" }),
    path({ "d": "M22 19V9" }),
    path({
      "d": "M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65"
    })
  );
}, "RollerCoaster");

// src/icons/Rotate3d.ts
import van1158 from "vanjs-core";
var Rotate3d = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1158.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2"
    }),
    path({ "d": "m15.194 13.707 3.814 1.86-1.86 3.814" }),
    path({
      "d": "M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4"
    })
  );
}, "Rotate3d");

// src/icons/RotateCcwSquare.ts
import van1159 from "vanjs-core";
var RotateCcwSquare = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1159.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M20 9V7a2 2 0 0 0-2-2h-6" }),
    path({ "d": "m15 2-3 3 3 3" }),
    path({ "d": "M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2" })
  );
}, "RotateCcwSquare");

// src/icons/RotateCcw.ts
import van1160 from "vanjs-core";
var RotateCcw = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1160.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }),
    path({ "d": "M3 3v5h5" })
  );
}, "RotateCcw");

// src/icons/RotateCwSquare.ts
import van1161 from "vanjs-core";
var RotateCwSquare = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1161.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 5H6a2 2 0 0 0-2 2v3" }),
    path({ "d": "m9 8 3-3-3-3" }),
    path({ "d": "M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" })
  );
}, "RotateCwSquare");

// src/icons/RotateCw.ts
import van1162 from "vanjs-core";
var RotateCw = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1162.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" }),
    path({ "d": "M21 3v5h-5" })
  );
}, "RotateCw");

// src/icons/RouteOff.ts
import van1163 from "vanjs-core";
var RouteOff = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van1163.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "6", cy: "19", "r": "3" }),
    path({ "d": "M9 19h8.5c.4 0 .9-.1 1.3-.2" }),
    path({ "d": "M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12" }),
    path({ "d": "m2 2 20 20" }),
    path({ "d": "M21 15.3a3.5 3.5 0 0 0-3.3-3.3" }),
    path({ "d": "M15 5h-4.3" }),
    circle({ cx: "18", cy: "5", "r": "3" })
  );
}, "RouteOff");

// src/icons/Route.ts
import van1164 from "vanjs-core";
var Route = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van1164.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "6", cy: "19", "r": "3" }),
    path({ "d": "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" }),
    circle({ cx: "18", cy: "5", "r": "3" })
  );
}, "Route");

// src/icons/Router.ts
import van1165 from "vanjs-core";
var Router = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1165.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "20", height: "8", "x": "2", "y": "14", rx: "2" }),
    path({ "d": "M6.01 18H6" }),
    path({ "d": "M10.01 18H10" }),
    path({ "d": "M15 10v4" }),
    path({ "d": "M17.84 7.17a4 4 0 0 0-5.66 0" }),
    path({ "d": "M20.66 4.34a8 8 0 0 0-11.31 0" })
  );
}, "Router");

// src/icons/Rows2.ts
import van1166 from "vanjs-core";
var Rows2 = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1166.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M3 12h18" })
  );
}, "Rows2");

// src/icons/Rows3.ts
import van1167 from "vanjs-core";
var Rows3 = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1167.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M21 9H3" }),
    path({ "d": "M21 15H3" })
  );
}, "Rows3");

// src/icons/Rows4.ts
import van1168 from "vanjs-core";
var Rows4 = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1168.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M21 7.5H3" }),
    path({ "d": "M21 12H3" }),
    path({ "d": "M21 16.5H3" })
  );
}, "Rows4");

// src/icons/Rss.ts
import van1169 from "vanjs-core";
var Rss = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1169.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 11a9 9 0 0 1 9 9" }),
    path({ "d": "M4 4a16 16 0 0 1 16 16" }),
    circle({ cx: "5", cy: "19", "r": "1" })
  );
}, "Rss");

// src/icons/Ruler.ts
import van1170 from "vanjs-core";
var Ruler = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1170.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"
    }),
    path({ "d": "m14.5 12.5 2-2" }),
    path({ "d": "m11.5 9.5 2-2" }),
    path({ "d": "m8.5 6.5 2-2" }),
    path({ "d": "m17.5 15.5 2-2" })
  );
}, "Ruler");

// src/icons/RussianRuble.ts
import van1171 from "vanjs-core";
var RussianRuble = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1171.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M6 11h8a4 4 0 0 0 0-8H9v18" }),
    path({ "d": "M6 15h8" })
  );
}, "RussianRuble");

// src/icons/Sailboat.ts
import van1172 from "vanjs-core";
var Sailboat = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1172.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z" }),
    path({ "d": "M21 14 10 2 3 14h18Z" }),
    path({ "d": "M10 2v16" })
  );
}, "Sailboat");

// src/icons/Salad.ts
import van1173 from "vanjs-core";
var Salad = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1173.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M7 21h10" }),
    path({ "d": "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" }),
    path({
      "d": "M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1"
    }),
    path({ "d": "m13 12 4-4" }),
    path({ "d": "M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2" })
  );
}, "Salad");

// src/icons/Sandwich.ts
import van1174 from "vanjs-core";
var Sandwich = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van1174.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777" }),
    path({ "d": "M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25" }),
    path({ "d": "M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9" }),
    path({ "d": "m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" }),
    rect({ width: "20", height: "4", "x": "2", "y": "11", rx: "1" })
  );
}, "Sandwich");

// src/icons/SatelliteDish.ts
import van1175 from "vanjs-core";
var SatelliteDish = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1175.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 10a7.31 7.31 0 0 0 10 10Z" }),
    path({ "d": "m9 15 3-3" }),
    path({ "d": "M17 13a6 6 0 0 0-6-6" }),
    path({ "d": "M21 13A10 10 0 0 0 11 3" })
  );
}, "SatelliteDish");

// src/icons/Satellite.ts
import van1176 from "vanjs-core";
var Satellite = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1176.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M13 7 9 3 5 7l4 4" }),
    path({ "d": "m17 11 4 4-4 4-4-4" }),
    path({ "d": "m8 12 4 4 6-6-4-4Z" }),
    path({ "d": "m16 8 3-3" }),
    path({ "d": "M9 21a6 6 0 0 0-6-6" })
  );
}, "Satellite");

// src/icons/SaveAll.ts
import van1177 from "vanjs-core";
var SaveAll = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1177.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 2v3a1 1 0 0 0 1 1h5" }),
    path({ "d": "M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6" }),
    path({ "d": "M18 22H4a2 2 0 0 1-2-2V6" }),
    path({
      "d": "M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z"
    })
  );
}, "SaveAll");

// src/icons/SaveOff.ts
import van1178 from "vanjs-core";
var SaveOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1178.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M13 13H8a1 1 0 0 0-1 1v7" }),
    path({ "d": "M14 8h1" }),
    path({ "d": "M17 21v-4" }),
    path({ "d": "m2 2 20 20" }),
    path({
      "d": "M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41"
    }),
    path({ "d": "M29.5 11.5s5 5 4 5" }),
    path({ "d": "M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15" })
  );
}, "SaveOff");

// src/icons/Save.ts
import van1179 from "vanjs-core";
var Save = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1179.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
    }),
    path({ "d": "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" }),
    path({ "d": "M7 3v4a1 1 0 0 0 1 1h7" })
  );
}, "Save");

// src/icons/Scale3d.ts
import van1180 from "vanjs-core";
var Scale3d = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1180.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M5 7v11a1 1 0 0 0 1 1h11" }),
    path({ "d": "M5.293 18.707 11 13" }),
    circle({ cx: "19", cy: "19", "r": "2" }),
    circle({ cx: "5", cy: "5", "r": "2" })
  );
}, "Scale3d");

// src/icons/Scale.ts
import van1181 from "vanjs-core";
var Scale = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1181.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" }),
    path({ "d": "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" }),
    path({ "d": "M7 21h10" }),
    path({ "d": "M12 3v18" }),
    path({ "d": "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" })
  );
}, "Scale");

// src/icons/Scaling.ts
import van1182 from "vanjs-core";
var Scaling = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1182.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }),
    path({ "d": "M14 15H9v-5" }),
    path({ "d": "M16 3h5v5" }),
    path({ "d": "M21 3 9 15" })
  );
}, "Scaling");

// src/icons/ScanBarcode.ts
import van1183 from "vanjs-core";
var ScanBarcode = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1183.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 7V5a2 2 0 0 1 2-2h2" }),
    path({ "d": "M17 3h2a2 2 0 0 1 2 2v2" }),
    path({ "d": "M21 17v2a2 2 0 0 1-2 2h-2" }),
    path({ "d": "M7 21H5a2 2 0 0 1-2-2v-2" }),
    path({ "d": "M8 7v10" }),
    path({ "d": "M12 7v10" }),
    path({ "d": "M17 7v10" })
  );
}, "ScanBarcode");

// src/icons/ScanEye.ts
import van1184 from "vanjs-core";
var ScanEye = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1184.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 7V5a2 2 0 0 1 2-2h2" }),
    path({ "d": "M17 3h2a2 2 0 0 1 2 2v2" }),
    path({ "d": "M21 17v2a2 2 0 0 1-2 2h-2" }),
    path({ "d": "M7 21H5a2 2 0 0 1-2-2v-2" }),
    circle({ cx: "12", cy: "12", "r": "1" }),
    path({
      "d": "M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"
    })
  );
}, "ScanEye");

// src/icons/ScanFace.ts
import van1185 from "vanjs-core";
var ScanFace = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1185.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 7V5a2 2 0 0 1 2-2h2" }),
    path({ "d": "M17 3h2a2 2 0 0 1 2 2v2" }),
    path({ "d": "M21 17v2a2 2 0 0 1-2 2h-2" }),
    path({ "d": "M7 21H5a2 2 0 0 1-2-2v-2" }),
    path({ "d": "M8 14s1.5 2 4 2 4-2 4-2" }),
    path({ "d": "M9 9h.01" }),
    path({ "d": "M15 9h.01" })
  );
}, "ScanFace");

// src/icons/ScanHeart.ts
import van1186 from "vanjs-core";
var ScanHeart = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1186.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M11.246 16.657a1 1 0 0 0 1.508 0l3.57-4.101A2.75 2.75 0 1 0 12 9.168a2.75 2.75 0 1 0-4.324 3.388z"
    }),
    path({ "d": "M17 3h2a2 2 0 0 1 2 2v2" }),
    path({ "d": "M21 17v2a2 2 0 0 1-2 2h-2" }),
    path({ "d": "M3 7V5a2 2 0 0 1 2-2h2" }),
    path({ "d": "M7 21H5a2 2 0 0 1-2-2v-2" })
  );
}, "ScanHeart");

// src/icons/ScanLine.ts
import van1187 from "vanjs-core";
var ScanLine = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1187.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 7V5a2 2 0 0 1 2-2h2" }),
    path({ "d": "M17 3h2a2 2 0 0 1 2 2v2" }),
    path({ "d": "M21 17v2a2 2 0 0 1-2 2h-2" }),
    path({ "d": "M7 21H5a2 2 0 0 1-2-2v-2" }),
    path({ "d": "M7 12h10" })
  );
}, "ScanLine");

// src/icons/ScanQrCode.ts
import van1188 from "vanjs-core";
var ScanQrCode = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van1188.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M17 12v4a1 1 0 0 1-1 1h-4" }),
    path({ "d": "M17 3h2a2 2 0 0 1 2 2v2" }),
    path({ "d": "M17 8V7" }),
    path({ "d": "M21 17v2a2 2 0 0 1-2 2h-2" }),
    path({ "d": "M3 7V5a2 2 0 0 1 2-2h2" }),
    path({ "d": "M7 17h.01" }),
    path({ "d": "M7 21H5a2 2 0 0 1-2-2v-2" }),
    rect({ "x": "7", "y": "7", width: "5", height: "5", rx: "1" })
  );
}, "ScanQrCode");

// src/icons/ScanSearch.ts
import van1189 from "vanjs-core";
var ScanSearch = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1189.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 7V5a2 2 0 0 1 2-2h2" }),
    path({ "d": "M17 3h2a2 2 0 0 1 2 2v2" }),
    path({ "d": "M21 17v2a2 2 0 0 1-2 2h-2" }),
    path({ "d": "M7 21H5a2 2 0 0 1-2-2v-2" }),
    circle({ cx: "12", cy: "12", "r": "3" }),
    path({ "d": "m16 16-1.9-1.9" })
  );
}, "ScanSearch");

// src/icons/ScanText.ts
import van1190 from "vanjs-core";
var ScanText = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1190.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 7V5a2 2 0 0 1 2-2h2" }),
    path({ "d": "M17 3h2a2 2 0 0 1 2 2v2" }),
    path({ "d": "M21 17v2a2 2 0 0 1-2 2h-2" }),
    path({ "d": "M7 21H5a2 2 0 0 1-2-2v-2" }),
    path({ "d": "M7 8h8" }),
    path({ "d": "M7 12h10" }),
    path({ "d": "M7 16h6" })
  );
}, "ScanText");

// src/icons/Scan.ts
import van1191 from "vanjs-core";
var Scan = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1191.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 7V5a2 2 0 0 1 2-2h2" }),
    path({ "d": "M17 3h2a2 2 0 0 1 2 2v2" }),
    path({ "d": "M21 17v2a2 2 0 0 1-2 2h-2" }),
    path({ "d": "M7 21H5a2 2 0 0 1-2-2v-2" })
  );
}, "Scan");

// src/icons/School.ts
import van1192 from "vanjs-core";
var School = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1192.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M14 22v-4a2 2 0 1 0-4 0v4" }),
    path({
      "d": "m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10"
    }),
    path({ "d": "M18 5v17" }),
    path({ "d": "m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6" }),
    path({ "d": "M6 5v17" }),
    circle({ cx: "12", cy: "9", "r": "2" })
  );
}, "School");

// src/icons/ScissorsLineDashed.ts
import van1193 from "vanjs-core";
var ScissorsLineDashed = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1193.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M5.42 9.42 8 12" }),
    circle({ cx: "4", cy: "8", "r": "2" }),
    path({ "d": "m14 6-8.58 8.58" }),
    circle({ cx: "4", cy: "16", "r": "2" }),
    path({ "d": "M10.8 14.8 14 18" }),
    path({ "d": "M16 12h-2" }),
    path({ "d": "M22 12h-2" })
  );
}, "ScissorsLineDashed");

// src/icons/Scissors.ts
import van1194 from "vanjs-core";
var Scissors = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van1194.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "6", cy: "6", "r": "3" }),
    path({ "d": "M8.12 8.12 12 12" }),
    path({ "d": "M20 4 8.12 15.88" }),
    circle({ cx: "6", cy: "18", "r": "3" }),
    path({ "d": "M14.8 14.8 20 20" })
  );
}, "Scissors");

// src/icons/ScreenShareOff.ts
import van1195 from "vanjs-core";
var ScreenShareOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1195.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" }),
    path({ "d": "M8 21h8" }),
    path({ "d": "M12 17v4" }),
    path({ "d": "m22 3-5 5" }),
    path({ "d": "m17 3 5 5" })
  );
}, "ScreenShareOff");

// src/icons/ScreenShare.ts
import van1196 from "vanjs-core";
var ScreenShare = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1196.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" }),
    path({ "d": "M8 21h8" }),
    path({ "d": "M12 17v4" }),
    path({ "d": "m17 8 5-5" }),
    path({ "d": "M17 3h5v5" })
  );
}, "ScreenShare");

// src/icons/ScrollText.ts
import van1197 from "vanjs-core";
var ScrollText = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1197.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 12h-5" }),
    path({ "d": "M15 8h-5" }),
    path({ "d": "M19 17V5a2 2 0 0 0-2-2H4" }),
    path({
      "d": "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"
    })
  );
}, "ScrollText");

// src/icons/Scroll.ts
import van1198 from "vanjs-core";
var Scroll = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1198.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M19 17V5a2 2 0 0 0-2-2H4" }),
    path({
      "d": "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"
    })
  );
}, "Scroll");

// src/icons/SearchCheck.ts
import van1199 from "vanjs-core";
var SearchCheck = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1199.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m8 11 2 2 4-4" }),
    circle({ cx: "11", cy: "11", "r": "8" }),
    path({ "d": "m21 21-4.3-4.3" })
  );
}, "SearchCheck");

// src/icons/SearchCode.ts
import van1200 from "vanjs-core";
var SearchCode = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1200.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m13 13.5 2-2.5-2-2.5" }),
    path({ "d": "m21 21-4.3-4.3" }),
    path({ "d": "M9 8.5 7 11l2 2.5" }),
    circle({ cx: "11", cy: "11", "r": "8" })
  );
}, "SearchCode");

// src/icons/SearchSlash.ts
import van1201 from "vanjs-core";
var SearchSlash = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1201.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m13.5 8.5-5 5" }),
    circle({ cx: "11", cy: "11", "r": "8" }),
    path({ "d": "m21 21-4.3-4.3" })
  );
}, "SearchSlash");

// src/icons/SearchX.ts
import van1202 from "vanjs-core";
var SearchX = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1202.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m13.5 8.5-5 5" }),
    path({ "d": "m8.5 8.5 5 5" }),
    circle({ cx: "11", cy: "11", "r": "8" }),
    path({ "d": "m21 21-4.3-4.3" })
  );
}, "SearchX");

// src/icons/Search.ts
import van1203 from "vanjs-core";
var Search = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van1203.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "11", cy: "11", "r": "8" }),
    path({ "d": "m21 21-4.3-4.3" })
  );
}, "Search");

// src/icons/Section.ts
import van1204 from "vanjs-core";
var Section = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1204.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0" }),
    path({ "d": "M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0" })
  );
}, "Section");

// src/icons/SendHorizontal.ts
import van1205 from "vanjs-core";
var SendHorizontal = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1205.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"
    }),
    path({ "d": "M6 12h16" })
  );
}, "SendHorizontal");

// src/icons/SendToBack.ts
import van1206 from "vanjs-core";
var SendToBack = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1206.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ "x": "14", "y": "14", width: "8", height: "8", rx: "2" }),
    rect({ "x": "2", "y": "2", width: "8", height: "8", rx: "2" }),
    path({ "d": "M7 14v1a2 2 0 0 0 2 2h1" }),
    path({ "d": "M14 7h1a2 2 0 0 1 2 2v1" })
  );
}, "SendToBack");

// src/icons/Send.ts
import van1207 from "vanjs-core";
var Send = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1207.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
    }),
    path({ "d": "m21.854 2.147-10.94 10.939" })
  );
}, "Send");

// src/icons/SeparatorHorizontal.ts
import van1208 from "vanjs-core";
var SeparatorHorizontal = /* @__PURE__ */ __name((props = {}) => {
  const { line, polyline } = van1208.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "3", x2: "21", y1: "12", y2: "12" }),
    polyline({ points: "8 8 12 4 16 8" }),
    polyline({ points: "16 16 12 20 8 16" })
  );
}, "SeparatorHorizontal");

// src/icons/SeparatorVertical.ts
import van1209 from "vanjs-core";
var SeparatorVertical = /* @__PURE__ */ __name((props = {}) => {
  const { line, polyline } = van1209.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "12", x2: "12", y1: "3", y2: "21" }),
    polyline({ points: "8 8 4 12 8 16" }),
    polyline({ points: "16 16 20 12 16 8" })
  );
}, "SeparatorVertical");

// src/icons/ServerCog.ts
import van1210 from "vanjs-core";
var ServerCog = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van1210.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "3" }),
    path({
      "d": "M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"
    }),
    path({
      "d": "M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"
    }),
    path({ "d": "M6 6h.01" }),
    path({ "d": "M6 18h.01" }),
    path({ "d": "m15.7 13.4-.9-.3" }),
    path({ "d": "m9.2 10.9-.9-.3" }),
    path({ "d": "m10.6 15.7.3-.9" }),
    path({ "d": "m13.6 15.7-.4-1" }),
    path({ "d": "m10.8 9.3-.4-1" }),
    path({ "d": "m8.3 13.6 1-.4" }),
    path({ "d": "m14.7 10.8 1-.4" }),
    path({ "d": "m13.4 8.3-.3.9" })
  );
}, "ServerCog");

// src/icons/ServerCrash.ts
import van1211 from "vanjs-core";
var ServerCrash = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1211.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"
    }),
    path({
      "d": "M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2"
    }),
    path({ "d": "M6 6h.01" }),
    path({ "d": "M6 18h.01" }),
    path({ "d": "m13 6-4 6h6l-4 6" })
  );
}, "ServerCrash");

// src/icons/ServerOff.ts
import van1212 from "vanjs-core";
var ServerOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1212.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5" }),
    path({ "d": "M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z" }),
    path({ "d": "M22 17v-1a2 2 0 0 0-2-2h-1" }),
    path({ "d": "M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z" }),
    path({ "d": "M6 18h.01" }),
    path({ "d": "m2 2 20 20" })
  );
}, "ServerOff");

// src/icons/Server.ts
import van1213 from "vanjs-core";
var Server = /* @__PURE__ */ __name((props = {}) => {
  const { rect, line } = van1213.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "20", height: "8", "x": "2", "y": "2", rx: "2", ry: "2" }),
    rect({ width: "20", height: "8", "x": "2", "y": "14", rx: "2", ry: "2" }),
    line({ x1: "6", x2: "6.01", y1: "6", y2: "6" }),
    line({ x1: "6", x2: "6.01", y1: "18", y2: "18" })
  );
}, "Server");

// src/icons/Settings2.ts
import van1214 from "vanjs-core";
var Settings2 = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1214.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M20 7h-9" }),
    path({ "d": "M14 17H5" }),
    circle({ cx: "17", cy: "17", "r": "3" }),
    circle({ cx: "7", cy: "7", "r": "3" })
  );
}, "Settings2");

// src/icons/Settings.ts
import van1215 from "vanjs-core";
var Settings = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1215.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
    }),
    circle({ cx: "12", cy: "12", "r": "3" })
  );
}, "Settings");

// src/icons/Shapes.ts
import van1216 from "vanjs-core";
var Shapes = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect, circle } = van1216.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"
    }),
    rect({ "x": "3", "y": "14", width: "7", height: "7", rx: "1" }),
    circle({ cx: "17.5", cy: "17.5", "r": "3.5" })
  );
}, "Shapes");

// src/icons/Share2.ts
import van1217 from "vanjs-core";
var Share2 = /* @__PURE__ */ __name((props = {}) => {
  const { circle, line } = van1217.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "18", cy: "5", "r": "3" }),
    circle({ cx: "6", cy: "12", "r": "3" }),
    circle({ cx: "18", cy: "19", "r": "3" }),
    line({ x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49" }),
    line({ x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49" })
  );
}, "Share2");

// src/icons/Share.ts
import van1218 from "vanjs-core";
var Share = /* @__PURE__ */ __name((props = {}) => {
  const { path, polyline, line } = van1218.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" }),
    polyline({ points: "16 6 12 2 8 6" }),
    line({ x1: "12", x2: "12", y1: "2", y2: "15" })
  );
}, "Share");

// src/icons/Sheet.ts
import van1219 from "vanjs-core";
var Sheet = /* @__PURE__ */ __name((props = {}) => {
  const { rect, line } = van1219.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2", ry: "2" }),
    line({ x1: "3", x2: "21", y1: "9", y2: "9" }),
    line({ x1: "3", x2: "21", y1: "15", y2: "15" }),
    line({ x1: "9", x2: "9", y1: "9", y2: "21" }),
    line({ x1: "15", x2: "15", y1: "9", y2: "21" })
  );
}, "Sheet");

// src/icons/Shell.ts
import van1220 from "vanjs-core";
var Shell = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1220.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44"
    })
  );
}, "Shell");

// src/icons/ShieldAlert.ts
import van1221 from "vanjs-core";
var ShieldAlert = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1221.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
    }),
    path({ "d": "M12 8v4" }),
    path({ "d": "M12 16h.01" })
  );
}, "ShieldAlert");

// src/icons/ShieldBan.ts
import van1222 from "vanjs-core";
var ShieldBan = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1222.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
    }),
    path({ "d": "m4.243 5.21 14.39 12.472" })
  );
}, "ShieldBan");

// src/icons/ShieldCheck.ts
import van1223 from "vanjs-core";
var ShieldCheck = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1223.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
    }),
    path({ "d": "m9 12 2 2 4-4" })
  );
}, "ShieldCheck");

// src/icons/ShieldEllipsis.ts
import van1224 from "vanjs-core";
var ShieldEllipsis = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1224.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
    }),
    path({ "d": "M8 12h.01" }),
    path({ "d": "M12 12h.01" }),
    path({ "d": "M16 12h.01" })
  );
}, "ShieldEllipsis");

// src/icons/ShieldHalf.ts
import van1225 from "vanjs-core";
var ShieldHalf = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1225.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
    }),
    path({ "d": "M12 22V2" })
  );
}, "ShieldHalf");

// src/icons/ShieldMinus.ts
import van1226 from "vanjs-core";
var ShieldMinus = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1226.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
    }),
    path({ "d": "M9 12h6" })
  );
}, "ShieldMinus");

// src/icons/ShieldOff.ts
import van1227 from "vanjs-core";
var ShieldOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1227.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m2 2 20 20" }),
    path({
      "d": "M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71"
    }),
    path({
      "d": "M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264"
    })
  );
}, "ShieldOff");

// src/icons/ShieldPlus.ts
import van1228 from "vanjs-core";
var ShieldPlus = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1228.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
    }),
    path({ "d": "M9 12h6" }),
    path({ "d": "M12 9v6" })
  );
}, "ShieldPlus");

// src/icons/ShieldQuestion.ts
import van1229 from "vanjs-core";
var ShieldQuestion = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1229.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
    }),
    path({ "d": "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" }),
    path({ "d": "M12 17h.01" })
  );
}, "ShieldQuestion");

// src/icons/ShieldUser.ts
import van1230 from "vanjs-core";
var ShieldUser = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1230.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
    }),
    path({ "d": "M6.376 18.91a6 6 0 0 1 11.249.003" }),
    circle({ cx: "12", cy: "11", "r": "4" })
  );
}, "ShieldUser");

// src/icons/ShieldX.ts
import van1231 from "vanjs-core";
var ShieldX = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1231.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
    }),
    path({ "d": "m14.5 9.5-5 5" }),
    path({ "d": "m9.5 9.5 5 5" })
  );
}, "ShieldX");

// src/icons/Shield.ts
import van1232 from "vanjs-core";
var Shield = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1232.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
    })
  );
}, "Shield");

// src/icons/ShipWheel.ts
import van1233 from "vanjs-core";
var ShipWheel = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van1233.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "8" }),
    path({ "d": "M12 2v7.5" }),
    path({ "d": "m19 5-5.23 5.23" }),
    path({ "d": "M22 12h-7.5" }),
    path({ "d": "m19 19-5.23-5.23" }),
    path({ "d": "M12 14.5V22" }),
    path({ "d": "M10.23 13.77 5 19" }),
    path({ "d": "M9.5 12H2" }),
    path({ "d": "M10.23 10.23 5 5" }),
    circle({ cx: "12", cy: "12", "r": "2.5" })
  );
}, "ShipWheel");

// src/icons/Ship.ts
import van1234 from "vanjs-core";
var Ship = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1234.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 10.189V14" }),
    path({ "d": "M12 2v3" }),
    path({ "d": "M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" }),
    path({
      "d": "M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76"
    }),
    path({
      "d": "M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
    })
  );
}, "Ship");

// src/icons/Shirt.ts
import van1235 from "vanjs-core";
var Shirt = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1235.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"
    })
  );
}, "Shirt");

// src/icons/ShoppingBag.ts
import van1236 from "vanjs-core";
var ShoppingBag = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1236.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" }),
    path({ "d": "M3 6h18" }),
    path({ "d": "M16 10a4 4 0 0 1-8 0" })
  );
}, "ShoppingBag");

// src/icons/ShoppingBasket.ts
import van1237 from "vanjs-core";
var ShoppingBasket = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1237.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m15 11-1 9" }),
    path({ "d": "m19 11-4-7" }),
    path({ "d": "M2 11h20" }),
    path({
      "d": "m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"
    }),
    path({ "d": "M4.5 15.5h15" }),
    path({ "d": "m5 11 4-7" }),
    path({ "d": "m9 11 1 9" })
  );
}, "ShoppingBasket");

// src/icons/ShoppingCart.ts
import van1238 from "vanjs-core";
var ShoppingCart = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van1238.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "8", cy: "21", "r": "1" }),
    circle({ cx: "19", cy: "21", "r": "1" }),
    path({
      "d": "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
    })
  );
}, "ShoppingCart");

// src/icons/Shovel.ts
import van1239 from "vanjs-core";
var Shovel = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1239.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 22v-5l5-5 5 5-5 5z" }),
    path({ "d": "M9.5 14.5 16 8" }),
    path({
      "d": "m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2"
    })
  );
}, "Shovel");

// src/icons/ShowerHead.ts
import van1240 from "vanjs-core";
var ShowerHead = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1240.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m4 4 2.5 2.5" }),
    path({ "d": "M13.5 6.5a4.95 4.95 0 0 0-7 7" }),
    path({ "d": "M15 5 5 15" }),
    path({ "d": "M14 17v.01" }),
    path({ "d": "M10 16v.01" }),
    path({ "d": "M13 13v.01" }),
    path({ "d": "M16 10v.01" }),
    path({ "d": "M11 20v.01" }),
    path({ "d": "M17 14v.01" }),
    path({ "d": "M20 11v.01" })
  );
}, "ShowerHead");

// src/icons/Shrink.ts
import van1241 from "vanjs-core";
var Shrink = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1241.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m15 15 6 6m-6-6v4.8m0-4.8h4.8" }),
    path({ "d": "M9 19.8V15m0 0H4.2M9 15l-6 6" }),
    path({ "d": "M15 4.2V9m0 0h4.8M15 9l6-6" }),
    path({ "d": "M9 4.2V9m0 0H4.2M9 9 3 3" })
  );
}, "Shrink");

// src/icons/Shrub.ts
import van1242 from "vanjs-core";
var Shrub = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1242.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 22v-7l-2-2" }),
    path({
      "d": "M17 8v.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0Z"
    }),
    path({ "d": "m14 14-2 2" })
  );
}, "Shrub");

// src/icons/Shuffle.ts
import van1243 from "vanjs-core";
var Shuffle = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1243.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m18 14 4 4-4 4" }),
    path({ "d": "m18 2 4 4-4 4" }),
    path({
      "d": "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"
    }),
    path({ "d": "M2 6h1.972a4 4 0 0 1 3.6 2.2" }),
    path({ "d": "M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45" })
  );
}, "Shuffle");

// src/icons/Sigma.ts
import van1244 from "vanjs-core";
var Sigma = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1244.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2"
    })
  );
}, "Sigma");

// src/icons/SignalHigh.ts
import van1245 from "vanjs-core";
var SignalHigh = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1245.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 20h.01" }),
    path({ "d": "M7 20v-4" }),
    path({ "d": "M12 20v-8" }),
    path({ "d": "M17 20V8" })
  );
}, "SignalHigh");

// src/icons/SignalLow.ts
import van1246 from "vanjs-core";
var SignalLow = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1246.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 20h.01" }),
    path({ "d": "M7 20v-4" })
  );
}, "SignalLow");

// src/icons/SignalMedium.ts
import van1247 from "vanjs-core";
var SignalMedium = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1247.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 20h.01" }),
    path({ "d": "M7 20v-4" }),
    path({ "d": "M12 20v-8" })
  );
}, "SignalMedium");

// src/icons/SignalZero.ts
import van1248 from "vanjs-core";
var SignalZero = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1248.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 20h.01" })
  );
}, "SignalZero");

// src/icons/Signal.ts
import van1249 from "vanjs-core";
var Signal = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1249.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 20h.01" }),
    path({ "d": "M7 20v-4" }),
    path({ "d": "M12 20v-8" }),
    path({ "d": "M17 20V8" }),
    path({ "d": "M22 4v16" })
  );
}, "Signal");

// src/icons/Signature.ts
import van1250 from "vanjs-core";
var Signature = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1250.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284"
    }),
    path({ "d": "M3 21h18" })
  );
}, "Signature");

// src/icons/SignpostBig.ts
import van1251 from "vanjs-core";
var SignpostBig = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1251.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 9H4L2 7l2-2h6" }),
    path({ "d": "M14 5h6l2 2-2 2h-6" }),
    path({ "d": "M10 22V4a2 2 0 1 1 4 0v18" }),
    path({ "d": "M8 22h8" })
  );
}, "SignpostBig");

// src/icons/Signpost.ts
import van1252 from "vanjs-core";
var Signpost = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1252.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 13v8" }),
    path({ "d": "M12 3v3" }),
    path({
      "d": "M18 6a2 2 0 0 1 1.387.56l2.307 2.22a1 1 0 0 1 0 1.44l-2.307 2.22A2 2 0 0 1 18 13H6a2 2 0 0 1-1.387-.56l-2.306-2.22a1 1 0 0 1 0-1.44l2.306-2.22A2 2 0 0 1 6 6z"
    })
  );
}, "Signpost");

// src/icons/Siren.ts
import van1253 from "vanjs-core";
var Siren = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1253.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M7 18v-6a5 5 0 1 1 10 0v6" }),
    path({
      "d": "M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"
    }),
    path({ "d": "M21 12h1" }),
    path({ "d": "M18.5 4.5 18 5" }),
    path({ "d": "M2 12h1" }),
    path({ "d": "M12 2v1" }),
    path({ "d": "m4.929 4.929.707.707" }),
    path({ "d": "M12 12v6" })
  );
}, "Siren");

// src/icons/SkipBack.ts
import van1254 from "vanjs-core";
var SkipBack = /* @__PURE__ */ __name((props = {}) => {
  const { polygon, line } = van1254.tags(svgNamespace);
  return LucideIcon(
    props,
    polygon({ points: "19 20 9 12 19 4 19 20" }),
    line({ x1: "5", x2: "5", y1: "19", y2: "5" })
  );
}, "SkipBack");

// src/icons/SkipForward.ts
import van1255 from "vanjs-core";
var SkipForward = /* @__PURE__ */ __name((props = {}) => {
  const { polygon, line } = van1255.tags(svgNamespace);
  return LucideIcon(
    props,
    polygon({ points: "5 4 15 12 5 20 5 4" }),
    line({ x1: "19", x2: "19", y1: "5", y2: "19" })
  );
}, "SkipForward");

// src/icons/Skull.ts
import van1256 from "vanjs-core";
var Skull = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1256.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m12.5 17-.5-1-.5 1h1z" }),
    path({
      "d": "M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z"
    }),
    circle({ cx: "15", cy: "12", "r": "1" }),
    circle({ cx: "9", cy: "12", "r": "1" })
  );
}, "Skull");

// src/icons/Slack.ts
import van1257 from "vanjs-core";
var Slack = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1257.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "3", height: "8", "x": "13", "y": "2", rx: "1.5" }),
    path({ "d": "M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5" }),
    rect({ width: "3", height: "8", "x": "8", "y": "14", rx: "1.5" }),
    path({ "d": "M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5" }),
    rect({ width: "8", height: "3", "x": "14", "y": "13", rx: "1.5" }),
    path({ "d": "M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5" }),
    rect({ width: "8", height: "3", "x": "2", "y": "8", rx: "1.5" }),
    path({ "d": "M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5" })
  );
}, "Slack");

// src/icons/Slash.ts
import van1258 from "vanjs-core";
var Slash = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1258.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M22 2 2 22" })
  );
}, "Slash");

// src/icons/Slice.ts
import van1259 from "vanjs-core";
var Slice = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1259.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M11 16.586V19a1 1 0 0 1-1 1H2L18.37 3.63a1 1 0 1 1 3 3l-9.663 9.663a1 1 0 0 1-1.414 0L8 14"
    })
  );
}, "Slice");

// src/icons/SlidersHorizontal.ts
import van1260 from "vanjs-core";
var SlidersHorizontal = /* @__PURE__ */ __name((props = {}) => {
  const { line } = van1260.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "21", x2: "14", y1: "4", y2: "4" }),
    line({ x1: "10", x2: "3", y1: "4", y2: "4" }),
    line({ x1: "21", x2: "12", y1: "12", y2: "12" }),
    line({ x1: "8", x2: "3", y1: "12", y2: "12" }),
    line({ x1: "21", x2: "16", y1: "20", y2: "20" }),
    line({ x1: "12", x2: "3", y1: "20", y2: "20" }),
    line({ x1: "14", x2: "14", y1: "2", y2: "6" }),
    line({ x1: "8", x2: "8", y1: "10", y2: "14" }),
    line({ x1: "16", x2: "16", y1: "18", y2: "22" })
  );
}, "SlidersHorizontal");

// src/icons/SlidersVertical.ts
import van1261 from "vanjs-core";
var SlidersVertical = /* @__PURE__ */ __name((props = {}) => {
  const { line } = van1261.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "4", x2: "4", y1: "21", y2: "14" }),
    line({ x1: "4", x2: "4", y1: "10", y2: "3" }),
    line({ x1: "12", x2: "12", y1: "21", y2: "12" }),
    line({ x1: "12", x2: "12", y1: "8", y2: "3" }),
    line({ x1: "20", x2: "20", y1: "21", y2: "16" }),
    line({ x1: "20", x2: "20", y1: "12", y2: "3" }),
    line({ x1: "2", x2: "6", y1: "14", y2: "14" }),
    line({ x1: "10", x2: "14", y1: "8", y2: "8" }),
    line({ x1: "18", x2: "22", y1: "16", y2: "16" })
  );
}, "SlidersVertical");

// src/icons/SmartphoneCharging.ts
import van1262 from "vanjs-core";
var SmartphoneCharging = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1262.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "14", height: "20", "x": "5", "y": "2", rx: "2", ry: "2" }),
    path({ "d": "M12.667 8 10 12h4l-2.667 4" })
  );
}, "SmartphoneCharging");

// src/icons/SmartphoneNfc.ts
import van1263 from "vanjs-core";
var SmartphoneNfc = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1263.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "7", height: "12", "x": "2", "y": "6", rx: "1" }),
    path({ "d": "M13 8.32a7.43 7.43 0 0 1 0 7.36" }),
    path({ "d": "M16.46 6.21a11.76 11.76 0 0 1 0 11.58" }),
    path({ "d": "M19.91 4.1a15.91 15.91 0 0 1 .01 15.8" })
  );
}, "SmartphoneNfc");

// src/icons/Smartphone.ts
import van1264 from "vanjs-core";
var Smartphone = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1264.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "14", height: "20", "x": "5", "y": "2", rx: "2", ry: "2" }),
    path({ "d": "M12 18h.01" })
  );
}, "Smartphone");

// src/icons/SmilePlus.ts
import van1265 from "vanjs-core";
var SmilePlus = /* @__PURE__ */ __name((props = {}) => {
  const { path, line } = van1265.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M22 11v1a10 10 0 1 1-9-10" }),
    path({ "d": "M8 14s1.5 2 4 2 4-2 4-2" }),
    line({ x1: "9", x2: "9.01", y1: "9", y2: "9" }),
    line({ x1: "15", x2: "15.01", y1: "9", y2: "9" }),
    path({ "d": "M16 5h6" }),
    path({ "d": "M19 2v6" })
  );
}, "SmilePlus");

// src/icons/Smile.ts
import van1266 from "vanjs-core";
var Smile = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path, line } = van1266.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    path({ "d": "M8 14s1.5 2 4 2 4-2 4-2" }),
    line({ x1: "9", x2: "9.01", y1: "9", y2: "9" }),
    line({ x1: "15", x2: "15.01", y1: "9", y2: "9" })
  );
}, "Smile");

// src/icons/Snail.ts
import van1267 from "vanjs-core";
var Snail = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1267.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0" }),
    circle({ cx: "10", cy: "13", "r": "8" }),
    path({ "d": "M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6" }),
    path({ "d": "M18 3 19.1 5.2" }),
    path({ "d": "M22 3 20.9 5.2" })
  );
}, "Snail");

// src/icons/Snowflake.ts
import van1268 from "vanjs-core";
var Snowflake = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1268.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m10 20-1.25-2.5L6 18" }),
    path({ "d": "M10 4 8.75 6.5 6 6" }),
    path({ "d": "m14 20 1.25-2.5L18 18" }),
    path({ "d": "m14 4 1.25 2.5L18 6" }),
    path({ "d": "m17 21-3-6h-4" }),
    path({ "d": "m17 3-3 6 1.5 3" }),
    path({ "d": "M2 12h6.5L10 9" }),
    path({ "d": "m20 10-1.5 2 1.5 2" }),
    path({ "d": "M22 12h-6.5L14 15" }),
    path({ "d": "m4 10 1.5 2L4 14" }),
    path({ "d": "m7 21 3-6-1.5-3" }),
    path({ "d": "m7 3 3 6h4" })
  );
}, "Snowflake");

// src/icons/Sofa.ts
import van1269 from "vanjs-core";
var Sofa = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1269.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" }),
    path({
      "d": "M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"
    }),
    path({ "d": "M4 18v2" }),
    path({ "d": "M20 18v2" }),
    path({ "d": "M12 4v9" })
  );
}, "Sofa");

// src/icons/Soup.ts
import van1270 from "vanjs-core";
var Soup = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1270.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" }),
    path({ "d": "M7 21h10" }),
    path({ "d": "M19.5 12 22 6" }),
    path({
      "d": "M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62"
    }),
    path({
      "d": "M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62"
    }),
    path({
      "d": "M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62"
    })
  );
}, "Soup");

// src/icons/Space.ts
import van1271 from "vanjs-core";
var Space = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1271.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" })
  );
}, "Space");

// src/icons/Spade.ts
import van1272 from "vanjs-core";
var Spade = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1272.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z"
    }),
    path({ "d": "M12 18v4" })
  );
}, "Spade");

// src/icons/Sparkle.ts
import van1273 from "vanjs-core";
var Sparkle = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1273.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
    })
  );
}, "Sparkle");

// src/icons/Sparkles.ts
import van1274 from "vanjs-core";
var Sparkles = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1274.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
    }),
    path({ "d": "M20 3v4" }),
    path({ "d": "M22 5h-4" }),
    path({ "d": "M4 17v2" }),
    path({ "d": "M5 18H3" })
  );
}, "Sparkles");

// src/icons/Speaker.ts
import van1275 from "vanjs-core";
var Speaker = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path, circle } = van1275.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "16", height: "20", "x": "4", "y": "2", rx: "2" }),
    path({ "d": "M12 6h.01" }),
    circle({ cx: "12", cy: "14", "r": "4" }),
    path({ "d": "M12 14h.01" })
  );
}, "Speaker");

// src/icons/Speech.ts
import van1276 from "vanjs-core";
var Speech = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1276.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20"
    }),
    path({ "d": "M19.8 17.8a7.5 7.5 0 0 0 .003-10.603" }),
    path({ "d": "M17 15a3.5 3.5 0 0 0-.025-4.975" })
  );
}, "Speech");

// src/icons/SpellCheck2.ts
import van1277 from "vanjs-core";
var SpellCheck2 = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1277.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m6 16 6-12 6 12" }),
    path({ "d": "M8 12h8" }),
    path({
      "d": "M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1"
    })
  );
}, "SpellCheck2");

// src/icons/SpellCheck.ts
import van1278 from "vanjs-core";
var SpellCheck = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1278.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m6 16 6-12 6 12" }),
    path({ "d": "M8 12h8" }),
    path({ "d": "m16 20 2 2 4-4" })
  );
}, "SpellCheck");

// src/icons/Spline.ts
import van1279 from "vanjs-core";
var Spline = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van1279.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "19", cy: "5", "r": "2" }),
    circle({ cx: "5", cy: "19", "r": "2" }),
    path({ "d": "M5 17A12 12 0 0 1 17 5" })
  );
}, "Spline");

// src/icons/Split.ts
import van1280 from "vanjs-core";
var Split = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1280.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 3h5v5" }),
    path({ "d": "M8 3H3v5" }),
    path({ "d": "M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" }),
    path({ "d": "m15 9 6-6" })
  );
}, "Split");

// src/icons/SprayCan.ts
import van1281 from "vanjs-core";
var SprayCan = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van1281.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 3h.01" }),
    path({ "d": "M7 5h.01" }),
    path({ "d": "M11 7h.01" }),
    path({ "d": "M3 7h.01" }),
    path({ "d": "M7 9h.01" }),
    path({ "d": "M3 11h.01" }),
    rect({ width: "4", height: "4", "x": "15", "y": "5" }),
    path({ "d": "m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2" }),
    path({ "d": "m13 14 8-2" }),
    path({ "d": "m13 19 8-2" })
  );
}, "SprayCan");

// src/icons/Sprout.ts
import van1282 from "vanjs-core";
var Sprout = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1282.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M7 20h10" }),
    path({ "d": "M10 20c5.5-2.5.8-6.4 3-10" }),
    path({
      "d": "M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"
    }),
    path({
      "d": "M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"
    })
  );
}, "Sprout");

// src/icons/SquareActivity.ts
import van1283 from "vanjs-core";
var SquareActivity = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1283.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M17 12h-2l-2 5-2-10-2 5H7" })
  );
}, "SquareActivity");

// src/icons/SquareArrowDownLeft.ts
import van1284 from "vanjs-core";
var SquareArrowDownLeft = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1284.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "m16 8-8 8" }),
    path({ "d": "M16 16H8V8" })
  );
}, "SquareArrowDownLeft");

// src/icons/SquareArrowDownRight.ts
import van1285 from "vanjs-core";
var SquareArrowDownRight = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1285.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "m8 8 8 8" }),
    path({ "d": "M16 8v8H8" })
  );
}, "SquareArrowDownRight");

// src/icons/SquareArrowDown.ts
import van1286 from "vanjs-core";
var SquareArrowDown = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1286.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M12 8v8" }),
    path({ "d": "m8 12 4 4 4-4" })
  );
}, "SquareArrowDown");

// src/icons/SquareArrowLeft.ts
import van1287 from "vanjs-core";
var SquareArrowLeft = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1287.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "m12 8-4 4 4 4" }),
    path({ "d": "M16 12H8" })
  );
}, "SquareArrowLeft");

// src/icons/SquareArrowOutDownLeft.ts
import van1288 from "vanjs-core";
var SquareArrowOutDownLeft = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1288.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6" }),
    path({ "d": "m3 21 9-9" }),
    path({ "d": "M9 21H3v-6" })
  );
}, "SquareArrowOutDownLeft");

// src/icons/SquareArrowOutDownRight.ts
import van1289 from "vanjs-core";
var SquareArrowOutDownRight = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1289.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" }),
    path({ "d": "m21 21-9-9" }),
    path({ "d": "M21 15v6h-6" })
  );
}, "SquareArrowOutDownRight");

// src/icons/SquareArrowOutUpLeft.ts
import van1290 from "vanjs-core";
var SquareArrowOutUpLeft = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1290.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6" }),
    path({ "d": "m3 3 9 9" }),
    path({ "d": "M3 9V3h6" })
  );
}, "SquareArrowOutUpLeft");

// src/icons/SquareArrowOutUpRight.ts
import van1291 from "vanjs-core";
var SquareArrowOutUpRight = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1291.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" }),
    path({ "d": "m21 3-9 9" }),
    path({ "d": "M15 3h6v6" })
  );
}, "SquareArrowOutUpRight");

// src/icons/SquareArrowRight.ts
import van1292 from "vanjs-core";
var SquareArrowRight = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1292.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M8 12h8" }),
    path({ "d": "m12 16 4-4-4-4" })
  );
}, "SquareArrowRight");

// src/icons/SquareArrowUpLeft.ts
import van1293 from "vanjs-core";
var SquareArrowUpLeft = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1293.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M8 16V8h8" }),
    path({ "d": "M16 16 8 8" })
  );
}, "SquareArrowUpLeft");

// src/icons/SquareArrowUpRight.ts
import van1294 from "vanjs-core";
var SquareArrowUpRight = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1294.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M8 8h8v8" }),
    path({ "d": "m8 16 8-8" })
  );
}, "SquareArrowUpRight");

// src/icons/SquareArrowUp.ts
import van1295 from "vanjs-core";
var SquareArrowUp = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1295.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "m16 12-4-4-4 4" }),
    path({ "d": "M12 16V8" })
  );
}, "SquareArrowUp");

// src/icons/SquareAsterisk.ts
import van1296 from "vanjs-core";
var SquareAsterisk = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1296.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M12 8v8" }),
    path({ "d": "m8.5 14 7-4" }),
    path({ "d": "m8.5 10 7 4" })
  );
}, "SquareAsterisk");

// src/icons/SquareBottomDashedScissors.ts
import van1297 from "vanjs-core";
var SquareBottomDashedScissors = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1297.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2"
    }),
    path({ "d": "M10 22H8" }),
    path({ "d": "M16 22h-2" }),
    circle({ cx: "8", cy: "8", "r": "2" }),
    path({ "d": "M9.414 9.414 12 12" }),
    path({ "d": "M14.8 14.8 18 18" }),
    circle({ cx: "8", cy: "16", "r": "2" }),
    path({ "d": "m18 6-8.586 8.586" })
  );
}, "SquareBottomDashedScissors");

// src/icons/SquareChartGantt.ts
import van1298 from "vanjs-core";
var SquareChartGantt = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1298.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M9 8h7" }),
    path({ "d": "M8 12h6" }),
    path({ "d": "M11 16h5" })
  );
}, "SquareChartGantt");

// src/icons/SquareCheckBig.ts
import van1299 from "vanjs-core";
var SquareCheckBig = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1299.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5"
    }),
    path({ "d": "m9 11 3 3L22 4" })
  );
}, "SquareCheckBig");

// src/icons/SquareCheck.ts
import van1300 from "vanjs-core";
var SquareCheck = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1300.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "m9 12 2 2 4-4" })
  );
}, "SquareCheck");

// src/icons/SquareChevronDown.ts
import van1301 from "vanjs-core";
var SquareChevronDown = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1301.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "m16 10-4 4-4-4" })
  );
}, "SquareChevronDown");

// src/icons/SquareChevronLeft.ts
import van1302 from "vanjs-core";
var SquareChevronLeft = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1302.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "m14 16-4-4 4-4" })
  );
}, "SquareChevronLeft");

// src/icons/SquareChevronRight.ts
import van1303 from "vanjs-core";
var SquareChevronRight = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1303.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "m10 8 4 4-4 4" })
  );
}, "SquareChevronRight");

// src/icons/SquareChevronUp.ts
import van1304 from "vanjs-core";
var SquareChevronUp = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1304.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "m8 14 4-4 4 4" })
  );
}, "SquareChevronUp");

// src/icons/SquareCode.ts
import van1305 from "vanjs-core";
var SquareCode = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van1305.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 9.5 8 12l2 2.5" }),
    path({ "d": "m14 9.5 2 2.5-2 2.5" }),
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" })
  );
}, "SquareCode");

// src/icons/SquareDashedBottomCode.ts
import van1306 from "vanjs-core";
var SquareDashedBottomCode = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1306.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 9.5 8 12l2 2.5" }),
    path({ "d": "M14 21h1" }),
    path({ "d": "m14 9.5 2 2.5-2 2.5" }),
    path({
      "d": "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"
    }),
    path({ "d": "M9 21h1" })
  );
}, "SquareDashedBottomCode");

// src/icons/SquareDashedBottom.ts
import van1307 from "vanjs-core";
var SquareDashedBottom = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1307.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"
    }),
    path({ "d": "M9 21h1" }),
    path({ "d": "M14 21h1" })
  );
}, "SquareDashedBottom");

// src/icons/SquareDashedKanban.ts
import van1308 from "vanjs-core";
var SquareDashedKanban = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1308.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 7v7" }),
    path({ "d": "M12 7v4" }),
    path({ "d": "M16 7v9" }),
    path({ "d": "M5 3a2 2 0 0 0-2 2" }),
    path({ "d": "M9 3h1" }),
    path({ "d": "M14 3h1" }),
    path({ "d": "M19 3a2 2 0 0 1 2 2" }),
    path({ "d": "M21 9v1" }),
    path({ "d": "M21 14v1" }),
    path({ "d": "M21 19a2 2 0 0 1-2 2" }),
    path({ "d": "M14 21h1" }),
    path({ "d": "M9 21h1" }),
    path({ "d": "M5 21a2 2 0 0 1-2-2" }),
    path({ "d": "M3 14v1" }),
    path({ "d": "M3 9v1" })
  );
}, "SquareDashedKanban");

// src/icons/SquareDashedMousePointer.ts
import van1309 from "vanjs-core";
var SquareDashedMousePointer = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1309.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"
    }),
    path({ "d": "M5 3a2 2 0 0 0-2 2" }),
    path({ "d": "M19 3a2 2 0 0 1 2 2" }),
    path({ "d": "M5 21a2 2 0 0 1-2-2" }),
    path({ "d": "M9 3h1" }),
    path({ "d": "M9 21h2" }),
    path({ "d": "M14 3h1" }),
    path({ "d": "M3 9v1" }),
    path({ "d": "M21 9v2" }),
    path({ "d": "M3 14v1" })
  );
}, "SquareDashedMousePointer");

// src/icons/SquareDashed.ts
import van1310 from "vanjs-core";
var SquareDashed = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1310.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M5 3a2 2 0 0 0-2 2" }),
    path({ "d": "M19 3a2 2 0 0 1 2 2" }),
    path({ "d": "M21 19a2 2 0 0 1-2 2" }),
    path({ "d": "M5 21a2 2 0 0 1-2-2" }),
    path({ "d": "M9 3h1" }),
    path({ "d": "M9 21h1" }),
    path({ "d": "M14 3h1" }),
    path({ "d": "M14 21h1" }),
    path({ "d": "M3 9v1" }),
    path({ "d": "M21 9v1" }),
    path({ "d": "M3 14v1" }),
    path({ "d": "M21 14v1" })
  );
}, "SquareDashed");

// src/icons/SquareDivide.ts
import van1311 from "vanjs-core";
var SquareDivide = /* @__PURE__ */ __name((props = {}) => {
  const { rect, line } = van1311.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2", ry: "2" }),
    line({ x1: "8", x2: "16", y1: "12", y2: "12" }),
    line({ x1: "12", x2: "12", y1: "16", y2: "16" }),
    line({ x1: "12", x2: "12", y1: "8", y2: "8" })
  );
}, "SquareDivide");

// src/icons/SquareDot.ts
import van1312 from "vanjs-core";
var SquareDot = /* @__PURE__ */ __name((props = {}) => {
  const { rect, circle } = van1312.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    circle({ cx: "12", cy: "12", "r": "1" })
  );
}, "SquareDot");

// src/icons/SquareEqual.ts
import van1313 from "vanjs-core";
var SquareEqual = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1313.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M7 10h10" }),
    path({ "d": "M7 14h10" })
  );
}, "SquareEqual");

// src/icons/SquareFunction.ts
import van1314 from "vanjs-core";
var SquareFunction = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1314.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2", ry: "2" }),
    path({ "d": "M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3" }),
    path({ "d": "M9 11.2h5.7" })
  );
}, "SquareFunction");

// src/icons/SquareKanban.ts
import van1315 from "vanjs-core";
var SquareKanban = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1315.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M8 7v7" }),
    path({ "d": "M12 7v4" }),
    path({ "d": "M16 7v9" })
  );
}, "SquareKanban");

// src/icons/SquareLibrary.ts
import van1316 from "vanjs-core";
var SquareLibrary = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1316.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M7 7v10" }),
    path({ "d": "M11 7v10" }),
    path({ "d": "m15 7 2 10" })
  );
}, "SquareLibrary");

// src/icons/SquareM.ts
import van1317 from "vanjs-core";
var SquareM = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1317.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M8 16V8l4 4 4-4v8" })
  );
}, "SquareM");

// src/icons/SquareMenu.ts
import van1318 from "vanjs-core";
var SquareMenu = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1318.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M7 8h10" }),
    path({ "d": "M7 12h10" }),
    path({ "d": "M7 16h10" })
  );
}, "SquareMenu");

// src/icons/SquareMinus.ts
import van1319 from "vanjs-core";
var SquareMinus = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1319.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M8 12h8" })
  );
}, "SquareMinus");

// src/icons/SquareMousePointer.ts
import van1320 from "vanjs-core";
var SquareMousePointer = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1320.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"
    }),
    path({ "d": "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" })
  );
}, "SquareMousePointer");

// src/icons/SquareParkingOff.ts
import van1321 from "vanjs-core";
var SquareParkingOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1321.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41"
    }),
    path({ "d": "M3 8.7V19a2 2 0 0 0 2 2h10.3" }),
    path({ "d": "m2 2 20 20" }),
    path({ "d": "M13 13a3 3 0 1 0 0-6H9v2" }),
    path({ "d": "M9 17v-2.3" })
  );
}, "SquareParkingOff");

// src/icons/SquareParking.ts
import van1322 from "vanjs-core";
var SquareParking = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1322.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M9 17V7h4a3 3 0 0 1 0 6H9" })
  );
}, "SquareParking");

// src/icons/SquarePen.ts
import van1323 from "vanjs-core";
var SquarePen = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1323.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }),
    path({
      "d": "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
    })
  );
}, "SquarePen");

// src/icons/SquarePercent.ts
import van1324 from "vanjs-core";
var SquarePercent = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1324.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "m15 9-6 6" }),
    path({ "d": "M9 9h.01" }),
    path({ "d": "M15 15h.01" })
  );
}, "SquarePercent");

// src/icons/SquarePi.ts
import van1325 from "vanjs-core";
var SquarePi = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1325.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M7 7h10" }),
    path({ "d": "M10 7v10" }),
    path({ "d": "M16 17a2 2 0 0 1-2-2V7" })
  );
}, "SquarePi");

// src/icons/SquarePilcrow.ts
import van1326 from "vanjs-core";
var SquarePilcrow = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1326.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M12 12H9.5a2.5 2.5 0 0 1 0-5H17" }),
    path({ "d": "M12 7v10" }),
    path({ "d": "M16 7v10" })
  );
}, "SquarePilcrow");

// src/icons/SquarePlay.ts
import van1327 from "vanjs-core";
var SquarePlay = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1327.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "m9 8 6 4-6 4Z" })
  );
}, "SquarePlay");

// src/icons/SquarePlus.ts
import van1328 from "vanjs-core";
var SquarePlus = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1328.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M8 12h8" }),
    path({ "d": "M12 8v8" })
  );
}, "SquarePlus");

// src/icons/SquarePower.ts
import van1329 from "vanjs-core";
var SquarePower = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van1329.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 7v4" }),
    path({ "d": "M7.998 9.003a5 5 0 1 0 8-.005" }),
    rect({ "x": "3", "y": "3", width: "18", height: "18", rx: "2" })
  );
}, "SquarePower");

// src/icons/SquareRadical.ts
import van1330 from "vanjs-core";
var SquareRadical = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van1330.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M7 12h2l2 5 2-10h4" }),
    rect({ "x": "3", "y": "3", width: "18", height: "18", rx: "2" })
  );
}, "SquareRadical");

// src/icons/SquareScissors.ts
import van1331 from "vanjs-core";
var SquareScissors = /* @__PURE__ */ __name((props = {}) => {
  const { rect, circle, path } = van1331.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "20", height: "20", "x": "2", "y": "2", rx: "2" }),
    circle({ cx: "8", cy: "8", "r": "2" }),
    path({ "d": "M9.414 9.414 12 12" }),
    path({ "d": "M14.8 14.8 18 18" }),
    circle({ cx: "8", cy: "16", "r": "2" }),
    path({ "d": "m18 6-8.586 8.586" })
  );
}, "SquareScissors");

// src/icons/SquareSigma.ts
import van1332 from "vanjs-core";
var SquareSigma = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1332.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M16 8.9V7H8l4 5-4 5h8v-1.9" })
  );
}, "SquareSigma");

// src/icons/SquareSlash.ts
import van1333 from "vanjs-core";
var SquareSlash = /* @__PURE__ */ __name((props = {}) => {
  const { rect, line } = van1333.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    line({ x1: "9", x2: "15", y1: "15", y2: "9" })
  );
}, "SquareSlash");

// src/icons/SquareSplitHorizontal.ts
import van1334 from "vanjs-core";
var SquareSplitHorizontal = /* @__PURE__ */ __name((props = {}) => {
  const { path, line } = van1334.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3" }),
    path({ "d": "M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3" }),
    line({ x1: "12", x2: "12", y1: "4", y2: "20" })
  );
}, "SquareSplitHorizontal");

// src/icons/SquareSplitVertical.ts
import van1335 from "vanjs-core";
var SquareSplitVertical = /* @__PURE__ */ __name((props = {}) => {
  const { path, line } = van1335.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3" }),
    path({ "d": "M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3" }),
    line({ x1: "4", x2: "20", y1: "12", y2: "12" })
  );
}, "SquareSplitVertical");

// src/icons/SquareSquare.ts
import van1336 from "vanjs-core";
var SquareSquare = /* @__PURE__ */ __name((props = {}) => {
  const { rect } = van1336.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ "x": "3", "y": "3", width: "18", height: "18", rx: "2" }),
    rect({ "x": "8", "y": "8", width: "8", height: "8", rx: "1" })
  );
}, "SquareSquare");

// src/icons/SquareStack.ts
import van1337 from "vanjs-core";
var SquareStack = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van1337.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" }),
    path({ "d": "M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" }),
    rect({ width: "8", height: "8", "x": "14", "y": "14", rx: "2" })
  );
}, "SquareStack");

// src/icons/SquareTerminal.ts
import van1338 from "vanjs-core";
var SquareTerminal = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van1338.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m7 11 2-2-2-2" }),
    path({ "d": "M11 13h4" }),
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2", ry: "2" })
  );
}, "SquareTerminal");

// src/icons/SquareUserRound.ts
import van1339 from "vanjs-core";
var SquareUserRound = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle, rect } = van1339.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M18 21a6 6 0 0 0-12 0" }),
    circle({ cx: "12", cy: "11", "r": "4" }),
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" })
  );
}, "SquareUserRound");

// src/icons/SquareUser.ts
import van1340 from "vanjs-core";
var SquareUser = /* @__PURE__ */ __name((props = {}) => {
  const { rect, circle, path } = van1340.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    circle({ cx: "12", cy: "10", "r": "3" }),
    path({ "d": "M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" })
  );
}, "SquareUser");

// src/icons/SquareX.ts
import van1341 from "vanjs-core";
var SquareX = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1341.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2", ry: "2" }),
    path({ "d": "m15 9-6 6" }),
    path({ "d": "m9 9 6 6" })
  );
}, "SquareX");

// src/icons/Square.ts
import van1342 from "vanjs-core";
var Square = /* @__PURE__ */ __name((props = {}) => {
  const { rect } = van1342.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" })
  );
}, "Square");

// src/icons/Squircle.ts
import van1343 from "vanjs-core";
var Squircle = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1343.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9" })
  );
}, "Squircle");

// src/icons/Squirrel.ts
import van1344 from "vanjs-core";
var Squirrel = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1344.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15.236 22a3 3 0 0 0-2.2-5" }),
    path({ "d": "M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4" }),
    path({ "d": "M18 13h.01" }),
    path({
      "d": "M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10"
    })
  );
}, "Squirrel");

// src/icons/Stamp.ts
import van1345 from "vanjs-core";
var Stamp = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1345.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M5 22h14" }),
    path({
      "d": "M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z"
    }),
    path({
      "d": "M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13"
    })
  );
}, "Stamp");

// src/icons/StarHalf.ts
import van1346 from "vanjs-core";
var StarHalf = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1346.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2"
    })
  );
}, "StarHalf");

// src/icons/StarOff.ts
import van1347 from "vanjs-core";
var StarOff = /* @__PURE__ */ __name((props = {}) => {
  const { path, line } = van1347.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43"
    }),
    path({ "d": "M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91" }),
    line({ x1: "2", x2: "22", y1: "2", y2: "22" })
  );
}, "StarOff");

// src/icons/Star.ts
import van1348 from "vanjs-core";
var Star = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1348.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
    })
  );
}, "Star");

// src/icons/StepBack.ts
import van1349 from "vanjs-core";
var StepBack = /* @__PURE__ */ __name((props = {}) => {
  const { line, polygon } = van1349.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "18", x2: "18", y1: "20", y2: "4" }),
    polygon({ points: "14,20 4,12 14,4" })
  );
}, "StepBack");

// src/icons/StepForward.ts
import van1350 from "vanjs-core";
var StepForward = /* @__PURE__ */ __name((props = {}) => {
  const { line, polygon } = van1350.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "6", x2: "6", y1: "4", y2: "20" }),
    polygon({ points: "10,4 20,12 10,20" })
  );
}, "StepForward");

// src/icons/Stethoscope.ts
import van1351 from "vanjs-core";
var Stethoscope = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1351.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M11 2v2" }),
    path({ "d": "M5 2v2" }),
    path({ "d": "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" }),
    path({ "d": "M8 15a6 6 0 0 0 12 0v-3" }),
    circle({ cx: "20", cy: "10", "r": "2" })
  );
}, "Stethoscope");

// src/icons/Sticker.ts
import van1352 from "vanjs-core";
var Sticker = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1352.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"
    }),
    path({ "d": "M14 3v4a2 2 0 0 0 2 2h4" }),
    path({ "d": "M8 13h.01" }),
    path({ "d": "M16 13h.01" }),
    path({ "d": "M10 16s.8 1 2 1c1.3 0 2-1 2-1" })
  );
}, "Sticker");

// src/icons/StickyNote.ts
import van1353 from "vanjs-core";
var StickyNote = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1353.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z" }),
    path({ "d": "M15 3v4a2 2 0 0 0 2 2h4" })
  );
}, "StickyNote");

// src/icons/Store.ts
import van1354 from "vanjs-core";
var Store = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1354.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"
    }),
    path({ "d": "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" }),
    path({ "d": "M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" }),
    path({ "d": "M2 7h20" }),
    path({
      "d": "M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"
    })
  );
}, "Store");

// src/icons/StretchHorizontal.ts
import van1355 from "vanjs-core";
var StretchHorizontal = /* @__PURE__ */ __name((props = {}) => {
  const { rect } = van1355.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "20", height: "6", "x": "2", "y": "4", rx: "2" }),
    rect({ width: "20", height: "6", "x": "2", "y": "14", rx: "2" })
  );
}, "StretchHorizontal");

// src/icons/StretchVertical.ts
import van1356 from "vanjs-core";
var StretchVertical = /* @__PURE__ */ __name((props = {}) => {
  const { rect } = van1356.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "6", height: "20", "x": "4", "y": "2", rx: "2" }),
    rect({ width: "6", height: "20", "x": "14", "y": "2", rx: "2" })
  );
}, "StretchVertical");

// src/icons/Strikethrough.ts
import van1357 from "vanjs-core";
var Strikethrough = /* @__PURE__ */ __name((props = {}) => {
  const { path, line } = van1357.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 4H9a3 3 0 0 0-2.83 4" }),
    path({ "d": "M14 12a4 4 0 0 1 0 8H6" }),
    line({ x1: "4", x2: "20", y1: "12", y2: "12" })
  );
}, "Strikethrough");

// src/icons/Subscript.ts
import van1358 from "vanjs-core";
var Subscript = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1358.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m4 5 8 8" }),
    path({ "d": "m12 5-8 8" }),
    path({
      "d": "M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07"
    })
  );
}, "Subscript");

// src/icons/SunDim.ts
import van1359 from "vanjs-core";
var SunDim = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van1359.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "4" }),
    path({ "d": "M12 4h.01" }),
    path({ "d": "M20 12h.01" }),
    path({ "d": "M12 20h.01" }),
    path({ "d": "M4 12h.01" }),
    path({ "d": "M17.657 6.343h.01" }),
    path({ "d": "M17.657 17.657h.01" }),
    path({ "d": "M6.343 17.657h.01" }),
    path({ "d": "M6.343 6.343h.01" })
  );
}, "SunDim");

// src/icons/SunMedium.ts
import van1360 from "vanjs-core";
var SunMedium = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van1360.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "4" }),
    path({ "d": "M12 3v1" }),
    path({ "d": "M12 20v1" }),
    path({ "d": "M3 12h1" }),
    path({ "d": "M20 12h1" }),
    path({ "d": "m18.364 5.636-.707.707" }),
    path({ "d": "m6.343 17.657-.707.707" }),
    path({ "d": "m5.636 5.636.707.707" }),
    path({ "d": "m17.657 17.657.707.707" })
  );
}, "SunMedium");

// src/icons/SunMoon.ts
import van1361 from "vanjs-core";
var SunMoon = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1361.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4" }),
    path({ "d": "M12 2v2" }),
    path({ "d": "M12 20v2" }),
    path({ "d": "m4.9 4.9 1.4 1.4" }),
    path({ "d": "m17.7 17.7 1.4 1.4" }),
    path({ "d": "M2 12h2" }),
    path({ "d": "M20 12h2" }),
    path({ "d": "m6.3 17.7-1.4 1.4" }),
    path({ "d": "m19.1 4.9-1.4 1.4" })
  );
}, "SunMoon");

// src/icons/SunSnow.ts
import van1362 from "vanjs-core";
var SunSnow = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1362.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 21v-1" }),
    path({ "d": "M10 4V3" }),
    path({ "d": "M10 9a3 3 0 0 0 0 6" }),
    path({ "d": "m14 20 1.25-2.5L18 18" }),
    path({ "d": "m14 4 1.25 2.5L18 6" }),
    path({ "d": "m17 21-3-6 1.5-3H22" }),
    path({ "d": "m17 3-3 6 1.5 3" }),
    path({ "d": "M2 12h1" }),
    path({ "d": "m20 10-1.5 2 1.5 2" }),
    path({ "d": "m3.64 18.36.7-.7" }),
    path({ "d": "m4.34 6.34-.7-.7" })
  );
}, "SunSnow");

// src/icons/Sun.ts
import van1363 from "vanjs-core";
var Sun = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van1363.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "4" }),
    path({ "d": "M12 2v2" }),
    path({ "d": "M12 20v2" }),
    path({ "d": "m4.93 4.93 1.41 1.41" }),
    path({ "d": "m17.66 17.66 1.41 1.41" }),
    path({ "d": "M2 12h2" }),
    path({ "d": "M20 12h2" }),
    path({ "d": "m6.34 17.66-1.41 1.41" }),
    path({ "d": "m19.07 4.93-1.41 1.41" })
  );
}, "Sun");

// src/icons/Sunrise.ts
import van1364 from "vanjs-core";
var Sunrise = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1364.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 2v8" }),
    path({ "d": "m4.93 10.93 1.41 1.41" }),
    path({ "d": "M2 18h2" }),
    path({ "d": "M20 18h2" }),
    path({ "d": "m19.07 10.93-1.41 1.41" }),
    path({ "d": "M22 22H2" }),
    path({ "d": "m8 6 4-4 4 4" }),
    path({ "d": "M16 18a4 4 0 0 0-8 0" })
  );
}, "Sunrise");

// src/icons/Sunset.ts
import van1365 from "vanjs-core";
var Sunset = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1365.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 10V2" }),
    path({ "d": "m4.93 10.93 1.41 1.41" }),
    path({ "d": "M2 18h2" }),
    path({ "d": "M20 18h2" }),
    path({ "d": "m19.07 10.93-1.41 1.41" }),
    path({ "d": "M22 22H2" }),
    path({ "d": "m16 6-4 4-4-4" }),
    path({ "d": "M16 18a4 4 0 0 0-8 0" })
  );
}, "Sunset");

// src/icons/Superscript.ts
import van1366 from "vanjs-core";
var Superscript = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1366.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m4 19 8-8" }),
    path({ "d": "m12 19-8-8" }),
    path({
      "d": "M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06"
    })
  );
}, "Superscript");

// src/icons/SwatchBook.ts
import van1367 from "vanjs-core";
var SwatchBook = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1367.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z" }),
    path({ "d": "M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7" }),
    path({ "d": "M 7 17h.01" }),
    path({
      "d": "m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"
    })
  );
}, "SwatchBook");

// src/icons/SwissFranc.ts
import van1368 from "vanjs-core";
var SwissFranc = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1368.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 21V3h8" }),
    path({ "d": "M6 16h9" }),
    path({ "d": "M10 9.5h7" })
  );
}, "SwissFranc");

// src/icons/SwitchCamera.ts
import van1369 from "vanjs-core";
var SwitchCamera = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1369.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" }),
    path({ "d": "M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5" }),
    circle({ cx: "12", cy: "12", "r": "3" }),
    path({ "d": "m18 22-3-3 3-3" }),
    path({ "d": "m6 2 3 3-3 3" })
  );
}, "SwitchCamera");

// src/icons/Sword.ts
import van1370 from "vanjs-core";
var Sword = /* @__PURE__ */ __name((props = {}) => {
  const { polyline, line } = van1370.tags(svgNamespace);
  return LucideIcon(
    props,
    polyline({ points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5" }),
    line({ x1: "13", x2: "19", y1: "19", y2: "13" }),
    line({ x1: "16", x2: "20", y1: "16", y2: "20" }),
    line({ x1: "19", x2: "21", y1: "21", y2: "19" })
  );
}, "Sword");

// src/icons/Swords.ts
import van1371 from "vanjs-core";
var Swords = /* @__PURE__ */ __name((props = {}) => {
  const { polyline, line } = van1371.tags(svgNamespace);
  return LucideIcon(
    props,
    polyline({ points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5" }),
    line({ x1: "13", x2: "19", y1: "19", y2: "13" }),
    line({ x1: "16", x2: "20", y1: "16", y2: "20" }),
    line({ x1: "19", x2: "21", y1: "21", y2: "19" }),
    polyline({ points: "14.5 6.5 18 3 21 3 21 6 17.5 9.5" }),
    line({ x1: "5", x2: "9", y1: "14", y2: "18" }),
    line({ x1: "7", x2: "4", y1: "17", y2: "20" }),
    line({ x1: "3", x2: "5", y1: "19", y2: "21" })
  );
}, "Swords");

// src/icons/Syringe.ts
import van1372 from "vanjs-core";
var Syringe = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1372.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m18 2 4 4" }),
    path({ "d": "m17 7 3-3" }),
    path({
      "d": "M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"
    }),
    path({ "d": "m9 11 4 4" }),
    path({ "d": "m5 19-3 3" }),
    path({ "d": "m14 4 6 6" })
  );
}, "Syringe");

// src/icons/Table2.ts
import van1373 from "vanjs-core";
var Table2 = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1373.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"
    })
  );
}, "Table2");

// src/icons/TableCellsMerge.ts
import van1374 from "vanjs-core";
var TableCellsMerge = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van1374.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 21v-6" }),
    path({ "d": "M12 9V3" }),
    path({ "d": "M3 15h18" }),
    path({ "d": "M3 9h18" }),
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" })
  );
}, "TableCellsMerge");

// src/icons/TableCellsSplit.ts
import van1375 from "vanjs-core";
var TableCellsSplit = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van1375.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 15V9" }),
    path({ "d": "M3 15h18" }),
    path({ "d": "M3 9h18" }),
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" })
  );
}, "TableCellsSplit");

// src/icons/TableColumnsSplit.ts
import van1376 from "vanjs-core";
var TableColumnsSplit = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1376.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M14 14v2" }),
    path({ "d": "M14 20v2" }),
    path({ "d": "M14 2v2" }),
    path({ "d": "M14 8v2" }),
    path({ "d": "M2 15h8" }),
    path({ "d": "M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2" }),
    path({ "d": "M2 9h8" }),
    path({ "d": "M22 15h-4" }),
    path({ "d": "M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" }),
    path({ "d": "M22 9h-4" }),
    path({ "d": "M5 3v18" })
  );
}, "TableColumnsSplit");

// src/icons/TableOfContents.ts
import van1377 from "vanjs-core";
var TableOfContents = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1377.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 12H3" }),
    path({ "d": "M16 18H3" }),
    path({ "d": "M16 6H3" }),
    path({ "d": "M21 12h.01" }),
    path({ "d": "M21 18h.01" }),
    path({ "d": "M21 6h.01" })
  );
}, "TableOfContents");

// src/icons/TableProperties.ts
import van1378 from "vanjs-core";
var TableProperties = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van1378.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 3v18" }),
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M21 9H3" }),
    path({ "d": "M21 15H3" })
  );
}, "TableProperties");

// src/icons/TableRowsSplit.ts
import van1379 from "vanjs-core";
var TableRowsSplit = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1379.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M14 10h2" }),
    path({ "d": "M15 22v-8" }),
    path({ "d": "M15 2v4" }),
    path({ "d": "M2 10h2" }),
    path({ "d": "M20 10h2" }),
    path({ "d": "M3 19h18" }),
    path({ "d": "M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6" }),
    path({ "d": "M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2" }),
    path({ "d": "M8 10h2" }),
    path({ "d": "M9 22v-8" }),
    path({ "d": "M9 2v4" })
  );
}, "TableRowsSplit");

// src/icons/Table.ts
import van1380 from "vanjs-core";
var Table = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van1380.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 3v18" }),
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M3 9h18" }),
    path({ "d": "M3 15h18" })
  );
}, "Table");

// src/icons/TabletSmartphone.ts
import van1381 from "vanjs-core";
var TabletSmartphone = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1381.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "10", height: "14", "x": "3", "y": "8", rx: "2" }),
    path({ "d": "M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" }),
    path({ "d": "M8 18h.01" })
  );
}, "TabletSmartphone");

// src/icons/Tablet.ts
import van1382 from "vanjs-core";
var Tablet = /* @__PURE__ */ __name((props = {}) => {
  const { rect, line } = van1382.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "16", height: "20", "x": "4", "y": "2", rx: "2", ry: "2" }),
    line({ x1: "12", x2: "12.01", y1: "18", y2: "18" })
  );
}, "Tablet");

// src/icons/Tablets.ts
import van1383 from "vanjs-core";
var Tablets = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van1383.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "7", cy: "7", "r": "5" }),
    circle({ cx: "17", cy: "17", "r": "5" }),
    path({ "d": "M12 17h10" }),
    path({ "d": "m3.46 10.54 7.08-7.08" })
  );
}, "Tablets");

// src/icons/Tag.ts
import van1384 from "vanjs-core";
var Tag = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1384.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"
    }),
    circle({ cx: "7.5", cy: "7.5", "r": ".5", fill: "currentColor" })
  );
}, "Tag");

// src/icons/Tags.ts
import van1385 from "vanjs-core";
var Tags = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1385.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19" }),
    path({
      "d": "M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z"
    }),
    circle({ cx: "6.5", cy: "9.5", "r": ".5", fill: "currentColor" })
  );
}, "Tags");

// src/icons/Tally1.ts
import van1386 from "vanjs-core";
var Tally1 = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1386.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 4v16" })
  );
}, "Tally1");

// src/icons/Tally2.ts
import van1387 from "vanjs-core";
var Tally2 = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1387.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 4v16" }),
    path({ "d": "M9 4v16" })
  );
}, "Tally2");

// src/icons/Tally3.ts
import van1388 from "vanjs-core";
var Tally3 = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1388.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 4v16" }),
    path({ "d": "M9 4v16" }),
    path({ "d": "M14 4v16" })
  );
}, "Tally3");

// src/icons/Tally4.ts
import van1389 from "vanjs-core";
var Tally4 = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1389.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 4v16" }),
    path({ "d": "M9 4v16" }),
    path({ "d": "M14 4v16" }),
    path({ "d": "M19 4v16" })
  );
}, "Tally4");

// src/icons/Tally5.ts
import van1390 from "vanjs-core";
var Tally5 = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1390.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 4v16" }),
    path({ "d": "M9 4v16" }),
    path({ "d": "M14 4v16" }),
    path({ "d": "M19 4v16" }),
    path({ "d": "M22 6 2 18" })
  );
}, "Tally5");

// src/icons/Tangent.ts
import van1391 from "vanjs-core";
var Tangent = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van1391.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "17", cy: "4", "r": "2" }),
    path({ "d": "M15.59 5.41 5.41 15.59" }),
    circle({ cx: "4", cy: "17", "r": "2" }),
    path({ "d": "M12 22s-4-9-1.5-11.5S22 12 22 12" })
  );
}, "Tangent");

// src/icons/Target.ts
import van1392 from "vanjs-core";
var Target = /* @__PURE__ */ __name((props = {}) => {
  const { circle } = van1392.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "10" }),
    circle({ cx: "12", cy: "12", "r": "6" }),
    circle({ cx: "12", cy: "12", "r": "2" })
  );
}, "Target");

// src/icons/Telescope.ts
import van1393 from "vanjs-core";
var Telescope = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1393.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"
    }),
    path({ "d": "m13.56 11.747 4.332-.924" }),
    path({ "d": "m16 21-3.105-6.21" }),
    path({
      "d": "M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"
    }),
    path({ "d": "m6.158 8.633 1.114 4.456" }),
    path({ "d": "m8 21 3.105-6.21" }),
    circle({ cx: "12", cy: "13", "r": "2" })
  );
}, "Telescope");

// src/icons/TentTree.ts
import van1394 from "vanjs-core";
var TentTree = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van1394.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "4", cy: "4", "r": "2" }),
    path({ "d": "m14 5 3-3 3 3" }),
    path({ "d": "m14 10 3-3 3 3" }),
    path({ "d": "M17 14V2" }),
    path({ "d": "M17 14H7l-5 8h20Z" }),
    path({ "d": "M8 14v8" }),
    path({ "d": "m9 14 5 8" })
  );
}, "TentTree");

// src/icons/Tent.ts
import van1395 from "vanjs-core";
var Tent = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1395.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3.5 21 14 3" }),
    path({ "d": "M20.5 21 10 3" }),
    path({ "d": "M15.5 21 12 15l-3.5 6" }),
    path({ "d": "M2 21h20" })
  );
}, "Tent");

// src/icons/Terminal.ts
import van1396 from "vanjs-core";
var Terminal = /* @__PURE__ */ __name((props = {}) => {
  const { polyline, line } = van1396.tags(svgNamespace);
  return LucideIcon(
    props,
    polyline({ points: "4 17 10 11 4 5" }),
    line({ x1: "12", x2: "20", y1: "19", y2: "19" })
  );
}, "Terminal");

// src/icons/TestTubeDiagonal.ts
import van1397 from "vanjs-core";
var TestTubeDiagonal = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1397.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3"
    }),
    path({ "d": "m16 2 6 6" }),
    path({ "d": "M12 16H4" })
  );
}, "TestTubeDiagonal");

// src/icons/TestTube.ts
import van1398 from "vanjs-core";
var TestTube = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1398.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2"
    }),
    path({ "d": "M8.5 2h7" }),
    path({ "d": "M14.5 16h-5" })
  );
}, "TestTube");

// src/icons/TestTubes.ts
import van1399 from "vanjs-core";
var TestTubes = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1399.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2" }),
    path({ "d": "M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2" }),
    path({ "d": "M3 2h7" }),
    path({ "d": "M14 2h7" }),
    path({ "d": "M9 16H4" }),
    path({ "d": "M20 16h-5" })
  );
}, "TestTubes");

// src/icons/TextCursorInput.ts
import van1400 from "vanjs-core";
var TextCursorInput = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1400.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1" }),
    path({ "d": "M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5" }),
    path({ "d": "M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1" }),
    path({ "d": "M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7" }),
    path({ "d": "M9 7v10" })
  );
}, "TextCursorInput");

// src/icons/TextCursor.ts
import van1401 from "vanjs-core";
var TextCursor = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1401.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1" }),
    path({ "d": "M7 22h1a4 4 0 0 0 4-4v-1" }),
    path({ "d": "M7 2h1a4 4 0 0 1 4 4v1" })
  );
}, "TextCursor");

// src/icons/TextQuote.ts
import van1402 from "vanjs-core";
var TextQuote = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1402.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M17 6H3" }),
    path({ "d": "M21 12H8" }),
    path({ "d": "M21 18H8" }),
    path({ "d": "M3 12v6" })
  );
}, "TextQuote");

// src/icons/TextSearch.ts
import van1403 from "vanjs-core";
var TextSearch = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1403.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21 6H3" }),
    path({ "d": "M10 12H3" }),
    path({ "d": "M10 18H3" }),
    circle({ cx: "17", cy: "15", "r": "3" }),
    path({ "d": "m21 19-1.9-1.9" })
  );
}, "TextSearch");

// src/icons/TextSelect.ts
import van1404 from "vanjs-core";
var TextSelect = /* @__PURE__ */ __name((props = {}) => {
  const { path, line } = van1404.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M5 3a2 2 0 0 0-2 2" }),
    path({ "d": "M19 3a2 2 0 0 1 2 2" }),
    path({ "d": "M21 19a2 2 0 0 1-2 2" }),
    path({ "d": "M5 21a2 2 0 0 1-2-2" }),
    path({ "d": "M9 3h1" }),
    path({ "d": "M9 21h1" }),
    path({ "d": "M14 3h1" }),
    path({ "d": "M14 21h1" }),
    path({ "d": "M3 9v1" }),
    path({ "d": "M21 9v1" }),
    path({ "d": "M3 14v1" }),
    path({ "d": "M21 14v1" }),
    line({ x1: "7", x2: "15", y1: "8", y2: "8" }),
    line({ x1: "7", x2: "17", y1: "12", y2: "12" }),
    line({ x1: "7", x2: "13", y1: "16", y2: "16" })
  );
}, "TextSelect");

// src/icons/Text.ts
import van1405 from "vanjs-core";
var Text = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1405.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M17 6.1H3" }),
    path({ "d": "M21 12.1H3" }),
    path({ "d": "M15.1 18H3" })
  );
}, "Text");

// src/icons/Theater.ts
import van1406 from "vanjs-core";
var Theater = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1406.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 10s3-3 3-8" }),
    path({ "d": "M22 10s-3-3-3-8" }),
    path({ "d": "M10 2c0 4.4-3.6 8-8 8" }),
    path({ "d": "M14 2c0 4.4 3.6 8 8 8" }),
    path({ "d": "M2 10s2 2 2 5" }),
    path({ "d": "M22 10s-2 2-2 5" }),
    path({ "d": "M8 15h8" }),
    path({ "d": "M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" }),
    path({ "d": "M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" })
  );
}, "Theater");

// src/icons/ThermometerSnowflake.ts
import van1407 from "vanjs-core";
var ThermometerSnowflake = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1407.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m10 20-1.25-2.5L6 18" }),
    path({ "d": "M10 4 8.75 6.5 6 6" }),
    path({ "d": "M10.585 15H10" }),
    path({ "d": "M2 12h6.5L10 9" }),
    path({ "d": "M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" }),
    path({ "d": "m4 10 1.5 2L4 14" }),
    path({ "d": "m7 21 3-6-1.5-3" }),
    path({ "d": "m7 3 3 6h2" })
  );
}, "ThermometerSnowflake");

// src/icons/ThermometerSun.ts
import van1408 from "vanjs-core";
var ThermometerSun = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1408.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 9a4 4 0 0 0-2 7.5" }),
    path({ "d": "M12 3v2" }),
    path({ "d": "m6.6 18.4-1.4 1.4" }),
    path({ "d": "M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" }),
    path({ "d": "M4 13H2" }),
    path({ "d": "M6.34 7.34 4.93 5.93" })
  );
}, "ThermometerSun");

// src/icons/Thermometer.ts
import van1409 from "vanjs-core";
var Thermometer = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1409.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" })
  );
}, "Thermometer");

// src/icons/ThumbsDown.ts
import van1410 from "vanjs-core";
var ThumbsDown = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1410.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M17 14V2" }),
    path({
      "d": "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"
    })
  );
}, "ThumbsDown");

// src/icons/ThumbsUp.ts
import van1411 from "vanjs-core";
var ThumbsUp = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1411.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M7 10v12" }),
    path({
      "d": "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"
    })
  );
}, "ThumbsUp");

// src/icons/TicketCheck.ts
import van1412 from "vanjs-core";
var TicketCheck = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1412.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
    }),
    path({ "d": "m9 12 2 2 4-4" })
  );
}, "TicketCheck");

// src/icons/TicketMinus.ts
import van1413 from "vanjs-core";
var TicketMinus = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1413.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
    }),
    path({ "d": "M9 12h6" })
  );
}, "TicketMinus");

// src/icons/TicketPercent.ts
import van1414 from "vanjs-core";
var TicketPercent = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1414.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
    }),
    path({ "d": "M9 9h.01" }),
    path({ "d": "m15 9-6 6" }),
    path({ "d": "M15 15h.01" })
  );
}, "TicketPercent");

// src/icons/TicketPlus.ts
import van1415 from "vanjs-core";
var TicketPlus = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1415.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
    }),
    path({ "d": "M9 12h6" }),
    path({ "d": "M12 9v6" })
  );
}, "TicketPlus");

// src/icons/TicketSlash.ts
import van1416 from "vanjs-core";
var TicketSlash = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1416.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
    }),
    path({ "d": "m9.5 14.5 5-5" })
  );
}, "TicketSlash");

// src/icons/TicketX.ts
import van1417 from "vanjs-core";
var TicketX = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1417.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
    }),
    path({ "d": "m9.5 14.5 5-5" }),
    path({ "d": "m9.5 9.5 5 5" })
  );
}, "TicketX");

// src/icons/Ticket.ts
import van1418 from "vanjs-core";
var Ticket = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1418.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
    }),
    path({ "d": "M13 5v2" }),
    path({ "d": "M13 17v2" }),
    path({ "d": "M13 11v2" })
  );
}, "Ticket");

// src/icons/TicketsPlane.ts
import van1419 from "vanjs-core";
var TicketsPlane = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van1419.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12" }),
    path({ "d": "m12 13.5 3.75.5" }),
    path({ "d": "m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8" }),
    path({ "d": "M6 10V8" }),
    path({ "d": "M6 14v1" }),
    path({ "d": "M6 19v2" }),
    rect({ "x": "2", "y": "8", width: "20", height: "13", rx: "2" })
  );
}, "TicketsPlane");

// src/icons/Tickets.ts
import van1420 from "vanjs-core";
var Tickets = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van1420.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8" }),
    path({ "d": "M6 10V8" }),
    path({ "d": "M6 14v1" }),
    path({ "d": "M6 19v2" }),
    rect({ "x": "2", "y": "8", width: "20", height: "13", rx: "2" })
  );
}, "Tickets");

// src/icons/TimerOff.ts
import van1421 from "vanjs-core";
var TimerOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1421.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 2h4" }),
    path({ "d": "M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7" }),
    path({ "d": "M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2" }),
    path({ "d": "m2 2 20 20" }),
    path({ "d": "M12 12v-2" })
  );
}, "TimerOff");

// src/icons/TimerReset.ts
import van1422 from "vanjs-core";
var TimerReset = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1422.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 2h4" }),
    path({ "d": "M12 14v-4" }),
    path({ "d": "M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6" }),
    path({ "d": "M9 17H4v5" })
  );
}, "TimerReset");

// src/icons/Timer.ts
import van1423 from "vanjs-core";
var Timer = /* @__PURE__ */ __name((props = {}) => {
  const { line, circle } = van1423.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "10", x2: "14", y1: "2", y2: "2" }),
    line({ x1: "12", x2: "15", y1: "14", y2: "11" }),
    circle({ cx: "12", cy: "14", "r": "8" })
  );
}, "Timer");

// src/icons/ToggleLeft.ts
import van1424 from "vanjs-core";
var ToggleLeft = /* @__PURE__ */ __name((props = {}) => {
  const { rect, circle } = van1424.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "20", height: "12", "x": "2", "y": "6", rx: "6", ry: "6" }),
    circle({ cx: "8", cy: "12", "r": "2" })
  );
}, "ToggleLeft");

// src/icons/ToggleRight.ts
import van1425 from "vanjs-core";
var ToggleRight = /* @__PURE__ */ __name((props = {}) => {
  const { rect, circle } = van1425.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "20", height: "12", "x": "2", "y": "6", rx: "6", ry: "6" }),
    circle({ cx: "16", cy: "12", "r": "2" })
  );
}, "ToggleRight");

// src/icons/Toilet.ts
import van1426 from "vanjs-core";
var Toilet = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1426.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18"
    }),
    path({ "d": "M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8" })
  );
}, "Toilet");

// src/icons/Tornado.ts
import van1427 from "vanjs-core";
var Tornado = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1427.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21 4H3" }),
    path({ "d": "M18 8H6" }),
    path({ "d": "M19 12H9" }),
    path({ "d": "M16 16h-6" }),
    path({ "d": "M11 20H9" })
  );
}, "Tornado");

// src/icons/Torus.ts
import van1428 from "vanjs-core";
var Torus = /* @__PURE__ */ __name((props = {}) => {
  const { ellipse } = van1428.tags(svgNamespace);
  return LucideIcon(
    props,
    ellipse({ cx: "12", cy: "11", rx: "3", ry: "2" }),
    ellipse({ cx: "12", cy: "12.5", rx: "10", ry: "8.5" })
  );
}, "Torus");

// src/icons/TouchpadOff.ts
import van1429 from "vanjs-core";
var TouchpadOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1429.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16" }),
    path({ "d": "M2 14h12" }),
    path({ "d": "M22 14h-2" }),
    path({ "d": "M12 20v-6" }),
    path({ "d": "m2 2 20 20" }),
    path({ "d": "M22 16V6a2 2 0 0 0-2-2H10" })
  );
}, "TouchpadOff");

// src/icons/Touchpad.ts
import van1430 from "vanjs-core";
var Touchpad = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1430.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "20", height: "16", "x": "2", "y": "4", rx: "2" }),
    path({ "d": "M2 14h20" }),
    path({ "d": "M12 20v-6" })
  );
}, "Touchpad");

// src/icons/TowerControl.ts
import van1431 from "vanjs-core";
var TowerControl = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1431.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z"
    }),
    path({ "d": "M8 13v9" }),
    path({ "d": "M16 22v-9" }),
    path({ "d": "m9 6 1 7" }),
    path({ "d": "m15 6-1 7" }),
    path({ "d": "M12 6V2" }),
    path({ "d": "M13 2h-2" })
  );
}, "TowerControl");

// src/icons/ToyBrick.ts
import van1432 from "vanjs-core";
var ToyBrick = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1432.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "12", "x": "3", "y": "8", rx: "1" }),
    path({ "d": "M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3" }),
    path({ "d": "M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3" })
  );
}, "ToyBrick");

// src/icons/Tractor.ts
import van1433 from "vanjs-core";
var Tractor = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1433.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20"
    }),
    path({ "d": "M16 18h-5" }),
    path({ "d": "M18 5a1 1 0 0 0-1 1v5.573" }),
    path({ "d": "M3 4h8.129a1 1 0 0 1 .99.863L13 11.246" }),
    path({ "d": "M4 11V4" }),
    path({ "d": "M7 15h.01" }),
    path({ "d": "M8 10.1V4" }),
    circle({ cx: "18", cy: "18", "r": "2" }),
    circle({ cx: "7", cy: "15", "r": "5" })
  );
}, "Tractor");

// src/icons/TrafficCone.ts
import van1434 from "vanjs-core";
var TrafficCone = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1434.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M9.3 6.2a4.55 4.55 0 0 0 5.4 0" }),
    path({ "d": "M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3" }),
    path({
      "d": "M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z"
    }),
    path({
      "d": "m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8"
    })
  );
}, "TrafficCone");

// src/icons/TrainFrontTunnel.ts
import van1435 from "vanjs-core";
var TrainFrontTunnel = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1435.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 22V12a10 10 0 1 1 20 0v10" }),
    path({ "d": "M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8" }),
    path({ "d": "M10 15h.01" }),
    path({ "d": "M14 15h.01" }),
    path({ "d": "M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z" }),
    path({ "d": "m9 19-2 3" }),
    path({ "d": "m15 19 2 3" })
  );
}, "TrainFrontTunnel");

// src/icons/TrainFront.ts
import van1436 from "vanjs-core";
var TrainFront = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1436.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 3.1V7a4 4 0 0 0 8 0V3.1" }),
    path({ "d": "m9 15-1-1" }),
    path({ "d": "m15 15 1-1" }),
    path({
      "d": "M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z"
    }),
    path({ "d": "m8 19-2 3" }),
    path({ "d": "m16 19 2 3" })
  );
}, "TrainFront");

// src/icons/TrainTrack.ts
import van1437 from "vanjs-core";
var TrainTrack = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1437.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 17 17 2" }),
    path({ "d": "m2 14 8 8" }),
    path({ "d": "m5 11 8 8" }),
    path({ "d": "m8 8 8 8" }),
    path({ "d": "m11 5 8 8" }),
    path({ "d": "m14 2 8 8" }),
    path({ "d": "M7 22 22 7" })
  );
}, "TrainTrack");

// src/icons/TramFront.ts
import van1438 from "vanjs-core";
var TramFront = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1438.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "16", height: "16", "x": "4", "y": "3", rx: "2" }),
    path({ "d": "M4 11h16" }),
    path({ "d": "M12 3v8" }),
    path({ "d": "m8 19-2 3" }),
    path({ "d": "m18 22-2-3" }),
    path({ "d": "M8 15h.01" }),
    path({ "d": "M16 15h.01" })
  );
}, "TramFront");

// src/icons/Transgender.ts
import van1439 from "vanjs-core";
var Transgender = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1439.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 16v6" }),
    path({ "d": "M14 20h-4" }),
    path({ "d": "M18 2h4v4" }),
    path({ "d": "m2 2 7.17 7.17" }),
    path({ "d": "M2 5.355V2h3.357" }),
    path({ "d": "m22 2-7.17 7.17" }),
    path({ "d": "M8 5 5 8" }),
    circle({ cx: "12", cy: "12", "r": "4" })
  );
}, "Transgender");

// src/icons/Trash2.ts
import van1440 from "vanjs-core";
var Trash2 = /* @__PURE__ */ __name((props = {}) => {
  const { path, line } = van1440.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 6h18" }),
    path({ "d": "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }),
    path({ "d": "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" }),
    line({ x1: "10", x2: "10", y1: "11", y2: "17" }),
    line({ x1: "14", x2: "14", y1: "11", y2: "17" })
  );
}, "Trash2");

// src/icons/Trash.ts
import van1441 from "vanjs-core";
var Trash = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1441.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 6h18" }),
    path({ "d": "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }),
    path({ "d": "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" })
  );
}, "Trash");

// src/icons/TreeDeciduous.ts
import van1442 from "vanjs-core";
var TreeDeciduous = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1442.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z"
    }),
    path({ "d": "M12 19v3" })
  );
}, "TreeDeciduous");

// src/icons/TreePalm.ts
import van1443 from "vanjs-core";
var TreePalm = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1443.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4" }),
    path({
      "d": "M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"
    }),
    path({
      "d": "M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35"
    }),
    path({ "d": "M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14" })
  );
}, "TreePalm");

// src/icons/TreePine.ts
import van1444 from "vanjs-core";
var TreePine = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1444.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"
    }),
    path({ "d": "M12 22v-3" })
  );
}, "TreePine");

// src/icons/Trees.ts
import van1445 from "vanjs-core";
var Trees = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1445.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"
    }),
    path({ "d": "M7 16v6" }),
    path({ "d": "M13 19v3" }),
    path({
      "d": "M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"
    })
  );
}, "Trees");

// src/icons/Trello.ts
import van1446 from "vanjs-core";
var Trello = /* @__PURE__ */ __name((props = {}) => {
  const { rect } = van1446.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2", ry: "2" }),
    rect({ width: "3", height: "9", "x": "7", "y": "7" }),
    rect({ width: "3", height: "5", "x": "14", "y": "7" })
  );
}, "Trello");

// src/icons/TrendingDown.ts
import van1447 from "vanjs-core";
var TrendingDown = /* @__PURE__ */ __name((props = {}) => {
  const { polyline } = van1447.tags(svgNamespace);
  return LucideIcon(
    props,
    polyline({ points: "22 17 13.5 8.5 8.5 13.5 2 7" }),
    polyline({ points: "16 17 22 17 22 11" })
  );
}, "TrendingDown");

// src/icons/TrendingUpDown.ts
import van1448 from "vanjs-core";
var TrendingUpDown = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1448.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M14.828 14.828 21 21" }),
    path({ "d": "M21 16v5h-5" }),
    path({ "d": "m21 3-9 9-4-4-6 6" }),
    path({ "d": "M21 8V3h-5" })
  );
}, "TrendingUpDown");

// src/icons/TrendingUp.ts
import van1449 from "vanjs-core";
var TrendingUp = /* @__PURE__ */ __name((props = {}) => {
  const { polyline } = van1449.tags(svgNamespace);
  return LucideIcon(
    props,
    polyline({ points: "22 7 13.5 15.5 8.5 10.5 2 17" }),
    polyline({ points: "16 7 22 7 22 13" })
  );
}, "TrendingUp");

// src/icons/TriangleAlert.ts
import van1450 from "vanjs-core";
var TriangleAlert = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1450.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
    }),
    path({ "d": "M12 9v4" }),
    path({ "d": "M12 17h.01" })
  );
}, "TriangleAlert");

// src/icons/TriangleDashed.ts
import van1451 from "vanjs-core";
var TriangleDashed = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1451.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10.17 4.193a2 2 0 0 1 3.666.013" }),
    path({ "d": "M14 21h2" }),
    path({ "d": "m15.874 7.743 1 1.732" }),
    path({ "d": "m18.849 12.952 1 1.732" }),
    path({ "d": "M21.824 18.18a2 2 0 0 1-1.835 2.824" }),
    path({ "d": "M4.024 21a2 2 0 0 1-1.839-2.839" }),
    path({ "d": "m5.136 12.952-1 1.732" }),
    path({ "d": "M8 21h2" }),
    path({ "d": "m8.102 7.743-1 1.732" })
  );
}, "TriangleDashed");

// src/icons/TriangleRight.ts
import van1452 from "vanjs-core";
var TriangleRight = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1452.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z"
    })
  );
}, "TriangleRight");

// src/icons/Triangle.ts
import van1453 from "vanjs-core";
var Triangle = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1453.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
    })
  );
}, "Triangle");

// src/icons/Trophy.ts
import van1454 from "vanjs-core";
var Trophy = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1454.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M6 9H4.5a2.5 2.5 0 0 1 0-5H6" }),
    path({ "d": "M18 9h1.5a2.5 2.5 0 0 0 0-5H18" }),
    path({ "d": "M4 22h16" }),
    path({ "d": "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" }),
    path({
      "d": "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"
    }),
    path({ "d": "M18 2H6v7a6 6 0 0 0 12 0V2Z" })
  );
}, "Trophy");

// src/icons/Truck.ts
import van1455 from "vanjs-core";
var Truck = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1455.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" }),
    path({ "d": "M15 18H9" }),
    path({
      "d": "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"
    }),
    circle({ cx: "17", cy: "18", "r": "2" }),
    circle({ cx: "7", cy: "18", "r": "2" })
  );
}, "Truck");

// src/icons/Turtle.ts
import van1456 from "vanjs-core";
var Turtle = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1456.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z"
    }),
    path({ "d": "M4.82 7.9 8 10" }),
    path({ "d": "M15.18 7.9 12 10" }),
    path({ "d": "M16.93 10H20a2 2 0 0 1 0 4H2" })
  );
}, "Turtle");

// src/icons/TvMinimalPlay.ts
import van1457 from "vanjs-core";
var TvMinimalPlay = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van1457.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z"
    }),
    path({ "d": "M7 21h10" }),
    rect({ width: "20", height: "14", "x": "2", "y": "3", rx: "2" })
  );
}, "TvMinimalPlay");

// src/icons/TvMinimal.ts
import van1458 from "vanjs-core";
var TvMinimal = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van1458.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M7 21h10" }),
    rect({ width: "20", height: "14", "x": "2", "y": "3", rx: "2" })
  );
}, "TvMinimal");

// src/icons/Tv.ts
import van1459 from "vanjs-core";
var Tv = /* @__PURE__ */ __name((props = {}) => {
  const { rect, polyline } = van1459.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "20", height: "15", "x": "2", "y": "7", rx: "2", ry: "2" }),
    polyline({ points: "17 2 12 7 7 2" })
  );
}, "Tv");

// src/icons/Twitch.ts
import van1460 from "vanjs-core";
var Twitch = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1460.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" })
  );
}, "Twitch");

// src/icons/Twitter.ts
import van1461 from "vanjs-core";
var Twitter = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1461.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
    })
  );
}, "Twitter");

// src/icons/TypeOutline.ts
import van1462 from "vanjs-core";
var TypeOutline = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1462.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z"
    })
  );
}, "TypeOutline");

// src/icons/Type.ts
import van1463 from "vanjs-core";
var Type = /* @__PURE__ */ __name((props = {}) => {
  const { polyline, line } = van1463.tags(svgNamespace);
  return LucideIcon(
    props,
    polyline({ points: "4 7 4 4 20 4 20 7" }),
    line({ x1: "9", x2: "15", y1: "20", y2: "20" }),
    line({ x1: "12", x2: "12", y1: "4", y2: "20" })
  );
}, "Type");

// src/icons/UmbrellaOff.ts
import van1464 from "vanjs-core";
var UmbrellaOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1464.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 2v1" }),
    path({
      "d": "M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575"
    }),
    path({ "d": "M17.5 12H22A10 10 0 0 0 9.004 3.455" }),
    path({ "d": "m2 2 20 20" })
  );
}, "UmbrellaOff");

// src/icons/Umbrella.ts
import van1465 from "vanjs-core";
var Umbrella = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1465.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M22 12a10.06 10.06 1 0 0-20 0Z" }),
    path({ "d": "M12 12v8a2 2 0 0 0 4 0" }),
    path({ "d": "M12 2v1" })
  );
}, "Umbrella");

// src/icons/Underline.ts
import van1466 from "vanjs-core";
var Underline = /* @__PURE__ */ __name((props = {}) => {
  const { path, line } = van1466.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M6 4v6a6 6 0 0 0 12 0V4" }),
    line({ x1: "4", x2: "20", y1: "20", y2: "20" })
  );
}, "Underline");

// src/icons/Undo2.ts
import van1467 from "vanjs-core";
var Undo2 = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1467.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M9 14 4 9l5-5" }),
    path({ "d": "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" })
  );
}, "Undo2");

// src/icons/UndoDot.ts
import van1468 from "vanjs-core";
var UndoDot = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1468.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21 17a9 9 0 0 0-15-6.7L3 13" }),
    path({ "d": "M3 7v6h6" }),
    circle({ cx: "12", cy: "17", "r": "1" })
  );
}, "UndoDot");

// src/icons/Undo.ts
import van1469 from "vanjs-core";
var Undo = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1469.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 7v6h6" }),
    path({ "d": "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" })
  );
}, "Undo");

// src/icons/UnfoldHorizontal.ts
import van1470 from "vanjs-core";
var UnfoldHorizontal = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1470.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 12h6" }),
    path({ "d": "M8 12H2" }),
    path({ "d": "M12 2v2" }),
    path({ "d": "M12 8v2" }),
    path({ "d": "M12 14v2" }),
    path({ "d": "M12 20v2" }),
    path({ "d": "m19 15 3-3-3-3" }),
    path({ "d": "m5 9-3 3 3 3" })
  );
}, "UnfoldHorizontal");

// src/icons/UnfoldVertical.ts
import van1471 from "vanjs-core";
var UnfoldVertical = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1471.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 22v-6" }),
    path({ "d": "M12 8V2" }),
    path({ "d": "M4 12H2" }),
    path({ "d": "M10 12H8" }),
    path({ "d": "M16 12h-2" }),
    path({ "d": "M22 12h-2" }),
    path({ "d": "m15 19-3 3-3-3" }),
    path({ "d": "m15 5-3-3-3 3" })
  );
}, "UnfoldVertical");

// src/icons/Ungroup.ts
import van1472 from "vanjs-core";
var Ungroup = /* @__PURE__ */ __name((props = {}) => {
  const { rect } = van1472.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "8", height: "6", "x": "5", "y": "4", rx: "1" }),
    rect({ width: "8", height: "6", "x": "11", "y": "14", rx: "1" })
  );
}, "Ungroup");

// src/icons/University.ts
import van1473 from "vanjs-core";
var University = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van1473.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "10", "r": "1" }),
    path({ "d": "M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2" }),
    path({ "d": "M6 17v.01" }),
    path({ "d": "M6 13v.01" }),
    path({ "d": "M18 17v.01" }),
    path({ "d": "M18 13v.01" }),
    path({ "d": "M14 22v-5a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5" })
  );
}, "University");

// src/icons/Unlink2.ts
import van1474 from "vanjs-core";
var Unlink2 = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1474.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2" })
  );
}, "Unlink2");

// src/icons/Unlink.ts
import van1475 from "vanjs-core";
var Unlink = /* @__PURE__ */ __name((props = {}) => {
  const { path, line } = van1475.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"
    }),
    path({
      "d": "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"
    }),
    line({ x1: "8", x2: "8", y1: "2", y2: "5" }),
    line({ x1: "2", x2: "5", y1: "8", y2: "8" }),
    line({ x1: "16", x2: "16", y1: "19", y2: "22" }),
    line({ x1: "19", x2: "22", y1: "16", y2: "16" })
  );
}, "Unlink");

// src/icons/Unplug.ts
import van1476 from "vanjs-core";
var Unplug = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1476.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m19 5 3-3" }),
    path({ "d": "m2 22 3-3" }),
    path({
      "d": "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"
    }),
    path({ "d": "M7.5 13.5 10 11" }),
    path({ "d": "M10.5 16.5 13 14" }),
    path({
      "d": "m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z"
    })
  );
}, "Unplug");

// src/icons/Upload.ts
import van1477 from "vanjs-core";
var Upload = /* @__PURE__ */ __name((props = {}) => {
  const { path, polyline, line } = van1477.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
    polyline({ points: "17 8 12 3 7 8" }),
    line({ x1: "12", x2: "12", y1: "3", y2: "15" })
  );
}, "Upload");

// src/icons/Usb.ts
import van1478 from "vanjs-core";
var Usb = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van1478.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "10", cy: "7", "r": "1" }),
    circle({ cx: "4", cy: "20", "r": "1" }),
    path({ "d": "M4.7 19.3 19 5" }),
    path({ "d": "m21 3-3 1 2 2Z" }),
    path({ "d": "M9.26 7.68 5 12l2 5" }),
    path({ "d": "m10 14 5 2 3.5-3.5" }),
    path({ "d": "m18 12 1-1 1 1-1 1Z" })
  );
}, "Usb");

// src/icons/UserCheck.ts
import van1479 from "vanjs-core";
var UserCheck = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle, polyline } = van1479.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
    circle({ cx: "9", cy: "7", "r": "4" }),
    polyline({ points: "16 11 18 13 22 9" })
  );
}, "UserCheck");

// src/icons/UserCog.ts
import van1480 from "vanjs-core";
var UserCog = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van1480.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "18", cy: "15", "r": "3" }),
    circle({ cx: "9", cy: "7", "r": "4" }),
    path({ "d": "M10 15H6a4 4 0 0 0-4 4v2" }),
    path({ "d": "m21.7 16.4-.9-.3" }),
    path({ "d": "m15.2 13.9-.9-.3" }),
    path({ "d": "m16.6 18.7.3-.9" }),
    path({ "d": "m19.1 12.2.3-.9" }),
    path({ "d": "m19.6 18.7-.4-1" }),
    path({ "d": "m16.8 12.3-.4-1" }),
    path({ "d": "m14.3 16.6 1-.4" }),
    path({ "d": "m20.7 13.8 1-.4" })
  );
}, "UserCog");

// src/icons/UserMinus.ts
import van1481 from "vanjs-core";
var UserMinus = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle, line } = van1481.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
    circle({ cx: "9", cy: "7", "r": "4" }),
    line({ x1: "22", x2: "16", y1: "11", y2: "11" })
  );
}, "UserMinus");

// src/icons/UserPen.ts
import van1482 from "vanjs-core";
var UserPen = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1482.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M11.5 15H7a4 4 0 0 0-4 4v2" }),
    path({
      "d": "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
    }),
    circle({ cx: "10", cy: "7", "r": "4" })
  );
}, "UserPen");

// src/icons/UserPlus.ts
import van1483 from "vanjs-core";
var UserPlus = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle, line } = van1483.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
    circle({ cx: "9", cy: "7", "r": "4" }),
    line({ x1: "19", x2: "19", y1: "8", y2: "14" }),
    line({ x1: "22", x2: "16", y1: "11", y2: "11" })
  );
}, "UserPlus");

// src/icons/UserRoundCheck.ts
import van1484 from "vanjs-core";
var UserRoundCheck = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1484.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 21a8 8 0 0 1 13.292-6" }),
    circle({ cx: "10", cy: "8", "r": "5" }),
    path({ "d": "m16 19 2 2 4-4" })
  );
}, "UserRoundCheck");

// src/icons/UserRoundCog.ts
import van1485 from "vanjs-core";
var UserRoundCog = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1485.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 21a8 8 0 0 1 10.434-7.62" }),
    circle({ cx: "10", cy: "8", "r": "5" }),
    circle({ cx: "18", cy: "18", "r": "3" }),
    path({ "d": "m19.5 14.3-.4.9" }),
    path({ "d": "m16.9 20.8-.4.9" }),
    path({ "d": "m21.7 19.5-.9-.4" }),
    path({ "d": "m15.2 16.9-.9-.4" }),
    path({ "d": "m21.7 16.5-.9.4" }),
    path({ "d": "m15.2 19.1-.9.4" }),
    path({ "d": "m19.5 21.7-.4-.9" }),
    path({ "d": "m16.9 15.2-.4-.9" })
  );
}, "UserRoundCog");

// src/icons/UserRoundMinus.ts
import van1486 from "vanjs-core";
var UserRoundMinus = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1486.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 21a8 8 0 0 1 13.292-6" }),
    circle({ cx: "10", cy: "8", "r": "5" }),
    path({ "d": "M22 19h-6" })
  );
}, "UserRoundMinus");

// src/icons/UserRoundPen.ts
import van1487 from "vanjs-core";
var UserRoundPen = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1487.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 21a8 8 0 0 1 10.821-7.487" }),
    path({
      "d": "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
    }),
    circle({ cx: "10", cy: "8", "r": "5" })
  );
}, "UserRoundPen");

// src/icons/UserRoundPlus.ts
import van1488 from "vanjs-core";
var UserRoundPlus = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1488.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 21a8 8 0 0 1 13.292-6" }),
    circle({ cx: "10", cy: "8", "r": "5" }),
    path({ "d": "M19 16v6" }),
    path({ "d": "M22 19h-6" })
  );
}, "UserRoundPlus");

// src/icons/UserRoundSearch.ts
import van1489 from "vanjs-core";
var UserRoundSearch = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van1489.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "10", cy: "8", "r": "5" }),
    path({ "d": "M2 21a8 8 0 0 1 10.434-7.62" }),
    circle({ cx: "18", cy: "18", "r": "3" }),
    path({ "d": "m22 22-1.9-1.9" })
  );
}, "UserRoundSearch");

// src/icons/UserRoundX.ts
import van1490 from "vanjs-core";
var UserRoundX = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1490.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 21a8 8 0 0 1 11.873-7" }),
    circle({ cx: "10", cy: "8", "r": "5" }),
    path({ "d": "m17 17 5 5" }),
    path({ "d": "m22 17-5 5" })
  );
}, "UserRoundX");

// src/icons/UserRound.ts
import van1491 from "vanjs-core";
var UserRound = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van1491.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "8", "r": "5" }),
    path({ "d": "M20 21a8 8 0 0 0-16 0" })
  );
}, "UserRound");

// src/icons/UserSearch.ts
import van1492 from "vanjs-core";
var UserSearch = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van1492.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "10", cy: "7", "r": "4" }),
    path({ "d": "M10.3 15H7a4 4 0 0 0-4 4v2" }),
    circle({ cx: "17", cy: "17", "r": "3" }),
    path({ "d": "m21 21-1.9-1.9" })
  );
}, "UserSearch");

// src/icons/UserX.ts
import van1493 from "vanjs-core";
var UserX = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle, line } = van1493.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
    circle({ cx: "9", cy: "7", "r": "4" }),
    line({ x1: "17", x2: "22", y1: "8", y2: "13" }),
    line({ x1: "22", x2: "17", y1: "8", y2: "13" })
  );
}, "UserX");

// src/icons/User.ts
import van1494 from "vanjs-core";
var User = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1494.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }),
    circle({ cx: "12", cy: "7", "r": "4" })
  );
}, "User");

// src/icons/UsersRound.ts
import van1495 from "vanjs-core";
var UsersRound = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1495.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M18 21a8 8 0 0 0-16 0" }),
    circle({ cx: "10", cy: "8", "r": "5" }),
    path({ "d": "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" })
  );
}, "UsersRound");

// src/icons/Users.ts
import van1496 from "vanjs-core";
var Users = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1496.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
    circle({ cx: "9", cy: "7", "r": "4" }),
    path({ "d": "M22 21v-2a4 4 0 0 0-3-3.87" }),
    path({ "d": "M16 3.13a4 4 0 0 1 0 7.75" })
  );
}, "Users");

// src/icons/UtensilsCrossed.ts
import van1497 from "vanjs-core";
var UtensilsCrossed = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1497.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8" }),
    path({
      "d": "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"
    }),
    path({ "d": "m2.1 21.8 6.4-6.3" }),
    path({ "d": "m19 5-7 7" })
  );
}, "UtensilsCrossed");

// src/icons/Utensils.ts
import van1498 from "vanjs-core";
var Utensils = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1498.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" }),
    path({ "d": "M7 2v20" }),
    path({ "d": "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" })
  );
}, "Utensils");

// src/icons/UtilityPole.ts
import van1499 from "vanjs-core";
var UtilityPole = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1499.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 2v20" }),
    path({ "d": "M2 5h20" }),
    path({ "d": "M3 3v2" }),
    path({ "d": "M7 3v2" }),
    path({ "d": "M17 3v2" }),
    path({ "d": "M21 3v2" }),
    path({ "d": "m19 5-7 7-7-7" })
  );
}, "UtilityPole");

// src/icons/Variable.ts
import van1500 from "vanjs-core";
var Variable = /* @__PURE__ */ __name((props = {}) => {
  const { path, line } = van1500.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 21s-4-3-4-9 4-9 4-9" }),
    path({ "d": "M16 3s4 3 4 9-4 9-4 9" }),
    line({ x1: "15", x2: "9", y1: "9", y2: "15" }),
    line({ x1: "9", x2: "15", y1: "9", y2: "15" })
  );
}, "Variable");

// src/icons/Vault.ts
import van1501 from "vanjs-core";
var Vault = /* @__PURE__ */ __name((props = {}) => {
  const { rect, circle, path } = van1501.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    circle({ cx: "7.5", cy: "7.5", "r": ".5", fill: "currentColor" }),
    path({ "d": "m7.9 7.9 2.7 2.7" }),
    circle({ cx: "16.5", cy: "7.5", "r": ".5", fill: "currentColor" }),
    path({ "d": "m13.4 10.6 2.7-2.7" }),
    circle({ cx: "7.5", cy: "16.5", "r": ".5", fill: "currentColor" }),
    path({ "d": "m7.9 16.1 2.7-2.7" }),
    circle({ cx: "16.5", cy: "16.5", "r": ".5", fill: "currentColor" }),
    path({ "d": "m13.4 13.4 2.7 2.7" }),
    circle({ cx: "12", cy: "12", "r": "2" })
  );
}, "Vault");

// src/icons/Vegan.ts
import van1502 from "vanjs-core";
var Vegan = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1502.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 8q6 0 6-6-6 0-6 6" }),
    path({ "d": "M17.41 3.59a10 10 0 1 0 3 3" }),
    path({ "d": "M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14" })
  );
}, "Vegan");

// src/icons/VenetianMask.ts
import van1503 from "vanjs-core";
var VenetianMask = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1503.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M18 11c-1.5 0-2.5.5-3 2" }),
    path({
      "d": "M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z"
    }),
    path({ "d": "M6 11c1.5 0 2.5.5 3 2" })
  );
}, "VenetianMask");

// src/icons/VenusAndMars.ts
import van1504 from "vanjs-core";
var VenusAndMars = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1504.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 20h4" }),
    path({ "d": "M12 16v6" }),
    path({ "d": "M17 2h4v4" }),
    path({ "d": "m21 2-5.46 5.46" }),
    circle({ cx: "12", cy: "11", "r": "5" })
  );
}, "VenusAndMars");

// src/icons/Venus.ts
import van1505 from "vanjs-core";
var Venus = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1505.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 15v7" }),
    path({ "d": "M9 19h6" }),
    circle({ cx: "12", cy: "9", "r": "6" })
  );
}, "Venus");

// src/icons/VibrateOff.ts
import van1506 from "vanjs-core";
var VibrateOff = /* @__PURE__ */ __name((props = {}) => {
  const { path, line } = van1506.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m2 8 2 2-2 2 2 2-2 2" }),
    path({ "d": "m22 8-2 2 2 2-2 2 2 2" }),
    path({ "d": "M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2" }),
    path({ "d": "M16 10.34V6c0-.55-.45-1-1-1h-4.34" }),
    line({ x1: "2", x2: "22", y1: "2", y2: "22" })
  );
}, "VibrateOff");

// src/icons/Vibrate.ts
import van1507 from "vanjs-core";
var Vibrate = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van1507.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m2 8 2 2-2 2 2 2-2 2" }),
    path({ "d": "m22 8-2 2 2 2-2 2 2 2" }),
    rect({ width: "8", height: "14", "x": "8", "y": "5", rx: "1" })
  );
}, "Vibrate");

// src/icons/VideoOff.ts
import van1508 from "vanjs-core";
var VideoOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1508.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196"
    }),
    path({ "d": "M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" }),
    path({ "d": "m2 2 20 20" })
  );
}, "VideoOff");

// src/icons/Video.ts
import van1509 from "vanjs-core";
var Video = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van1509.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
    }),
    rect({ "x": "2", "y": "6", width: "14", height: "12", rx: "2" })
  );
}, "Video");

// src/icons/Videotape.ts
import van1510 from "vanjs-core";
var Videotape = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path, circle } = van1510.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "20", height: "16", "x": "2", "y": "4", rx: "2" }),
    path({ "d": "M2 8h20" }),
    circle({ cx: "8", cy: "14", "r": "2" }),
    path({ "d": "M8 12h8" }),
    circle({ cx: "16", cy: "14", "r": "2" })
  );
}, "Videotape");

// src/icons/View.ts
import van1511 from "vanjs-core";
var View = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1511.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" }),
    path({ "d": "M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" }),
    circle({ cx: "12", cy: "12", "r": "1" }),
    path({
      "d": "M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"
    })
  );
}, "View");

// src/icons/Voicemail.ts
import van1512 from "vanjs-core";
var Voicemail = /* @__PURE__ */ __name((props = {}) => {
  const { circle, line } = van1512.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "6", cy: "12", "r": "4" }),
    circle({ cx: "18", cy: "12", "r": "4" }),
    line({ x1: "6", x2: "18", y1: "16", y2: "16" })
  );
}, "Voicemail");

// src/icons/Volleyball.ts
import van1513 from "vanjs-core";
var Volleyball = /* @__PURE__ */ __name((props = {}) => {
  const { path, circle } = van1513.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M11.1 7.1a16.55 16.55 0 0 1 10.9 4" }),
    path({ "d": "M12 12a12.6 12.6 0 0 1-8.7 5" }),
    path({ "d": "M16.8 13.6a16.55 16.55 0 0 1-9 7.5" }),
    path({ "d": "M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10" }),
    path({ "d": "M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5" }),
    circle({ cx: "12", cy: "12", "r": "10" })
  );
}, "Volleyball");

// src/icons/Volume1.ts
import van1514 from "vanjs-core";
var Volume1 = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1514.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
    }),
    path({ "d": "M16 9a5 5 0 0 1 0 6" })
  );
}, "Volume1");

// src/icons/Volume2.ts
import van1515 from "vanjs-core";
var Volume2 = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1515.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
    }),
    path({ "d": "M16 9a5 5 0 0 1 0 6" }),
    path({ "d": "M19.364 18.364a9 9 0 0 0 0-12.728" })
  );
}, "Volume2");

// src/icons/VolumeOff.ts
import van1516 from "vanjs-core";
var VolumeOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1516.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M16 9a5 5 0 0 1 .95 2.293" }),
    path({ "d": "M19.364 5.636a9 9 0 0 1 1.889 9.96" }),
    path({ "d": "m2 2 20 20" }),
    path({
      "d": "m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"
    }),
    path({ "d": "M9.828 4.172A.686.686 0 0 1 11 4.657v.686" })
  );
}, "VolumeOff");

// src/icons/VolumeX.ts
import van1517 from "vanjs-core";
var VolumeX = /* @__PURE__ */ __name((props = {}) => {
  const { path, line } = van1517.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
    }),
    line({ x1: "22", x2: "16", y1: "9", y2: "15" }),
    line({ x1: "16", x2: "22", y1: "9", y2: "15" })
  );
}, "VolumeX");

// src/icons/Volume.ts
import van1518 from "vanjs-core";
var Volume = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1518.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
    })
  );
}, "Volume");

// src/icons/Vote.ts
import van1519 from "vanjs-core";
var Vote = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1519.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m9 12 2 2 4-4" }),
    path({ "d": "M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" }),
    path({ "d": "M22 19H2" })
  );
}, "Vote");

// src/icons/WalletCards.ts
import van1520 from "vanjs-core";
var WalletCards = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1520.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "18", height: "18", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" }),
    path({
      "d": "M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"
    })
  );
}, "WalletCards");

// src/icons/WalletMinimal.ts
import van1521 from "vanjs-core";
var WalletMinimal = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1521.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M17 14h.01" }),
    path({
      "d": "M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14"
    })
  );
}, "WalletMinimal");

// src/icons/Wallet.ts
import van1522 from "vanjs-core";
var Wallet = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1522.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"
    }),
    path({ "d": "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" })
  );
}, "Wallet");

// src/icons/Wallpaper.ts
import van1523 from "vanjs-core";
var Wallpaper = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van1523.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "8", cy: "9", "r": "2" }),
    path({
      "d": "m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"
    }),
    path({ "d": "M8 21h8" }),
    path({ "d": "M12 17v4" })
  );
}, "Wallpaper");

// src/icons/WandSparkles.ts
import van1524 from "vanjs-core";
var WandSparkles = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1524.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"
    }),
    path({ "d": "m14 7 3 3" }),
    path({ "d": "M5 6v4" }),
    path({ "d": "M19 14v4" }),
    path({ "d": "M10 2v2" }),
    path({ "d": "M7 8H3" }),
    path({ "d": "M21 16h-4" }),
    path({ "d": "M11 3H9" })
  );
}, "WandSparkles");

// src/icons/Wand.ts
import van1525 from "vanjs-core";
var Wand = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1525.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M15 4V2" }),
    path({ "d": "M15 16v-2" }),
    path({ "d": "M8 9h2" }),
    path({ "d": "M20 9h2" }),
    path({ "d": "M17.8 11.8 19 13" }),
    path({ "d": "M15 9h.01" }),
    path({ "d": "M17.8 6.2 19 5" }),
    path({ "d": "m3 21 9-9" }),
    path({ "d": "M12.2 6.2 11 5" })
  );
}, "Wand");

// src/icons/Warehouse.ts
import van1526 from "vanjs-core";
var Warehouse = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect } = van1526.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"
    }),
    path({ "d": "M6 18h12" }),
    path({ "d": "M6 14h12" }),
    rect({ width: "12", height: "12", "x": "6", "y": "10" })
  );
}, "Warehouse");

// src/icons/WashingMachine.ts
import van1527 from "vanjs-core";
var WashingMachine = /* @__PURE__ */ __name((props = {}) => {
  const { path, rect, circle } = van1527.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M3 6h3" }),
    path({ "d": "M17 6h.01" }),
    rect({ width: "18", height: "20", "x": "3", "y": "2", rx: "2" }),
    circle({ cx: "12", cy: "13", "r": "5" }),
    path({ "d": "M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5" })
  );
}, "WashingMachine");

// src/icons/Watch.ts
import van1528 from "vanjs-core";
var Watch = /* @__PURE__ */ __name((props = {}) => {
  const { circle, polyline, path } = van1528.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "12", "r": "6" }),
    polyline({ points: "12 10 12 12 13 13" }),
    path({
      "d": "m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05"
    }),
    path({
      "d": "m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"
    })
  );
}, "Watch");

// src/icons/WavesLadder.ts
import van1529 from "vanjs-core";
var WavesLadder = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1529.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M19 5a2 2 0 0 0-2 2v11" }),
    path({
      "d": "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
    }),
    path({ "d": "M7 13h10" }),
    path({ "d": "M7 9h10" }),
    path({ "d": "M9 5a2 2 0 0 0-2 2v11" })
  );
}, "WavesLadder");

// src/icons/Waves.ts
import van1530 from "vanjs-core";
var Waves = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1530.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
    }),
    path({
      "d": "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
    }),
    path({
      "d": "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
    })
  );
}, "Waves");

// src/icons/Waypoints.ts
import van1531 from "vanjs-core";
var Waypoints = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van1531.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "4.5", "r": "2.5" }),
    path({ "d": "m10.2 6.3-3.9 3.9" }),
    circle({ cx: "4.5", cy: "12", "r": "2.5" }),
    path({ "d": "M7 12h10" }),
    circle({ cx: "19.5", cy: "12", "r": "2.5" }),
    path({ "d": "m13.8 17.7 3.9-3.9" }),
    circle({ cx: "12", cy: "19.5", "r": "2.5" })
  );
}, "Waypoints");

// src/icons/Webcam.ts
import van1532 from "vanjs-core";
var Webcam = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van1532.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "10", "r": "8" }),
    circle({ cx: "12", cy: "10", "r": "3" }),
    path({ "d": "M7 22h10" }),
    path({ "d": "M12 22v-4" })
  );
}, "Webcam");

// src/icons/WebhookOff.ts
import van1533 from "vanjs-core";
var WebhookOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1533.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15" }),
    path({ "d": "M9 3.4a4 4 0 0 1 6.52.66" }),
    path({ "d": "m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05" }),
    path({ "d": "M20.3 20.3a4 4 0 0 1-2.3.7" }),
    path({ "d": "M18.6 13a4 4 0 0 1 3.357 3.414" }),
    path({ "d": "m12 6 .6 1" }),
    path({ "d": "m2 2 20 20" })
  );
}, "WebhookOff");

// src/icons/Webhook.ts
import van1534 from "vanjs-core";
var Webhook = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1534.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"
    }),
    path({ "d": "m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" }),
    path({ "d": "m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" })
  );
}, "Webhook");

// src/icons/Weight.ts
import van1535 from "vanjs-core";
var Weight = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van1535.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "12", cy: "5", "r": "3" }),
    path({
      "d": "M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"
    })
  );
}, "Weight");

// src/icons/WheatOff.ts
import van1536 from "vanjs-core";
var WheatOff = /* @__PURE__ */ __name((props = {}) => {
  const { path, line } = van1536.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m2 22 10-10" }),
    path({ "d": "m16 8-1.17 1.17" }),
    path({
      "d": "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"
    }),
    path({
      "d": "m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97"
    }),
    path({
      "d": "M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62"
    }),
    path({ "d": "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" }),
    path({
      "d": "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
    }),
    path({
      "d": "m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98"
    }),
    path({
      "d": "M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28"
    }),
    line({ x1: "2", x2: "22", y1: "2", y2: "22" })
  );
}, "WheatOff");

// src/icons/Wheat.ts
import van1537 from "vanjs-core";
var Wheat = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1537.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M2 22 16 8" }),
    path({
      "d": "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"
    }),
    path({
      "d": "M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"
    }),
    path({
      "d": "M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"
    }),
    path({ "d": "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" }),
    path({
      "d": "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
    }),
    path({
      "d": "M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
    }),
    path({
      "d": "M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
    })
  );
}, "Wheat");

// src/icons/WholeWord.ts
import van1538 from "vanjs-core";
var WholeWord = /* @__PURE__ */ __name((props = {}) => {
  const { circle, path } = van1538.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "7", cy: "12", "r": "3" }),
    path({ "d": "M10 9v6" }),
    circle({ cx: "17", cy: "12", "r": "3" }),
    path({ "d": "M14 7v8" }),
    path({ "d": "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" })
  );
}, "WholeWord");

// src/icons/WifiHigh.ts
import van1539 from "vanjs-core";
var WifiHigh = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1539.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 20h.01" }),
    path({ "d": "M5 12.859a10 10 0 0 1 14 0" }),
    path({ "d": "M8.5 16.429a5 5 0 0 1 7 0" })
  );
}, "WifiHigh");

// src/icons/WifiLow.ts
import van1540 from "vanjs-core";
var WifiLow = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1540.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 20h.01" }),
    path({ "d": "M8.5 16.429a5 5 0 0 1 7 0" })
  );
}, "WifiLow");

// src/icons/WifiOff.ts
import van1541 from "vanjs-core";
var WifiOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1541.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 20h.01" }),
    path({ "d": "M8.5 16.429a5 5 0 0 1 7 0" }),
    path({ "d": "M5 12.859a10 10 0 0 1 5.17-2.69" }),
    path({ "d": "M19 12.859a10 10 0 0 0-2.007-1.523" }),
    path({ "d": "M2 8.82a15 15 0 0 1 4.177-2.643" }),
    path({ "d": "M22 8.82a15 15 0 0 0-11.288-3.764" }),
    path({ "d": "m2 2 20 20" })
  );
}, "WifiOff");

// src/icons/WifiZero.ts
import van1542 from "vanjs-core";
var WifiZero = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1542.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 20h.01" })
  );
}, "WifiZero");

// src/icons/Wifi.ts
import van1543 from "vanjs-core";
var Wifi = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1543.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12 20h.01" }),
    path({ "d": "M2 8.82a15 15 0 0 1 20 0" }),
    path({ "d": "M5 12.859a10 10 0 0 1 14 0" }),
    path({ "d": "M8.5 16.429a5 5 0 0 1 7 0" })
  );
}, "Wifi");

// src/icons/WindArrowDown.ts
import van1544 from "vanjs-core";
var WindArrowDown = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1544.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10 2v8" }),
    path({ "d": "M12.8 21.6A2 2 0 1 0 14 18H2" }),
    path({ "d": "M17.5 10a2.5 2.5 0 1 1 2 4H2" }),
    path({ "d": "m6 6 4 4 4-4" })
  );
}, "WindArrowDown");

// src/icons/Wind.ts
import van1545 from "vanjs-core";
var Wind = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1545.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M12.8 19.6A2 2 0 1 0 14 16H2" }),
    path({ "d": "M17.5 8a2.5 2.5 0 1 1 2 4H2" }),
    path({ "d": "M9.8 4.4A2 2 0 1 1 11 8H2" })
  );
}, "Wind");

// src/icons/WineOff.ts
import van1546 from "vanjs-core";
var WineOff = /* @__PURE__ */ __name((props = {}) => {
  const { path, line } = van1546.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 22h8" }),
    path({ "d": "M7 10h3m7 0h-1.343" }),
    path({ "d": "M12 15v7" }),
    path({
      "d": "M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198"
    }),
    line({ x1: "2", x2: "22", y1: "2", y2: "22" })
  );
}, "WineOff");

// src/icons/Wine.ts
import van1547 from "vanjs-core";
var Wine = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1547.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M8 22h8" }),
    path({ "d": "M7 10h10" }),
    path({ "d": "M12 15v7" }),
    path({
      "d": "M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"
    })
  );
}, "Wine");

// src/icons/Workflow.ts
import van1548 from "vanjs-core";
var Workflow = /* @__PURE__ */ __name((props = {}) => {
  const { rect, path } = van1548.tags(svgNamespace);
  return LucideIcon(
    props,
    rect({ width: "8", height: "8", "x": "3", "y": "3", rx: "2" }),
    path({ "d": "M7 11v4a2 2 0 0 0 2 2h4" }),
    rect({ width: "8", height: "8", "x": "13", "y": "13", rx: "2" })
  );
}, "Workflow");

// src/icons/Worm.ts
import van1549 from "vanjs-core";
var Worm = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1549.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "m19 12-1.5 3" }),
    path({ "d": "M19.63 18.81 22 20" }),
    path({
      "d": "M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z"
    })
  );
}, "Worm");

// src/icons/WrapText.ts
import van1550 from "vanjs-core";
var WrapText = /* @__PURE__ */ __name((props = {}) => {
  const { line, path, polyline } = van1550.tags(svgNamespace);
  return LucideIcon(
    props,
    line({ x1: "3", x2: "21", y1: "6", y2: "6" }),
    path({ "d": "M3 12h15a3 3 0 1 1 0 6h-4" }),
    polyline({ points: "16 16 14 18 16 20" }),
    line({ x1: "3", x2: "10", y1: "18", y2: "18" })
  );
}, "WrapText");

// src/icons/Wrench.ts
import van1551 from "vanjs-core";
var Wrench = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1551.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
    })
  );
}, "Wrench");

// src/icons/X.ts
import van1552 from "vanjs-core";
var X = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1552.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M18 6 6 18" }),
    path({ "d": "m6 6 12 12" })
  );
}, "X");

// src/icons/Youtube.ts
import van1553 from "vanjs-core";
var Youtube = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1553.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
    }),
    path({ "d": "m10 15 5-3-5-3z" })
  );
}, "Youtube");

// src/icons/ZapOff.ts
import van1554 from "vanjs-core";
var ZapOff = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1554.tags(svgNamespace);
  return LucideIcon(
    props,
    path({ "d": "M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317" }),
    path({ "d": "M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773" }),
    path({
      "d": "M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643"
    }),
    path({ "d": "m2 2 20 20" })
  );
}, "ZapOff");

// src/icons/Zap.ts
import van1555 from "vanjs-core";
var Zap = /* @__PURE__ */ __name((props = {}) => {
  const { path } = van1555.tags(svgNamespace);
  return LucideIcon(
    props,
    path({
      "d": "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
    })
  );
}, "Zap");

// src/icons/ZoomIn.ts
import van1556 from "vanjs-core";
var ZoomIn = /* @__PURE__ */ __name((props = {}) => {
  const { circle, line } = van1556.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "11", cy: "11", "r": "8" }),
    line({ x1: "21", x2: "16.65", y1: "21", y2: "16.65" }),
    line({ x1: "11", x2: "11", y1: "8", y2: "14" }),
    line({ x1: "8", x2: "14", y1: "11", y2: "11" })
  );
}, "ZoomIn");

// src/icons/ZoomOut.ts
import van1557 from "vanjs-core";
var ZoomOut = /* @__PURE__ */ __name((props = {}) => {
  const { circle, line } = van1557.tags(svgNamespace);
  return LucideIcon(
    props,
    circle({ cx: "11", cy: "11", "r": "8" }),
    line({ x1: "21", x2: "16.65", y1: "21", y2: "16.65" }),
    line({ x1: "8", x2: "14", y1: "11", y2: "11" })
  );
}, "ZoomOut");
export {
  AArrowDown,
  AArrowUp,
  ALargeSmall,
  Accessibility,
  Activity,
  AirVent,
  Airplay,
  AlarmClock,
  AlarmClockCheck,
  AlarmClockMinus,
  AlarmClockOff,
  AlarmClockPlus,
  AlarmSmoke,
  Album,
  AlignCenter,
  AlignCenterHorizontal,
  AlignCenterVertical,
  AlignEndHorizontal,
  AlignEndVertical,
  AlignHorizontalDistributeCenter,
  AlignHorizontalDistributeEnd,
  AlignHorizontalDistributeStart,
  AlignHorizontalJustifyCenter,
  AlignHorizontalJustifyEnd,
  AlignHorizontalJustifyStart,
  AlignHorizontalSpaceAround,
  AlignHorizontalSpaceBetween,
  AlignJustify,
  AlignLeft,
  AlignRight,
  AlignStartHorizontal,
  AlignStartVertical,
  AlignVerticalDistributeCenter,
  AlignVerticalDistributeEnd,
  AlignVerticalDistributeStart,
  AlignVerticalJustifyCenter,
  AlignVerticalJustifyEnd,
  AlignVerticalJustifyStart,
  AlignVerticalSpaceAround,
  AlignVerticalSpaceBetween,
  Ambulance,
  Ampersand,
  Ampersands,
  Amphora,
  Anchor,
  Angry,
  Annoyed,
  Antenna,
  Anvil,
  Aperture,
  AppWindow,
  AppWindowMac,
  Apple,
  Archive,
  ArchiveRestore,
  ArchiveX,
  Armchair,
  ArrowBigDown,
  ArrowBigDownDash,
  ArrowBigLeft,
  ArrowBigLeftDash,
  ArrowBigRight,
  ArrowBigRightDash,
  ArrowBigUp,
  ArrowBigUpDash,
  ArrowDown,
  ArrowDown01,
  ArrowDown10,
  ArrowDownAZ,
  ArrowDownFromLine,
  ArrowDownLeft,
  ArrowDownNarrowWide,
  ArrowDownRight,
  ArrowDownToDot,
  ArrowDownToLine,
  ArrowDownUp,
  ArrowDownWideNarrow,
  ArrowDownZA,
  ArrowLeft,
  ArrowLeftFromLine,
  ArrowLeftRight,
  ArrowLeftToLine,
  ArrowRight,
  ArrowRightFromLine,
  ArrowRightLeft,
  ArrowRightToLine,
  ArrowUp,
  ArrowUp01,
  ArrowUp10,
  ArrowUpAZ,
  ArrowUpDown,
  ArrowUpFromDot,
  ArrowUpFromLine,
  ArrowUpLeft,
  ArrowUpNarrowWide,
  ArrowUpRight,
  ArrowUpToLine,
  ArrowUpWideNarrow,
  ArrowUpZA,
  ArrowsUpFromLine,
  Asterisk,
  AtSign,
  Atom,
  AudioLines,
  AudioWaveform,
  Award,
  Axe,
  Axis3d,
  Baby,
  Backpack,
  Badge,
  BadgeAlert,
  BadgeCent,
  BadgeCheck,
  BadgeDollarSign,
  BadgeEuro,
  BadgeHelp,
  BadgeIndianRupee,
  BadgeInfo,
  BadgeJapaneseYen,
  BadgeMinus,
  BadgePercent,
  BadgePlus,
  BadgePoundSterling,
  BadgeRussianRuble,
  BadgeSwissFranc,
  BadgeX,
  BaggageClaim,
  Ban,
  Banana,
  Bandage,
  Banknote,
  Barcode,
  Baseline,
  Bath,
  Battery,
  BatteryCharging,
  BatteryFull,
  BatteryLow,
  BatteryMedium,
  BatteryPlus,
  BatteryWarning,
  Beaker,
  Bean,
  BeanOff,
  Bed,
  BedDouble,
  BedSingle,
  Beef,
  Beer,
  BeerOff,
  Bell,
  BellDot,
  BellElectric,
  BellMinus,
  BellOff,
  BellPlus,
  BellRing,
  BetweenHorizontalEnd,
  BetweenHorizontalStart,
  BetweenVerticalEnd,
  BetweenVerticalStart,
  BicepsFlexed,
  Bike,
  Binary,
  Binoculars,
  Biohazard,
  Bird,
  Bitcoin,
  Blend,
  Blinds,
  Blocks,
  Bluetooth,
  BluetoothConnected,
  BluetoothOff,
  BluetoothSearching,
  Bold,
  Bolt,
  Bomb,
  Bone,
  Book,
  BookA,
  BookAudio,
  BookCheck,
  BookCopy,
  BookDashed,
  BookDown,
  BookHeadphones,
  BookHeart,
  BookImage,
  BookKey,
  BookLock,
  BookMarked,
  BookMinus,
  BookOpen,
  BookOpenCheck,
  BookOpenText,
  BookPlus,
  BookText,
  BookType,
  BookUp,
  BookUp2,
  BookUser,
  BookX,
  Bookmark,
  BookmarkCheck,
  BookmarkMinus,
  BookmarkPlus,
  BookmarkX,
  BoomBox,
  Bot,
  BotMessageSquare,
  BotOff,
  Box,
  Boxes,
  Braces,
  Brackets,
  Brain,
  BrainCircuit,
  BrainCog,
  BrickWall,
  Briefcase,
  BriefcaseBusiness,
  BriefcaseConveyorBelt,
  BriefcaseMedical,
  BringToFront,
  Brush,
  Bug,
  BugOff,
  BugPlay,
  Building,
  Building2,
  Bus,
  BusFront,
  Cable,
  CableCar,
  Cake,
  CakeSlice,
  Calculator,
  Calendar,
  Calendar1,
  CalendarArrowDown,
  CalendarArrowUp,
  CalendarCheck,
  CalendarCheck2,
  CalendarClock,
  CalendarCog,
  CalendarDays,
  CalendarFold,
  CalendarHeart,
  CalendarMinus,
  CalendarMinus2,
  CalendarOff,
  CalendarPlus,
  CalendarPlus2,
  CalendarRange,
  CalendarSearch,
  CalendarSync,
  CalendarX,
  CalendarX2,
  Camera,
  CameraOff,
  Candy,
  CandyCane,
  CandyOff,
  Cannabis,
  Captions,
  CaptionsOff,
  Car,
  CarFront,
  CarTaxiFront,
  Caravan,
  Carrot,
  CaseLower,
  CaseSensitive,
  CaseUpper,
  CassetteTape,
  Cast,
  Castle,
  Cat,
  Cctv,
  ChartArea,
  ChartBar,
  ChartBarBig,
  ChartBarDecreasing,
  ChartBarIncreasing,
  ChartBarStacked,
  ChartCandlestick,
  ChartColumn,
  ChartColumnBig,
  ChartColumnDecreasing,
  ChartColumnIncreasing,
  ChartColumnStacked,
  ChartGantt,
  ChartLine,
  ChartNetwork,
  ChartNoAxesColumn,
  ChartNoAxesColumnDecreasing,
  ChartNoAxesColumnIncreasing,
  ChartNoAxesCombined,
  ChartNoAxesGantt,
  ChartPie,
  ChartScatter,
  ChartSpline,
  Check,
  CheckCheck,
  ChefHat,
  Cherry,
  ChevronDown,
  ChevronFirst,
  ChevronLast,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronsDown,
  ChevronsDownUp,
  ChevronsLeft,
  ChevronsLeftRight,
  ChevronsLeftRightEllipsis,
  ChevronsRight,
  ChevronsRightLeft,
  ChevronsUp,
  ChevronsUpDown,
  Chrome,
  Church,
  Cigarette,
  CigaretteOff,
  Circle,
  CircleAlert,
  CircleArrowDown,
  CircleArrowLeft,
  CircleArrowOutDownLeft,
  CircleArrowOutDownRight,
  CircleArrowOutUpLeft,
  CircleArrowOutUpRight,
  CircleArrowRight,
  CircleArrowUp,
  CircleCheck,
  CircleCheckBig,
  CircleChevronDown,
  CircleChevronLeft,
  CircleChevronRight,
  CircleChevronUp,
  CircleDashed,
  CircleDivide,
  CircleDollarSign,
  CircleDot,
  CircleDotDashed,
  CircleEllipsis,
  CircleEqual,
  CircleFadingArrowUp,
  CircleFadingPlus,
  CircleGauge,
  CircleHelp,
  CircleMinus,
  CircleOff,
  CircleParking,
  CircleParkingOff,
  CirclePause,
  CirclePercent,
  CirclePlay,
  CirclePlus,
  CirclePower,
  CircleSlash,
  CircleSlash2,
  CircleSmall,
  CircleStop,
  CircleUser,
  CircleUserRound,
  CircleX,
  CircuitBoard,
  Citrus,
  Clapperboard,
  Clipboard,
  ClipboardCheck,
  ClipboardCopy,
  ClipboardList,
  ClipboardMinus,
  ClipboardPaste,
  ClipboardPen,
  ClipboardPenLine,
  ClipboardPlus,
  ClipboardType,
  ClipboardX,
  Clock,
  Clock1,
  Clock10,
  Clock11,
  Clock12,
  Clock2,
  Clock3,
  Clock4,
  Clock5,
  Clock6,
  Clock7,
  Clock8,
  Clock9,
  ClockAlert,
  ClockArrowDown,
  ClockArrowUp,
  Cloud,
  CloudAlert,
  CloudCog,
  CloudDownload,
  CloudDrizzle,
  CloudFog,
  CloudHail,
  CloudLightning,
  CloudMoon,
  CloudMoonRain,
  CloudOff,
  CloudRain,
  CloudRainWind,
  CloudSnow,
  CloudSun,
  CloudSunRain,
  CloudUpload,
  Cloudy,
  Clover,
  Club,
  Code,
  CodeXml,
  Codepen,
  Codesandbox,
  Coffee,
  Cog,
  Coins,
  Columns2,
  Columns3,
  Columns4,
  Combine,
  Command,
  Compass,
  Component,
  Computer,
  ConciergeBell,
  Cone,
  Construction,
  Contact,
  ContactRound,
  Container,
  Contrast,
  Cookie,
  CookingPot,
  Copy,
  CopyCheck,
  CopyMinus,
  CopyPlus,
  CopySlash,
  CopyX,
  Copyleft,
  Copyright,
  CornerDownLeft,
  CornerDownRight,
  CornerLeftDown,
  CornerLeftUp,
  CornerRightDown,
  CornerRightUp,
  CornerUpLeft,
  CornerUpRight,
  Cpu,
  CreativeCommons,
  CreditCard,
  Croissant,
  Crop,
  Cross,
  Crosshair,
  Crown,
  Cuboid,
  CupSoda,
  Currency,
  Cylinder,
  Dam,
  Database,
  DatabaseBackup,
  DatabaseZap,
  Delete,
  Dessert,
  Diameter,
  Diamond,
  DiamondMinus,
  DiamondPercent,
  DiamondPlus,
  Dice1,
  Dice2,
  Dice3,
  Dice4,
  Dice5,
  Dice6,
  Dices,
  Diff,
  Disc,
  Disc2,
  Disc3,
  DiscAlbum,
  Divide,
  Dna,
  DnaOff,
  Dock,
  Dog,
  DollarSign,
  Donut,
  DoorClosed,
  DoorOpen,
  Dot,
  Download,
  DraftingCompass,
  Drama,
  Dribbble,
  Drill,
  Droplet,
  DropletOff,
  Droplets,
  Drum,
  Drumstick,
  Dumbbell,
  Ear,
  EarOff,
  Earth,
  EarthLock,
  Eclipse,
  Egg,
  EggFried,
  EggOff,
  Ellipsis,
  EllipsisVertical,
  Equal,
  EqualApproximately,
  EqualNot,
  Eraser,
  EthernetPort,
  Euro,
  Expand,
  ExternalLink,
  Eye,
  EyeClosed,
  EyeOff,
  Facebook,
  Factory,
  Fan,
  FastForward,
  Feather,
  Fence,
  FerrisWheel,
  Figma,
  File,
  FileArchive,
  FileAudio,
  FileAudio2,
  FileAxis3d,
  FileBadge,
  FileBadge2,
  FileBox,
  FileChartColumn,
  FileChartColumnIncreasing,
  FileChartLine,
  FileChartPie,
  FileCheck,
  FileCheck2,
  FileClock,
  FileCode,
  FileCode2,
  FileCog,
  FileDiff,
  FileDigit,
  FileDown,
  FileHeart,
  FileImage,
  FileInput,
  FileJson,
  FileJson2,
  FileKey,
  FileKey2,
  FileLock,
  FileLock2,
  FileMinus,
  FileMinus2,
  FileMusic,
  FileOutput,
  FilePen,
  FilePenLine,
  FilePlus,
  FilePlus2,
  FileQuestion,
  FileScan,
  FileSearch,
  FileSearch2,
  FileSliders,
  FileSpreadsheet,
  FileStack,
  FileSymlink,
  FileTerminal,
  FileText,
  FileType,
  FileType2,
  FileUp,
  FileUser,
  FileVideo,
  FileVideo2,
  FileVolume,
  FileVolume2,
  FileWarning,
  FileX,
  FileX2,
  Files,
  Film,
  Filter,
  FilterX,
  Fingerprint,
  FireExtinguisher,
  Fish,
  FishOff,
  FishSymbol,
  Flag,
  FlagOff,
  FlagTriangleLeft,
  FlagTriangleRight,
  Flame,
  FlameKindling,
  Flashlight,
  FlashlightOff,
  FlaskConical,
  FlaskConicalOff,
  FlaskRound,
  FlipHorizontal,
  FlipHorizontal2,
  FlipVertical,
  FlipVertical2,
  Flower,
  Flower2,
  Focus,
  FoldHorizontal,
  FoldVertical,
  Folder,
  FolderArchive,
  FolderCheck,
  FolderClock,
  FolderClosed,
  FolderCode,
  FolderCog,
  FolderDot,
  FolderDown,
  FolderGit,
  FolderGit2,
  FolderHeart,
  FolderInput,
  FolderKanban,
  FolderKey,
  FolderLock,
  FolderMinus,
  FolderOpen,
  FolderOpenDot,
  FolderOutput,
  FolderPen,
  FolderPlus,
  FolderRoot,
  FolderSearch,
  FolderSearch2,
  FolderSymlink,
  FolderSync,
  FolderTree,
  FolderUp,
  FolderX,
  Folders,
  Footprints,
  Forklift,
  Forward,
  Frame,
  Framer,
  Frown,
  Fuel,
  Fullscreen,
  GalleryHorizontal,
  GalleryHorizontalEnd,
  GalleryThumbnails,
  GalleryVertical,
  GalleryVerticalEnd,
  Gamepad,
  Gamepad2,
  Gauge,
  Gavel,
  Gem,
  Ghost,
  Gift,
  GitBranch,
  GitBranchPlus,
  GitCommitHorizontal,
  GitCommitVertical,
  GitCompare,
  GitCompareArrows,
  GitFork,
  GitGraph,
  GitMerge,
  GitPullRequest,
  GitPullRequestArrow,
  GitPullRequestClosed,
  GitPullRequestCreate,
  GitPullRequestCreateArrow,
  GitPullRequestDraft,
  Github,
  Gitlab,
  GlassWater,
  Glasses,
  Globe,
  GlobeLock,
  Goal,
  Grab,
  GraduationCap,
  Grape,
  Grid2x2,
  Grid2x2Check,
  Grid2x2Plus,
  Grid2x2X,
  Grid3x3,
  Grip,
  GripHorizontal,
  GripVertical,
  Group,
  Guitar,
  Ham,
  Hammer,
  Hand,
  HandCoins,
  HandHeart,
  HandHelping,
  HandMetal,
  HandPlatter,
  Handshake,
  HardDrive,
  HardDriveDownload,
  HardDriveUpload,
  HardHat,
  Hash,
  Haze,
  HdmiPort,
  Heading,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  HeadphoneOff,
  Headphones,
  Headset,
  Heart,
  HeartCrack,
  HeartHandshake,
  HeartOff,
  HeartPulse,
  Heater,
  Hexagon,
  Highlighter,
  History,
  Hop,
  HopOff,
  Hospital,
  Hotel,
  Hourglass,
  House,
  HousePlug,
  HousePlus,
  HouseWifi,
  IceCreamBowl,
  IceCreamCone,
  IdCard,
  Image,
  ImageDown,
  ImageMinus,
  ImageOff,
  ImagePlay,
  ImagePlus,
  ImageUp,
  ImageUpscale,
  Images,
  Import,
  Inbox,
  IndentDecrease,
  IndentIncrease,
  IndianRupee,
  InfinityIcon,
  Info,
  InspectionPanel,
  Instagram,
  Italic,
  IterationCcw,
  IterationCw,
  JapaneseYen,
  Joystick,
  Kanban,
  Key,
  KeyRound,
  KeySquare,
  Keyboard,
  KeyboardMusic,
  KeyboardOff,
  Lamp,
  LampCeiling,
  LampDesk,
  LampFloor,
  LampWallDown,
  LampWallUp,
  LandPlot,
  Landmark,
  Languages,
  Laptop,
  LaptopMinimal,
  LaptopMinimalCheck,
  Lasso,
  LassoSelect,
  Laugh,
  Layers,
  Layers2,
  LayoutDashboard,
  LayoutGrid,
  LayoutList,
  LayoutPanelLeft,
  LayoutPanelTop,
  LayoutTemplate,
  Leaf,
  LeafyGreen,
  Lectern,
  LetterText,
  Library,
  LibraryBig,
  LifeBuoy,
  Ligature,
  Lightbulb,
  LightbulbOff,
  Link,
  Link2,
  Link2Off,
  Linkedin,
  List,
  ListCheck,
  ListChecks,
  ListCollapse,
  ListEnd,
  ListFilter,
  ListFilterPlus,
  ListMinus,
  ListMusic,
  ListOrdered,
  ListPlus,
  ListRestart,
  ListStart,
  ListTodo,
  ListTree,
  ListVideo,
  ListX,
  Loader,
  LoaderCircle,
  LoaderPinwheel,
  Locate,
  LocateFixed,
  LocateOff,
  Lock,
  LockKeyhole,
  LockKeyholeOpen,
  LockOpen,
  LogIn,
  LogOut,
  Logs,
  Lollipop,
  Luggage,
  Magnet,
  Mail,
  MailCheck,
  MailMinus,
  MailOpen,
  MailPlus,
  MailQuestion,
  MailSearch,
  MailWarning,
  MailX,
  Mailbox,
  Mails,
  Map,
  MapPin,
  MapPinCheck,
  MapPinCheckInside,
  MapPinHouse,
  MapPinMinus,
  MapPinMinusInside,
  MapPinOff,
  MapPinPlus,
  MapPinPlusInside,
  MapPinX,
  MapPinXInside,
  MapPinned,
  MapPlus,
  Mars,
  MarsStroke,
  Martini,
  Maximize,
  Maximize2,
  Medal,
  Megaphone,
  MegaphoneOff,
  Meh,
  MemoryStick,
  Menu,
  Merge,
  MessageCircle,
  MessageCircleCode,
  MessageCircleDashed,
  MessageCircleHeart,
  MessageCircleMore,
  MessageCircleOff,
  MessageCirclePlus,
  MessageCircleQuestion,
  MessageCircleReply,
  MessageCircleWarning,
  MessageCircleX,
  MessageSquare,
  MessageSquareCode,
  MessageSquareDashed,
  MessageSquareDiff,
  MessageSquareDot,
  MessageSquareHeart,
  MessageSquareLock,
  MessageSquareMore,
  MessageSquareOff,
  MessageSquarePlus,
  MessageSquareQuote,
  MessageSquareReply,
  MessageSquareShare,
  MessageSquareText,
  MessageSquareWarning,
  MessageSquareX,
  MessagesSquare,
  Mic,
  MicOff,
  MicVocal,
  Microchip,
  Microscope,
  Microwave,
  Milestone,
  Milk,
  MilkOff,
  Minimize,
  Minimize2,
  Minus,
  Monitor,
  MonitorCheck,
  MonitorCog,
  MonitorDot,
  MonitorDown,
  MonitorOff,
  MonitorPause,
  MonitorPlay,
  MonitorSmartphone,
  MonitorSpeaker,
  MonitorStop,
  MonitorUp,
  MonitorX,
  Moon,
  MoonStar,
  Mountain,
  MountainSnow,
  Mouse,
  MouseOff,
  MousePointer,
  MousePointer2,
  MousePointerBan,
  MousePointerClick,
  Move,
  Move3d,
  MoveDiagonal,
  MoveDiagonal2,
  MoveDown,
  MoveDownLeft,
  MoveDownRight,
  MoveHorizontal,
  MoveLeft,
  MoveRight,
  MoveUp,
  MoveUpLeft,
  MoveUpRight,
  MoveVertical,
  Music,
  Music2,
  Music3,
  Music4,
  Navigation,
  Navigation2,
  Navigation2Off,
  NavigationOff,
  Network,
  Newspaper,
  Nfc,
  NonBinary,
  Notebook,
  NotebookPen,
  NotebookTabs,
  NotebookText,
  NotepadText,
  NotepadTextDashed,
  Nut,
  NutOff,
  Octagon,
  OctagonAlert,
  OctagonMinus,
  OctagonPause,
  OctagonX,
  Omega,
  Option,
  Orbit,
  Origami,
  Package,
  Package2,
  PackageCheck,
  PackageMinus,
  PackageOpen,
  PackagePlus,
  PackageSearch,
  PackageX,
  PaintBucket,
  PaintRoller,
  Paintbrush,
  PaintbrushVertical,
  Palette,
  PanelBottom,
  PanelBottomClose,
  PanelBottomDashed,
  PanelBottomOpen,
  PanelLeft,
  PanelLeftClose,
  PanelLeftDashed,
  PanelLeftOpen,
  PanelRight,
  PanelRightClose,
  PanelRightDashed,
  PanelRightOpen,
  PanelTop,
  PanelTopClose,
  PanelTopDashed,
  PanelTopOpen,
  PanelsLeftBottom,
  PanelsRightBottom,
  PanelsTopLeft,
  Paperclip,
  Parentheses,
  ParkingMeter,
  PartyPopper,
  Pause,
  PawPrint,
  PcCase,
  Pen,
  PenLine,
  PenOff,
  PenTool,
  Pencil,
  PencilLine,
  PencilOff,
  PencilRuler,
  Pentagon,
  Percent,
  PersonStanding,
  PhilippinePeso,
  Phone,
  PhoneCall,
  PhoneForwarded,
  PhoneIncoming,
  PhoneMissed,
  PhoneOff,
  PhoneOutgoing,
  Pi,
  Piano,
  Pickaxe,
  PictureInPicture,
  PictureInPicture2,
  PiggyBank,
  Pilcrow,
  PilcrowLeft,
  PilcrowRight,
  Pill,
  PillBottle,
  Pin,
  PinOff,
  Pipette,
  Pizza,
  Plane,
  PlaneLanding,
  PlaneTakeoff,
  Play,
  Plug,
  Plug2,
  PlugZap,
  Plus,
  Pocket,
  PocketKnife,
  Podcast,
  Pointer,
  PointerOff,
  Popcorn,
  Popsicle,
  PoundSterling,
  Power,
  PowerOff,
  Presentation,
  Printer,
  PrinterCheck,
  Projector,
  Proportions,
  Puzzle,
  Pyramid,
  QrCode,
  Quote,
  Rabbit,
  Radar,
  Radiation,
  Radical,
  Radio,
  RadioReceiver,
  RadioTower,
  Radius,
  RailSymbol,
  Rainbow,
  Rat,
  Ratio,
  Receipt,
  ReceiptCent,
  ReceiptEuro,
  ReceiptIndianRupee,
  ReceiptJapaneseYen,
  ReceiptPoundSterling,
  ReceiptRussianRuble,
  ReceiptSwissFranc,
  ReceiptText,
  RectangleEllipsis,
  RectangleHorizontal,
  RectangleVertical,
  Recycle,
  Redo,
  Redo2,
  RedoDot,
  RefreshCcw,
  RefreshCcwDot,
  RefreshCw,
  RefreshCwOff,
  Refrigerator,
  Regex,
  RemoveFormatting,
  Repeat,
  Repeat1,
  Repeat2,
  Replace,
  ReplaceAll,
  Reply,
  ReplyAll,
  Rewind,
  Ribbon,
  Rocket,
  RockingChair,
  RollerCoaster,
  Rotate3d,
  RotateCcw,
  RotateCcwSquare,
  RotateCw,
  RotateCwSquare,
  Route,
  RouteOff,
  Router,
  Rows2,
  Rows3,
  Rows4,
  Rss,
  Ruler,
  RussianRuble,
  Sailboat,
  Salad,
  Sandwich,
  Satellite,
  SatelliteDish,
  Save,
  SaveAll,
  SaveOff,
  Scale,
  Scale3d,
  Scaling,
  Scan,
  ScanBarcode,
  ScanEye,
  ScanFace,
  ScanHeart,
  ScanLine,
  ScanQrCode,
  ScanSearch,
  ScanText,
  School,
  Scissors,
  ScissorsLineDashed,
  ScreenShare,
  ScreenShareOff,
  Scroll,
  ScrollText,
  Search,
  SearchCheck,
  SearchCode,
  SearchSlash,
  SearchX,
  Section,
  Send,
  SendHorizontal,
  SendToBack,
  SeparatorHorizontal,
  SeparatorVertical,
  Server,
  ServerCog,
  ServerCrash,
  ServerOff,
  Settings,
  Settings2,
  Shapes,
  Share,
  Share2,
  Sheet,
  Shell,
  Shield,
  ShieldAlert,
  ShieldBan,
  ShieldCheck,
  ShieldEllipsis,
  ShieldHalf,
  ShieldMinus,
  ShieldOff,
  ShieldPlus,
  ShieldQuestion,
  ShieldUser,
  ShieldX,
  Ship,
  ShipWheel,
  Shirt,
  ShoppingBag,
  ShoppingBasket,
  ShoppingCart,
  Shovel,
  ShowerHead,
  Shrink,
  Shrub,
  Shuffle,
  Sigma,
  Signal,
  SignalHigh,
  SignalLow,
  SignalMedium,
  SignalZero,
  Signature,
  Signpost,
  SignpostBig,
  Siren,
  SkipBack,
  SkipForward,
  Skull,
  Slack,
  Slash,
  Slice,
  SlidersHorizontal,
  SlidersVertical,
  Smartphone,
  SmartphoneCharging,
  SmartphoneNfc,
  Smile,
  SmilePlus,
  Snail,
  Snowflake,
  Sofa,
  Soup,
  Space,
  Spade,
  Sparkle,
  Sparkles,
  Speaker,
  Speech,
  SpellCheck,
  SpellCheck2,
  Spline,
  Split,
  SprayCan,
  Sprout,
  Square,
  SquareActivity,
  SquareArrowDown,
  SquareArrowDownLeft,
  SquareArrowDownRight,
  SquareArrowLeft,
  SquareArrowOutDownLeft,
  SquareArrowOutDownRight,
  SquareArrowOutUpLeft,
  SquareArrowOutUpRight,
  SquareArrowRight,
  SquareArrowUp,
  SquareArrowUpLeft,
  SquareArrowUpRight,
  SquareAsterisk,
  SquareBottomDashedScissors,
  SquareChartGantt,
  SquareCheck,
  SquareCheckBig,
  SquareChevronDown,
  SquareChevronLeft,
  SquareChevronRight,
  SquareChevronUp,
  SquareCode,
  SquareDashed,
  SquareDashedBottom,
  SquareDashedBottomCode,
  SquareDashedKanban,
  SquareDashedMousePointer,
  SquareDivide,
  SquareDot,
  SquareEqual,
  SquareFunction,
  SquareKanban,
  SquareLibrary,
  SquareM,
  SquareMenu,
  SquareMinus,
  SquareMousePointer,
  SquareParking,
  SquareParkingOff,
  SquarePen,
  SquarePercent,
  SquarePi,
  SquarePilcrow,
  SquarePlay,
  SquarePlus,
  SquarePower,
  SquareRadical,
  SquareScissors,
  SquareSigma,
  SquareSlash,
  SquareSplitHorizontal,
  SquareSplitVertical,
  SquareSquare,
  SquareStack,
  SquareTerminal,
  SquareUser,
  SquareUserRound,
  SquareX,
  Squircle,
  Squirrel,
  Stamp,
  Star,
  StarHalf,
  StarOff,
  StepBack,
  StepForward,
  Stethoscope,
  Sticker,
  StickyNote,
  Store,
  StretchHorizontal,
  StretchVertical,
  Strikethrough,
  Subscript,
  Sun,
  SunDim,
  SunMedium,
  SunMoon,
  SunSnow,
  Sunrise,
  Sunset,
  Superscript,
  SwatchBook,
  SwissFranc,
  SwitchCamera,
  Sword,
  Swords,
  Syringe,
  Table,
  Table2,
  TableCellsMerge,
  TableCellsSplit,
  TableColumnsSplit,
  TableOfContents,
  TableProperties,
  TableRowsSplit,
  Tablet,
  TabletSmartphone,
  Tablets,
  Tag,
  Tags,
  Tally1,
  Tally2,
  Tally3,
  Tally4,
  Tally5,
  Tangent,
  Target,
  Telescope,
  Tent,
  TentTree,
  Terminal,
  TestTube,
  TestTubeDiagonal,
  TestTubes,
  Text,
  TextCursor,
  TextCursorInput,
  TextQuote,
  TextSearch,
  TextSelect,
  Theater,
  Thermometer,
  ThermometerSnowflake,
  ThermometerSun,
  ThumbsDown,
  ThumbsUp,
  Ticket,
  TicketCheck,
  TicketMinus,
  TicketPercent,
  TicketPlus,
  TicketSlash,
  TicketX,
  Tickets,
  TicketsPlane,
  Timer,
  TimerOff,
  TimerReset,
  ToggleLeft,
  ToggleRight,
  Toilet,
  Tornado,
  Torus,
  Touchpad,
  TouchpadOff,
  TowerControl,
  ToyBrick,
  Tractor,
  TrafficCone,
  TrainFront,
  TrainFrontTunnel,
  TrainTrack,
  TramFront,
  Transgender,
  Trash,
  Trash2,
  TreeDeciduous,
  TreePalm,
  TreePine,
  Trees,
  Trello,
  TrendingDown,
  TrendingUp,
  TrendingUpDown,
  Triangle,
  TriangleAlert,
  TriangleDashed,
  TriangleRight,
  Trophy,
  Truck,
  Turtle,
  Tv,
  TvMinimal,
  TvMinimalPlay,
  Twitch,
  Twitter,
  Type,
  TypeOutline,
  Umbrella,
  UmbrellaOff,
  Underline,
  Undo,
  Undo2,
  UndoDot,
  UnfoldHorizontal,
  UnfoldVertical,
  Ungroup,
  University,
  Unlink,
  Unlink2,
  Unplug,
  Upload,
  Usb,
  User,
  UserCheck,
  UserCog,
  UserMinus,
  UserPen,
  UserPlus,
  UserRound,
  UserRoundCheck,
  UserRoundCog,
  UserRoundMinus,
  UserRoundPen,
  UserRoundPlus,
  UserRoundSearch,
  UserRoundX,
  UserSearch,
  UserX,
  Users,
  UsersRound,
  Utensils,
  UtensilsCrossed,
  UtilityPole,
  Variable,
  Vault,
  Vegan,
  VenetianMask,
  Venus,
  VenusAndMars,
  Vibrate,
  VibrateOff,
  Video,
  VideoOff,
  Videotape,
  View,
  Voicemail,
  Volleyball,
  Volume,
  Volume1,
  Volume2,
  VolumeOff,
  VolumeX,
  Vote,
  Wallet,
  WalletCards,
  WalletMinimal,
  Wallpaper,
  Wand,
  WandSparkles,
  Warehouse,
  WashingMachine,
  Watch,
  Waves,
  WavesLadder,
  Waypoints,
  Webcam,
  Webhook,
  WebhookOff,
  Weight,
  Wheat,
  WheatOff,
  WholeWord,
  Wifi,
  WifiHigh,
  WifiLow,
  WifiOff,
  WifiZero,
  Wind,
  WindArrowDown,
  Wine,
  WineOff,
  Workflow,
  Worm,
  WrapText,
  Wrench,
  X,
  Youtube,
  Zap,
  ZapOff,
  ZoomIn,
  ZoomOut
};
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map