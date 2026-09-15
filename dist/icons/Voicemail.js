/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
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
export { Voicemail };

//# sourceMappingURL=Voicemail.js.map