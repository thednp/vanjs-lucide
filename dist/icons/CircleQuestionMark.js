/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { n as svgNamespace, t as LucideIcon } from "../LucideIcon-D1P4Jn_K.js";
import van from "vanjs-core";
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
export { CircleQuestionMark };

//# sourceMappingURL=CircleQuestionMark.js.map