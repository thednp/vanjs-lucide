/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
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
export { SplinePointer };

//# sourceMappingURL=SplinePointer.js.map