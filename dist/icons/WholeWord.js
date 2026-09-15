/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
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
export { WholeWord };

//# sourceMappingURL=WholeWord.js.map