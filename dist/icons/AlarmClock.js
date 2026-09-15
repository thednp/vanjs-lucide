/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
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
export { AlarmClock };

//# sourceMappingURL=AlarmClock.js.map