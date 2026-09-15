/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
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
export { SwitchCamera };

//# sourceMappingURL=SwitchCamera.js.map