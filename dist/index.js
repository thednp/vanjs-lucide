/*!
* vanjs-lucide ESM v0.0.7 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import van from "vanjs-core";
//#region src/LucideIcon.ts
const svgNamespace = "http://www.w3.org/2000/svg";
const LucideIcon = (initialProps = {}, ...children) => {
	const { svg } = van.tags(svgNamespace);
	const props = Object.fromEntries(Object.entries(initialProps).filter(([_, val]) => val));
	return svg({
		xmlns: svgNamespace,
		viewBox: "0 0 24 24",
		fill: "none",
		width: 24,
		height: 24,
		stroke: "currentColor",
		"stroke-width": 2,
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		...props
	}, children);
};
//#endregion
//#region src/icons/AArrowDown.ts
const AArrowDown = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m14 12 4 4 4-4" }), path({ "d": "M18 16V7" }), path({ "d": "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" }), path({ "d": "M3.304 13h6.392" }));
};
//#endregion
//#region src/icons/AArrowUp.ts
const AArrowUp = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m14 11 4-4 4 4" }), path({ "d": "M18 16V7" }), path({ "d": "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" }), path({ "d": "M3.304 13h6.392" }));
};
//#endregion
//#region src/icons/ALargeSmall.ts
const ALargeSmall = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m15 16 2.536-7.328a1.02 1.02 1 0 1 1.928 0L22 16" }), path({ "d": "M15.697 14h5.606" }), path({ "d": "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" }), path({ "d": "M3.304 13h6.392" }));
};
//#endregion
//#region src/icons/Accessibility.ts
const Accessibility = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "16",
		cy: "4",
		"r": "1"
	}), path({ "d": "m18 19 1-7-6 1" }), path({ "d": "m5 8 3-3 5.5 3-2.36 3.5" }), path({ "d": "M4.24 14.5a5 5 0 0 0 6.88 6" }), path({ "d": "M13.76 17.5a5 5 0 0 0-6.88-6" }));
};
//#endregion
//#region src/icons/Activity.ts
const Activity = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" }));
};
//#endregion
//#region src/icons/AirVent.ts
const AirVent = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M18 17.5a2.5 2.5 0 1 1-4 2.03V12" }), path({ "d": "M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" }), path({ "d": "M6 8h12" }), path({ "d": "M6.6 15.572A2 2 0 1 0 10 17v-5" }));
};
//#endregion
//#region src/icons/Airplay.ts
const Airplay = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" }), path({ "d": "m12 15 5 6H7Z" }));
};
//#endregion
//#region src/icons/AlarmClockCheck.ts
const AlarmClockCheck = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "13",
		"r": "8"
	}), path({ "d": "M5 3 2 6" }), path({ "d": "m22 6-3-3" }), path({ "d": "M6.38 18.7 4 21" }), path({ "d": "M17.64 18.67 20 21" }), path({ "d": "m9 13 2 2 4-4" }));
};
//#endregion
//#region src/icons/AlarmClockMinus.ts
const AlarmClockMinus = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "13",
		"r": "8"
	}), path({ "d": "M5 3 2 6" }), path({ "d": "m22 6-3-3" }), path({ "d": "M6.38 18.7 4 21" }), path({ "d": "M17.64 18.67 20 21" }), path({ "d": "M9 13h6" }));
};
//#endregion
//#region src/icons/AlarmClockOff.ts
const AlarmClockOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6.87 6.87a8 8 0 1 0 11.26 11.26" }), path({ "d": "M19.9 14.25a8 8 0 0 0-9.15-9.15" }), path({ "d": "m22 6-3-3" }), path({ "d": "M6.26 18.67 4 21" }), path({ "d": "m2 2 20 20" }), path({ "d": "M4 4 2 6" }));
};
//#endregion
//#region src/icons/AlarmClockPlus.ts
const AlarmClockPlus = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "13",
		"r": "8"
	}), path({ "d": "M5 3 2 6" }), path({ "d": "m22 6-3-3" }), path({ "d": "M6.38 18.7 4 21" }), path({ "d": "M17.64 18.67 20 21" }), path({ "d": "M12 10v6" }), path({ "d": "M9 13h6" }));
};
//#endregion
//#region src/icons/AlarmClock.ts
const AlarmClock = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "13",
		"r": "8"
	}), path({ "d": "M12 9v4l2 2" }), path({ "d": "M5 3 2 6" }), path({ "d": "m22 6-3-3" }), path({ "d": "M6.38 18.7 4 21" }), path({ "d": "M17.64 18.67 20 21" }));
};
//#endregion
//#region src/icons/AlarmSmoke.ts
const AlarmSmoke = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 21c0-2.5 2-2.5 2-5" }), path({ "d": "M16 21c0-2.5 2-2.5 2-5" }), path({ "d": "m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8" }), path({ "d": "M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z" }), path({ "d": "M6 21c0-2.5 2-2.5 2-5" }));
};
//#endregion
//#region src/icons/Album.ts
const Album = (props = {}) => {
	const { rect, polyline } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2",
		ry: "2"
	}), polyline({ points: "11 3 11 11 14 8 17 11 17 3" }));
};
//#endregion
//#region src/icons/AlignCenterHorizontal.ts
const AlignCenterHorizontal = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 12h20" }), path({ "d": "M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4" }), path({ "d": "M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4" }), path({ "d": "M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1" }), path({ "d": "M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1" }));
};
//#endregion
//#region src/icons/AlignCenterVertical.ts
const AlignCenterVertical = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 2v20" }), path({ "d": "M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4" }), path({ "d": "M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4" }), path({ "d": "M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1" }), path({ "d": "M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1" }));
};
//#endregion
//#region src/icons/AlignEndHorizontal.ts
const AlignEndHorizontal = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "6",
		height: "16",
		"x": "4",
		"y": "2",
		rx: "2"
	}), rect({
		width: "6",
		height: "9",
		"x": "14",
		"y": "9",
		rx: "2"
	}), path({ "d": "M22 22H2" }));
};
//#endregion
//#region src/icons/AlignEndVertical.ts
const AlignEndVertical = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "16",
		height: "6",
		"x": "2",
		"y": "4",
		rx: "2"
	}), rect({
		width: "9",
		height: "6",
		"x": "9",
		"y": "14",
		rx: "2"
	}), path({ "d": "M22 22V2" }));
};
//#endregion
//#region src/icons/AlignHorizontalDistributeCenter.ts
const AlignHorizontalDistributeCenter = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "6",
		height: "14",
		"x": "4",
		"y": "5",
		rx: "2"
	}), rect({
		width: "6",
		height: "10",
		"x": "14",
		"y": "7",
		rx: "2"
	}), path({ "d": "M17 22v-5" }), path({ "d": "M17 7V2" }), path({ "d": "M7 22v-3" }), path({ "d": "M7 5V2" }));
};
//#endregion
//#region src/icons/AlignHorizontalDistributeEnd.ts
const AlignHorizontalDistributeEnd = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "6",
		height: "14",
		"x": "4",
		"y": "5",
		rx: "2"
	}), rect({
		width: "6",
		height: "10",
		"x": "14",
		"y": "7",
		rx: "2"
	}), path({ "d": "M10 2v20" }), path({ "d": "M20 2v20" }));
};
//#endregion
//#region src/icons/AlignHorizontalDistributeStart.ts
const AlignHorizontalDistributeStart = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "6",
		height: "14",
		"x": "4",
		"y": "5",
		rx: "2"
	}), rect({
		width: "6",
		height: "10",
		"x": "14",
		"y": "7",
		rx: "2"
	}), path({ "d": "M4 2v20" }), path({ "d": "M14 2v20" }));
};
//#endregion
//#region src/icons/AlignHorizontalJustifyCenter.ts
const AlignHorizontalJustifyCenter = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "6",
		height: "14",
		"x": "2",
		"y": "5",
		rx: "2"
	}), rect({
		width: "6",
		height: "10",
		"x": "16",
		"y": "7",
		rx: "2"
	}), path({ "d": "M12 2v20" }));
};
//#endregion
//#region src/icons/AlignHorizontalJustifyEnd.ts
const AlignHorizontalJustifyEnd = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "6",
		height: "14",
		"x": "2",
		"y": "5",
		rx: "2"
	}), rect({
		width: "6",
		height: "10",
		"x": "12",
		"y": "7",
		rx: "2"
	}), path({ "d": "M22 2v20" }));
};
//#endregion
//#region src/icons/AlignHorizontalJustifyStart.ts
const AlignHorizontalJustifyStart = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "6",
		height: "14",
		"x": "6",
		"y": "5",
		rx: "2"
	}), rect({
		width: "6",
		height: "10",
		"x": "16",
		"y": "7",
		rx: "2"
	}), path({ "d": "M2 2v20" }));
};
//#endregion
//#region src/icons/AlignHorizontalSpaceAround.ts
const AlignHorizontalSpaceAround = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "6",
		height: "10",
		"x": "9",
		"y": "7",
		rx: "2"
	}), path({ "d": "M4 22V2" }), path({ "d": "M20 22V2" }));
};
//#endregion
//#region src/icons/AlignHorizontalSpaceBetween.ts
const AlignHorizontalSpaceBetween = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "6",
		height: "14",
		"x": "3",
		"y": "5",
		rx: "2"
	}), rect({
		width: "6",
		height: "10",
		"x": "15",
		"y": "7",
		rx: "2"
	}), path({ "d": "M3 2v20" }), path({ "d": "M21 2v20" }));
};
//#endregion
//#region src/icons/AlignStartHorizontal.ts
const AlignStartHorizontal = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "6",
		height: "16",
		"x": "4",
		"y": "6",
		rx: "2"
	}), rect({
		width: "6",
		height: "9",
		"x": "14",
		"y": "6",
		rx: "2"
	}), path({ "d": "M22 2H2" }));
};
//#endregion
//#region src/icons/AlignStartVertical.ts
const AlignStartVertical = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "9",
		height: "6",
		"x": "6",
		"y": "14",
		rx: "2"
	}), rect({
		width: "16",
		height: "6",
		"x": "6",
		"y": "4",
		rx: "2"
	}), path({ "d": "M2 2v20" }));
};
//#endregion
//#region src/icons/AlignVerticalDistributeCenter.ts
const AlignVerticalDistributeCenter = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M22 17h-3" }), path({ "d": "M22 7h-5" }), path({ "d": "M5 17H2" }), path({ "d": "M7 7H2" }), rect({
		"x": "5",
		"y": "14",
		width: "14",
		height: "6",
		rx: "2"
	}), rect({
		"x": "7",
		"y": "4",
		width: "10",
		height: "6",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/AlignVerticalDistributeEnd.ts
const AlignVerticalDistributeEnd = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "14",
		height: "6",
		"x": "5",
		"y": "14",
		rx: "2"
	}), rect({
		width: "10",
		height: "6",
		"x": "7",
		"y": "4",
		rx: "2"
	}), path({ "d": "M2 20h20" }), path({ "d": "M2 10h20" }));
};
//#endregion
//#region src/icons/AlignVerticalDistributeStart.ts
const AlignVerticalDistributeStart = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "14",
		height: "6",
		"x": "5",
		"y": "14",
		rx: "2"
	}), rect({
		width: "10",
		height: "6",
		"x": "7",
		"y": "4",
		rx: "2"
	}), path({ "d": "M2 14h20" }), path({ "d": "M2 4h20" }));
};
//#endregion
//#region src/icons/AlignVerticalJustifyCenter.ts
const AlignVerticalJustifyCenter = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "14",
		height: "6",
		"x": "5",
		"y": "16",
		rx: "2"
	}), rect({
		width: "10",
		height: "6",
		"x": "7",
		"y": "2",
		rx: "2"
	}), path({ "d": "M2 12h20" }));
};
//#endregion
//#region src/icons/AlignVerticalJustifyEnd.ts
const AlignVerticalJustifyEnd = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "14",
		height: "6",
		"x": "5",
		"y": "12",
		rx: "2"
	}), rect({
		width: "10",
		height: "6",
		"x": "7",
		"y": "2",
		rx: "2"
	}), path({ "d": "M2 22h20" }));
};
//#endregion
//#region src/icons/AlignVerticalJustifyStart.ts
const AlignVerticalJustifyStart = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "14",
		height: "6",
		"x": "5",
		"y": "16",
		rx: "2"
	}), rect({
		width: "10",
		height: "6",
		"x": "7",
		"y": "6",
		rx: "2"
	}), path({ "d": "M2 2h20" }));
};
//#endregion
//#region src/icons/AlignVerticalSpaceAround.ts
const AlignVerticalSpaceAround = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "10",
		height: "6",
		"x": "7",
		"y": "9",
		rx: "2"
	}), path({ "d": "M22 20H2" }), path({ "d": "M22 4H2" }));
};
//#endregion
//#region src/icons/AlignVerticalSpaceBetween.ts
const AlignVerticalSpaceBetween = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "14",
		height: "6",
		"x": "5",
		"y": "15",
		rx: "2"
	}), rect({
		width: "10",
		height: "6",
		"x": "7",
		"y": "3",
		rx: "2"
	}), path({ "d": "M2 21h20" }), path({ "d": "M2 3h20" }));
};
//#endregion
//#region src/icons/Ambulance.ts
const Ambulance = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 10H6" }), path({ "d": "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" }), path({ "d": "M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14" }), path({ "d": "M8 8v4" }), path({ "d": "M9 18h6" }), circle({
		cx: "17",
		cy: "18",
		"r": "2"
	}), circle({
		cx: "7",
		cy: "18",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/Ampersand.ts
const Ampersand = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 12h3" }), path({ "d": "M17.5 12a8 8 0 0 1-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13" }));
};
//#endregion
//#region src/icons/Ampersands.ts
const Ampersands = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5" }), path({ "d": "M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5" }));
};
//#endregion
//#region src/icons/Amphora.ts
const Amphora = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8" }), path({ "d": "M10 5H8a2 2 0 0 0 0 4h.68" }), path({ "d": "M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8" }), path({ "d": "M14 5h2a2 2 0 0 1 0 4h-.68" }), path({ "d": "M18 22H6" }), path({ "d": "M9 2h6" }));
};
//#endregion
//#region src/icons/Anchor.ts
const Anchor = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 6v16" }), path({ "d": "m19 13 2-1a9 9 0 0 1-18 0l2 1" }), path({ "d": "M9 11h6" }), circle({
		cx: "12",
		cy: "4",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/Angry.ts
const Angry = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M16 16s-1.5-2-4-2-4 2-4 2" }), path({ "d": "M7.5 8 10 9" }), path({ "d": "m14 9 2.5-1" }), path({ "d": "M9 10h.01" }), path({ "d": "M15 10h.01" }));
};
//#endregion
//#region src/icons/Annoyed.ts
const Annoyed = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M8 15h8" }), path({ "d": "M8 9h2" }), path({ "d": "M14 9h2" }));
};
//#endregion
//#region src/icons/Antenna.ts
const Antenna = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 12 7 2" }), path({ "d": "m7 12 5-10" }), path({ "d": "m12 12 5-10" }), path({ "d": "m17 12 5-10" }), path({ "d": "M4.5 7h15" }), path({ "d": "M12 16v6" }));
};
//#endregion
//#region src/icons/Anvil.ts
const Anvil = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4" }), path({ "d": "M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z" }), path({ "d": "M9 12v5" }), path({ "d": "M15 12v5" }), path({ "d": "M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1" }));
};
//#endregion
//#region src/icons/Aperture.ts
const Aperture = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "m14.31 8 5.74 9.94" }), path({ "d": "M9.69 8h11.48" }), path({ "d": "m7.38 12 5.74-9.94" }), path({ "d": "M9.69 16 3.95 6.06" }), path({ "d": "M14.31 16H2.83" }), path({ "d": "m16.62 12-5.74 9.94" }));
};
//#endregion
//#region src/icons/AppWindowMac.ts
const AppWindowMac = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "20",
		height: "16",
		"x": "2",
		"y": "4",
		rx: "2"
	}), path({ "d": "M6 8h.01" }), path({ "d": "M10 8h.01" }), path({ "d": "M14 8h.01" }));
};
//#endregion
//#region src/icons/AppWindow.ts
const AppWindow = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		"x": "2",
		"y": "4",
		width: "20",
		height: "16",
		rx: "2"
	}), path({ "d": "M10 4v4" }), path({ "d": "M2 8h20" }), path({ "d": "M6 4v4" }));
};
//#endregion
//#region src/icons/Apple.ts
const Apple = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 6.528V3a1 1 0 0 1 1-1h0" }), path({ "d": "M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21" }));
};
//#endregion
//#region src/icons/ArchiveRestore.ts
const ArchiveRestore = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "20",
		height: "5",
		"x": "2",
		"y": "3",
		rx: "1"
	}), path({ "d": "M4 8v11a2 2 0 0 0 2 2h2" }), path({ "d": "M20 8v11a2 2 0 0 1-2 2h-2" }), path({ "d": "m9 15 3-3 3 3" }), path({ "d": "M12 12v9" }));
};
//#endregion
//#region src/icons/ArchiveX.ts
const ArchiveX = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "20",
		height: "5",
		"x": "2",
		"y": "3",
		rx: "1"
	}), path({ "d": "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" }), path({ "d": "m9.5 17 5-5" }), path({ "d": "m9.5 12 5 5" }));
};
//#endregion
//#region src/icons/Archive.ts
const Archive = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "20",
		height: "5",
		"x": "2",
		"y": "3",
		rx: "1"
	}), path({ "d": "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" }), path({ "d": "M10 12h4" }));
};
//#endregion
//#region src/icons/Armchair.ts
const Armchair = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" }), path({ "d": "M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" }), path({ "d": "M5 18v2" }), path({ "d": "M19 18v2" }));
};
//#endregion
//#region src/icons/ArrowBigDownDash.ts
const ArrowBigDownDash = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M14 8a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h3.293a.707.707 0 0 1 .5 1.207l-6.939 6.939a1.207 1.207 0 0 1-1.708 0l-6.94-6.94a.707.707 0 0 1 .5-1.206H8a1 1 0 0 0 1-1V9a1 1 0 0 1 1-1z" }), path({ "d": "M9 4h6" }));
};
//#endregion
//#region src/icons/ArrowBigDown.ts
const ArrowBigDown = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M9 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 0 1 1h3.293a.707.707 0 0 1 .5 1.207l-7.086 7.086a1 1 0 0 1-1.414 0l-7.086-7.086a.707.707 0 0 1 .5-1.207H8a1 1 0 0 0 1-1z" }));
};
//#endregion
//#region src/icons/ArrowBigLeftDash.ts
const ArrowBigLeftDash = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13 9a1 1 0 0 1-1-1V4.707a.707.707 0 0 0-1.207-.5l-6.94 6.94a1.207 1.207 0 0 0 0 1.707l6.94 6.94a.707.707 0 0 0 1.207-.5V16a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z" }), path({ "d": "M20 9v6" }));
};
//#endregion
//#region src/icons/ArrowBigLeft.ts
const ArrowBigLeft = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10.793 19.793a.707.707 0 0 0 1.207-.5V16a1 1 0 0 1 1-1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-6a1 1 0 0 1-1-1V4.707a.707.707 0 0 0-1.207-.5l-6.94 6.94a1.207 1.207 0 0 0 0 1.707z" }));
};
//#endregion
//#region src/icons/ArrowBigRightDash.ts
const ArrowBigRightDash = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 9a1 1 0 0 0 1-1V4.707a.707.707 0 0 1 1.207-.5l6.94 6.94a1.207 1.207 0 0 1 0 1.707l-6.94 6.94a.707.707 0 0 1-1.207-.5V16a1 1 0 0 0-1-1H9a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z" }), path({ "d": "M4 9v6" }));
};
//#endregion
//#region src/icons/ArrowBigRight.ts
const ArrowBigRight = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13.207 19.793a.707.707 0 0 1-1.207-.5V16a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h6a1 1 0 0 0 1-1V4.707a.707.707 0 0 1 1.207-.5l6.94 6.94a1.207 1.207 0 0 1 0 1.707z" }));
};
//#endregion
//#region src/icons/ArrowBigUpDash.ts
const ArrowBigUpDash = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M14 16a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1h3.293a.707.707 0 0 0 .5-1.207l-6.939-6.939a1.207 1.207 0 0 0-1.708 0l-6.94 6.94a.707.707 0 0 0 .5 1.206H8a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1z" }), path({ "d": "M9 20h6" }));
};
//#endregion
//#region src/icons/ArrowBigUp.ts
const ArrowBigUp = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M9 19a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-6a1 1 0 0 1 1-1h3.293a.707.707 0 0 0 .5-1.207l-7.086-7.086a1 1 0 0 0-1.414 0l-7.086 7.086a.707.707 0 0 0 .5 1.207H8a1 1 0 0 1 1 1z" }));
};
//#endregion
//#region src/icons/ArrowDown01.ts
const ArrowDown01 = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m3 16 4 4 4-4" }), path({ "d": "M7 20V4" }), rect({
		"x": "15",
		"y": "4",
		width: "4",
		height: "6",
		ry: "2"
	}), path({ "d": "M17 20v-6h-2" }), path({ "d": "M15 20h4" }));
};
//#endregion
//#region src/icons/ArrowDown10.ts
const ArrowDown10 = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m3 16 4 4 4-4" }), path({ "d": "M7 20V4" }), path({ "d": "M17 10V4h-2" }), path({ "d": "M15 10h4" }), rect({
		"x": "15",
		"y": "14",
		width: "4",
		height: "6",
		ry: "2"
	}));
};
//#endregion
//#region src/icons/ArrowDownAZ.ts
const ArrowDownAZ = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m3 16 4 4 4-4" }), path({ "d": "M7 20V4" }), path({ "d": "M20 8h-5" }), path({ "d": "M15 10V6.5a2.5 2.5 0 0 1 5 0V10" }), path({ "d": "M15 14h5l-5 6h5" }));
};
//#endregion
//#region src/icons/ArrowDownFromLine.ts
const ArrowDownFromLine = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M19 3H5" }), path({ "d": "M12 21V7" }), path({ "d": "m6 15 6 6 6-6" }));
};
//#endregion
//#region src/icons/ArrowDownLeft.ts
const ArrowDownLeft = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M17 7 7 17" }), path({ "d": "M17 17H7V7" }));
};
//#endregion
//#region src/icons/ArrowDownNarrowWide.ts
const ArrowDownNarrowWide = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m3 16 4 4 4-4" }), path({ "d": "M7 20V4" }), path({ "d": "M11 4h4" }), path({ "d": "M11 8h7" }), path({ "d": "M11 12h10" }));
};
//#endregion
//#region src/icons/ArrowDownRight.ts
const ArrowDownRight = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m7 7 10 10" }), path({ "d": "M17 7v10H7" }));
};
//#endregion
//#region src/icons/ArrowDownToDot.ts
const ArrowDownToDot = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 2v14" }), path({ "d": "m19 9-7 7-7-7" }), circle({
		cx: "12",
		cy: "21",
		"r": "1"
	}));
};
//#endregion
//#region src/icons/ArrowDownToLine.ts
const ArrowDownToLine = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 17V3" }), path({ "d": "m6 11 6 6 6-6" }), path({ "d": "M19 21H5" }));
};
//#endregion
//#region src/icons/ArrowDownUp.ts
const ArrowDownUp = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m3 16 4 4 4-4" }), path({ "d": "M7 20V4" }), path({ "d": "m21 8-4-4-4 4" }), path({ "d": "M17 4v16" }));
};
//#endregion
//#region src/icons/ArrowDownWideNarrow.ts
const ArrowDownWideNarrow = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m3 16 4 4 4-4" }), path({ "d": "M7 20V4" }), path({ "d": "M11 4h10" }), path({ "d": "M11 8h7" }), path({ "d": "M11 12h4" }));
};
//#endregion
//#region src/icons/ArrowDownZA.ts
const ArrowDownZA = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m3 16 4 4 4-4" }), path({ "d": "M7 4v16" }), path({ "d": "M15 4h5l-5 6h5" }), path({ "d": "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" }), path({ "d": "M20 18h-5" }));
};
//#endregion
//#region src/icons/ArrowDown.ts
const ArrowDown = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 5v14" }), path({ "d": "m19 12-7 7-7-7" }));
};
//#endregion
//#region src/icons/ArrowLeftFromLine.ts
const ArrowLeftFromLine = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m9 6-6 6 6 6" }), path({ "d": "M3 12h14" }), path({ "d": "M21 19V5" }));
};
//#endregion
//#region src/icons/ArrowLeftRight.ts
const ArrowLeftRight = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M8 3 4 7l4 4" }), path({ "d": "M4 7h16" }), path({ "d": "m16 21 4-4-4-4" }), path({ "d": "M20 17H4" }));
};
//#endregion
//#region src/icons/ArrowLeftToLine.ts
const ArrowLeftToLine = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 19V5" }), path({ "d": "m13 6-6 6 6 6" }), path({ "d": "M7 12h14" }));
};
//#endregion
//#region src/icons/ArrowLeft.ts
const ArrowLeft = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m12 19-7-7 7-7" }), path({ "d": "M19 12H5" }));
};
//#endregion
//#region src/icons/ArrowRightFromLine.ts
const ArrowRightFromLine = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 5v14" }), path({ "d": "M21 12H7" }), path({ "d": "m15 18 6-6-6-6" }));
};
//#endregion
//#region src/icons/ArrowRightLeft.ts
const ArrowRightLeft = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m16 3 4 4-4 4" }), path({ "d": "M20 7H4" }), path({ "d": "m8 21-4-4 4-4" }), path({ "d": "M4 17h16" }));
};
//#endregion
//#region src/icons/ArrowRightToLine.ts
const ArrowRightToLine = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M17 12H3" }), path({ "d": "m11 18 6-6-6-6" }), path({ "d": "M21 5v14" }));
};
//#endregion
//#region src/icons/ArrowRight.ts
const ArrowRight = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M5 12h14" }), path({ "d": "m12 5 7 7-7 7" }));
};
//#endregion
//#region src/icons/ArrowUp01.ts
const ArrowUp01 = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m3 8 4-4 4 4" }), path({ "d": "M7 4v16" }), rect({
		"x": "15",
		"y": "4",
		width: "4",
		height: "6",
		ry: "2"
	}), path({ "d": "M17 20v-6h-2" }), path({ "d": "M15 20h4" }));
};
//#endregion
//#region src/icons/ArrowUp10.ts
const ArrowUp10 = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m3 8 4-4 4 4" }), path({ "d": "M7 4v16" }), path({ "d": "M17 10V4h-2" }), path({ "d": "M15 10h4" }), rect({
		"x": "15",
		"y": "14",
		width: "4",
		height: "6",
		ry: "2"
	}));
};
//#endregion
//#region src/icons/ArrowUpAZ.ts
const ArrowUpAZ = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m3 8 4-4 4 4" }), path({ "d": "M7 4v16" }), path({ "d": "M20 8h-5" }), path({ "d": "M15 10V6.5a2.5 2.5 0 0 1 5 0V10" }), path({ "d": "M15 14h5l-5 6h5" }));
};
//#endregion
//#region src/icons/ArrowUpDown.ts
const ArrowUpDown = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m21 16-4 4-4-4" }), path({ "d": "M17 20V4" }), path({ "d": "m3 8 4-4 4 4" }), path({ "d": "M7 4v16" }));
};
//#endregion
//#region src/icons/ArrowUpFromDot.ts
const ArrowUpFromDot = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m5 9 7-7 7 7" }), path({ "d": "M12 16V2" }), circle({
		cx: "12",
		cy: "21",
		"r": "1"
	}));
};
//#endregion
//#region src/icons/ArrowUpFromLine.ts
const ArrowUpFromLine = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m18 9-6-6-6 6" }), path({ "d": "M12 3v14" }), path({ "d": "M5 21h14" }));
};
//#endregion
//#region src/icons/ArrowUpLeft.ts
const ArrowUpLeft = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M7 17V7h10" }), path({ "d": "M17 17 7 7" }));
};
//#endregion
//#region src/icons/ArrowUpNarrowWide.ts
const ArrowUpNarrowWide = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m3 8 4-4 4 4" }), path({ "d": "M7 4v16" }), path({ "d": "M11 12h4" }), path({ "d": "M11 16h7" }), path({ "d": "M11 20h10" }));
};
//#endregion
//#region src/icons/ArrowUpRight.ts
const ArrowUpRight = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M7 7h10v10" }), path({ "d": "M7 17 17 7" }));
};
//#endregion
//#region src/icons/ArrowUpToLine.ts
const ArrowUpToLine = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M5 3h14" }), path({ "d": "m18 13-6-6-6 6" }), path({ "d": "M12 7v14" }));
};
//#endregion
//#region src/icons/ArrowUpWideNarrow.ts
const ArrowUpWideNarrow = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m3 8 4-4 4 4" }), path({ "d": "M7 4v16" }), path({ "d": "M11 12h10" }), path({ "d": "M11 16h7" }), path({ "d": "M11 20h4" }));
};
//#endregion
//#region src/icons/ArrowUpZA.ts
const ArrowUpZA = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m3 8 4-4 4 4" }), path({ "d": "M7 4v16" }), path({ "d": "M15 4h5l-5 6h5" }), path({ "d": "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" }), path({ "d": "M20 18h-5" }));
};
//#endregion
//#region src/icons/ArrowUp.ts
const ArrowUp = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m5 12 7-7 7 7" }), path({ "d": "M12 19V5" }));
};
//#endregion
//#region src/icons/ArrowsUpFromLine.ts
const ArrowsUpFromLine = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m4 6 3-3 3 3" }), path({ "d": "M7 17V3" }), path({ "d": "m14 6 3-3 3 3" }), path({ "d": "M17 17V3" }), path({ "d": "M4 21h16" }));
};
//#endregion
//#region src/icons/Asterisk.ts
const Asterisk = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 6v12" }), path({ "d": "M17.196 9 6.804 15" }), path({ "d": "m6.804 9 10.392 6" }));
};
//#endregion
//#region src/icons/AtSign.ts
const AtSign = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "4"
	}), path({ "d": "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" }));
};
//#endregion
//#region src/icons/Atom.ts
const Atom = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "1"
	}), path({ "d": "M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" }), path({ "d": "M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z" }));
};
//#endregion
//#region src/icons/AudioLines.ts
const AudioLines = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 10v3" }), path({ "d": "M6 6v11" }), path({ "d": "M10 3v18" }), path({ "d": "M14 8v7" }), path({ "d": "M18 5v13" }), path({ "d": "M22 10v3" }));
};
//#endregion
//#region src/icons/AudioWaveform.ts
const AudioWaveform = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2" }));
};
//#endregion
//#region src/icons/Award.ts
const Award = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" }), circle({
		cx: "12",
		cy: "8",
		"r": "6"
	}));
};
//#endregion
//#region src/icons/Axe.ts
const Axe = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m14 12-8.381 8.38a1 1 0 0 1-3.001-3L11 9" }), path({ "d": "M15 15.5a.5.5 0 0 0 .5.5A6.5 6.5 0 0 0 22 9.5a.5.5 0 0 0-.5-.5h-1.672a2 2 0 0 1-1.414-.586l-5.062-5.062a1.205 1.205 0 0 0-1.704 0L9.352 5.648a1.205 1.205 0 0 0 0 1.704l5.062 5.062A2 2 0 0 1 15 13.828z" }));
};
//#endregion
//#region src/icons/Axis3d.ts
const Axis3d = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13.5 10.5 15 9" }), path({ "d": "M4 4v15a1 1 0 0 0 1 1h15" }), path({ "d": "M4.293 19.707 6 18" }), path({ "d": "m9 15 1.5-1.5" }));
};
//#endregion
//#region src/icons/Baby.ts
const Baby = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" }), path({ "d": "M15 12h.01" }), path({ "d": "M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" }), path({ "d": "M9 12h.01" }));
};
//#endregion
//#region src/icons/Backpack.ts
const Backpack = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" }), path({ "d": "M8 10h8" }), path({ "d": "M8 18h8" }), path({ "d": "M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6" }), path({ "d": "M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" }));
};
//#endregion
//#region src/icons/BadgeAlert.ts
const BadgeAlert = (props = {}) => {
	const { path, line } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }), line({
		x1: "12",
		x2: "12",
		y1: "8",
		y2: "12"
	}), line({
		x1: "12",
		x2: "12.01",
		y1: "16",
		y2: "16"
	}));
};
//#endregion
//#region src/icons/BadgeCent.ts
const BadgeCent = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }), path({ "d": "M12 7v10" }), path({ "d": "M15.4 10a4 4 0 1 0 0 4" }));
};
//#endregion
//#region src/icons/BadgeCheck.ts
const BadgeCheck = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }), path({ "d": "m9 12 2 2 4-4" }));
};
//#endregion
//#region src/icons/BadgeDollarSign.ts
const BadgeDollarSign = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }), path({ "d": "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" }), path({ "d": "M12 18V6" }));
};
//#endregion
//#region src/icons/BadgeEuro.ts
const BadgeEuro = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }), path({ "d": "M7 12h5" }), path({ "d": "M15 9.4a4 4 0 1 0 0 5.2" }));
};
//#endregion
//#region src/icons/BadgeIndianRupee.ts
const BadgeIndianRupee = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }), path({ "d": "M8 8h8" }), path({ "d": "M8 12h8" }), path({ "d": "m13 17-5-1h1a4 4 0 0 0 0-8" }));
};
//#endregion
//#region src/icons/BadgeInfo.ts
const BadgeInfo = (props = {}) => {
	const { path, line } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }), line({
		x1: "12",
		x2: "12",
		y1: "16",
		y2: "12"
	}), line({
		x1: "12",
		x2: "12.01",
		y1: "8",
		y2: "8"
	}));
};
//#endregion
//#region src/icons/BadgeJapaneseYen.ts
const BadgeJapaneseYen = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }), path({ "d": "m9 8 3 3v7" }), path({ "d": "m12 11 3-3" }), path({ "d": "M9 12h6" }), path({ "d": "M9 16h6" }));
};
//#endregion
//#region src/icons/BadgeMinus.ts
const BadgeMinus = (props = {}) => {
	const { path, line } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }), line({
		x1: "8",
		x2: "16",
		y1: "12",
		y2: "12"
	}));
};
//#endregion
//#region src/icons/BadgePercent.ts
const BadgePercent = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }), path({ "d": "m15 9-6 6" }), path({ "d": "M9 9h.01" }), path({ "d": "M15 15h.01" }));
};
//#endregion
//#region src/icons/BadgePlus.ts
const BadgePlus = (props = {}) => {
	const { path, line } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }), line({
		x1: "12",
		x2: "12",
		y1: "8",
		y2: "16"
	}), line({
		x1: "8",
		x2: "16",
		y1: "12",
		y2: "12"
	}));
};
//#endregion
//#region src/icons/BadgePoundSterling.ts
const BadgePoundSterling = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }), path({ "d": "M8 12h4" }), path({ "d": "M10 16V9.5a2.5 2.5 0 0 1 5 0" }), path({ "d": "M8 16h7" }));
};
//#endregion
//#region src/icons/BadgeQuestionMark.ts
const BadgeQuestionMark = (props = {}) => {
	const { path, line } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }), path({ "d": "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }), line({
		x1: "12",
		x2: "12.01",
		y1: "17",
		y2: "17"
	}));
};
//#endregion
//#region src/icons/BadgeRussianRuble.ts
const BadgeRussianRuble = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }), path({ "d": "M9 16h5" }), path({ "d": "M9 12h5a2 2 0 1 0 0-4h-3v9" }));
};
//#endregion
//#region src/icons/BadgeSwissFranc.ts
const BadgeSwissFranc = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }), path({ "d": "M11 17V8h4" }), path({ "d": "M11 12h3" }), path({ "d": "M9 16h4" }));
};
//#endregion
//#region src/icons/BadgeTurkishLira.ts
const BadgeTurkishLira = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 7v10a5 5 0 0 0 5-5" }), path({ "d": "m15 8-6 3" }), path({ "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76" }));
};
//#endregion
//#region src/icons/BadgeX.ts
const BadgeX = (props = {}) => {
	const { path, line } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }), line({
		x1: "15",
		x2: "9",
		y1: "9",
		y2: "15"
	}), line({
		x1: "9",
		x2: "15",
		y1: "9",
		y2: "15"
	}));
};
//#endregion
//#region src/icons/Badge.ts
const Badge = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" }));
};
//#endregion
//#region src/icons/BaggageClaim.ts
const BaggageClaim = (props = {}) => {
	const { path, rect, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2" }), path({ "d": "M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10" }), rect({
		width: "13",
		height: "8",
		"x": "8",
		"y": "6",
		rx: "1"
	}), circle({
		cx: "18",
		cy: "20",
		"r": "2"
	}), circle({
		cx: "9",
		cy: "20",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/Balloon.ts
const Balloon = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 16v1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v1" }), path({ "d": "M12 6a2 2 0 0 1 2 2" }), path({ "d": "M18 8c0 4-3.5 8-6 8s-6-4-6-8a6 6 0 0 1 12 0" }));
};
//#endregion
//#region src/icons/Ban.ts
const Ban = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M4.929 4.929 19.07 19.071" }));
};
//#endregion
//#region src/icons/Banana.ts
const Banana = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5" }), path({ "d": "M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z" }));
};
//#endregion
//#region src/icons/Bandage.ts
const Bandage = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 10.01h.01" }), path({ "d": "M10 14.01h.01" }), path({ "d": "M14 10.01h.01" }), path({ "d": "M14 14.01h.01" }), path({ "d": "M18 6v12" }), path({ "d": "M6 6v12" }), rect({
		"x": "2",
		"y": "6",
		width: "20",
		height: "12",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/BanknoteArrowDown.ts
const BanknoteArrowDown = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" }), path({ "d": "m16 19 3 3 3-3" }), path({ "d": "M18 12h.01" }), path({ "d": "M19 16v6" }), path({ "d": "M6 12h.01" }), circle({
		cx: "12",
		cy: "12",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/BanknoteArrowUp.ts
const BanknoteArrowUp = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" }), path({ "d": "M18 12h.01" }), path({ "d": "M19 22v-6" }), path({ "d": "m22 19-3-3-3 3" }), path({ "d": "M6 12h.01" }), circle({
		cx: "12",
		cy: "12",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/BanknoteX.ts
const BanknoteX = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" }), path({ "d": "m17 17 5 5" }), path({ "d": "M18 12h.01" }), path({ "d": "m22 17-5 5" }), path({ "d": "M6 12h.01" }), circle({
		cx: "12",
		cy: "12",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/Banknote.ts
const Banknote = (props = {}) => {
	const { rect, circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "20",
		height: "12",
		"x": "2",
		"y": "6",
		rx: "2"
	}), circle({
		cx: "12",
		cy: "12",
		"r": "2"
	}), path({ "d": "M6 12h.01M18 12h.01" }));
};
//#endregion
//#region src/icons/Barcode.ts
const Barcode = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 5v14" }), path({ "d": "M8 5v14" }), path({ "d": "M12 5v14" }), path({ "d": "M17 5v14" }), path({ "d": "M21 5v14" }));
};
//#endregion
//#region src/icons/Barrel.ts
const Barrel = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 3a41 41 0 0 0 0 18" }), path({ "d": "M14 3a41 41 0 0 1 0 18" }), path({ "d": "M17 3a2 2 0 0 1 1.68.92 15.25 15.25 0 0 1 0 16.16A2 2 0 0 1 17 21H7a2 2 0 0 1-1.68-.92 15.25 15.25 0 0 1 0-16.16A2 2 0 0 1 7 3z" }), path({ "d": "M3.84 17h16.32" }), path({ "d": "M3.84 7h16.32" }));
};
//#endregion
//#region src/icons/Baseline.ts
const Baseline = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 20h16" }), path({ "d": "m6 16 6-12 6 12" }), path({ "d": "M8 12h8" }));
};
//#endregion
//#region src/icons/Bath.ts
const Bath = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 4 8 6" }), path({ "d": "M17 19v2" }), path({ "d": "M2 12h20" }), path({ "d": "M7 19v2" }), path({ "d": "M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" }));
};
//#endregion
//#region src/icons/BatteryCharging.ts
const BatteryCharging = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m11 7-3 5h4l-3 5" }), path({ "d": "M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935" }), path({ "d": "M22 14v-4" }), path({ "d": "M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936" }));
};
//#endregion
//#region src/icons/BatteryFull.ts
const BatteryFull = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 10v4" }), path({ "d": "M14 10v4" }), path({ "d": "M22 14v-4" }), path({ "d": "M6 10v4" }), rect({
		"x": "2",
		"y": "6",
		width: "16",
		height: "12",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/BatteryLow.ts
const BatteryLow = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M22 14v-4" }), path({ "d": "M6 14v-4" }), rect({
		"x": "2",
		"y": "6",
		width: "16",
		height: "12",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/BatteryMedium.ts
const BatteryMedium = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 14v-4" }), path({ "d": "M22 14v-4" }), path({ "d": "M6 14v-4" }), rect({
		"x": "2",
		"y": "6",
		width: "16",
		height: "12",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/BatteryPlus.ts
const BatteryPlus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 9v6" }), path({ "d": "M12.543 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.605" }), path({ "d": "M22 14v-4" }), path({ "d": "M7 12h6" }), path({ "d": "M7.606 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.606" }));
};
//#endregion
//#region src/icons/BatteryWarning.ts
const BatteryWarning = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 17h.01" }), path({ "d": "M10 7v6" }), path({ "d": "M14 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2" }), path({ "d": "M22 14v-4" }), path({ "d": "M6 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" }));
};
//#endregion
//#region src/icons/Battery.ts
const Battery = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M 22 14 L 22 10" }), rect({
		"x": "2",
		"y": "6",
		width: "16",
		height: "12",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/Beaker.ts
const Beaker = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4.5 3h15" }), path({ "d": "M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" }), path({ "d": "M6 14h12" }));
};
//#endregion
//#region src/icons/BeanOff.ts
const BeanOff = (props = {}) => {
	const { path, line } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1" }), path({ "d": "M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66" }), path({ "d": "M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04" }), line({
		x1: "2",
		x2: "22",
		y1: "2",
		y2: "22"
	}));
};
//#endregion
//#region src/icons/Bean.ts
const Bean = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z" }), path({ "d": "M5.341 10.62a4 4 0 1 0 5.279-5.28" }));
};
//#endregion
//#region src/icons/BedDouble.ts
const BedDouble = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" }), path({ "d": "M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" }), path({ "d": "M12 4v6" }), path({ "d": "M2 18h20" }));
};
//#endregion
//#region src/icons/BedSingle.ts
const BedSingle = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8" }), path({ "d": "M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" }), path({ "d": "M3 18h18" }));
};
//#endregion
//#region src/icons/Bed.ts
const Bed = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 4v16" }), path({ "d": "M2 8h18a2 2 0 0 1 2 2v10" }), path({ "d": "M2 17h20" }), path({ "d": "M6 8v9" }));
};
//#endregion
//#region src/icons/BeefOff.ts
const BeefOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11.771 6.109a2.5 2.5 0 0 1 3.12 3.12" }), path({ "d": "M17.852 12.185a6.5 6.5 0 0 0-9.035-9.04" }), path({ "d": "M18.013 18.013C15.029 20.349 10.831 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5" }), path({ "d": "m18.5 6 2.19 4.5a6.48 6.48 0 0 1-.139 4.393" }), path({ "d": "m2 2 20 20" }), path({ "d": "M6.355 6.37a7 7 0 0 0-.075.23c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c3.356 0 6.993-1.267 9.85-3.151" }));
};
//#endregion
//#region src/icons/Beef.ts
const Beef = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16.4 13.7A6.5 6.5 0 1 0 6.28 6.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3" }), path({ "d": "m18.5 6 2.19 4.5a6.48 6.48 0 0 1-2.29 7.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5" }), circle({
		cx: "12.5",
		cy: "8.5",
		"r": "2.5"
	}));
};
//#endregion
//#region src/icons/BeerOff.ts
const BeerOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13 13v5" }), path({ "d": "M17 11.47V8" }), path({ "d": "M17 11h1a3 3 0 0 1 2.745 4.211" }), path({ "d": "m2 2 20 20" }), path({ "d": "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3" }), path({ "d": "M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268" }), path({ "d": "M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12" }), path({ "d": "M9 14.6V18" }));
};
//#endregion
//#region src/icons/Beer.ts
const Beer = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M17 11h1a3 3 0 0 1 0 6h-1" }), path({ "d": "M9 12v6" }), path({ "d": "M13 12v6" }), path({ "d": "M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z" }), path({ "d": "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" }));
};
//#endregion
//#region src/icons/BellDot.ts
const BellDot = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10.268 21a2 2 0 0 0 3.464 0" }), path({ "d": "M11.68 2.009A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673c-.824-.85-1.678-1.731-2.21-3.348" }), circle({
		cx: "18",
		cy: "5",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/BellElectric.ts
const BellElectric = (props = {}) => {
	const { path, circle, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M18.518 17.347A7 7 0 0 1 14 19" }), path({ "d": "M18.8 4A11 11 0 0 1 20 9" }), path({ "d": "M9 9h.01" }), circle({
		cx: "20",
		cy: "16",
		"r": "2"
	}), circle({
		cx: "9",
		cy: "9",
		"r": "7"
	}), rect({
		"x": "4",
		"y": "16",
		width: "10",
		height: "6",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/BellMinus.ts
const BellMinus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10.268 21a2 2 0 0 0 3.464 0" }), path({ "d": "M15 8h6" }), path({ "d": "M16.243 3.757A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673A9.4 9.4 0 0 1 18.667 12" }));
};
//#endregion
//#region src/icons/BellOff.ts
const BellOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10.268 21a2 2 0 0 0 3.464 0" }), path({ "d": "M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742" }), path({ "d": "m2 2 20 20" }), path({ "d": "M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05" }));
};
//#endregion
//#region src/icons/BellPlus.ts
const BellPlus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10.268 21a2 2 0 0 0 3.464 0" }), path({ "d": "M15 8h6" }), path({ "d": "M18 5v6" }), path({ "d": "M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332" }));
};
//#endregion
//#region src/icons/BellRing.ts
const BellRing = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10.268 21a2 2 0 0 0 3.464 0" }), path({ "d": "M22 8c0-2.3-.8-4.3-2-6" }), path({ "d": "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" }), path({ "d": "M4 2C2.8 3.7 2 5.7 2 8" }));
};
//#endregion
//#region src/icons/Bell.ts
const Bell = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10.268 21a2 2 0 0 0 3.464 0" }), path({ "d": "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" }));
};
//#endregion
//#region src/icons/BetweenHorizontalEnd.ts
const BetweenHorizontalEnd = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "13",
		height: "7",
		"x": "3",
		"y": "3",
		rx: "1"
	}), path({ "d": "m22 15-3-3 3-3" }), rect({
		width: "13",
		height: "7",
		"x": "3",
		"y": "14",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/BetweenHorizontalStart.ts
const BetweenHorizontalStart = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "13",
		height: "7",
		"x": "8",
		"y": "3",
		rx: "1"
	}), path({ "d": "m2 9 3 3-3 3" }), rect({
		width: "13",
		height: "7",
		"x": "8",
		"y": "14",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/BetweenVerticalEnd.ts
const BetweenVerticalEnd = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "7",
		height: "13",
		"x": "3",
		"y": "3",
		rx: "1"
	}), path({ "d": "m9 22 3-3 3 3" }), rect({
		width: "7",
		height: "13",
		"x": "14",
		"y": "3",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/BetweenVerticalStart.ts
const BetweenVerticalStart = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "7",
		height: "13",
		"x": "3",
		"y": "8",
		rx: "1"
	}), path({ "d": "m15 2-3 3-3-3" }), rect({
		width: "7",
		height: "13",
		"x": "14",
		"y": "8",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/BicepsFlexed.ts
const BicepsFlexed = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1" }), path({ "d": "M15 14a5 5 0 0 0-7.584 2" }), path({ "d": "M9.964 6.825C8.019 7.977 9.5 13 8 15" }));
};
//#endregion
//#region src/icons/Bike.ts
const Bike = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "18.5",
		cy: "17.5",
		"r": "3.5"
	}), circle({
		cx: "5.5",
		cy: "17.5",
		"r": "3.5"
	}), circle({
		cx: "15",
		cy: "5",
		"r": "1"
	}), path({ "d": "M12 17.5V14l-3-3 4-3 2 3h2" }));
};
//#endregion
//#region src/icons/Binary.ts
const Binary = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		"x": "14",
		"y": "14",
		width: "4",
		height: "6",
		rx: "2"
	}), rect({
		"x": "6",
		"y": "4",
		width: "4",
		height: "6",
		rx: "2"
	}), path({ "d": "M6 20h4" }), path({ "d": "M14 10h4" }), path({ "d": "M6 14h2v6" }), path({ "d": "M14 4h2v6" }));
};
//#endregion
//#region src/icons/Binoculars.ts
const Binoculars = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 10h4" }), path({ "d": "M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3" }), path({ "d": "M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z" }), path({ "d": "M 22 16 L 2 16" }), path({ "d": "M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z" }), path({ "d": "M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3" }));
};
//#endregion
//#region src/icons/Biohazard.ts
const Biohazard = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "11.9",
		"r": "2"
	}), path({ "d": "M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6" }), path({ "d": "m8.9 10.1 1.4.8" }), path({ "d": "M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5" }), path({ "d": "m15.1 10.1-1.4.8" }), path({ "d": "M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2" }), path({ "d": "M12 13.9v1.6" }), path({ "d": "M13.5 5.4c-1-.2-2-.2-3 0" }), path({ "d": "M17 16.4c.7-.7 1.2-1.6 1.5-2.5" }), path({ "d": "M5.5 13.9c.3.9.8 1.8 1.5 2.5" }));
};
//#endregion
//#region src/icons/Bird.ts
const Bird = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 7h.01" }), path({ "d": "M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" }), path({ "d": "m20 7 2 .5-2 .5" }), path({ "d": "M10 18v3" }), path({ "d": "M14 17.75V21" }), path({ "d": "M7 18a6 6 0 0 0 3.84-10.61" }));
};
//#endregion
//#region src/icons/Birdhouse.ts
const Birdhouse = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 18v4" }), path({ "d": "m17 18 1.956-11.468" }), path({ "d": "m3 8 7.82-5.615a2 2 0 0 1 2.36 0L21 8" }), path({ "d": "M4 18h16" }), path({ "d": "M7 18 5.044 6.532" }), circle({
		cx: "12",
		cy: "10",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/Bitcoin.ts
const Bitcoin = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" }));
};
//#endregion
//#region src/icons/Blend.ts
const Blend = (props = {}) => {
	const { circle } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "9",
		cy: "9",
		"r": "7"
	}), circle({
		cx: "15",
		cy: "15",
		"r": "7"
	}));
};
//#endregion
//#region src/icons/Blinds.ts
const Blinds = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 3h18" }), path({ "d": "M20 7H8" }), path({ "d": "M20 11H8" }), path({ "d": "M10 19h10" }), path({ "d": "M8 15h12" }), path({ "d": "M4 3v14" }), circle({
		cx: "4",
		cy: "19",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/Blocks.ts
const Blocks = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2" }), rect({
		"x": "14",
		"y": "2",
		width: "8",
		height: "8",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/BluetoothConnected.ts
const BluetoothConnected = (props = {}) => {
	const { path, line } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m7 7 10 10-5 5V2l5 5L7 17" }), line({
		x1: "18",
		x2: "21",
		y1: "12",
		y2: "12"
	}), line({
		x1: "3",
		x2: "6",
		y1: "12",
		y2: "12"
	}));
};
//#endregion
//#region src/icons/BluetoothOff.ts
const BluetoothOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m17 17-5 5V12l-5 5" }), path({ "d": "m2 2 20 20" }), path({ "d": "M14.5 9.5 17 7l-5-5v4.5" }));
};
//#endregion
//#region src/icons/BluetoothSearching.ts
const BluetoothSearching = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m7 7 10 10-5 5V2l5 5L7 17" }), path({ "d": "M20.83 14.83a4 4 0 0 0 0-5.66" }), path({ "d": "M18 12h.01" }));
};
//#endregion
//#region src/icons/Bluetooth.ts
const Bluetooth = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m7 7 10 10-5 5V2l5 5L7 17" }));
};
//#endregion
//#region src/icons/Bold.ts
const Bold = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" }));
};
//#endregion
//#region src/icons/Bolt.ts
const Bolt = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }), circle({
		cx: "12",
		cy: "12",
		"r": "4"
	}));
};
//#endregion
//#region src/icons/Bomb.ts
const Bomb = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "11",
		cy: "13",
		"r": "9"
	}), path({ "d": "M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95" }), path({ "d": "m22 2-1.5 1.5" }));
};
//#endregion
//#region src/icons/Bone.ts
const Bone = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z" }));
};
//#endregion
//#region src/icons/BookA.ts
const BookA = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }), path({ "d": "m8 13 4-7 4 7" }), path({ "d": "M9.1 11h5.7" }));
};
//#endregion
//#region src/icons/BookAlert.ts
const BookAlert = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 13h.01" }), path({ "d": "M12 6v3" }), path({ "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }));
};
//#endregion
//#region src/icons/BookAudio.ts
const BookAudio = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 6v7" }), path({ "d": "M16 8v3" }), path({ "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }), path({ "d": "M8 8v3" }));
};
//#endregion
//#region src/icons/BookCheck.ts
const BookCheck = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }), path({ "d": "m9 9.5 2 2 4-4" }));
};
//#endregion
//#region src/icons/BookCopy.ts
const BookCopy = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M5 7a2 2 0 0 0-2 2v11" }), path({ "d": "M5.803 18H5a2 2 0 0 0 0 4h9.5a.5.5 0 0 0 .5-.5V21" }), path({ "d": "M9 15V4a2 2 0 0 1 2-2h9.5a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5H11a2 2 0 0 1 0-4h10" }));
};
//#endregion
//#region src/icons/BookDashed.ts
const BookDashed = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 17h1.5" }), path({ "d": "M12 22h1.5" }), path({ "d": "M12 2h1.5" }), path({ "d": "M17.5 22H19a1 1 0 0 0 1-1" }), path({ "d": "M17.5 2H19a1 1 0 0 1 1 1v1.5" }), path({ "d": "M20 14v3h-2.5" }), path({ "d": "M20 8.5V10" }), path({ "d": "M4 10V8.5" }), path({ "d": "M4 19.5V14" }), path({ "d": "M4 4.5A2.5 2.5 0 0 1 6.5 2H8" }), path({ "d": "M8 22H6.5a1 1 0 0 1 0-5H8" }));
};
//#endregion
//#region src/icons/BookDown.ts
const BookDown = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 13V7" }), path({ "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }), path({ "d": "m9 10 3 3 3-3" }));
};
//#endregion
//#region src/icons/BookHeadphones.ts
const BookHeadphones = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }), path({ "d": "M8 12v-2a4 4 0 0 1 8 0v2" }), circle({
		cx: "15",
		cy: "12",
		"r": "1"
	}), circle({
		cx: "9",
		cy: "12",
		"r": "1"
	}));
};
//#endregion
//#region src/icons/BookHeart.ts
const BookHeart = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }), path({ "d": "M8.62 9.8A2.25 2.25 0 1 1 12 6.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z" }));
};
//#endregion
//#region src/icons/BookImage.ts
const BookImage = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17" }), path({ "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }), circle({
		cx: "10",
		cy: "8",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/BookKey.ts
const BookKey = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13 2H6.5A2.5 2.5 0 0 0 4 4.5v15" }), path({ "d": "M17 2v6" }), path({ "d": "M17 4h2" }), path({ "d": "M20 15.2V21a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }), circle({
		cx: "17",
		cy: "10",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/BookLock.ts
const BookLock = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M18 6V4a2 2 0 1 0-4 0v2" }), path({ "d": "M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }), path({ "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10" }), rect({
		"x": "12",
		"y": "6",
		width: "8",
		height: "5",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/BookMarked.ts
const BookMarked = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 2v8l3-3 3 3V2" }), path({ "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }));
};
//#endregion
//#region src/icons/BookMinus.ts
const BookMinus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }), path({ "d": "M9 10h6" }));
};
//#endregion
//#region src/icons/BookOpenCheck.ts
const BookOpenCheck = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 21V7" }), path({ "d": "m16 12 2 2 4-4" }), path({ "d": "M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3" }));
};
//#endregion
//#region src/icons/BookOpenText.ts
const BookOpenText = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 7v14" }), path({ "d": "M16 12h2" }), path({ "d": "M16 8h2" }), path({ "d": "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" }), path({ "d": "M6 12h2" }), path({ "d": "M6 8h2" }));
};
//#endregion
//#region src/icons/BookOpen.ts
const BookOpen = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 7v14" }), path({ "d": "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" }));
};
//#endregion
//#region src/icons/BookPlus.ts
const BookPlus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 7v6" }), path({ "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }), path({ "d": "M9 10h6" }));
};
//#endregion
//#region src/icons/BookSearch.ts
const BookSearch = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 22H5.5a1 1 0 0 1 0-5h4.501" }), path({ "d": "m21 22-1.879-1.878" }), path({ "d": "M3 19.5v-15A2.5 2.5 0 0 1 5.5 2H18a1 1 0 0 1 1 1v8" }), circle({
		cx: "17",
		cy: "18",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/BookText.ts
const BookText = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }), path({ "d": "M8 11h8" }), path({ "d": "M8 7h6" }));
};
//#endregion
//#region src/icons/BookType.ts
const BookType = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 13h4" }), path({ "d": "M12 6v7" }), path({ "d": "M16 8V6H8v2" }), path({ "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }));
};
//#endregion
//#region src/icons/BookUp2.ts
const BookUp2 = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 13V7" }), path({ "d": "M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }), path({ "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2" }), path({ "d": "m9 10 3-3 3 3" }), path({ "d": "m9 5 3-3 3 3" }));
};
//#endregion
//#region src/icons/BookUp.ts
const BookUp = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 13V7" }), path({ "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }), path({ "d": "m9 10 3-3 3 3" }));
};
//#endregion
//#region src/icons/BookUser.ts
const BookUser = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M15 13a3 3 0 1 0-6 0" }), path({ "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }), circle({
		cx: "12",
		cy: "8",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/BookX.ts
const BookX = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m14.5 7-5 5" }), path({ "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }), path({ "d": "m9.5 7 5 5" }));
};
//#endregion
//#region src/icons/Book.ts
const Book = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" }));
};
//#endregion
//#region src/icons/BookmarkCheck.ts
const BookmarkCheck = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" }), path({ "d": "m9 10 2 2 4-4" }));
};
//#endregion
//#region src/icons/BookmarkMinus.ts
const BookmarkMinus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M15 10H9" }), path({ "d": "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" }));
};
//#endregion
//#region src/icons/BookmarkPlus.ts
const BookmarkPlus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 7v6" }), path({ "d": "M15 10H9" }), path({ "d": "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" }));
};
//#endregion
//#region src/icons/BookmarkX.ts
const BookmarkX = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m14.5 7.5-5 5" }), path({ "d": "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" }), path({ "d": "m9.5 7.5 5 5" }));
};
//#endregion
//#region src/icons/Bookmark.ts
const Bookmark = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" }));
};
//#endregion
//#region src/icons/BoomBox.ts
const BoomBox = (props = {}) => {
	const { path, rect, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" }), path({ "d": "M8 8v1" }), path({ "d": "M12 8v1" }), path({ "d": "M16 8v1" }), rect({
		width: "20",
		height: "12",
		"x": "2",
		"y": "9",
		rx: "2"
	}), circle({
		cx: "8",
		cy: "15",
		"r": "2"
	}), circle({
		cx: "16",
		cy: "15",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/BotMessageSquare.ts
const BotMessageSquare = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 6V2H8" }), path({ "d": "M15 11v2" }), path({ "d": "M2 12h2" }), path({ "d": "M20 12h2" }), path({ "d": "M20 16a2 2 0 0 1-2 2H8.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 4 20.286V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2z" }), path({ "d": "M9 11v2" }));
};
//#endregion
//#region src/icons/BotOff.ts
const BotOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13.67 8H18a2 2 0 0 1 2 2v4.33" }), path({ "d": "M2 14h2" }), path({ "d": "M20 14h2" }), path({ "d": "M22 22 2 2" }), path({ "d": "M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586" }), path({ "d": "M9 13v2" }), path({ "d": "M9.67 4H12v2.33" }));
};
//#endregion
//#region src/icons/Bot.ts
const Bot = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 8V4H8" }), rect({
		width: "16",
		height: "12",
		"x": "4",
		"y": "8",
		rx: "2"
	}), path({ "d": "M2 14h2" }), path({ "d": "M20 14h2" }), path({ "d": "M15 13v2" }), path({ "d": "M9 13v2" }));
};
//#endregion
//#region src/icons/BottleWine.ts
const BottleWine = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a6 6 0 0 0 1.2 3.6l.6.8A6 6 0 0 1 17 13v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-8a6 6 0 0 1 1.2-3.6l.6-.8A6 6 0 0 0 10 5z" }), path({ "d": "M17 13h-4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h4" }));
};
//#endregion
//#region src/icons/BowArrow.ts
const BowArrow = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M17 3h4v4" }), path({ "d": "M18.575 11.082a13 13 0 0 1 1.048 9.027 1.17 1.17 0 0 1-1.914.597L14 17" }), path({ "d": "M7 10 3.29 6.29a1.17 1.17 0 0 1 .6-1.91 13 13 0 0 1 9.03 1.05" }), path({ "d": "M7 14a1.7 1.7 0 0 0-1.207.5l-2.646 2.646A.5.5 0 0 0 3.5 18H5a1 1 0 0 1 1 1v1.5a.5.5 0 0 0 .854.354L9.5 18.207A1.7 1.7 0 0 0 10 17v-2a1 1 0 0 0-1-1z" }), path({ "d": "M9.707 14.293 21 3" }));
};
//#endregion
//#region src/icons/Box.ts
const Box = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" }), path({ "d": "m3.3 7 8.7 5 8.7-5" }), path({ "d": "M12 22V12" }));
};
//#endregion
//#region src/icons/Boxes.ts
const Boxes = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" }), path({ "d": "m7 16.5-4.74-2.85" }), path({ "d": "m7 16.5 5-3" }), path({ "d": "M7 16.5v5.17" }), path({ "d": "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z" }), path({ "d": "m17 16.5-5-3" }), path({ "d": "m17 16.5 4.74-2.85" }), path({ "d": "M17 16.5v5.17" }), path({ "d": "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z" }), path({ "d": "M12 8 7.26 5.15" }), path({ "d": "m12 8 4.74-2.85" }), path({ "d": "M12 13.5V8" }));
};
//#endregion
//#region src/icons/Braces.ts
const Braces = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" }), path({ "d": "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" }));
};
//#endregion
//#region src/icons/Brackets.ts
const Brackets = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3" }), path({ "d": "M8 21H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h3" }));
};
//#endregion
//#region src/icons/BrainCircuit.ts
const BrainCircuit = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" }), path({ "d": "M9 13a4.5 4.5 0 0 0 3-4" }), path({ "d": "M6.003 5.125A3 3 0 0 0 6.401 6.5" }), path({ "d": "M3.477 10.896a4 4 0 0 1 .585-.396" }), path({ "d": "M6 18a4 4 0 0 1-1.967-.516" }), path({ "d": "M12 13h4" }), path({ "d": "M12 18h6a2 2 0 0 1 2 2v1" }), path({ "d": "M12 8h8" }), path({ "d": "M16 8V5a2 2 0 0 1 2-2" }), circle({
		cx: "16",
		cy: "13",
		"r": ".5"
	}), circle({
		cx: "18",
		cy: "3",
		"r": ".5"
	}), circle({
		cx: "20",
		cy: "21",
		"r": ".5"
	}), circle({
		cx: "20",
		cy: "8",
		"r": ".5"
	}));
};
//#endregion
//#region src/icons/BrainCog.ts
const BrainCog = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m10.852 14.772-.383.923" }), path({ "d": "m10.852 9.228-.383-.923" }), path({ "d": "m13.148 14.772.382.924" }), path({ "d": "m13.531 8.305-.383.923" }), path({ "d": "m14.772 10.852.923-.383" }), path({ "d": "m14.772 13.148.923.383" }), path({ "d": "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 0 0-5.63-1.446 3 3 0 0 0-.368 1.571 4 4 0 0 0-2.525 5.771" }), path({ "d": "M17.998 5.125a4 4 0 0 1 2.525 5.771" }), path({ "d": "M19.505 10.294a4 4 0 0 1-1.5 7.706" }), path({ "d": "M4.032 17.483A4 4 0 0 0 11.464 20c.18-.311.892-.311 1.072 0a4 4 0 0 0 7.432-2.516" }), path({ "d": "M4.5 10.291A4 4 0 0 0 6 18" }), path({ "d": "M6.002 5.125a3 3 0 0 0 .4 1.375" }), path({ "d": "m9.228 10.852-.923-.383" }), path({ "d": "m9.228 13.148-.923.383" }), circle({
		cx: "12",
		cy: "12",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/Brain.ts
const Brain = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 18V5" }), path({ "d": "M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" }), path({ "d": "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" }), path({ "d": "M17.997 5.125a4 4 0 0 1 2.526 5.77" }), path({ "d": "M18 18a4 4 0 0 0 2-7.464" }), path({ "d": "M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" }), path({ "d": "M6 18a4 4 0 0 1-2-7.464" }), path({ "d": "M6.003 5.125a4 4 0 0 0-2.526 5.77" }));
};
//#endregion
//#region src/icons/BrickWallFire.ts
const BrickWallFire = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 3v2.107" }), path({ "d": "M17 9c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 22 17a5 5 0 0 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C13 11.5 16 9 17 9" }), path({ "d": "M21 8.274V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.938" }), path({ "d": "M3 15h5.253" }), path({ "d": "M3 9h8.228" }), path({ "d": "M8 15v6" }), path({ "d": "M8 3v6" }));
};
//#endregion
//#region src/icons/BrickWallShield.ts
const BrickWallShield = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 9v1.258" }), path({ "d": "M16 3v5.46" }), path({ "d": "M21 9.118V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5.75" }), path({ "d": "M22 17.5c0 2.499-1.75 3.749-3.83 4.474a.5.5 0 0 1-.335-.005c-2.085-.72-3.835-1.97-3.835-4.47V14a.5.5 0 0 1 .5-.499c1 0 2.25-.6 3.12-1.36a.6.6 0 0 1 .76-.001c.875.765 2.12 1.36 3.12 1.36a.5.5 0 0 1 .5.5z" }), path({ "d": "M3 15h7" }), path({ "d": "M3 9h12.142" }), path({ "d": "M8 15v6" }), path({ "d": "M8 3v6" }));
};
//#endregion
//#region src/icons/BrickWall.ts
const BrickWall = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M12 9v6" }), path({ "d": "M16 15v6" }), path({ "d": "M16 3v6" }), path({ "d": "M3 15h18" }), path({ "d": "M3 9h18" }), path({ "d": "M8 15v6" }), path({ "d": "M8 3v6" }));
};
//#endregion
//#region src/icons/BriefcaseBusiness.ts
const BriefcaseBusiness = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 12h.01" }), path({ "d": "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" }), path({ "d": "M22 13a18.15 18.15 0 0 1-20 0" }), rect({
		width: "20",
		height: "14",
		"x": "2",
		"y": "6",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/BriefcaseConveyorBelt.ts
const BriefcaseConveyorBelt = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 20v2" }), path({ "d": "M14 20v2" }), path({ "d": "M18 20v2" }), path({ "d": "M21 20H3" }), path({ "d": "M6 20v2" }), path({ "d": "M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12" }), rect({
		"x": "4",
		"y": "6",
		width: "16",
		height: "10",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/BriefcaseMedical.ts
const BriefcaseMedical = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 11v4" }), path({ "d": "M14 13h-4" }), path({ "d": "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" }), path({ "d": "M18 6v14" }), path({ "d": "M6 6v14" }), rect({
		width: "20",
		height: "14",
		"x": "2",
		"y": "6",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/Briefcase.ts
const Briefcase = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" }), rect({
		width: "20",
		height: "14",
		"x": "2",
		"y": "6",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/BringToFront.ts
const BringToFront = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		"x": "8",
		"y": "8",
		width: "8",
		height: "8",
		rx: "2"
	}), path({ "d": "M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2" }), path({ "d": "M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2" }));
};
//#endregion
//#region src/icons/BrushCleaning.ts
const BrushCleaning = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m16 22-1-4" }), path({ "d": "M19 14a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2h-3a1 1 0 0 1-1-1V4a2 2 0 0 0-4 0v5a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2v1a1 1 0 0 0 1 1" }), path({ "d": "M19 14H5l-1.973 6.767A1 1 0 0 0 4 22h16a1 1 0 0 0 .973-1.233z" }), path({ "d": "m8 22 1-4" }));
};
//#endregion
//#region src/icons/Brush.ts
const Brush = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m11 10 3 3" }), path({ "d": "M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z" }), path({ "d": "M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031" }));
};
//#endregion
//#region src/icons/Bubbles.ts
const Bubbles = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M7.001 15.085A1.5 1.5 0 0 1 9 16.5" }), circle({
		cx: "18.5",
		cy: "8.5",
		"r": "3.5"
	}), circle({
		cx: "7.5",
		cy: "16.5",
		"r": "5.5"
	}), circle({
		cx: "7.5",
		cy: "4.5",
		"r": "2.5"
	}));
};
//#endregion
//#region src/icons/BugOff.ts
const BugOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 20v-8" }), path({ "d": "M12.656 7H14a4 4 0 0 1 4 4v1.344" }), path({ "d": "M14.12 3.88 16 2" }), path({ "d": "M17.123 17.123A6 6 0 0 1 6 14v-3a4 4 0 0 1 1.72-3.287" }), path({ "d": "m2 2 20 20" }), path({ "d": "M21 5a4 4 0 0 1-3.55 3.97" }), path({ "d": "M22 13h-3.344" }), path({ "d": "M3 21a4 4 0 0 1 3.81-4" }), path({ "d": "M3 5a4 4 0 0 0 3.55 3.97" }), path({ "d": "M6 13H2" }), path({ "d": "m8 2 1.88 1.88" }), path({ "d": "M9.712 4.06A3 3 0 0 1 15 6v1.13" }));
};
//#endregion
//#region src/icons/BugPlay.ts
const BugPlay = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 19.655A6 6 0 0 1 6 14v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 3.97" }), path({ "d": "M14 15.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z" }), path({ "d": "M14.12 3.88 16 2" }), path({ "d": "M21 5a4 4 0 0 1-3.55 3.97" }), path({ "d": "M3 21a4 4 0 0 1 3.81-4" }), path({ "d": "M3 5a4 4 0 0 0 3.55 3.97" }), path({ "d": "M6 13H2" }), path({ "d": "m8 2 1.88 1.88" }), path({ "d": "M9 7.13V6a3 3 0 1 1 6 0v1.13" }));
};
//#endregion
//#region src/icons/Bug.ts
const Bug = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 20v-9" }), path({ "d": "M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z" }), path({ "d": "M14.12 3.88 16 2" }), path({ "d": "M21 21a4 4 0 0 0-3.81-4" }), path({ "d": "M21 5a4 4 0 0 1-3.55 3.97" }), path({ "d": "M22 13h-4" }), path({ "d": "M3 21a4 4 0 0 1 3.81-4" }), path({ "d": "M3 5a4 4 0 0 0 3.55 3.97" }), path({ "d": "M6 13H2" }), path({ "d": "m8 2 1.88 1.88" }), path({ "d": "M9 7.13V6a3 3 0 1 1 6 0v1.13" }));
};
//#endregion
//#region src/icons/Building2.ts
const Building2 = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 12h4" }), path({ "d": "M10 8h4" }), path({ "d": "M14 21v-3a2 2 0 0 0-4 0v3" }), path({ "d": "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" }), path({ "d": "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" }));
};
//#endregion
//#region src/icons/Building.ts
const Building = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 10h.01" }), path({ "d": "M12 14h.01" }), path({ "d": "M12 6h.01" }), path({ "d": "M16 10h.01" }), path({ "d": "M16 14h.01" }), path({ "d": "M16 6h.01" }), path({ "d": "M8 10h.01" }), path({ "d": "M8 14h.01" }), path({ "d": "M8 6h.01" }), path({ "d": "M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" }), rect({
		"x": "4",
		"y": "2",
		width: "16",
		height: "20",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/BusFront.ts
const BusFront = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 6 2 7" }), path({ "d": "M10 6h4" }), path({ "d": "m22 7-2-1" }), rect({
		width: "16",
		height: "16",
		"x": "4",
		"y": "3",
		rx: "2"
	}), path({ "d": "M4 11h16" }), path({ "d": "M8 15h.01" }), path({ "d": "M16 15h.01" }), path({ "d": "M6 19v2" }), path({ "d": "M18 21v-2" }));
};
//#endregion
//#region src/icons/Bus.ts
const Bus = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M8 6v6" }), path({ "d": "M15 6v6" }), path({ "d": "M2 12h19.6" }), path({ "d": "M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" }), circle({
		cx: "7",
		cy: "18",
		"r": "2"
	}), path({ "d": "M9 18h5" }), circle({
		cx: "16",
		cy: "18",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/CableCar.ts
const CableCar = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 3h.01" }), path({ "d": "M14 2h.01" }), path({ "d": "m2 9 20-5" }), path({ "d": "M12 12V6.5" }), rect({
		width: "16",
		height: "10",
		"x": "4",
		"y": "12",
		rx: "3"
	}), path({ "d": "M9 12v5" }), path({ "d": "M15 12v5" }), path({ "d": "M4 17h16" }));
};
//#endregion
//#region src/icons/Cable.ts
const Cable = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z" }), path({ "d": "M17 21v-2" }), path({ "d": "M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10" }), path({ "d": "M21 21v-2" }), path({ "d": "M3 5V3" }), path({ "d": "M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z" }), path({ "d": "M7 5V3" }));
};
//#endregion
//#region src/icons/CakeSlice.ts
const CakeSlice = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 13H3" }), path({ "d": "M16 17H3" }), path({ "d": "m7.2 7.9-3.388 2.5A2 2 0 0 0 3 12.01V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8.654c0-2-2.44-6.026-6.44-8.026a1 1 0 0 0-1.082.057L10.4 5.6" }), circle({
		cx: "9",
		cy: "7",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/Cake.ts
const Cake = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" }), path({ "d": "M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" }), path({ "d": "M2 21h20" }), path({ "d": "M7 8v3" }), path({ "d": "M12 8v3" }), path({ "d": "M17 8v3" }), path({ "d": "M7 4h.01" }), path({ "d": "M12 4h.01" }), path({ "d": "M17 4h.01" }));
};
//#endregion
//#region src/icons/Calculator.ts
const Calculator = (props = {}) => {
	const { rect, line, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "16",
		height: "20",
		"x": "4",
		"y": "2",
		rx: "2"
	}), line({
		x1: "8",
		x2: "16",
		y1: "6",
		y2: "6"
	}), line({
		x1: "16",
		x2: "16",
		y1: "14",
		y2: "18"
	}), path({ "d": "M16 10h.01" }), path({ "d": "M12 10h.01" }), path({ "d": "M8 10h.01" }), path({ "d": "M12 14h.01" }), path({ "d": "M8 14h.01" }), path({ "d": "M12 18h.01" }), path({ "d": "M8 18h.01" }));
};
//#endregion
//#region src/icons/Calendar1.ts
const Calendar1 = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 14h1v4" }), path({ "d": "M16 2v4" }), path({ "d": "M3 10h18" }), path({ "d": "M8 2v4" }), rect({
		"x": "3",
		"y": "4",
		width: "18",
		height: "18",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/CalendarArrowDown.ts
const CalendarArrowDown = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m14 18 4 4 4-4" }), path({ "d": "M16 2v4" }), path({ "d": "M18 14v8" }), path({ "d": "M21 11.354V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.343" }), path({ "d": "M3 10h18" }), path({ "d": "M8 2v4" }));
};
//#endregion
//#region src/icons/CalendarArrowUp.ts
const CalendarArrowUp = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m14 18 4-4 4 4" }), path({ "d": "M16 2v4" }), path({ "d": "M18 22v-8" }), path({ "d": "M21 11.343V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9" }), path({ "d": "M3 10h18" }), path({ "d": "M8 2v4" }));
};
//#endregion
//#region src/icons/CalendarCheck2.ts
const CalendarCheck2 = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M8 2v4" }), path({ "d": "M16 2v4" }), path({ "d": "M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" }), path({ "d": "M3 10h18" }), path({ "d": "m16 20 2 2 4-4" }));
};
//#endregion
//#region src/icons/CalendarCheck.ts
const CalendarCheck = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M8 2v4" }), path({ "d": "M16 2v4" }), rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "4",
		rx: "2"
	}), path({ "d": "M3 10h18" }), path({ "d": "m9 16 2 2 4-4" }));
};
//#endregion
//#region src/icons/CalendarClock.ts
const CalendarClock = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 14v2.2l1.6 1" }), path({ "d": "M16 2v4" }), path({ "d": "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" }), path({ "d": "M3 10h5" }), path({ "d": "M8 2v4" }), circle({
		cx: "16",
		cy: "16",
		"r": "6"
	}));
};
//#endregion
//#region src/icons/CalendarCog.ts
const CalendarCog = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m15.228 16.852-.923-.383" }), path({ "d": "m15.228 19.148-.923.383" }), path({ "d": "M16 2v4" }), path({ "d": "m16.47 14.305.382.923" }), path({ "d": "m16.852 20.772-.383.924" }), path({ "d": "m19.148 15.228.383-.923" }), path({ "d": "m19.53 21.696-.382-.924" }), path({ "d": "m20.772 16.852.924-.383" }), path({ "d": "m20.772 19.148.924.383" }), path({ "d": "M21 10.592V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" }), path({ "d": "M3 10h18" }), path({ "d": "M8 2v4" }), circle({
		cx: "18",
		cy: "18",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/CalendarDays.ts
const CalendarDays = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M8 2v4" }), path({ "d": "M16 2v4" }), rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "4",
		rx: "2"
	}), path({ "d": "M3 10h18" }), path({ "d": "M8 14h.01" }), path({ "d": "M12 14h.01" }), path({ "d": "M16 14h.01" }), path({ "d": "M8 18h.01" }), path({ "d": "M12 18h.01" }), path({ "d": "M16 18h.01" }));
};
//#endregion
//#region src/icons/CalendarFold.ts
const CalendarFold = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 20a2 2 0 0 0 2 2h10a2.4 2.4 0 0 0 1.706-.706l3.588-3.588A2.4 2.4 0 0 0 21 16V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" }), path({ "d": "M15 22v-5a1 1 0 0 1 1-1h5" }), path({ "d": "M8 2v4" }), path({ "d": "M16 2v4" }), path({ "d": "M3 10h18" }));
};
//#endregion
//#region src/icons/CalendarHeart.ts
const CalendarHeart = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12.127 22H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.125" }), path({ "d": "M14.62 18.8A2.25 2.25 0 1 1 18 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z" }), path({ "d": "M16 2v4" }), path({ "d": "M3 10h18" }), path({ "d": "M8 2v4" }));
};
//#endregion
//#region src/icons/CalendarMinus2.ts
const CalendarMinus2 = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M8 2v4" }), path({ "d": "M16 2v4" }), rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "4",
		rx: "2"
	}), path({ "d": "M3 10h18" }), path({ "d": "M10 16h4" }));
};
//#endregion
//#region src/icons/CalendarMinus.ts
const CalendarMinus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 19h6" }), path({ "d": "M16 2v4" }), path({ "d": "M21 15V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5" }), path({ "d": "M3 10h18" }), path({ "d": "M8 2v4" }));
};
//#endregion
//#region src/icons/CalendarOff.ts
const CalendarOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18" }), path({ "d": "M21 15.5V6a2 2 0 0 0-2-2H9.5" }), path({ "d": "M16 2v4" }), path({ "d": "M3 10h7" }), path({ "d": "M21 10h-5.5" }), path({ "d": "m2 2 20 20" }));
};
//#endregion
//#region src/icons/CalendarPlus2.ts
const CalendarPlus2 = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M8 2v4" }), path({ "d": "M16 2v4" }), rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "4",
		rx: "2"
	}), path({ "d": "M3 10h18" }), path({ "d": "M10 16h4" }), path({ "d": "M12 14v4" }));
};
//#endregion
//#region src/icons/CalendarPlus.ts
const CalendarPlus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 19h6" }), path({ "d": "M16 2v4" }), path({ "d": "M19 16v6" }), path({ "d": "M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5" }), path({ "d": "M3 10h18" }), path({ "d": "M8 2v4" }));
};
//#endregion
//#region src/icons/CalendarRange.ts
const CalendarRange = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "4",
		rx: "2"
	}), path({ "d": "M16 2v4" }), path({ "d": "M3 10h18" }), path({ "d": "M8 2v4" }), path({ "d": "M17 14h-6" }), path({ "d": "M13 18H7" }), path({ "d": "M7 14h.01" }), path({ "d": "M17 18h.01" }));
};
//#endregion
//#region src/icons/CalendarSearch.ts
const CalendarSearch = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 2v4" }), path({ "d": "M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25" }), path({ "d": "m22 22-1.875-1.875" }), path({ "d": "M3 10h18" }), path({ "d": "M8 2v4" }), circle({
		cx: "18",
		cy: "18",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/CalendarSync.ts
const CalendarSync = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 10v4h4" }), path({ "d": "m11 14 1.535-1.605a5 5 0 0 1 8 1.5" }), path({ "d": "M16 2v4" }), path({ "d": "m21 18-1.535 1.605a5 5 0 0 1-8-1.5" }), path({ "d": "M21 22v-4h-4" }), path({ "d": "M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3" }), path({ "d": "M3 10h4" }), path({ "d": "M8 2v4" }));
};
//#endregion
//#region src/icons/CalendarX2.ts
const CalendarX2 = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M8 2v4" }), path({ "d": "M16 2v4" }), path({ "d": "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8" }), path({ "d": "M3 10h18" }), path({ "d": "m17 22 5-5" }), path({ "d": "m17 17 5 5" }));
};
//#endregion
//#region src/icons/CalendarX.ts
const CalendarX = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M8 2v4" }), path({ "d": "M16 2v4" }), rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "4",
		rx: "2"
	}), path({ "d": "M3 10h18" }), path({ "d": "m14 14-4 4" }), path({ "d": "m10 14 4 4" }));
};
//#endregion
//#region src/icons/Calendar.ts
const Calendar = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M8 2v4" }), path({ "d": "M16 2v4" }), rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "4",
		rx: "2"
	}), path({ "d": "M3 10h18" }));
};
//#endregion
//#region src/icons/Calendars.ts
const Calendars = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 2v2" }), path({ "d": "M15.726 21.01A2 2 0 0 1 14 22H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2" }), path({ "d": "M18 2v2" }), path({ "d": "M2 13h2" }), path({ "d": "M8 8h14" }), rect({
		"x": "8",
		"y": "3",
		width: "14",
		height: "14",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/CameraOff.ts
const CameraOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M14.564 14.558a3 3 0 1 1-4.122-4.121" }), path({ "d": "m2 2 20 20" }), path({ "d": "M20 20H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 .819-.175" }), path({ "d": "M9.695 4.024A2 2 0 0 1 10.004 4h3.993a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v7.344" }));
};
//#endregion
//#region src/icons/Camera.ts
const Camera = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z" }), circle({
		cx: "12",
		cy: "13",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/CandyCane.ts
const CandyCane = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z" }), path({ "d": "M17.75 7 15 2.1" }), path({ "d": "M10.9 4.8 13 9" }), path({ "d": "m7.9 9.7 2 4.4" }), path({ "d": "M4.9 14.7 7 18.9" }));
};
//#endregion
//#region src/icons/CandyOff.ts
const CandyOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 10v7.9" }), path({ "d": "M11.802 6.145a5 5 0 0 1 6.053 6.053" }), path({ "d": "M14 6.1v2.243" }), path({ "d": "m15.5 15.571-.964.964a5 5 0 0 1-7.071 0 5 5 0 0 1 0-7.07l.964-.965" }), path({ "d": "M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4" }), path({ "d": "m2 2 20 20" }), path({ "d": "M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4" }));
};
//#endregion
//#region src/icons/Candy.ts
const Candy = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 7v10.9" }), path({ "d": "M14 6.1V17" }), path({ "d": "M16 7V3a1 1 0 0 1 1.707-.707 2.5 2.5 0 0 0 2.152.717 1 1 0 0 1 1.131 1.131 2.5 2.5 0 0 0 .717 2.152A1 1 0 0 1 21 8h-4" }), path({ "d": "M16.536 7.465a5 5 0 0 0-7.072 0l-2 2a5 5 0 0 0 0 7.07 5 5 0 0 0 7.072 0l2-2a5 5 0 0 0 0-7.07" }), path({ "d": "M8 17v4a1 1 0 0 1-1.707.707 2.5 2.5 0 0 0-2.152-.717 1 1 0 0 1-1.131-1.131 2.5 2.5 0 0 0-.717-2.152A1 1 0 0 1 3 16h4" }));
};
//#endregion
//#region src/icons/CannabisOff.ts
const CannabisOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 22v-4c1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5" }), path({ "d": "M13.988 8.327C13.902 6.054 13.365 3.82 12 2a9.3 9.3 0 0 0-1.445 2.9" }), path({ "d": "M17.375 11.725C18.882 10.53 21 7.841 21 6c-2.324 0-5.08 1.296-6.662 2.684" }), path({ "d": "m2 2 20 20" }), path({ "d": "M21.024 15.378A15 15 0 0 0 22 15c-.426-1.279-2.67-2.557-4.25-2.907" }), path({ "d": "M6.995 6.992C5.714 6.4 4.29 6 3 6c0 2 2.5 5 4 6-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3" }));
};
//#endregion
//#region src/icons/Cannabis.ts
const Cannabis = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 22v-4" }), path({ "d": "M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6" }));
};
//#endregion
//#region src/icons/CaptionsOff.ts
const CaptionsOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10.5 5H19a2 2 0 0 1 2 2v8.5" }), path({ "d": "M17 11h-.5" }), path({ "d": "M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2" }), path({ "d": "m2 2 20 20" }), path({ "d": "M7 11h4" }), path({ "d": "M7 15h2.5" }));
};
//#endregion
//#region src/icons/Captions.ts
const Captions = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "14",
		"x": "3",
		"y": "5",
		rx: "2",
		ry: "2"
	}), path({ "d": "M7 15h4M15 15h2M7 11h2M13 11h4" }));
};
//#endregion
//#region src/icons/CarFront.ts
const CarFront = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" }), path({ "d": "M7 14h.01" }), path({ "d": "M17 14h.01" }), rect({
		width: "18",
		height: "8",
		"x": "3",
		"y": "10",
		rx: "2"
	}), path({ "d": "M5 18v2" }), path({ "d": "M19 18v2" }));
};
//#endregion
//#region src/icons/CarTaxiFront.ts
const CarTaxiFront = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 2h4" }), path({ "d": "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" }), path({ "d": "M7 14h.01" }), path({ "d": "M17 14h.01" }), rect({
		width: "18",
		height: "8",
		"x": "3",
		"y": "10",
		rx: "2"
	}), path({ "d": "M5 18v2" }), path({ "d": "M19 18v2" }));
};
//#endregion
//#region src/icons/Car.ts
const Car = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" }), circle({
		cx: "7",
		cy: "17",
		"r": "2"
	}), path({ "d": "M9 17h6" }), circle({
		cx: "17",
		cy: "17",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/Caravan.ts
const Caravan = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2" }), path({ "d": "M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2" }), path({ "d": "M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9" }), circle({
		cx: "8",
		cy: "19",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/CardSim.ts
const CardSim = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 14v4" }), path({ "d": "M14.172 2a2 2 0 0 1 1.414.586l3.828 3.828A2 2 0 0 1 20 7.828V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" }), path({ "d": "M8 14h8" }), rect({
		"x": "8",
		"y": "10",
		width: "8",
		height: "8",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/Carrot.ts
const Carrot = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46" }), path({ "d": "M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z" }), path({ "d": "M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z" }));
};
//#endregion
//#region src/icons/CaseLower.ts
const CaseLower = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 9v7" }), path({ "d": "M14 6v10" }), circle({
		cx: "17.5",
		cy: "12.5",
		"r": "3.5"
	}), circle({
		cx: "6.5",
		cy: "12.5",
		"r": "3.5"
	}));
};
//#endregion
//#region src/icons/CaseSensitive.ts
const CaseSensitive = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" }), path({ "d": "M22 9v7" }), path({ "d": "M3.304 13h6.392" }), circle({
		cx: "18.5",
		cy: "12.5",
		"r": "3.5"
	}));
};
//#endregion
//#region src/icons/CaseUpper.ts
const CaseUpper = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M15 11h4.5a1 1 0 0 1 0 5h-4a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h3a1 1 0 0 1 0 5" }), path({ "d": "m2 16 4.039-9.69a.5.5 0 0 1 .923 0L11 16" }), path({ "d": "M3.304 13h6.392" }));
};
//#endregion
//#region src/icons/CassetteTape.ts
const CassetteTape = (props = {}) => {
	const { rect, circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "20",
		height: "16",
		"x": "2",
		"y": "4",
		rx: "2"
	}), circle({
		cx: "8",
		cy: "10",
		"r": "2"
	}), path({ "d": "M8 12h8" }), circle({
		cx: "16",
		cy: "10",
		"r": "2"
	}), path({ "d": "m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3" }));
};
//#endregion
//#region src/icons/Cast.ts
const Cast = (props = {}) => {
	const { path, line } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" }), path({ "d": "M2 12a9 9 0 0 1 8 8" }), path({ "d": "M2 16a5 5 0 0 1 4 4" }), line({
		x1: "2",
		x2: "2.01",
		y1: "20",
		y2: "20"
	}));
};
//#endregion
//#region src/icons/Castle.ts
const Castle = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 5V3" }), path({ "d": "M14 5V3" }), path({ "d": "M15 21v-3a3 3 0 0 0-6 0v3" }), path({ "d": "M18 3v8" }), path({ "d": "M18 5H6" }), path({ "d": "M22 11H2" }), path({ "d": "M22 9v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9" }), path({ "d": "M6 3v8" }));
};
//#endregion
//#region src/icons/Cat.ts
const Cat = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z" }), path({ "d": "M8 14v.5" }), path({ "d": "M16 14v.5" }), path({ "d": "M11.25 16.25h1.5L12 17l-.75-.75Z" }));
};
//#endregion
//#region src/icons/CctvOff.ts
const CctvOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m12.309 6.652 4.797 2.401a1 1 0 0 1 .447 1.341l-.501 1.001.605.605h2.725a1 1 0 0 1 .894 1.447l-.724 1.448" }), path({ "d": "m15.166 15.166-.719 1.439a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.9 2.9 0 0 1 .873-1.037" }), path({ "d": "M2 19h3.76a2 2 0 0 0 1.8-1.1l1.441-2.902" }), path({ "d": "m2 2 20 20" }), path({ "d": "M2 21v-4" }), path({ "d": "M7 9h.01" }));
};
//#endregion
//#region src/icons/Cctv.ts
const Cctv = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97" }), path({ "d": "M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z" }), path({ "d": "M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15" }), path({ "d": "M2 21v-4" }), path({ "d": "M7 9h.01" }));
};
//#endregion
//#region src/icons/ChartArea.ts
const ChartArea = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" }), path({ "d": "M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z" }));
};
//#endregion
//#region src/icons/ChartBarBig.ts
const ChartBarBig = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" }), rect({
		"x": "7",
		"y": "13",
		width: "9",
		height: "4",
		rx: "1"
	}), rect({
		"x": "7",
		"y": "5",
		width: "12",
		height: "4",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/ChartBarDecreasing.ts
const ChartBarDecreasing = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" }), path({ "d": "M7 11h8" }), path({ "d": "M7 16h3" }), path({ "d": "M7 6h12" }));
};
//#endregion
//#region src/icons/ChartBarIncreasing.ts
const ChartBarIncreasing = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" }), path({ "d": "M7 11h8" }), path({ "d": "M7 16h12" }), path({ "d": "M7 6h3" }));
};
//#endregion
//#region src/icons/ChartBarStacked.ts
const ChartBarStacked = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 13v4" }), path({ "d": "M15 5v4" }), path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" }), rect({
		"x": "7",
		"y": "13",
		width: "9",
		height: "4",
		rx: "1"
	}), rect({
		"x": "7",
		"y": "5",
		width: "12",
		height: "4",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/ChartBar.ts
const ChartBar = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" }), path({ "d": "M7 16h8" }), path({ "d": "M7 11h12" }), path({ "d": "M7 6h3" }));
};
//#endregion
//#region src/icons/ChartCandlestick.ts
const ChartCandlestick = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M9 5v4" }), rect({
		width: "4",
		height: "6",
		"x": "7",
		"y": "9",
		rx: "1"
	}), path({ "d": "M9 15v2" }), path({ "d": "M17 3v2" }), rect({
		width: "4",
		height: "8",
		"x": "15",
		"y": "5",
		rx: "1"
	}), path({ "d": "M17 13v3" }), path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" }));
};
//#endregion
//#region src/icons/ChartColumnBig.ts
const ChartColumnBig = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" }), rect({
		"x": "15",
		"y": "5",
		width: "4",
		height: "12",
		rx: "1"
	}), rect({
		"x": "7",
		"y": "8",
		width: "4",
		height: "9",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/ChartColumnDecreasing.ts
const ChartColumnDecreasing = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13 17V9" }), path({ "d": "M18 17v-3" }), path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" }), path({ "d": "M8 17V5" }));
};
//#endregion
//#region src/icons/ChartColumnIncreasing.ts
const ChartColumnIncreasing = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13 17V9" }), path({ "d": "M18 17V5" }), path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" }), path({ "d": "M8 17v-3" }));
};
//#endregion
//#region src/icons/ChartColumnStacked.ts
const ChartColumnStacked = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 13H7" }), path({ "d": "M19 9h-4" }), path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" }), rect({
		"x": "15",
		"y": "5",
		width: "4",
		height: "12",
		rx: "1"
	}), rect({
		"x": "7",
		"y": "8",
		width: "4",
		height: "9",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/ChartColumn.ts
const ChartColumn = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" }), path({ "d": "M18 17V9" }), path({ "d": "M13 17V5" }), path({ "d": "M8 17v-3" }));
};
//#endregion
//#region src/icons/ChartGantt.ts
const ChartGantt = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 6h8" }), path({ "d": "M12 16h6" }), path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" }), path({ "d": "M8 11h7" }));
};
//#endregion
//#region src/icons/ChartLine.ts
const ChartLine = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" }), path({ "d": "m19 9-5 5-4-4-3 3" }));
};
//#endregion
//#region src/icons/ChartNetwork.ts
const ChartNetwork = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m13.11 7.664 1.78 2.672" }), path({ "d": "m14.162 12.788-3.324 1.424" }), path({ "d": "m20 4-6.06 1.515" }), path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" }), circle({
		cx: "12",
		cy: "6",
		"r": "2"
	}), circle({
		cx: "16",
		cy: "12",
		"r": "2"
	}), circle({
		cx: "9",
		cy: "15",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/ChartNoAxesColumnDecreasing.ts
const ChartNoAxesColumnDecreasing = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M5 21V3" }), path({ "d": "M12 21V9" }), path({ "d": "M19 21v-6" }));
};
//#endregion
//#region src/icons/ChartNoAxesColumnIncreasing.ts
const ChartNoAxesColumnIncreasing = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M5 21v-6" }), path({ "d": "M12 21V9" }), path({ "d": "M19 21V3" }));
};
//#endregion
//#region src/icons/ChartNoAxesColumn.ts
const ChartNoAxesColumn = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M5 21v-6" }), path({ "d": "M12 21V3" }), path({ "d": "M19 21V9" }));
};
//#endregion
//#region src/icons/ChartNoAxesCombined.ts
const ChartNoAxesCombined = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 16v5" }), path({ "d": "M16 14v7" }), path({ "d": "M20 10v11" }), path({ "d": "m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" }), path({ "d": "M4 18v3" }), path({ "d": "M8 14v7" }));
};
//#endregion
//#region src/icons/ChartNoAxesGantt.ts
const ChartNoAxesGantt = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 5h12" }), path({ "d": "M4 12h10" }), path({ "d": "M12 19h8" }));
};
//#endregion
//#region src/icons/ChartPie.ts
const ChartPie = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z" }), path({ "d": "M21.21 15.89A10 10 0 1 1 8 2.83" }));
};
//#endregion
//#region src/icons/ChartScatter.ts
const ChartScatter = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "7.5",
		cy: "7.5",
		"r": ".5",
		fill: "currentColor"
	}), circle({
		cx: "18.5",
		cy: "5.5",
		"r": ".5",
		fill: "currentColor"
	}), circle({
		cx: "11.5",
		cy: "11.5",
		"r": ".5",
		fill: "currentColor"
	}), circle({
		cx: "7.5",
		cy: "16.5",
		"r": ".5",
		fill: "currentColor"
	}), circle({
		cx: "17.5",
		cy: "14.5",
		"r": ".5",
		fill: "currentColor"
	}), path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" }));
};
//#endregion
//#region src/icons/ChartSpline.ts
const ChartSpline = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 3v16a2 2 0 0 0 2 2h16" }), path({ "d": "M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7" }));
};
//#endregion
//#region src/icons/CheckCheck.ts
const CheckCheck = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M18 6 7 17l-5-5" }), path({ "d": "m22 10-7.5 7.5L13 16" }));
};
//#endregion
//#region src/icons/CheckLine.ts
const CheckLine = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20 4L9 15" }), path({ "d": "M21 19L3 19" }), path({ "d": "M9 15L4 10" }));
};
//#endregion
//#region src/icons/Check.ts
const Check = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20 6 9 17l-5-5" }));
};
//#endregion
//#region src/icons/ChefHat.ts
const ChefHat = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" }), path({ "d": "M6 17h12" }));
};
//#endregion
//#region src/icons/Cherry.ts
const Cherry = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z" }), path({ "d": "M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z" }), path({ "d": "M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12" }), path({ "d": "M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z" }));
};
//#endregion
//#region src/icons/ChessBishop.ts
const ChessBishop = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" }), path({ "d": "M15 18c1.5-.615 3-2.461 3-4.923C18 8.769 14.5 4.462 12 2 9.5 4.462 6 8.77 6 13.077 6 15.539 7.5 17.385 9 18" }), path({ "d": "m16 7-2.5 2.5" }), path({ "d": "M9 2h6" }));
};
//#endregion
//#region src/icons/ChessKing.ts
const ChessKing = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 20a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" }), path({ "d": "m6.7 18-1-1C4.35 15.682 3 14.09 3 12a5 5 0 0 1 4.95-5c1.584 0 2.7.455 4.05 1.818C13.35 7.455 14.466 7 16.05 7A5 5 0 0 1 21 12c0 2.082-1.359 3.673-2.7 5l-1 1" }), path({ "d": "M10 4h4" }), path({ "d": "M12 2v6.818" }));
};
//#endregion
//#region src/icons/ChessKnight.ts
const ChessKnight = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" }), path({ "d": "M16.5 18c1-2 2.5-5 2.5-9a7 7 0 0 0-7-7H6.635a1 1 0 0 0-.768 1.64L7 5l-2.32 5.802a2 2 0 0 0 .95 2.526l2.87 1.456" }), path({ "d": "m15 5 1.425-1.425" }), path({ "d": "m17 8 1.53-1.53" }), path({ "d": "M9.713 12.185 7 18" }));
};
//#endregion
//#region src/icons/ChessPawn.ts
const ChessPawn = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" }), path({ "d": "m14.5 10 1.5 8" }), path({ "d": "M7 10h10" }), path({ "d": "m8 18 1.5-8" }), circle({
		cx: "12",
		cy: "6",
		"r": "4"
	}));
};
//#endregion
//#region src/icons/ChessQueen.ts
const ChessQueen = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 20a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" }), path({ "d": "m12.474 5.943 1.567 5.34a1 1 0 0 0 1.75.328l2.616-3.402" }), path({ "d": "m20 9-3 9" }), path({ "d": "m5.594 8.209 2.615 3.403a1 1 0 0 0 1.75-.329l1.567-5.34" }), path({ "d": "M7 18 4 9" }), circle({
		cx: "12",
		cy: "4",
		"r": "2"
	}), circle({
		cx: "20",
		cy: "7",
		"r": "2"
	}), circle({
		cx: "4",
		cy: "7",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/ChessRook.ts
const ChessRook = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M5 20a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1z" }), path({ "d": "M10 2v2" }), path({ "d": "M14 2v2" }), path({ "d": "m17 18-1-9" }), path({ "d": "M6 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2" }), path({ "d": "M6 4h12" }), path({ "d": "m7 18 1-9" }));
};
//#endregion
//#region src/icons/ChevronDown.ts
const ChevronDown = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m6 9 6 6 6-6" }));
};
//#endregion
//#region src/icons/ChevronFirst.ts
const ChevronFirst = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m17 18-6-6 6-6" }), path({ "d": "M7 6v12" }));
};
//#endregion
//#region src/icons/ChevronLast.ts
const ChevronLast = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m7 18 6-6-6-6" }), path({ "d": "M17 6v12" }));
};
//#endregion
//#region src/icons/ChevronLeft.ts
const ChevronLeft = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m15 18-6-6 6-6" }));
};
//#endregion
//#region src/icons/ChevronRight.ts
const ChevronRight = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m9 18 6-6-6-6" }));
};
//#endregion
//#region src/icons/ChevronUp.ts
const ChevronUp = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m18 15-6-6-6 6" }));
};
//#endregion
//#region src/icons/ChevronsDownUp.ts
const ChevronsDownUp = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m7 20 5-5 5 5" }), path({ "d": "m7 4 5 5 5-5" }));
};
//#endregion
//#region src/icons/ChevronsDown.ts
const ChevronsDown = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m7 6 5 5 5-5" }), path({ "d": "m7 13 5 5 5-5" }));
};
//#endregion
//#region src/icons/ChevronsLeftRightEllipsis.ts
const ChevronsLeftRightEllipsis = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 12h.01" }), path({ "d": "M16 12h.01" }), path({ "d": "m17 7 5 5-5 5" }), path({ "d": "m7 7-5 5 5 5" }), path({ "d": "M8 12h.01" }));
};
//#endregion
//#region src/icons/ChevronsLeftRight.ts
const ChevronsLeftRight = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m9 7-5 5 5 5" }), path({ "d": "m15 7 5 5-5 5" }));
};
//#endregion
//#region src/icons/ChevronsLeft.ts
const ChevronsLeft = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m11 17-5-5 5-5" }), path({ "d": "m18 17-5-5 5-5" }));
};
//#endregion
//#region src/icons/ChevronsRightLeft.ts
const ChevronsRightLeft = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m20 17-5-5 5-5" }), path({ "d": "m4 17 5-5-5-5" }));
};
//#endregion
//#region src/icons/ChevronsRight.ts
const ChevronsRight = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m6 17 5-5-5-5" }), path({ "d": "m13 17 5-5-5-5" }));
};
//#endregion
//#region src/icons/ChevronsUpDown.ts
const ChevronsUpDown = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m7 15 5 5 5-5" }), path({ "d": "m7 9 5-5 5 5" }));
};
//#endregion
//#region src/icons/ChevronsUp.ts
const ChevronsUp = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m17 11-5-5-5 5" }), path({ "d": "m17 18-5-5-5 5" }));
};
//#endregion
//#region src/icons/Church.ts
const Church = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 9h4" }), path({ "d": "M12 7v5" }), path({ "d": "M14 21v-3a2 2 0 0 0-4 0v3" }), path({ "d": "m18 9 3.52 2.147a1 1 0 0 1 .48.854V19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6.999a1 1 0 0 1 .48-.854L6 9" }), path({ "d": "M6 21V7a1 1 0 0 1 .376-.782l5-3.999a1 1 0 0 1 1.249.001l5 4A1 1 0 0 1 18 7v14" }));
};
//#endregion
//#region src/icons/CigaretteOff.ts
const CigaretteOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13" }), path({ "d": "M18 8c0-2.5-2-2.5-2-5" }), path({ "d": "m2 2 20 20" }), path({ "d": "M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866" }), path({ "d": "M22 8c0-2.5-2-2.5-2-5" }), path({ "d": "M7 12v4" }));
};
//#endregion
//#region src/icons/Cigarette.ts
const Cigarette = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14" }), path({ "d": "M18 8c0-2.5-2-2.5-2-5" }), path({ "d": "M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" }), path({ "d": "M22 8c0-2.5-2-2.5-2-5" }), path({ "d": "M7 12v4" }));
};
//#endregion
//#region src/icons/CircleAlert.ts
const CircleAlert = (props = {}) => {
	const { circle, line } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), line({
		x1: "12",
		x2: "12",
		y1: "8",
		y2: "12"
	}), line({
		x1: "12",
		x2: "12.01",
		y1: "16",
		y2: "16"
	}));
};
//#endregion
//#region src/icons/CircleArrowDown.ts
const CircleArrowDown = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M12 8v8" }), path({ "d": "m8 12 4 4 4-4" }));
};
//#endregion
//#region src/icons/CircleArrowLeft.ts
const CircleArrowLeft = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "m12 8-4 4 4 4" }), path({ "d": "M16 12H8" }));
};
//#endregion
//#region src/icons/CircleArrowOutDownLeft.ts
const CircleArrowOutDownLeft = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 12a10 10 0 1 1 10 10" }), path({ "d": "m2 22 10-10" }), path({ "d": "M8 22H2v-6" }));
};
//#endregion
//#region src/icons/CircleArrowOutDownRight.ts
const CircleArrowOutDownRight = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 22a10 10 0 1 1 10-10" }), path({ "d": "M22 22 12 12" }), path({ "d": "M22 16v6h-6" }));
};
//#endregion
//#region src/icons/CircleArrowOutUpLeft.ts
const CircleArrowOutUpLeft = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 8V2h6" }), path({ "d": "m2 2 10 10" }), path({ "d": "M12 2A10 10 0 1 1 2 12" }));
};
//#endregion
//#region src/icons/CircleArrowOutUpRight.ts
const CircleArrowOutUpRight = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M22 12A10 10 0 1 1 12 2" }), path({ "d": "M22 2 12 12" }), path({ "d": "M16 2h6v6" }));
};
//#endregion
//#region src/icons/CircleArrowRight.ts
const CircleArrowRight = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "m12 16 4-4-4-4" }), path({ "d": "M8 12h8" }));
};
//#endregion
//#region src/icons/CircleArrowUp.ts
const CircleArrowUp = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "m16 12-4-4-4 4" }), path({ "d": "M12 16V8" }));
};
//#endregion
//#region src/icons/CircleCheckBig.ts
const CircleCheckBig = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21.801 10A10 10 0 1 1 17 3.335" }), path({ "d": "m9 11 3 3L22 4" }));
};
//#endregion
//#region src/icons/CircleCheck.ts
const CircleCheck = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "m9 12 2 2 4-4" }));
};
//#endregion
//#region src/icons/CircleChevronDown.ts
const CircleChevronDown = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "m16 10-4 4-4-4" }));
};
//#endregion
//#region src/icons/CircleChevronLeft.ts
const CircleChevronLeft = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "m14 16-4-4 4-4" }));
};
//#endregion
//#region src/icons/CircleChevronRight.ts
const CircleChevronRight = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "m10 8 4 4-4 4" }));
};
//#endregion
//#region src/icons/CircleChevronUp.ts
const CircleChevronUp = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "m8 14 4-4 4 4" }));
};
//#endregion
//#region src/icons/CircleDashed.ts
const CircleDashed = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10.1 2.182a10 10 0 0 1 3.8 0" }), path({ "d": "M13.9 21.818a10 10 0 0 1-3.8 0" }), path({ "d": "M17.609 3.721a10 10 0 0 1 2.69 2.7" }), path({ "d": "M2.182 13.9a10 10 0 0 1 0-3.8" }), path({ "d": "M20.279 17.609a10 10 0 0 1-2.7 2.69" }), path({ "d": "M21.818 10.1a10 10 0 0 1 0 3.8" }), path({ "d": "M3.721 6.391a10 10 0 0 1 2.7-2.69" }), path({ "d": "M6.391 20.279a10 10 0 0 1-2.69-2.7" }));
};
//#endregion
//#region src/icons/CircleDivide.ts
const CircleDivide = (props = {}) => {
	const { circle, line } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), line({
		x1: "8",
		x2: "16",
		y1: "12",
		y2: "12"
	}), line({
		x1: "12",
		x2: "12",
		y1: "16",
		y2: "16"
	}), line({
		x1: "12",
		x2: "12",
		y1: "8",
		y2: "8"
	}));
};
//#endregion
//#region src/icons/CircleDollarSign.ts
const CircleDollarSign = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" }), path({ "d": "M12 18V6" }));
};
//#endregion
//#region src/icons/CircleDotDashed.ts
const CircleDotDashed = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10.1 2.18a9.93 9.93 0 0 1 3.8 0" }), path({ "d": "M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7" }), path({ "d": "M21.82 10.1a9.93 9.93 0 0 1 0 3.8" }), path({ "d": "M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69" }), path({ "d": "M13.9 21.82a9.94 9.94 0 0 1-3.8 0" }), path({ "d": "M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7" }), path({ "d": "M2.18 13.9a9.93 9.93 0 0 1 0-3.8" }), path({ "d": "M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69" }), circle({
		cx: "12",
		cy: "12",
		"r": "1"
	}));
};
//#endregion
//#region src/icons/CircleDot.ts
const CircleDot = (props = {}) => {
	const { circle } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), circle({
		cx: "12",
		cy: "12",
		"r": "1"
	}));
};
//#endregion
//#region src/icons/CircleEllipsis.ts
const CircleEllipsis = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M17 12h.01" }), path({ "d": "M12 12h.01" }), path({ "d": "M7 12h.01" }));
};
//#endregion
//#region src/icons/CircleEqual.ts
const CircleEqual = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M7 10h10" }), path({ "d": "M7 14h10" }));
};
//#endregion
//#region src/icons/CircleFadingArrowUp.ts
const CircleFadingArrowUp = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 2a10 10 0 0 1 7.38 16.75" }), path({ "d": "m16 12-4-4-4 4" }), path({ "d": "M12 16V8" }), path({ "d": "M2.5 8.875a10 10 0 0 0-.5 3" }), path({ "d": "M2.83 16a10 10 0 0 0 2.43 3.4" }), path({ "d": "M4.636 5.235a10 10 0 0 1 .891-.857" }), path({ "d": "M8.644 21.42a10 10 0 0 0 7.631-.38" }));
};
//#endregion
//#region src/icons/CircleFadingPlus.ts
const CircleFadingPlus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 2a10 10 0 0 1 7.38 16.75" }), path({ "d": "M12 8v8" }), path({ "d": "M16 12H8" }), path({ "d": "M2.5 8.875a10 10 0 0 0-.5 3" }), path({ "d": "M2.83 16a10 10 0 0 0 2.43 3.4" }), path({ "d": "M4.636 5.235a10 10 0 0 1 .891-.857" }), path({ "d": "M8.644 21.42a10 10 0 0 0 7.631-.38" }));
};
//#endregion
//#region src/icons/CircleGauge.ts
const CircleGauge = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M15.6 2.7a10 10 0 1 0 5.7 5.7" }), circle({
		cx: "12",
		cy: "12",
		"r": "2"
	}), path({ "d": "M13.4 10.6 19 5" }));
};
//#endregion
//#region src/icons/CircleMinus.ts
const CircleMinus = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M8 12h8" }));
};
//#endregion
//#region src/icons/CircleOff.ts
const CircleOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m2 2 20 20" }), path({ "d": "M8.35 2.69A10 10 0 0 1 21.3 15.65" }), path({ "d": "M19.08 19.08A10 10 0 1 1 4.92 4.92" }));
};
//#endregion
//#region src/icons/CircleParkingOff.ts
const CircleParkingOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12.656 7H13a3 3 0 0 1 2.984 3.307" }), path({ "d": "M13 13H9" }), path({ "d": "M19.071 19.071A1 1 0 0 1 4.93 4.93" }), path({ "d": "m2 2 20 20" }), path({ "d": "M8.357 2.687a10 10 0 0 1 12.956 12.956" }), path({ "d": "M9 17V9" }));
};
//#endregion
//#region src/icons/CircleParking.ts
const CircleParking = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M9 17V7h4a3 3 0 0 1 0 6H9" }));
};
//#endregion
//#region src/icons/CirclePause.ts
const CirclePause = (props = {}) => {
	const { circle, line } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), line({
		x1: "10",
		x2: "10",
		y1: "15",
		y2: "9"
	}), line({
		x1: "14",
		x2: "14",
		y1: "15",
		y2: "9"
	}));
};
//#endregion
//#region src/icons/CirclePercent.ts
const CirclePercent = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "m15 9-6 6" }), path({ "d": "M9 9h.01" }), path({ "d": "M15 15h.01" }));
};
//#endregion
//#region src/icons/CirclePile.ts
const CirclePile = (props = {}) => {
	const { circle } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "19",
		"r": "2"
	}), circle({
		cx: "12",
		cy: "5",
		"r": "2"
	}), circle({
		cx: "16",
		cy: "12",
		"r": "2"
	}), circle({
		cx: "20",
		cy: "19",
		"r": "2"
	}), circle({
		cx: "4",
		cy: "19",
		"r": "2"
	}), circle({
		cx: "8",
		cy: "12",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/CirclePlay.ts
const CirclePlay = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z" }), circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}));
};
//#endregion
//#region src/icons/CirclePlus.ts
const CirclePlus = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M8 12h8" }), path({ "d": "M12 8v8" }));
};
//#endregion
//#region src/icons/CirclePoundSterling.ts
const CirclePoundSterling = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M10 16V9.5a1 1 0 0 1 5 0" }), path({ "d": "M8 12h4" }), path({ "d": "M8 16h7" }));
};
//#endregion
//#region src/icons/CirclePower.ts
const CirclePower = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M12 7v4" }), path({ "d": "M7.998 9.003a5 5 0 1 0 8-.005" }));
};
//#endregion
//#region src/icons/CircleQuestionMark.ts
const CircleQuestionMark = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }), path({ "d": "M12 17h.01" }));
};
//#endregion
//#region src/icons/CircleSlash2.ts
const CircleSlash2 = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M22 2 2 22" }));
};
//#endregion
//#region src/icons/CircleSlash.ts
const CircleSlash = (props = {}) => {
	const { circle, line } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), line({
		x1: "9",
		x2: "15",
		y1: "15",
		y2: "9"
	}));
};
//#endregion
//#region src/icons/CircleSmall.ts
const CircleSmall = (props = {}) => {
	const { circle } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "6"
	}));
};
//#endregion
//#region src/icons/CircleStar.ts
const CircleStar = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M11.051 7.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.867l-1.156-1.152a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z" }));
};
//#endregion
//#region src/icons/CircleStop.ts
const CircleStop = (props = {}) => {
	const { circle, rect } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), rect({
		"x": "9",
		"y": "9",
		width: "6",
		height: "6",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/CircleUserRound.ts
const CircleUserRound = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M17.925 20.056a6 6 0 0 0-11.851.001" }), circle({
		cx: "12",
		cy: "11",
		"r": "4"
	}), circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}));
};
//#endregion
//#region src/icons/CircleUser.ts
const CircleUser = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), circle({
		cx: "12",
		cy: "10",
		"r": "3"
	}), path({ "d": "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" }));
};
//#endregion
//#region src/icons/CircleX.ts
const CircleX = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "m15 9-6 6" }), path({ "d": "m9 9 6 6" }));
};
//#endregion
//#region src/icons/Circle.ts
const Circle = (props = {}) => {
	const { circle } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}));
};
//#endregion
//#region src/icons/CircuitBoard.ts
const CircuitBoard = (props = {}) => {
	const { rect, path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M11 9h4a2 2 0 0 0 2-2V3" }), circle({
		cx: "9",
		cy: "9",
		"r": "2"
	}), path({ "d": "M7 21v-4a2 2 0 0 1 2-2h4" }), circle({
		cx: "15",
		cy: "15",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/Citrus.ts
const Citrus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z" }), path({ "d": "M19.65 15.66A8 8 0 0 1 8.35 4.34" }), path({ "d": "m14 10-5.5 5.5" }), path({ "d": "M14 17.85V10H6.15" }));
};
//#endregion
//#region src/icons/Clapperboard.ts
const Clapperboard = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m12.296 3.464 3.02 3.956" }), path({ "d": "M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z" }), path({ "d": "M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }), path({ "d": "m6.18 5.276 3.1 3.899" }));
};
//#endregion
//#region src/icons/ClipboardCheck.ts
const ClipboardCheck = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "8",
		height: "4",
		"x": "8",
		"y": "2",
		rx: "1",
		ry: "1"
	}), path({ "d": "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }), path({ "d": "m9 14 2 2 4-4" }));
};
//#endregion
//#region src/icons/ClipboardClock.ts
const ClipboardClock = (props = {}) => {
	const { path, circle, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 14v2.2l1.6 1" }), path({ "d": "M16 4h2a2 2 0 0 1 2 2v.832" }), path({ "d": "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" }), circle({
		cx: "16",
		cy: "16",
		"r": "6"
	}), rect({
		"x": "8",
		"y": "2",
		width: "8",
		height: "4",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/ClipboardCopy.ts
const ClipboardCopy = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "8",
		height: "4",
		"x": "8",
		"y": "2",
		rx: "1",
		ry: "1"
	}), path({ "d": "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" }), path({ "d": "M16 4h2a2 2 0 0 1 2 2v4" }), path({ "d": "M21 14H11" }), path({ "d": "m15 10-4 4 4 4" }));
};
//#endregion
//#region src/icons/ClipboardList.ts
const ClipboardList = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "8",
		height: "4",
		"x": "8",
		"y": "2",
		rx: "1",
		ry: "1"
	}), path({ "d": "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }), path({ "d": "M12 11h4" }), path({ "d": "M12 16h4" }), path({ "d": "M8 11h.01" }), path({ "d": "M8 16h.01" }));
};
//#endregion
//#region src/icons/ClipboardMinus.ts
const ClipboardMinus = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "8",
		height: "4",
		"x": "8",
		"y": "2",
		rx: "1",
		ry: "1"
	}), path({ "d": "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }), path({ "d": "M9 14h6" }));
};
//#endregion
//#region src/icons/ClipboardPaste.ts
const ClipboardPaste = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 14h10" }), path({ "d": "M16 4h2a2 2 0 0 1 2 2v1.344" }), path({ "d": "m17 18 4-4-4-4" }), path({ "d": "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 1.793-1.113" }), rect({
		"x": "8",
		"y": "2",
		width: "8",
		height: "4",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/ClipboardPenLine.ts
const ClipboardPenLine = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "8",
		height: "4",
		"x": "8",
		"y": "2",
		rx: "1"
	}), path({ "d": "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5" }), path({ "d": "M16 4h2a2 2 0 0 1 1.73 1" }), path({ "d": "M8 18h1" }), path({ "d": "M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" }));
};
//#endregion
//#region src/icons/ClipboardPen.ts
const ClipboardPen = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 4h2a2 2 0 0 1 2 2v2" }), path({ "d": "M21.34 15.664a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" }), path({ "d": "M8 22H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }), rect({
		"x": "8",
		"y": "2",
		width: "8",
		height: "4",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/ClipboardPlus.ts
const ClipboardPlus = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "8",
		height: "4",
		"x": "8",
		"y": "2",
		rx: "1",
		ry: "1"
	}), path({ "d": "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }), path({ "d": "M9 14h6" }), path({ "d": "M12 17v-6" }));
};
//#endregion
//#region src/icons/ClipboardType.ts
const ClipboardType = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "8",
		height: "4",
		"x": "8",
		"y": "2",
		rx: "1",
		ry: "1"
	}), path({ "d": "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }), path({ "d": "M9 12v-1h6v1" }), path({ "d": "M11 17h2" }), path({ "d": "M12 11v6" }));
};
//#endregion
//#region src/icons/ClipboardX.ts
const ClipboardX = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "8",
		height: "4",
		"x": "8",
		"y": "2",
		rx: "1",
		ry: "1"
	}), path({ "d": "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }), path({ "d": "m15 11-6 6" }), path({ "d": "m9 11 6 6" }));
};
//#endregion
//#region src/icons/Clipboard.ts
const Clipboard = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "8",
		height: "4",
		"x": "8",
		"y": "2",
		rx: "1",
		ry: "1"
	}), path({ "d": "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }));
};
//#endregion
//#region src/icons/Clock1.ts
const Clock1 = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M12 6v6l2-4" }));
};
//#endregion
//#region src/icons/Clock10.ts
const Clock10 = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M12 6v6l-4-2" }));
};
//#endregion
//#region src/icons/Clock11.ts
const Clock11 = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M12 6v6l-2-4" }));
};
//#endregion
//#region src/icons/Clock12.ts
const Clock12 = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M12 6v6" }));
};
//#endregion
//#region src/icons/Clock2.ts
const Clock2 = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M12 6v6l4-2" }));
};
//#endregion
//#region src/icons/Clock3.ts
const Clock3 = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M12 6v6h4" }));
};
//#endregion
//#region src/icons/Clock4.ts
const Clock4 = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M12 6v6l4 2" }));
};
//#endregion
//#region src/icons/Clock5.ts
const Clock5 = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M12 6v6l2 4" }));
};
//#endregion
//#region src/icons/Clock6.ts
const Clock6 = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M12 6v10" }));
};
//#endregion
//#region src/icons/Clock7.ts
const Clock7 = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M12 6v6l-2 4" }));
};
//#endregion
//#region src/icons/Clock8.ts
const Clock8 = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M12 6v6l-4 2" }));
};
//#endregion
//#region src/icons/Clock9.ts
const Clock9 = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M12 6v6H8" }));
};
//#endregion
//#region src/icons/ClockAlert.ts
const ClockAlert = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 6v6l4 2" }), path({ "d": "M20 12v5" }), path({ "d": "M20 21h.01" }), path({ "d": "M21.25 8.2A10 10 0 1 0 16 21.16" }));
};
//#endregion
//#region src/icons/ClockArrowDown.ts
const ClockArrowDown = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 6v6l2 1" }), path({ "d": "M12.337 21.994a10 10 0 1 1 9.588-8.767" }), path({ "d": "m14 18 4 4 4-4" }), path({ "d": "M18 14v8" }));
};
//#endregion
//#region src/icons/ClockArrowUp.ts
const ClockArrowUp = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 6v6l1.56.78" }), path({ "d": "M13.227 21.925a10 10 0 1 1 8.767-9.588" }), path({ "d": "m14 18 4-4 4 4" }), path({ "d": "M18 22v-8" }));
};
//#endregion
//#region src/icons/ClockCheck.ts
const ClockCheck = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 6v6l4 2" }), path({ "d": "M22 12a10 10 0 1 0-11 9.95" }), path({ "d": "m22 16-5.5 5.5L14 19" }));
};
//#endregion
//#region src/icons/ClockFading.ts
const ClockFading = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 2a10 10 0 0 1 7.38 16.75" }), path({ "d": "M12 6v6l4 2" }), path({ "d": "M2.5 8.875a10 10 0 0 0-.5 3" }), path({ "d": "M2.83 16a10 10 0 0 0 2.43 3.4" }), path({ "d": "M4.636 5.235a10 10 0 0 1 .891-.857" }), path({ "d": "M8.644 21.42a10 10 0 0 0 7.631-.38" }));
};
//#endregion
//#region src/icons/ClockPlus.ts
const ClockPlus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 6v6l3.644 1.822" }), path({ "d": "M16 19h6" }), path({ "d": "M19 16v6" }), path({ "d": "M21.92 13.267a10 10 0 1 0-8.653 8.653" }));
};
//#endregion
//#region src/icons/Clock.ts
const Clock = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M12 6v6l4 2" }));
};
//#endregion
//#region src/icons/ClosedCaption.ts
const ClosedCaption = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 9.17a3 3 0 1 0 0 5.66" }), path({ "d": "M17 9.17a3 3 0 1 0 0 5.66" }), rect({
		"x": "2",
		"y": "5",
		width: "20",
		height: "14",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/CloudAlert.ts
const CloudAlert = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 12v4" }), path({ "d": "M12 20h.01" }), path({ "d": "M8.128 16.949A7 7 0 1 1 15.71 8h1.79a1 1 0 0 1 0 9h-1.642" }));
};
//#endregion
//#region src/icons/CloudBackup.ts
const CloudBackup = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21 15.251A4.5 4.5 0 0 0 17.5 8h-1.79A7 7 0 1 0 3 13.607" }), path({ "d": "M7 11v4h4" }), path({ "d": "M8 19a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5 4.82 4.82 0 0 0-3.41 1.41L7 15" }));
};
//#endregion
//#region src/icons/CloudCheck.ts
const CloudCheck = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m17 15-5.5 5.5L9 18" }), path({ "d": "M5.516 16.07A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 3.501 7.327" }));
};
//#endregion
//#region src/icons/CloudCog.ts
const CloudCog = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m10.852 19.772-.383.924" }), path({ "d": "m13.148 14.228.383-.923" }), path({ "d": "M13.148 19.772a3 3 0 1 0-2.296-5.544l-.383-.923" }), path({ "d": "m13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544" }), path({ "d": "m14.772 15.852.923-.383" }), path({ "d": "m14.772 18.148.923.383" }), path({ "d": "M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2" }), path({ "d": "m9.228 15.852-.923-.383" }), path({ "d": "m9.228 18.148-.923.383" }));
};
//#endregion
//#region src/icons/CloudDownload.ts
const CloudDownload = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 13v8l-4-4" }), path({ "d": "m12 21 4-4" }), path({ "d": "M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284" }));
};
//#endregion
//#region src/icons/CloudDrizzle.ts
const CloudDrizzle = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }), path({ "d": "M8 19v1" }), path({ "d": "M8 14v1" }), path({ "d": "M16 19v1" }), path({ "d": "M16 14v1" }), path({ "d": "M12 21v1" }), path({ "d": "M12 16v1" }));
};
//#endregion
//#region src/icons/CloudFog.ts
const CloudFog = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }), path({ "d": "M16 17H7" }), path({ "d": "M17 21H9" }));
};
//#endregion
//#region src/icons/CloudHail.ts
const CloudHail = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }), path({ "d": "M16 14v2" }), path({ "d": "M8 14v2" }), path({ "d": "M16 20h.01" }), path({ "d": "M8 20h.01" }), path({ "d": "M12 16v2" }), path({ "d": "M12 22h.01" }));
};
//#endregion
//#region src/icons/CloudLightning.ts
const CloudLightning = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" }), path({ "d": "m13 12-3 5h4l-3 5" }));
};
//#endregion
//#region src/icons/CloudMoonRain.ts
const CloudMoonRain = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 20v2" }), path({ "d": "M18.376 14.512a6 6 0 0 0 3.461-4.127c.148-.625-.659-.97-1.248-.714a4 4 0 0 1-5.259-5.26c.255-.589-.09-1.395-.716-1.248a6 6 0 0 0-4.594 5.36" }), path({ "d": "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24" }), path({ "d": "M7 19v2" }));
};
//#endregion
//#region src/icons/CloudMoon.ts
const CloudMoon = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13 16a3 3 0 0 1 0 6H7a5 5 0 1 1 4.9-6z" }), path({ "d": "M18.376 14.512a6 6 0 0 0 3.461-4.127c.148-.625-.659-.97-1.248-.714a4 4 0 0 1-5.259-5.26c.255-.589-.09-1.395-.716-1.248a6 6 0 0 0-4.594 5.36" }));
};
//#endregion
//#region src/icons/CloudOff.ts
const CloudOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10.94 5.274A7 7 0 0 1 15.71 10h1.79a4.5 4.5 0 0 1 4.222 6.057" }), path({ "d": "M18.796 18.81A4.5 4.5 0 0 1 17.5 19H9A7 7 0 0 1 5.79 5.78" }), path({ "d": "m2 2 20 20" }));
};
//#endregion
//#region src/icons/CloudRainWind.ts
const CloudRainWind = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }), path({ "d": "m9.2 22 3-7" }), path({ "d": "m9 13-3 7" }), path({ "d": "m17 13-3 7" }));
};
//#endregion
//#region src/icons/CloudRain.ts
const CloudRain = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }), path({ "d": "M16 14v6" }), path({ "d": "M8 14v6" }), path({ "d": "M12 16v6" }));
};
//#endregion
//#region src/icons/CloudSnow.ts
const CloudSnow = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }), path({ "d": "M8 15h.01" }), path({ "d": "M8 19h.01" }), path({ "d": "M12 17h.01" }), path({ "d": "M12 21h.01" }), path({ "d": "M16 15h.01" }), path({ "d": "M16 19h.01" }));
};
//#endregion
//#region src/icons/CloudSunRain.ts
const CloudSunRain = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 2v2" }), path({ "d": "m4.93 4.93 1.41 1.41" }), path({ "d": "M20 12h2" }), path({ "d": "m19.07 4.93-1.41 1.41" }), path({ "d": "M15.947 12.65a4 4 0 0 0-5.925-4.128" }), path({ "d": "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24" }), path({ "d": "M11 20v2" }), path({ "d": "M7 19v2" }));
};
//#endregion
//#region src/icons/CloudSun.ts
const CloudSun = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 2v2" }), path({ "d": "m4.93 4.93 1.41 1.41" }), path({ "d": "M20 12h2" }), path({ "d": "m19.07 4.93-1.41 1.41" }), path({ "d": "M15.947 12.65a4 4 0 0 0-5.925-4.128" }), path({ "d": "M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" }));
};
//#endregion
//#region src/icons/CloudSync.ts
const CloudSync = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m17 18-1.535 1.605a5 5 0 0 1-8-1.5" }), path({ "d": "M17 22v-4h-4" }), path({ "d": "M20.996 15.251A4.5 4.5 0 0 0 17.495 8h-1.79a7 7 0 1 0-12.709 5.607" }), path({ "d": "M7 10v4h4" }), path({ "d": "m7 14 1.535-1.605a5 5 0 0 1 8 1.5" }));
};
//#endregion
//#region src/icons/CloudUpload.ts
const CloudUpload = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 13v8" }), path({ "d": "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" }), path({ "d": "m8 17 4-4 4 4" }));
};
//#endregion
//#region src/icons/Cloud.ts
const Cloud = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" }));
};
//#endregion
//#region src/icons/Cloudy.ts
const Cloudy = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M17.5 12a1 1 0 1 1 0 9H9.006a7 7 0 1 1 6.702-9z" }), path({ "d": "M21.832 9A3 3 0 0 0 19 7h-2.207a5.5 5.5 0 0 0-10.72.61" }));
};
//#endregion
//#region src/icons/Clover.ts
const Clover = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16.17 7.83 2 22" }), path({ "d": "M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12" }), path({ "d": "m7.83 7.83 8.34 8.34" }));
};
//#endregion
//#region src/icons/Club.ts
const Club = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z" }), path({ "d": "M12 17.66L12 22" }));
};
//#endregion
//#region src/icons/CodeXml.ts
const CodeXml = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m18 16 4-4-4-4" }), path({ "d": "m6 8-4 4 4 4" }), path({ "d": "m14.5 4-5 16" }));
};
//#endregion
//#region src/icons/Code.ts
const Code = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m16 18 6-6-6-6" }), path({ "d": "m8 6-6 6 6 6" }));
};
//#endregion
//#region src/icons/Coffee.ts
const Coffee = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 2v2" }), path({ "d": "M14 2v2" }), path({ "d": "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" }), path({ "d": "M6 2v2" }));
};
//#endregion
//#region src/icons/Cog.ts
const Cog = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 10.27 7 3.34" }), path({ "d": "m11 13.73-4 6.93" }), path({ "d": "M12 22v-2" }), path({ "d": "M12 2v2" }), path({ "d": "M14 12h8" }), path({ "d": "m17 20.66-1-1.73" }), path({ "d": "m17 3.34-1 1.73" }), path({ "d": "M2 12h2" }), path({ "d": "m20.66 17-1.73-1" }), path({ "d": "m20.66 7-1.73 1" }), path({ "d": "m3.34 17 1.73-1" }), path({ "d": "m3.34 7 1.73 1" }), circle({
		cx: "12",
		cy: "12",
		"r": "2"
	}), circle({
		cx: "12",
		cy: "12",
		"r": "8"
	}));
};
//#endregion
//#region src/icons/Coins.ts
const Coins = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13.744 17.736a6 6 0 1 1-7.48-7.48" }), path({ "d": "M15 6h1v4" }), path({ "d": "m6.134 14.768.866-.5 2 3.464" }), circle({
		cx: "16",
		cy: "8",
		"r": "6"
	}));
};
//#endregion
//#region src/icons/Columns2.ts
const Columns2 = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M12 3v18" }));
};
//#endregion
//#region src/icons/Columns3Cog.ts
const Columns3Cog = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5" }), path({ "d": "m14.3 19.6 1-.4" }), path({ "d": "M15 3v7.5" }), path({ "d": "m15.2 16.9-.9-.3" }), path({ "d": "m16.6 21.7.3-.9" }), path({ "d": "m16.8 15.3-.4-1" }), path({ "d": "m19.1 15.2.3-.9" }), path({ "d": "m19.6 21.7-.4-1" }), path({ "d": "m20.7 16.8 1-.4" }), path({ "d": "m21.7 19.4-.9-.3" }), path({ "d": "M9 3v18" }), circle({
		cx: "18",
		cy: "18",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/Columns3.ts
const Columns3 = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M9 3v18" }), path({ "d": "M15 3v18" }));
};
//#endregion
//#region src/icons/Columns4.ts
const Columns4 = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M7.5 3v18" }), path({ "d": "M12 3v18" }), path({ "d": "M16.5 3v18" }));
};
//#endregion
//#region src/icons/Combine.ts
const Combine = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" }), path({ "d": "M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" }), path({ "d": "m7 15 3 3" }), path({ "d": "m7 21 3-3H5a2 2 0 0 1-2-2v-2" }), rect({
		"x": "14",
		"y": "14",
		width: "7",
		height: "7",
		rx: "1"
	}), rect({
		"x": "3",
		"y": "3",
		width: "7",
		height: "7",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/Command.ts
const Command = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" }));
};
//#endregion
//#region src/icons/Compass.ts
const Compass = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" }));
};
//#endregion
//#region src/icons/Component.ts
const Component = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" }), path({ "d": "M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z" }), path({ "d": "M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z" }), path({ "d": "M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z" }));
};
//#endregion
//#region src/icons/Computer.ts
const Computer = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "14",
		height: "8",
		"x": "5",
		"y": "2",
		rx: "2"
	}), rect({
		width: "20",
		height: "8",
		"x": "2",
		"y": "14",
		rx: "2"
	}), path({ "d": "M6 18h2" }), path({ "d": "M12 18h6" }));
};
//#endregion
//#region src/icons/ConciergeBell.ts
const ConciergeBell = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z" }), path({ "d": "M20 16a8 8 0 1 0-16 0" }), path({ "d": "M12 4v4" }), path({ "d": "M10 4h4" }));
};
//#endregion
//#region src/icons/Cone.ts
const Cone = (props = {}) => {
	const { path, ellipse } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98" }), ellipse({
		cx: "12",
		cy: "19",
		rx: "9",
		ry: "3"
	}));
};
//#endregion
//#region src/icons/Construction.ts
const Construction = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		"x": "2",
		"y": "6",
		width: "20",
		height: "8",
		rx: "1"
	}), path({ "d": "M17 14v7" }), path({ "d": "M7 14v7" }), path({ "d": "M17 3v3" }), path({ "d": "M7 3v3" }), path({ "d": "M10 14 2.3 6.3" }), path({ "d": "m14 6 7.7 7.7" }), path({ "d": "m8 6 8 8" }));
};
//#endregion
//#region src/icons/ContactRound.ts
const ContactRound = (props = {}) => {
	const { path, circle, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 2v2" }), path({ "d": "M17.915 22a6 6 0 0 0-12 0" }), path({ "d": "M8 2v2" }), circle({
		cx: "12",
		cy: "12",
		"r": "4"
	}), rect({
		"x": "3",
		"y": "4",
		width: "18",
		height: "18",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/Contact.ts
const Contact = (props = {}) => {
	const { path, circle, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 2v2" }), path({ "d": "M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" }), path({ "d": "M8 2v2" }), circle({
		cx: "12",
		cy: "11",
		"r": "3"
	}), rect({
		"x": "3",
		"y": "4",
		width: "18",
		height: "18",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/Container.ts
const Container = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z" }), path({ "d": "M10 21.9V14L2.1 9.1" }), path({ "d": "m10 14 11.9-6.9" }), path({ "d": "M14 19.8v-8.1" }), path({ "d": "M18 17.5V9.4" }));
};
//#endregion
//#region src/icons/Contrast.ts
const Contrast = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M12 18a6 6 0 0 0 0-12v12z" }));
};
//#endregion
//#region src/icons/Cookie.ts
const Cookie = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" }), path({ "d": "M8.5 8.5v.01" }), path({ "d": "M16 15.5v.01" }), path({ "d": "M12 12v.01" }), path({ "d": "M11 17v.01" }), path({ "d": "M7 14v.01" }));
};
//#endregion
//#region src/icons/CookingPot.ts
const CookingPot = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 12h20" }), path({ "d": "M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" }), path({ "d": "m4 8 16-4" }), path({ "d": "m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8" }));
};
//#endregion
//#region src/icons/CopyCheck.ts
const CopyCheck = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m12 15 2 2 4-4" }), rect({
		width: "14",
		height: "14",
		"x": "8",
		"y": "8",
		rx: "2",
		ry: "2"
	}), path({ "d": "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }));
};
//#endregion
//#region src/icons/CopyMinus.ts
const CopyMinus = (props = {}) => {
	const { line, rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, line({
		x1: "12",
		x2: "18",
		y1: "15",
		y2: "15"
	}), rect({
		width: "14",
		height: "14",
		"x": "8",
		"y": "8",
		rx: "2",
		ry: "2"
	}), path({ "d": "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }));
};
//#endregion
//#region src/icons/CopyPlus.ts
const CopyPlus = (props = {}) => {
	const { line, rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, line({
		x1: "15",
		x2: "15",
		y1: "12",
		y2: "18"
	}), line({
		x1: "12",
		x2: "18",
		y1: "15",
		y2: "15"
	}), rect({
		width: "14",
		height: "14",
		"x": "8",
		"y": "8",
		rx: "2",
		ry: "2"
	}), path({ "d": "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }));
};
//#endregion
//#region src/icons/CopySlash.ts
const CopySlash = (props = {}) => {
	const { line, rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, line({
		x1: "12",
		x2: "18",
		y1: "18",
		y2: "12"
	}), rect({
		width: "14",
		height: "14",
		"x": "8",
		"y": "8",
		rx: "2",
		ry: "2"
	}), path({ "d": "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }));
};
//#endregion
//#region src/icons/CopyX.ts
const CopyX = (props = {}) => {
	const { line, rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, line({
		x1: "12",
		x2: "18",
		y1: "12",
		y2: "18"
	}), line({
		x1: "12",
		x2: "18",
		y1: "18",
		y2: "12"
	}), rect({
		width: "14",
		height: "14",
		"x": "8",
		"y": "8",
		rx: "2",
		ry: "2"
	}), path({ "d": "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }));
};
//#endregion
//#region src/icons/Copy.ts
const Copy = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "14",
		height: "14",
		"x": "8",
		"y": "8",
		rx: "2",
		ry: "2"
	}), path({ "d": "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" }));
};
//#endregion
//#region src/icons/Copyleft.ts
const Copyleft = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M9.17 14.83a4 4 0 1 0 0-5.66" }));
};
//#endregion
//#region src/icons/Copyright.ts
const Copyright = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M14.83 14.83a4 4 0 1 1 0-5.66" }));
};
//#endregion
//#region src/icons/CornerDownLeft.ts
const CornerDownLeft = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20 4v7a4 4 0 0 1-4 4H4" }), path({ "d": "m9 10-5 5 5 5" }));
};
//#endregion
//#region src/icons/CornerDownRight.ts
const CornerDownRight = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m15 10 5 5-5 5" }), path({ "d": "M4 4v7a4 4 0 0 0 4 4h12" }));
};
//#endregion
//#region src/icons/CornerLeftDown.ts
const CornerLeftDown = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m14 15-5 5-5-5" }), path({ "d": "M20 4h-7a4 4 0 0 0-4 4v12" }));
};
//#endregion
//#region src/icons/CornerLeftUp.ts
const CornerLeftUp = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M14 9 9 4 4 9" }), path({ "d": "M20 20h-7a4 4 0 0 1-4-4V4" }));
};
//#endregion
//#region src/icons/CornerRightDown.ts
const CornerRightDown = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m10 15 5 5 5-5" }), path({ "d": "M4 4h7a4 4 0 0 1 4 4v12" }));
};
//#endregion
//#region src/icons/CornerRightUp.ts
const CornerRightUp = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m10 9 5-5 5 5" }), path({ "d": "M4 20h7a4 4 0 0 0 4-4V4" }));
};
//#endregion
//#region src/icons/CornerUpLeft.ts
const CornerUpLeft = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20 20v-7a4 4 0 0 0-4-4H4" }), path({ "d": "M9 14 4 9l5-5" }));
};
//#endregion
//#region src/icons/CornerUpRight.ts
const CornerUpRight = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m15 14 5-5-5-5" }), path({ "d": "M4 20v-7a4 4 0 0 1 4-4h12" }));
};
//#endregion
//#region src/icons/Cpu.ts
const Cpu = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 20v2" }), path({ "d": "M12 2v2" }), path({ "d": "M17 20v2" }), path({ "d": "M17 2v2" }), path({ "d": "M2 12h2" }), path({ "d": "M2 17h2" }), path({ "d": "M2 7h2" }), path({ "d": "M20 12h2" }), path({ "d": "M20 17h2" }), path({ "d": "M20 7h2" }), path({ "d": "M7 20v2" }), path({ "d": "M7 2v2" }), rect({
		"x": "4",
		"y": "4",
		width: "16",
		height: "16",
		rx: "2"
	}), rect({
		"x": "8",
		"y": "8",
		width: "8",
		height: "8",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/CreativeCommons.ts
const CreativeCommons = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1" }), path({ "d": "M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1" }));
};
//#endregion
//#region src/icons/CreditCard.ts
const CreditCard = (props = {}) => {
	const { rect, line } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "20",
		height: "14",
		"x": "2",
		"y": "5",
		rx: "2"
	}), line({
		x1: "2",
		x2: "22",
		y1: "10",
		y2: "10"
	}));
};
//#endregion
//#region src/icons/Croissant.ts
const Croissant = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10.2 18H4.774a1.5 1.5 0 0 1-1.352-.97 11 11 0 0 1 .132-6.487" }), path({ "d": "M18 10.2V4.774a1.5 1.5 0 0 0-.97-1.352 11 11 0 0 0-6.486.132" }), path({ "d": "M18 5a4 3 0 0 1 4 3 2 2 0 0 1-2 2 10 10 0 0 0-5.139 1.42" }), path({ "d": "M5 18a3 4 0 0 0 3 4 2 2 0 0 0 2-2 10 10 0 0 1 1.42-5.14" }), path({ "d": "M8.709 2.554a10 10 0 0 0-6.155 6.155 1.5 1.5 0 0 0 .676 1.626l9.807 5.42a2 2 0 0 0 2.718-2.718l-5.42-9.807a1.5 1.5 0 0 0-1.626-.676" }));
};
//#endregion
//#region src/icons/Crop.ts
const Crop = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 2v14a2 2 0 0 0 2 2h14" }), path({ "d": "M18 22V8a2 2 0 0 0-2-2H2" }));
};
//#endregion
//#region src/icons/Cross.ts
const Cross = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z" }));
};
//#endregion
//#region src/icons/Crosshair.ts
const Crosshair = (props = {}) => {
	const { circle, line } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), line({
		x1: "22",
		x2: "18",
		y1: "12",
		y2: "12"
	}), line({
		x1: "6",
		x2: "2",
		y1: "12",
		y2: "12"
	}), line({
		x1: "12",
		x2: "12",
		y1: "6",
		y2: "2"
	}), line({
		x1: "12",
		x2: "12",
		y1: "22",
		y2: "18"
	}));
};
//#endregion
//#region src/icons/Crown.ts
const Crown = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" }), path({ "d": "M5 21h14" }));
};
//#endregion
//#region src/icons/Cuboid.ts
const Cuboid = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 22v-8" }), path({ "d": "M2.336 8.89 10 14l11.715-7.029" }), path({ "d": "M22 14a2 2 0 0 1-.971 1.715l-10 6a2 2 0 0 1-2.138-.05l-6-4A2 2 0 0 1 2 16v-6a2 2 0 0 1 .971-1.715l10-6a2 2 0 0 1 2.138.05l6 4A2 2 0 0 1 22 8z" }));
};
//#endregion
//#region src/icons/CupSoda.ts
const CupSoda = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8" }), path({ "d": "M5 8h14" }), path({ "d": "M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0" }), path({ "d": "m12 8 1-6h2" }));
};
//#endregion
//#region src/icons/Currency.ts
const Currency = (props = {}) => {
	const { circle, line } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "8"
	}), line({
		x1: "3",
		x2: "6",
		y1: "3",
		y2: "6"
	}), line({
		x1: "21",
		x2: "18",
		y1: "3",
		y2: "6"
	}), line({
		x1: "3",
		x2: "6",
		y1: "21",
		y2: "18"
	}), line({
		x1: "21",
		x2: "18",
		y1: "21",
		y2: "18"
	}));
};
//#endregion
//#region src/icons/Cylinder.ts
const Cylinder = (props = {}) => {
	const { ellipse, path } = van.tags(svgNamespace);
	return LucideIcon(props, ellipse({
		cx: "12",
		cy: "5",
		rx: "9",
		ry: "3"
	}), path({ "d": "M3 5v14a9 3 0 0 0 18 0V5" }));
};
//#endregion
//#region src/icons/Dam.ts
const Dam = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 11.31c1.17.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }), path({ "d": "M11.75 18c.35.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }), path({ "d": "M2 10h4" }), path({ "d": "M2 14h4" }), path({ "d": "M2 18h4" }), path({ "d": "M2 6h4" }), path({ "d": "M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z" }));
};
//#endregion
//#region src/icons/DatabaseBackup.ts
const DatabaseBackup = (props = {}) => {
	const { ellipse, path } = van.tags(svgNamespace);
	return LucideIcon(props, ellipse({
		cx: "12",
		cy: "5",
		rx: "9",
		ry: "3"
	}), path({ "d": "M3 12a9 3 0 0 0 5 2.69" }), path({ "d": "M21 9.3V5" }), path({ "d": "M3 5v14a9 3 0 0 0 6.47 2.88" }), path({ "d": "M12 12v4h4" }), path({ "d": "M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16" }));
};
//#endregion
//#region src/icons/DatabaseSearch.ts
const DatabaseSearch = (props = {}) => {
	const { path, circle, ellipse } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21 11.693V5" }), path({ "d": "m22 22-1.875-1.875" }), path({ "d": "M3 12a9 3 0 0 0 8.697 2.998" }), path({ "d": "M3 5v14a9 3 0 0 0 9.28 2.999" }), circle({
		cx: "18",
		cy: "18",
		"r": "3"
	}), ellipse({
		cx: "12",
		cy: "5",
		rx: "9",
		ry: "3"
	}));
};
//#endregion
//#region src/icons/DatabaseZap.ts
const DatabaseZap = (props = {}) => {
	const { ellipse, path } = van.tags(svgNamespace);
	return LucideIcon(props, ellipse({
		cx: "12",
		cy: "5",
		rx: "9",
		ry: "3"
	}), path({ "d": "M3 5V19A9 3 0 0 0 15 21.84" }), path({ "d": "M21 5V8" }), path({ "d": "M21 12L18 17H22L19 22" }), path({ "d": "M3 12A9 3 0 0 0 14.59 14.87" }));
};
//#endregion
//#region src/icons/Database.ts
const Database = (props = {}) => {
	const { ellipse, path } = van.tags(svgNamespace);
	return LucideIcon(props, ellipse({
		cx: "12",
		cy: "5",
		rx: "9",
		ry: "3"
	}), path({ "d": "M3 5V19A9 3 0 0 0 21 19V5" }), path({ "d": "M3 12A9 3 0 0 0 21 12" }));
};
//#endregion
//#region src/icons/DecimalsArrowLeft.ts
const DecimalsArrowLeft = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m13 21-3-3 3-3" }), path({ "d": "M20 18H10" }), path({ "d": "M3 11h.01" }), rect({
		"x": "6",
		"y": "3",
		width: "5",
		height: "8",
		rx: "2.5"
	}));
};
//#endregion
//#region src/icons/DecimalsArrowRight.ts
const DecimalsArrowRight = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 18h10" }), path({ "d": "m17 21 3-3-3-3" }), path({ "d": "M3 11h.01" }), rect({
		"x": "15",
		"y": "3",
		width: "5",
		height: "8",
		rx: "2.5"
	}), rect({
		"x": "6",
		"y": "3",
		width: "5",
		height: "8",
		rx: "2.5"
	}));
};
//#endregion
//#region src/icons/Delete.ts
const Delete = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z" }), path({ "d": "m12 9 6 6" }), path({ "d": "m18 9-6 6" }));
};
//#endregion
//#region src/icons/Dessert.ts
const Dessert = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10.162 3.167A10 10 0 0 0 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4-.006 10 10 0 0 0-8.161-9.826" }), path({ "d": "M20.804 14.869a9 9 0 0 1-17.608 0" }), circle({
		cx: "12",
		cy: "4",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/Diameter.ts
const Diameter = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "19",
		cy: "19",
		"r": "2"
	}), circle({
		cx: "5",
		cy: "5",
		"r": "2"
	}), path({ "d": "M6.48 3.66a10 10 0 0 1 13.86 13.86" }), path({ "d": "m6.41 6.41 11.18 11.18" }), path({ "d": "M3.66 6.48a10 10 0 0 0 13.86 13.86" }));
};
//#endregion
//#region src/icons/DiamondMinus.ts
const DiamondMinus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z" }), path({ "d": "M8 12h8" }));
};
//#endregion
//#region src/icons/DiamondPercent.ts
const DiamondPercent = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z" }), path({ "d": "M9.2 9.2h.01" }), path({ "d": "m14.5 9.5-5 5" }), path({ "d": "M14.7 14.8h.01" }));
};
//#endregion
//#region src/icons/DiamondPlus.ts
const DiamondPlus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 8v8" }), path({ "d": "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z" }), path({ "d": "M8 12h8" }));
};
//#endregion
//#region src/icons/Diamond.ts
const Diamond = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z" }));
};
//#endregion
//#region src/icons/Dice1.ts
const Dice1 = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2",
		ry: "2"
	}), path({ "d": "M12 12h.01" }));
};
//#endregion
//#region src/icons/Dice2.ts
const Dice2 = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2",
		ry: "2"
	}), path({ "d": "M15 9h.01" }), path({ "d": "M9 15h.01" }));
};
//#endregion
//#region src/icons/Dice3.ts
const Dice3 = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2",
		ry: "2"
	}), path({ "d": "M16 8h.01" }), path({ "d": "M12 12h.01" }), path({ "d": "M8 16h.01" }));
};
//#endregion
//#region src/icons/Dice4.ts
const Dice4 = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2",
		ry: "2"
	}), path({ "d": "M16 8h.01" }), path({ "d": "M8 8h.01" }), path({ "d": "M8 16h.01" }), path({ "d": "M16 16h.01" }));
};
//#endregion
//#region src/icons/Dice5.ts
const Dice5 = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2",
		ry: "2"
	}), path({ "d": "M16 8h.01" }), path({ "d": "M8 8h.01" }), path({ "d": "M8 16h.01" }), path({ "d": "M16 16h.01" }), path({ "d": "M12 12h.01" }));
};
//#endregion
//#region src/icons/Dice6.ts
const Dice6 = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2",
		ry: "2"
	}), path({ "d": "M16 8h.01" }), path({ "d": "M16 12h.01" }), path({ "d": "M16 16h.01" }), path({ "d": "M8 8h.01" }), path({ "d": "M8 12h.01" }), path({ "d": "M8 16h.01" }));
};
//#endregion
//#region src/icons/Dices.ts
const Dices = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "12",
		height: "12",
		"x": "2",
		"y": "10",
		rx: "2",
		ry: "2"
	}), path({ "d": "m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6" }), path({ "d": "M6 18h.01" }), path({ "d": "M10 14h.01" }), path({ "d": "M15 6h.01" }), path({ "d": "M18 9h.01" }));
};
//#endregion
//#region src/icons/Diff.ts
const Diff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 3v14" }), path({ "d": "M5 10h14" }), path({ "d": "M5 21h14" }));
};
//#endregion
//#region src/icons/Disc2.ts
const Disc2 = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), circle({
		cx: "12",
		cy: "12",
		"r": "4"
	}), path({ "d": "M12 12h.01" }));
};
//#endregion
//#region src/icons/Disc3.ts
const Disc3 = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M6 12c0-1.7.7-3.2 1.8-4.2" }), circle({
		cx: "12",
		cy: "12",
		"r": "2"
	}), path({ "d": "M18 12c0 1.7-.7 3.2-1.8 4.2" }));
};
//#endregion
//#region src/icons/DiscAlbum.ts
const DiscAlbum = (props = {}) => {
	const { rect, circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), circle({
		cx: "12",
		cy: "12",
		"r": "5"
	}), path({ "d": "M12 12h.01" }));
};
//#endregion
//#region src/icons/Disc.ts
const Disc = (props = {}) => {
	const { circle } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), circle({
		cx: "12",
		cy: "12",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/Divide.ts
const Divide = (props = {}) => {
	const { circle, line } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "6",
		"r": "1"
	}), line({
		x1: "5",
		x2: "19",
		y1: "12",
		y2: "12"
	}), circle({
		cx: "12",
		cy: "18",
		"r": "1"
	}));
};
//#endregion
//#region src/icons/DnaOff.ts
const DnaOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8" }), path({ "d": "m17 6-2.891-2.891" }), path({ "d": "M2 15c3.333-3 6.667-3 10-3" }), path({ "d": "m2 2 20 20" }), path({ "d": "m20 9 .891.891" }), path({ "d": "M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1" }), path({ "d": "M3.109 14.109 4 15" }), path({ "d": "m6.5 12.5 1 1" }), path({ "d": "m7 18 2.891 2.891" }), path({ "d": "M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16" }));
};
//#endregion
//#region src/icons/Dna.ts
const Dna = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m10 16 1.5 1.5" }), path({ "d": "m14 8-1.5-1.5" }), path({ "d": "M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" }), path({ "d": "m16.5 10.5 1 1" }), path({ "d": "m17 6-2.891-2.891" }), path({ "d": "M2 15c6.667-6 13.333 0 20-6" }), path({ "d": "m20 9 .891.891" }), path({ "d": "M3.109 14.109 4 15" }), path({ "d": "m6.5 12.5 1 1" }), path({ "d": "m7 18 2.891 2.891" }), path({ "d": "M9 22c1.798-1.998 2.518-3.995 2.807-5.993" }));
};
//#endregion
//#region src/icons/Dock.ts
const Dock = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 8h20" }), rect({
		width: "20",
		height: "16",
		"x": "2",
		"y": "4",
		rx: "2"
	}), path({ "d": "M6 16h12" }));
};
//#endregion
//#region src/icons/Dog.ts
const Dog = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11.25 16.25h1.5L12 17z" }), path({ "d": "M16 14v.5" }), path({ "d": "M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309" }), path({ "d": "M8 14v.5" }), path({ "d": "M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5" }));
};
//#endregion
//#region src/icons/DollarSign.ts
const DollarSign = (props = {}) => {
	const { line, path } = van.tags(svgNamespace);
	return LucideIcon(props, line({
		x1: "12",
		x2: "12",
		y1: "2",
		y2: "22"
	}), path({ "d": "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" }));
};
//#endregion
//#region src/icons/Donut.ts
const Donut = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3" }), circle({
		cx: "12",
		cy: "12",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/DoorClosedLocked.ts
const DoorClosedLocked = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 12h.01" }), path({ "d": "M18 9V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" }), path({ "d": "M2 20h8" }), path({ "d": "M20 17v-2a2 2 0 1 0-4 0v2" }), rect({
		"x": "14",
		"y": "17",
		width: "8",
		height: "5",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/DoorClosed.ts
const DoorClosed = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 12h.01" }), path({ "d": "M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" }), path({ "d": "M2 20h20" }));
};
//#endregion
//#region src/icons/DoorOpen.ts
const DoorOpen = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 20H2" }), path({ "d": "M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z" }), path({ "d": "M11 4H8a2 2 0 0 0-2 2v14" }), path({ "d": "M14 12h.01" }), path({ "d": "M22 20h-3" }));
};
//#endregion
//#region src/icons/Dot.ts
const Dot = (props = {}) => {
	const { circle } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12.1",
		cy: "12.1",
		"r": "1"
	}));
};
//#endregion
//#region src/icons/Download.ts
const Download = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 15V3" }), path({ "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }), path({ "d": "m7 10 5 5 5-5" }));
};
//#endregion
//#region src/icons/DraftingCompass.ts
const DraftingCompass = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m12.99 6.74 1.93 3.44" }), path({ "d": "M19.136 12a10 10 0 0 1-14.271 0" }), path({ "d": "m21 21-2.16-3.84" }), path({ "d": "m3 21 8.02-14.26" }), circle({
		cx: "12",
		cy: "5",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/Drama.ts
const Drama = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 11h.01" }), path({ "d": "M14 6h.01" }), path({ "d": "M18 6h.01" }), path({ "d": "M6.5 13.1h.01" }), path({ "d": "M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3" }), path({ "d": "M17.4 9.9c-.8.8-2 .8-2.8 0" }), path({ "d": "M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7" }), path({ "d": "M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4" }));
};
//#endregion
//#region src/icons/Drill.ts
const Drill = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z" }), path({ "d": "M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8" }), path({ "d": "M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3" }), path({ "d": "M18 6h4" }), path({ "d": "m5 10-2 8" }), path({ "d": "m7 18 2-8" }));
};
//#endregion
//#region src/icons/Drone.ts
const Drone = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 10 7 7" }), path({ "d": "m10 14-3 3" }), path({ "d": "m14 10 3-3" }), path({ "d": "m14 14 3 3" }), path({ "d": "M14.205 4.139a4 4 0 1 1 5.439 5.863" }), path({ "d": "M19.637 14a4 4 0 1 1-5.432 5.868" }), path({ "d": "M4.367 10a4 4 0 1 1 5.438-5.862" }), path({ "d": "M9.795 19.862a4 4 0 1 1-5.429-5.873" }), rect({
		"x": "10",
		"y": "8",
		width: "4",
		height: "8",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/DropletOff.ts
const DropletOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M18.715 13.186C18.29 11.858 17.384 10.607 16 9.5c-2-1.6-3.5-4-4-6.5a10.7 10.7 0 0 1-.884 2.586" }), path({ "d": "m2 2 20 20" }), path({ "d": "M8.795 8.797A11 11 0 0 1 8 9.5C6 11.1 5 13 5 15a7 7 0 0 0 13.222 3.208" }));
};
//#endregion
//#region src/icons/Droplet.ts
const Droplet = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" }));
};
//#endregion
//#region src/icons/Droplets.ts
const Droplets = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" }), path({ "d": "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" }));
};
//#endregion
//#region src/icons/Drum.ts
const Drum = (props = {}) => {
	const { path, ellipse } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m2 2 8 8" }), path({ "d": "m22 2-8 8" }), ellipse({
		cx: "12",
		cy: "9",
		rx: "10",
		ry: "5"
	}), path({ "d": "M7 13.4v7.9" }), path({ "d": "M12 14v8" }), path({ "d": "M17 13.4v7.9" }), path({ "d": "M2 9v8a10 5 0 0 0 20 0V9" }));
};
//#endregion
//#region src/icons/Drumstick.ts
const Drumstick = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23" }), path({ "d": "m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59" }));
};
//#endregion
//#region src/icons/Dumbbell.ts
const Dumbbell = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z" }), path({ "d": "m2.5 21.5 1.4-1.4" }), path({ "d": "m20.1 3.9 1.4-1.4" }), path({ "d": "M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z" }), path({ "d": "m9.6 14.4 4.8-4.8" }));
};
//#endregion
//#region src/icons/EarOff.ts
const EarOff = (props = {}) => {
	const { path, line } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46" }), path({ "d": "M6 8.5c0-.75.13-1.47.36-2.14" }), path({ "d": "M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76" }), path({ "d": "M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18" }), line({
		x1: "2",
		x2: "22",
		y1: "2",
		y2: "22"
	}));
};
//#endregion
//#region src/icons/Ear.ts
const Ear = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0" }), path({ "d": "M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4" }));
};
//#endregion
//#region src/icons/EarthLock.ts
const EarthLock = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M7 3.34V5a3 3 0 0 0 3 3" }), path({ "d": "M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" }), path({ "d": "M21.54 15H17a2 2 0 0 0-2 2v4.54" }), path({ "d": "M12 2a10 10 0 1 0 9.54 13" }), path({ "d": "M20 6V4a2 2 0 1 0-4 0v2" }), rect({
		width: "8",
		height: "5",
		"x": "14",
		"y": "6",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/Earth.ts
const Earth = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21.54 15H17a2 2 0 0 0-2 2v4.54" }), path({ "d": "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" }), path({ "d": "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" }), circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}));
};
//#endregion
//#region src/icons/Eclipse.ts
const Eclipse = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M12 2a7 7 0 1 0 10 10" }));
};
//#endregion
//#region src/icons/EggFried.ts
const EggFried = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "11.5",
		cy: "12.5",
		"r": "3.5"
	}), path({ "d": "M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z" }));
};
//#endregion
//#region src/icons/EggOff.ts
const EggOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m2 2 20 20" }), path({ "d": "M20 14.347V14c0-6-4-12-8-12-1.078 0-2.157.436-3.157 1.19" }), path({ "d": "M6.206 6.21C4.871 8.4 4 11.2 4 14a8 8 0 0 0 14.568 4.568" }));
};
//#endregion
//#region src/icons/Egg.ts
const Egg = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12" }));
};
//#endregion
//#region src/icons/Ellipse.ts
const Ellipse = (props = {}) => {
	const { ellipse } = van.tags(svgNamespace);
	return LucideIcon(props, ellipse({
		cx: "12",
		cy: "12",
		rx: "10",
		ry: "6"
	}));
};
//#endregion
//#region src/icons/EllipsisVertical.ts
const EllipsisVertical = (props = {}) => {
	const { circle } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "1"
	}), circle({
		cx: "12",
		cy: "5",
		"r": "1"
	}), circle({
		cx: "12",
		cy: "19",
		"r": "1"
	}));
};
//#endregion
//#region src/icons/Ellipsis.ts
const Ellipsis = (props = {}) => {
	const { circle } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "1"
	}), circle({
		cx: "19",
		cy: "12",
		"r": "1"
	}), circle({
		cx: "5",
		cy: "12",
		"r": "1"
	}));
};
//#endregion
//#region src/icons/EqualApproximately.ts
const EqualApproximately = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0" }), path({ "d": "M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0" }));
};
//#endregion
//#region src/icons/EqualNot.ts
const EqualNot = (props = {}) => {
	const { line } = van.tags(svgNamespace);
	return LucideIcon(props, line({
		x1: "5",
		x2: "19",
		y1: "9",
		y2: "9"
	}), line({
		x1: "5",
		x2: "19",
		y1: "15",
		y2: "15"
	}), line({
		x1: "19",
		x2: "5",
		y1: "5",
		y2: "19"
	}));
};
//#endregion
//#region src/icons/Equal.ts
const Equal = (props = {}) => {
	const { line } = van.tags(svgNamespace);
	return LucideIcon(props, line({
		x1: "5",
		x2: "19",
		y1: "9",
		y2: "9"
	}), line({
		x1: "5",
		x2: "19",
		y1: "15",
		y2: "15"
	}));
};
//#endregion
//#region src/icons/Eraser.ts
const Eraser = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21" }), path({ "d": "m5.082 11.09 8.828 8.828" }));
};
//#endregion
//#region src/icons/EthernetPort.ts
const EthernetPort = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3z" }), path({ "d": "M6 8v1" }), path({ "d": "M10 8v1" }), path({ "d": "M14 8v1" }), path({ "d": "M18 8v1" }));
};
//#endregion
//#region src/icons/Euro.ts
const Euro = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 10h12" }), path({ "d": "M4 14h9" }), path({ "d": "M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2" }));
};
//#endregion
//#region src/icons/EvCharger.ts
const EvCharger = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5" }), path({ "d": "M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16" }), path({ "d": "M2 21h13" }), path({ "d": "M3 7h11" }), path({ "d": "m9 11-2 3h3l-2 3" }));
};
//#endregion
//#region src/icons/Expand.ts
const Expand = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m15 15 6 6" }), path({ "d": "m15 9 6-6" }), path({ "d": "M21 16v5h-5" }), path({ "d": "M21 8V3h-5" }), path({ "d": "M3 16v5h5" }), path({ "d": "m3 21 6-6" }), path({ "d": "M3 8V3h5" }), path({ "d": "M9 9 3 3" }));
};
//#endregion
//#region src/icons/ExternalLink.ts
const ExternalLink = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M15 3h6v6" }), path({ "d": "M10 14 21 3" }), path({ "d": "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }));
};
//#endregion
//#region src/icons/EyeClosed.ts
const EyeClosed = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m15 18-.722-3.25" }), path({ "d": "M2 8a10.645 10.645 0 0 0 20 0" }), path({ "d": "m20 15-1.726-2.05" }), path({ "d": "m4 15 1.726-2.05" }), path({ "d": "m9 18 .722-3.25" }));
};
//#endregion
//#region src/icons/EyeOff.ts
const EyeOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" }), path({ "d": "M14.084 14.158a3 3 0 0 1-4.242-4.242" }), path({ "d": "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" }), path({ "d": "m2 2 20 20" }));
};
//#endregion
//#region src/icons/Eye.ts
const Eye = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" }), circle({
		cx: "12",
		cy: "12",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/Factory.ts
const Factory = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 16h.01" }), path({ "d": "M16 16h.01" }), path({ "d": "M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" }), path({ "d": "M8 16h.01" }));
};
//#endregion
//#region src/icons/Fan.ts
const Fan = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z" }), path({ "d": "M12 12v.01" }));
};
//#endregion
//#region src/icons/FastForward.ts
const FastForward = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z" }), path({ "d": "M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z" }));
};
//#endregion
//#region src/icons/Feather.ts
const Feather = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z" }), path({ "d": "M16 8 2 22" }), path({ "d": "M17.5 15H9" }));
};
//#endregion
//#region src/icons/Fence.ts
const Fence = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" }), path({ "d": "M6 8h4" }), path({ "d": "M6 18h4" }), path({ "d": "m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" }), path({ "d": "M14 8h4" }), path({ "d": "M14 18h4" }), path({ "d": "m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" }));
};
//#endregion
//#region src/icons/FerrisWheel.ts
const FerrisWheel = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "2"
	}), path({ "d": "M12 2v4" }), path({ "d": "m6.8 15-3.5 2" }), path({ "d": "m20.7 7-3.5 2" }), path({ "d": "M6.8 9 3.3 7" }), path({ "d": "m20.7 17-3.5-2" }), path({ "d": "m9 22 3-8 3 8" }), path({ "d": "M8 22h8" }), path({ "d": "M18 18.7a9 9 0 1 0-12 0" }));
};
//#endregion
//#region src/icons/FileArchive.ts
const FileArchive = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v11.5" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "M8 12v-1" }), path({ "d": "M8 18v-2" }), path({ "d": "M8 7V6" }), circle({
		cx: "8",
		cy: "20",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/FileAxis3d.ts
const FileAxis3d = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "m8 18 4-4" }), path({ "d": "M8 10v8h8" }));
};
//#endregion
//#region src/icons/FileBadge.ts
const FileBadge = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13 22h5a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.3" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "m7.69 16.479 1.29 4.88a.5.5 0 0 1-.698.591l-1.843-.849a1 1 0 0 0-.879.001l-1.846.85a.5.5 0 0 1-.692-.593l1.29-4.88" }), circle({
		cx: "6",
		cy: "14",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/FileBox.ts
const FileBox = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M14.5 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.8" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "M11.7 14.2 7 17l-4.7-2.8" }), path({ "d": "M3 13.1a2 2 0 0 0-.999 1.76v3.24a2 2 0 0 0 .969 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01z" }), path({ "d": "M7 17v5" }));
};
//#endregion
//#region src/icons/FileBracesCorner.ts
const FileBracesCorner = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M14 22h4a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "M5 14a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1 1 1 0 0 1 1 1v2a1 1 0 0 0 1 1" }), path({ "d": "M9 22a1 1 0 0 0 1-1v-2a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-2a1 1 0 0 0-1-1" }));
};
//#endregion
//#region src/icons/FileBraces.ts
const FileBraces = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1" }), path({ "d": "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1" }));
};
//#endregion
//#region src/icons/FileChartColumnIncreasing.ts
const FileChartColumnIncreasing = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "M8 18v-2" }), path({ "d": "M12 18v-4" }), path({ "d": "M16 18v-6" }));
};
//#endregion
//#region src/icons/FileChartColumn.ts
const FileChartColumn = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "M8 18v-1" }), path({ "d": "M12 18v-6" }), path({ "d": "M16 18v-3" }));
};
//#endregion
//#region src/icons/FileChartLine.ts
const FileChartLine = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "m16 13-3.5 3.5-2-2L8 17" }));
};
//#endregion
//#region src/icons/FileChartPie.ts
const FileChartPie = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M15.941 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.704l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.512" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "M4.017 11.512a6 6 0 1 0 8.466 8.475" }), path({ "d": "M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z" }));
};
//#endregion
//#region src/icons/FileCheckCorner.ts
const FileCheckCorner = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10.5 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v6" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "m14 20 2 2 4-4" }));
};
//#endregion
//#region src/icons/FileCheck.ts
const FileCheck = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "m9 15 2 2 4-4" }));
};
//#endregion
//#region src/icons/FileClock.ts
const FileClock = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 22h2a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v2.85" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "M8 14v2.2l1.6 1" }), circle({
		cx: "8",
		cy: "16",
		"r": "6"
	}));
};
//#endregion
//#region src/icons/FileCodeCorner.ts
const FileCodeCorner = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "m5 16-3 3 3 3" }), path({ "d": "m9 22 3-3-3-3" }));
};
//#endregion
//#region src/icons/FileCode.ts
const FileCode = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "M10 12.5 8 15l2 2.5" }), path({ "d": "m14 12.5 2 2.5-2 2.5" }));
};
//#endregion
//#region src/icons/FileCog.ts
const FileCog = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M15 8a1 1 0 0 1-1-1V2a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8z" }), path({ "d": "M20 8v12a2 2 0 0 1-2 2h-4.182" }), path({ "d": "m3.305 19.53.923-.382" }), path({ "d": "M4 10.592V4a2 2 0 0 1 2-2h8" }), path({ "d": "m4.228 16.852-.924-.383" }), path({ "d": "m5.852 15.228-.383-.923" }), path({ "d": "m5.852 20.772-.383.924" }), path({ "d": "m8.148 15.228.383-.923" }), path({ "d": "m8.53 21.696-.382-.924" }), path({ "d": "m9.773 16.852.922-.383" }), path({ "d": "m9.773 19.148.922.383" }), circle({
		cx: "7",
		cy: "18",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/FileDiff.ts
const FileDiff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }), path({ "d": "M9 10h6" }), path({ "d": "M12 13V7" }), path({ "d": "M9 17h6" }));
};
//#endregion
//#region src/icons/FileDigit.ts
const FileDigit = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "M10 16h2v6" }), path({ "d": "M10 22h4" }), rect({
		"x": "2",
		"y": "16",
		width: "4",
		height: "6",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/FileDown.ts
const FileDown = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "M12 18v-6" }), path({ "d": "m9 15 3 3 3-3" }));
};
//#endregion
//#region src/icons/FileExclamationPoint.ts
const FileExclamationPoint = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }), path({ "d": "M12 9v4" }), path({ "d": "M12 17h.01" }));
};
//#endregion
//#region src/icons/FileHeadphone.ts
const FileHeadphone = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 6.835V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-.343" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "M2 19a2 2 0 0 1 4 0v1a2 2 0 0 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 0 1-4 0v-1a2 2 0 0 1 4 0" }));
};
//#endregion
//#region src/icons/FileHeart.ts
const FileHeart = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13 22h5a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v7" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "M3.62 18.8A2.25 2.25 0 1 1 7 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a1 1 0 0 1-1.507 0z" }));
};
//#endregion
//#region src/icons/FileImage.ts
const FileImage = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), circle({
		cx: "10",
		cy: "12",
		"r": "2"
	}), path({ "d": "m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22" }));
};
//#endregion
//#region src/icons/FileInput.ts
const FileInput = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 11V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "M2 15h10" }), path({ "d": "m9 18 3-3-3-3" }));
};
//#endregion
//#region src/icons/FileKey.ts
const FileKey = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "M4 12v6" }), path({ "d": "M4 14h2" }), path({ "d": "M9.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v4" }), circle({
		cx: "4",
		cy: "20",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/FileLock.ts
const FileLock = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 9.8V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "M9 17v-2a2 2 0 0 0-4 0v2" }), rect({
		width: "8",
		height: "5",
		"x": "3",
		"y": "17",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/FileMinusCorner.ts
const FileMinusCorner = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20 14V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "M14 18h6" }));
};
//#endregion
//#region src/icons/FileMinus.ts
const FileMinus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "M9 15h6" }));
};
//#endregion
//#region src/icons/FileMusic.ts
const FileMusic = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v10.35" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "M8 20v-7l3 1.474" }), circle({
		cx: "6",
		cy: "20",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/FileOutput.ts
const FileOutput = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4.226 20.925A2 2 0 0 0 6 22h12a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v3.127" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "m5 11-3 3" }), path({ "d": "m5 17-3-3h10" }));
};
//#endregion
//#region src/icons/FilePenLine.ts
const FilePenLine = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M14.364 13.634a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506l4.013-4.009a1 1 0 0 0-3.004-3.004z" }), path({ "d": "M14.487 7.858A1 1 0 0 1 14 7V2" }), path({ "d": "M20 19.645V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l2.516 2.516" }), path({ "d": "M8 18h1" }));
};
//#endregion
//#region src/icons/FilePen.ts
const FilePen = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "M10.378 12.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z" }));
};
//#endregion
//#region src/icons/FilePlay.ts
const FilePlay = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "M15.033 13.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56v-4.704a.645.645 0 0 1 .967-.56z" }));
};
//#endregion
//#region src/icons/FilePlusCorner.ts
const FilePlusCorner = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11.35 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5.35" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "M14 19h6" }), path({ "d": "M17 16v6" }));
};
//#endregion
//#region src/icons/FilePlus.ts
const FilePlus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "M9 15h6" }), path({ "d": "M12 18v-6" }));
};
//#endregion
//#region src/icons/FileQuestionMark.ts
const FileQuestionMark = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }), path({ "d": "M12 17h.01" }), path({ "d": "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" }));
};
//#endregion
//#region src/icons/FileScan.ts
const FileScan = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20 10V8a2.4 2.4 0 0 0-.706-1.704l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4.35" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "M16 14a2 2 0 0 0-2 2" }), path({ "d": "M16 22a2 2 0 0 1-2-2" }), path({ "d": "M20 14a2 2 0 0 1 2 2" }), path({ "d": "M20 22a2 2 0 0 0 2-2" }));
};
//#endregion
//#region src/icons/FileSearchCorner.ts
const FileSearchCorner = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11.1 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.589 3.588A2.4 2.4 0 0 1 20 8v3.25" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "m21 22-2.88-2.88" }), circle({
		cx: "16",
		cy: "17",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/FileSearch.ts
const FileSearch = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), circle({
		cx: "11.5",
		cy: "14.5",
		"r": "2.5"
	}), path({ "d": "M13.3 16.3 15 18" }));
};
//#endregion
//#region src/icons/FileSignal.ts
const FileSignal = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "M8 15h.01" }), path({ "d": "M11.5 13.5a2.5 2.5 0 0 1 0 3" }), path({ "d": "M15 12a5 5 0 0 1 0 6" }));
};
//#endregion
//#region src/icons/FileSliders.ts
const FileSliders = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "M8 12h8" }), path({ "d": "M10 11v2" }), path({ "d": "M8 17h8" }), path({ "d": "M14 16v2" }));
};
//#endregion
//#region src/icons/FileSpreadsheet.ts
const FileSpreadsheet = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "M8 13h2" }), path({ "d": "M14 13h2" }), path({ "d": "M8 17h2" }), path({ "d": "M14 17h2" }));
};
//#endregion
//#region src/icons/FileStack.ts
const FileStack = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1" }), path({ "d": "M16 16a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1" }), path({ "d": "M21 6a2 2 0 0 0-.586-1.414l-2-2A2 2 0 0 0 17 2h-3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1z" }));
};
//#endregion
//#region src/icons/FileSymlink.ts
const FileSymlink = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 11V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "m10 18 3-3-3-3" }));
};
//#endregion
//#region src/icons/FileTerminal.ts
const FileTerminal = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "m8 16 2-2-2-2" }), path({ "d": "M12 18h4" }));
};
//#endregion
//#region src/icons/FileText.ts
const FileText = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "M10 9H8" }), path({ "d": "M16 13H8" }), path({ "d": "M16 17H8" }));
};
//#endregion
//#region src/icons/FileTypeCorner.ts
const FileTypeCorner = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 22h6a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v6" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "M3 16v-1.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V16" }), path({ "d": "M6 22h2" }), path({ "d": "M7 14v8" }));
};
//#endregion
//#region src/icons/FileType.ts
const FileType = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "M11 18h2" }), path({ "d": "M12 12v6" }), path({ "d": "M9 13v-.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v.5" }));
};
//#endregion
//#region src/icons/FileUp.ts
const FileUp = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "M12 12v6" }), path({ "d": "m15 15-3-3-3 3" }));
};
//#endregion
//#region src/icons/FileUser.ts
const FileUser = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "M16 22a4 4 0 0 0-8 0" }), circle({
		cx: "12",
		cy: "15",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/FileVideoCamera.ts
const FileVideoCamera = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 12V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "m10 17.843 3.033-1.755a.64.64 0 0 1 .967.56v4.704a.65.65 0 0 1-.967.56L10 20.157" }), rect({
		width: "7",
		height: "6",
		"x": "3",
		"y": "16",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/FileVolume.ts
const FileVolume = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 11.55V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-1.95" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "M12 15a5 5 0 0 1 0 6" }), path({ "d": "M8 14.502a.5.5 0 0 0-.826-.381l-1.893 1.631a1 1 0 0 1-.651.243H3.5a.5.5 0 0 0-.5.501v3.006a.5.5 0 0 0 .5.501h1.129a1 1 0 0 1 .652.243l1.893 1.633a.5.5 0 0 0 .826-.38z" }));
};
//#endregion
//#region src/icons/FileXCorner.ts
const FileXCorner = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "m15 17 5 5" }), path({ "d": "m20 17-5 5" }));
};
//#endregion
//#region src/icons/FileX.ts
const FileX = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "m14.5 12.5-5 5" }), path({ "d": "m9.5 12.5 5 5" }));
};
//#endregion
//#region src/icons/File.ts
const File = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }));
};
//#endregion
//#region src/icons/Files.ts
const Files = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" }), path({ "d": "M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z" }), path({ "d": "M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1" }));
};
//#endregion
//#region src/icons/Film.ts
const Film = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M7 3v18" }), path({ "d": "M3 7.5h4" }), path({ "d": "M3 12h18" }), path({ "d": "M3 16.5h4" }), path({ "d": "M17 3v18" }), path({ "d": "M17 7.5h4" }), path({ "d": "M17 16.5h4" }));
};
//#endregion
//#region src/icons/FingerprintPattern.ts
const FingerprintPattern = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" }), path({ "d": "M14 13.12c0 2.38 0 6.38-1 8.88" }), path({ "d": "M17.29 21.02c.12-.6.43-2.3.5-3.02" }), path({ "d": "M2 12a10 10 0 0 1 18-6" }), path({ "d": "M2 16h.01" }), path({ "d": "M21.8 16c.2-2 .131-5.354 0-6" }), path({ "d": "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2" }), path({ "d": "M8.65 22c.21-.66.45-1.32.57-2" }), path({ "d": "M9 6.8a6 6 0 0 1 9 5.2v2" }));
};
//#endregion
//#region src/icons/FireExtinguisher.ts
const FireExtinguisher = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5" }), path({ "d": "M9 18h8" }), path({ "d": "M18 3h-3" }), path({ "d": "M11 3a6 6 0 0 0-6 6v11" }), path({ "d": "M5 13h4" }), path({ "d": "M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z" }));
};
//#endregion
//#region src/icons/FishOff.ts
const FishOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058" }), path({ "d": "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618" }), path({ "d": "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20" }));
};
//#endregion
//#region src/icons/FishSymbol.ts
const FishSymbol = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 16s9-15 20-4C11 23 2 8 2 8" }));
};
//#endregion
//#region src/icons/Fish.ts
const Fish = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z" }), path({ "d": "M18 12v.5" }), path({ "d": "M16 17.93a9.77 9.77 0 0 1 0-11.86" }), path({ "d": "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33" }), path({ "d": "M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" }), path({ "d": "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98" }));
};
//#endregion
//#region src/icons/FishingHook.ts
const FishingHook = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m17.586 11.414-5.93 5.93a1 1 0 0 1-8-8l3.137-3.137a.707.707 0 0 1 1.207.5V10" }), path({ "d": "M20.414 8.586 22 7" }), circle({
		cx: "19",
		cy: "10",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/FishingRod.ts
const FishingRod = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 11h1" }), path({ "d": "M8 15a2 2 0 0 1-4 0V3a1 1 0 0 1 1-1h.5C14 2 20 9 20 18v4" }), circle({
		cx: "18",
		cy: "18",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/FlagOff.ts
const FlagOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" }), path({ "d": "m2 2 20 20" }), path({ "d": "M4 22V4" }), path({ "d": "M7.656 2H8c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10.347" }));
};
//#endregion
//#region src/icons/FlagTriangleLeft.ts
const FlagTriangleLeft = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M18 22V2.8a.8.8 0 0 0-1.17-.71L5.45 7.78a.8.8 0 0 0 0 1.44L18 15.5" }));
};
//#endregion
//#region src/icons/FlagTriangleRight.ts
const FlagTriangleRight = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 22V2.8a.8.8 0 0 1 1.17-.71l11.38 5.69a.8.8 0 0 1 0 1.44L6 15.5" }));
};
//#endregion
//#region src/icons/Flag.ts
const Flag = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" }));
};
//#endregion
//#region src/icons/FlameKindling.ts
const FlameKindling = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z" }), path({ "d": "m5 22 14-4" }), path({ "d": "m5 18 14 4" }));
};
//#endregion
//#region src/icons/Flame.ts
const Flame = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" }));
};
//#endregion
//#region src/icons/FlashlightOff.ts
const FlashlightOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11.652 6H18" }), path({ "d": "M12 13v1" }), path({ "d": "M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-8a4 4 0 0 0-.8-2.4l-.6-.8A3 3 0 0 1 6 7V6" }), path({ "d": "m2 2 20 20" }), path({ "d": "M7.649 2H17a1 1 0 0 1 1 1v4a3 3 0 0 1-.6 1.8l-.6.8a4 4 0 0 0-.55 1.007" }));
};
//#endregion
//#region src/icons/Flashlight.ts
const Flashlight = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 13v1" }), path({ "d": "M17 2a1 1 0 0 1 1 1v4a3 3 0 0 1-.6 1.8l-.6.8A4 4 0 0 0 16 12v8a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-8a4 4 0 0 0-.8-2.4l-.6-.8A3 3 0 0 1 6 7V3a1 1 0 0 1 1-1z" }), path({ "d": "M6 6h12" }));
};
//#endregion
//#region src/icons/FlaskConicalOff.ts
const FlaskConicalOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 2v2.343" }), path({ "d": "M14 2v6.343" }), path({ "d": "m2 2 20 20" }), path({ "d": "M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563" }), path({ "d": "M6.453 15H15" }), path({ "d": "M8.5 2h7" }));
};
//#endregion
//#region src/icons/FlaskConical.ts
const FlaskConical = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2" }), path({ "d": "M6.453 15h11.094" }), path({ "d": "M8.5 2h7" }));
};
//#endregion
//#region src/icons/FlaskRound.ts
const FlaskRound = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 2v6.292a7 7 0 1 0 4 0V2" }), path({ "d": "M5 15h14" }), path({ "d": "M8.5 2h7" }));
};
//#endregion
//#region src/icons/FlipHorizontal2.ts
const FlipHorizontal2 = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m3 7 5 5-5 5V7" }), path({ "d": "m21 7-5 5 5 5V7" }), path({ "d": "M12 20v2" }), path({ "d": "M12 14v2" }), path({ "d": "M12 8v2" }), path({ "d": "M12 2v2" }));
};
//#endregion
//#region src/icons/FlipVertical2.ts
const FlipVertical2 = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m17 3-5 5-5-5h10" }), path({ "d": "m17 21-5-5-5 5h10" }), path({ "d": "M4 12H2" }), path({ "d": "M10 12H8" }), path({ "d": "M16 12h-2" }), path({ "d": "M22 12h-2" }));
};
//#endregion
//#region src/icons/Flower2.ts
const Flower2 = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1" }), circle({
		cx: "12",
		cy: "8",
		"r": "2"
	}), path({ "d": "M12 10v12" }), path({ "d": "M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z" }), path({ "d": "M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z" }));
};
//#endregion
//#region src/icons/Flower.ts
const Flower = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "3"
	}), path({ "d": "M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5" }), path({ "d": "M12 7.5V9" }), path({ "d": "M7.5 12H9" }), path({ "d": "M16.5 12H15" }), path({ "d": "M12 16.5V15" }), path({ "d": "m8 8 1.88 1.88" }), path({ "d": "M14.12 9.88 16 8" }), path({ "d": "m8 16 1.88-1.88" }), path({ "d": "M14.12 14.12 16 16" }));
};
//#endregion
//#region src/icons/Focus.ts
const Focus = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "3"
	}), path({ "d": "M3 7V5a2 2 0 0 1 2-2h2" }), path({ "d": "M17 3h2a2 2 0 0 1 2 2v2" }), path({ "d": "M21 17v2a2 2 0 0 1-2 2h-2" }), path({ "d": "M7 21H5a2 2 0 0 1-2-2v-2" }));
};
//#endregion
//#region src/icons/FoldHorizontal.ts
const FoldHorizontal = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 12h6" }), path({ "d": "M22 12h-6" }), path({ "d": "M12 2v2" }), path({ "d": "M12 8v2" }), path({ "d": "M12 14v2" }), path({ "d": "M12 20v2" }), path({ "d": "m19 9-3 3 3 3" }), path({ "d": "m5 15 3-3-3-3" }));
};
//#endregion
//#region src/icons/FoldVertical.ts
const FoldVertical = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 22v-6" }), path({ "d": "M12 8V2" }), path({ "d": "M4 12H2" }), path({ "d": "M10 12H8" }), path({ "d": "M16 12h-2" }), path({ "d": "M22 12h-2" }), path({ "d": "m15 19-3-3-3 3" }), path({ "d": "m15 5-3 3-3-3" }));
};
//#endregion
//#region src/icons/FolderArchive.ts
const FolderArchive = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "15",
		cy: "19",
		"r": "2"
	}), path({ "d": "M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1" }), path({ "d": "M15 11v-1" }), path({ "d": "M15 17v-2" }));
};
//#endregion
//#region src/icons/FolderCheck.ts
const FolderCheck = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }), path({ "d": "m9 13 2 2 4-4" }));
};
//#endregion
//#region src/icons/FolderClock.ts
const FolderClock = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 14v2.2l1.6 1" }), path({ "d": "M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2" }), circle({
		cx: "16",
		cy: "16",
		"r": "6"
	}));
};
//#endregion
//#region src/icons/FolderClosed.ts
const FolderClosed = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }), path({ "d": "M2 10h20" }));
};
//#endregion
//#region src/icons/FolderCode.ts
const FolderCode = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 10.5 8 13l2 2.5" }), path({ "d": "m14 10.5 2 2.5-2 2.5" }), path({ "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z" }));
};
//#endregion
//#region src/icons/FolderCog.ts
const FolderCog = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.98a2 2 0 0 1 1.69.9l.66 1.2A2 2 0 0 0 12 6h8a2 2 0 0 1 2 2v3.3" }), path({ "d": "m14.305 19.53.923-.382" }), path({ "d": "m15.228 16.852-.923-.383" }), path({ "d": "m16.852 15.228-.383-.923" }), path({ "d": "m16.852 20.772-.383.924" }), path({ "d": "m19.148 15.228.383-.923" }), path({ "d": "m19.53 21.696-.382-.924" }), path({ "d": "m20.772 16.852.924-.383" }), path({ "d": "m20.772 19.148.924.383" }), circle({
		cx: "18",
		cy: "18",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/FolderDot.ts
const FolderDot = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" }), circle({
		cx: "12",
		cy: "13",
		"r": "1"
	}));
};
//#endregion
//#region src/icons/FolderDown.ts
const FolderDown = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }), path({ "d": "M12 10v6" }), path({ "d": "m15 13-3 3-3-3" }));
};
//#endregion
//#region src/icons/FolderGit2.ts
const FolderGit2 = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M18 19a5 5 0 0 1-5-5v8" }), path({ "d": "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5" }), circle({
		cx: "13",
		cy: "12",
		"r": "2"
	}), circle({
		cx: "20",
		cy: "19",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/FolderGit.ts
const FolderGit = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "13",
		"r": "2"
	}), path({ "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }), path({ "d": "M14 13h3" }), path({ "d": "M7 13h3" }));
};
//#endregion
//#region src/icons/FolderHeart.ts
const FolderHeart = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10.638 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.417" }), path({ "d": "M14.62 18.8A2.25 2.25 0 1 1 18 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z" }));
};
//#endregion
//#region src/icons/FolderInput.ts
const FolderInput = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1" }), path({ "d": "M2 13h10" }), path({ "d": "m9 16 3-3-3-3" }));
};
//#endregion
//#region src/icons/FolderKanban.ts
const FolderKanban = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" }), path({ "d": "M8 10v4" }), path({ "d": "M12 10v2" }), path({ "d": "M16 10v6" }));
};
//#endregion
//#region src/icons/FolderKey.ts
const FolderKey = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.36" }), path({ "d": "M19 12v6" }), path({ "d": "M19 14h2" }), circle({
		cx: "19",
		cy: "20",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/FolderLock.ts
const FolderLock = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "8",
		height: "5",
		"x": "14",
		"y": "17",
		rx: "1"
	}), path({ "d": "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5" }), path({ "d": "M20 17v-2a2 2 0 1 0-4 0v2" }));
};
//#endregion
//#region src/icons/FolderMinus.ts
const FolderMinus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M9 13h6" }), path({ "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }));
};
//#endregion
//#region src/icons/FolderOpenDot.ts
const FolderOpenDot = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2" }), circle({
		cx: "14",
		cy: "15",
		"r": "1"
	}));
};
//#endregion
//#region src/icons/FolderOpen.ts
const FolderOpen = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" }));
};
//#endregion
//#region src/icons/FolderOutput.ts
const FolderOutput = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5" }), path({ "d": "M2 13h10" }), path({ "d": "m5 10-3 3 3 3" }));
};
//#endregion
//#region src/icons/FolderPen.ts
const FolderPen = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5" }), path({ "d": "M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" }));
};
//#endregion
//#region src/icons/FolderPlus.ts
const FolderPlus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 10v6" }), path({ "d": "M9 13h6" }), path({ "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }));
};
//#endregion
//#region src/icons/FolderRoot.ts
const FolderRoot = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" }), circle({
		cx: "12",
		cy: "13",
		"r": "2"
	}), path({ "d": "M12 15v5" }));
};
//#endregion
//#region src/icons/FolderSearch2.ts
const FolderSearch2 = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "11.5",
		cy: "12.5",
		"r": "2.5"
	}), path({ "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }), path({ "d": "M13.3 14.3 15 16" }));
};
//#endregion
//#region src/icons/FolderSearch.ts
const FolderSearch = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1" }), path({ "d": "m21 21-1.9-1.9" }), circle({
		cx: "17",
		cy: "17",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/FolderSymlink.ts
const FolderSymlink = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 9.35V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7" }), path({ "d": "m8 16 3-3-3-3" }));
};
//#endregion
//#region src/icons/FolderSync.ts
const FolderSync = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5" }), path({ "d": "M12 10v4h4" }), path({ "d": "m12 14 1.535-1.605a5 5 0 0 1 8 1.5" }), path({ "d": "M22 22v-4h-4" }), path({ "d": "m22 18-1.535 1.605a5 5 0 0 1-8-1.5" }));
};
//#endregion
//#region src/icons/FolderTree.ts
const FolderTree = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z" }), path({ "d": "M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z" }), path({ "d": "M3 5a2 2 0 0 0 2 2h3" }), path({ "d": "M3 3v13a2 2 0 0 0 2 2h3" }));
};
//#endregion
//#region src/icons/FolderUp.ts
const FolderUp = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }), path({ "d": "M12 10v6" }), path({ "d": "m9 13 3-3 3 3" }));
};
//#endregion
//#region src/icons/FolderX.ts
const FolderX = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }), path({ "d": "m9.5 10.5 5 5" }), path({ "d": "m14.5 10.5-5 5" }));
};
//#endregion
//#region src/icons/Folder.ts
const Folder = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }));
};
//#endregion
//#region src/icons/Folders.ts
const Folders = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20 5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2.5a1.5 1.5 0 0 1 1.2.6l.6.8a1.5 1.5 0 0 0 1.2.6z" }), path({ "d": "M3 8.268a2 2 0 0 0-1 1.738V19a2 2 0 0 0 2 2h11a2 2 0 0 0 1.732-1" }));
};
//#endregion
//#region src/icons/Footprints.ts
const Footprints = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" }), path({ "d": "M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" }), path({ "d": "M16 17h4" }), path({ "d": "M4 13h4" }));
};
//#endregion
//#region src/icons/Forklift.ts
const Forklift = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 12H5a2 2 0 0 0-2 2v5" }), path({ "d": "M15 19h7" }), path({ "d": "M16 19V2" }), path({ "d": "M6 12V7a2 2 0 0 1 2-2h2.172a2 2 0 0 1 1.414.586l3.828 3.828A2 2 0 0 1 16 10.828" }), path({ "d": "M7 19h4" }), circle({
		cx: "13",
		cy: "19",
		"r": "2"
	}), circle({
		cx: "5",
		cy: "19",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/Form.ts
const Form = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 14h6" }), path({ "d": "M4 2h10" }), rect({
		"x": "4",
		"y": "18",
		width: "16",
		height: "4",
		rx: "1"
	}), rect({
		"x": "4",
		"y": "6",
		width: "16",
		height: "4",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/Forward.ts
const Forward = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m15 17 5-5-5-5" }), path({ "d": "M4 18v-2a4 4 0 0 1 4-4h12" }));
};
//#endregion
//#region src/icons/Frame.ts
const Frame = (props = {}) => {
	const { line } = van.tags(svgNamespace);
	return LucideIcon(props, line({
		x1: "22",
		x2: "2",
		y1: "6",
		y2: "6"
	}), line({
		x1: "22",
		x2: "2",
		y1: "18",
		y2: "18"
	}), line({
		x1: "6",
		x2: "6",
		y1: "2",
		y2: "22"
	}), line({
		x1: "18",
		x2: "18",
		y1: "2",
		y2: "22"
	}));
};
//#endregion
//#region src/icons/Frown.ts
const Frown = (props = {}) => {
	const { circle, path, line } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M16 16s-1.5-2-4-2-4 2-4 2" }), line({
		x1: "9",
		x2: "9.01",
		y1: "9",
		y2: "9"
	}), line({
		x1: "15",
		x2: "15.01",
		y1: "9",
		y2: "9"
	}));
};
//#endregion
//#region src/icons/Fuel.ts
const Fuel = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5" }), path({ "d": "M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16" }), path({ "d": "M2 21h13" }), path({ "d": "M3 9h11" }));
};
//#endregion
//#region src/icons/Fullscreen.ts
const Fullscreen = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 7V5a2 2 0 0 1 2-2h2" }), path({ "d": "M17 3h2a2 2 0 0 1 2 2v2" }), path({ "d": "M21 17v2a2 2 0 0 1-2 2h-2" }), path({ "d": "M7 21H5a2 2 0 0 1-2-2v-2" }), rect({
		width: "10",
		height: "8",
		"x": "7",
		"y": "8",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/FunnelPlus.ts
const FunnelPlus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13.354 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l1.218-1.348" }), path({ "d": "M16 6h6" }), path({ "d": "M19 3v6" }));
};
//#endregion
//#region src/icons/FunnelX.ts
const FunnelX = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473" }), path({ "d": "m16.5 3.5 5 5" }), path({ "d": "m21.5 3.5-5 5" }));
};
//#endregion
//#region src/icons/Funnel.ts
const Funnel = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" }));
};
//#endregion
//#region src/icons/GalleryHorizontalEnd.ts
const GalleryHorizontalEnd = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 7v10" }), path({ "d": "M6 5v14" }), rect({
		width: "12",
		height: "18",
		"x": "10",
		"y": "3",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/GalleryHorizontal.ts
const GalleryHorizontal = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 3v18" }), rect({
		width: "12",
		height: "18",
		"x": "6",
		"y": "3",
		rx: "2"
	}), path({ "d": "M22 3v18" }));
};
//#endregion
//#region src/icons/GalleryThumbnails.ts
const GalleryThumbnails = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "14",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M4 21h1" }), path({ "d": "M9 21h1" }), path({ "d": "M14 21h1" }), path({ "d": "M19 21h1" }));
};
//#endregion
//#region src/icons/GalleryVerticalEnd.ts
const GalleryVerticalEnd = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M7 2h10" }), path({ "d": "M5 6h14" }), rect({
		width: "18",
		height: "12",
		"x": "3",
		"y": "10",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/GalleryVertical.ts
const GalleryVertical = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 2h18" }), rect({
		width: "18",
		height: "12",
		"x": "3",
		"y": "6",
		rx: "2"
	}), path({ "d": "M3 22h18" }));
};
//#endregion
//#region src/icons/Gamepad2.ts
const Gamepad2 = (props = {}) => {
	const { line, path } = van.tags(svgNamespace);
	return LucideIcon(props, line({
		x1: "6",
		x2: "10",
		y1: "11",
		y2: "11"
	}), line({
		x1: "8",
		x2: "8",
		y1: "9",
		y2: "13"
	}), line({
		x1: "15",
		x2: "15.01",
		y1: "12",
		y2: "12"
	}), line({
		x1: "18",
		x2: "18.01",
		y1: "10",
		y2: "10"
	}), path({ "d": "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" }));
};
//#endregion
//#region src/icons/GamepadDirectional.ts
const GamepadDirectional = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11.146 15.854a1.207 1.207 0 0 1 1.708 0l1.56 1.56A2 2 0 0 1 15 18.828V21a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2.172a2 2 0 0 1 .586-1.414z" }), path({ "d": "M18.828 15a2 2 0 0 1-1.414-.586l-1.56-1.56a1.207 1.207 0 0 1 0-1.708l1.56-1.56A2 2 0 0 1 18.828 9H21a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1z" }), path({ "d": "M6.586 14.414A2 2 0 0 1 5.172 15H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h2.172a2 2 0 0 1 1.414.586l1.56 1.56a1.207 1.207 0 0 1 0 1.708z" }), path({ "d": "M9 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2.172a2 2 0 0 1-.586 1.414l-1.56 1.56a1.207 1.207 0 0 1-1.708 0l-1.56-1.56A2 2 0 0 1 9 5.172z" }));
};
//#endregion
//#region src/icons/Gamepad.ts
const Gamepad = (props = {}) => {
	const { line, rect } = van.tags(svgNamespace);
	return LucideIcon(props, line({
		x1: "6",
		x2: "10",
		y1: "12",
		y2: "12"
	}), line({
		x1: "8",
		x2: "8",
		y1: "10",
		y2: "14"
	}), line({
		x1: "15",
		x2: "15.01",
		y1: "13",
		y2: "13"
	}), line({
		x1: "18",
		x2: "18.01",
		y1: "11",
		y2: "11"
	}), rect({
		width: "20",
		height: "12",
		"x": "2",
		"y": "6",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/Gauge.ts
const Gauge = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m12 14 4-4" }), path({ "d": "M3.34 19a10 10 0 1 1 17.32 0" }));
};
//#endregion
//#region src/icons/Gavel.ts
const Gavel = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381" }), path({ "d": "m16 16 6-6" }), path({ "d": "m21.5 10.5-8-8" }), path({ "d": "m8 8 6-6" }), path({ "d": "m8.5 7.5 8 8" }));
};
//#endregion
//#region src/icons/Gem.ts
const Gem = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10.5 3 8 9l4 13 4-13-2.5-6" }), path({ "d": "M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z" }), path({ "d": "M2 9h20" }));
};
//#endregion
//#region src/icons/GeorgianLari.ts
const GeorgianLari = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11.5 21a7.5 7.5 0 1 1 7.35-9" }), path({ "d": "M13 12V3" }), path({ "d": "M4 21h16" }), path({ "d": "M9 12V3" }));
};
//#endregion
//#region src/icons/Ghost.ts
const Ghost = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M9 10h.01" }), path({ "d": "M15 10h.01" }), path({ "d": "M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z" }));
};
//#endregion
//#region src/icons/Gift.ts
const Gift = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 7v14" }), path({ "d": "M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8" }), path({ "d": "M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5" }), rect({
		"x": "3",
		"y": "7",
		width: "18",
		height: "4",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/GitBranchMinus.ts
const GitBranchMinus = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M15 6a9 9 0 0 0-9 9V3" }), path({ "d": "M21 18h-6" }), circle({
		cx: "18",
		cy: "6",
		"r": "3"
	}), circle({
		cx: "6",
		cy: "18",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/GitBranchPlus.ts
const GitBranchPlus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 3v12" }), path({ "d": "M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" }), path({ "d": "M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" }), path({ "d": "M15 6a9 9 0 0 0-9 9" }), path({ "d": "M18 15v6" }), path({ "d": "M21 18h-6" }));
};
//#endregion
//#region src/icons/GitBranch.ts
const GitBranch = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M15 6a9 9 0 0 0-9 9V3" }), circle({
		cx: "18",
		cy: "6",
		"r": "3"
	}), circle({
		cx: "6",
		cy: "18",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/GitCommitHorizontal.ts
const GitCommitHorizontal = (props = {}) => {
	const { circle, line } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "3"
	}), line({
		x1: "3",
		x2: "9",
		y1: "12",
		y2: "12"
	}), line({
		x1: "15",
		x2: "21",
		y1: "12",
		y2: "12"
	}));
};
//#endregion
//#region src/icons/GitCommitVertical.ts
const GitCommitVertical = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 3v6" }), circle({
		cx: "12",
		cy: "12",
		"r": "3"
	}), path({ "d": "M12 15v6" }));
};
//#endregion
//#region src/icons/GitCompareArrows.ts
const GitCompareArrows = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "5",
		cy: "6",
		"r": "3"
	}), path({ "d": "M12 6h5a2 2 0 0 1 2 2v7" }), path({ "d": "m15 9-3-3 3-3" }), circle({
		cx: "19",
		cy: "18",
		"r": "3"
	}), path({ "d": "M12 18H7a2 2 0 0 1-2-2V9" }), path({ "d": "m9 15 3 3-3 3" }));
};
//#endregion
//#region src/icons/GitCompare.ts
const GitCompare = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "18",
		cy: "18",
		"r": "3"
	}), circle({
		cx: "6",
		cy: "6",
		"r": "3"
	}), path({ "d": "M13 6h3a2 2 0 0 1 2 2v7" }), path({ "d": "M11 18H8a2 2 0 0 1-2-2V9" }));
};
//#endregion
//#region src/icons/GitFork.ts
const GitFork = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "18",
		"r": "3"
	}), circle({
		cx: "6",
		cy: "6",
		"r": "3"
	}), circle({
		cx: "18",
		cy: "6",
		"r": "3"
	}), path({ "d": "M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" }), path({ "d": "M12 12v3" }));
};
//#endregion
//#region src/icons/GitGraph.ts
const GitGraph = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "5",
		cy: "6",
		"r": "3"
	}), path({ "d": "M5 9v6" }), circle({
		cx: "5",
		cy: "18",
		"r": "3"
	}), path({ "d": "M12 3v18" }), circle({
		cx: "19",
		cy: "6",
		"r": "3"
	}), path({ "d": "M16 15.7A9 9 0 0 0 19 9" }));
};
//#endregion
//#region src/icons/GitMergeConflict.ts
const GitMergeConflict = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 6h4a2 2 0 0 1 2 2v7" }), path({ "d": "M6 12v9" }), path({ "d": "M9 3 3 9" }), path({ "d": "M9 9 3 3" }), circle({
		cx: "18",
		cy: "18",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/GitMerge.ts
const GitMerge = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "18",
		cy: "18",
		"r": "3"
	}), circle({
		cx: "6",
		cy: "6",
		"r": "3"
	}), path({ "d": "M6 21V9a9 9 0 0 0 9 9" }));
};
//#endregion
//#region src/icons/GitPullRequestArrow.ts
const GitPullRequestArrow = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "5",
		cy: "6",
		"r": "3"
	}), path({ "d": "M5 9v12" }), circle({
		cx: "19",
		cy: "18",
		"r": "3"
	}), path({ "d": "m15 9-3-3 3-3" }), path({ "d": "M12 6h5a2 2 0 0 1 2 2v7" }));
};
//#endregion
//#region src/icons/GitPullRequestClosed.ts
const GitPullRequestClosed = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "6",
		cy: "6",
		"r": "3"
	}), path({ "d": "M6 9v12" }), path({ "d": "m21 3-6 6" }), path({ "d": "m21 9-6-6" }), path({ "d": "M18 11.5V15" }), circle({
		cx: "18",
		cy: "18",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/GitPullRequestCreateArrow.ts
const GitPullRequestCreateArrow = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "5",
		cy: "6",
		"r": "3"
	}), path({ "d": "M5 9v12" }), path({ "d": "m15 9-3-3 3-3" }), path({ "d": "M12 6h5a2 2 0 0 1 2 2v3" }), path({ "d": "M19 15v6" }), path({ "d": "M22 18h-6" }));
};
//#endregion
//#region src/icons/GitPullRequestCreate.ts
const GitPullRequestCreate = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "6",
		cy: "6",
		"r": "3"
	}), path({ "d": "M6 9v12" }), path({ "d": "M13 6h3a2 2 0 0 1 2 2v3" }), path({ "d": "M18 15v6" }), path({ "d": "M21 18h-6" }));
};
//#endregion
//#region src/icons/GitPullRequestDraft.ts
const GitPullRequestDraft = (props = {}) => {
	const { circle, path, line } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "18",
		cy: "18",
		"r": "3"
	}), circle({
		cx: "6",
		cy: "6",
		"r": "3"
	}), path({ "d": "M18 6V5" }), path({ "d": "M18 11v-1" }), line({
		x1: "6",
		x2: "6",
		y1: "9",
		y2: "21"
	}));
};
//#endregion
//#region src/icons/GitPullRequest.ts
const GitPullRequest = (props = {}) => {
	const { circle, path, line } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "18",
		cy: "18",
		"r": "3"
	}), circle({
		cx: "6",
		cy: "6",
		"r": "3"
	}), path({ "d": "M13 6h3a2 2 0 0 1 2 2v7" }), line({
		x1: "6",
		x2: "6",
		y1: "9",
		y2: "21"
	}));
};
//#endregion
//#region src/icons/GlassWater.ts
const GlassWater = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z" }), path({ "d": "M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0" }));
};
//#endregion
//#region src/icons/Glasses.ts
const Glasses = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "6",
		cy: "15",
		"r": "4"
	}), circle({
		cx: "18",
		cy: "15",
		"r": "4"
	}), path({ "d": "M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2" }), path({ "d": "M2.5 13 5 7c.7-1.3 1.4-2 3-2" }), path({ "d": "M21.5 13 19 7c-.7-1.3-1.5-2-3-2" }));
};
//#endregion
//#region src/icons/GlobeLock.ts
const GlobeLock = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13" }), path({ "d": "M2 12h8.5" }), path({ "d": "M20 6V4a2 2 0 1 0-4 0v2" }), rect({
		width: "8",
		height: "5",
		"x": "14",
		"y": "6",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/GlobeOff.ts
const GlobeOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10.114 4.462A14.5 14.5 0 0 1 12 2a10 10 0 0 1 9.313 13.643" }), path({ "d": "M15.557 15.556A14.5 14.5 0 0 1 12 22 10 10 0 0 1 4.929 4.929" }), path({ "d": "M15.892 10.234A14.5 14.5 0 0 0 12 2a10 10 0 0 0-3.643.687" }), path({ "d": "M17.656 12H22" }), path({ "d": "M19.071 19.071A10 10 0 0 1 12 22 14.5 14.5 0 0 1 8.44 8.45" }), path({ "d": "M2 12h10" }), path({ "d": "m2 2 20 20" }));
};
//#endregion
//#region src/icons/GlobeX.ts
const GlobeX = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m16 3 5 5" }), path({ "d": "M2 12h20A10 10 0 1 1 12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 4-10" }), path({ "d": "m21 3-5 5" }));
};
//#endregion
//#region src/icons/Globe.ts
const Globe = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" }), path({ "d": "M2 12h20" }));
};
//#endregion
//#region src/icons/Goal.ts
const Goal = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 13V2l8 4-8 4" }), path({ "d": "M20.561 10.222a9 9 0 1 1-12.55-5.29" }), path({ "d": "M8.002 9.997a5 5 0 1 0 8.9 2.02" }));
};
//#endregion
//#region src/icons/Gpu.ts
const Gpu = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 17h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H2" }), path({ "d": "M2 21V3" }), path({ "d": "M7 17v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3" }), circle({
		cx: "16",
		cy: "11",
		"r": "2"
	}), circle({
		cx: "8",
		cy: "11",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/GraduationCap.ts
const GraduationCap = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" }), path({ "d": "M22 10v6" }), path({ "d": "M6 12.5V16a6 3 0 0 0 12 0v-3.5" }));
};
//#endregion
//#region src/icons/Grape.ts
const Grape = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M22 5V2l-5.89 5.89" }), circle({
		cx: "16.6",
		cy: "15.89",
		"r": "3"
	}), circle({
		cx: "8.11",
		cy: "7.4",
		"r": "3"
	}), circle({
		cx: "12.35",
		cy: "11.65",
		"r": "3"
	}), circle({
		cx: "13.91",
		cy: "5.85",
		"r": "3"
	}), circle({
		cx: "18.15",
		cy: "10.09",
		"r": "3"
	}), circle({
		cx: "6.56",
		cy: "13.2",
		"r": "3"
	}), circle({
		cx: "10.8",
		cy: "17.44",
		"r": "3"
	}), circle({
		cx: "5",
		cy: "19",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/Grid2x2Check.ts
const Grid2x2Check = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3" }), path({ "d": "m16 19 2 2 4-4" }));
};
//#endregion
//#region src/icons/Grid2x2Plus.ts
const Grid2x2Plus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3" }), path({ "d": "M16 19h6" }), path({ "d": "M19 22v-6" }));
};
//#endregion
//#region src/icons/Grid2x2X.ts
const Grid2x2X = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3" }), path({ "d": "m16 16 5 5" }), path({ "d": "m16 21 5-5" }));
};
//#endregion
//#region src/icons/Grid2x2.ts
const Grid2x2 = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 3v18" }), path({ "d": "M3 12h18" }), rect({
		"x": "3",
		"y": "3",
		width: "18",
		height: "18",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/Grid3x2.ts
const Grid3x2 = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M15 3v18" }), path({ "d": "M3 12h18" }), path({ "d": "M9 3v18" }), rect({
		"x": "3",
		"y": "3",
		width: "18",
		height: "18",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/Grid3x3.ts
const Grid3x3 = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M3 9h18" }), path({ "d": "M3 15h18" }), path({ "d": "M9 3v18" }), path({ "d": "M15 3v18" }));
};
//#endregion
//#region src/icons/GripHorizontal.ts
const GripHorizontal = (props = {}) => {
	const { circle } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "9",
		"r": "1"
	}), circle({
		cx: "19",
		cy: "9",
		"r": "1"
	}), circle({
		cx: "5",
		cy: "9",
		"r": "1"
	}), circle({
		cx: "12",
		cy: "15",
		"r": "1"
	}), circle({
		cx: "19",
		cy: "15",
		"r": "1"
	}), circle({
		cx: "5",
		cy: "15",
		"r": "1"
	}));
};
//#endregion
//#region src/icons/GripVertical.ts
const GripVertical = (props = {}) => {
	const { circle } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "9",
		cy: "12",
		"r": "1"
	}), circle({
		cx: "9",
		cy: "5",
		"r": "1"
	}), circle({
		cx: "9",
		cy: "19",
		"r": "1"
	}), circle({
		cx: "15",
		cy: "12",
		"r": "1"
	}), circle({
		cx: "15",
		cy: "5",
		"r": "1"
	}), circle({
		cx: "15",
		cy: "19",
		"r": "1"
	}));
};
//#endregion
//#region src/icons/Grip.ts
const Grip = (props = {}) => {
	const { circle } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "5",
		"r": "1"
	}), circle({
		cx: "19",
		cy: "5",
		"r": "1"
	}), circle({
		cx: "5",
		cy: "5",
		"r": "1"
	}), circle({
		cx: "12",
		cy: "12",
		"r": "1"
	}), circle({
		cx: "19",
		cy: "12",
		"r": "1"
	}), circle({
		cx: "5",
		cy: "12",
		"r": "1"
	}), circle({
		cx: "12",
		cy: "19",
		"r": "1"
	}), circle({
		cx: "19",
		cy: "19",
		"r": "1"
	}), circle({
		cx: "5",
		cy: "19",
		"r": "1"
	}));
};
//#endregion
//#region src/icons/Group.ts
const Group = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 7V5c0-1.1.9-2 2-2h2" }), path({ "d": "M17 3h2c1.1 0 2 .9 2 2v2" }), path({ "d": "M21 17v2c0 1.1-.9 2-2 2h-2" }), path({ "d": "M7 21H5c-1.1 0-2-.9-2-2v-2" }), rect({
		width: "7",
		height: "5",
		"x": "7",
		"y": "7",
		rx: "1"
	}), rect({
		width: "7",
		height: "5",
		"x": "10",
		"y": "12",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/Guitar.ts
const Guitar = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m11.9 12.1 4.514-4.514" }), path({ "d": "M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z" }), path({ "d": "m6 16 2 2" }), path({ "d": "M8.23 9.85A3 3 0 0 1 11 8a5 5 0 0 1 5 5 3 3 0 0 1-1.85 2.77l-.92.38A2 2 0 0 0 12 18a4 4 0 0 1-4 4 6 6 0 0 1-6-6 4 4 0 0 1 4-4 2 2 0 0 0 1.85-1.23z" }));
};
//#endregion
//#region src/icons/Ham.ts
const Ham = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856" }), path({ "d": "M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288" }), path({ "d": "M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025" }), path({ "d": "m8.5 16.5-1-1" }));
};
//#endregion
//#region src/icons/Hamburger.ts
const Hamburger = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 16H4a2 2 0 1 1 0-4h16a2 2 0 1 1 0 4h-4.25" }), path({ "d": "M5 12a2 2 0 0 1-2-2 9 7 0 0 1 18 0 2 2 0 0 1-2 2" }), path({ "d": "M5 16a2 2 0 0 0-2 2 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 2 2 0 0 0-2-2q0 0 0 0" }), path({ "d": "m6.67 12 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" }));
};
//#endregion
//#region src/icons/Hammer.ts
const Hammer = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9" }), path({ "d": "m18 15 4-4" }), path({ "d": "m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" }));
};
//#endregion
//#region src/icons/HandCoins.ts
const HandCoins = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17" }), path({ "d": "m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" }), path({ "d": "m2 16 6 6" }), circle({
		cx: "16",
		cy: "9",
		"r": "2.9"
	}), circle({
		cx: "6",
		cy: "5",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/HandFist.ts
const HandFist = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12.035 17.012a3 3 0 0 0-3-3l-.311-.002a.72.72 0 0 1-.505-1.229l1.195-1.195A2 2 0 0 1 10.828 11H12a2 2 0 0 0 0-4H9.243a3 3 0 0 0-2.122.879l-2.707 2.707A4.83 4.83 0 0 0 3 14a8 8 0 0 0 8 8h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v2a2 2 0 1 0 4 0" }), path({ "d": "M13.888 9.662A2 2 0 0 0 17 8V5A2 2 0 1 0 13 5" }), path({ "d": "M9 5A2 2 0 1 0 5 5V10" }), path({ "d": "M9 7V4A2 2 0 1 1 13 4V7.268" }));
};
//#endregion
//#region src/icons/HandGrab.ts
const HandGrab = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4" }), path({ "d": "M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" }), path({ "d": "M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5" }), path({ "d": "M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2" }), path({ "d": "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0" }));
};
//#endregion
//#region src/icons/HandHeart.ts
const HandHeart = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 14h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" }), path({ "d": "m14.45 13.39 5.05-4.694C20.196 8 21 6.85 21 5.75a2.75 2.75 0 0 0-4.797-1.837.276.276 0 0 1-.406 0A2.75 2.75 0 0 0 11 5.75c0 1.2.802 2.248 1.5 2.946L16 11.95" }), path({ "d": "m2 15 6 6" }), path({ "d": "m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a1 1 0 0 0-2.75-2.91" }));
};
//#endregion
//#region src/icons/HandHelping.ts
const HandHelping = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" }), path({ "d": "m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" }), path({ "d": "m2 13 6 6" }));
};
//#endregion
//#region src/icons/HandMetal.ts
const HandMetal = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4" }), path({ "d": "M14 11V9a2 2 0 1 0-4 0v2" }), path({ "d": "M10 10.5V5a2 2 0 1 0-4 0v9" }), path({ "d": "m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5" }));
};
//#endregion
//#region src/icons/HandPlatter.ts
const HandPlatter = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 3V2" }), path({ "d": "m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5" }), path({ "d": "M2 14h12a2 2 0 0 1 0 4h-2" }), path({ "d": "M4 10h16" }), path({ "d": "M5 10a7 7 0 0 1 14 0" }), path({ "d": "M5 14v6a1 1 0 0 1-1 1H2" }));
};
//#endregion
//#region src/icons/Hand.ts
const Hand = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" }), path({ "d": "M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" }), path({ "d": "M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" }), path({ "d": "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" }));
};
//#endregion
//#region src/icons/Handbag.ts
const Handbag = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2.048 18.566A2 2 0 0 0 4 21h16a2 2 0 0 0 1.952-2.434l-2-9A2 2 0 0 0 18 8H6a2 2 0 0 0-1.952 1.566z" }), path({ "d": "M8 11V6a4 4 0 0 1 8 0v5" }));
};
//#endregion
//#region src/icons/Handshake.ts
const Handshake = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m11 17 2 2a1 1 0 1 0 3-3" }), path({ "d": "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" }), path({ "d": "m21 3 1 11h-2" }), path({ "d": "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" }), path({ "d": "M3 4h8" }));
};
//#endregion
//#region src/icons/HardDriveDownload.ts
const HardDriveDownload = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 2v8" }), path({ "d": "m16 6-4 4-4-4" }), rect({
		width: "20",
		height: "8",
		"x": "2",
		"y": "14",
		rx: "2"
	}), path({ "d": "M6 18h.01" }), path({ "d": "M10 18h.01" }));
};
//#endregion
//#region src/icons/HardDriveUpload.ts
const HardDriveUpload = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m16 6-4-4-4 4" }), path({ "d": "M12 2v8" }), rect({
		width: "20",
		height: "8",
		"x": "2",
		"y": "14",
		rx: "2"
	}), path({ "d": "M6 18h.01" }), path({ "d": "M10 18h.01" }));
};
//#endregion
//#region src/icons/HardDrive.ts
const HardDrive = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 16h.01" }), path({ "d": "M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" }), path({ "d": "M21.946 12.013H2.054" }), path({ "d": "M6 16h.01" }));
};
//#endregion
//#region src/icons/HardHat.ts
const HardHat = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" }), path({ "d": "M14 6a6 6 0 0 1 6 6v3" }), path({ "d": "M4 15v-3a6 6 0 0 1 6-6" }), rect({
		"x": "2",
		"y": "15",
		width: "20",
		height: "4",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/Hash.ts
const Hash = (props = {}) => {
	const { line } = van.tags(svgNamespace);
	return LucideIcon(props, line({
		x1: "4",
		x2: "20",
		y1: "9",
		y2: "9"
	}), line({
		x1: "4",
		x2: "20",
		y1: "15",
		y2: "15"
	}), line({
		x1: "10",
		x2: "8",
		y1: "3",
		y2: "21"
	}), line({
		x1: "16",
		x2: "14",
		y1: "3",
		y2: "21"
	}));
};
//#endregion
//#region src/icons/HatGlasses.ts
const HatGlasses = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M14 18a2 2 0 0 0-4 0" }), path({ "d": "m19 11-2.11-6.657a2 2 0 0 0-2.752-1.148l-1.276.61A2 2 0 0 1 12 4H8.5a2 2 0 0 0-1.925 1.456L5 11" }), path({ "d": "M2 11h20" }), circle({
		cx: "17",
		cy: "18",
		"r": "3"
	}), circle({
		cx: "7",
		cy: "18",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/Haze.ts
const Haze = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m5.2 6.2 1.4 1.4" }), path({ "d": "M2 13h2" }), path({ "d": "M20 13h2" }), path({ "d": "m17.4 7.6 1.4-1.4" }), path({ "d": "M22 17H2" }), path({ "d": "M22 21H2" }), path({ "d": "M16 13a4 4 0 0 0-8 0" }), path({ "d": "M12 5V2.5" }));
};
//#endregion
//#region src/icons/Hd.ts
const Hd = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 12H6" }), path({ "d": "M10 15V9" }), path({ "d": "M14 14.5a.5.5 0 0 0 .5.5h1a2.5 2.5 0 0 0 2.5-2.5v-1A2.5 2.5 0 0 0 15.5 9h-1a.5.5 0 0 0-.5.5z" }), path({ "d": "M6 15V9" }), rect({
		"x": "2",
		"y": "5",
		width: "20",
		height: "14",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/HdmiPort.ts
const HdmiPort = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z" }), path({ "d": "M7.5 12h9" }));
};
//#endregion
//#region src/icons/Heading1.ts
const Heading1 = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 12h8" }), path({ "d": "M4 18V6" }), path({ "d": "M12 18V6" }), path({ "d": "m17 12 3-2v8" }));
};
//#endregion
//#region src/icons/Heading2.ts
const Heading2 = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 12h8" }), path({ "d": "M4 18V6" }), path({ "d": "M12 18V6" }), path({ "d": "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1" }));
};
//#endregion
//#region src/icons/Heading3.ts
const Heading3 = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 12h8" }), path({ "d": "M4 18V6" }), path({ "d": "M12 18V6" }), path({ "d": "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2" }), path({ "d": "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2" }));
};
//#endregion
//#region src/icons/Heading4.ts
const Heading4 = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 18V6" }), path({ "d": "M17 10v3a1 1 0 0 0 1 1h3" }), path({ "d": "M21 10v8" }), path({ "d": "M4 12h8" }), path({ "d": "M4 18V6" }));
};
//#endregion
//#region src/icons/Heading5.ts
const Heading5 = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 12h8" }), path({ "d": "M4 18V6" }), path({ "d": "M12 18V6" }), path({ "d": "M17 13v-3h4" }), path({ "d": "M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17" }));
};
//#endregion
//#region src/icons/Heading6.ts
const Heading6 = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 12h8" }), path({ "d": "M4 18V6" }), path({ "d": "M12 18V6" }), circle({
		cx: "19",
		cy: "16",
		"r": "2"
	}), path({ "d": "M20 10c-2 2-3 3.5-3 6" }));
};
//#endregion
//#region src/icons/Heading.ts
const Heading = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 12h12" }), path({ "d": "M6 20V4" }), path({ "d": "M18 20V4" }));
};
//#endregion
//#region src/icons/HeadphoneOff.ts
const HeadphoneOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21 14h-1.343" }), path({ "d": "M9.128 3.47A9 9 0 0 1 21 12v3.343" }), path({ "d": "m2 2 20 20" }), path({ "d": "M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3" }), path({ "d": "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364" }));
};
//#endregion
//#region src/icons/Headphones.ts
const Headphones = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" }));
};
//#endregion
//#region src/icons/Headset.ts
const Headset = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" }), path({ "d": "M21 16v2a4 4 0 0 1-4 4h-5" }));
};
//#endregion
//#region src/icons/HeartCrack.ts
const HeartCrack = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12.409 5.824c-.702.792-1.15 1.496-1.415 2.166l2.153 2.156a.5.5 0 0 1 0 .707l-2.293 2.293a.5.5 0 0 0 0 .707L12 15" }), path({ "d": "M13.508 20.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.677.6.6 0 0 0 .818.001A5.5 5.5 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5z" }));
};
//#endregion
//#region src/icons/HeartHandshake.ts
const HeartHandshake = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762" }));
};
//#endregion
//#region src/icons/HeartMinus.ts
const HeartMinus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m14.876 18.99-1.368 1.323a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.244 1.572" }), path({ "d": "M15 15h6" }));
};
//#endregion
//#region src/icons/HeartOff.ts
const HeartOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10.5 4.893a5.5 5.5 0 0 1 1.091.931.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 1.872-1.002 3.356-2.187 4.655" }), path({ "d": "m16.967 16.967-3.459 3.346a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 2.747-4.761" }), path({ "d": "m2 2 20 20" }));
};
//#endregion
//#region src/icons/HeartPlus.ts
const HeartPlus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m14.479 19.374-.971.939a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.219 1.49" }), path({ "d": "M15 15h6" }), path({ "d": "M18 12v6" }));
};
//#endregion
//#region src/icons/HeartPulse.ts
const HeartPulse = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" }), path({ "d": "M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" }));
};
//#endregion
//#region src/icons/Heart.ts
const Heart = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" }));
};
//#endregion
//#region src/icons/Heater.ts
const Heater = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 8c2-3-2-3 0-6" }), path({ "d": "M15.5 8c2-3-2-3 0-6" }), path({ "d": "M6 10h.01" }), path({ "d": "M6 14h.01" }), path({ "d": "M10 16v-4" }), path({ "d": "M14 16v-4" }), path({ "d": "M18 16v-4" }), path({ "d": "M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3" }), path({ "d": "M5 20v2" }), path({ "d": "M19 20v2" }));
};
//#endregion
//#region src/icons/Helicopter.ts
const Helicopter = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 17v4" }), path({ "d": "M14 3v8a2 2 0 0 0 2 2h5.865" }), path({ "d": "M17 17v4" }), path({ "d": "M18 17a4 4 0 0 0 4-4 8 6 0 0 0-8-6 6 5 0 0 0-6 5v3a2 2 0 0 0 2 2z" }), path({ "d": "M2 10v5" }), path({ "d": "M6 3h16" }), path({ "d": "M7 21h14" }), path({ "d": "M8 13H2" }));
};
//#endregion
//#region src/icons/Hexagon.ts
const Hexagon = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }));
};
//#endregion
//#region src/icons/Highlighter.ts
const Highlighter = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m9 11-6 6v3h9l3-3" }), path({ "d": "m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4" }));
};
//#endregion
//#region src/icons/History.ts
const History = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }), path({ "d": "M3 3v5h5" }), path({ "d": "M12 7v5l4 2" }));
};
//#endregion
//#region src/icons/HopOff.ts
const HopOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27" }), path({ "d": "M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28" }), path({ "d": "M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26" }), path({ "d": "M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25" }), path({ "d": "M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75" }), path({ "d": "M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24" }), path({ "d": "M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28" }), path({ "d": "M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05" }), path({ "d": "m2 2 20 20" }));
};
//#endregion
//#region src/icons/Hop.ts
const Hop = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18" }), path({ "d": "M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88" }), path({ "d": "M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36" }), path({ "d": "M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87" }), path({ "d": "M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08" }), path({ "d": "M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57" }), path({ "d": "M4.93 4.93 3 3a.7.7 0 0 1 0-1" }), path({ "d": "M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15" }));
};
//#endregion
//#region src/icons/Hospital.ts
const Hospital = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 7v4" }), path({ "d": "M14 21v-3a2 2 0 0 0-4 0v3" }), path({ "d": "M14 9h-4" }), path({ "d": "M18 11h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" }), path({ "d": "M18 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16" }));
};
//#endregion
//#region src/icons/Hotel.ts
const Hotel = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 22v-6.57" }), path({ "d": "M12 11h.01" }), path({ "d": "M12 7h.01" }), path({ "d": "M14 15.43V22" }), path({ "d": "M15 16a5 5 0 0 0-6 0" }), path({ "d": "M16 11h.01" }), path({ "d": "M16 7h.01" }), path({ "d": "M8 11h.01" }), path({ "d": "M8 7h.01" }), rect({
		"x": "4",
		"y": "2",
		width: "16",
		height: "20",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/Hourglass.ts
const Hourglass = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M5 22h14" }), path({ "d": "M5 2h14" }), path({ "d": "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" }), path({ "d": "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" }));
};
//#endregion
//#region src/icons/HouseHeart.ts
const HouseHeart = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M8.62 13.8A2.25 2.25 0 1 1 12 10.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z" }), path({ "d": "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }));
};
//#endregion
//#region src/icons/HousePlug.ts
const HousePlug = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 12V8.964" }), path({ "d": "M14 12V8.964" }), path({ "d": "M15 12a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z" }), path({ "d": "M8.5 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2" }));
};
//#endregion
//#region src/icons/HousePlus.ts
const HousePlus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12.35 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .71-1.53l7-6a2 2 0 0 1 2.58 0l7 6A2 2 0 0 1 21 10v2.35" }), path({ "d": "M14.8 12.4A1 1 0 0 0 14 12h-4a1 1 0 0 0-1 1v8" }), path({ "d": "M15 18h6" }), path({ "d": "M18 15v6" }));
};
//#endregion
//#region src/icons/HouseWifi.ts
const HouseWifi = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M9.5 13.866a4 4 0 0 1 5 .01" }), path({ "d": "M12 17h.01" }), path({ "d": "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }), path({ "d": "M7 10.754a8 8 0 0 1 10 0" }));
};
//#endregion
//#region src/icons/House.ts
const House = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }), path({ "d": "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }));
};
//#endregion
//#region src/icons/IceCreamBowl.ts
const IceCreamBowl = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0" }), path({ "d": "M12.14 11a3.5 3.5 0 1 1 6.71 0" }), path({ "d": "M15.5 6.5a3.5 3.5 0 1 0-7 0" }));
};
//#endregion
//#region src/icons/IceCreamCone.ts
const IceCreamCone = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11" }), path({ "d": "M17 7A5 5 0 0 0 7 7" }), path({ "d": "M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4" }));
};
//#endregion
//#region src/icons/IdCardLanyard.ts
const IdCardLanyard = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13.5 8h-3" }), path({ "d": "m15 2-1 2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3" }), path({ "d": "M16.899 22A5 5 0 0 0 7.1 22" }), path({ "d": "m9 2 3 6" }), circle({
		cx: "12",
		cy: "15",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/IdCard.ts
const IdCard = (props = {}) => {
	const { path, circle, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 10h2" }), path({ "d": "M16 14h2" }), path({ "d": "M6.17 15a3 3 0 0 1 5.66 0" }), circle({
		cx: "9",
		cy: "11",
		"r": "2"
	}), rect({
		"x": "2",
		"y": "5",
		width: "20",
		height: "14",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/ImageDown.ts
const ImageDown = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" }), path({ "d": "m14 19 3 3v-5.5" }), path({ "d": "m17 22 3-3" }), circle({
		cx: "9",
		cy: "9",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/ImageMinus.ts
const ImageMinus = (props = {}) => {
	const { path, line, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" }), line({
		x1: "16",
		x2: "22",
		y1: "5",
		y2: "5"
	}), circle({
		cx: "9",
		cy: "9",
		"r": "2"
	}), path({ "d": "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }));
};
//#endregion
//#region src/icons/ImageOff.ts
const ImageOff = (props = {}) => {
	const { line, path } = van.tags(svgNamespace);
	return LucideIcon(props, line({
		x1: "2",
		x2: "22",
		y1: "2",
		y2: "22"
	}), path({ "d": "M10.41 10.41a2 2 0 1 1-2.83-2.83" }), line({
		x1: "13.5",
		x2: "6",
		y1: "13.5",
		y2: "21"
	}), line({
		x1: "18",
		x2: "21",
		y1: "12",
		y2: "15"
	}), path({ "d": "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59" }), path({ "d": "M21 15V5a2 2 0 0 0-2-2H9" }));
};
//#endregion
//#region src/icons/ImagePlay.ts
const ImagePlay = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M15 15.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z" }), path({ "d": "M21 12.17V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" }), path({ "d": "m6 21 5-5" }), circle({
		cx: "9",
		cy: "9",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/ImagePlus.ts
const ImagePlus = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 5h6" }), path({ "d": "M19 2v6" }), path({ "d": "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5" }), path({ "d": "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }), circle({
		cx: "9",
		cy: "9",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/ImageUp.ts
const ImageUp = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" }), path({ "d": "m14 19.5 3-3 3 3" }), path({ "d": "M17 22v-5.5" }), circle({
		cx: "9",
		cy: "9",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/ImageUpscale.ts
const ImageUpscale = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 3h5v5" }), path({ "d": "M17 21h2a2 2 0 0 0 2-2" }), path({ "d": "M21 12v3" }), path({ "d": "m21 3-5 5" }), path({ "d": "M3 7V5a2 2 0 0 1 2-2" }), path({ "d": "m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19" }), path({ "d": "M9 3h3" }), rect({
		"x": "3",
		"y": "11",
		width: "10",
		height: "10",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/Image.ts
const Image = (props = {}) => {
	const { rect, circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2",
		ry: "2"
	}), circle({
		cx: "9",
		cy: "9",
		"r": "2"
	}), path({ "d": "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" }));
};
//#endregion
//#region src/icons/Images.ts
const Images = (props = {}) => {
	const { path, circle, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16" }), path({ "d": "M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2" }), circle({
		cx: "13",
		cy: "7",
		"r": "1",
		fill: "currentColor"
	}), rect({
		"x": "8",
		"y": "2",
		width: "14",
		height: "14",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/Import.ts
const Import = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 3v12" }), path({ "d": "m8 11 4 4 4-4" }), path({ "d": "M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" }));
};
//#endregion
//#region src/icons/Inbox.ts
const Inbox = (props = {}) => {
	const { polyline, path } = van.tags(svgNamespace);
	return LucideIcon(props, polyline({ points: "22 12 16 12 14 15 10 15 8 12 2 12" }), path({ "d": "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" }));
};
//#endregion
//#region src/icons/IndianRupee.ts
const IndianRupee = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 3h12" }), path({ "d": "M6 8h12" }), path({ "d": "m6 13 8.5 8" }), path({ "d": "M6 13h3" }), path({ "d": "M9 13c6.667 0 6.667-10 0-10" }));
};
//#endregion
//#region src/icons/InfinityIcon.ts
const InfinityIcon = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8" }));
};
//#endregion
//#region src/icons/Info.ts
const Info = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M12 16v-4" }), path({ "d": "M12 8h.01" }));
};
//#endregion
//#region src/icons/InspectionPanel.ts
const InspectionPanel = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M7 7h.01" }), path({ "d": "M17 7h.01" }), path({ "d": "M7 17h.01" }), path({ "d": "M17 17h.01" }));
};
//#endregion
//#region src/icons/Italic.ts
const Italic = (props = {}) => {
	const { line } = van.tags(svgNamespace);
	return LucideIcon(props, line({
		x1: "19",
		x2: "10",
		y1: "4",
		y2: "4"
	}), line({
		x1: "14",
		x2: "5",
		y1: "20",
		y2: "20"
	}), line({
		x1: "15",
		x2: "9",
		y1: "4",
		y2: "20"
	}));
};
//#endregion
//#region src/icons/IterationCcw.ts
const IterationCcw = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m16 14 4 4-4 4" }), path({ "d": "M20 10a8 8 0 1 0-8 8h8" }));
};
//#endregion
//#region src/icons/IterationCw.ts
const IterationCw = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 10a8 8 0 1 1 8 8H4" }), path({ "d": "m8 22-4-4 4-4" }));
};
//#endregion
//#region src/icons/JapaneseYen.ts
const JapaneseYen = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 9.5V21m0-11.5L6 3m6 6.5L18 3" }), path({ "d": "M6 15h12" }), path({ "d": "M6 11h12" }));
};
//#endregion
//#region src/icons/Joystick.ts
const Joystick = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z" }), path({ "d": "M6 15v-2" }), path({ "d": "M12 15V9" }), circle({
		cx: "12",
		cy: "6",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/Kanban.ts
const Kanban = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M5 3v14" }), path({ "d": "M12 3v8" }), path({ "d": "M19 3v18" }));
};
//#endregion
//#region src/icons/Kayak.ts
const Kayak = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M18 17a1 1 0 0 0-1 1v1a2 2 0 1 0 2-2z" }), path({ "d": "M20.97 3.61a.45.45 0 0 0-.58-.58C10.2 6.6 6.6 10.2 3.03 20.39a.45.45 0 0 0 .58.58C13.8 17.4 17.4 13.8 20.97 3.61" }), path({ "d": "m6.707 6.707 10.586 10.586" }), path({ "d": "M7 5a2 2 0 1 0-2 2h1a1 1 0 0 0 1-1z" }));
};
//#endregion
//#region src/icons/KeyRound.ts
const KeyRound = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z" }), circle({
		cx: "16.5",
		cy: "7.5",
		"r": ".5",
		fill: "currentColor"
	}));
};
//#endregion
//#region src/icons/KeySquare.ts
const KeySquare = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4z" }), path({ "d": "m14 7 3 3" }), path({ "d": "m9.4 10.6-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814" }));
};
//#endregion
//#region src/icons/Key.ts
const Key = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4" }), path({ "d": "m21 2-9.6 9.6" }), circle({
		cx: "7.5",
		cy: "15.5",
		"r": "5.5"
	}));
};
//#endregion
//#region src/icons/KeyboardMusic.ts
const KeyboardMusic = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "20",
		height: "16",
		"x": "2",
		"y": "4",
		rx: "2"
	}), path({ "d": "M6 8h4" }), path({ "d": "M14 8h.01" }), path({ "d": "M18 8h.01" }), path({ "d": "M2 12h20" }), path({ "d": "M6 12v4" }), path({ "d": "M10 12v4" }), path({ "d": "M14 12v4" }), path({ "d": "M18 12v4" }));
};
//#endregion
//#region src/icons/KeyboardOff.ts
const KeyboardOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M 20 4 A2 2 0 0 1 22 6" }), path({ "d": "M 22 6 L 22 16.41" }), path({ "d": "M 7 16 L 16 16" }), path({ "d": "M 9.69 4 L 20 4" }), path({ "d": "M14 8h.01" }), path({ "d": "M18 8h.01" }), path({ "d": "m2 2 20 20" }), path({ "d": "M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" }), path({ "d": "M6 8h.01" }), path({ "d": "M8 12h.01" }));
};
//#endregion
//#region src/icons/Keyboard.ts
const Keyboard = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 8h.01" }), path({ "d": "M12 12h.01" }), path({ "d": "M14 8h.01" }), path({ "d": "M16 12h.01" }), path({ "d": "M18 8h.01" }), path({ "d": "M6 8h.01" }), path({ "d": "M7 16h10" }), path({ "d": "M8 12h.01" }), rect({
		width: "20",
		height: "16",
		"x": "2",
		"y": "4",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/LampCeiling.ts
const LampCeiling = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 2v5" }), path({ "d": "M14.829 15.998a3 3 0 1 1-5.658 0" }), path({ "d": "M20.92 14.606A1 1 0 0 1 20 16H4a1 1 0 0 1-.92-1.394l3-7A1 1 0 0 1 7 7h10a1 1 0 0 1 .92.606z" }));
};
//#endregion
//#region src/icons/LampDesk.ts
const LampDesk = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10.293 2.293a1 1 0 0 1 1.414 0l2.5 2.5 5.994 1.227a1 1 0 0 1 .506 1.687l-7 7a1 1 0 0 1-1.687-.506l-1.227-5.994-2.5-2.5a1 1 0 0 1 0-1.414z" }), path({ "d": "m14.207 4.793-3.414 3.414" }), path({ "d": "M3 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" }), path({ "d": "m9.086 6.5-4.793 4.793a1 1 0 0 0-.18 1.17L7 18" }));
};
//#endregion
//#region src/icons/LampFloor.ts
const LampFloor = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 10v12" }), path({ "d": "M17.929 7.629A1 1 0 0 1 17 9H7a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 9 2h6a1 1 0 0 1 .928.629z" }), path({ "d": "M9 22h6" }));
};
//#endregion
//#region src/icons/LampWallDown.ts
const LampWallDown = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M19.929 18.629A1 1 0 0 1 19 20H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 13h6a1 1 0 0 1 .928.629z" }), path({ "d": "M6 3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" }), path({ "d": "M8 6h4a2 2 0 0 1 2 2v5" }));
};
//#endregion
//#region src/icons/LampWallUp.ts
const LampWallUp = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M19.929 9.629A1 1 0 0 1 19 11H9a1 1 0 0 1-.928-1.371l2-5A1 1 0 0 1 11 4h6a1 1 0 0 1 .928.629z" }), path({ "d": "M6 15a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z" }), path({ "d": "M8 18h4a2 2 0 0 0 2-2v-5" }));
};
//#endregion
//#region src/icons/Lamp.ts
const Lamp = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 12v6" }), path({ "d": "M4.077 10.615A1 1 0 0 0 5 12h14a1 1 0 0 0 .923-1.385l-3.077-7.384A2 2 0 0 0 15 2H9a2 2 0 0 0-1.846 1.23Z" }), path({ "d": "M8 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z" }));
};
//#endregion
//#region src/icons/LandPlot.ts
const LandPlot = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m12 8 6-3-6-3v10" }), path({ "d": "m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12" }), path({ "d": "m6.49 12.85 11.02 6.3" }), path({ "d": "M17.51 12.85 6.5 19.15" }));
};
//#endregion
//#region src/icons/Landmark.ts
const Landmark = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 18v-7" }), path({ "d": "M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z" }), path({ "d": "M14 18v-7" }), path({ "d": "M18 18v-7" }), path({ "d": "M3 22h18" }), path({ "d": "M6 18v-7" }));
};
//#endregion
//#region src/icons/Languages.ts
const Languages = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m5 8 6 6" }), path({ "d": "m4 14 6-6 2-3" }), path({ "d": "M2 5h12" }), path({ "d": "M7 2h1" }), path({ "d": "m22 22-5-10-5 10" }), path({ "d": "M14 18h6" }));
};
//#endregion
//#region src/icons/LaptopMinimalCheck.ts
const LaptopMinimalCheck = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 20h20" }), path({ "d": "m9 10 2 2 4-4" }), rect({
		"x": "3",
		"y": "4",
		width: "18",
		height: "12",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/LaptopMinimal.ts
const LaptopMinimal = (props = {}) => {
	const { rect, line } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "12",
		"x": "3",
		"y": "4",
		rx: "2",
		ry: "2"
	}), line({
		x1: "2",
		x2: "22",
		y1: "20",
		y2: "20"
	}));
};
//#endregion
//#region src/icons/Laptop.ts
const Laptop = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z" }), path({ "d": "M20.054 15.987H3.946" }));
};
//#endregion
//#region src/icons/LassoSelect.ts
const LassoSelect = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M7 22a5 5 0 0 1-2-4" }), path({ "d": "M7 16.93c.96.43 1.96.74 2.99.91" }), path({ "d": "M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2" }), path({ "d": "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" }), path({ "d": "M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z" }));
};
//#endregion
//#region src/icons/Lasso.ts
const Lasso = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3.704 14.467a10 8 0 1 1 3.115 2.375" }), path({ "d": "M7 22a5 5 0 0 1-2-3.994" }), circle({
		cx: "5",
		cy: "16",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/Laugh.ts
const Laugh = (props = {}) => {
	const { circle, path, line } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z" }), line({
		x1: "9",
		x2: "9.01",
		y1: "9",
		y2: "9"
	}), line({
		x1: "15",
		x2: "15.01",
		y1: "9",
		y2: "9"
	}));
};
//#endregion
//#region src/icons/Layers2.ts
const Layers2 = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74z" }), path({ "d": "m20 14.285 1.5.845a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74l1.5-.845" }));
};
//#endregion
//#region src/icons/LayersPlus.ts
const LayersPlus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 .83.18 2 2 0 0 0 .83-.18l8.58-3.9a1 1 0 0 0 0-1.831z" }), path({ "d": "M16 17h6" }), path({ "d": "M19 14v6" }), path({ "d": "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 .825.178" }), path({ "d": "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l2.116-.962" }));
};
//#endregion
//#region src/icons/Layers.ts
const Layers = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" }), path({ "d": "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" }), path({ "d": "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" }));
};
//#endregion
//#region src/icons/LayoutDashboard.ts
const LayoutDashboard = (props = {}) => {
	const { rect } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "7",
		height: "9",
		"x": "3",
		"y": "3",
		rx: "1"
	}), rect({
		width: "7",
		height: "5",
		"x": "14",
		"y": "3",
		rx: "1"
	}), rect({
		width: "7",
		height: "9",
		"x": "14",
		"y": "12",
		rx: "1"
	}), rect({
		width: "7",
		height: "5",
		"x": "3",
		"y": "16",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/LayoutGrid.ts
const LayoutGrid = (props = {}) => {
	const { rect } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "7",
		height: "7",
		"x": "3",
		"y": "3",
		rx: "1"
	}), rect({
		width: "7",
		height: "7",
		"x": "14",
		"y": "3",
		rx: "1"
	}), rect({
		width: "7",
		height: "7",
		"x": "14",
		"y": "14",
		rx: "1"
	}), rect({
		width: "7",
		height: "7",
		"x": "3",
		"y": "14",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/LayoutList.ts
const LayoutList = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "7",
		height: "7",
		"x": "3",
		"y": "3",
		rx: "1"
	}), rect({
		width: "7",
		height: "7",
		"x": "3",
		"y": "14",
		rx: "1"
	}), path({ "d": "M14 4h7" }), path({ "d": "M14 9h7" }), path({ "d": "M14 15h7" }), path({ "d": "M14 20h7" }));
};
//#endregion
//#region src/icons/LayoutPanelLeft.ts
const LayoutPanelLeft = (props = {}) => {
	const { rect } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "7",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "1"
	}), rect({
		width: "7",
		height: "7",
		"x": "14",
		"y": "3",
		rx: "1"
	}), rect({
		width: "7",
		height: "7",
		"x": "14",
		"y": "14",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/LayoutPanelTop.ts
const LayoutPanelTop = (props = {}) => {
	const { rect } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "7",
		"x": "3",
		"y": "3",
		rx: "1"
	}), rect({
		width: "7",
		height: "7",
		"x": "3",
		"y": "14",
		rx: "1"
	}), rect({
		width: "7",
		height: "7",
		"x": "14",
		"y": "14",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/LayoutTemplate.ts
const LayoutTemplate = (props = {}) => {
	const { rect } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "7",
		"x": "3",
		"y": "3",
		rx: "1"
	}), rect({
		width: "9",
		height: "7",
		"x": "3",
		"y": "14",
		rx: "1"
	}), rect({
		width: "5",
		height: "7",
		"x": "16",
		"y": "14",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/Leaf.ts
const Leaf = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" }), path({ "d": "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" }));
};
//#endregion
//#region src/icons/LeafyGreen.ts
const LeafyGreen = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22" }), path({ "d": "M2 22 17 7" }));
};
//#endregion
//#region src/icons/Lectern.ts
const Lectern = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3" }), path({ "d": "M18 6V3a1 1 0 0 0-1-1h-3" }), rect({
		width: "8",
		height: "12",
		"x": "8",
		"y": "10",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/LensConcave.ts
const LensConcave = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M7 2a1 1 0 0 0-.8 1.6 14 14 0 0 1 0 16.8A1 1 0 0 0 7 22h10a1 1 0 0 0 .8-1.6 14 14 0 0 1 0-16.8A1 1 0 0 0 17 2z" }));
};
//#endregion
//#region src/icons/LensConvex.ts
const LensConvex = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13.433 2a1 1 0 0 1 .824.448 18 18 0 0 1 0 19.104 1 1 0 0 1-.824.448h-2.866a1 1 0 0 1-.824-.448 18 18 0 0 1 0-19.104A1 1 0 0 1 10.567 2z" }));
};
//#endregion
//#region src/icons/LibraryBig.ts
const LibraryBig = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "8",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "1"
	}), path({ "d": "M7 3v18" }), path({ "d": "M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z" }));
};
//#endregion
//#region src/icons/Library.ts
const Library = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m16 6 4 14" }), path({ "d": "M12 6v14" }), path({ "d": "M8 8v12" }), path({ "d": "M4 4v16" }));
};
//#endregion
//#region src/icons/LifeBuoy.ts
const LifeBuoy = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "m4.93 4.93 4.24 4.24" }), path({ "d": "m14.83 9.17 4.24-4.24" }), path({ "d": "m14.83 14.83 4.24 4.24" }), path({ "d": "m9.17 14.83-4.24 4.24" }), circle({
		cx: "12",
		cy: "12",
		"r": "4"
	}));
};
//#endregion
//#region src/icons/Ligature.ts
const Ligature = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M14 12h2v8" }), path({ "d": "M14 20h4" }), path({ "d": "M6 12h4" }), path({ "d": "M6 20h4" }), path({ "d": "M8 20V8a4 4 0 0 1 7.464-2" }));
};
//#endregion
//#region src/icons/LightbulbOff.ts
const LightbulbOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5" }), path({ "d": "m2 2 20 20" }), path({ "d": "M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5" }), path({ "d": "M9 18h6" }), path({ "d": "M10 22h4" }));
};
//#endregion
//#region src/icons/Lightbulb.ts
const Lightbulb = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" }), path({ "d": "M9 18h6" }), path({ "d": "M10 22h4" }));
};
//#endregion
//#region src/icons/LineDotRightHorizontal.ts
const LineDotRightHorizontal = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M 3 12 L 15 12" }), circle({
		cx: "18",
		cy: "12",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/LineSquiggle.ts
const LineSquiggle = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M7 3.5c5-2 7 2.5 3 4C1.5 10 2 15 5 16c5 2 9-10 14-7s.5 13.5-4 12c-5-2.5.5-11 6-2" }));
};
//#endregion
//#region src/icons/LineStyle.ts
const LineStyle = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 5h2" }), path({ "d": "M15 12h6" }), path({ "d": "M19 5h2" }), path({ "d": "M3 12h6" }), path({ "d": "M3 19h18" }), path({ "d": "M3 5h2" }));
};
//#endregion
//#region src/icons/Link2Off.ts
const Link2Off = (props = {}) => {
	const { path, line } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M9 17H7A5 5 0 0 1 7 7" }), path({ "d": "M15 7h2a5 5 0 0 1 4 8" }), line({
		x1: "8",
		x2: "12",
		y1: "12",
		y2: "12"
	}), line({
		x1: "2",
		x2: "22",
		y1: "2",
		y2: "22"
	}));
};
//#endregion
//#region src/icons/Link2.ts
const Link2 = (props = {}) => {
	const { path, line } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M9 17H7A5 5 0 0 1 7 7h2" }), path({ "d": "M15 7h2a5 5 0 1 1 0 10h-2" }), line({
		x1: "8",
		x2: "16",
		y1: "12",
		y2: "12"
	}));
};
//#endregion
//#region src/icons/Link.ts
const Link = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" }), path({ "d": "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" }));
};
//#endregion
//#region src/icons/ListCheck.ts
const ListCheck = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 5H3" }), path({ "d": "M16 12H3" }), path({ "d": "M11 19H3" }), path({ "d": "m15 18 2 2 4-4" }));
};
//#endregion
//#region src/icons/ListChecks.ts
const ListChecks = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13 5h8" }), path({ "d": "M13 12h8" }), path({ "d": "M13 19h8" }), path({ "d": "m3 17 2 2 4-4" }), path({ "d": "m3 7 2 2 4-4" }));
};
//#endregion
//#region src/icons/ListChevronsDownUp.ts
const ListChevronsDownUp = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 5h8" }), path({ "d": "M3 12h8" }), path({ "d": "M3 19h8" }), path({ "d": "m15 5 3 3 3-3" }), path({ "d": "m15 19 3-3 3 3" }));
};
//#endregion
//#region src/icons/ListChevronsUpDown.ts
const ListChevronsUpDown = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 5h8" }), path({ "d": "M3 12h8" }), path({ "d": "M3 19h8" }), path({ "d": "m15 8 3-3 3 3" }), path({ "d": "m15 16 3 3 3-3" }));
};
//#endregion
//#region src/icons/ListCollapse.ts
const ListCollapse = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 5h11" }), path({ "d": "M10 12h11" }), path({ "d": "M10 19h11" }), path({ "d": "m3 10 3-3-3-3" }), path({ "d": "m3 20 3-3-3-3" }));
};
//#endregion
//#region src/icons/ListEnd.ts
const ListEnd = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 5H3" }), path({ "d": "M16 12H3" }), path({ "d": "M9 19H3" }), path({ "d": "m16 16-3 3 3 3" }), path({ "d": "M21 5v12a2 2 0 0 1-2 2h-6" }));
};
//#endregion
//#region src/icons/ListFilterPlus.ts
const ListFilterPlus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 5H2" }), path({ "d": "M6 12h12" }), path({ "d": "M9 19h6" }), path({ "d": "M16 5h6" }), path({ "d": "M19 8V2" }));
};
//#endregion
//#region src/icons/ListFilter.ts
const ListFilter = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 5h20" }), path({ "d": "M6 12h12" }), path({ "d": "M9 19h6" }));
};
//#endregion
//#region src/icons/ListIndentDecrease.ts
const ListIndentDecrease = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21 5H11" }), path({ "d": "M21 12H11" }), path({ "d": "M21 19H11" }), path({ "d": "m7 8-4 4 4 4" }));
};
//#endregion
//#region src/icons/ListIndentIncrease.ts
const ListIndentIncrease = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21 5H11" }), path({ "d": "M21 12H11" }), path({ "d": "M21 19H11" }), path({ "d": "m3 8 4 4-4 4" }));
};
//#endregion
//#region src/icons/ListMinus.ts
const ListMinus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 5H3" }), path({ "d": "M11 12H3" }), path({ "d": "M16 19H3" }), path({ "d": "M21 12h-6" }));
};
//#endregion
//#region src/icons/ListMusic.ts
const ListMusic = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 5H3" }), path({ "d": "M11 12H3" }), path({ "d": "M11 19H3" }), path({ "d": "M21 16V5" }), circle({
		cx: "18",
		cy: "16",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/ListOrdered.ts
const ListOrdered = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 5h10" }), path({ "d": "M11 12h10" }), path({ "d": "M11 19h10" }), path({ "d": "M4 4h1v5" }), path({ "d": "M4 9h2" }), path({ "d": "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02" }));
};
//#endregion
//#region src/icons/ListPlus.ts
const ListPlus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 5H3" }), path({ "d": "M11 12H3" }), path({ "d": "M16 19H3" }), path({ "d": "M18 9v6" }), path({ "d": "M21 12h-6" }));
};
//#endregion
//#region src/icons/ListRestart.ts
const ListRestart = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21 5H3" }), path({ "d": "M7 12H3" }), path({ "d": "M7 19H3" }), path({ "d": "M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14" }), path({ "d": "M11 10v4h4" }));
};
//#endregion
//#region src/icons/ListStart.ts
const ListStart = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 5h6" }), path({ "d": "M3 12h13" }), path({ "d": "M3 19h13" }), path({ "d": "m16 8-3-3 3-3" }), path({ "d": "M21 19V7a2 2 0 0 0-2-2h-6" }));
};
//#endregion
//#region src/icons/ListTodo.ts
const ListTodo = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13 5h8" }), path({ "d": "M13 12h8" }), path({ "d": "M13 19h8" }), path({ "d": "m3 17 2 2 4-4" }), rect({
		"x": "3",
		"y": "4",
		width: "6",
		height: "6",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/ListTree.ts
const ListTree = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M8 5h13" }), path({ "d": "M13 12h8" }), path({ "d": "M13 19h8" }), path({ "d": "M3 10a2 2 0 0 0 2 2h3" }), path({ "d": "M3 5v12a2 2 0 0 0 2 2h3" }));
};
//#endregion
//#region src/icons/ListVideo.ts
const ListVideo = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21 5H3" }), path({ "d": "M10 12H3" }), path({ "d": "M10 19H3" }), path({ "d": "M15 12.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997a1 1 0 0 1-1.517-.86z" }));
};
//#endregion
//#region src/icons/ListX.ts
const ListX = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 5H3" }), path({ "d": "M11 12H3" }), path({ "d": "M16 19H3" }), path({ "d": "m15.5 9.5 5 5" }), path({ "d": "m20.5 9.5-5 5" }));
};
//#endregion
//#region src/icons/List.ts
const List = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 5h.01" }), path({ "d": "M3 12h.01" }), path({ "d": "M3 19h.01" }), path({ "d": "M8 5h13" }), path({ "d": "M8 12h13" }), path({ "d": "M8 19h13" }));
};
//#endregion
//#region src/icons/LoaderCircle.ts
const LoaderCircle = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21 12a9 9 0 1 1-6.219-8.56" }));
};
//#endregion
//#region src/icons/LoaderPinwheel.ts
const LoaderPinwheel = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0" }), path({ "d": "M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6" }), path({ "d": "M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6" }), circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}));
};
//#endregion
//#region src/icons/Loader.ts
const Loader = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 2v4" }), path({ "d": "m16.2 7.8 2.9-2.9" }), path({ "d": "M18 12h4" }), path({ "d": "m16.2 16.2 2.9 2.9" }), path({ "d": "M12 18v4" }), path({ "d": "m4.9 19.1 2.9-2.9" }), path({ "d": "M2 12h4" }), path({ "d": "m4.9 4.9 2.9 2.9" }));
};
//#endregion
//#region src/icons/LocateFixed.ts
const LocateFixed = (props = {}) => {
	const { line, circle } = van.tags(svgNamespace);
	return LucideIcon(props, line({
		x1: "2",
		x2: "5",
		y1: "12",
		y2: "12"
	}), line({
		x1: "19",
		x2: "22",
		y1: "12",
		y2: "12"
	}), line({
		x1: "12",
		x2: "12",
		y1: "2",
		y2: "5"
	}), line({
		x1: "12",
		x2: "12",
		y1: "19",
		y2: "22"
	}), circle({
		cx: "12",
		cy: "12",
		"r": "7"
	}), circle({
		cx: "12",
		cy: "12",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/LocateOff.ts
const LocateOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 19v3" }), path({ "d": "M12 2v3" }), path({ "d": "M18.89 13.24a7 7 0 0 0-8.13-8.13" }), path({ "d": "M19 12h3" }), path({ "d": "M2 12h3" }), path({ "d": "m2 2 20 20" }), path({ "d": "M7.05 7.05a7 7 0 0 0 9.9 9.9" }));
};
//#endregion
//#region src/icons/Locate.ts
const Locate = (props = {}) => {
	const { line, circle } = van.tags(svgNamespace);
	return LucideIcon(props, line({
		x1: "2",
		x2: "5",
		y1: "12",
		y2: "12"
	}), line({
		x1: "19",
		x2: "22",
		y1: "12",
		y2: "12"
	}), line({
		x1: "12",
		x2: "12",
		y1: "2",
		y2: "5"
	}), line({
		x1: "12",
		x2: "12",
		y1: "19",
		y2: "22"
	}), circle({
		cx: "12",
		cy: "12",
		"r": "7"
	}));
};
//#endregion
//#region src/icons/LockKeyholeOpen.ts
const LockKeyholeOpen = (props = {}) => {
	const { circle, rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "16",
		"r": "1"
	}), rect({
		width: "18",
		height: "12",
		"x": "3",
		"y": "10",
		rx: "2"
	}), path({ "d": "M7 10V7a5 5 0 0 1 9.33-2.5" }));
};
//#endregion
//#region src/icons/LockKeyhole.ts
const LockKeyhole = (props = {}) => {
	const { circle, rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "16",
		"r": "1"
	}), rect({
		"x": "3",
		"y": "10",
		width: "18",
		height: "12",
		rx: "2"
	}), path({ "d": "M7 10V7a5 5 0 0 1 10 0v3" }));
};
//#endregion
//#region src/icons/LockOpen.ts
const LockOpen = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "11",
		"x": "3",
		"y": "11",
		rx: "2",
		ry: "2"
	}), path({ "d": "M7 11V7a5 5 0 0 1 9.9-1" }));
};
//#endregion
//#region src/icons/Lock.ts
const Lock = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "11",
		"x": "3",
		"y": "11",
		rx: "2",
		ry: "2"
	}), path({ "d": "M7 11V7a5 5 0 0 1 10 0v4" }));
};
//#endregion
//#region src/icons/LogIn.ts
const LogIn = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m10 17 5-5-5-5" }), path({ "d": "M15 12H3" }), path({ "d": "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" }));
};
//#endregion
//#region src/icons/LogOut.ts
const LogOut = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m16 17 5-5-5-5" }), path({ "d": "M21 12H9" }), path({ "d": "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }));
};
//#endregion
//#region src/icons/Logs.ts
const Logs = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 5h1" }), path({ "d": "M3 12h1" }), path({ "d": "M3 19h1" }), path({ "d": "M8 5h1" }), path({ "d": "M8 12h1" }), path({ "d": "M8 19h1" }), path({ "d": "M13 5h8" }), path({ "d": "M13 12h8" }), path({ "d": "M13 19h8" }));
};
//#endregion
//#region src/icons/Lollipop.ts
const Lollipop = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "11",
		cy: "11",
		"r": "8"
	}), path({ "d": "m21 21-4.3-4.3" }), path({ "d": "M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0" }));
};
//#endregion
//#region src/icons/Luggage.ts
const Luggage = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2" }), path({ "d": "M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14" }), path({ "d": "M10 20h4" }), circle({
		cx: "16",
		cy: "20",
		"r": "2"
	}), circle({
		cx: "8",
		cy: "20",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/Magnet.ts
const Magnet = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m12 15 4 4" }), path({ "d": "M2.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.029-6.029a1 1 0 1 1 3 3l-6.029 6.029a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.365-6.367A1 1 0 0 0 8.716 4.282z" }), path({ "d": "m5 8 4 4" }));
};
//#endregion
//#region src/icons/MailCheck.ts
const MailCheck = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" }), path({ "d": "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }), path({ "d": "m16 19 2 2 4-4" }));
};
//#endregion
//#region src/icons/MailMinus.ts
const MailMinus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" }), path({ "d": "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }), path({ "d": "M16 19h6" }));
};
//#endregion
//#region src/icons/MailOpen.ts
const MailOpen = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" }), path({ "d": "m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" }));
};
//#endregion
//#region src/icons/MailPlus.ts
const MailPlus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" }), path({ "d": "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }), path({ "d": "M19 16v6" }), path({ "d": "M16 19h6" }));
};
//#endregion
//#region src/icons/MailQuestionMark.ts
const MailQuestionMark = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5" }), path({ "d": "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }), path({ "d": "M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2" }), path({ "d": "M20 22v.01" }));
};
//#endregion
//#region src/icons/MailSearch.ts
const MailSearch = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5" }), path({ "d": "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }), path({ "d": "M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" }), circle({
		cx: "18",
		cy: "18",
		"r": "3"
	}), path({ "d": "m22 22-1.5-1.5" }));
};
//#endregion
//#region src/icons/MailWarning.ts
const MailWarning = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5" }), path({ "d": "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }), path({ "d": "M20 14v4" }), path({ "d": "M20 22v.01" }));
};
//#endregion
//#region src/icons/MailX.ts
const MailX = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9" }), path({ "d": "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" }), path({ "d": "m17 17 4 4" }), path({ "d": "m21 17-4 4" }));
};
//#endregion
//#region src/icons/Mail.ts
const Mail = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" }), rect({
		"x": "2",
		"y": "4",
		width: "20",
		height: "16",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/Mailbox.ts
const Mailbox = (props = {}) => {
	const { path, polyline, line } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" }), polyline({ points: "15,9 18,9 18,11" }), path({ "d": "M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2" }), line({
		x1: "6",
		x2: "7",
		y1: "10",
		y2: "10"
	}));
};
//#endregion
//#region src/icons/Mails.ts
const Mails = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M17 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 1-1.732" }), path({ "d": "m22 5.5-6.419 4.179a2 2 0 0 1-2.162 0L7 5.5" }), rect({
		"x": "7",
		"y": "3",
		width: "15",
		height: "12",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/MapMinus.ts
const MapMinus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V14" }), path({ "d": "M15 5.764V14" }), path({ "d": "M21 18h-6" }), path({ "d": "M9 3.236v15" }));
};
//#endregion
//#region src/icons/MapPinCheckInside.ts
const MapPinCheckInside = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }), path({ "d": "m9 10 2 2 4-4" }));
};
//#endregion
//#region src/icons/MapPinCheck.ts
const MapPinCheck = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728" }), circle({
		cx: "12",
		cy: "10",
		"r": "3"
	}), path({ "d": "m16 18 2 2 4-4" }));
};
//#endregion
//#region src/icons/MapPinHouse.ts
const MapPinHouse = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z" }), path({ "d": "M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2" }), path({ "d": "M18 22v-3" }), circle({
		cx: "10",
		cy: "10",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/MapPinMinusInside.ts
const MapPinMinusInside = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }), path({ "d": "M9 10h6" }));
};
//#endregion
//#region src/icons/MapPinMinus.ts
const MapPinMinus = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M18.977 14C19.6 12.701 20 11.343 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738" }), circle({
		cx: "12",
		cy: "10",
		"r": "3"
	}), path({ "d": "M16 18h6" }));
};
//#endregion
//#region src/icons/MapPinOff.ts
const MapPinOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12.75 7.09a3 3 0 0 1 2.16 2.16" }), path({ "d": "M17.072 17.072c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568" }), path({ "d": "m2 2 20 20" }), path({ "d": "M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533" }), path({ "d": "M9.13 9.13a3 3 0 0 0 3.74 3.74" }));
};
//#endregion
//#region src/icons/MapPinPen.ts
const MapPinPen = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468" }), path({ "d": "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" }), circle({
		cx: "10",
		cy: "10",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/MapPinPlusInside.ts
const MapPinPlusInside = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }), path({ "d": "M12 7v6" }), path({ "d": "M9 10h6" }));
};
//#endregion
//#region src/icons/MapPinPlus.ts
const MapPinPlus = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738" }), circle({
		cx: "12",
		cy: "10",
		"r": "3"
	}), path({ "d": "M16 18h6" }), path({ "d": "M19 15v6" }));
};
//#endregion
//#region src/icons/MapPinSearch.ts
const MapPinSearch = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M 12.248 21.969 a 1 1 0 0 1 -0.849 -0.17 C 9.539 20.193 4 14.993 4 10 a 8 8 0 0 1 16 0 C 20 10.42 19.961 10.841 19.888 11.262" }), path({ "d": "m22 22-1.88-1.88" }), circle({
		cx: "12",
		cy: "10",
		"r": "3"
	}), circle({
		cx: "18",
		cy: "18",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/MapPinXInside.ts
const MapPinXInside = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }), path({ "d": "m14.5 7.5-5 5" }), path({ "d": "m9.5 7.5 5 5" }));
};
//#endregion
//#region src/icons/MapPinX.ts
const MapPinX = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M19.752 11.901A7.78 7.78 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 19 19 0 0 0 .09-.077" }), circle({
		cx: "12",
		cy: "10",
		"r": "3"
	}), path({ "d": "m21.5 15.5-5 5" }), path({ "d": "m21.5 20.5-5-5" }));
};
//#endregion
//#region src/icons/MapPin.ts
const MapPin = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }), circle({
		cx: "12",
		cy: "10",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/MapPinned.ts
const MapPinned = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0" }), circle({
		cx: "12",
		cy: "8",
		"r": "2"
	}), path({ "d": "M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712" }));
};
//#endregion
//#region src/icons/MapPlus.ts
const MapPlus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m11 19-1.106-.552a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0l4.212 2.106a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619V12" }), path({ "d": "M15 5.764V12" }), path({ "d": "M18 15v6" }), path({ "d": "M21 18h-6" }), path({ "d": "M9 3.236v15" }));
};
//#endregion
//#region src/icons/Map.ts
const Map = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" }), path({ "d": "M15 5.764v15" }), path({ "d": "M9 3.236v15" }));
};
//#endregion
//#region src/icons/MarsStroke.ts
const MarsStroke = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m14 6 4 4" }), path({ "d": "M17 3h4v4" }), path({ "d": "m21 3-7.75 7.75" }), circle({
		cx: "9",
		cy: "15",
		"r": "6"
	}));
};
//#endregion
//#region src/icons/Mars.ts
const Mars = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 3h5v5" }), path({ "d": "m21 3-6.75 6.75" }), circle({
		cx: "10",
		cy: "14",
		"r": "6"
	}));
};
//#endregion
//#region src/icons/Martini.ts
const Martini = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M8 22h8" }), path({ "d": "M12 11v11" }), path({ "d": "m19 3-7 8-7-8Z" }));
};
//#endregion
//#region src/icons/Maximize2.ts
const Maximize2 = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M15 3h6v6" }), path({ "d": "m21 3-7 7" }), path({ "d": "m3 21 7-7" }), path({ "d": "M9 21H3v-6" }));
};
//#endregion
//#region src/icons/Maximize.ts
const Maximize = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M8 3H5a2 2 0 0 0-2 2v3" }), path({ "d": "M21 8V5a2 2 0 0 0-2-2h-3" }), path({ "d": "M3 16v3a2 2 0 0 0 2 2h3" }), path({ "d": "M16 21h3a2 2 0 0 0 2-2v-3" }));
};
//#endregion
//#region src/icons/Medal.ts
const Medal = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" }), path({ "d": "M11 12 5.12 2.2" }), path({ "d": "m13 12 5.88-9.8" }), path({ "d": "M8 7h8" }), circle({
		cx: "12",
		cy: "17",
		"r": "5"
	}), path({ "d": "M12 18v-2h-.5" }));
};
//#endregion
//#region src/icons/MegaphoneOff.ts
const MegaphoneOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11.636 6A13 13 0 0 0 19.4 3.2 1 1 0 0 1 21 4v11.344" }), path({ "d": "M14.378 14.357A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1" }), path({ "d": "m2 2 20 20" }), path({ "d": "M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14" }), path({ "d": "M8 8v6" }));
};
//#endregion
//#region src/icons/Megaphone.ts
const Megaphone = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" }), path({ "d": "M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14" }), path({ "d": "M8 6v8" }));
};
//#endregion
//#region src/icons/Meh.ts
const Meh = (props = {}) => {
	const { circle, line } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), line({
		x1: "8",
		x2: "16",
		y1: "15",
		y2: "15"
	}), line({
		x1: "9",
		x2: "9.01",
		y1: "9",
		y2: "9"
	}), line({
		x1: "15",
		x2: "15.01",
		y1: "9",
		y2: "9"
	}));
};
//#endregion
//#region src/icons/MemoryStick.ts
const MemoryStick = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 12v-2" }), path({ "d": "M12 18v-2" }), path({ "d": "M16 12v-2" }), path({ "d": "M16 18v-2" }), path({ "d": "M2 11h1.5" }), path({ "d": "M20 18v-2" }), path({ "d": "M20.5 11H22" }), path({ "d": "M4 18v-2" }), path({ "d": "M8 12v-2" }), path({ "d": "M8 18v-2" }), rect({
		"x": "2",
		"y": "6",
		width: "20",
		height: "10",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/Menu.ts
const Menu = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 5h16" }), path({ "d": "M4 12h16" }), path({ "d": "M4 19h16" }));
};
//#endregion
//#region src/icons/Merge.ts
const Merge = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m8 6 4-4 4 4" }), path({ "d": "M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" }), path({ "d": "m20 22-5-5" }));
};
//#endregion
//#region src/icons/MessageCircleCheck.ts
const MessageCircleCheck = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" }), path({ "d": "m9 12 2 2 4-4" }));
};
//#endregion
//#region src/icons/MessageCircleCode.ts
const MessageCircleCode = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m10 9-3 3 3 3" }), path({ "d": "m14 15 3-3-3-3" }), path({ "d": "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" }));
};
//#endregion
//#region src/icons/MessageCircleDashed.ts
const MessageCircleDashed = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10.1 2.182a10 10 0 0 1 3.8 0" }), path({ "d": "M13.9 21.818a10 10 0 0 1-3.8 0" }), path({ "d": "M17.609 3.72a10 10 0 0 1 2.69 2.7" }), path({ "d": "M2.182 13.9a10 10 0 0 1 0-3.8" }), path({ "d": "M20.28 17.61a10 10 0 0 1-2.7 2.69" }), path({ "d": "M21.818 10.1a10 10 0 0 1 0 3.8" }), path({ "d": "M3.721 6.391a10 10 0 0 1 2.7-2.69" }), path({ "d": "m6.163 21.117-2.906.85a1 1 0 0 1-1.236-1.169l.965-2.98" }));
};
//#endregion
//#region src/icons/MessageCircleHeart.ts
const MessageCircleHeart = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" }), path({ "d": "M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 5.004 2.224 3 3 0 0 1-.832 2.083l-3.447 3.62a1 1 0 0 1-1.45-.001z" }));
};
//#endregion
//#region src/icons/MessageCircleMore.ts
const MessageCircleMore = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" }), path({ "d": "M8 12h.01" }), path({ "d": "M12 12h.01" }), path({ "d": "M16 12h.01" }));
};
//#endregion
//#region src/icons/MessageCircleOff.ts
const MessageCircleOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m2 2 20 20" }), path({ "d": "M4.93 4.929a10 10 0 0 0-1.938 11.412 2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 0 0 11.302-1.989" }), path({ "d": "M8.35 2.69A10 10 0 0 1 21.3 15.65" }));
};
//#endregion
//#region src/icons/MessageCirclePlus.ts
const MessageCirclePlus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" }), path({ "d": "M8 12h8" }), path({ "d": "M12 8v8" }));
};
//#endregion
//#region src/icons/MessageCircleQuestionMark.ts
const MessageCircleQuestionMark = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" }), path({ "d": "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }), path({ "d": "M12 17h.01" }));
};
//#endregion
//#region src/icons/MessageCircleReply.ts
const MessageCircleReply = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" }), path({ "d": "m10 15-3-3 3-3" }), path({ "d": "M7 12h8a2 2 0 0 1 2 2v1" }));
};
//#endregion
//#region src/icons/MessageCircleWarning.ts
const MessageCircleWarning = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" }), path({ "d": "M12 8v4" }), path({ "d": "M12 16h.01" }));
};
//#endregion
//#region src/icons/MessageCircleX.ts
const MessageCircleX = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" }), path({ "d": "m15 9-6 6" }), path({ "d": "m9 9 6 6" }));
};
//#endregion
//#region src/icons/MessageCircle.ts
const MessageCircle = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" }));
};
//#endregion
//#region src/icons/MessageSquareCheck.ts
const MessageSquareCheck = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.7.7 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" }), path({ "d": "m9 11 2 2 4-4" }));
};
//#endregion
//#region src/icons/MessageSquareCode.ts
const MessageSquareCode = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" }), path({ "d": "m10 8-3 3 3 3" }), path({ "d": "m14 14 3-3-3-3" }));
};
//#endregion
//#region src/icons/MessageSquareDashed.ts
const MessageSquareDashed = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M14 3h2" }), path({ "d": "M16 19h-2" }), path({ "d": "M2 12v-2" }), path({ "d": "M2 16v5.286a.71.71 0 0 0 1.212.502l1.149-1.149" }), path({ "d": "M20 19a2 2 0 0 0 2-2v-1" }), path({ "d": "M22 10v2" }), path({ "d": "M22 6V5a2 2 0 0 0-2-2" }), path({ "d": "M4 3a2 2 0 0 0-2 2v1" }), path({ "d": "M8 19h2" }), path({ "d": "M8 3h2" }));
};
//#endregion
//#region src/icons/MessageSquareDiff.ts
const MessageSquareDiff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" }), path({ "d": "M10 15h4" }), path({ "d": "M10 9h4" }), path({ "d": "M12 7v4" }));
};
//#endregion
//#region src/icons/MessageSquareDot.ts
const MessageSquareDot = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12.7 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4.7" }), circle({
		cx: "19",
		cy: "6",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/MessageSquareHeart.ts
const MessageSquareHeart = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" }), path({ "d": "M7.5 9.5c0 .687.265 1.383.697 1.844l3.009 3.264a1.14 1.14 0 0 0 .407.314 1 1 0 0 0 .783-.004 1.14 1.14 0 0 0 .398-.31l3.008-3.264A2.77 2.77 0 0 0 16.5 9.5 2.5 2.5 0 0 0 12 8a2.5 2.5 0 0 0-4.5 1.5" }));
};
//#endregion
//#region src/icons/MessageSquareLock.ts
const MessageSquareLock = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M22 8.5V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H10" }), path({ "d": "M20 15v-2a2 2 0 0 0-4 0v2" }), rect({
		"x": "14",
		"y": "15",
		width: "8",
		height: "5",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/MessageSquareMore.ts
const MessageSquareMore = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" }), path({ "d": "M12 11h.01" }), path({ "d": "M16 11h.01" }), path({ "d": "M8 11h.01" }));
};
//#endregion
//#region src/icons/MessageSquareOff.ts
const MessageSquareOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M19 19H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.7.7 0 0 1 2 21.286V5a2 2 0 0 1 1.184-1.826" }), path({ "d": "m2 2 20 20" }), path({ "d": "M8.656 3H20a2 2 0 0 1 2 2v11.344" }));
};
//#endregion
//#region src/icons/MessageSquarePlus.ts
const MessageSquarePlus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" }), path({ "d": "M12 8v6" }), path({ "d": "M9 11h6" }));
};
//#endregion
//#region src/icons/MessageSquareQuote.ts
const MessageSquareQuote = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M14 14a2 2 0 0 0 2-2V8h-2" }), path({ "d": "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" }), path({ "d": "M8 14a2 2 0 0 0 2-2V8H8" }));
};
//#endregion
//#region src/icons/MessageSquareReply.ts
const MessageSquareReply = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" }), path({ "d": "m10 8-3 3 3 3" }), path({ "d": "M17 14v-1a2 2 0 0 0-2-2H7" }));
};
//#endregion
//#region src/icons/MessageSquareShare.ts
const MessageSquareShare = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 3H4a2 2 0 0 0-2 2v16.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H20a2 2 0 0 0 2-2v-4" }), path({ "d": "M16 3h6v6" }), path({ "d": "m16 9 6-6" }));
};
//#endregion
//#region src/icons/MessageSquareText.ts
const MessageSquareText = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" }), path({ "d": "M7 11h10" }), path({ "d": "M7 15h6" }), path({ "d": "M7 7h8" }));
};
//#endregion
//#region src/icons/MessageSquareWarning.ts
const MessageSquareWarning = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" }), path({ "d": "M12 15h.01" }), path({ "d": "M12 7v4" }));
};
//#endregion
//#region src/icons/MessageSquareX.ts
const MessageSquareX = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" }), path({ "d": "m14.5 8.5-5 5" }), path({ "d": "m9.5 8.5 5 5" }));
};
//#endregion
//#region src/icons/MessageSquare.ts
const MessageSquare = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" }));
};
//#endregion
//#region src/icons/MessagesSquare.ts
const MessagesSquare = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" }), path({ "d": "M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1" }));
};
//#endregion
//#region src/icons/Metronome.ts
const Metronome = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 11.4V9.1" }), path({ "d": "m12 17 6.59-6.59" }), path({ "d": "m15.05 5.7-.218-.691a3 3 0 0 0-5.663 0L4.418 19.695A1 1 0 0 0 5.37 21h13.253a1 1 0 0 0 .951-1.31L18.45 16.2" }), circle({
		cx: "20",
		cy: "9",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/MicOff.ts
const MicOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 19v3" }), path({ "d": "M15 9.34V5a3 3 0 0 0-5.68-1.33" }), path({ "d": "M16.95 16.95A7 7 0 0 1 5 12v-2" }), path({ "d": "M18.89 13.23A7 7 0 0 0 19 12v-2" }), path({ "d": "m2 2 20 20" }), path({ "d": "M9 9v3a3 3 0 0 0 5.12 2.12" }));
};
//#endregion
//#region src/icons/MicVocal.ts
const MicVocal = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12" }), path({ "d": "M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5" }), circle({
		cx: "16",
		cy: "7",
		"r": "5"
	}));
};
//#endregion
//#region src/icons/Mic.ts
const Mic = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 19v3" }), path({ "d": "M19 10v2a7 7 0 0 1-14 0v-2" }), rect({
		"x": "9",
		"y": "2",
		width: "6",
		height: "13",
		rx: "3"
	}));
};
//#endregion
//#region src/icons/Microchip.ts
const Microchip = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 12h4" }), path({ "d": "M10 17h4" }), path({ "d": "M10 7h4" }), path({ "d": "M18 12h2" }), path({ "d": "M18 18h2" }), path({ "d": "M18 6h2" }), path({ "d": "M4 12h2" }), path({ "d": "M4 18h2" }), path({ "d": "M4 6h2" }), rect({
		"x": "6",
		"y": "2",
		width: "12",
		height: "20",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/Microscope.ts
const Microscope = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 18h8" }), path({ "d": "M3 22h18" }), path({ "d": "M14 22a7 7 0 1 0 0-14h-1" }), path({ "d": "M9 14h2" }), path({ "d": "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" }), path({ "d": "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" }));
};
//#endregion
//#region src/icons/Microwave.ts
const Microwave = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "20",
		height: "15",
		"x": "2",
		"y": "4",
		rx: "2"
	}), rect({
		width: "8",
		height: "7",
		"x": "6",
		"y": "8",
		rx: "1"
	}), path({ "d": "M18 8v7" }), path({ "d": "M6 19v2" }), path({ "d": "M18 19v2" }));
};
//#endregion
//#region src/icons/Milestone.ts
const Milestone = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 13v8" }), path({ "d": "M12 3v3" }), path({ "d": "M18.172 6a2 2 0 0 1 1.414.586l2.06 2.06a1.207 1.207 0 0 1 0 1.708l-2.06 2.06a2 2 0 0 1-1.414.586H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z" }));
};
//#endregion
//#region src/icons/MilkOff.ts
const MilkOff = (props = {}) => {
	const { path, line } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M8 2h8" }), path({ "d": "M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3" }), path({ "d": "M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435" }), line({
		x1: "2",
		x2: "22",
		y1: "2",
		y2: "22"
	}));
};
//#endregion
//#region src/icons/Milk.ts
const Milk = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M8 2h8" }), path({ "d": "M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2" }), path({ "d": "M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0" }));
};
//#endregion
//#region src/icons/Minimize2.ts
const Minimize2 = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m14 10 7-7" }), path({ "d": "M20 10h-6V4" }), path({ "d": "m3 21 7-7" }), path({ "d": "M4 14h6v6" }));
};
//#endregion
//#region src/icons/Minimize.ts
const Minimize = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M8 3v3a2 2 0 0 1-2 2H3" }), path({ "d": "M21 8h-3a2 2 0 0 1-2-2V3" }), path({ "d": "M3 16h3a2 2 0 0 1 2 2v3" }), path({ "d": "M16 21v-3a2 2 0 0 1 2-2h3" }));
};
//#endregion
//#region src/icons/Minus.ts
const Minus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M5 12h14" }));
};
//#endregion
//#region src/icons/MirrorRectangular.ts
const MirrorRectangular = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 6 8 9" }), path({ "d": "m16 7-8 8" }), rect({
		"x": "4",
		"y": "2",
		width: "16",
		height: "20",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/MirrorRound.ts
const MirrorRound = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 6.6 8.6 8" }), path({ "d": "M12 18v4" }), path({ "d": "M15 7.5 9.5 13" }), path({ "d": "M7 22h10" }), circle({
		cx: "12",
		cy: "10",
		"r": "8"
	}));
};
//#endregion
//#region src/icons/MonitorCheck.ts
const MonitorCheck = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m9 10 2 2 4-4" }), rect({
		width: "20",
		height: "14",
		"x": "2",
		"y": "3",
		rx: "2"
	}), path({ "d": "M12 17v4" }), path({ "d": "M8 21h8" }));
};
//#endregion
//#region src/icons/MonitorCloud.ts
const MonitorCloud = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 13a3 3 0 1 1 2.83-4H14a2 2 0 0 1 0 4z" }), path({ "d": "M12 17v4" }), path({ "d": "M8 21h8" }), rect({
		"x": "2",
		"y": "3",
		width: "20",
		height: "14",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/MonitorCog.ts
const MonitorCog = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 17v4" }), path({ "d": "m14.305 7.53.923-.382" }), path({ "d": "m15.228 4.852-.923-.383" }), path({ "d": "m16.852 3.228-.383-.924" }), path({ "d": "m16.852 8.772-.383.923" }), path({ "d": "m19.148 3.228.383-.924" }), path({ "d": "m19.53 9.696-.382-.924" }), path({ "d": "m20.772 4.852.924-.383" }), path({ "d": "m20.772 7.148.924.383" }), path({ "d": "M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" }), path({ "d": "M8 21h8" }), circle({
		cx: "18",
		cy: "6",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/MonitorDot.ts
const MonitorDot = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 17v4" }), path({ "d": "M22 12.307V15a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8.693" }), path({ "d": "M8 21h8" }), circle({
		cx: "19",
		cy: "6",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/MonitorDown.ts
const MonitorDown = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 13V7" }), path({ "d": "m15 10-3 3-3-3" }), rect({
		width: "20",
		height: "14",
		"x": "2",
		"y": "3",
		rx: "2"
	}), path({ "d": "M12 17v4" }), path({ "d": "M8 21h8" }));
};
//#endregion
//#region src/icons/MonitorOff.ts
const MonitorOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 17v4" }), path({ "d": "M17 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 1.184-1.826" }), path({ "d": "m2 2 20 20" }), path({ "d": "M8 21h8" }), path({ "d": "M8.656 3H20a2 2 0 0 1 2 2v10a2 2 0 0 1-.293 1.042" }));
};
//#endregion
//#region src/icons/MonitorPause.ts
const MonitorPause = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 13V7" }), path({ "d": "M14 13V7" }), rect({
		width: "20",
		height: "14",
		"x": "2",
		"y": "3",
		rx: "2"
	}), path({ "d": "M12 17v4" }), path({ "d": "M8 21h8" }));
};
//#endregion
//#region src/icons/MonitorPlay.ts
const MonitorPlay = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z" }), path({ "d": "M12 17v4" }), path({ "d": "M8 21h8" }), rect({
		"x": "2",
		"y": "3",
		width: "20",
		height: "14",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/MonitorSmartphone.ts
const MonitorSmartphone = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" }), path({ "d": "M10 19v-3.96 3.15" }), path({ "d": "M7 19h5" }), rect({
		width: "6",
		height: "10",
		"x": "16",
		"y": "12",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/MonitorSpeaker.ts
const MonitorSpeaker = (props = {}) => {
	const { path, rect, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M5.5 20H8" }), path({ "d": "M17 9h.01" }), rect({
		width: "10",
		height: "16",
		"x": "12",
		"y": "4",
		rx: "2"
	}), path({ "d": "M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4" }), circle({
		cx: "17",
		cy: "15",
		"r": "1"
	}));
};
//#endregion
//#region src/icons/MonitorStop.ts
const MonitorStop = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 17v4" }), path({ "d": "M8 21h8" }), rect({
		"x": "2",
		"y": "3",
		width: "20",
		height: "14",
		rx: "2"
	}), rect({
		"x": "9",
		"y": "7",
		width: "6",
		height: "6",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/MonitorUp.ts
const MonitorUp = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m9 10 3-3 3 3" }), path({ "d": "M12 13V7" }), rect({
		width: "20",
		height: "14",
		"x": "2",
		"y": "3",
		rx: "2"
	}), path({ "d": "M12 17v4" }), path({ "d": "M8 21h8" }));
};
//#endregion
//#region src/icons/MonitorX.ts
const MonitorX = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m14.5 12.5-5-5" }), path({ "d": "m9.5 12.5 5-5" }), rect({
		width: "20",
		height: "14",
		"x": "2",
		"y": "3",
		rx: "2"
	}), path({ "d": "M12 17v4" }), path({ "d": "M8 21h8" }));
};
//#endregion
//#region src/icons/Monitor.ts
const Monitor = (props = {}) => {
	const { rect, line } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "20",
		height: "14",
		"x": "2",
		"y": "3",
		rx: "2"
	}), line({
		x1: "8",
		x2: "16",
		y1: "21",
		y2: "21"
	}), line({
		x1: "12",
		x2: "12",
		y1: "17",
		y2: "21"
	}));
};
//#endregion
//#region src/icons/MoonStar.ts
const MoonStar = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M18 5h4" }), path({ "d": "M20 3v4" }), path({ "d": "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" }));
};
//#endregion
//#region src/icons/Moon.ts
const Moon = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" }));
};
//#endregion
//#region src/icons/Motorbike.ts
const Motorbike = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m18 14-1-3" }), path({ "d": "m3 9 6 2a2 2 0 0 1 2-2h2a2 2 0 0 1 1.99 1.81" }), path({ "d": "M8 17h3a1 1 0 0 0 1-1 6 6 0 0 1 6-6 1 1 0 0 0 1-1v-.75A5 5 0 0 0 17 5" }), circle({
		cx: "19",
		cy: "17",
		"r": "3"
	}), circle({
		cx: "5",
		cy: "17",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/MountainSnow.ts
const MountainSnow = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m8 3 4 8 5-5 5 15H2L8 3z" }), path({ "d": "M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19" }));
};
//#endregion
//#region src/icons/Mountain.ts
const Mountain = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m8 3 4 8 5-5 5 15H2L8 3z" }));
};
//#endregion
//#region src/icons/MouseLeft.ts
const MouseLeft = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 7.318V10" }), path({ "d": "M5 10v5a7 7 0 0 0 14 0V9c0-3.527-2.608-6.515-6-7" }), circle({
		cx: "7",
		cy: "4",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/MouseOff.ts
const MouseOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 6v.343" }), path({ "d": "M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218" }), path({ "d": "M19 13.343V9A7 7 0 0 0 8.56 2.902" }), path({ "d": "M22 22 2 2" }));
};
//#endregion
//#region src/icons/MousePointer2Off.ts
const MousePointer2Off = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m15.55 8.45 5.138 2.087a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063L8.45 15.551" }), path({ "d": "M22 2 2 22" }), path({ "d": "m6.816 11.528-2.779-6.84a.495.495 0 0 1 .651-.651l6.84 2.779" }));
};
//#endregion
//#region src/icons/MousePointer2.ts
const MousePointer2 = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" }));
};
//#endregion
//#region src/icons/MousePointerBan.ts
const MousePointerBan = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2.034 2.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033z" }), circle({
		cx: "16",
		cy: "16",
		"r": "6"
	}), path({ "d": "m11.8 11.8 8.4 8.4" }));
};
//#endregion
//#region src/icons/MousePointerClick.ts
const MousePointerClick = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M14 4.1 12 6" }), path({ "d": "m5.1 8-2.9-.8" }), path({ "d": "m6 12-1.9 2" }), path({ "d": "M7.2 2.2 8 5.1" }), path({ "d": "M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z" }));
};
//#endregion
//#region src/icons/MousePointer.ts
const MousePointer = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12.586 12.586 19 19" }), path({ "d": "M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z" }));
};
//#endregion
//#region src/icons/MouseRight.ts
const MouseRight = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 7.318V10" }), path({ "d": "M19 10v5a7 7 0 0 1-14 0V9c0-3.527 2.608-6.515 6-7" }), circle({
		cx: "17",
		cy: "4",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/Mouse.ts
const Mouse = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		"x": "5",
		"y": "2",
		width: "14",
		height: "20",
		rx: "7"
	}), path({ "d": "M12 6v4" }));
};
//#endregion
//#region src/icons/Move3d.ts
const Move3d = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M5 3v16h16" }), path({ "d": "m5 19 6-6" }), path({ "d": "m2 6 3-3 3 3" }), path({ "d": "m18 16 3 3-3 3" }));
};
//#endregion
//#region src/icons/MoveDiagonal2.ts
const MoveDiagonal2 = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M19 13v6h-6" }), path({ "d": "M5 11V5h6" }), path({ "d": "m5 5 14 14" }));
};
//#endregion
//#region src/icons/MoveDiagonal.ts
const MoveDiagonal = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 19H5v-6" }), path({ "d": "M13 5h6v6" }), path({ "d": "M19 5 5 19" }));
};
//#endregion
//#region src/icons/MoveDownLeft.ts
const MoveDownLeft = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 19H5V13" }), path({ "d": "M19 5L5 19" }));
};
//#endregion
//#region src/icons/MoveDownRight.ts
const MoveDownRight = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M19 13V19H13" }), path({ "d": "M5 5L19 19" }));
};
//#endregion
//#region src/icons/MoveDown.ts
const MoveDown = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M8 18L12 22L16 18" }), path({ "d": "M12 2V22" }));
};
//#endregion
//#region src/icons/MoveHorizontal.ts
const MoveHorizontal = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m18 8 4 4-4 4" }), path({ "d": "M2 12h20" }), path({ "d": "m6 8-4 4 4 4" }));
};
//#endregion
//#region src/icons/MoveLeft.ts
const MoveLeft = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 8L2 12L6 16" }), path({ "d": "M2 12H22" }));
};
//#endregion
//#region src/icons/MoveRight.ts
const MoveRight = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M18 8L22 12L18 16" }), path({ "d": "M2 12H22" }));
};
//#endregion
//#region src/icons/MoveUpLeft.ts
const MoveUpLeft = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M5 11V5H11" }), path({ "d": "M5 5L19 19" }));
};
//#endregion
//#region src/icons/MoveUpRight.ts
const MoveUpRight = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13 5H19V11" }), path({ "d": "M19 5L5 19" }));
};
//#endregion
//#region src/icons/MoveUp.ts
const MoveUp = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M8 6L12 2L16 6" }), path({ "d": "M12 2V22" }));
};
//#endregion
//#region src/icons/MoveVertical.ts
const MoveVertical = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 2v20" }), path({ "d": "m8 18 4 4 4-4" }), path({ "d": "m8 6 4-4 4 4" }));
};
//#endregion
//#region src/icons/Move.ts
const Move = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 2v20" }), path({ "d": "m15 19-3 3-3-3" }), path({ "d": "m19 9 3 3-3 3" }), path({ "d": "M2 12h20" }), path({ "d": "m5 9-3 3 3 3" }), path({ "d": "m9 5 3-3 3 3" }));
};
//#endregion
//#region src/icons/Music2.ts
const Music2 = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "8",
		cy: "18",
		"r": "4"
	}), path({ "d": "M12 18V2l7 4" }));
};
//#endregion
//#region src/icons/Music3.ts
const Music3 = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "18",
		"r": "4"
	}), path({ "d": "M16 18V2" }));
};
//#endregion
//#region src/icons/Music4.ts
const Music4 = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M9 18V5l12-2v13" }), path({ "d": "m9 9 12-2" }), circle({
		cx: "6",
		cy: "18",
		"r": "3"
	}), circle({
		cx: "18",
		cy: "16",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/Music.ts
const Music = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M9 18V5l12-2v13" }), circle({
		cx: "6",
		cy: "18",
		"r": "3"
	}), circle({
		cx: "18",
		cy: "16",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/Navigation2Off.ts
const Navigation2Off = (props = {}) => {
	const { path, line } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M9.31 9.31 5 21l7-4 7 4-1.17-3.17" }), path({ "d": "M14.53 8.88 12 2l-1.17 3.17" }), line({
		x1: "2",
		x2: "22",
		y1: "2",
		y2: "22"
	}));
};
//#endregion
//#region src/icons/Navigation2.ts
const Navigation2 = (props = {}) => {
	const { polygon } = van.tags(svgNamespace);
	return LucideIcon(props, polygon({ points: "12 2 19 21 12 17 5 21 12 2" }));
};
//#endregion
//#region src/icons/NavigationOff.ts
const NavigationOff = (props = {}) => {
	const { path, line } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M8.43 8.43 3 11l8 2 2 8 2.57-5.43" }), path({ "d": "M17.39 11.73 22 2l-9.73 4.61" }), line({
		x1: "2",
		x2: "22",
		y1: "2",
		y2: "22"
	}));
};
//#endregion
//#region src/icons/Navigation.ts
const Navigation = (props = {}) => {
	const { polygon } = van.tags(svgNamespace);
	return LucideIcon(props, polygon({ points: "3 11 22 2 13 21 11 13 3 11" }));
};
//#endregion
//#region src/icons/Network.ts
const Network = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		"x": "16",
		"y": "16",
		width: "6",
		height: "6",
		rx: "1"
	}), rect({
		"x": "2",
		"y": "16",
		width: "6",
		height: "6",
		rx: "1"
	}), rect({
		"x": "9",
		"y": "2",
		width: "6",
		height: "6",
		rx: "1"
	}), path({ "d": "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" }), path({ "d": "M12 12V8" }));
};
//#endregion
//#region src/icons/Newspaper.ts
const Newspaper = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M15 18h-5" }), path({ "d": "M18 14h-8" }), path({ "d": "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2" }), rect({
		width: "8",
		height: "4",
		"x": "10",
		"y": "6",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/Nfc.ts
const Nfc = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 8.32a7.43 7.43 0 0 1 0 7.36" }), path({ "d": "M9.46 6.21a11.76 11.76 0 0 1 0 11.58" }), path({ "d": "M12.91 4.1a15.91 15.91 0 0 1 .01 15.8" }), path({ "d": "M16.37 2a20.16 20.16 0 0 1 0 20" }));
};
//#endregion
//#region src/icons/NonBinary.ts
const NonBinary = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 2v10" }), path({ "d": "m8.5 4 7 4" }), path({ "d": "m8.5 8 7-4" }), circle({
		cx: "12",
		cy: "17",
		"r": "5"
	}));
};
//#endregion
//#region src/icons/NotebookPen.ts
const NotebookPen = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" }), path({ "d": "M2 6h4" }), path({ "d": "M2 10h4" }), path({ "d": "M2 14h4" }), path({ "d": "M2 18h4" }), path({ "d": "M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" }));
};
//#endregion
//#region src/icons/NotebookTabs.ts
const NotebookTabs = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 6h4" }), path({ "d": "M2 10h4" }), path({ "d": "M2 14h4" }), path({ "d": "M2 18h4" }), rect({
		width: "16",
		height: "20",
		"x": "4",
		"y": "2",
		rx: "2"
	}), path({ "d": "M15 2v20" }), path({ "d": "M15 7h5" }), path({ "d": "M15 12h5" }), path({ "d": "M15 17h5" }));
};
//#endregion
//#region src/icons/NotebookText.ts
const NotebookText = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 6h4" }), path({ "d": "M2 10h4" }), path({ "d": "M2 14h4" }), path({ "d": "M2 18h4" }), rect({
		width: "16",
		height: "20",
		"x": "4",
		"y": "2",
		rx: "2"
	}), path({ "d": "M9.5 8h5" }), path({ "d": "M9.5 12H16" }), path({ "d": "M9.5 16H14" }));
};
//#endregion
//#region src/icons/Notebook.ts
const Notebook = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 6h4" }), path({ "d": "M2 10h4" }), path({ "d": "M2 14h4" }), path({ "d": "M2 18h4" }), rect({
		width: "16",
		height: "20",
		"x": "4",
		"y": "2",
		rx: "2"
	}), path({ "d": "M16 2v20" }));
};
//#endregion
//#region src/icons/NotepadTextDashed.ts
const NotepadTextDashed = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M8 2v4" }), path({ "d": "M12 2v4" }), path({ "d": "M16 2v4" }), path({ "d": "M16 4h2a2 2 0 0 1 2 2v2" }), path({ "d": "M20 12v2" }), path({ "d": "M20 18v2a2 2 0 0 1-2 2h-1" }), path({ "d": "M13 22h-2" }), path({ "d": "M7 22H6a2 2 0 0 1-2-2v-2" }), path({ "d": "M4 14v-2" }), path({ "d": "M4 8V6a2 2 0 0 1 2-2h2" }), path({ "d": "M8 10h6" }), path({ "d": "M8 14h8" }), path({ "d": "M8 18h5" }));
};
//#endregion
//#region src/icons/NotepadText.ts
const NotepadText = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M8 2v4" }), path({ "d": "M12 2v4" }), path({ "d": "M16 2v4" }), rect({
		width: "16",
		height: "18",
		"x": "4",
		"y": "4",
		rx: "2"
	}), path({ "d": "M8 10h6" }), path({ "d": "M8 14h8" }), path({ "d": "M8 18h5" }));
};
//#endregion
//#region src/icons/NutOff.ts
const NutOff = (props = {}) => {
	const { path, line } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 4V2" }), path({ "d": "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939" }), path({ "d": "M19 10v3.343" }), path({ "d": "M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192" }), line({
		x1: "2",
		x2: "22",
		y1: "2",
		y2: "22"
	}));
};
//#endregion
//#region src/icons/Nut.ts
const Nut = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 4V2" }), path({ "d": "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4" }), path({ "d": "M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z" }));
};
//#endregion
//#region src/icons/OctagonAlert.ts
const OctagonAlert = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 16h.01" }), path({ "d": "M12 8v4" }), path({ "d": "M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z" }));
};
//#endregion
//#region src/icons/OctagonMinus.ts
const OctagonMinus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z" }), path({ "d": "M8 12h8" }));
};
//#endregion
//#region src/icons/OctagonPause.ts
const OctagonPause = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 15V9" }), path({ "d": "M14 15V9" }), path({ "d": "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z" }));
};
//#endregion
//#region src/icons/OctagonX.ts
const OctagonX = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m15 9-6 6" }), path({ "d": "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z" }), path({ "d": "m9 9 6 6" }));
};
//#endregion
//#region src/icons/Octagon.ts
const Octagon = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z" }));
};
//#endregion
//#region src/icons/Omega.ts
const Omega = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 20h4.5a.5.5 0 0 0 .5-.5v-.282a.52.52 0 0 0-.247-.437 8 8 0 1 1 8.494-.001.52.52 0 0 0-.247.438v.282a.5.5 0 0 0 .5.5H21" }));
};
//#endregion
//#region src/icons/Option.ts
const Option = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 3h6l6 18h6" }), path({ "d": "M14 3h7" }));
};
//#endregion
//#region src/icons/Orbit.ts
const Orbit = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20.341 6.484A10 10 0 0 1 10.266 21.85" }), path({ "d": "M3.659 17.516A10 10 0 0 1 13.74 2.152" }), circle({
		cx: "12",
		cy: "12",
		"r": "3"
	}), circle({
		cx: "19",
		cy: "5",
		"r": "2"
	}), circle({
		cx: "5",
		cy: "19",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/Origami.ts
const Origami = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025" }), path({ "d": "m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009" }), path({ "d": "m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027" }));
};
//#endregion
//#region src/icons/Package2.ts
const Package2 = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 3v6" }), path({ "d": "M16.76 3a2 2 0 0 1 1.8 1.1l2.23 4.479a2 2 0 0 1 .21.891V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.472a2 2 0 0 1 .211-.894L5.45 4.1A2 2 0 0 1 7.24 3z" }), path({ "d": "M3.054 9.013h17.893" }));
};
//#endregion
//#region src/icons/PackageCheck.ts
const PackageCheck = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 22V12" }), path({ "d": "m16 17 2 2 4-4" }), path({ "d": "M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753" }), path({ "d": "M3.29 7 12 12l8.71-5" }), path({ "d": "m7.5 4.27 8.997 5.148" }));
};
//#endregion
//#region src/icons/PackageMinus.ts
const PackageMinus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 22V12" }), path({ "d": "M16 17h6" }), path({ "d": "M21 13V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.675-.955" }), path({ "d": "M3.29 7 12 12l8.71-5" }), path({ "d": "m7.5 4.27 8.997 5.148" }));
};
//#endregion
//#region src/icons/PackageOpen.ts
const PackageOpen = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 22v-9" }), path({ "d": "M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z" }), path({ "d": "M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13" }), path({ "d": "M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z" }));
};
//#endregion
//#region src/icons/PackagePlus.ts
const PackagePlus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 22V12" }), path({ "d": "M16 17h6" }), path({ "d": "M19 14v6" }), path({ "d": "M21 10.535V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.675-.955" }), path({ "d": "M3.29 7 12 12l8.71-5" }), path({ "d": "m7.5 4.27 8.997 5.148" }));
};
//#endregion
//#region src/icons/PackageSearch.ts
const PackageSearch = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 22V12" }), path({ "d": "M20.27 18.27 22 20" }), path({ "d": "M21 10.498V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l.98-.559" }), path({ "d": "M3.29 7 12 12l8.71-5" }), path({ "d": "m7.5 4.27 8.997 5.148" }), circle({
		cx: "18.5",
		cy: "16.5",
		"r": "2.5"
	}));
};
//#endregion
//#region src/icons/PackageX.ts
const PackageX = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 22V12" }), path({ "d": "m16.5 14.5 5 5" }), path({ "d": "m16.5 19.5 5-5" }), path({ "d": "M21 10.5V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l.13-.074" }), path({ "d": "M3.29 7 12 12l8.71-5" }), path({ "d": "m7.5 4.27 8.997 5.148" }));
};
//#endregion
//#region src/icons/Package.ts
const Package = (props = {}) => {
	const { path, polyline } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" }), path({ "d": "M12 22V12" }), polyline({ points: "3.29 7 12 12 20.71 7" }), path({ "d": "m7.5 4.27 9 5.15" }));
};
//#endregion
//#region src/icons/PaintBucket.ts
const PaintBucket = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 7 6 2" }), path({ "d": "M18.992 12H2.041" }), path({ "d": "M21.145 18.38A3.34 3.34 0 0 1 20 16.5a3.3 3.3 0 0 1-1.145 1.88c-.575.46-.855 1.02-.855 1.595A2 2 0 0 0 20 22a2 2 0 0 0 2-2.025c0-.58-.285-1.13-.855-1.595" }), path({ "d": "m8.5 4.5 2.148-2.148a1.205 1.205 0 0 1 1.704 0l7.296 7.296a1.205 1.205 0 0 1 0 1.704l-7.592 7.592a3.615 3.615 0 0 1-5.112 0l-3.888-3.888a3.615 3.615 0 0 1 0-5.112L5.67 7.33" }));
};
//#endregion
//#region src/icons/PaintRoller.ts
const PaintRoller = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "16",
		height: "6",
		"x": "2",
		"y": "2",
		rx: "2"
	}), path({ "d": "M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" }), rect({
		width: "4",
		height: "6",
		"x": "8",
		"y": "16",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/PaintbrushVertical.ts
const PaintbrushVertical = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 2v2" }), path({ "d": "M14 2v4" }), path({ "d": "M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z" }), path({ "d": "M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1" }));
};
//#endregion
//#region src/icons/Paintbrush.ts
const Paintbrush = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m14.622 17.897-10.68-2.913" }), path({ "d": "M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z" }), path({ "d": "M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15" }));
};
//#endregion
//#region src/icons/Palette.ts
const Palette = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z" }), circle({
		cx: "13.5",
		cy: "6.5",
		"r": ".5",
		fill: "currentColor"
	}), circle({
		cx: "17.5",
		cy: "10.5",
		"r": ".5",
		fill: "currentColor"
	}), circle({
		cx: "6.5",
		cy: "12.5",
		"r": ".5",
		fill: "currentColor"
	}), circle({
		cx: "8.5",
		cy: "7.5",
		"r": ".5",
		fill: "currentColor"
	}));
};
//#endregion
//#region src/icons/Panda.ts
const Panda = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11.25 17.25h1.5L12 18z" }), path({ "d": "m15 12 2 2" }), path({ "d": "M18 6.5a.5.5 0 0 0-.5-.5" }), path({ "d": "M20.69 9.67a4.5 4.5 0 1 0-7.04-5.5 8.35 8.35 0 0 0-3.3 0 4.5 4.5 0 1 0-7.04 5.5C2.49 11.2 2 12.88 2 14.5 2 19.47 6.48 22 12 22s10-2.53 10-7.5c0-1.62-.48-3.3-1.3-4.83" }), path({ "d": "M6 6.5a.495.495 0 0 1 .5-.5" }), path({ "d": "m9 12-2 2" }));
};
//#endregion
//#region src/icons/PanelBottomClose.ts
const PanelBottomClose = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M3 15h18" }), path({ "d": "m15 8-3 3-3-3" }));
};
//#endregion
//#region src/icons/PanelBottomDashed.ts
const PanelBottomDashed = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M14 15h1" }), path({ "d": "M19 15h2" }), path({ "d": "M3 15h2" }), path({ "d": "M9 15h1" }));
};
//#endregion
//#region src/icons/PanelBottomOpen.ts
const PanelBottomOpen = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M3 15h18" }), path({ "d": "m9 10 3-3 3 3" }));
};
//#endregion
//#region src/icons/PanelBottom.ts
const PanelBottom = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M3 15h18" }));
};
//#endregion
//#region src/icons/PanelLeftClose.ts
const PanelLeftClose = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M9 3v18" }), path({ "d": "m16 15-3-3 3-3" }));
};
//#endregion
//#region src/icons/PanelLeftDashed.ts
const PanelLeftDashed = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M9 14v1" }), path({ "d": "M9 19v2" }), path({ "d": "M9 3v2" }), path({ "d": "M9 9v1" }));
};
//#endregion
//#region src/icons/PanelLeftOpen.ts
const PanelLeftOpen = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M9 3v18" }), path({ "d": "m14 9 3 3-3 3" }));
};
//#endregion
//#region src/icons/PanelLeftRightDashed.ts
const PanelLeftRightDashed = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M15 10V9" }), path({ "d": "M15 15v-1" }), path({ "d": "M15 21v-2" }), path({ "d": "M15 5V3" }), path({ "d": "M9 10V9" }), path({ "d": "M9 15v-1" }), path({ "d": "M9 21v-2" }), path({ "d": "M9 5V3" }), rect({
		"x": "3",
		"y": "3",
		width: "18",
		height: "18",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/PanelLeft.ts
const PanelLeft = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M9 3v18" }));
};
//#endregion
//#region src/icons/PanelRightClose.ts
const PanelRightClose = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M15 3v18" }), path({ "d": "m8 9 3 3-3 3" }));
};
//#endregion
//#region src/icons/PanelRightDashed.ts
const PanelRightDashed = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M15 14v1" }), path({ "d": "M15 19v2" }), path({ "d": "M15 3v2" }), path({ "d": "M15 9v1" }));
};
//#endregion
//#region src/icons/PanelRightOpen.ts
const PanelRightOpen = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M15 3v18" }), path({ "d": "m10 15-3-3 3-3" }));
};
//#endregion
//#region src/icons/PanelRight.ts
const PanelRight = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M15 3v18" }));
};
//#endregion
//#region src/icons/PanelTopBottomDashed.ts
const PanelTopBottomDashed = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M14 15h1" }), path({ "d": "M14 9h1" }), path({ "d": "M19 15h2" }), path({ "d": "M19 9h2" }), path({ "d": "M3 15h2" }), path({ "d": "M3 9h2" }), path({ "d": "M9 15h1" }), path({ "d": "M9 9h1" }), rect({
		"x": "3",
		"y": "3",
		width: "18",
		height: "18",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/PanelTopClose.ts
const PanelTopClose = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M3 9h18" }), path({ "d": "m9 16 3-3 3 3" }));
};
//#endregion
//#region src/icons/PanelTopDashed.ts
const PanelTopDashed = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M14 9h1" }), path({ "d": "M19 9h2" }), path({ "d": "M3 9h2" }), path({ "d": "M9 9h1" }));
};
//#endregion
//#region src/icons/PanelTopOpen.ts
const PanelTopOpen = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M3 9h18" }), path({ "d": "m15 14-3 3-3-3" }));
};
//#endregion
//#region src/icons/PanelTop.ts
const PanelTop = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M3 9h18" }));
};
//#endregion
//#region src/icons/PanelsLeftBottom.ts
const PanelsLeftBottom = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M9 3v18" }), path({ "d": "M9 15h12" }));
};
//#endregion
//#region src/icons/PanelsRightBottom.ts
const PanelsRightBottom = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M3 15h12" }), path({ "d": "M15 3v18" }));
};
//#endregion
//#region src/icons/PanelsTopLeft.ts
const PanelsTopLeft = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M3 9h18" }), path({ "d": "M9 21V9" }));
};
//#endregion
//#region src/icons/Paperclip.ts
const Paperclip = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551" }));
};
//#endregion
//#region src/icons/Parentheses.ts
const Parentheses = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M8 21s-4-3-4-9 4-9 4-9" }), path({ "d": "M16 3s4 3 4 9-4 9-4 9" }));
};
//#endregion
//#region src/icons/ParkingMeter.ts
const ParkingMeter = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 15h2" }), path({ "d": "M12 12v3" }), path({ "d": "M12 19v3" }), path({ "d": "M15.282 19a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z" }), path({ "d": "M9 9a3 3 0 1 1 6 0" }));
};
//#endregion
//#region src/icons/PartyPopper.ts
const PartyPopper = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M5.8 11.3 2 22l10.7-3.79" }), path({ "d": "M4 3h.01" }), path({ "d": "M22 8h.01" }), path({ "d": "M15 2h.01" }), path({ "d": "M22 20h.01" }), path({ "d": "m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" }), path({ "d": "m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17" }), path({ "d": "m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7" }), path({ "d": "M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z" }));
};
//#endregion
//#region src/icons/Pause.ts
const Pause = (props = {}) => {
	const { rect } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		"x": "14",
		"y": "3",
		width: "5",
		height: "18",
		rx: "1"
	}), rect({
		"x": "5",
		"y": "3",
		width: "5",
		height: "18",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/PawPrint.ts
const PawPrint = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "11",
		cy: "4",
		"r": "2"
	}), circle({
		cx: "18",
		cy: "8",
		"r": "2"
	}), circle({
		cx: "20",
		cy: "16",
		"r": "2"
	}), path({ "d": "M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" }));
};
//#endregion
//#region src/icons/PcCase.ts
const PcCase = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "14",
		height: "20",
		"x": "5",
		"y": "2",
		rx: "2"
	}), path({ "d": "M15 14h.01" }), path({ "d": "M9 6h6" }), path({ "d": "M9 10h6" }));
};
//#endregion
//#region src/icons/PenLine.ts
const PenLine = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13 21h8" }), path({ "d": "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" }));
};
//#endregion
//#region src/icons/PenOff.ts
const PenOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982" }), path({ "d": "m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353" }), path({ "d": "m2 2 20 20" }));
};
//#endregion
//#region src/icons/PenTool.ts
const PenTool = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z" }), path({ "d": "m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18" }), path({ "d": "m2.3 2.3 7.286 7.286" }), circle({
		cx: "11",
		cy: "11",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/Pen.ts
const Pen = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" }));
};
//#endregion
//#region src/icons/PencilLine.ts
const PencilLine = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13 21h8" }), path({ "d": "m15 5 4 4" }), path({ "d": "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" }));
};
//#endregion
//#region src/icons/PencilOff.ts
const PencilOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982" }), path({ "d": "m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353" }), path({ "d": "m15 5 4 4" }), path({ "d": "m2 2 20 20" }));
};
//#endregion
//#region src/icons/PencilRuler.ts
const PencilRuler = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" }), path({ "d": "m8 6 2-2" }), path({ "d": "m18 16 2-2" }), path({ "d": "m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" }), path({ "d": "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" }), path({ "d": "m15 5 4 4" }));
};
//#endregion
//#region src/icons/Pencil.ts
const Pencil = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" }), path({ "d": "m15 5 4 4" }));
};
//#endregion
//#region src/icons/Pentagon.ts
const Pentagon = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10.83 2.38a2 2 0 0 1 2.34 0l8 5.74a2 2 0 0 1 .73 2.25l-3.04 9.26a2 2 0 0 1-1.9 1.37H7.04a2 2 0 0 1-1.9-1.37L2.1 10.37a2 2 0 0 1 .73-2.25z" }));
};
//#endregion
//#region src/icons/Percent.ts
const Percent = (props = {}) => {
	const { line, circle } = van.tags(svgNamespace);
	return LucideIcon(props, line({
		x1: "19",
		x2: "5",
		y1: "5",
		y2: "19"
	}), circle({
		cx: "6.5",
		cy: "6.5",
		"r": "2.5"
	}), circle({
		cx: "17.5",
		cy: "17.5",
		"r": "2.5"
	}));
};
//#endregion
//#region src/icons/PersonStanding.ts
const PersonStanding = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "5",
		"r": "1"
	}), path({ "d": "m9 20 3-6 3 6" }), path({ "d": "m6 8 6 2 6-2" }), path({ "d": "M12 10v4" }));
};
//#endregion
//#region src/icons/PhilippinePeso.ts
const PhilippinePeso = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20 11H4" }), path({ "d": "M20 7H4" }), path({ "d": "M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7" }));
};
//#endregion
//#region src/icons/PhoneCall.ts
const PhoneCall = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13 2a9 9 0 0 1 9 9" }), path({ "d": "M13 6a5 5 0 0 1 5 5" }), path({ "d": "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" }));
};
//#endregion
//#region src/icons/PhoneForwarded.ts
const PhoneForwarded = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M14 6h8" }), path({ "d": "m18 2 4 4-4 4" }), path({ "d": "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" }));
};
//#endregion
//#region src/icons/PhoneIncoming.ts
const PhoneIncoming = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 2v6h6" }), path({ "d": "m22 2-6 6" }), path({ "d": "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" }));
};
//#endregion
//#region src/icons/PhoneMissed.ts
const PhoneMissed = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m16 2 6 6" }), path({ "d": "m22 2-6 6" }), path({ "d": "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" }));
};
//#endregion
//#region src/icons/PhoneOff.ts
const PhoneOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 18 18 0 0 1-12.728-5.272" }), path({ "d": "M22 2 2 22" }), path({ "d": "M4.76 13.582A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 .244.473" }));
};
//#endregion
//#region src/icons/PhoneOutgoing.ts
const PhoneOutgoing = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m16 8 6-6" }), path({ "d": "M22 8V2h-6" }), path({ "d": "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" }));
};
//#endregion
//#region src/icons/Phone.ts
const Phone = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" }));
};
//#endregion
//#region src/icons/Pi.ts
const Pi = (props = {}) => {
	const { line, path } = van.tags(svgNamespace);
	return LucideIcon(props, line({
		x1: "9",
		x2: "9",
		y1: "4",
		y2: "20"
	}), path({ "d": "M4 7c0-1.7 1.3-3 3-3h13" }), path({ "d": "M18 20c-1.7 0-3-1.3-3-3V4" }));
};
//#endregion
//#region src/icons/Piano.ts
const Piano = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8" }), path({ "d": "M2 14h20" }), path({ "d": "M6 14v4" }), path({ "d": "M10 14v4" }), path({ "d": "M14 14v4" }), path({ "d": "M18 14v4" }));
};
//#endregion
//#region src/icons/Pickaxe.ts
const Pickaxe = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m14 13-8.381 8.38a1 1 0 0 1-3.001-3L11 9.999" }), path({ "d": "M15.973 4.027A13 13 0 0 0 5.902 2.373c-1.398.342-1.092 2.158.277 2.601a19.9 19.9 0 0 1 5.822 3.024" }), path({ "d": "M16.001 11.999a19.9 19.9 0 0 1 3.024 5.824c.444 1.369 2.26 1.676 2.603.278A13 13 0 0 0 20 8.069" }), path({ "d": "M18.352 3.352a1.205 1.205 0 0 0-1.704 0l-5.296 5.296a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l5.296-5.296a1.205 1.205 0 0 0 0-1.704z" }));
};
//#endregion
//#region src/icons/PictureInPicture2.ts
const PictureInPicture2 = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4" }), rect({
		width: "10",
		height: "7",
		"x": "12",
		"y": "13",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/PictureInPicture.ts
const PictureInPicture = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 10h6V4" }), path({ "d": "m2 4 6 6" }), path({ "d": "M21 10V7a2 2 0 0 0-2-2h-7" }), path({ "d": "M3 14v2a2 2 0 0 0 2 2h3" }), rect({
		"x": "12",
		"y": "14",
		width: "10",
		height: "7",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/PiggyBank.ts
const PiggyBank = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z" }), path({ "d": "M16 10h.01" }), path({ "d": "M2 8v1a2 2 0 0 0 2 2h1" }));
};
//#endregion
//#region src/icons/PilcrowLeft.ts
const PilcrowLeft = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M14 3v11" }), path({ "d": "M14 9h-3a3 3 0 0 1 0-6h9" }), path({ "d": "M18 3v11" }), path({ "d": "M22 18H2l4-4" }), path({ "d": "m6 22-4-4" }));
};
//#endregion
//#region src/icons/PilcrowRight.ts
const PilcrowRight = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 3v11" }), path({ "d": "M10 9H7a1 1 0 0 1 0-6h8" }), path({ "d": "M14 3v11" }), path({ "d": "m18 14 4 4H2" }), path({ "d": "m22 18-4 4" }));
};
//#endregion
//#region src/icons/Pilcrow.ts
const Pilcrow = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13 4v16" }), path({ "d": "M17 4v16" }), path({ "d": "M19 4H9.5a4.5 4.5 0 0 0 0 9H13" }));
};
//#endregion
//#region src/icons/PillBottle.ts
const PillBottle = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4" }), path({ "d": "M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7" }), rect({
		width: "16",
		height: "5",
		"x": "4",
		"y": "2",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/Pill.ts
const Pill = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" }), path({ "d": "m8.5 8.5 7 7" }));
};
//#endregion
//#region src/icons/PinOff.ts
const PinOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 17v5" }), path({ "d": "M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89" }), path({ "d": "m2 2 20 20" }), path({ "d": "M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11" }));
};
//#endregion
//#region src/icons/Pin.ts
const Pin = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 17v5" }), path({ "d": "M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z" }));
};
//#endregion
//#region src/icons/Pipette.ts
const Pipette = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m12 9-8.414 8.414A2 2 0 0 0 3 18.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 3.828 21h1.344a2 2 0 0 0 1.414-.586L15 12" }), path({ "d": "m18 9 .4.4a1 1 0 1 1-3 3l-3.8-3.8a1 1 0 1 1 3-3l.4.4 3.4-3.4a1 1 0 1 1 3 3z" }), path({ "d": "m2 22 .414-.414" }));
};
//#endregion
//#region src/icons/Pizza.ts
const Pizza = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m12 14-1 1" }), path({ "d": "m13.75 18.25-1.25 1.42" }), path({ "d": "M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12" }), path({ "d": "M18.8 9.3a1 1 0 0 0 2.1 7.7" }), path({ "d": "M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z" }));
};
//#endregion
//#region src/icons/PlaneLanding.ts
const PlaneLanding = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 22h20" }), path({ "d": "M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z" }));
};
//#endregion
//#region src/icons/PlaneTakeoff.ts
const PlaneTakeoff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 22h20" }), path({ "d": "M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z" }));
};
//#endregion
//#region src/icons/Plane.ts
const Plane = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" }));
};
//#endregion
//#region src/icons/Play.ts
const Play = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" }));
};
//#endregion
//#region src/icons/Plug2.ts
const Plug2 = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M9 2v6" }), path({ "d": "M15 2v6" }), path({ "d": "M12 17v5" }), path({ "d": "M5 8h14" }), path({ "d": "M6 11V8h12v3a6 6 0 1 1-12 0Z" }));
};
//#endregion
//#region src/icons/PlugZap.ts
const PlugZap = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" }), path({ "d": "m2 22 3-3" }), path({ "d": "M7.5 13.5 10 11" }), path({ "d": "M10.5 16.5 13 14" }), path({ "d": "m18 3-4 4h6l-4 4" }));
};
//#endregion
//#region src/icons/Plug.ts
const Plug = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 22v-5" }), path({ "d": "M15 8V2" }), path({ "d": "M17 8a1 1 0 0 1 1 1v4a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1z" }), path({ "d": "M9 8V2" }));
};
//#endregion
//#region src/icons/Plus.ts
const Plus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M5 12h14" }), path({ "d": "M12 5v14" }));
};
//#endregion
//#region src/icons/PocketKnife.ts
const PocketKnife = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2" }), path({ "d": "M18 6h.01" }), path({ "d": "M6 18h.01" }), path({ "d": "M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z" }), path({ "d": "M18 11.66V22a4 4 0 0 0 4-4V6" }));
};
//#endregion
//#region src/icons/Podcast.ts
const Podcast = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({
		"d": "M13 17a1 1 0 1 0-2 0l.5 4.5a0.5 0.5 0 0 0 1 0z",
		fill: "currentColor"
	}), path({ "d": "M16.85 18.58a9 9 0 1 0-9.7 0" }), path({ "d": "M8 14a5 5 0 1 1 8 0" }), circle({
		cx: "12",
		cy: "11",
		"r": "1",
		fill: "currentColor"
	}));
};
//#endregion
//#region src/icons/PointerOff.ts
const PointerOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 4.5V4a2 2 0 0 0-2.41-1.957" }), path({ "d": "M13.9 8.4a2 2 0 0 0-1.26-1.295" }), path({ "d": "M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158" }), path({ "d": "m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343" }), path({ "d": "M6 6v8" }), path({ "d": "m2 2 20 20" }));
};
//#endregion
//#region src/icons/Pointer.ts
const Pointer = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M22 14a8 8 0 0 1-8 8" }), path({ "d": "M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2" }), path({ "d": "M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1" }), path({ "d": "M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10" }), path({ "d": "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" }));
};
//#endregion
//#region src/icons/Popcorn.ts
const Popcorn = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4" }), path({ "d": "M10 22 9 8" }), path({ "d": "m14 22 1-14" }), path({ "d": "M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z" }));
};
//#endregion
//#region src/icons/Popsicle.ts
const Popsicle = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z" }), path({ "d": "m22 22-5.5-5.5" }));
};
//#endregion
//#region src/icons/PoundSterling.ts
const PoundSterling = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M18 7c0-5.333-8-5.333-8 0" }), path({ "d": "M10 7v14" }), path({ "d": "M6 21h12" }), path({ "d": "M6 13h10" }));
};
//#endregion
//#region src/icons/PowerOff.ts
const PowerOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M18.36 6.64A9 9 0 0 1 20.77 15" }), path({ "d": "M6.16 6.16a9 9 0 1 0 12.68 12.68" }), path({ "d": "M12 2v4" }), path({ "d": "m2 2 20 20" }));
};
//#endregion
//#region src/icons/Power.ts
const Power = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 2v10" }), path({ "d": "M18.4 6.6a9 9 0 1 1-12.77.04" }));
};
//#endregion
//#region src/icons/Presentation.ts
const Presentation = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 3h20" }), path({ "d": "M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" }), path({ "d": "m7 21 5-5 5 5" }));
};
//#endregion
//#region src/icons/PrinterCheck.ts
const PrinterCheck = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5" }), path({ "d": "m16 19 2 2 4-4" }), path({ "d": "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2" }), path({ "d": "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" }));
};
//#endregion
//#region src/icons/PrinterX.ts
const PrinterX = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12.531 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6.377" }), path({ "d": "m16.5 16.5 5 5" }), path({ "d": "m16.5 21.5 5-5" }), path({ "d": "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.5" }), path({ "d": "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" }));
};
//#endregion
//#region src/icons/Printer.ts
const Printer = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" }), path({ "d": "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" }), rect({
		"x": "6",
		"y": "14",
		width: "12",
		height: "8",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/Projector.ts
const Projector = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M5 7 3 5" }), path({ "d": "M9 6V3" }), path({ "d": "m13 7 2-2" }), circle({
		cx: "9",
		cy: "13",
		"r": "3"
	}), path({ "d": "M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17" }), path({ "d": "M16 16h2" }));
};
//#endregion
//#region src/icons/Proportions.ts
const Proportions = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "20",
		height: "16",
		"x": "2",
		"y": "4",
		rx: "2"
	}), path({ "d": "M12 9v11" }), path({ "d": "M2 9h13a2 2 0 0 1 2 2v9" }));
};
//#endregion
//#region src/icons/Puzzle.ts
const Puzzle = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z" }));
};
//#endregion
//#region src/icons/Pyramid.ts
const Pyramid = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z" }), path({ "d": "M12 2v20" }));
};
//#endregion
//#region src/icons/QrCode.ts
const QrCode = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "5",
		height: "5",
		"x": "3",
		"y": "3",
		rx: "1"
	}), rect({
		width: "5",
		height: "5",
		"x": "16",
		"y": "3",
		rx: "1"
	}), rect({
		width: "5",
		height: "5",
		"x": "3",
		"y": "16",
		rx: "1"
	}), path({ "d": "M21 16h-3a2 2 0 0 0-2 2v3" }), path({ "d": "M21 21v.01" }), path({ "d": "M12 7v3a2 2 0 0 1-2 2H7" }), path({ "d": "M3 12h.01" }), path({ "d": "M12 3h.01" }), path({ "d": "M12 16v.01" }), path({ "d": "M16 12h1" }), path({ "d": "M21 12v.01" }), path({ "d": "M12 21v-1" }));
};
//#endregion
//#region src/icons/Quote.ts
const Quote = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" }), path({ "d": "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" }));
};
//#endregion
//#region src/icons/Rabbit.ts
const Rabbit = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13 16a3 3 0 0 1 2.24 5" }), path({ "d": "M18 12h.01" }), path({ "d": "M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3" }), path({ "d": "M20 8.54V4a2 2 0 1 0-4 0v3" }), path({ "d": "M7.612 12.524a3 3 0 1 0-1.6 4.3" }));
};
//#endregion
//#region src/icons/Radar.ts
const Radar = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M19.07 4.93A10 10 0 0 0 6.99 3.34" }), path({ "d": "M4 6h.01" }), path({ "d": "M2.29 9.62A10 10 0 1 0 21.31 8.35" }), path({ "d": "M16.24 7.76A6 6 0 1 0 8.23 16.67" }), path({ "d": "M12 18h.01" }), path({ "d": "M17.99 11.66A6 6 0 0 1 15.77 16.67" }), circle({
		cx: "12",
		cy: "12",
		"r": "2"
	}), path({ "d": "m13.41 10.59 5.66-5.66" }));
};
//#endregion
//#region src/icons/Radiation.ts
const Radiation = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 12h.01" }), path({ "d": "M14 15.4641a4 4 0 0 1-4 0L7.52786 19.74597 A 1 1 0 0 0 7.99303 21.16211 10 10 0 0 0 16.00697 21.16211 1 1 0 0 0 16.47214 19.74597z" }), path({ "d": "M16 12a4 4 0 0 0-2-3.464l2.472-4.282a1 1 0 0 1 1.46-.305 10 10 0 0 1 4.006 6.94A1 1 0 0 1 21 12z" }), path({ "d": "M8 12a4 4 0 0 1 2-3.464L7.528 4.254a1 1 0 0 0-1.46-.305 10 10 0 0 0-4.006 6.94A1 1 0 0 0 3 12z" }));
};
//#endregion
//#region src/icons/Radical.ts
const Radical = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21" }));
};
//#endregion
//#region src/icons/RadioOff.ts
const RadioOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13.414 13.414a2 2 0 1 1-2.828-2.828" }), path({ "d": "M16.247 7.761a6 6 0 0 1 1.744 4.572" }), path({ "d": "M19.075 4.933a10 10 0 0 1 2.234 10.72" }), path({ "d": "m2 2 20 20" }), path({ "d": "M4.925 19.067a10 10 0 0 1 0-14.134" }), path({ "d": "M7.753 16.239a6 6 0 0 1 0-8.478" }));
};
//#endregion
//#region src/icons/RadioReceiver.ts
const RadioReceiver = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M5 16v2" }), path({ "d": "M19 16v2" }), rect({
		width: "20",
		height: "8",
		"x": "2",
		"y": "8",
		rx: "2"
	}), path({ "d": "M18 12h.01" }));
};
//#endregion
//#region src/icons/RadioTower.ts
const RadioTower = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4.9 16.1C1 12.2 1 5.8 4.9 1.9" }), path({ "d": "M7.8 4.7a6.14 6.14 0 0 0-.8 7.5" }), circle({
		cx: "12",
		cy: "9",
		"r": "2"
	}), path({ "d": "M16.2 4.8c2 2 2.26 5.11.8 7.47" }), path({ "d": "M19.1 1.9a9.96 9.96 0 0 1 0 14.1" }), path({ "d": "M9.5 18h5" }), path({ "d": "m8 22 4-11 4 11" }));
};
//#endregion
//#region src/icons/Radio.ts
const Radio = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16.247 7.761a6 6 0 0 1 0 8.478" }), path({ "d": "M19.075 4.933a10 10 0 0 1 0 14.134" }), path({ "d": "M4.925 19.067a10 10 0 0 1 0-14.134" }), path({ "d": "M7.753 16.239a6 6 0 0 1 0-8.478" }), circle({
		cx: "12",
		cy: "12",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/Radius.ts
const Radius = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20.34 17.52a10 10 0 1 0-2.82 2.82" }), circle({
		cx: "19",
		cy: "19",
		"r": "2"
	}), path({ "d": "m13.41 13.41 4.18 4.18" }), circle({
		cx: "12",
		cy: "12",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/Rainbow.ts
const Rainbow = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M22 17a10 10 0 0 0-20 0" }), path({ "d": "M6 17a6 6 0 0 1 12 0" }), path({ "d": "M10 17a2 2 0 0 1 4 0" }));
};
//#endregion
//#region src/icons/Rat.ts
const Rat = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13 22H4a2 2 0 0 1 0-4h12" }), path({ "d": "M13.236 18a3 3 0 0 0-2.2-5" }), path({ "d": "M16 9h.01" }), path({ "d": "M16.82 3.94a3 3 0 1 1 3.237 4.868l1.815 2.587a1.5 1.5 0 0 1-1.5 2.1l-2.872-.453a3 3 0 0 0-3.5 3" }), path({ "d": "M17 4.988a3 3 0 1 0-5.2 2.052A7 7 0 0 0 4 14.015 4 4 0 0 0 8 18" }));
};
//#endregion
//#region src/icons/Ratio.ts
const Ratio = (props = {}) => {
	const { rect } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "12",
		height: "20",
		"x": "6",
		"y": "2",
		rx: "2"
	}), rect({
		width: "20",
		height: "12",
		"x": "2",
		"y": "6",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/ReceiptCent.ts
const ReceiptCent = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 7v10" }), path({ "d": "M14.828 14.829a4 4 0 0 1-5.656 0 4 4 0 0 1 0-5.657 4 4 0 0 1 5.656 0" }), path({ "d": "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" }));
};
//#endregion
//#region src/icons/ReceiptEuro.ts
const ReceiptEuro = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M15.828 14.829a4 4 0 0 1-5.656 0 4 4 0 0 1 0-5.657 4 4 0 0 1 5.656 0" }), path({ "d": "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" }), path({ "d": "M8 12h5" }));
};
//#endregion
//#region src/icons/ReceiptIndianRupee.ts
const ReceiptIndianRupee = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" }), path({ "d": "M8 11h8" }), path({ "d": "M8 7h8" }), path({ "d": "M9 7a4 4 0 0 1 0 8H8l3 2" }));
};
//#endregion
//#region src/icons/ReceiptJapaneseYen.ts
const ReceiptJapaneseYen = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m12 10 3-3" }), path({ "d": "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" }), path({ "d": "M9 11h6" }), path({ "d": "M9 15h6" }), path({ "d": "m9 7 3 3v7" }));
};
//#endregion
//#region src/icons/ReceiptPoundSterling.ts
const ReceiptPoundSterling = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 17V9.5a1 1 0 0 1 5 0" }), path({ "d": "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" }), path({ "d": "M8 13h5" }), path({ "d": "M8 17h7" }));
};
//#endregion
//#region src/icons/ReceiptRussianRuble.ts
const ReceiptRussianRuble = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" }), path({ "d": "M8 11h5a2 2 0 0 0 0-4h-3v10" }), path({ "d": "M8 15h5" }));
};
//#endregion
//#region src/icons/ReceiptSwissFranc.ts
const ReceiptSwissFranc = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 11h4" }), path({ "d": "M10 17V7h5" }), path({ "d": "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" }), path({ "d": "M8 15h5" }));
};
//#endregion
//#region src/icons/ReceiptText.ts
const ReceiptText = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13 16H8" }), path({ "d": "M14 8H8" }), path({ "d": "M16 12H8" }), path({ "d": "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" }));
};
//#endregion
//#region src/icons/ReceiptTurkishLira.ts
const ReceiptTurkishLira = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 7v10a5 5 0 0 0 5-5" }), path({ "d": "m14 8-6 3" }), path({ "d": "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" }));
};
//#endregion
//#region src/icons/Receipt.ts
const Receipt = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 17V7" }), path({ "d": "M16 8h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8" }), path({ "d": "M4 3a1 1 0 0 1 1-1 1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1 1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2 1 1 0 0 1-1-1z" }));
};
//#endregion
//#region src/icons/RectangleCircle.ts
const RectangleCircle = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M14 4v16H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" }), circle({
		cx: "14",
		cy: "12",
		"r": "8"
	}));
};
//#endregion
//#region src/icons/RectangleEllipsis.ts
const RectangleEllipsis = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "20",
		height: "12",
		"x": "2",
		"y": "6",
		rx: "2"
	}), path({ "d": "M12 12h.01" }), path({ "d": "M17 12h.01" }), path({ "d": "M7 12h.01" }));
};
//#endregion
//#region src/icons/RectangleGoggles.ts
const RectangleGoggles = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20 6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4a2 2 0 0 1-1.6-.8l-1.6-2.13a1 1 0 0 0-1.6 0L9.6 17.2A2 2 0 0 1 8 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" }));
};
//#endregion
//#region src/icons/RectangleHorizontal.ts
const RectangleHorizontal = (props = {}) => {
	const { rect } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "20",
		height: "12",
		"x": "2",
		"y": "6",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/RectangleVertical.ts
const RectangleVertical = (props = {}) => {
	const { rect } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "12",
		height: "20",
		"x": "6",
		"y": "2",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/Recycle.ts
const Recycle = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" }), path({ "d": "M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" }), path({ "d": "m14 16-3 3 3 3" }), path({ "d": "M8.293 13.596 7.196 9.5 3.1 10.598" }), path({ "d": "m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" }), path({ "d": "m13.378 9.633 4.096 1.098 1.097-4.096" }));
};
//#endregion
//#region src/icons/Redo2.ts
const Redo2 = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m15 14 5-5-5-5" }), path({ "d": "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13" }));
};
//#endregion
//#region src/icons/RedoDot.ts
const RedoDot = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "17",
		"r": "1"
	}), path({ "d": "M21 7v6h-6" }), path({ "d": "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" }));
};
//#endregion
//#region src/icons/Redo.ts
const Redo = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21 7v6h-6" }), path({ "d": "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" }));
};
//#endregion
//#region src/icons/RefreshCcwDot.ts
const RefreshCcwDot = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }), path({ "d": "M3 3v5h5" }), path({ "d": "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" }), path({ "d": "M16 16h5v5" }), circle({
		cx: "12",
		cy: "12",
		"r": "1"
	}));
};
//#endregion
//#region src/icons/RefreshCcw.ts
const RefreshCcw = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }), path({ "d": "M3 3v5h5" }), path({ "d": "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" }), path({ "d": "M16 16h5v5" }));
};
//#endregion
//#region src/icons/RefreshCwOff.ts
const RefreshCwOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47" }), path({ "d": "M8 16H3v5" }), path({ "d": "M3 12C3 9.51 4 7.26 5.64 5.64" }), path({ "d": "m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64" }), path({ "d": "M21 12c0 1-.16 1.97-.47 2.87" }), path({ "d": "M21 3v5h-5" }), path({ "d": "M22 22 2 2" }));
};
//#endregion
//#region src/icons/RefreshCw.ts
const RefreshCw = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" }), path({ "d": "M21 3v5h-5" }), path({ "d": "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" }), path({ "d": "M8 16H3v5" }));
};
//#endregion
//#region src/icons/Refrigerator.ts
const Refrigerator = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z" }), path({ "d": "M5 10h14" }), path({ "d": "M15 7v6" }));
};
//#endregion
//#region src/icons/Regex.ts
const Regex = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M17 3v10" }), path({ "d": "m12.67 5.5 8.66 5" }), path({ "d": "m12.67 10.5 8.66-5" }), path({ "d": "M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z" }));
};
//#endregion
//#region src/icons/RemoveFormatting.ts
const RemoveFormatting = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 7V4h16v3" }), path({ "d": "M5 20h6" }), path({ "d": "M13 4 8 20" }), path({ "d": "m15 15 5 5" }), path({ "d": "m20 15-5 5" }));
};
//#endregion
//#region src/icons/Repeat1.ts
const Repeat1 = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m17 2 4 4-4 4" }), path({ "d": "M3 11v-1a4 4 0 0 1 4-4h14" }), path({ "d": "m7 22-4-4 4-4" }), path({ "d": "M21 13v1a4 4 0 0 1-4 4H3" }), path({ "d": "M11 10h1v4" }));
};
//#endregion
//#region src/icons/Repeat2.ts
const Repeat2 = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m2 9 3-3 3 3" }), path({ "d": "M13 18H7a2 2 0 0 1-2-2V6" }), path({ "d": "m22 15-3 3-3-3" }), path({ "d": "M11 6h6a2 2 0 0 1 2 2v10" }));
};
//#endregion
//#region src/icons/Repeat.ts
const Repeat = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m17 2 4 4-4 4" }), path({ "d": "M3 11v-1a4 4 0 0 1 4-4h14" }), path({ "d": "m7 22-4-4 4-4" }), path({ "d": "M21 13v1a4 4 0 0 1-4 4H3" }));
};
//#endregion
//#region src/icons/ReplaceAll.ts
const ReplaceAll = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M14 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" }), path({ "d": "M14 4a1 1 0 0 1 1-1" }), path({ "d": "M15 10a1 1 0 0 1-1-1" }), path({ "d": "M19 14a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" }), path({ "d": "M21 4a1 1 0 0 0-1-1" }), path({ "d": "M21 9a1 1 0 0 1-1 1" }), path({ "d": "m3 7 3 3 3-3" }), path({ "d": "M6 10V5a2 2 0 0 1 2-2h2" }), rect({
		"x": "3",
		"y": "14",
		width: "7",
		height: "7",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/Replace.ts
const Replace = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M14 4a1 1 0 0 1 1-1" }), path({ "d": "M15 10a1 1 0 0 1-1-1" }), path({ "d": "M21 4a1 1 0 0 0-1-1" }), path({ "d": "M21 9a1 1 0 0 1-1 1" }), path({ "d": "m3 7 3 3 3-3" }), path({ "d": "M6 10V5a2 2 0 0 1 2-2h2" }), rect({
		"x": "3",
		"y": "14",
		width: "7",
		height: "7",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/ReplyAll.ts
const ReplyAll = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m12 17-5-5 5-5" }), path({ "d": "M22 18v-2a4 4 0 0 0-4-4H7" }), path({ "d": "m7 17-5-5 5-5" }));
};
//#endregion
//#region src/icons/Reply.ts
const Reply = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20 18v-2a4 4 0 0 0-4-4H4" }), path({ "d": "m9 17-5-5 5-5" }));
};
//#endregion
//#region src/icons/Rewind.ts
const Rewind = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 12 18z" }), path({ "d": "M22 6a2 2 0 0 0-3.414-1.414l-6 6a2 2 0 0 0 0 2.828l6 6A2 2 0 0 0 22 18z" }));
};
//#endregion
//#region src/icons/Ribbon.ts
const Ribbon = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22" }), path({ "d": "m12 18 2.57-3.5" }), path({ "d": "M6.243 9.016a7 7 0 0 1 11.507-.009" }), path({ "d": "M9.35 14.53 12 11.22" }), path({ "d": "M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z" }));
};
//#endregion
//#region src/icons/Road.ts
const Road = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 17v4" }), path({ "d": "M12 5V3" }), path({ "d": "M12 9v3" }), path({ "d": "M2.077 18.449A2 2 0 0 0 4 21h16a2 2 0 0 0 1.924-2.55l-4-14A2 2 0 0 0 16 3H8a2 2 0 0 0-1.924 1.45z" }));
};
//#endregion
//#region src/icons/Rocket.ts
const Rocket = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" }), path({ "d": "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09" }), path({ "d": "M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z" }), path({ "d": "M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05" }));
};
//#endregion
//#region src/icons/RockingChair.ts
const RockingChair = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m15 13 3.708 7.416" }), path({ "d": "M3 19a15 15 0 0 0 18 0" }), path({ "d": "m3 2 3.21 9.633A2 2 0 0 0 8.109 13H18" }), path({ "d": "m9 13-3.708 7.416" }));
};
//#endregion
//#region src/icons/RollerCoaster.ts
const RollerCoaster = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 19V5" }), path({ "d": "M10 19V6.8" }), path({ "d": "M14 19v-7.8" }), path({ "d": "M18 5v4" }), path({ "d": "M18 19v-6" }), path({ "d": "M22 19V9" }), path({ "d": "M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65" }));
};
//#endregion
//#region src/icons/Rose.ts
const Rose = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M17 10h-1a4 4 0 1 1 4-4v.534" }), path({ "d": "M17 6h1a4 4 0 0 1 1.42 7.74l-2.29.87a6 6 0 0 1-5.339-10.68l2.069-1.31" }), path({ "d": "M4.5 17c2.8-.5 4.4 0 5.5.8s1.8 2.2 2.3 3.7c-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2" }), path({ "d": "M9.77 12C4 15 2 22 2 22" }), circle({
		cx: "17",
		cy: "8",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/Rotate3d.ts
const Rotate3d = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2" }), path({ "d": "m15.194 13.707 3.814 1.86-1.86 3.814" }), path({ "d": "M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4" }));
};
//#endregion
//#region src/icons/RotateCcwKey.ts
const RotateCcwKey = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 7v6" }), path({ "d": "M12 9h2" }), path({ "d": "M3 12a9 9 0 1 0 9-9 9.74 9.74 0 0 0-6.74 2.74L3 8" }), path({ "d": "M3 3v5h5" }), circle({
		cx: "12",
		cy: "15",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/RotateCcwSquare.ts
const RotateCcwSquare = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20 9V7a2 2 0 0 0-2-2h-6" }), path({ "d": "m15 2-3 3 3 3" }), path({ "d": "M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2" }));
};
//#endregion
//#region src/icons/RotateCcw.ts
const RotateCcw = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" }), path({ "d": "M3 3v5h5" }));
};
//#endregion
//#region src/icons/RotateCwSquare.ts
const RotateCwSquare = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 5H6a2 2 0 0 0-2 2v3" }), path({ "d": "m9 8 3-3-3-3" }), path({ "d": "M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" }));
};
//#endregion
//#region src/icons/RotateCw.ts
const RotateCw = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" }), path({ "d": "M21 3v5h-5" }));
};
//#endregion
//#region src/icons/RouteOff.ts
const RouteOff = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "6",
		cy: "19",
		"r": "3"
	}), path({ "d": "M9 19h8.5c.4 0 .9-.1 1.3-.2" }), path({ "d": "M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12" }), path({ "d": "m2 2 20 20" }), path({ "d": "M21 15.3a3.5 3.5 0 0 0-3.3-3.3" }), path({ "d": "M15 5h-4.3" }), circle({
		cx: "18",
		cy: "5",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/Route.ts
const Route = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "6",
		cy: "19",
		"r": "3"
	}), path({ "d": "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" }), circle({
		cx: "18",
		cy: "5",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/Router.ts
const Router = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "20",
		height: "8",
		"x": "2",
		"y": "14",
		rx: "2"
	}), path({ "d": "M6.01 18H6" }), path({ "d": "M10.01 18H10" }), path({ "d": "M15 10v4" }), path({ "d": "M17.84 7.17a4 4 0 0 0-5.66 0" }), path({ "d": "M20.66 4.34a8 8 0 0 0-11.31 0" }));
};
//#endregion
//#region src/icons/Rows2.ts
const Rows2 = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M3 12h18" }));
};
//#endregion
//#region src/icons/Rows3.ts
const Rows3 = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M21 9H3" }), path({ "d": "M21 15H3" }));
};
//#endregion
//#region src/icons/Rows4.ts
const Rows4 = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M21 7.5H3" }), path({ "d": "M21 12H3" }), path({ "d": "M21 16.5H3" }));
};
//#endregion
//#region src/icons/Rss.ts
const Rss = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 11a9 9 0 0 1 9 9" }), path({ "d": "M4 4a16 16 0 0 1 16 16" }), circle({
		cx: "5",
		cy: "19",
		"r": "1"
	}));
};
//#endregion
//#region src/icons/RulerDimensionLine.ts
const RulerDimensionLine = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 15v-3" }), path({ "d": "M14 15v-3" }), path({ "d": "M18 15v-3" }), path({ "d": "M2 8V4" }), path({ "d": "M22 6H2" }), path({ "d": "M22 8V4" }), path({ "d": "M6 15v-3" }), rect({
		"x": "2",
		"y": "12",
		width: "20",
		height: "8",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/Ruler.ts
const Ruler = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" }), path({ "d": "m14.5 12.5 2-2" }), path({ "d": "m11.5 9.5 2-2" }), path({ "d": "m8.5 6.5 2-2" }), path({ "d": "m17.5 15.5 2-2" }));
};
//#endregion
//#region src/icons/RussianRuble.ts
const RussianRuble = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 11h8a4 4 0 0 0 0-8H9v18" }), path({ "d": "M6 15h8" }));
};
//#endregion
//#region src/icons/Sailboat.ts
const Sailboat = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 2v15" }), path({ "d": "M7 22a4 4 0 0 1-4-4 1 1 0 0 1 1-1h16a1 1 0 0 1 1 1 4 4 0 0 1-4 4z" }), path({ "d": "M9.159 2.46a1 1 0 0 1 1.521-.193l9.977 8.98A1 1 0 0 1 20 13H4a1 1 0 0 1-.824-1.567z" }));
};
//#endregion
//#region src/icons/Salad.ts
const Salad = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M7 21h10" }), path({ "d": "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" }), path({ "d": "M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1" }), path({ "d": "m13 12 4-4" }), path({ "d": "M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2" }));
};
//#endregion
//#region src/icons/Sandwich.ts
const Sandwich = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777" }), path({ "d": "M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25" }), path({ "d": "M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9" }), path({ "d": "m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" }), rect({
		width: "20",
		height: "4",
		"x": "2",
		"y": "11",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/SatelliteDish.ts
const SatelliteDish = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 10a7.31 7.31 0 0 0 10 10Z" }), path({ "d": "m9 15 3-3" }), path({ "d": "M17 13a6 6 0 0 0-6-6" }), path({ "d": "M21 13A10 10 0 0 0 11 3" }));
};
//#endregion
//#region src/icons/Satellite.ts
const Satellite = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5" }), path({ "d": "M16.5 7.5 19 5" }), path({ "d": "m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5" }), path({ "d": "M9 21a6 6 0 0 0-6-6" }), path({ "d": "M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z" }));
};
//#endregion
//#region src/icons/SaudiRiyal.ts
const SaudiRiyal = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m20 19.5-5.5 1.2" }), path({ "d": "M14.5 4v11.22a1 1 0 0 0 1.242.97L20 15.2" }), path({ "d": "m2.978 19.351 5.549-1.363A2 2 0 0 0 10 16V2" }), path({ "d": "M20 10 4 13.5" }));
};
//#endregion
//#region src/icons/SaveAll.ts
const SaveAll = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 2v3a1 1 0 0 0 1 1h5" }), path({ "d": "M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6" }), path({ "d": "M18 22H4a2 2 0 0 1-2-2V6" }), path({ "d": "M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z" }));
};
//#endregion
//#region src/icons/SaveOff.ts
const SaveOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13 13H8a1 1 0 0 0-1 1v7" }), path({ "d": "M14 8h1" }), path({ "d": "M17 21v-4" }), path({ "d": "m2 2 20 20" }), path({ "d": "M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41" }), path({ "d": "M29.5 11.5s5 5 4 5" }), path({ "d": "M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15" }));
};
//#endregion
//#region src/icons/Save.ts
const Save = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" }), path({ "d": "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" }), path({ "d": "M7 3v4a1 1 0 0 0 1 1h7" }));
};
//#endregion
//#region src/icons/Scale3d.ts
const Scale3d = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M5 7v11a1 1 0 0 0 1 1h11" }), path({ "d": "M5.293 18.707 11 13" }), circle({
		cx: "19",
		cy: "19",
		"r": "2"
	}), circle({
		cx: "5",
		cy: "5",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/Scale.ts
const Scale = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 3v18" }), path({ "d": "m19 8 3 8a5 5 0 0 1-6 0zV7" }), path({ "d": "M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1" }), path({ "d": "m5 8 3 8a5 5 0 0 1-6 0zV7" }), path({ "d": "M7 21h10" }));
};
//#endregion
//#region src/icons/Scaling.ts
const Scaling = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }), path({ "d": "M14 15H9v-5" }), path({ "d": "M16 3h5v5" }), path({ "d": "M21 3 9 15" }));
};
//#endregion
//#region src/icons/ScanBarcode.ts
const ScanBarcode = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 7V5a2 2 0 0 1 2-2h2" }), path({ "d": "M17 3h2a2 2 0 0 1 2 2v2" }), path({ "d": "M21 17v2a2 2 0 0 1-2 2h-2" }), path({ "d": "M7 21H5a2 2 0 0 1-2-2v-2" }), path({ "d": "M8 7v10" }), path({ "d": "M12 7v10" }), path({ "d": "M17 7v10" }));
};
//#endregion
//#region src/icons/ScanEye.ts
const ScanEye = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 7V5a2 2 0 0 1 2-2h2" }), path({ "d": "M17 3h2a2 2 0 0 1 2 2v2" }), path({ "d": "M21 17v2a2 2 0 0 1-2 2h-2" }), path({ "d": "M7 21H5a2 2 0 0 1-2-2v-2" }), circle({
		cx: "12",
		cy: "12",
		"r": "1"
	}), path({ "d": "M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0" }));
};
//#endregion
//#region src/icons/ScanFace.ts
const ScanFace = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 7V5a2 2 0 0 1 2-2h2" }), path({ "d": "M17 3h2a2 2 0 0 1 2 2v2" }), path({ "d": "M21 17v2a2 2 0 0 1-2 2h-2" }), path({ "d": "M7 21H5a2 2 0 0 1-2-2v-2" }), path({ "d": "M8 14s1.5 2 4 2 4-2 4-2" }), path({ "d": "M9 9h.01" }), path({ "d": "M15 9h.01" }));
};
//#endregion
//#region src/icons/ScanHeart.ts
const ScanHeart = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M17 3h2a2 2 0 0 1 2 2v2" }), path({ "d": "M21 17v2a2 2 0 0 1-2 2h-2" }), path({ "d": "M3 7V5a2 2 0 0 1 2-2h2" }), path({ "d": "M7 21H5a2 2 0 0 1-2-2v-2" }), path({ "d": "M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 4.172 4.306l-3.447 3.62a1 1 0 0 1-1.449 0z" }));
};
//#endregion
//#region src/icons/ScanLine.ts
const ScanLine = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 7V5a2 2 0 0 1 2-2h2" }), path({ "d": "M17 3h2a2 2 0 0 1 2 2v2" }), path({ "d": "M21 17v2a2 2 0 0 1-2 2h-2" }), path({ "d": "M7 21H5a2 2 0 0 1-2-2v-2" }), path({ "d": "M7 12h10" }));
};
//#endregion
//#region src/icons/ScanQrCode.ts
const ScanQrCode = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M17 12v4a1 1 0 0 1-1 1h-4" }), path({ "d": "M17 3h2a2 2 0 0 1 2 2v2" }), path({ "d": "M17 8V7" }), path({ "d": "M21 17v2a2 2 0 0 1-2 2h-2" }), path({ "d": "M3 7V5a2 2 0 0 1 2-2h2" }), path({ "d": "M7 17h.01" }), path({ "d": "M7 21H5a2 2 0 0 1-2-2v-2" }), rect({
		"x": "7",
		"y": "7",
		width: "5",
		height: "5",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/ScanSearch.ts
const ScanSearch = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 7V5a2 2 0 0 1 2-2h2" }), path({ "d": "M17 3h2a2 2 0 0 1 2 2v2" }), path({ "d": "M21 17v2a2 2 0 0 1-2 2h-2" }), path({ "d": "M7 21H5a2 2 0 0 1-2-2v-2" }), circle({
		cx: "12",
		cy: "12",
		"r": "3"
	}), path({ "d": "m16 16-1.9-1.9" }));
};
//#endregion
//#region src/icons/ScanText.ts
const ScanText = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 7V5a2 2 0 0 1 2-2h2" }), path({ "d": "M17 3h2a2 2 0 0 1 2 2v2" }), path({ "d": "M21 17v2a2 2 0 0 1-2 2h-2" }), path({ "d": "M7 21H5a2 2 0 0 1-2-2v-2" }), path({ "d": "M7 8h8" }), path({ "d": "M7 12h10" }), path({ "d": "M7 16h6" }));
};
//#endregion
//#region src/icons/Scan.ts
const Scan = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 7V5a2 2 0 0 1 2-2h2" }), path({ "d": "M17 3h2a2 2 0 0 1 2 2v2" }), path({ "d": "M21 17v2a2 2 0 0 1-2 2h-2" }), path({ "d": "M7 21H5a2 2 0 0 1-2-2v-2" }));
};
//#endregion
//#region src/icons/School.ts
const School = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M14 21v-3a2 2 0 0 0-4 0v3" }), path({ "d": "M18 4.933V21" }), path({ "d": "m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6" }), path({ "d": "m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11" }), path({ "d": "M6 4.933V21" }), circle({
		cx: "12",
		cy: "9",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/ScissorsLineDashed.ts
const ScissorsLineDashed = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M5.42 9.42 8 12" }), circle({
		cx: "4",
		cy: "8",
		"r": "2"
	}), path({ "d": "m14 6-8.58 8.58" }), circle({
		cx: "4",
		cy: "16",
		"r": "2"
	}), path({ "d": "M10.8 14.8 14 18" }), path({ "d": "M16 12h-2" }), path({ "d": "M22 12h-2" }));
};
//#endregion
//#region src/icons/Scissors.ts
const Scissors = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "6",
		cy: "6",
		"r": "3"
	}), path({ "d": "M8.12 8.12 12 12" }), path({ "d": "M20 4 8.12 15.88" }), circle({
		cx: "6",
		cy: "18",
		"r": "3"
	}), path({ "d": "M14.8 14.8 20 20" }));
};
//#endregion
//#region src/icons/Scooter.ts
const Scooter = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21 4h-3.5l2 11.05" }), path({ "d": "M6.95 17h5.142c.523 0 .95-.406 1.063-.916a6.5 6.5 0 0 1 5.345-5.009" }), circle({
		cx: "19.5",
		cy: "17.5",
		"r": "2.5"
	}), circle({
		cx: "4.5",
		cy: "17.5",
		"r": "2.5"
	}));
};
//#endregion
//#region src/icons/ScreenShareOff.ts
const ScreenShareOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" }), path({ "d": "M8 21h8" }), path({ "d": "M12 17v4" }), path({ "d": "m22 3-5 5" }), path({ "d": "m17 3 5 5" }));
};
//#endregion
//#region src/icons/ScreenShare.ts
const ScreenShare = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" }), path({ "d": "M8 21h8" }), path({ "d": "M12 17v4" }), path({ "d": "m17 8 5-5" }), path({ "d": "M17 3h5v5" }));
};
//#endregion
//#region src/icons/ScrollText.ts
const ScrollText = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M15 12h-5" }), path({ "d": "M15 8h-5" }), path({ "d": "M19 17V5a2 2 0 0 0-2-2H4" }), path({ "d": "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" }));
};
//#endregion
//#region src/icons/Scroll.ts
const Scroll = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M19 17V5a2 2 0 0 0-2-2H4" }), path({ "d": "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" }));
};
//#endregion
//#region src/icons/SearchAlert.ts
const SearchAlert = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "11",
		cy: "11",
		"r": "8"
	}), path({ "d": "m21 21-4.3-4.3" }), path({ "d": "M11 7v4" }), path({ "d": "M11 15h.01" }));
};
//#endregion
//#region src/icons/SearchCheck.ts
const SearchCheck = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m8 11 2 2 4-4" }), circle({
		cx: "11",
		cy: "11",
		"r": "8"
	}), path({ "d": "m21 21-4.3-4.3" }));
};
//#endregion
//#region src/icons/SearchCode.ts
const SearchCode = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m13 13.5 2-2.5-2-2.5" }), path({ "d": "m21 21-4.3-4.3" }), path({ "d": "M9 8.5 7 11l2 2.5" }), circle({
		cx: "11",
		cy: "11",
		"r": "8"
	}));
};
//#endregion
//#region src/icons/SearchSlash.ts
const SearchSlash = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m13.5 8.5-5 5" }), circle({
		cx: "11",
		cy: "11",
		"r": "8"
	}), path({ "d": "m21 21-4.3-4.3" }));
};
//#endregion
//#region src/icons/SearchX.ts
const SearchX = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m13.5 8.5-5 5" }), path({ "d": "m8.5 8.5 5 5" }), circle({
		cx: "11",
		cy: "11",
		"r": "8"
	}), path({ "d": "m21 21-4.3-4.3" }));
};
//#endregion
//#region src/icons/Search.ts
const Search = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m21 21-4.34-4.34" }), circle({
		cx: "11",
		cy: "11",
		"r": "8"
	}));
};
//#endregion
//#region src/icons/Section.ts
const Section = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0" }), path({ "d": "M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0" }));
};
//#endregion
//#region src/icons/SendHorizontal.ts
const SendHorizontal = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z" }), path({ "d": "M6 12h16" }));
};
//#endregion
//#region src/icons/SendToBack.ts
const SendToBack = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		"x": "14",
		"y": "14",
		width: "8",
		height: "8",
		rx: "2"
	}), rect({
		"x": "2",
		"y": "2",
		width: "8",
		height: "8",
		rx: "2"
	}), path({ "d": "M7 14v1a2 2 0 0 0 2 2h1" }), path({ "d": "M14 7h1a2 2 0 0 1 2 2v1" }));
};
//#endregion
//#region src/icons/Send.ts
const Send = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" }), path({ "d": "m21.854 2.147-10.94 10.939" }));
};
//#endregion
//#region src/icons/SeparatorHorizontal.ts
const SeparatorHorizontal = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m16 16-4 4-4-4" }), path({ "d": "M3 12h18" }), path({ "d": "m8 8 4-4 4 4" }));
};
//#endregion
//#region src/icons/SeparatorVertical.ts
const SeparatorVertical = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 3v18" }), path({ "d": "m16 16 4-4-4-4" }), path({ "d": "m8 8-4 4 4 4" }));
};
//#endregion
//#region src/icons/ServerCog.ts
const ServerCog = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m10.852 14.772-.383.923" }), path({ "d": "M13.148 14.772a3 3 0 1 0-2.296-5.544l-.383-.923" }), path({ "d": "m13.148 9.228.383-.923" }), path({ "d": "m13.53 15.696-.382-.924a3 3 0 1 1-2.296-5.544" }), path({ "d": "m14.772 10.852.923-.383" }), path({ "d": "m14.772 13.148.923.383" }), path({ "d": "M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5" }), path({ "d": "M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5" }), path({ "d": "M6 18h.01" }), path({ "d": "M6 6h.01" }), path({ "d": "m9.228 10.852-.923-.383" }), path({ "d": "m9.228 13.148-.923.383" }));
};
//#endregion
//#region src/icons/ServerCrash.ts
const ServerCrash = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" }), path({ "d": "M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2" }), path({ "d": "M6 6h.01" }), path({ "d": "M6 18h.01" }), path({ "d": "m13 6-4 6h6l-4 6" }));
};
//#endregion
//#region src/icons/ServerOff.ts
const ServerOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5" }), path({ "d": "M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z" }), path({ "d": "M22 17v-1a2 2 0 0 0-2-2h-1" }), path({ "d": "M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z" }), path({ "d": "M6 18h.01" }), path({ "d": "m2 2 20 20" }));
};
//#endregion
//#region src/icons/Server.ts
const Server = (props = {}) => {
	const { rect, line } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "20",
		height: "8",
		"x": "2",
		"y": "2",
		rx: "2",
		ry: "2"
	}), rect({
		width: "20",
		height: "8",
		"x": "2",
		"y": "14",
		rx: "2",
		ry: "2"
	}), line({
		x1: "6",
		x2: "6.01",
		y1: "6",
		y2: "6"
	}), line({
		x1: "6",
		x2: "6.01",
		y1: "18",
		y2: "18"
	}));
};
//#endregion
//#region src/icons/Settings2.ts
const Settings2 = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M14 17H5" }), path({ "d": "M19 7h-9" }), circle({
		cx: "17",
		cy: "17",
		"r": "3"
	}), circle({
		cx: "7",
		cy: "7",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/Settings.ts
const Settings = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915" }), circle({
		cx: "12",
		cy: "12",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/Shapes.ts
const Shapes = (props = {}) => {
	const { path, rect, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z" }), rect({
		"x": "3",
		"y": "14",
		width: "7",
		height: "7",
		rx: "1"
	}), circle({
		cx: "17.5",
		cy: "17.5",
		"r": "3.5"
	}));
};
//#endregion
//#region src/icons/Share2.ts
const Share2 = (props = {}) => {
	const { circle, line } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "18",
		cy: "5",
		"r": "3"
	}), circle({
		cx: "6",
		cy: "12",
		"r": "3"
	}), circle({
		cx: "18",
		cy: "19",
		"r": "3"
	}), line({
		x1: "8.59",
		x2: "15.42",
		y1: "13.51",
		y2: "17.49"
	}), line({
		x1: "15.41",
		x2: "8.59",
		y1: "6.51",
		y2: "10.49"
	}));
};
//#endregion
//#region src/icons/Share.ts
const Share = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 2v13" }), path({ "d": "m16 6-4-4-4 4" }), path({ "d": "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" }));
};
//#endregion
//#region src/icons/Sheet.ts
const Sheet = (props = {}) => {
	const { rect, line } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2",
		ry: "2"
	}), line({
		x1: "3",
		x2: "21",
		y1: "9",
		y2: "9"
	}), line({
		x1: "3",
		x2: "21",
		y1: "15",
		y2: "15"
	}), line({
		x1: "9",
		x2: "9",
		y1: "9",
		y2: "21"
	}), line({
		x1: "15",
		x2: "15",
		y1: "9",
		y2: "21"
	}));
};
//#endregion
//#region src/icons/Shell.ts
const Shell = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44" }));
};
//#endregion
//#region src/icons/ShelvingUnit.ts
const ShelvingUnit = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 12V9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" }), path({ "d": "M16 20v-3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3" }), path({ "d": "M20 22V2" }), path({ "d": "M4 12h16" }), path({ "d": "M4 20h16" }), path({ "d": "M4 2v20" }), path({ "d": "M4 4h16" }));
};
//#endregion
//#region src/icons/ShieldAlert.ts
const ShieldAlert = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }), path({ "d": "M12 8v4" }), path({ "d": "M12 16h.01" }));
};
//#endregion
//#region src/icons/ShieldBan.ts
const ShieldBan = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }), path({ "d": "m4.243 5.21 14.39 12.472" }));
};
//#endregion
//#region src/icons/ShieldCheck.ts
const ShieldCheck = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }), path({ "d": "m9 12 2 2 4-4" }));
};
//#endregion
//#region src/icons/ShieldCogCorner.ts
const ShieldCogCorner = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 22c-3.806-1.45-7-3.966-7-9V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v4" }), path({ "d": "M14.923 16.547 14 16.164" }), path({ "d": "m14.923 18.843-.923.383" }), path({ "d": "M16.547 14.923 16.164 14" }), path({ "d": "m16.547 20.467-.383.924" }), path({ "d": "m18.843 14.923.383-.923" }), path({ "d": "m19.225 21.391-.382-.924" }), path({ "d": "m20.467 16.547.923-.383" }), path({ "d": "m20.467 18.843.923.383" }), circle({
		cx: "17.695",
		cy: "17.695",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/ShieldCog.ts
const ShieldCog = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m10.929 14.467-.383.924" }), path({ "d": "M10.929 8.923 10.546 8" }), path({ "d": "M13.225 8.923 13.608 8" }), path({ "d": "m13.607 15.391-.382-.924" }), path({ "d": "m14.849 10.547.923-.383" }), path({ "d": "m14.849 12.843.923.383" }), path({ "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }), path({ "d": "m9.305 10.547-.923-.383" }), path({ "d": "m9.305 12.843-.923.383" }), circle({
		cx: "12.077",
		cy: "11.695",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/ShieldEllipsis.ts
const ShieldEllipsis = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }), path({ "d": "M8 12h.01" }), path({ "d": "M12 12h.01" }), path({ "d": "M16 12h.01" }));
};
//#endregion
//#region src/icons/ShieldHalf.ts
const ShieldHalf = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }), path({ "d": "M12 22V2" }));
};
//#endregion
//#region src/icons/ShieldMinus.ts
const ShieldMinus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }), path({ "d": "M9 12h6" }));
};
//#endregion
//#region src/icons/ShieldOff.ts
const ShieldOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m2 2 20 20" }), path({ "d": "M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71" }), path({ "d": "M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264" }));
};
//#endregion
//#region src/icons/ShieldPlus.ts
const ShieldPlus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }), path({ "d": "M9 12h6" }), path({ "d": "M12 9v6" }));
};
//#endregion
//#region src/icons/ShieldQuestionMark.ts
const ShieldQuestionMark = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }), path({ "d": "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" }), path({ "d": "M12 17h.01" }));
};
//#endregion
//#region src/icons/ShieldUser.ts
const ShieldUser = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }), path({ "d": "M6.376 18.91a6 6 0 0 1 11.249.003" }), circle({
		cx: "12",
		cy: "11",
		"r": "4"
	}));
};
//#endregion
//#region src/icons/ShieldX.ts
const ShieldX = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }), path({ "d": "m14.5 9.5-5 5" }), path({ "d": "m9.5 9.5 5 5" }));
};
//#endregion
//#region src/icons/Shield.ts
const Shield = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" }));
};
//#endregion
//#region src/icons/ShipWheel.ts
const ShipWheel = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "8"
	}), path({ "d": "M12 2v7.5" }), path({ "d": "m19 5-5.23 5.23" }), path({ "d": "M22 12h-7.5" }), path({ "d": "m19 19-5.23-5.23" }), path({ "d": "M12 14.5V22" }), path({ "d": "M10.23 13.77 5 19" }), path({ "d": "M9.5 12H2" }), path({ "d": "M10.23 10.23 5 5" }), circle({
		cx: "12",
		cy: "12",
		"r": "2.5"
	}));
};
//#endregion
//#region src/icons/Ship.ts
const Ship = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 10.189V14" }), path({ "d": "M12 2v3" }), path({ "d": "M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" }), path({ "d": "M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76" }), path({ "d": "M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }));
};
//#endregion
//#region src/icons/Shirt.ts
const Shirt = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" }));
};
//#endregion
//#region src/icons/ShoppingBag.ts
const ShoppingBag = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 10a4 4 0 0 1-8 0" }), path({ "d": "M3.103 6.034h17.794" }), path({ "d": "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" }));
};
//#endregion
//#region src/icons/ShoppingBasket.ts
const ShoppingBasket = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m15 11-1 9" }), path({ "d": "m19 11-4-7" }), path({ "d": "M2 11h20" }), path({ "d": "m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" }), path({ "d": "M4.5 15.5h15" }), path({ "d": "m5 11 4-7" }), path({ "d": "m9 11 1 9" }));
};
//#endregion
//#region src/icons/ShoppingCart.ts
const ShoppingCart = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "8",
		cy: "21",
		"r": "1"
	}), circle({
		cx: "19",
		cy: "21",
		"r": "1"
	}), path({ "d": "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" }));
};
//#endregion
//#region src/icons/Shovel.ts
const Shovel = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21.56 4.56a1.5 1.5 0 0 1 0 2.122l-.47.47a3 3 0 0 1-4.212-.03 3 3 0 0 1 0-4.243l.44-.44a1.5 1.5 0 0 1 2.121 0z" }), path({ "d": "M3 22a1 1 0 0 1-1-1v-3.586a1 1 0 0 1 .293-.707l3.355-3.355a1.205 1.205 0 0 1 1.704 0l3.296 3.296a1.205 1.205 0 0 1 0 1.704l-3.355 3.355a1 1 0 0 1-.707.293z" }), path({ "d": "m9 15 7.879-7.878" }));
};
//#endregion
//#region src/icons/ShowerHead.ts
const ShowerHead = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m4 4 2.5 2.5" }), path({ "d": "M13.5 6.5a4.95 4.95 0 0 0-7 7" }), path({ "d": "M15 5 5 15" }), path({ "d": "M14 17v.01" }), path({ "d": "M10 16v.01" }), path({ "d": "M13 13v.01" }), path({ "d": "M16 10v.01" }), path({ "d": "M11 20v.01" }), path({ "d": "M17 14v.01" }), path({ "d": "M20 11v.01" }));
};
//#endregion
//#region src/icons/Shredder.ts
const Shredder = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 13V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5" }), path({ "d": "M14 2v5a1 1 0 0 0 1 1h5" }), path({ "d": "M10 22v-5" }), path({ "d": "M14 19v-2" }), path({ "d": "M18 20v-3" }), path({ "d": "M2 13h20" }), path({ "d": "M6 20v-3" }));
};
//#endregion
//#region src/icons/Shrimp.ts
const Shrimp = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 12h.01" }), path({ "d": "M13 22c.5-.5 1.12-1 2.5-1-1.38 0-2-.5-2.5-1" }), path({ "d": "M14 2a3.28 3.28 0 0 1-3.227 1.798l-6.17-.561A2.387 2.387 0 1 0 4.387 8H15.5a1 1 0 0 1 0 13 1 1 0 0 0 0-5H12a7 7 0 0 1-7-7V8" }), path({ "d": "M14 8a8.5 8.5 0 0 1 0 8" }), path({ "d": "M16 16c2 0 4.5-4 4-6" }));
};
//#endregion
//#region src/icons/Shrink.ts
const Shrink = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m15 15 6 6m-6-6v4.8m0-4.8h4.8" }), path({ "d": "M9 19.8V15m0 0H4.2M9 15l-6 6" }), path({ "d": "M15 4.2V9m0 0h4.8M15 9l6-6" }), path({ "d": "M9 4.2V9m0 0H4.2M9 9 3 3" }));
};
//#endregion
//#region src/icons/Shrub.ts
const Shrub = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 22v-5.172a2 2 0 0 0-.586-1.414L9.5 13.5" }), path({ "d": "M14.5 14.5 12 17" }), path({ "d": "M17 8.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0z" }));
};
//#endregion
//#region src/icons/Shuffle.ts
const Shuffle = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m18 14 4 4-4 4" }), path({ "d": "m18 2 4 4-4 4" }), path({ "d": "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22" }), path({ "d": "M2 6h1.972a4 4 0 0 1 3.6 2.2" }), path({ "d": "M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45" }));
};
//#endregion
//#region src/icons/Sigma.ts
const Sigma = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2" }));
};
//#endregion
//#region src/icons/SignalHigh.ts
const SignalHigh = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 20h.01" }), path({ "d": "M7 20v-4" }), path({ "d": "M12 20v-8" }), path({ "d": "M17 20V8" }));
};
//#endregion
//#region src/icons/SignalLow.ts
const SignalLow = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 20h.01" }), path({ "d": "M7 20v-4" }));
};
//#endregion
//#region src/icons/SignalMedium.ts
const SignalMedium = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 20h.01" }), path({ "d": "M7 20v-4" }), path({ "d": "M12 20v-8" }));
};
//#endregion
//#region src/icons/SignalZero.ts
const SignalZero = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 20h.01" }));
};
//#endregion
//#region src/icons/Signal.ts
const Signal = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 20h.01" }), path({ "d": "M7 20v-4" }), path({ "d": "M12 20v-8" }), path({ "d": "M17 20V8" }), path({ "d": "M22 4v16" }));
};
//#endregion
//#region src/icons/Signature.ts
const Signature = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284" }), path({ "d": "M3 21h18" }));
};
//#endregion
//#region src/icons/SignpostBig.ts
const SignpostBig = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 9H4L2 7l2-2h6" }), path({ "d": "M14 5h6l2 2-2 2h-6" }), path({ "d": "M10 22V4a2 2 0 1 1 4 0v18" }), path({ "d": "M8 22h8" }));
};
//#endregion
//#region src/icons/Signpost.ts
const Signpost = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 13v8" }), path({ "d": "M12 3v3" }), path({ "d": "M2.354 10.354a1.207 1.207 0 0 1 0-1.708l2.06-2.06A2 2 0 0 1 5.828 6h12.344a2 2 0 0 1 1.414.586l2.06 2.06a1.207 1.207 0 0 1 0 1.708l-2.06 2.06a2 2 0 0 1-1.414.586H5.828a2 2 0 0 1-1.414-.586z" }));
};
//#endregion
//#region src/icons/Siren.ts
const Siren = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M7 18v-6a5 5 0 1 1 10 0v6" }), path({ "d": "M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z" }), path({ "d": "M21 12h1" }), path({ "d": "M18.5 4.5 18 5" }), path({ "d": "M2 12h1" }), path({ "d": "M12 2v1" }), path({ "d": "m4.929 4.929.707.707" }), path({ "d": "M12 12v6" }));
};
//#endregion
//#region src/icons/SkipBack.ts
const SkipBack = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z" }), path({ "d": "M3 20V4" }));
};
//#endregion
//#region src/icons/SkipForward.ts
const SkipForward = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21 4v16" }), path({ "d": "M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z" }));
};
//#endregion
//#region src/icons/Skull.ts
const Skull = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m12.5 17-.5-1-.5 1h1z" }), path({ "d": "M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z" }), circle({
		cx: "15",
		cy: "12",
		"r": "1"
	}), circle({
		cx: "9",
		cy: "12",
		"r": "1"
	}));
};
//#endregion
//#region src/icons/Slash.ts
const Slash = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M22 2 2 22" }));
};
//#endregion
//#region src/icons/Slice.ts
const Slice = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 16.586V19a1 1 0 0 1-1 1H2L18.37 3.63a1 1 0 1 1 3 3l-9.663 9.663a1 1 0 0 1-1.414 0L8 14" }));
};
//#endregion
//#region src/icons/SlidersHorizontal.ts
const SlidersHorizontal = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 5H3" }), path({ "d": "M12 19H3" }), path({ "d": "M14 3v4" }), path({ "d": "M16 17v4" }), path({ "d": "M21 12h-9" }), path({ "d": "M21 19h-5" }), path({ "d": "M21 5h-7" }), path({ "d": "M8 10v4" }), path({ "d": "M8 12H3" }));
};
//#endregion
//#region src/icons/SlidersVertical.ts
const SlidersVertical = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 8h4" }), path({ "d": "M12 21v-9" }), path({ "d": "M12 8V3" }), path({ "d": "M17 16h4" }), path({ "d": "M19 12V3" }), path({ "d": "M19 21v-5" }), path({ "d": "M3 14h4" }), path({ "d": "M5 10V3" }), path({ "d": "M5 21v-7" }));
};
//#endregion
//#region src/icons/SmartphoneCharging.ts
const SmartphoneCharging = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "14",
		height: "20",
		"x": "5",
		"y": "2",
		rx: "2",
		ry: "2"
	}), path({ "d": "M12.667 8 10 12h4l-2.667 4" }));
};
//#endregion
//#region src/icons/SmartphoneNfc.ts
const SmartphoneNfc = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "7",
		height: "12",
		"x": "2",
		"y": "6",
		rx: "1"
	}), path({ "d": "M13 8.32a7.43 7.43 0 0 1 0 7.36" }), path({ "d": "M16.46 6.21a11.76 11.76 0 0 1 0 11.58" }), path({ "d": "M19.91 4.1a15.91 15.91 0 0 1 .01 15.8" }));
};
//#endregion
//#region src/icons/Smartphone.ts
const Smartphone = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "14",
		height: "20",
		"x": "5",
		"y": "2",
		rx: "2",
		ry: "2"
	}), path({ "d": "M12 18h.01" }));
};
//#endregion
//#region src/icons/SmilePlus.ts
const SmilePlus = (props = {}) => {
	const { path, line } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M22 11v1a10 10 0 1 1-9-10" }), path({ "d": "M8 14s1.5 2 4 2 4-2 4-2" }), line({
		x1: "9",
		x2: "9.01",
		y1: "9",
		y2: "9"
	}), line({
		x1: "15",
		x2: "15.01",
		y1: "9",
		y2: "9"
	}), path({ "d": "M16 5h6" }), path({ "d": "M19 2v6" }));
};
//#endregion
//#region src/icons/Smile.ts
const Smile = (props = {}) => {
	const { circle, path, line } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), path({ "d": "M8 14s1.5 2 4 2 4-2 4-2" }), line({
		x1: "9",
		x2: "9.01",
		y1: "9",
		y2: "9"
	}), line({
		x1: "15",
		x2: "15.01",
		y1: "9",
		y2: "9"
	}));
};
//#endregion
//#region src/icons/Snail.ts
const Snail = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0" }), circle({
		cx: "10",
		cy: "13",
		"r": "8"
	}), path({ "d": "M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6" }), path({ "d": "M18 3 19.1 5.2" }), path({ "d": "M22 3 20.9 5.2" }));
};
//#endregion
//#region src/icons/Snowflake.ts
const Snowflake = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m10 20-1.25-2.5L6 18" }), path({ "d": "M10 4 8.75 6.5 6 6" }), path({ "d": "m14 20 1.25-2.5L18 18" }), path({ "d": "m14 4 1.25 2.5L18 6" }), path({ "d": "m17 21-3-6h-4" }), path({ "d": "m17 3-3 6 1.5 3" }), path({ "d": "M2 12h6.5L10 9" }), path({ "d": "m20 10-1.5 2 1.5 2" }), path({ "d": "M22 12h-6.5L14 15" }), path({ "d": "m4 10 1.5 2L4 14" }), path({ "d": "m7 21 3-6-1.5-3" }), path({ "d": "m7 3 3 6h4" }));
};
//#endregion
//#region src/icons/SoapDispenserDroplet.ts
const SoapDispenserDroplet = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10.5 2v4" }), path({ "d": "M14 2H7a2 2 0 0 0-2 2" }), path({ "d": "M19.29 14.76A6.67 6.67 0 0 1 17 11a6.6 6.6 0 0 1-2.29 3.76c-1.15.92-1.71 2.04-1.71 3.19 0 2.22 1.8 4.05 4 4.05s4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19" }), path({ "d": "M9.607 21H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h7V7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" }));
};
//#endregion
//#region src/icons/Sofa.ts
const Sofa = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" }), path({ "d": "M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" }), path({ "d": "M4 18v2" }), path({ "d": "M20 18v2" }), path({ "d": "M12 4v9" }));
};
//#endregion
//#region src/icons/SolarPanel.ts
const SolarPanel = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 2h2" }), path({ "d": "m14.28 14-4.56 8" }), path({ "d": "m21 22-1.558-4H4.558" }), path({ "d": "M3 10v2" }), path({ "d": "M6.245 15.04A2 2 0 0 1 8 14h12a1 1 0 0 1 .864 1.505l-3.11 5.457A2 2 0 0 1 16 22H4a1 1 0 0 1-.863-1.506z" }), path({ "d": "M7 2a4 4 0 0 1-4 4" }), path({ "d": "m8.66 7.66 1.41 1.41" }));
};
//#endregion
//#region src/icons/Soup.ts
const Soup = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" }), path({ "d": "M7 21h10" }), path({ "d": "M19.5 12 22 6" }), path({ "d": "M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62" }), path({ "d": "M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62" }), path({ "d": "M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62" }));
};
//#endregion
//#region src/icons/Space.ts
const Space = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" }));
};
//#endregion
//#region src/icons/Spade.ts
const Spade = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 18v4" }), path({ "d": "M2 14.499a5.5 5.5 0 0 0 9.591 3.675.6.6 0 0 1 .818.001A5.5 5.5 0 0 0 22 14.5c0-2.29-1.5-4-3-5.5l-5.492-5.312a2 2 0 0 0-3-.02L5 8.999c-1.5 1.5-3 3.2-3 5.5" }));
};
//#endregion
//#region src/icons/Sparkle.ts
const Sparkle = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" }));
};
//#endregion
//#region src/icons/Sparkles.ts
const Sparkles = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" }), path({ "d": "M20 2v4" }), path({ "d": "M22 4h-4" }), circle({
		cx: "4",
		cy: "20",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/Speaker.ts
const Speaker = (props = {}) => {
	const { rect, path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "16",
		height: "20",
		"x": "4",
		"y": "2",
		rx: "2"
	}), path({ "d": "M12 6h.01" }), circle({
		cx: "12",
		cy: "14",
		"r": "4"
	}), path({ "d": "M12 14h.01" }));
};
//#endregion
//#region src/icons/Speech.ts
const Speech = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20" }), path({ "d": "M19.8 17.8a7.5 7.5 0 0 0 .003-10.603" }), path({ "d": "M17 15a3.5 3.5 0 0 0-.025-4.975" }));
};
//#endregion
//#region src/icons/SpellCheck2.ts
const SpellCheck2 = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m6 16 6-12 6 12" }), path({ "d": "M8 12h8" }), path({ "d": "M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1" }));
};
//#endregion
//#region src/icons/SpellCheck.ts
const SpellCheck = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m6 16 6-12 6 12" }), path({ "d": "M8 12h8" }), path({ "d": "m16 20 2 2 4-4" }));
};
//#endregion
//#region src/icons/SplinePointer.ts
const SplinePointer = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z" }), path({ "d": "M5 17A12 12 0 0 1 17 5" }), circle({
		cx: "19",
		cy: "5",
		"r": "2"
	}), circle({
		cx: "5",
		cy: "19",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/Spline.ts
const Spline = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "19",
		cy: "5",
		"r": "2"
	}), circle({
		cx: "5",
		cy: "19",
		"r": "2"
	}), path({ "d": "M5 17A12 12 0 0 1 17 5" }));
};
//#endregion
//#region src/icons/Split.ts
const Split = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 3h5v5" }), path({ "d": "M8 3H3v5" }), path({ "d": "M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" }), path({ "d": "m15 9 6-6" }));
};
//#endregion
//#region src/icons/Spool.ts
const Spool = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M17 13.44 4.442 17.082A2 2 0 0 0 4.982 21H19a2 2 0 0 0 .558-3.921l-1.115-.32A2 2 0 0 1 17 14.837V7.66" }), path({ "d": "m7 10.56 12.558-3.642A2 2 0 0 0 19.018 3H5a2 2 0 0 0-.558 3.921l1.115.32A2 2 0 0 1 7 9.163v7.178" }));
};
//#endregion
//#region src/icons/SportShoe.ts
const SportShoe = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m15 10.42 4.8-5.07" }), path({ "d": "M19 18h3" }), path({ "d": "M9.5 22 21.414 9.415A2 2 0 0 0 21.2 6.4l-5.61-4.208A1 1 0 0 0 14 3v2a2 2 0 0 1-1.394 1.906L8.677 8.053A1 1 0 0 0 8 9c-.155 6.393-2.082 9-4 9a2 2 0 0 0 0 4h14" }));
};
//#endregion
//#region src/icons/Spotlight.ts
const Spotlight = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M15.295 19.562 16 22" }), path({ "d": "m17 16 3.758 2.098" }), path({ "d": "m19 12.5 3.026-.598" }), path({ "d": "M7.61 6.3a3 3 0 0 0-3.92 1.3l-1.38 2.79a3 3 0 0 0 1.3 3.91l6.89 3.597a1 1 0 0 0 1.342-.447l3.106-6.211a1 1 0 0 0-.447-1.341z" }), path({ "d": "M8 9V2" }));
};
//#endregion
//#region src/icons/SprayCan.ts
const SprayCan = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 3h.01" }), path({ "d": "M7 5h.01" }), path({ "d": "M11 7h.01" }), path({ "d": "M3 7h.01" }), path({ "d": "M7 9h.01" }), path({ "d": "M3 11h.01" }), rect({
		width: "4",
		height: "4",
		"x": "15",
		"y": "5"
	}), path({ "d": "m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2" }), path({ "d": "m13 14 8-2" }), path({ "d": "m13 19 8-2" }));
};
//#endregion
//#region src/icons/Sprout.ts
const Sprout = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3" }), path({ "d": "M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4" }), path({ "d": "M5 21h14" }));
};
//#endregion
//#region src/icons/SquareActivity.ts
const SquareActivity = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M17 12h-2l-2 5-2-10-2 5H7" }));
};
//#endregion
//#region src/icons/SquareArrowDownLeft.ts
const SquareArrowDownLeft = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "m16 8-8 8" }), path({ "d": "M16 16H8V8" }));
};
//#endregion
//#region src/icons/SquareArrowDownRight.ts
const SquareArrowDownRight = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "m8 8 8 8" }), path({ "d": "M16 8v8H8" }));
};
//#endregion
//#region src/icons/SquareArrowDown.ts
const SquareArrowDown = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M12 8v8" }), path({ "d": "m8 12 4 4 4-4" }));
};
//#endregion
//#region src/icons/SquareArrowLeft.ts
const SquareArrowLeft = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "m12 8-4 4 4 4" }), path({ "d": "M16 12H8" }));
};
//#endregion
//#region src/icons/SquareArrowOutDownLeft.ts
const SquareArrowOutDownLeft = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6" }), path({ "d": "m3 21 9-9" }), path({ "d": "M9 21H3v-6" }));
};
//#endregion
//#region src/icons/SquareArrowOutDownRight.ts
const SquareArrowOutDownRight = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" }), path({ "d": "m21 21-9-9" }), path({ "d": "M21 15v6h-6" }));
};
//#endregion
//#region src/icons/SquareArrowOutUpLeft.ts
const SquareArrowOutUpLeft = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6" }), path({ "d": "m3 3 9 9" }), path({ "d": "M3 9V3h6" }));
};
//#endregion
//#region src/icons/SquareArrowOutUpRight.ts
const SquareArrowOutUpRight = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" }), path({ "d": "m21 3-9 9" }), path({ "d": "M15 3h6v6" }));
};
//#endregion
//#region src/icons/SquareArrowRightEnter.ts
const SquareArrowRightEnter = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m10 16 4-4-4-4" }), path({ "d": "M3 12h11" }), path({ "d": "M3 8V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" }));
};
//#endregion
//#region src/icons/SquareArrowRightExit.ts
const SquareArrowRightExit = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 12h11" }), path({ "d": "m17 16 4-4-4-4" }), path({ "d": "M21 6.344V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1.344" }));
};
//#endregion
//#region src/icons/SquareArrowRight.ts
const SquareArrowRight = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M8 12h8" }), path({ "d": "m12 16 4-4-4-4" }));
};
//#endregion
//#region src/icons/SquareArrowUpLeft.ts
const SquareArrowUpLeft = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M8 16V8h8" }), path({ "d": "M16 16 8 8" }));
};
//#endregion
//#region src/icons/SquareArrowUpRight.ts
const SquareArrowUpRight = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M8 8h8v8" }), path({ "d": "m8 16 8-8" }));
};
//#endregion
//#region src/icons/SquareArrowUp.ts
const SquareArrowUp = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "m16 12-4-4-4 4" }), path({ "d": "M12 16V8" }));
};
//#endregion
//#region src/icons/SquareAsterisk.ts
const SquareAsterisk = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M12 8v8" }), path({ "d": "m8.5 14 7-4" }), path({ "d": "m8.5 10 7 4" }));
};
//#endregion
//#region src/icons/SquareBottomDashedScissors.ts
const SquareBottomDashedScissors = (props = {}) => {
	const { line, path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, line({
		x1: "5",
		y1: "3",
		x2: "19",
		y2: "3"
	}), line({
		x1: "3",
		y1: "5",
		x2: "3",
		y2: "19"
	}), line({
		x1: "21",
		y1: "5",
		x2: "21",
		y2: "19"
	}), line({
		x1: "9",
		y1: "21",
		x2: "10",
		y2: "21"
	}), line({
		x1: "14",
		y1: "21",
		x2: "15",
		y2: "21"
	}), path({ "d": "M 3 5 A2 2 0 0 1 5 3" }), path({ "d": "M 19 3 A2 2 0 0 1 21 5" }), path({ "d": "M 5 21 A2 2 0 0 1 3 19" }), path({ "d": "M 21 19 A2 2 0 0 1 19 21" }), circle({
		cx: "8.5",
		cy: "8.5",
		"r": "1.5"
	}), line({
		x1: "9.56066",
		y1: "9.56066",
		x2: "12",
		y2: "12"
	}), line({
		x1: "17",
		y1: "17",
		x2: "14.82",
		y2: "14.82"
	}), circle({
		cx: "8.5",
		cy: "15.5",
		"r": "1.5"
	}), line({
		x1: "9.56066",
		y1: "14.43934",
		x2: "17",
		y2: "7"
	}));
};
//#endregion
//#region src/icons/SquareCenterlineDashedHorizontal.ts
const SquareCenterlineDashedHorizontal = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3" }), path({ "d": "M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3" }), path({ "d": "M12 20v2" }), path({ "d": "M12 14v2" }), path({ "d": "M12 8v2" }), path({ "d": "M12 2v2" }));
};
//#endregion
//#region src/icons/SquareCenterlineDashedVertical.ts
const SquareCenterlineDashedVertical = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" }), path({ "d": "M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" }), path({ "d": "M4 12H2" }), path({ "d": "M10 12H8" }), path({ "d": "M16 12h-2" }), path({ "d": "M22 12h-2" }));
};
//#endregion
//#region src/icons/SquareChartGantt.ts
const SquareChartGantt = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M9 8h7" }), path({ "d": "M8 12h6" }), path({ "d": "M11 16h5" }));
};
//#endregion
//#region src/icons/SquareCheckBig.ts
const SquareCheckBig = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344" }), path({ "d": "m9 11 3 3L22 4" }));
};
//#endregion
//#region src/icons/SquareCheck.ts
const SquareCheck = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "m9 12 2 2 4-4" }));
};
//#endregion
//#region src/icons/SquareChevronDown.ts
const SquareChevronDown = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "m16 10-4 4-4-4" }));
};
//#endregion
//#region src/icons/SquareChevronLeft.ts
const SquareChevronLeft = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "m14 16-4-4 4-4" }));
};
//#endregion
//#region src/icons/SquareChevronRight.ts
const SquareChevronRight = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "m10 8 4 4-4 4" }));
};
//#endregion
//#region src/icons/SquareChevronUp.ts
const SquareChevronUp = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "m8 14 4-4 4 4" }));
};
//#endregion
//#region src/icons/SquareCode.ts
const SquareCode = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m10 9-3 3 3 3" }), path({ "d": "m14 15 3-3-3-3" }), rect({
		"x": "3",
		"y": "3",
		width: "18",
		height: "18",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/SquareDashedBottomCode.ts
const SquareDashedBottomCode = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 9.5 8 12l2 2.5" }), path({ "d": "M14 21h1" }), path({ "d": "m14 9.5 2 2.5-2 2.5" }), path({ "d": "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2" }), path({ "d": "M9 21h1" }));
};
//#endregion
//#region src/icons/SquareDashedBottom.ts
const SquareDashedBottom = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2" }), path({ "d": "M9 21h1" }), path({ "d": "M14 21h1" }));
};
//#endregion
//#region src/icons/SquareDashedKanban.ts
const SquareDashedKanban = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M8 7v7" }), path({ "d": "M12 7v4" }), path({ "d": "M16 7v9" }), path({ "d": "M5 3a2 2 0 0 0-2 2" }), path({ "d": "M9 3h1" }), path({ "d": "M14 3h1" }), path({ "d": "M19 3a2 2 0 0 1 2 2" }), path({ "d": "M21 9v1" }), path({ "d": "M21 14v1" }), path({ "d": "M21 19a2 2 0 0 1-2 2" }), path({ "d": "M14 21h1" }), path({ "d": "M9 21h1" }), path({ "d": "M5 21a2 2 0 0 1-2-2" }), path({ "d": "M3 14v1" }), path({ "d": "M3 9v1" }));
};
//#endregion
//#region src/icons/SquareDashedMousePointer.ts
const SquareDashedMousePointer = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z" }), path({ "d": "M5 3a2 2 0 0 0-2 2" }), path({ "d": "M19 3a2 2 0 0 1 2 2" }), path({ "d": "M5 21a2 2 0 0 1-2-2" }), path({ "d": "M9 3h1" }), path({ "d": "M9 21h2" }), path({ "d": "M14 3h1" }), path({ "d": "M3 9v1" }), path({ "d": "M21 9v2" }), path({ "d": "M3 14v1" }));
};
//#endregion
//#region src/icons/SquareDashedTopSolid.ts
const SquareDashedTopSolid = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M14 21h1" }), path({ "d": "M21 14v1" }), path({ "d": "M21 19a2 2 0 0 1-2 2" }), path({ "d": "M21 9v1" }), path({ "d": "M3 14v1" }), path({ "d": "M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" }), path({ "d": "M3 9v1" }), path({ "d": "M5 21a2 2 0 0 1-2-2" }), path({ "d": "M9 21h1" }));
};
//#endregion
//#region src/icons/SquareDashed.ts
const SquareDashed = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M5 3a2 2 0 0 0-2 2" }), path({ "d": "M19 3a2 2 0 0 1 2 2" }), path({ "d": "M21 19a2 2 0 0 1-2 2" }), path({ "d": "M5 21a2 2 0 0 1-2-2" }), path({ "d": "M9 3h1" }), path({ "d": "M9 21h1" }), path({ "d": "M14 3h1" }), path({ "d": "M14 21h1" }), path({ "d": "M3 9v1" }), path({ "d": "M21 9v1" }), path({ "d": "M3 14v1" }), path({ "d": "M21 14v1" }));
};
//#endregion
//#region src/icons/SquareDivide.ts
const SquareDivide = (props = {}) => {
	const { rect, line } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2",
		ry: "2"
	}), line({
		x1: "8",
		x2: "16",
		y1: "12",
		y2: "12"
	}), line({
		x1: "12",
		x2: "12",
		y1: "16",
		y2: "16"
	}), line({
		x1: "12",
		x2: "12",
		y1: "8",
		y2: "8"
	}));
};
//#endregion
//#region src/icons/SquareDot.ts
const SquareDot = (props = {}) => {
	const { rect, circle } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), circle({
		cx: "12",
		cy: "12",
		"r": "1"
	}));
};
//#endregion
//#region src/icons/SquareEqual.ts
const SquareEqual = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M7 10h10" }), path({ "d": "M7 14h10" }));
};
//#endregion
//#region src/icons/SquareFunction.ts
const SquareFunction = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2",
		ry: "2"
	}), path({ "d": "M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3" }), path({ "d": "M9 11.2h5.7" }));
};
//#endregion
//#region src/icons/SquareKanban.ts
const SquareKanban = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M8 7v7" }), path({ "d": "M12 7v4" }), path({ "d": "M16 7v9" }));
};
//#endregion
//#region src/icons/SquareLibrary.ts
const SquareLibrary = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M7 7v10" }), path({ "d": "M11 7v10" }), path({ "d": "m15 7 2 10" }));
};
//#endregion
//#region src/icons/SquareM.ts
const SquareM = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M8 16V8.5a.5.5 0 0 1 .9-.3l2.7 3.599a.5.5 0 0 0 .8 0l2.7-3.6a.5.5 0 0 1 .9.3V16" }), rect({
		"x": "3",
		"y": "3",
		width: "18",
		height: "18",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/SquareMenu.ts
const SquareMenu = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M7 8h10" }), path({ "d": "M7 12h10" }), path({ "d": "M7 16h10" }));
};
//#endregion
//#region src/icons/SquareMinus.ts
const SquareMinus = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M8 12h8" }));
};
//#endregion
//#region src/icons/SquareMousePointer.ts
const SquareMousePointer = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z" }), path({ "d": "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" }));
};
//#endregion
//#region src/icons/SquareParkingOff.ts
const SquareParkingOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41" }), path({ "d": "M3 8.7V19a2 2 0 0 0 2 2h10.3" }), path({ "d": "m2 2 20 20" }), path({ "d": "M13 13a3 3 0 1 0 0-6H9v2" }), path({ "d": "M9 17v-2.3" }));
};
//#endregion
//#region src/icons/SquareParking.ts
const SquareParking = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M9 17V7h4a3 3 0 0 1 0 6H9" }));
};
//#endregion
//#region src/icons/SquarePause.ts
const SquarePause = (props = {}) => {
	const { rect, line } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), line({
		x1: "10",
		x2: "10",
		y1: "15",
		y2: "9"
	}), line({
		x1: "14",
		x2: "14",
		y1: "15",
		y2: "9"
	}));
};
//#endregion
//#region src/icons/SquarePen.ts
const SquarePen = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }), path({ "d": "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" }));
};
//#endregion
//#region src/icons/SquarePercent.ts
const SquarePercent = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "m15 9-6 6" }), path({ "d": "M9 9h.01" }), path({ "d": "M15 15h.01" }));
};
//#endregion
//#region src/icons/SquarePi.ts
const SquarePi = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M7 7h10" }), path({ "d": "M10 7v10" }), path({ "d": "M16 17a2 2 0 0 1-2-2V7" }));
};
//#endregion
//#region src/icons/SquarePilcrow.ts
const SquarePilcrow = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M12 12H9.5a2.5 2.5 0 0 1 0-5H17" }), path({ "d": "M12 7v10" }), path({ "d": "M16 7v10" }));
};
//#endregion
//#region src/icons/SquarePlay.ts
const SquarePlay = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		"x": "3",
		"y": "3",
		width: "18",
		height: "18",
		rx: "2"
	}), path({ "d": "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z" }));
};
//#endregion
//#region src/icons/SquarePlus.ts
const SquarePlus = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M8 12h8" }), path({ "d": "M12 8v8" }));
};
//#endregion
//#region src/icons/SquarePower.ts
const SquarePower = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 7v4" }), path({ "d": "M7.998 9.003a5 5 0 1 0 8-.005" }), rect({
		"x": "3",
		"y": "3",
		width: "18",
		height: "18",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/SquareRadical.ts
const SquareRadical = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M7 12h2l2 5 2-10h4" }), rect({
		"x": "3",
		"y": "3",
		width: "18",
		height: "18",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/SquareRoundCorner.ts
const SquareRoundCorner = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21 11a8 8 0 0 0-8-8" }), path({ "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }));
};
//#endregion
//#region src/icons/SquareScissors.ts
const SquareScissors = (props = {}) => {
	const { rect, circle, line } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), circle({
		cx: "8.5",
		cy: "8.5",
		"r": "1.5"
	}), line({
		x1: "9.56066",
		y1: "9.56066",
		x2: "12",
		y2: "12"
	}), line({
		x1: "17",
		y1: "17",
		x2: "14.82",
		y2: "14.82"
	}), circle({
		cx: "8.5",
		cy: "15.5",
		"r": "1.5"
	}), line({
		x1: "9.56066",
		y1: "14.43934",
		x2: "17",
		y2: "7"
	}));
};
//#endregion
//#region src/icons/SquareSigma.ts
const SquareSigma = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M16 8.9V7H8l4 5-4 5h8v-1.9" }));
};
//#endregion
//#region src/icons/SquareSlash.ts
const SquareSlash = (props = {}) => {
	const { rect, line } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), line({
		x1: "9",
		x2: "15",
		y1: "15",
		y2: "9"
	}));
};
//#endregion
//#region src/icons/SquareSplitHorizontal.ts
const SquareSplitHorizontal = (props = {}) => {
	const { path, line } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3" }), path({ "d": "M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3" }), line({
		x1: "12",
		x2: "12",
		y1: "4",
		y2: "20"
	}));
};
//#endregion
//#region src/icons/SquareSplitVertical.ts
const SquareSplitVertical = (props = {}) => {
	const { path, line } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3" }), path({ "d": "M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3" }), line({
		x1: "4",
		x2: "20",
		y1: "12",
		y2: "12"
	}));
};
//#endregion
//#region src/icons/SquareSquare.ts
const SquareSquare = (props = {}) => {
	const { rect } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		"x": "3",
		"y": "3",
		width: "18",
		height: "18",
		rx: "2"
	}), rect({
		"x": "8",
		"y": "8",
		width: "8",
		height: "8",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/SquareStack.ts
const SquareStack = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" }), path({ "d": "M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" }), rect({
		width: "8",
		height: "8",
		"x": "14",
		"y": "14",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/SquareStar.ts
const SquareStar = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11.035 7.69a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z" }), rect({
		"x": "3",
		"y": "3",
		width: "18",
		height: "18",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/SquareStop.ts
const SquareStop = (props = {}) => {
	const { rect } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), rect({
		"x": "9",
		"y": "9",
		width: "6",
		height: "6",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/SquareTerminal.ts
const SquareTerminal = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m7 11 2-2-2-2" }), path({ "d": "M11 13h4" }), rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2",
		ry: "2"
	}));
};
//#endregion
//#region src/icons/SquareUserRound.ts
const SquareUserRound = (props = {}) => {
	const { path, circle, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M18 21a6 6 0 0 0-12 0" }), circle({
		cx: "12",
		cy: "11",
		"r": "4"
	}), rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/SquareUser.ts
const SquareUser = (props = {}) => {
	const { rect, circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), circle({
		cx: "12",
		cy: "10",
		"r": "3"
	}), path({ "d": "M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" }));
};
//#endregion
//#region src/icons/SquareX.ts
const SquareX = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2",
		ry: "2"
	}), path({ "d": "m15 9-6 6" }), path({ "d": "m9 9 6 6" }));
};
//#endregion
//#region src/icons/Square.ts
const Square = (props = {}) => {
	const { rect } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/SquaresExclude.ts
const SquaresExclude = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 12v2a2 2 0 0 1-2 2H9a1 1 0 0 0-1 1v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h0" }), path({ "d": "M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1h-5a2 2 0 0 0-2 2v2" }));
};
//#endregion
//#region src/icons/SquaresIntersect.ts
const SquaresIntersect = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 22a2 2 0 0 1-2-2" }), path({ "d": "M14 2a2 2 0 0 1 2 2" }), path({ "d": "M16 22h-2" }), path({ "d": "M2 10V8" }), path({ "d": "M2 4a2 2 0 0 1 2-2" }), path({ "d": "M20 8a2 2 0 0 1 2 2" }), path({ "d": "M22 14v2" }), path({ "d": "M22 20a2 2 0 0 1-2 2" }), path({ "d": "M4 16a2 2 0 0 1-2-2" }), path({ "d": "M8 10a2 2 0 0 1 2-2h5a1 1 0 0 1 1 1v5a2 2 0 0 1-2 2H9a1 1 0 0 1-1-1z" }), path({ "d": "M8 2h2" }));
};
//#endregion
//#region src/icons/SquaresSubtract.ts
const SquaresSubtract = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 22a2 2 0 0 1-2-2" }), path({ "d": "M16 22h-2" }), path({ "d": "M16 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-5a2 2 0 0 1 2-2h5a1 1 0 0 0 1-1z" }), path({ "d": "M20 8a2 2 0 0 1 2 2" }), path({ "d": "M22 14v2" }), path({ "d": "M22 20a2 2 0 0 1-2 2" }));
};
//#endregion
//#region src/icons/SquaresUnite.ts
const SquaresUnite = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 0 1 1h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-3a1 1 0 0 0-1-1z" }));
};
//#endregion
//#region src/icons/SquircleDashed.ts
const SquircleDashed = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13.77 3.043a34 34 0 0 0-3.54 0" }), path({ "d": "M13.771 20.956a33 33 0 0 1-3.541.001" }), path({ "d": "M20.18 17.74c-.51 1.15-1.29 1.93-2.439 2.44" }), path({ "d": "M20.18 6.259c-.51-1.148-1.291-1.929-2.44-2.438" }), path({ "d": "M20.957 10.23a33 33 0 0 1 0 3.54" }), path({ "d": "M3.043 10.23a34 34 0 0 0 .001 3.541" }), path({ "d": "M6.26 20.179c-1.15-.508-1.93-1.29-2.44-2.438" }), path({ "d": "M6.26 3.82c-1.149.51-1.93 1.291-2.44 2.44" }));
};
//#endregion
//#region src/icons/Squircle.ts
const Squircle = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9" }));
};
//#endregion
//#region src/icons/Squirrel.ts
const Squirrel = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M15.236 22a3 3 0 0 0-2.2-5" }), path({ "d": "M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4" }), path({ "d": "M18 13h.01" }), path({ "d": "M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10" }));
};
//#endregion
//#region src/icons/Stamp.ts
const Stamp = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-6 0c0 2 1 2 1 3.5V13" }), path({ "d": "M20 15.5a2.5 2.5 0 0 0-2.5-2.5h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1z" }), path({ "d": "M5 22h14" }));
};
//#endregion
//#region src/icons/StarHalf.ts
const StarHalf = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2" }));
};
//#endregion
//#region src/icons/StarOff.ts
const StarOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m10.344 4.688 1.181-2.393a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.237 3.152" }), path({ "d": "m17.945 17.945.43 2.505a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a8 8 0 0 0 .4-.099" }), path({ "d": "m2 2 20 20" }));
};
//#endregion
//#region src/icons/Star.ts
const Star = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" }));
};
//#endregion
//#region src/icons/StepBack.ts
const StepBack = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13.971 4.285A2 2 0 0 1 17 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z" }), path({ "d": "M21 20V4" }));
};
//#endregion
//#region src/icons/StepForward.ts
const StepForward = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10.029 4.285A2 2 0 0 0 7 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z" }), path({ "d": "M3 4v16" }));
};
//#endregion
//#region src/icons/Stethoscope.ts
const Stethoscope = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 2v2" }), path({ "d": "M5 2v2" }), path({ "d": "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1" }), path({ "d": "M8 15a6 6 0 0 0 12 0v-3" }), circle({
		cx: "20",
		cy: "10",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/Sticker.ts
const Sticker = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" }), path({ "d": "M15 3v5a1 1 0 0 0 1 1h5" }), path({ "d": "M8 13h.01" }), path({ "d": "M16 13h.01" }), path({ "d": "M10 16s.8 1 2 1c1.3 0 2-1 2-1" }));
};
//#endregion
//#region src/icons/StickyNote.ts
const StickyNote = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z" }), path({ "d": "M15 3v5a1 1 0 0 0 1 1h5" }));
};
//#endregion
//#region src/icons/Stone.ts
const Stone = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11.264 2.205A4 4 0 0 0 6.42 4.211l-4 8a4 4 0 0 0 1.359 5.117l6 4a4 4 0 0 0 4.438 0l6-4a4 4 0 0 0 1.576-4.592l-2-6a4 4 0 0 0-2.53-2.53z" }), path({ "d": "M11.99 22 14 12l7.822 3.184" }), path({ "d": "M14 12 8.47 2.302" }));
};
//#endregion
//#region src/icons/Store.ts
const Store = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5" }), path({ "d": "M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244" }), path({ "d": "M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05" }));
};
//#endregion
//#region src/icons/StretchHorizontal.ts
const StretchHorizontal = (props = {}) => {
	const { rect } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "20",
		height: "6",
		"x": "2",
		"y": "4",
		rx: "2"
	}), rect({
		width: "20",
		height: "6",
		"x": "2",
		"y": "14",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/StretchVertical.ts
const StretchVertical = (props = {}) => {
	const { rect } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "6",
		height: "20",
		"x": "4",
		"y": "2",
		rx: "2"
	}), rect({
		width: "6",
		height: "20",
		"x": "14",
		"y": "2",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/Strikethrough.ts
const Strikethrough = (props = {}) => {
	const { path, line } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 4H9a3 3 0 0 0-2.83 4" }), path({ "d": "M14 12a4 4 0 0 1 0 8H6" }), line({
		x1: "4",
		x2: "20",
		y1: "12",
		y2: "12"
	}));
};
//#endregion
//#region src/icons/Subscript.ts
const Subscript = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m4 5 8 8" }), path({ "d": "m12 5-8 8" }), path({ "d": "M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07" }));
};
//#endregion
//#region src/icons/SunDim.ts
const SunDim = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "4"
	}), path({ "d": "M12 4h.01" }), path({ "d": "M20 12h.01" }), path({ "d": "M12 20h.01" }), path({ "d": "M4 12h.01" }), path({ "d": "M17.657 6.343h.01" }), path({ "d": "M17.657 17.657h.01" }), path({ "d": "M6.343 17.657h.01" }), path({ "d": "M6.343 6.343h.01" }));
};
//#endregion
//#region src/icons/SunMedium.ts
const SunMedium = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "4"
	}), path({ "d": "M12 3v1" }), path({ "d": "M12 20v1" }), path({ "d": "M3 12h1" }), path({ "d": "M20 12h1" }), path({ "d": "m18.364 5.636-.707.707" }), path({ "d": "m6.343 17.657-.707.707" }), path({ "d": "m5.636 5.636.707.707" }), path({ "d": "m17.657 17.657.707.707" }));
};
//#endregion
//#region src/icons/SunMoon.ts
const SunMoon = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 2v2" }), path({ "d": "M14.837 16.385a6 6 0 1 1-7.223-7.222c.624-.147.97.66.715 1.248a4 4 0 0 0 5.26 5.259c.589-.255 1.396.09 1.248.715" }), path({ "d": "M16 12a4 4 0 0 0-4-4" }), path({ "d": "m19 5-1.256 1.256" }), path({ "d": "M20 12h2" }));
};
//#endregion
//#region src/icons/SunSnow.ts
const SunSnow = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 21v-1" }), path({ "d": "M10 4V3" }), path({ "d": "M10 9a3 3 0 0 0 0 6" }), path({ "d": "m14 20 1.25-2.5L18 18" }), path({ "d": "m14 4 1.25 2.5L18 6" }), path({ "d": "m17 21-3-6 1.5-3H22" }), path({ "d": "m17 3-3 6 1.5 3" }), path({ "d": "M2 12h1" }), path({ "d": "m20 10-1.5 2 1.5 2" }), path({ "d": "m3.64 18.36.7-.7" }), path({ "d": "m4.34 6.34-.7-.7" }));
};
//#endregion
//#region src/icons/Sun.ts
const Sun = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "4"
	}), path({ "d": "M12 2v2" }), path({ "d": "M12 20v2" }), path({ "d": "m4.93 4.93 1.41 1.41" }), path({ "d": "m17.66 17.66 1.41 1.41" }), path({ "d": "M2 12h2" }), path({ "d": "M20 12h2" }), path({ "d": "m6.34 17.66-1.41 1.41" }), path({ "d": "m19.07 4.93-1.41 1.41" }));
};
//#endregion
//#region src/icons/Sunrise.ts
const Sunrise = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 2v8" }), path({ "d": "m4.93 10.93 1.41 1.41" }), path({ "d": "M2 18h2" }), path({ "d": "M20 18h2" }), path({ "d": "m19.07 10.93-1.41 1.41" }), path({ "d": "M22 22H2" }), path({ "d": "m8 6 4-4 4 4" }), path({ "d": "M16 18a4 4 0 0 0-8 0" }));
};
//#endregion
//#region src/icons/Sunset.ts
const Sunset = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 10V2" }), path({ "d": "m4.93 10.93 1.41 1.41" }), path({ "d": "M2 18h2" }), path({ "d": "M20 18h2" }), path({ "d": "m19.07 10.93-1.41 1.41" }), path({ "d": "M22 22H2" }), path({ "d": "m16 6-4 4-4-4" }), path({ "d": "M16 18a4 4 0 0 0-8 0" }));
};
//#endregion
//#region src/icons/Superscript.ts
const Superscript = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m4 19 8-8" }), path({ "d": "m12 19-8-8" }), path({ "d": "M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06" }));
};
//#endregion
//#region src/icons/SwatchBook.ts
const SwatchBook = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z" }), path({ "d": "M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7" }), path({ "d": "M 7 17h.01" }), path({ "d": "m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8" }));
};
//#endregion
//#region src/icons/SwissFranc.ts
const SwissFranc = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 21V3h8" }), path({ "d": "M6 16h9" }), path({ "d": "M10 9.5h7" }));
};
//#endregion
//#region src/icons/SwitchCamera.ts
const SwitchCamera = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" }), path({ "d": "M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5" }), circle({
		cx: "12",
		cy: "12",
		"r": "3"
	}), path({ "d": "m18 22-3-3 3-3" }), path({ "d": "m6 2 3 3-3 3" }));
};
//#endregion
//#region src/icons/Sword.ts
const Sword = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m11 19-6-6" }), path({ "d": "m5 21-2-2" }), path({ "d": "m8 16-4 4" }), path({ "d": "M9.5 17.5 21 6V3h-3L6.5 14.5" }));
};
//#endregion
//#region src/icons/Swords.ts
const Swords = (props = {}) => {
	const { polyline, line } = van.tags(svgNamespace);
	return LucideIcon(props, polyline({ points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5" }), line({
		x1: "13",
		x2: "19",
		y1: "19",
		y2: "13"
	}), line({
		x1: "16",
		x2: "20",
		y1: "16",
		y2: "20"
	}), line({
		x1: "19",
		x2: "21",
		y1: "21",
		y2: "19"
	}), polyline({ points: "14.5 6.5 18 3 21 3 21 6 17.5 9.5" }), line({
		x1: "5",
		x2: "9",
		y1: "14",
		y2: "18"
	}), line({
		x1: "7",
		x2: "4",
		y1: "17",
		y2: "20"
	}), line({
		x1: "3",
		x2: "5",
		y1: "19",
		y2: "21"
	}));
};
//#endregion
//#region src/icons/Syringe.ts
const Syringe = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m18 2 4 4" }), path({ "d": "m17 7 3-3" }), path({ "d": "M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" }), path({ "d": "m9 11 4 4" }), path({ "d": "m5 19-3 3" }), path({ "d": "m14 4 6 6" }));
};
//#endregion
//#region src/icons/Table2.ts
const Table2 = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" }));
};
//#endregion
//#region src/icons/TableCellsMerge.ts
const TableCellsMerge = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 21v-6" }), path({ "d": "M12 9V3" }), path({ "d": "M3 15h18" }), path({ "d": "M3 9h18" }), rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/TableCellsSplit.ts
const TableCellsSplit = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 15V9" }), path({ "d": "M3 15h18" }), path({ "d": "M3 9h18" }), rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/TableColumnsSplit.ts
const TableColumnsSplit = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M14 14v2" }), path({ "d": "M14 20v2" }), path({ "d": "M14 2v2" }), path({ "d": "M14 8v2" }), path({ "d": "M2 15h8" }), path({ "d": "M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2" }), path({ "d": "M2 9h8" }), path({ "d": "M22 15h-4" }), path({ "d": "M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2" }), path({ "d": "M22 9h-4" }), path({ "d": "M5 3v18" }));
};
//#endregion
//#region src/icons/TableOfContents.ts
const TableOfContents = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 5H3" }), path({ "d": "M16 12H3" }), path({ "d": "M16 19H3" }), path({ "d": "M21 5h.01" }), path({ "d": "M21 12h.01" }), path({ "d": "M21 19h.01" }));
};
//#endregion
//#region src/icons/TableProperties.ts
const TableProperties = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M15 3v18" }), rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M21 9H3" }), path({ "d": "M21 15H3" }));
};
//#endregion
//#region src/icons/TableRowsSplit.ts
const TableRowsSplit = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M14 10h2" }), path({ "d": "M15 22v-8" }), path({ "d": "M15 2v4" }), path({ "d": "M2 10h2" }), path({ "d": "M20 10h2" }), path({ "d": "M3 19h18" }), path({ "d": "M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6" }), path({ "d": "M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2" }), path({ "d": "M8 10h2" }), path({ "d": "M9 22v-8" }), path({ "d": "M9 2v4" }));
};
//#endregion
//#region src/icons/Table.ts
const Table = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 3v18" }), rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M3 9h18" }), path({ "d": "M3 15h18" }));
};
//#endregion
//#region src/icons/TabletSmartphone.ts
const TabletSmartphone = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "10",
		height: "14",
		"x": "3",
		"y": "8",
		rx: "2"
	}), path({ "d": "M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" }), path({ "d": "M8 18h.01" }));
};
//#endregion
//#region src/icons/Tablet.ts
const Tablet = (props = {}) => {
	const { rect, line } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "16",
		height: "20",
		"x": "4",
		"y": "2",
		rx: "2",
		ry: "2"
	}), line({
		x1: "12",
		x2: "12.01",
		y1: "18",
		y2: "18"
	}));
};
//#endregion
//#region src/icons/Tablets.ts
const Tablets = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "7",
		cy: "7",
		"r": "5"
	}), circle({
		cx: "17",
		cy: "17",
		"r": "5"
	}), path({ "d": "M12 17h10" }), path({ "d": "m3.46 10.54 7.08-7.08" }));
};
//#endregion
//#region src/icons/Tag.ts
const Tag = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" }), circle({
		cx: "7.5",
		cy: "7.5",
		"r": ".5",
		fill: "currentColor"
	}));
};
//#endregion
//#region src/icons/Tags.ts
const Tags = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1z" }), path({ "d": "M2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193" }), circle({
		cx: "10.5",
		cy: "6.5",
		"r": ".5",
		fill: "currentColor"
	}));
};
//#endregion
//#region src/icons/Tally1.ts
const Tally1 = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 4v16" }));
};
//#endregion
//#region src/icons/Tally2.ts
const Tally2 = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 4v16" }), path({ "d": "M9 4v16" }));
};
//#endregion
//#region src/icons/Tally3.ts
const Tally3 = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 4v16" }), path({ "d": "M9 4v16" }), path({ "d": "M14 4v16" }));
};
//#endregion
//#region src/icons/Tally4.ts
const Tally4 = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 4v16" }), path({ "d": "M9 4v16" }), path({ "d": "M14 4v16" }), path({ "d": "M19 4v16" }));
};
//#endregion
//#region src/icons/Tally5.ts
const Tally5 = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 4v16" }), path({ "d": "M9 4v16" }), path({ "d": "M14 4v16" }), path({ "d": "M19 4v16" }), path({ "d": "M22 6 2 18" }));
};
//#endregion
//#region src/icons/Tangent.ts
const Tangent = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "17",
		cy: "4",
		"r": "2"
	}), path({ "d": "M15.59 5.41 5.41 15.59" }), circle({
		cx: "4",
		cy: "17",
		"r": "2"
	}), path({ "d": "M12 22s-4-9-1.5-11.5S22 12 22 12" }));
};
//#endregion
//#region src/icons/Target.ts
const Target = (props = {}) => {
	const { circle } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}), circle({
		cx: "12",
		cy: "12",
		"r": "6"
	}), circle({
		cx: "12",
		cy: "12",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/Telescope.ts
const Telescope = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44" }), path({ "d": "m13.56 11.747 4.332-.924" }), path({ "d": "m16 21-3.105-6.21" }), path({ "d": "M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z" }), path({ "d": "m6.158 8.633 1.114 4.456" }), path({ "d": "m8 21 3.105-6.21" }), circle({
		cx: "12",
		cy: "13",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/TentTree.ts
const TentTree = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "4",
		cy: "4",
		"r": "2"
	}), path({ "d": "m14 5 3-3 3 3" }), path({ "d": "m14 10 3-3 3 3" }), path({ "d": "M17 14V2" }), path({ "d": "M17 14H7l-5 8h20Z" }), path({ "d": "M8 14v8" }), path({ "d": "m9 14 5 8" }));
};
//#endregion
//#region src/icons/Tent.ts
const Tent = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3.5 21 14 3" }), path({ "d": "M20.5 21 10 3" }), path({ "d": "M15.5 21 12 15l-3.5 6" }), path({ "d": "M2 21h20" }));
};
//#endregion
//#region src/icons/Terminal.ts
const Terminal = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 19h8" }), path({ "d": "m4 17 6-6-6-6" }));
};
//#endregion
//#region src/icons/TestTubeDiagonal.ts
const TestTubeDiagonal = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3" }), path({ "d": "m16 2 6 6" }), path({ "d": "M12 16H4" }));
};
//#endregion
//#region src/icons/TestTube.ts
const TestTube = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2" }), path({ "d": "M8.5 2h7" }), path({ "d": "M14.5 16h-5" }));
};
//#endregion
//#region src/icons/TestTubes.ts
const TestTubes = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2" }), path({ "d": "M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2" }), path({ "d": "M3 2h7" }), path({ "d": "M14 2h7" }), path({ "d": "M9 16H4" }), path({ "d": "M20 16h-5" }));
};
//#endregion
//#region src/icons/TextAlignCenter.ts
const TextAlignCenter = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21 5H3" }), path({ "d": "M17 12H7" }), path({ "d": "M19 19H5" }));
};
//#endregion
//#region src/icons/TextAlignEnd.ts
const TextAlignEnd = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21 5H3" }), path({ "d": "M21 12H9" }), path({ "d": "M21 19H7" }));
};
//#endregion
//#region src/icons/TextAlignJustify.ts
const TextAlignJustify = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 5h18" }), path({ "d": "M3 12h18" }), path({ "d": "M3 19h18" }));
};
//#endregion
//#region src/icons/TextAlignStart.ts
const TextAlignStart = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21 5H3" }), path({ "d": "M15 12H3" }), path({ "d": "M17 19H3" }));
};
//#endregion
//#region src/icons/TextCursorInput.ts
const TextCursorInput = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6" }), path({ "d": "M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7" }), path({ "d": "M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1" }), path({ "d": "M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1" }), path({ "d": "M9 6v12" }));
};
//#endregion
//#region src/icons/TextCursor.ts
const TextCursor = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1" }), path({ "d": "M7 22h1a4 4 0 0 0 4-4v-1" }), path({ "d": "M7 2h1a4 4 0 0 1 4 4v1" }));
};
//#endregion
//#region src/icons/TextInitial.ts
const TextInitial = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M15 5h6" }), path({ "d": "M15 12h6" }), path({ "d": "M3 19h18" }), path({ "d": "m3 12 3.553-7.724a.5.5 0 0 1 .894 0L11 12" }), path({ "d": "M3.92 10h6.16" }));
};
//#endregion
//#region src/icons/TextQuote.ts
const TextQuote = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M17 5H3" }), path({ "d": "M21 12H8" }), path({ "d": "M21 19H8" }), path({ "d": "M3 12v7" }));
};
//#endregion
//#region src/icons/TextSearch.ts
const TextSearch = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21 5H3" }), path({ "d": "M10 12H3" }), path({ "d": "M10 19H3" }), circle({
		cx: "17",
		cy: "15",
		"r": "3"
	}), path({ "d": "m21 19-1.9-1.9" }));
};
//#endregion
//#region src/icons/TextSelect.ts
const TextSelect = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M14 21h1" }), path({ "d": "M14 3h1" }), path({ "d": "M19 3a2 2 0 0 1 2 2" }), path({ "d": "M21 14v1" }), path({ "d": "M21 19a2 2 0 0 1-2 2" }), path({ "d": "M21 9v1" }), path({ "d": "M3 14v1" }), path({ "d": "M3 9v1" }), path({ "d": "M5 21a2 2 0 0 1-2-2" }), path({ "d": "M5 3a2 2 0 0 0-2 2" }), path({ "d": "M7 12h10" }), path({ "d": "M7 16h6" }), path({ "d": "M7 8h8" }), path({ "d": "M9 21h1" }), path({ "d": "M9 3h1" }));
};
//#endregion
//#region src/icons/TextWrap.ts
const TextWrap = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m16 16-3 3 3 3" }), path({ "d": "M3 12h14.5a1 1 0 0 1 0 7H13" }), path({ "d": "M3 19h6" }), path({ "d": "M3 5h18" }));
};
//#endregion
//#region src/icons/Theater.ts
const Theater = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 10s3-3 3-8" }), path({ "d": "M22 10s-3-3-3-8" }), path({ "d": "M10 2c0 4.4-3.6 8-8 8" }), path({ "d": "M14 2c0 4.4 3.6 8 8 8" }), path({ "d": "M2 10s2 2 2 5" }), path({ "d": "M22 10s-2 2-2 5" }), path({ "d": "M8 15h8" }), path({ "d": "M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" }), path({ "d": "M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" }));
};
//#endregion
//#region src/icons/ThermometerSnowflake.ts
const ThermometerSnowflake = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m10 20-1.25-2.5L6 18" }), path({ "d": "M10 4 8.75 6.5 6 6" }), path({ "d": "M10.585 15H10" }), path({ "d": "M2 12h6.5L10 9" }), path({ "d": "M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" }), path({ "d": "m4 10 1.5 2L4 14" }), path({ "d": "m7 21 3-6-1.5-3" }), path({ "d": "m7 3 3 6h2" }));
};
//#endregion
//#region src/icons/ThermometerSun.ts
const ThermometerSun = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 2v2" }), path({ "d": "M12 8a4 4 0 0 0-1.645 7.647" }), path({ "d": "M2 12h2" }), path({ "d": "M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" }), path({ "d": "m4.93 4.93 1.41 1.41" }), path({ "d": "m6.34 17.66-1.41 1.41" }));
};
//#endregion
//#region src/icons/Thermometer.ts
const Thermometer = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" }));
};
//#endregion
//#region src/icons/ThumbsDown.ts
const ThumbsDown = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" }), path({ "d": "M17 14V2" }));
};
//#endregion
//#region src/icons/ThumbsUp.ts
const ThumbsUp = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" }), path({ "d": "M7 10v12" }));
};
//#endregion
//#region src/icons/TicketCheck.ts
const TicketCheck = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }), path({ "d": "m9 12 2 2 4-4" }));
};
//#endregion
//#region src/icons/TicketMinus.ts
const TicketMinus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }), path({ "d": "M9 12h6" }));
};
//#endregion
//#region src/icons/TicketPercent.ts
const TicketPercent = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }), path({ "d": "M9 9h.01" }), path({ "d": "m15 9-6 6" }), path({ "d": "M15 15h.01" }));
};
//#endregion
//#region src/icons/TicketPlus.ts
const TicketPlus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }), path({ "d": "M9 12h6" }), path({ "d": "M12 9v6" }));
};
//#endregion
//#region src/icons/TicketSlash.ts
const TicketSlash = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }), path({ "d": "m9.5 14.5 5-5" }));
};
//#endregion
//#region src/icons/TicketX.ts
const TicketX = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }), path({ "d": "m9.5 14.5 5-5" }), path({ "d": "m9.5 9.5 5 5" }));
};
//#endregion
//#region src/icons/Ticket.ts
const Ticket = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" }), path({ "d": "M13 5v2" }), path({ "d": "M13 17v2" }), path({ "d": "M13 11v2" }));
};
//#endregion
//#region src/icons/TicketsPlane.ts
const TicketsPlane = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12" }), path({ "d": "m12 13.5 3.794.506" }), path({ "d": "m3.173 8.18 11-5a2 2 0 0 1 2.647.993L18.56 8" }), path({ "d": "M6 10V8" }), path({ "d": "M6 14v1" }), path({ "d": "M6 19v2" }), rect({
		"x": "2",
		"y": "8",
		width: "20",
		height: "13",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/Tickets.ts
const Tickets = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m3.173 8.18 11-5a2 2 0 0 1 2.647.993L18.56 8" }), path({ "d": "M6 10V8" }), path({ "d": "M6 14v1" }), path({ "d": "M6 19v2" }), rect({
		"x": "2",
		"y": "8",
		width: "20",
		height: "13",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/TimerOff.ts
const TimerOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 2h4" }), path({ "d": "M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7" }), path({ "d": "M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2" }), path({ "d": "m2 2 20 20" }), path({ "d": "M12 12v-2" }));
};
//#endregion
//#region src/icons/TimerReset.ts
const TimerReset = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 2h4" }), path({ "d": "M12 14v-4" }), path({ "d": "M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6" }), path({ "d": "M9 17H4v5" }));
};
//#endregion
//#region src/icons/Timer.ts
const Timer = (props = {}) => {
	const { line, circle } = van.tags(svgNamespace);
	return LucideIcon(props, line({
		x1: "10",
		x2: "14",
		y1: "2",
		y2: "2"
	}), line({
		x1: "12",
		x2: "15",
		y1: "14",
		y2: "11"
	}), circle({
		cx: "12",
		cy: "14",
		"r": "8"
	}));
};
//#endregion
//#region src/icons/ToggleLeft.ts
const ToggleLeft = (props = {}) => {
	const { circle, rect } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "9",
		cy: "12",
		"r": "3"
	}), rect({
		width: "20",
		height: "14",
		"x": "2",
		"y": "5",
		rx: "7"
	}));
};
//#endregion
//#region src/icons/ToggleRight.ts
const ToggleRight = (props = {}) => {
	const { circle, rect } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "15",
		cy: "12",
		"r": "3"
	}), rect({
		width: "20",
		height: "14",
		"x": "2",
		"y": "5",
		rx: "7"
	}));
};
//#endregion
//#region src/icons/Toilet.ts
const Toilet = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18" }), path({ "d": "M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8" }));
};
//#endregion
//#region src/icons/ToolCase.ts
const ToolCase = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 15h4" }), path({ "d": "m14.817 10.995-.971-1.45 1.034-1.232a2 2 0 0 0-2.025-3.238l-1.82.364L9.91 3.885a2 2 0 0 0-3.625.748L6.141 6.55l-1.725.426a2 2 0 0 0-.19 3.756l.657.27" }), path({ "d": "m18.822 10.995 2.26-5.38a1 1 0 0 0-.557-1.318L16.954 2.9a1 1 0 0 0-1.281.533l-.924 2.122" }), path({ "d": "M4 12.006A1 1 0 0 1 4.994 11H19a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" }));
};
//#endregion
//#region src/icons/Toolbox.ts
const Toolbox = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 12v4" }), path({ "d": "M16 6a2 2 0 0 1 1.414.586l4 4A2 2 0 0 1 22 12v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 .586-1.414l4-4A2 2 0 0 1 8 6z" }), path({ "d": "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" }), path({ "d": "M2 14h20" }), path({ "d": "M8 12v4" }));
};
//#endregion
//#region src/icons/Tornado.ts
const Tornado = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21 4H3" }), path({ "d": "M18 8H6" }), path({ "d": "M19 12H9" }), path({ "d": "M16 16h-6" }), path({ "d": "M11 20H9" }));
};
//#endregion
//#region src/icons/Torus.ts
const Torus = (props = {}) => {
	const { ellipse } = van.tags(svgNamespace);
	return LucideIcon(props, ellipse({
		cx: "12",
		cy: "11",
		rx: "3",
		ry: "2"
	}), ellipse({
		cx: "12",
		cy: "12.5",
		rx: "10",
		ry: "8.5"
	}));
};
//#endregion
//#region src/icons/TouchpadOff.ts
const TouchpadOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 20v-6" }), path({ "d": "M19.656 14H22" }), path({ "d": "M2 14h12" }), path({ "d": "m2 2 20 20" }), path({ "d": "M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2" }), path({ "d": "M9.656 4H20a2 2 0 0 1 2 2v10.344" }));
};
//#endregion
//#region src/icons/Touchpad.ts
const Touchpad = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "20",
		height: "16",
		"x": "2",
		"y": "4",
		rx: "2"
	}), path({ "d": "M2 14h20" }), path({ "d": "M12 20v-6" }));
};
//#endregion
//#region src/icons/TowelRack.ts
const TowelRack = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M22 7h-2" }), path({ "d": "M6.5 3h11A2.5 2.5 0 0 1 20 5.5V20a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1V5.5a1 1 0 0 0-5 0V17a1 1 0 0 0 1 1h4" }), path({ "d": "M9 7H2" }));
};
//#endregion
//#region src/icons/TowerControl.ts
const TowerControl = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z" }), path({ "d": "M8 13v9" }), path({ "d": "M16 22v-9" }), path({ "d": "m9 6 1 7" }), path({ "d": "m15 6-1 7" }), path({ "d": "M12 6V2" }), path({ "d": "M13 2h-2" }));
};
//#endregion
//#region src/icons/ToyBrick.ts
const ToyBrick = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "12",
		"x": "3",
		"y": "8",
		rx: "1"
	}), path({ "d": "M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3" }), path({ "d": "M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3" }));
};
//#endregion
//#region src/icons/Tractor.ts
const Tractor = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20" }), path({ "d": "M16 18h-5" }), path({ "d": "M18 5a1 1 0 0 0-1 1v5.573" }), path({ "d": "M3 4h8.129a1 1 0 0 1 .99.863L13 11.246" }), path({ "d": "M4 11V4" }), path({ "d": "M7 15h.01" }), path({ "d": "M8 10.1V4" }), circle({
		cx: "18",
		cy: "18",
		"r": "2"
	}), circle({
		cx: "7",
		cy: "15",
		"r": "5"
	}));
};
//#endregion
//#region src/icons/TrafficCone.ts
const TrafficCone = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16.05 10.966a5 2.5 0 0 1-8.1 0" }), path({ "d": "m16.923 14.049 4.48 2.04a1 1 0 0 1 .001 1.831l-8.574 3.9a2 2 0 0 1-1.66 0l-8.574-3.91a1 1 0 0 1 0-1.83l4.484-2.04" }), path({ "d": "M16.949 14.14a5 2.5 0 1 1-9.9 0L10.063 3.5a2 2 0 0 1 3.874 0z" }), path({ "d": "M9.194 6.57a5 2.5 0 0 0 5.61 0" }));
};
//#endregion
//#region src/icons/TrainFrontTunnel.ts
const TrainFrontTunnel = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 22V12a10 10 0 1 1 20 0v10" }), path({ "d": "M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8" }), path({ "d": "M10 15h.01" }), path({ "d": "M14 15h.01" }), path({ "d": "M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z" }), path({ "d": "m9 19-2 3" }), path({ "d": "m15 19 2 3" }));
};
//#endregion
//#region src/icons/TrainFront.ts
const TrainFront = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M8 3.1V7a4 4 0 0 0 8 0V3.1" }), path({ "d": "m9 15-1-1" }), path({ "d": "m15 15 1-1" }), path({ "d": "M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z" }), path({ "d": "m8 19-2 3" }), path({ "d": "m16 19 2 3" }));
};
//#endregion
//#region src/icons/TrainTrack.ts
const TrainTrack = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 17 17 2" }), path({ "d": "m2 14 8 8" }), path({ "d": "m5 11 8 8" }), path({ "d": "m8 8 8 8" }), path({ "d": "m11 5 8 8" }), path({ "d": "m14 2 8 8" }), path({ "d": "M7 22 22 7" }));
};
//#endregion
//#region src/icons/TramFront.ts
const TramFront = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "16",
		height: "16",
		"x": "4",
		"y": "3",
		rx: "2"
	}), path({ "d": "M4 11h16" }), path({ "d": "M12 3v8" }), path({ "d": "m8 19-2 3" }), path({ "d": "m18 22-2-3" }), path({ "d": "M8 15h.01" }), path({ "d": "M16 15h.01" }));
};
//#endregion
//#region src/icons/Transgender.ts
const Transgender = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 16v6" }), path({ "d": "M14 20h-4" }), path({ "d": "M18 2h4v4" }), path({ "d": "m2 2 7.17 7.17" }), path({ "d": "M2 5.355V2h3.357" }), path({ "d": "m22 2-7.17 7.17" }), path({ "d": "M8 5 5 8" }), circle({
		cx: "12",
		cy: "12",
		"r": "4"
	}));
};
//#endregion
//#region src/icons/Trash2.ts
const Trash2 = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 11v6" }), path({ "d": "M14 11v6" }), path({ "d": "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" }), path({ "d": "M3 6h18" }), path({ "d": "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }));
};
//#endregion
//#region src/icons/Trash.ts
const Trash = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" }), path({ "d": "M3 6h18" }), path({ "d": "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }));
};
//#endregion
//#region src/icons/TreeDeciduous.ts
const TreeDeciduous = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z" }), path({ "d": "M12 19v3" }));
};
//#endregion
//#region src/icons/TreePalm.ts
const TreePalm = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4" }), path({ "d": "M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3" }), path({ "d": "M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35" }), path({ "d": "M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14" }));
};
//#endregion
//#region src/icons/TreePine.ts
const TreePine = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z" }), path({ "d": "M12 22v-3" }));
};
//#endregion
//#region src/icons/Trees.ts
const Trees = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" }), path({ "d": "M7 16v6" }), path({ "d": "M13 19v3" }), path({ "d": "M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" }));
};
//#endregion
//#region src/icons/TrendingDown.ts
const TrendingDown = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 17h6v-6" }), path({ "d": "m22 17-8.5-8.5-5 5L2 7" }));
};
//#endregion
//#region src/icons/TrendingUpDown.ts
const TrendingUpDown = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M14.828 14.828 21 21" }), path({ "d": "M21 16v5h-5" }), path({ "d": "m21 3-9 9-4-4-6 6" }), path({ "d": "M21 8V3h-5" }));
};
//#endregion
//#region src/icons/TrendingUp.ts
const TrendingUp = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 7h6v6" }), path({ "d": "m22 7-8.5 8.5-5-5L2 17" }));
};
//#endregion
//#region src/icons/TriangleAlert.ts
const TriangleAlert = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" }), path({ "d": "M12 9v4" }), path({ "d": "M12 17h.01" }));
};
//#endregion
//#region src/icons/TriangleDashed.ts
const TriangleDashed = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10.17 4.193a2 2 0 0 1 3.666.013" }), path({ "d": "M14 21h2" }), path({ "d": "m15.874 7.743 1 1.732" }), path({ "d": "m18.849 12.952 1 1.732" }), path({ "d": "M21.824 18.18a2 2 0 0 1-1.835 2.824" }), path({ "d": "M4.024 21a2 2 0 0 1-1.839-2.839" }), path({ "d": "m5.136 12.952-1 1.732" }), path({ "d": "M8 21h2" }), path({ "d": "m8.102 7.743-1 1.732" }));
};
//#endregion
//#region src/icons/TriangleRight.ts
const TriangleRight = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z" }));
};
//#endregion
//#region src/icons/Triangle.ts
const Triangle = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" }));
};
//#endregion
//#region src/icons/Trophy.ts
const Trophy = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978" }), path({ "d": "M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978" }), path({ "d": "M18 9h1.5a1 1 0 0 0 0-5H18" }), path({ "d": "M4 22h16" }), path({ "d": "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z" }), path({ "d": "M6 9H4.5a1 1 0 0 1 0-5H6" }));
};
//#endregion
//#region src/icons/TruckElectric.ts
const TruckElectric = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M14 19V7a2 2 0 0 0-2-2H9" }), path({ "d": "M15 19H9" }), path({ "d": "M19 19h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62L18.3 9.38a1 1 0 0 0-.78-.38H14" }), path({ "d": "M2 13v5a1 1 0 0 0 1 1h2" }), path({ "d": "M4 3 2.15 5.15a.495.495 0 0 0 .35.86h2.15a.47.47 0 0 1 .35.86L3 9.02" }), circle({
		cx: "17",
		cy: "19",
		"r": "2"
	}), circle({
		cx: "7",
		cy: "19",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/Truck.ts
const Truck = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" }), path({ "d": "M15 18H9" }), path({ "d": "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" }), circle({
		cx: "17",
		cy: "18",
		"r": "2"
	}), circle({
		cx: "7",
		cy: "18",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/TurkishLira.ts
const TurkishLira = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M15 4 5 9" }), path({ "d": "m15 8.5-10 5" }), path({ "d": "M18 12a9 9 0 0 1-9 9V3" }));
};
//#endregion
//#region src/icons/Turntable.ts
const Turntable = (props = {}) => {
	const { path, circle, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 12.01h.01" }), path({ "d": "M18 8v4a8 8 0 0 1-1.07 4" }), circle({
		cx: "10",
		cy: "12",
		"r": "4"
	}), rect({
		"x": "2",
		"y": "4",
		width: "20",
		height: "16",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/Turtle.ts
const Turtle = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z" }), path({ "d": "M4.82 7.9 8 10" }), path({ "d": "M15.18 7.9 12 10" }), path({ "d": "M16.93 10H20a2 2 0 0 1 0 4H2" }));
};
//#endregion
//#region src/icons/TvMinimalPlay.ts
const TvMinimalPlay = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z" }), path({ "d": "M7 21h10" }), rect({
		width: "20",
		height: "14",
		"x": "2",
		"y": "3",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/TvMinimal.ts
const TvMinimal = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M7 21h10" }), rect({
		width: "20",
		height: "14",
		"x": "2",
		"y": "3",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/Tv.ts
const Tv = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m17 2-5 5-5-5" }), rect({
		width: "20",
		height: "15",
		"x": "2",
		"y": "7",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/TypeOutline.ts
const TypeOutline = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z" }));
};
//#endregion
//#region src/icons/Type.ts
const Type = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 4v16" }), path({ "d": "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2" }), path({ "d": "M9 20h6" }));
};
//#endregion
//#region src/icons/UmbrellaOff.ts
const UmbrellaOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 13v7a2 2 0 0 0 4 0" }), path({ "d": "M12 2v2" }), path({ "d": "M18.656 13h2.336a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-12.07-7.51" }), path({ "d": "m2 2 20 20" }), path({ "d": "M5.961 5.957a10.28 10.28 0 0 0-3.922 5.769A1 1 0 0 0 3 13h10" }));
};
//#endregion
//#region src/icons/Umbrella.ts
const Umbrella = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 13v7a2 2 0 0 0 4 0" }), path({ "d": "M12 2v2" }), path({ "d": "M20.992 13a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-19.923 0A1 1 0 0 0 3 13z" }));
};
//#endregion
//#region src/icons/Underline.ts
const Underline = (props = {}) => {
	const { path, line } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6 4v6a6 6 0 0 0 12 0V4" }), line({
		x1: "4",
		x2: "20",
		y1: "20",
		y2: "20"
	}));
};
//#endregion
//#region src/icons/Undo2.ts
const Undo2 = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M9 14 4 9l5-5" }), path({ "d": "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" }));
};
//#endregion
//#region src/icons/UndoDot.ts
const UndoDot = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21 17a9 9 0 0 0-15-6.7L3 13" }), path({ "d": "M3 7v6h6" }), circle({
		cx: "12",
		cy: "17",
		"r": "1"
	}));
};
//#endregion
//#region src/icons/Undo.ts
const Undo = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 7v6h6" }), path({ "d": "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" }));
};
//#endregion
//#region src/icons/UnfoldHorizontal.ts
const UnfoldHorizontal = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 12h6" }), path({ "d": "M8 12H2" }), path({ "d": "M12 2v2" }), path({ "d": "M12 8v2" }), path({ "d": "M12 14v2" }), path({ "d": "M12 20v2" }), path({ "d": "m19 15 3-3-3-3" }), path({ "d": "m5 9-3 3 3 3" }));
};
//#endregion
//#region src/icons/UnfoldVertical.ts
const UnfoldVertical = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 22v-6" }), path({ "d": "M12 8V2" }), path({ "d": "M4 12H2" }), path({ "d": "M10 12H8" }), path({ "d": "M16 12h-2" }), path({ "d": "M22 12h-2" }), path({ "d": "m15 19-3 3-3-3" }), path({ "d": "m15 5-3-3-3 3" }));
};
//#endregion
//#region src/icons/Ungroup.ts
const Ungroup = (props = {}) => {
	const { rect } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "8",
		height: "6",
		"x": "5",
		"y": "4",
		rx: "1"
	}), rect({
		width: "8",
		height: "6",
		"x": "11",
		"y": "14",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/University.ts
const University = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M14 21v-3a2 2 0 0 0-4 0v3" }), path({ "d": "M18 12h.01" }), path({ "d": "M18 16h.01" }), path({ "d": "M22 7a1 1 0 0 0-1-1h-2a2 2 0 0 1-1.143-.359L13.143 2.36a2 2 0 0 0-2.286-.001L6.143 5.64A2 2 0 0 1 5 6H3a1 1 0 0 0-1 1v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z" }), path({ "d": "M6 12h.01" }), path({ "d": "M6 16h.01" }), circle({
		cx: "12",
		cy: "10",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/Unlink2.ts
const Unlink2 = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2" }));
};
//#endregion
//#region src/icons/Unlink.ts
const Unlink = (props = {}) => {
	const { path, line } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71" }), path({ "d": "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" }), line({
		x1: "8",
		x2: "8",
		y1: "2",
		y2: "5"
	}), line({
		x1: "2",
		x2: "5",
		y1: "8",
		y2: "8"
	}), line({
		x1: "16",
		x2: "16",
		y1: "19",
		y2: "22"
	}), line({
		x1: "19",
		x2: "22",
		y1: "16",
		y2: "16"
	}));
};
//#endregion
//#region src/icons/Unplug.ts
const Unplug = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m19 5 3-3" }), path({ "d": "m2 22 3-3" }), path({ "d": "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" }), path({ "d": "M7.5 13.5 10 11" }), path({ "d": "M10.5 16.5 13 14" }), path({ "d": "m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z" }));
};
//#endregion
//#region src/icons/Upload.ts
const Upload = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 3v12" }), path({ "d": "m17 8-5-5-5 5" }), path({ "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }));
};
//#endregion
//#region src/icons/Usb.ts
const Usb = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "10",
		cy: "7",
		"r": "1"
	}), circle({
		cx: "4",
		cy: "20",
		"r": "1"
	}), path({ "d": "M4.7 19.3 19 5" }), path({ "d": "m21 3-3 1 2 2Z" }), path({ "d": "M9.26 7.68 5 12l2 5" }), path({ "d": "m10 14 5 2 3.5-3.5" }), path({ "d": "m18 12 1-1 1 1-1 1Z" }));
};
//#endregion
//#region src/icons/UserCheck.ts
const UserCheck = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m16 11 2 2 4-4" }), path({ "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }), circle({
		cx: "9",
		cy: "7",
		"r": "4"
	}));
};
//#endregion
//#region src/icons/UserCog.ts
const UserCog = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 15H6a4 4 0 0 0-4 4v2" }), path({ "d": "m14.305 16.53.923-.382" }), path({ "d": "m15.228 13.852-.923-.383" }), path({ "d": "m16.852 12.228-.383-.923" }), path({ "d": "m16.852 17.772-.383.924" }), path({ "d": "m19.148 12.228.383-.923" }), path({ "d": "m19.53 18.696-.382-.924" }), path({ "d": "m20.772 13.852.924-.383" }), path({ "d": "m20.772 16.148.924.383" }), circle({
		cx: "18",
		cy: "15",
		"r": "3"
	}), circle({
		cx: "9",
		cy: "7",
		"r": "4"
	}));
};
//#endregion
//#region src/icons/UserKey.ts
const UserKey = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M20 11v6" }), path({ "d": "M20 13h2" }), path({ "d": "M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578" }), circle({
		cx: "10",
		cy: "7",
		"r": "4"
	}), circle({
		cx: "20",
		cy: "19",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/UserLock.ts
const UserLock = (props = {}) => {
	const { path, circle, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M19 16v-2a2 2 0 0 0-4 0v2" }), path({ "d": "M9.5 15H7a4 4 0 0 0-4 4v2" }), circle({
		cx: "10",
		cy: "7",
		"r": "4"
	}), rect({
		"x": "13",
		"y": "16",
		width: "8",
		height: "5",
		rx: ".899"
	}));
};
//#endregion
//#region src/icons/UserMinus.ts
const UserMinus = (props = {}) => {
	const { path, circle, line } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }), circle({
		cx: "9",
		cy: "7",
		"r": "4"
	}), line({
		x1: "22",
		x2: "16",
		y1: "11",
		y2: "11"
	}));
};
//#endregion
//#region src/icons/UserPen.ts
const UserPen = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11.5 15H7a4 4 0 0 0-4 4v2" }), path({ "d": "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" }), circle({
		cx: "10",
		cy: "7",
		"r": "4"
	}));
};
//#endregion
//#region src/icons/UserPlus.ts
const UserPlus = (props = {}) => {
	const { path, circle, line } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }), circle({
		cx: "9",
		cy: "7",
		"r": "4"
	}), line({
		x1: "19",
		x2: "19",
		y1: "8",
		y2: "14"
	}), line({
		x1: "22",
		x2: "16",
		y1: "11",
		y2: "11"
	}));
};
//#endregion
//#region src/icons/UserRoundCheck.ts
const UserRoundCheck = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 21a8 8 0 0 1 13.292-6" }), circle({
		cx: "10",
		cy: "8",
		"r": "5"
	}), path({ "d": "m16 19 2 2 4-4" }));
};
//#endregion
//#region src/icons/UserRoundCog.ts
const UserRoundCog = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m14.305 19.53.923-.382" }), path({ "d": "m15.228 16.852-.923-.383" }), path({ "d": "m16.852 15.228-.383-.923" }), path({ "d": "m16.852 20.772-.383.924" }), path({ "d": "m19.148 15.228.383-.923" }), path({ "d": "m19.53 21.696-.382-.924" }), path({ "d": "M2 21a8 8 0 0 1 10.434-7.62" }), path({ "d": "m20.772 16.852.924-.383" }), path({ "d": "m20.772 19.148.924.383" }), circle({
		cx: "10",
		cy: "8",
		"r": "5"
	}), circle({
		cx: "18",
		cy: "18",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/UserRoundKey.ts
const UserRoundKey = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M19 11v6" }), path({ "d": "M19 13h2" }), path({ "d": "M2 21a8 8 0 0 1 12.868-6.349" }), circle({
		cx: "10",
		cy: "8",
		"r": "5"
	}), circle({
		cx: "19",
		cy: "19",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/UserRoundMinus.ts
const UserRoundMinus = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 21a8 8 0 0 1 13.292-6" }), circle({
		cx: "10",
		cy: "8",
		"r": "5"
	}), path({ "d": "M22 19h-6" }));
};
//#endregion
//#region src/icons/UserRoundPen.ts
const UserRoundPen = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 21a8 8 0 0 1 10.821-7.487" }), path({ "d": "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" }), circle({
		cx: "10",
		cy: "8",
		"r": "5"
	}));
};
//#endregion
//#region src/icons/UserRoundPlus.ts
const UserRoundPlus = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 21a8 8 0 0 1 13.292-6" }), circle({
		cx: "10",
		cy: "8",
		"r": "5"
	}), path({ "d": "M19 16v6" }), path({ "d": "M22 19h-6" }));
};
//#endregion
//#region src/icons/UserRoundSearch.ts
const UserRoundSearch = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "10",
		cy: "8",
		"r": "5"
	}), path({ "d": "M2 21a8 8 0 0 1 10.434-7.62" }), circle({
		cx: "18",
		cy: "18",
		"r": "3"
	}), path({ "d": "m22 22-1.9-1.9" }));
};
//#endregion
//#region src/icons/UserRoundX.ts
const UserRoundX = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 21a8 8 0 0 1 11.873-7" }), circle({
		cx: "10",
		cy: "8",
		"r": "5"
	}), path({ "d": "m17 17 5 5" }), path({ "d": "m22 17-5 5" }));
};
//#endregion
//#region src/icons/UserRound.ts
const UserRound = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "8",
		"r": "5"
	}), path({ "d": "M20 21a8 8 0 0 0-16 0" }));
};
//#endregion
//#region src/icons/UserSearch.ts
const UserSearch = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "10",
		cy: "7",
		"r": "4"
	}), path({ "d": "M10.3 15H7a4 4 0 0 0-4 4v2" }), circle({
		cx: "17",
		cy: "17",
		"r": "3"
	}), path({ "d": "m21 21-1.9-1.9" }));
};
//#endregion
//#region src/icons/UserStar.ts
const UserStar = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16.051 12.616a1 1 0 0 1 1.909.024l.737 1.452a1 1 0 0 0 .737.535l1.634.256a1 1 0 0 1 .588 1.806l-1.172 1.168a1 1 0 0 0-.282.866l.259 1.613a1 1 0 0 1-1.541 1.134l-1.465-.75a1 1 0 0 0-.912 0l-1.465.75a1 1 0 0 1-1.539-1.133l.258-1.613a1 1 0 0 0-.282-.866l-1.156-1.153a1 1 0 0 1 .572-1.822l1.633-.256a1 1 0 0 0 .737-.535z" }), path({ "d": "M8 15H7a4 4 0 0 0-4 4v2" }), circle({
		cx: "10",
		cy: "7",
		"r": "4"
	}));
};
//#endregion
//#region src/icons/UserX.ts
const UserX = (props = {}) => {
	const { path, circle, line } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }), circle({
		cx: "9",
		cy: "7",
		"r": "4"
	}), line({
		x1: "17",
		x2: "22",
		y1: "8",
		y2: "13"
	}), line({
		x1: "22",
		x2: "17",
		y1: "8",
		y2: "13"
	}));
};
//#endregion
//#region src/icons/User.ts
const User = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }), circle({
		cx: "12",
		cy: "7",
		"r": "4"
	}));
};
//#endregion
//#region src/icons/UsersRound.ts
const UsersRound = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M18 21a8 8 0 0 0-16 0" }), circle({
		cx: "10",
		cy: "8",
		"r": "5"
	}), path({ "d": "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" }));
};
//#endregion
//#region src/icons/Users.ts
const Users = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }), path({ "d": "M16 3.128a4 4 0 0 1 0 7.744" }), path({ "d": "M22 21v-2a4 4 0 0 0-3-3.87" }), circle({
		cx: "9",
		cy: "7",
		"r": "4"
	}));
};
//#endregion
//#region src/icons/UtensilsCrossed.ts
const UtensilsCrossed = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8" }), path({ "d": "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7" }), path({ "d": "m2.1 21.8 6.4-6.3" }), path({ "d": "m19 5-7 7" }));
};
//#endregion
//#region src/icons/Utensils.ts
const Utensils = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" }), path({ "d": "M7 2v20" }), path({ "d": "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" }));
};
//#endregion
//#region src/icons/UtilityPole.ts
const UtilityPole = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 2v20" }), path({ "d": "M2 5h20" }), path({ "d": "M3 3v2" }), path({ "d": "M7 3v2" }), path({ "d": "M17 3v2" }), path({ "d": "M21 3v2" }), path({ "d": "m19 5-7 7-7-7" }));
};
//#endregion
//#region src/icons/Van.ts
const Van = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M13 6v5a1 1 0 0 0 1 1h6.102a1 1 0 0 1 .712.298l.898.91a1 1 0 0 1 .288.702V17a1 1 0 0 1-1 1h-3" }), path({ "d": "M5 18H3a1 1 0 0 1-1-1V8a2 2 0 0 1 2-2h12c1.1 0 2.1.8 2.4 1.8l1.176 4.2" }), path({ "d": "M9 18h5" }), circle({
		cx: "16",
		cy: "18",
		"r": "2"
	}), circle({
		cx: "7",
		cy: "18",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/Variable.ts
const Variable = (props = {}) => {
	const { path, line } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M8 21s-4-3-4-9 4-9 4-9" }), path({ "d": "M16 3s4 3 4 9-4 9-4 9" }), line({
		x1: "15",
		x2: "9",
		y1: "9",
		y2: "15"
	}), line({
		x1: "9",
		x2: "15",
		y1: "9",
		y2: "15"
	}));
};
//#endregion
//#region src/icons/Vault.ts
const Vault = (props = {}) => {
	const { rect, circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), circle({
		cx: "7.5",
		cy: "7.5",
		"r": ".5",
		fill: "currentColor"
	}), path({ "d": "m7.9 7.9 2.7 2.7" }), circle({
		cx: "16.5",
		cy: "7.5",
		"r": ".5",
		fill: "currentColor"
	}), path({ "d": "m13.4 10.6 2.7-2.7" }), circle({
		cx: "7.5",
		cy: "16.5",
		"r": ".5",
		fill: "currentColor"
	}), path({ "d": "m7.9 16.1 2.7-2.7" }), circle({
		cx: "16.5",
		cy: "16.5",
		"r": ".5",
		fill: "currentColor"
	}), path({ "d": "m13.4 13.4 2.7 2.7" }), circle({
		cx: "12",
		cy: "12",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/VectorSquare.ts
const VectorSquare = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M19.5 7a24 24 0 0 1 0 10" }), path({ "d": "M4.5 7a24 24 0 0 0 0 10" }), path({ "d": "M7 19.5a24 24 0 0 0 10 0" }), path({ "d": "M7 4.5a24 24 0 0 1 10 0" }), rect({
		"x": "17",
		"y": "17",
		width: "5",
		height: "5",
		rx: "1"
	}), rect({
		"x": "17",
		"y": "2",
		width: "5",
		height: "5",
		rx: "1"
	}), rect({
		"x": "2",
		"y": "17",
		width: "5",
		height: "5",
		rx: "1"
	}), rect({
		"x": "2",
		"y": "2",
		width: "5",
		height: "5",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/Vegan.ts
const Vegan = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 8q6 0 6-6-6 0-6 6" }), path({ "d": "M17.41 3.59a10 10 0 1 0 3 3" }), path({ "d": "M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14" }));
};
//#endregion
//#region src/icons/VenetianMask.ts
const VenetianMask = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M18 11c-1.5 0-2.5.5-3 2" }), path({ "d": "M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z" }), path({ "d": "M6 11c1.5 0 2.5.5 3 2" }));
};
//#endregion
//#region src/icons/VenusAndMars.ts
const VenusAndMars = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 20h4" }), path({ "d": "M12 16v6" }), path({ "d": "M17 2h4v4" }), path({ "d": "m21 2-5.46 5.46" }), circle({
		cx: "12",
		cy: "11",
		"r": "5"
	}));
};
//#endregion
//#region src/icons/Venus.ts
const Venus = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 15v7" }), path({ "d": "M9 19h6" }), circle({
		cx: "12",
		cy: "9",
		"r": "6"
	}));
};
//#endregion
//#region src/icons/VibrateOff.ts
const VibrateOff = (props = {}) => {
	const { path, line } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m2 8 2 2-2 2 2 2-2 2" }), path({ "d": "m22 8-2 2 2 2-2 2 2 2" }), path({ "d": "M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2" }), path({ "d": "M16 10.34V6c0-.55-.45-1-1-1h-4.34" }), line({
		x1: "2",
		x2: "22",
		y1: "2",
		y2: "22"
	}));
};
//#endregion
//#region src/icons/Vibrate.ts
const Vibrate = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m2 8 2 2-2 2 2 2-2 2" }), path({ "d": "m22 8-2 2 2 2-2 2 2 2" }), rect({
		width: "8",
		height: "14",
		"x": "8",
		"y": "5",
		rx: "1"
	}));
};
//#endregion
//#region src/icons/VideoOff.ts
const VideoOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196" }), path({ "d": "M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" }), path({ "d": "m2 2 20 20" }));
};
//#endregion
//#region src/icons/Video.ts
const Video = (props = {}) => {
	const { path, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" }), rect({
		"x": "2",
		"y": "6",
		width: "14",
		height: "12",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/Videotape.ts
const Videotape = (props = {}) => {
	const { rect, path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "20",
		height: "16",
		"x": "2",
		"y": "4",
		rx: "2"
	}), path({ "d": "M2 8h20" }), circle({
		cx: "8",
		cy: "14",
		"r": "2"
	}), path({ "d": "M8 12h8" }), circle({
		cx: "16",
		cy: "14",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/View.ts
const View = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" }), path({ "d": "M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" }), circle({
		cx: "12",
		cy: "12",
		"r": "1"
	}), path({ "d": "M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0" }));
};
//#endregion
//#region src/icons/Voicemail.ts
const Voicemail = (props = {}) => {
	const { circle, line } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "6",
		cy: "12",
		"r": "4"
	}), circle({
		cx: "18",
		cy: "12",
		"r": "4"
	}), line({
		x1: "6",
		x2: "18",
		y1: "16",
		y2: "16"
	}));
};
//#endregion
//#region src/icons/Volleyball.ts
const Volleyball = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11.1 7.1a16.55 16.55 0 0 1 10.9 4" }), path({ "d": "M12 12a12.6 12.6 0 0 1-8.7 5" }), path({ "d": "M16.8 13.6a16.55 16.55 0 0 1-9 7.5" }), path({ "d": "M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10" }), path({ "d": "M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5" }), circle({
		cx: "12",
		cy: "12",
		"r": "10"
	}));
};
//#endregion
//#region src/icons/Volume1.ts
const Volume1 = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" }), path({ "d": "M16 9a5 5 0 0 1 0 6" }));
};
//#endregion
//#region src/icons/Volume2.ts
const Volume2 = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" }), path({ "d": "M16 9a5 5 0 0 1 0 6" }), path({ "d": "M19.364 18.364a9 9 0 0 0 0-12.728" }));
};
//#endregion
//#region src/icons/VolumeOff.ts
const VolumeOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 9a5 5 0 0 1 .95 2.293" }), path({ "d": "M19.364 5.636a9 9 0 0 1 1.889 9.96" }), path({ "d": "m2 2 20 20" }), path({ "d": "m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11" }), path({ "d": "M9.828 4.172A.686.686 0 0 1 11 4.657v.686" }));
};
//#endregion
//#region src/icons/VolumeX.ts
const VolumeX = (props = {}) => {
	const { path, line } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" }), line({
		x1: "22",
		x2: "16",
		y1: "9",
		y2: "15"
	}), line({
		x1: "16",
		x2: "22",
		y1: "9",
		y2: "15"
	}));
};
//#endregion
//#region src/icons/Volume.ts
const Volume = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" }));
};
//#endregion
//#region src/icons/Vote.ts
const Vote = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m9 12 2 2 4-4" }), path({ "d": "M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" }), path({ "d": "M22 19H2" }));
};
//#endregion
//#region src/icons/WalletCards.ts
const WalletCards = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "18",
		height: "18",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2" }), path({ "d": "M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21" }));
};
//#endregion
//#region src/icons/WalletMinimal.ts
const WalletMinimal = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M17 14h.01" }), path({ "d": "M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14" }));
};
//#endregion
//#region src/icons/Wallet.ts
const Wallet = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" }), path({ "d": "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" }));
};
//#endregion
//#region src/icons/Wallpaper.ts
const Wallpaper = (props = {}) => {
	const { path, circle, rect } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 17v4" }), path({ "d": "M8 21h8" }), path({ "d": "m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15" }), circle({
		cx: "8",
		cy: "9",
		"r": "2"
	}), rect({
		"x": "2",
		"y": "3",
		width: "20",
		height: "14",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/WandSparkles.ts
const WandSparkles = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" }), path({ "d": "m14 7 3 3" }), path({ "d": "M5 6v4" }), path({ "d": "M19 14v4" }), path({ "d": "M10 2v2" }), path({ "d": "M7 8H3" }), path({ "d": "M21 16h-4" }), path({ "d": "M11 3H9" }));
};
//#endregion
//#region src/icons/Wand.ts
const Wand = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M15 4V2" }), path({ "d": "M15 16v-2" }), path({ "d": "M8 9h2" }), path({ "d": "M20 9h2" }), path({ "d": "M17.8 11.8 19 13" }), path({ "d": "M15 9h.01" }), path({ "d": "M17.8 6.2 19 5" }), path({ "d": "m3 21 9-9" }), path({ "d": "M12.2 6.2 11 5" }));
};
//#endregion
//#region src/icons/Warehouse.ts
const Warehouse = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11" }), path({ "d": "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z" }), path({ "d": "M6 13h12" }), path({ "d": "M6 17h12" }));
};
//#endregion
//#region src/icons/WashingMachine.ts
const WashingMachine = (props = {}) => {
	const { path, rect, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 6h3" }), path({ "d": "M17 6h.01" }), rect({
		width: "18",
		height: "20",
		"x": "3",
		"y": "2",
		rx: "2"
	}), circle({
		cx: "12",
		cy: "13",
		"r": "5"
	}), path({ "d": "M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5" }));
};
//#endregion
//#region src/icons/Watch.ts
const Watch = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 10v2.2l1.6 1" }), path({ "d": "m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05" }), path({ "d": "m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05" }), circle({
		cx: "12",
		cy: "12",
		"r": "6"
	}));
};
//#endregion
//#region src/icons/WavesArrowDown.ts
const WavesArrowDown = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 10L12 2" }), path({ "d": "M16 6L12 10L8 6" }), path({ "d": "M2 15C2.6 15.5 3.2 16 4.5 16C7 16 7 14 9.5 14C12.1 14 11.9 16 14.5 16C17 16 17 14 19.5 14C20.8 14 21.4 14.5 22 15" }), path({ "d": "M2 21C2.6 21.5 3.2 22 4.5 22C7 22 7 20 9.5 20C12.1 20 11.9 22 14.5 22C17 22 17 20 19.5 20C20.8 20 21.4 20.5 22 21" }));
};
//#endregion
//#region src/icons/WavesArrowUp.ts
const WavesArrowUp = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 2v8" }), path({ "d": "M2 15c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }), path({ "d": "M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }), path({ "d": "m8 6 4-4 4 4" }));
};
//#endregion
//#region src/icons/WavesLadder.ts
const WavesLadder = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M19 5a2 2 0 0 0-2 2v11" }), path({ "d": "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }), path({ "d": "M7 13h10" }), path({ "d": "M7 9h10" }), path({ "d": "M9 5a2 2 0 0 0-2 2v11" }));
};
//#endregion
//#region src/icons/Waves.ts
const Waves = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }), path({ "d": "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }), path({ "d": "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" }));
};
//#endregion
//#region src/icons/Waypoints.ts
const Waypoints = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m10.586 5.414-5.172 5.172" }), path({ "d": "m18.586 13.414-5.172 5.172" }), path({ "d": "M6 12h12" }), circle({
		cx: "12",
		cy: "20",
		"r": "2"
	}), circle({
		cx: "12",
		cy: "4",
		"r": "2"
	}), circle({
		cx: "20",
		cy: "12",
		"r": "2"
	}), circle({
		cx: "4",
		cy: "12",
		"r": "2"
	}));
};
//#endregion
//#region src/icons/Webcam.ts
const Webcam = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "10",
		"r": "8"
	}), circle({
		cx: "12",
		cy: "10",
		"r": "3"
	}), path({ "d": "M7 22h10" }), path({ "d": "M12 22v-4" }));
};
//#endregion
//#region src/icons/WebhookOff.ts
const WebhookOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15" }), path({ "d": "M9 3.4a4 4 0 0 1 6.52.66" }), path({ "d": "m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05" }), path({ "d": "M20.3 20.3a4 4 0 0 1-2.3.7" }), path({ "d": "M18.6 13a4 4 0 0 1 3.357 3.414" }), path({ "d": "m12 6 .6 1" }), path({ "d": "m2 2 20 20" }));
};
//#endregion
//#region src/icons/Webhook.ts
const Webhook = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2" }), path({ "d": "m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06" }), path({ "d": "m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8" }));
};
//#endregion
//#region src/icons/WeightTilde.ts
const WeightTilde = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M6.5 8a2 2 0 0 0-1.906 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8z" }), path({ "d": "M7.999 15a2.5 2.5 0 0 1 4 0 2.5 2.5 0 0 0 4 0" }), circle({
		cx: "12",
		cy: "5",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/Weight.ts
const Weight = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "5",
		"r": "3"
	}), path({ "d": "M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z" }));
};
//#endregion
//#region src/icons/WheatOff.ts
const WheatOff = (props = {}) => {
	const { path, line } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m2 22 10-10" }), path({ "d": "m16 8-1.17 1.17" }), path({ "d": "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" }), path({ "d": "m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97" }), path({ "d": "M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62" }), path({ "d": "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" }), path({ "d": "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" }), path({ "d": "m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98" }), path({ "d": "M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28" }), line({
		x1: "2",
		x2: "22",
		y1: "2",
		y2: "22"
	}));
};
//#endregion
//#region src/icons/Wheat.ts
const Wheat = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 22 16 8" }), path({ "d": "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" }), path({ "d": "M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" }), path({ "d": "M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" }), path({ "d": "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" }), path({ "d": "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" }), path({ "d": "M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" }), path({ "d": "M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" }));
};
//#endregion
//#region src/icons/WholeWord.ts
const WholeWord = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "7",
		cy: "12",
		"r": "3"
	}), path({ "d": "M10 9v6" }), circle({
		cx: "17",
		cy: "12",
		"r": "3"
	}), path({ "d": "M14 7v8" }), path({ "d": "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" }));
};
//#endregion
//#region src/icons/WifiCog.ts
const WifiCog = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m14.305 19.53.923-.382" }), path({ "d": "m15.228 16.852-.923-.383" }), path({ "d": "m16.852 15.228-.383-.923" }), path({ "d": "m16.852 20.772-.383.924" }), path({ "d": "m19.148 15.228.383-.923" }), path({ "d": "m19.53 21.696-.382-.924" }), path({ "d": "M2 7.82a15 15 0 0 1 20 0" }), path({ "d": "m20.772 16.852.924-.383" }), path({ "d": "m20.772 19.148.924.383" }), path({ "d": "M5 11.858a10 10 0 0 1 11.5-1.785" }), path({ "d": "M8.5 15.429a5 5 0 0 1 2.413-1.31" }), circle({
		cx: "18",
		cy: "18",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/WifiHigh.ts
const WifiHigh = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 20h.01" }), path({ "d": "M5 12.859a10 10 0 0 1 14 0" }), path({ "d": "M8.5 16.429a5 5 0 0 1 7 0" }));
};
//#endregion
//#region src/icons/WifiLow.ts
const WifiLow = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 20h.01" }), path({ "d": "M8.5 16.429a5 5 0 0 1 7 0" }));
};
//#endregion
//#region src/icons/WifiOff.ts
const WifiOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 20h.01" }), path({ "d": "M8.5 16.429a5 5 0 0 1 7 0" }), path({ "d": "M5 12.859a10 10 0 0 1 5.17-2.69" }), path({ "d": "M19 12.859a10 10 0 0 0-2.007-1.523" }), path({ "d": "M2 8.82a15 15 0 0 1 4.177-2.643" }), path({ "d": "M22 8.82a15 15 0 0 0-11.288-3.764" }), path({ "d": "m2 2 20 20" }));
};
//#endregion
//#region src/icons/WifiPen.ts
const WifiPen = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M2 8.82a15 15 0 0 1 20 0" }), path({ "d": "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" }), path({ "d": "M5 12.859a10 10 0 0 1 10.5-2.222" }), path({ "d": "M8.5 16.429a5 5 0 0 1 3-1.406" }));
};
//#endregion
//#region src/icons/WifiSync.ts
const WifiSync = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11.965 10.105v4L13.5 12.5a5 5 0 0 1 8 1.5" }), path({ "d": "M11.965 14.105h4" }), path({ "d": "M17.965 18.105h4L20.43 19.71a5 5 0 0 1-8-1.5" }), path({ "d": "M2 8.82a15 15 0 0 1 20 0" }), path({ "d": "M21.965 22.105v-4" }), path({ "d": "M5 12.86a10 10 0 0 1 3-2.032" }), path({ "d": "M8.5 16.429h.01" }));
};
//#endregion
//#region src/icons/WifiZero.ts
const WifiZero = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 20h.01" }));
};
//#endregion
//#region src/icons/Wifi.ts
const Wifi = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 20h.01" }), path({ "d": "M2 8.82a15 15 0 0 1 20 0" }), path({ "d": "M5 12.859a10 10 0 0 1 14 0" }), path({ "d": "M8.5 16.429a5 5 0 0 1 7 0" }));
};
//#endregion
//#region src/icons/WindArrowDown.ts
const WindArrowDown = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 2v8" }), path({ "d": "M12.8 21.6A2 2 0 1 0 14 18H2" }), path({ "d": "M17.5 10a2.5 2.5 0 1 1 2 4H2" }), path({ "d": "m6 6 4 4 4-4" }));
};
//#endregion
//#region src/icons/Wind.ts
const Wind = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12.8 19.6A2 2 0 1 0 14 16H2" }), path({ "d": "M17.5 8a2.5 2.5 0 1 1 2 4H2" }), path({ "d": "M9.8 4.4A2 2 0 1 1 11 8H2" }));
};
//#endregion
//#region src/icons/WineOff.ts
const WineOff = (props = {}) => {
	const { path, line } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M8 22h8" }), path({ "d": "M7 10h3m7 0h-1.343" }), path({ "d": "M12 15v7" }), path({ "d": "M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198" }), line({
		x1: "2",
		x2: "22",
		y1: "2",
		y2: "22"
	}));
};
//#endregion
//#region src/icons/Wine.ts
const Wine = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M8 22h8" }), path({ "d": "M7 10h10" }), path({ "d": "M12 15v7" }), path({ "d": "M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" }));
};
//#endregion
//#region src/icons/Workflow.ts
const Workflow = (props = {}) => {
	const { rect, path } = van.tags(svgNamespace);
	return LucideIcon(props, rect({
		width: "8",
		height: "8",
		"x": "3",
		"y": "3",
		rx: "2"
	}), path({ "d": "M7 11v4a2 2 0 0 0 2 2h4" }), rect({
		width: "8",
		height: "8",
		"x": "13",
		"y": "13",
		rx: "2"
	}));
};
//#endregion
//#region src/icons/Worm.ts
const Worm = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m19 12-1.5 3" }), path({ "d": "M19.63 18.81 22 20" }), path({ "d": "M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z" }));
};
//#endregion
//#region src/icons/Wrench.ts
const Wrench = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" }));
};
//#endregion
//#region src/icons/XLineTop.ts
const XLineTop = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M18 4H6" }), path({ "d": "M18 8 6 20" }), path({ "d": "m6 8 12 12" }));
};
//#endregion
//#region src/icons/X.ts
const X = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M18 6 6 18" }), path({ "d": "m6 6 12 12" }));
};
//#endregion
//#region src/icons/ZapOff.ts
const ZapOff = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317" }), path({ "d": "M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773" }), path({ "d": "M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643" }), path({ "d": "m2 2 20 20" }));
};
//#endregion
//#region src/icons/Zap.ts
const Zap = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" }));
};
//#endregion
//#region src/icons/ZodiacAquarius.ts
const ZodiacAquarius = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "m2 10 2.456-3.684a.7.7 0 0 1 1.106-.013l2.39 3.413a.7.7 0 0 0 1.096-.001l2.402-3.432a.7.7 0 0 1 1.098 0l2.402 3.432a.7.7 0 0 0 1.098 0l2.389-3.413a.7.7 0 0 1 1.106.013L22 10" }), path({ "d": "m2 18.002 2.456-3.684a.7.7 0 0 1 1.106-.013l2.39 3.413a.7.7 0 0 0 1.097 0l2.402-3.432a.7.7 0 0 1 1.098 0l2.402 3.432a.7.7 0 0 0 1.098 0l2.389-3.413a.7.7 0 0 1 1.106.013L22 18.002" }));
};
//#endregion
//#region src/icons/ZodiacAries.ts
const ZodiacAries = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M12 7.5a4.5 4.5 0 1 1 5 4.5" }), path({ "d": "M7 12a4.5 4.5 0 1 1 5-4.5V21" }));
};
//#endregion
//#region src/icons/ZodiacCancer.ts
const ZodiacCancer = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M21 14.5A9 6.5 0 0 1 5.5 19" }), path({ "d": "M3 9.5A9 6.5 0 0 1 18.5 5" }), circle({
		cx: "17.5",
		cy: "14.5",
		"r": "3.5"
	}), circle({
		cx: "6.5",
		cy: "9.5",
		"r": "3.5"
	}));
};
//#endregion
//#region src/icons/ZodiacCapricorn.ts
const ZodiacCapricorn = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 21a3 3 0 0 0 3-3V6.5a1 1 0 0 0-7 0" }), path({ "d": "M7 19V6a3 3 0 0 0-3-3h0" }), circle({
		cx: "17",
		cy: "17",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/ZodiacGemini.ts
const ZodiacGemini = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M16 4.525v14.948" }), path({ "d": "M20 3A17 17 0 0 1 4 3" }), path({ "d": "M4 21a17 17 0 0 1 16 0" }), path({ "d": "M8 4.525v14.948" }));
};
//#endregion
//#region src/icons/ZodiacLeo.ts
const ZodiacLeo = (props = {}) => {
	const { path, circle } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 16c0-4-3-4.5-3-8a5 5 0 0 1 10 0c0 3.466-3 6.196-3 10a3 3 0 0 0 6 0" }), circle({
		cx: "7",
		cy: "16",
		"r": "3"
	}));
};
//#endregion
//#region src/icons/ZodiacLibra.ts
const ZodiacLibra = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 16h6.857c.162-.012.19-.323.038-.38a6 6 0 1 1 4.212 0c-.153.057-.125.368.038.38H21" }), path({ "d": "M3 20h18" }));
};
//#endregion
//#region src/icons/ZodiacOphiuchus.ts
const ZodiacOphiuchus = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M3 10A6.06 6.06 0 0 1 12 10 A6.06 6.06 0 0 0 21 10" }), path({ "d": "M6 3v12a6 6 0 0 0 12 0V3" }));
};
//#endregion
//#region src/icons/ZodiacPisces.ts
const ZodiacPisces = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M19 21a15 15 0 0 1 0-18" }), path({ "d": "M20 12H4" }), path({ "d": "M5 3a15 15 0 0 1 0 18" }));
};
//#endregion
//#region src/icons/ZodiacSagittarius.ts
const ZodiacSagittarius = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M15 3h6v6" }), path({ "d": "M21 3 3 21" }), path({ "d": "m9 9 6 6" }));
};
//#endregion
//#region src/icons/ZodiacScorpio.ts
const ZodiacScorpio = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M10 19V5.5a1 1 0 0 1 5 0V17a2 2 0 0 0 2 2h5l-3-3" }), path({ "d": "m22 19-3 3" }), path({ "d": "M5 19V5.5a1 1 0 0 1 5 0" }), path({ "d": "M5 5.5A2.5 2.5 0 0 0 2.5 3" }));
};
//#endregion
//#region src/icons/ZodiacTaurus.ts
const ZodiacTaurus = (props = {}) => {
	const { circle, path } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "12",
		cy: "15",
		"r": "6"
	}), path({ "d": "M18 3A6 6 0 0 1 6 3" }));
};
//#endregion
//#region src/icons/ZodiacVirgo.ts
const ZodiacVirgo = (props = {}) => {
	const { path } = van.tags(svgNamespace);
	return LucideIcon(props, path({ "d": "M11 5.5a1 1 0 0 1 5 0V16a5 5 0 0 0 5 5" }), path({ "d": "M16 11.5a1 1 0 0 1 5 0V16a5 5 0 0 1-5 5" }), path({ "d": "M6 19V6a3 3 0 0 0-3-3h0" }), path({ "d": "M6 5.5a1 1 0 0 1 5 0V19" }));
};
//#endregion
//#region src/icons/ZoomIn.ts
const ZoomIn = (props = {}) => {
	const { circle, line } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "11",
		cy: "11",
		"r": "8"
	}), line({
		x1: "21",
		x2: "16.65",
		y1: "21",
		y2: "16.65"
	}), line({
		x1: "11",
		x2: "11",
		y1: "8",
		y2: "14"
	}), line({
		x1: "8",
		x2: "14",
		y1: "11",
		y2: "11"
	}));
};
//#endregion
//#region src/icons/ZoomOut.ts
const ZoomOut = (props = {}) => {
	const { circle, line } = van.tags(svgNamespace);
	return LucideIcon(props, circle({
		cx: "11",
		cy: "11",
		"r": "8"
	}), line({
		x1: "21",
		x2: "16.65",
		y1: "21",
		y2: "16.65"
	}), line({
		x1: "8",
		x2: "14",
		y1: "11",
		y2: "11"
	}));
};
//#endregion
export { AArrowDown, AArrowUp, ALargeSmall, Accessibility, Activity, AirVent, Airplay, AlarmClock, AlarmClockCheck, AlarmClockMinus, AlarmClockOff, AlarmClockPlus, AlarmSmoke, Album, AlignCenterHorizontal, AlignCenterVertical, AlignEndHorizontal, AlignEndVertical, AlignHorizontalDistributeCenter, AlignHorizontalDistributeEnd, AlignHorizontalDistributeStart, AlignHorizontalJustifyCenter, AlignHorizontalJustifyEnd, AlignHorizontalJustifyStart, AlignHorizontalSpaceAround, AlignHorizontalSpaceBetween, AlignStartHorizontal, AlignStartVertical, AlignVerticalDistributeCenter, AlignVerticalDistributeEnd, AlignVerticalDistributeStart, AlignVerticalJustifyCenter, AlignVerticalJustifyEnd, AlignVerticalJustifyStart, AlignVerticalSpaceAround, AlignVerticalSpaceBetween, Ambulance, Ampersand, Ampersands, Amphora, Anchor, Angry, Annoyed, Antenna, Anvil, Aperture, AppWindow, AppWindowMac, Apple, Archive, ArchiveRestore, ArchiveX, Armchair, ArrowBigDown, ArrowBigDownDash, ArrowBigLeft, ArrowBigLeftDash, ArrowBigRight, ArrowBigRightDash, ArrowBigUp, ArrowBigUpDash, ArrowDown, ArrowDown01, ArrowDown10, ArrowDownAZ, ArrowDownFromLine, ArrowDownLeft, ArrowDownNarrowWide, ArrowDownRight, ArrowDownToDot, ArrowDownToLine, ArrowDownUp, ArrowDownWideNarrow, ArrowDownZA, ArrowLeft, ArrowLeftFromLine, ArrowLeftRight, ArrowLeftToLine, ArrowRight, ArrowRightFromLine, ArrowRightLeft, ArrowRightToLine, ArrowUp, ArrowUp01, ArrowUp10, ArrowUpAZ, ArrowUpDown, ArrowUpFromDot, ArrowUpFromLine, ArrowUpLeft, ArrowUpNarrowWide, ArrowUpRight, ArrowUpToLine, ArrowUpWideNarrow, ArrowUpZA, ArrowsUpFromLine, Asterisk, AtSign, Atom, AudioLines, AudioWaveform, Award, Axe, Axis3d, Baby, Backpack, Badge, BadgeAlert, BadgeCent, BadgeCheck, BadgeDollarSign, BadgeEuro, BadgeIndianRupee, BadgeInfo, BadgeJapaneseYen, BadgeMinus, BadgePercent, BadgePlus, BadgePoundSterling, BadgeQuestionMark, BadgeRussianRuble, BadgeSwissFranc, BadgeTurkishLira, BadgeX, BaggageClaim, Balloon, Ban, Banana, Bandage, Banknote, BanknoteArrowDown, BanknoteArrowUp, BanknoteX, Barcode, Barrel, Baseline, Bath, Battery, BatteryCharging, BatteryFull, BatteryLow, BatteryMedium, BatteryPlus, BatteryWarning, Beaker, Bean, BeanOff, Bed, BedDouble, BedSingle, Beef, BeefOff, Beer, BeerOff, Bell, BellDot, BellElectric, BellMinus, BellOff, BellPlus, BellRing, BetweenHorizontalEnd, BetweenHorizontalStart, BetweenVerticalEnd, BetweenVerticalStart, BicepsFlexed, Bike, Binary, Binoculars, Biohazard, Bird, Birdhouse, Bitcoin, Blend, Blinds, Blocks, Bluetooth, BluetoothConnected, BluetoothOff, BluetoothSearching, Bold, Bolt, Bomb, Bone, Book, BookA, BookAlert, BookAudio, BookCheck, BookCopy, BookDashed, BookDown, BookHeadphones, BookHeart, BookImage, BookKey, BookLock, BookMarked, BookMinus, BookOpen, BookOpenCheck, BookOpenText, BookPlus, BookSearch, BookText, BookType, BookUp, BookUp2, BookUser, BookX, Bookmark, BookmarkCheck, BookmarkMinus, BookmarkPlus, BookmarkX, BoomBox, Bot, BotMessageSquare, BotOff, BottleWine, BowArrow, Box, Boxes, Braces, Brackets, Brain, BrainCircuit, BrainCog, BrickWall, BrickWallFire, BrickWallShield, Briefcase, BriefcaseBusiness, BriefcaseConveyorBelt, BriefcaseMedical, BringToFront, Brush, BrushCleaning, Bubbles, Bug, BugOff, BugPlay, Building, Building2, Bus, BusFront, Cable, CableCar, Cake, CakeSlice, Calculator, Calendar, Calendar1, CalendarArrowDown, CalendarArrowUp, CalendarCheck, CalendarCheck2, CalendarClock, CalendarCog, CalendarDays, CalendarFold, CalendarHeart, CalendarMinus, CalendarMinus2, CalendarOff, CalendarPlus, CalendarPlus2, CalendarRange, CalendarSearch, CalendarSync, CalendarX, CalendarX2, Calendars, Camera, CameraOff, Candy, CandyCane, CandyOff, Cannabis, CannabisOff, Captions, CaptionsOff, Car, CarFront, CarTaxiFront, Caravan, CardSim, Carrot, CaseLower, CaseSensitive, CaseUpper, CassetteTape, Cast, Castle, Cat, Cctv, CctvOff, ChartArea, ChartBar, ChartBarBig, ChartBarDecreasing, ChartBarIncreasing, ChartBarStacked, ChartCandlestick, ChartColumn, ChartColumnBig, ChartColumnDecreasing, ChartColumnIncreasing, ChartColumnStacked, ChartGantt, ChartLine, ChartNetwork, ChartNoAxesColumn, ChartNoAxesColumnDecreasing, ChartNoAxesColumnIncreasing, ChartNoAxesCombined, ChartNoAxesGantt, ChartPie, ChartScatter, ChartSpline, Check, CheckCheck, CheckLine, ChefHat, Cherry, ChessBishop, ChessKing, ChessKnight, ChessPawn, ChessQueen, ChessRook, ChevronDown, ChevronFirst, ChevronLast, ChevronLeft, ChevronRight, ChevronUp, ChevronsDown, ChevronsDownUp, ChevronsLeft, ChevronsLeftRight, ChevronsLeftRightEllipsis, ChevronsRight, ChevronsRightLeft, ChevronsUp, ChevronsUpDown, Church, Cigarette, CigaretteOff, Circle, CircleAlert, CircleArrowDown, CircleArrowLeft, CircleArrowOutDownLeft, CircleArrowOutDownRight, CircleArrowOutUpLeft, CircleArrowOutUpRight, CircleArrowRight, CircleArrowUp, CircleCheck, CircleCheckBig, CircleChevronDown, CircleChevronLeft, CircleChevronRight, CircleChevronUp, CircleDashed, CircleDivide, CircleDollarSign, CircleDot, CircleDotDashed, CircleEllipsis, CircleEqual, CircleFadingArrowUp, CircleFadingPlus, CircleGauge, CircleMinus, CircleOff, CircleParking, CircleParkingOff, CirclePause, CirclePercent, CirclePile, CirclePlay, CirclePlus, CirclePoundSterling, CirclePower, CircleQuestionMark, CircleSlash, CircleSlash2, CircleSmall, CircleStar, CircleStop, CircleUser, CircleUserRound, CircleX, CircuitBoard, Citrus, Clapperboard, Clipboard, ClipboardCheck, ClipboardClock, ClipboardCopy, ClipboardList, ClipboardMinus, ClipboardPaste, ClipboardPen, ClipboardPenLine, ClipboardPlus, ClipboardType, ClipboardX, Clock, Clock1, Clock10, Clock11, Clock12, Clock2, Clock3, Clock4, Clock5, Clock6, Clock7, Clock8, Clock9, ClockAlert, ClockArrowDown, ClockArrowUp, ClockCheck, ClockFading, ClockPlus, ClosedCaption, Cloud, CloudAlert, CloudBackup, CloudCheck, CloudCog, CloudDownload, CloudDrizzle, CloudFog, CloudHail, CloudLightning, CloudMoon, CloudMoonRain, CloudOff, CloudRain, CloudRainWind, CloudSnow, CloudSun, CloudSunRain, CloudSync, CloudUpload, Cloudy, Clover, Club, Code, CodeXml, Coffee, Cog, Coins, Columns2, Columns3, Columns3Cog, Columns4, Combine, Command, Compass, Component, Computer, ConciergeBell, Cone, Construction, Contact, ContactRound, Container, Contrast, Cookie, CookingPot, Copy, CopyCheck, CopyMinus, CopyPlus, CopySlash, CopyX, Copyleft, Copyright, CornerDownLeft, CornerDownRight, CornerLeftDown, CornerLeftUp, CornerRightDown, CornerRightUp, CornerUpLeft, CornerUpRight, Cpu, CreativeCommons, CreditCard, Croissant, Crop, Cross, Crosshair, Crown, Cuboid, CupSoda, Currency, Cylinder, Dam, Database, DatabaseBackup, DatabaseSearch, DatabaseZap, DecimalsArrowLeft, DecimalsArrowRight, Delete, Dessert, Diameter, Diamond, DiamondMinus, DiamondPercent, DiamondPlus, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6, Dices, Diff, Disc, Disc2, Disc3, DiscAlbum, Divide, Dna, DnaOff, Dock, Dog, DollarSign, Donut, DoorClosed, DoorClosedLocked, DoorOpen, Dot, Download, DraftingCompass, Drama, Drill, Drone, Droplet, DropletOff, Droplets, Drum, Drumstick, Dumbbell, Ear, EarOff, Earth, EarthLock, Eclipse, Egg, EggFried, EggOff, Ellipse, Ellipsis, EllipsisVertical, Equal, EqualApproximately, EqualNot, Eraser, EthernetPort, Euro, EvCharger, Expand, ExternalLink, Eye, EyeClosed, EyeOff, Factory, Fan, FastForward, Feather, Fence, FerrisWheel, File, FileArchive, FileAxis3d, FileBadge, FileBox, FileBraces, FileBracesCorner, FileChartColumn, FileChartColumnIncreasing, FileChartLine, FileChartPie, FileCheck, FileCheckCorner, FileClock, FileCode, FileCodeCorner, FileCog, FileDiff, FileDigit, FileDown, FileExclamationPoint, FileHeadphone, FileHeart, FileImage, FileInput, FileKey, FileLock, FileMinus, FileMinusCorner, FileMusic, FileOutput, FilePen, FilePenLine, FilePlay, FilePlus, FilePlusCorner, FileQuestionMark, FileScan, FileSearch, FileSearchCorner, FileSignal, FileSliders, FileSpreadsheet, FileStack, FileSymlink, FileTerminal, FileText, FileType, FileTypeCorner, FileUp, FileUser, FileVideoCamera, FileVolume, FileX, FileXCorner, Files, Film, FingerprintPattern, FireExtinguisher, Fish, FishOff, FishSymbol, FishingHook, FishingRod, Flag, FlagOff, FlagTriangleLeft, FlagTriangleRight, Flame, FlameKindling, Flashlight, FlashlightOff, FlaskConical, FlaskConicalOff, FlaskRound, FlipHorizontal2, FlipVertical2, Flower, Flower2, Focus, FoldHorizontal, FoldVertical, Folder, FolderArchive, FolderCheck, FolderClock, FolderClosed, FolderCode, FolderCog, FolderDot, FolderDown, FolderGit, FolderGit2, FolderHeart, FolderInput, FolderKanban, FolderKey, FolderLock, FolderMinus, FolderOpen, FolderOpenDot, FolderOutput, FolderPen, FolderPlus, FolderRoot, FolderSearch, FolderSearch2, FolderSymlink, FolderSync, FolderTree, FolderUp, FolderX, Folders, Footprints, Forklift, Form, Forward, Frame, Frown, Fuel, Fullscreen, Funnel, FunnelPlus, FunnelX, GalleryHorizontal, GalleryHorizontalEnd, GalleryThumbnails, GalleryVertical, GalleryVerticalEnd, Gamepad, Gamepad2, GamepadDirectional, Gauge, Gavel, Gem, GeorgianLari, Ghost, Gift, GitBranch, GitBranchMinus, GitBranchPlus, GitCommitHorizontal, GitCommitVertical, GitCompare, GitCompareArrows, GitFork, GitGraph, GitMerge, GitMergeConflict, GitPullRequest, GitPullRequestArrow, GitPullRequestClosed, GitPullRequestCreate, GitPullRequestCreateArrow, GitPullRequestDraft, GlassWater, Glasses, Globe, GlobeLock, GlobeOff, GlobeX, Goal, Gpu, GraduationCap, Grape, Grid2x2, Grid2x2Check, Grid2x2Plus, Grid2x2X, Grid3x2, Grid3x3, Grip, GripHorizontal, GripVertical, Group, Guitar, Ham, Hamburger, Hammer, Hand, HandCoins, HandFist, HandGrab, HandHeart, HandHelping, HandMetal, HandPlatter, Handbag, Handshake, HardDrive, HardDriveDownload, HardDriveUpload, HardHat, Hash, HatGlasses, Haze, Hd, HdmiPort, Heading, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, HeadphoneOff, Headphones, Headset, Heart, HeartCrack, HeartHandshake, HeartMinus, HeartOff, HeartPlus, HeartPulse, Heater, Helicopter, Hexagon, Highlighter, History, Hop, HopOff, Hospital, Hotel, Hourglass, House, HouseHeart, HousePlug, HousePlus, HouseWifi, IceCreamBowl, IceCreamCone, IdCard, IdCardLanyard, Image, ImageDown, ImageMinus, ImageOff, ImagePlay, ImagePlus, ImageUp, ImageUpscale, Images, Import, Inbox, IndianRupee, InfinityIcon, Info, InspectionPanel, Italic, IterationCcw, IterationCw, JapaneseYen, Joystick, Kanban, Kayak, Key, KeyRound, KeySquare, Keyboard, KeyboardMusic, KeyboardOff, Lamp, LampCeiling, LampDesk, LampFloor, LampWallDown, LampWallUp, LandPlot, Landmark, Languages, Laptop, LaptopMinimal, LaptopMinimalCheck, Lasso, LassoSelect, Laugh, Layers, Layers2, LayersPlus, LayoutDashboard, LayoutGrid, LayoutList, LayoutPanelLeft, LayoutPanelTop, LayoutTemplate, Leaf, LeafyGreen, Lectern, LensConcave, LensConvex, Library, LibraryBig, LifeBuoy, Ligature, Lightbulb, LightbulbOff, LineDotRightHorizontal, LineSquiggle, LineStyle, Link, Link2, Link2Off, List, ListCheck, ListChecks, ListChevronsDownUp, ListChevronsUpDown, ListCollapse, ListEnd, ListFilter, ListFilterPlus, ListIndentDecrease, ListIndentIncrease, ListMinus, ListMusic, ListOrdered, ListPlus, ListRestart, ListStart, ListTodo, ListTree, ListVideo, ListX, Loader, LoaderCircle, LoaderPinwheel, Locate, LocateFixed, LocateOff, Lock, LockKeyhole, LockKeyholeOpen, LockOpen, LogIn, LogOut, Logs, Lollipop, Luggage, Magnet, Mail, MailCheck, MailMinus, MailOpen, MailPlus, MailQuestionMark, MailSearch, MailWarning, MailX, Mailbox, Mails, Map, MapMinus, MapPin, MapPinCheck, MapPinCheckInside, MapPinHouse, MapPinMinus, MapPinMinusInside, MapPinOff, MapPinPen, MapPinPlus, MapPinPlusInside, MapPinSearch, MapPinX, MapPinXInside, MapPinned, MapPlus, Mars, MarsStroke, Martini, Maximize, Maximize2, Medal, Megaphone, MegaphoneOff, Meh, MemoryStick, Menu, Merge, MessageCircle, MessageCircleCheck, MessageCircleCode, MessageCircleDashed, MessageCircleHeart, MessageCircleMore, MessageCircleOff, MessageCirclePlus, MessageCircleQuestionMark, MessageCircleReply, MessageCircleWarning, MessageCircleX, MessageSquare, MessageSquareCheck, MessageSquareCode, MessageSquareDashed, MessageSquareDiff, MessageSquareDot, MessageSquareHeart, MessageSquareLock, MessageSquareMore, MessageSquareOff, MessageSquarePlus, MessageSquareQuote, MessageSquareReply, MessageSquareShare, MessageSquareText, MessageSquareWarning, MessageSquareX, MessagesSquare, Metronome, Mic, MicOff, MicVocal, Microchip, Microscope, Microwave, Milestone, Milk, MilkOff, Minimize, Minimize2, Minus, MirrorRectangular, MirrorRound, Monitor, MonitorCheck, MonitorCloud, MonitorCog, MonitorDot, MonitorDown, MonitorOff, MonitorPause, MonitorPlay, MonitorSmartphone, MonitorSpeaker, MonitorStop, MonitorUp, MonitorX, Moon, MoonStar, Motorbike, Mountain, MountainSnow, Mouse, MouseLeft, MouseOff, MousePointer, MousePointer2, MousePointer2Off, MousePointerBan, MousePointerClick, MouseRight, Move, Move3d, MoveDiagonal, MoveDiagonal2, MoveDown, MoveDownLeft, MoveDownRight, MoveHorizontal, MoveLeft, MoveRight, MoveUp, MoveUpLeft, MoveUpRight, MoveVertical, Music, Music2, Music3, Music4, Navigation, Navigation2, Navigation2Off, NavigationOff, Network, Newspaper, Nfc, NonBinary, Notebook, NotebookPen, NotebookTabs, NotebookText, NotepadText, NotepadTextDashed, Nut, NutOff, Octagon, OctagonAlert, OctagonMinus, OctagonPause, OctagonX, Omega, Option, Orbit, Origami, Package, Package2, PackageCheck, PackageMinus, PackageOpen, PackagePlus, PackageSearch, PackageX, PaintBucket, PaintRoller, Paintbrush, PaintbrushVertical, Palette, Panda, PanelBottom, PanelBottomClose, PanelBottomDashed, PanelBottomOpen, PanelLeft, PanelLeftClose, PanelLeftDashed, PanelLeftOpen, PanelLeftRightDashed, PanelRight, PanelRightClose, PanelRightDashed, PanelRightOpen, PanelTop, PanelTopBottomDashed, PanelTopClose, PanelTopDashed, PanelTopOpen, PanelsLeftBottom, PanelsRightBottom, PanelsTopLeft, Paperclip, Parentheses, ParkingMeter, PartyPopper, Pause, PawPrint, PcCase, Pen, PenLine, PenOff, PenTool, Pencil, PencilLine, PencilOff, PencilRuler, Pentagon, Percent, PersonStanding, PhilippinePeso, Phone, PhoneCall, PhoneForwarded, PhoneIncoming, PhoneMissed, PhoneOff, PhoneOutgoing, Pi, Piano, Pickaxe, PictureInPicture, PictureInPicture2, PiggyBank, Pilcrow, PilcrowLeft, PilcrowRight, Pill, PillBottle, Pin, PinOff, Pipette, Pizza, Plane, PlaneLanding, PlaneTakeoff, Play, Plug, Plug2, PlugZap, Plus, PocketKnife, Podcast, Pointer, PointerOff, Popcorn, Popsicle, PoundSterling, Power, PowerOff, Presentation, Printer, PrinterCheck, PrinterX, Projector, Proportions, Puzzle, Pyramid, QrCode, Quote, Rabbit, Radar, Radiation, Radical, Radio, RadioOff, RadioReceiver, RadioTower, Radius, Rainbow, Rat, Ratio, Receipt, ReceiptCent, ReceiptEuro, ReceiptIndianRupee, ReceiptJapaneseYen, ReceiptPoundSterling, ReceiptRussianRuble, ReceiptSwissFranc, ReceiptText, ReceiptTurkishLira, RectangleCircle, RectangleEllipsis, RectangleGoggles, RectangleHorizontal, RectangleVertical, Recycle, Redo, Redo2, RedoDot, RefreshCcw, RefreshCcwDot, RefreshCw, RefreshCwOff, Refrigerator, Regex, RemoveFormatting, Repeat, Repeat1, Repeat2, Replace, ReplaceAll, Reply, ReplyAll, Rewind, Ribbon, Road, Rocket, RockingChair, RollerCoaster, Rose, Rotate3d, RotateCcw, RotateCcwKey, RotateCcwSquare, RotateCw, RotateCwSquare, Route, RouteOff, Router, Rows2, Rows3, Rows4, Rss, Ruler, RulerDimensionLine, RussianRuble, Sailboat, Salad, Sandwich, Satellite, SatelliteDish, SaudiRiyal, Save, SaveAll, SaveOff, Scale, Scale3d, Scaling, Scan, ScanBarcode, ScanEye, ScanFace, ScanHeart, ScanLine, ScanQrCode, ScanSearch, ScanText, School, Scissors, ScissorsLineDashed, Scooter, ScreenShare, ScreenShareOff, Scroll, ScrollText, Search, SearchAlert, SearchCheck, SearchCode, SearchSlash, SearchX, Section, Send, SendHorizontal, SendToBack, SeparatorHorizontal, SeparatorVertical, Server, ServerCog, ServerCrash, ServerOff, Settings, Settings2, Shapes, Share, Share2, Sheet, Shell, ShelvingUnit, Shield, ShieldAlert, ShieldBan, ShieldCheck, ShieldCog, ShieldCogCorner, ShieldEllipsis, ShieldHalf, ShieldMinus, ShieldOff, ShieldPlus, ShieldQuestionMark, ShieldUser, ShieldX, Ship, ShipWheel, Shirt, ShoppingBag, ShoppingBasket, ShoppingCart, Shovel, ShowerHead, Shredder, Shrimp, Shrink, Shrub, Shuffle, Sigma, Signal, SignalHigh, SignalLow, SignalMedium, SignalZero, Signature, Signpost, SignpostBig, Siren, SkipBack, SkipForward, Skull, Slash, Slice, SlidersHorizontal, SlidersVertical, Smartphone, SmartphoneCharging, SmartphoneNfc, Smile, SmilePlus, Snail, Snowflake, SoapDispenserDroplet, Sofa, SolarPanel, Soup, Space, Spade, Sparkle, Sparkles, Speaker, Speech, SpellCheck, SpellCheck2, Spline, SplinePointer, Split, Spool, SportShoe, Spotlight, SprayCan, Sprout, Square, SquareActivity, SquareArrowDown, SquareArrowDownLeft, SquareArrowDownRight, SquareArrowLeft, SquareArrowOutDownLeft, SquareArrowOutDownRight, SquareArrowOutUpLeft, SquareArrowOutUpRight, SquareArrowRight, SquareArrowRightEnter, SquareArrowRightExit, SquareArrowUp, SquareArrowUpLeft, SquareArrowUpRight, SquareAsterisk, SquareBottomDashedScissors, SquareCenterlineDashedHorizontal, SquareCenterlineDashedVertical, SquareChartGantt, SquareCheck, SquareCheckBig, SquareChevronDown, SquareChevronLeft, SquareChevronRight, SquareChevronUp, SquareCode, SquareDashed, SquareDashedBottom, SquareDashedBottomCode, SquareDashedKanban, SquareDashedMousePointer, SquareDashedTopSolid, SquareDivide, SquareDot, SquareEqual, SquareFunction, SquareKanban, SquareLibrary, SquareM, SquareMenu, SquareMinus, SquareMousePointer, SquareParking, SquareParkingOff, SquarePause, SquarePen, SquarePercent, SquarePi, SquarePilcrow, SquarePlay, SquarePlus, SquarePower, SquareRadical, SquareRoundCorner, SquareScissors, SquareSigma, SquareSlash, SquareSplitHorizontal, SquareSplitVertical, SquareSquare, SquareStack, SquareStar, SquareStop, SquareTerminal, SquareUser, SquareUserRound, SquareX, SquaresExclude, SquaresIntersect, SquaresSubtract, SquaresUnite, Squircle, SquircleDashed, Squirrel, Stamp, Star, StarHalf, StarOff, StepBack, StepForward, Stethoscope, Sticker, StickyNote, Stone, Store, StretchHorizontal, StretchVertical, Strikethrough, Subscript, Sun, SunDim, SunMedium, SunMoon, SunSnow, Sunrise, Sunset, Superscript, SwatchBook, SwissFranc, SwitchCamera, Sword, Swords, Syringe, Table, Table2, TableCellsMerge, TableCellsSplit, TableColumnsSplit, TableOfContents, TableProperties, TableRowsSplit, Tablet, TabletSmartphone, Tablets, Tag, Tags, Tally1, Tally2, Tally3, Tally4, Tally5, Tangent, Target, Telescope, Tent, TentTree, Terminal, TestTube, TestTubeDiagonal, TestTubes, TextAlignCenter, TextAlignEnd, TextAlignJustify, TextAlignStart, TextCursor, TextCursorInput, TextInitial, TextQuote, TextSearch, TextSelect, TextWrap, Theater, Thermometer, ThermometerSnowflake, ThermometerSun, ThumbsDown, ThumbsUp, Ticket, TicketCheck, TicketMinus, TicketPercent, TicketPlus, TicketSlash, TicketX, Tickets, TicketsPlane, Timer, TimerOff, TimerReset, ToggleLeft, ToggleRight, Toilet, ToolCase, Toolbox, Tornado, Torus, Touchpad, TouchpadOff, TowelRack, TowerControl, ToyBrick, Tractor, TrafficCone, TrainFront, TrainFrontTunnel, TrainTrack, TramFront, Transgender, Trash, Trash2, TreeDeciduous, TreePalm, TreePine, Trees, TrendingDown, TrendingUp, TrendingUpDown, Triangle, TriangleAlert, TriangleDashed, TriangleRight, Trophy, Truck, TruckElectric, TurkishLira, Turntable, Turtle, Tv, TvMinimal, TvMinimalPlay, Type, TypeOutline, Umbrella, UmbrellaOff, Underline, Undo, Undo2, UndoDot, UnfoldHorizontal, UnfoldVertical, Ungroup, University, Unlink, Unlink2, Unplug, Upload, Usb, User, UserCheck, UserCog, UserKey, UserLock, UserMinus, UserPen, UserPlus, UserRound, UserRoundCheck, UserRoundCog, UserRoundKey, UserRoundMinus, UserRoundPen, UserRoundPlus, UserRoundSearch, UserRoundX, UserSearch, UserStar, UserX, Users, UsersRound, Utensils, UtensilsCrossed, UtilityPole, Van, Variable, Vault, VectorSquare, Vegan, VenetianMask, Venus, VenusAndMars, Vibrate, VibrateOff, Video, VideoOff, Videotape, View, Voicemail, Volleyball, Volume, Volume1, Volume2, VolumeOff, VolumeX, Vote, Wallet, WalletCards, WalletMinimal, Wallpaper, Wand, WandSparkles, Warehouse, WashingMachine, Watch, Waves, WavesArrowDown, WavesArrowUp, WavesLadder, Waypoints, Webcam, Webhook, WebhookOff, Weight, WeightTilde, Wheat, WheatOff, WholeWord, Wifi, WifiCog, WifiHigh, WifiLow, WifiOff, WifiPen, WifiSync, WifiZero, Wind, WindArrowDown, Wine, WineOff, Workflow, Worm, Wrench, X, XLineTop, Zap, ZapOff, ZodiacAquarius, ZodiacAries, ZodiacCancer, ZodiacCapricorn, ZodiacGemini, ZodiacLeo, ZodiacLibra, ZodiacOphiuchus, ZodiacPisces, ZodiacSagittarius, ZodiacScorpio, ZodiacTaurus, ZodiacVirgo, ZoomIn, ZoomOut };

//# sourceMappingURL=index.js.map