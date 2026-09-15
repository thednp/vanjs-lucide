/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
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
export { Webcam };

//# sourceMappingURL=Webcam.js.map