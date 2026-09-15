/*!
* vanjs-lucide ESM v0.1.0 (https://thednp.github.io/vanjs-lucide)
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
export { svgNamespace as n, LucideIcon as t };

//# sourceMappingURL=LucideIcon-D1P4Jn_K.js.map