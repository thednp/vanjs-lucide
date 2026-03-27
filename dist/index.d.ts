/*!
* vanjs-lucide ESM v0.0.6 (https://thednp.github.io/vanjs-lucide)
* Copyright 2026 © thednp
* Licensed under MIT (https://github.com/thednp/vanjs-lucide/blob/master/LICENSE)
*/
import { State } from "vanjs-core";

//#region src/types.d.ts
type PropValueOrDerived<T> = T | State<T>;
interface EventHandler<T, E extends Event> {
  (e: E & {
    currentTarget: T;
    target: EventTarget & Element;
  }): void;
}
interface BoundEventHandler<T, E extends Event, EHandler extends EventHandler<T, E> = EventHandler<T, E>> {
  0: (data: unknown, ...e: Parameters<EHandler>) => void;
  1: unknown;
}
type EventHandlerUnion<T, E extends Event, EHandler extends EventHandler<T, E> = EventHandler<T, E>> = EHandler | BoundEventHandler<T, E, EHandler>;
interface DOMAttributes<T> {
  oncopy?: EventHandlerUnion<T, ClipboardEvent> | undefined;
  oncut?: EventHandlerUnion<T, ClipboardEvent> | undefined;
  onpaste?: EventHandlerUnion<T, ClipboardEvent> | undefined;
  oncompositionend?: EventHandlerUnion<T, CompositionEvent> | undefined;
  oncompositionstart?: EventHandlerUnion<T, CompositionEvent> | undefined;
  oncompositionupdate?: EventHandlerUnion<T, CompositionEvent> | undefined;
  onfocusout?: EventHandlerUnion<T, FocusEvent> | undefined;
  onfocusin?: EventHandlerUnion<T, FocusEvent> | undefined;
  onencrypted?: EventHandlerUnion<T, Event> | undefined;
  ondragexit?: EventHandlerUnion<T, DragEvent> | undefined;
}
interface AriaAttributes {
  /**
   * Identifies the currently active element when DOM focus is on a composite widget, textbox,
   * group, or application.
   */
  "aria-activedescendant"?: string | undefined;
  /**
   * Indicates whether assistive technologies will present all, or only parts of, the changed
   * region based on the change notifications defined by the aria-relevant attribute.
   */
  "aria-atomic"?: boolean | "false" | "true" | undefined;
  /**
   * Indicates whether inputting text could trigger display of one or more predictions of the
   * user's intended value for an input and specifies how predictions would be presented if they
   * are made.
   */
  "aria-autocomplete"?: "none" | "inline" | "list" | "both" | undefined;
  /**
   * Indicates an element is being modified and that assistive technologies MAY want to wait until
   * the modifications are complete before exposing them to the user.
   */
  "aria-busy"?: boolean | "false" | "true" | undefined;
  /**
   * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
   *
   * @see aria-pressed @see aria-selected.
   */
  "aria-checked"?: boolean | "false" | "mixed" | "true" | undefined;
  /**
   * Defines the total number of columns in a table, grid, or treegrid.
   *
   * @see aria-colindex.
   */
  "aria-colcount"?: number | string | undefined;
  /**
   * Defines an element's column index or position with respect to the total number of columns
   * within a table, grid, or treegrid.
   *
   * @see aria-colcount @see aria-colspan.
   */
  "aria-colindex"?: number | string | undefined;
  /**
   * Defines the number of columns spanned by a cell or gridcell within a table, grid, or
   * treegrid.
   *
   * @see aria-colindex @see aria-rowspan.
   */
  "aria-colspan"?: number | string | undefined;
  /**
   * Identifies the element (or elements) whose contents or presence are controlled by the current
   * element.
   *
   * @see aria-owns.
   */
  "aria-controls"?: string | undefined;
  /**
   * Indicates the element that represents the current item within a container or set of related
   * elements.
   */
  "aria-current"?: boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time" | undefined;
  /**
   * Identifies the element (or elements) that describes the object.
   *
   * @see aria-labelledby
   */
  "aria-describedby"?: string | undefined;
  /**
   * Identifies the element that provides a detailed, extended description for the object.
   *
   * @see aria-describedby.
   */
  "aria-details"?: string | undefined;
  /**
   * Indicates that the element is perceivable but disabled, so it is not editable or otherwise
   * operable.
   *
   * @see aria-hidden @see aria-readonly.
   */
  "aria-disabled"?: boolean | "false" | "true" | undefined;
  /**
   * Indicates what functions can be performed when a dragged object is released on the drop
   * target.
   *
   * @deprecated In ARIA 1.1
   */
  "aria-dropeffect"?: "none" | "copy" | "execute" | "link" | "move" | "popup" | undefined;
  /**
   * Identifies the element that provides an error message for the object.
   *
   * @see aria-invalid @see aria-describedby.
   */
  "aria-errormessage"?: string | undefined;
  /**
   * Indicates whether the element, or another grouping element it controls, is currently expanded
   * or collapsed.
   */
  "aria-expanded"?: boolean | "false" | "true" | undefined;
  /**
   * Identifies the next element (or elements) in an alternate reading order of content which, at
   * the user's discretion, allows assistive technology to override the general default of reading
   * in document source order.
   */
  "aria-flowto"?: string | undefined;
  /**
   * Indicates an element's "grabbed" state in a drag-and-drop operation.
   *
   * @deprecated In ARIA 1.1
   */
  "aria-grabbed"?: boolean | "false" | "true" | undefined;
  /**
   * Indicates the availability and type of interactive popup element, such as menu or dialog,
   * that can be triggered by an element.
   */
  "aria-haspopup"?: boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined;
  /**
   * Indicates whether the element is exposed to an accessibility API.
   *
   * @see aria-disabled.
   */
  "aria-hidden"?: boolean | "false" | "true" | undefined;
  /**
   * Indicates the entered value does not conform to the format expected by the application.
   *
   * @see aria-errormessage.
   */
  "aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling" | undefined;
  /**
   * Indicates keyboard shortcuts that an author has implemented to activate or give focus to an
   * element.
   */
  "aria-keyshortcuts"?: string | undefined;
  /**
   * Defines a string value that labels the current element.
   *
   * @see aria-labelledby.
   */
  "aria-label"?: string | undefined;
  /**
   * Identifies the element (or elements) that labels the current element.
   *
   * @see aria-describedby.
   */
  "aria-labelledby"?: string | undefined;
  /** Defines the hierarchical level of an element within a structure. */
  "aria-level"?: number | string | undefined;
  /**
   * Indicates that an element will be updated, and describes the types of updates the user
   * agents, assistive technologies, and user can expect from the live region.
   */
  "aria-live"?: "off" | "assertive" | "polite" | undefined;
  /** Indicates whether an element is modal when displayed. */
  "aria-modal"?: boolean | "false" | "true" | undefined;
  /** Indicates whether a text box accepts multiple lines of input or only a single line. */
  "aria-multiline"?: boolean | "false" | "true" | undefined;
  /**
   * Indicates that the user may select more than one item from the current selectable
   * descendants.
   */
  "aria-multiselectable"?: boolean | "false" | "true" | undefined;
  /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
  "aria-orientation"?: "horizontal" | "vertical" | undefined;
  /**
   * Identifies an element (or elements) in order to define a visual, functional, or contextual
   * parent/child relationship between DOM elements where the DOM hierarchy cannot be used to
   * represent the relationship.
   *
   * @see aria-controls.
   */
  "aria-owns"?: string | undefined;
  /**
   * Defines a short hint (a word or short phrase) intended to aid the user with data entry when
   * the control has no value. A hint could be a sample value or a brief description of the
   * expected format.
   */
  "aria-placeholder"?: string | undefined;
  /**
   * Defines an element's number or position in the current set of listitems or treeitems. Not
   * required if all elements in the set are present in the DOM.
   *
   * @see aria-setsize.
   */
  "aria-posinset"?: number | string | undefined;
  /**
   * Indicates the current "pressed" state of toggle buttons.
   *
   * @see aria-checked @see aria-selected.
   */
  "aria-pressed"?: boolean | "false" | "mixed" | "true" | undefined;
  /**
   * Indicates that the element is not editable, but is otherwise operable.
   *
   * @see aria-disabled.
   */
  "aria-readonly"?: boolean | "false" | "true" | undefined;
  /**
   * Indicates what notifications the user agent will trigger when the accessibility tree within a
   * live region is modified.
   *
   * @see aria-atomic.
   */
  "aria-relevant"?: "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | undefined;
  /** Indicates that user input is required on the element before a form may be submitted. */
  "aria-required"?: boolean | "false" | "true" | undefined;
  /** Defines a human-readable, author-localized description for the role of an element. */
  "aria-roledescription"?: string | undefined;
  /**
   * Defines the total number of rows in a table, grid, or treegrid.
   *
   * @see aria-rowindex.
   */
  "aria-rowcount"?: number | string | undefined;
  /**
   * Defines an element's row index or position with respect to the total number of rows within a
   * table, grid, or treegrid.
   *
   * @see aria-rowcount @see aria-rowspan.
   */
  "aria-rowindex"?: number | string | undefined;
  /**
   * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
   *
   * @see aria-rowindex @see aria-colspan.
   */
  "aria-rowspan"?: number | string | undefined;
  /**
   * Indicates the current "selected" state of various widgets.
   *
   * @see aria-checked @see aria-pressed.
   */
  "aria-selected"?: boolean | "false" | "true" | undefined;
  /**
   * Defines the number of items in the current set of listitems or treeitems. Not required if all
   * elements in the set are present in the DOM.
   *
   * @see aria-posinset.
   */
  "aria-setsize"?: number | string | undefined;
  /** Indicates if items in a table or grid are sorted in ascending or descending order. */
  "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined;
  /** Defines the maximum allowed value for a range widget. */
  "aria-valuemax"?: number | string | undefined;
  /** Defines the minimum allowed value for a range widget. */
  "aria-valuemin"?: number | string | undefined;
  /**
   * Defines the current value for a range widget.
   *
   * @see aria-valuetext.
   */
  "aria-valuenow"?: number | string | undefined;
  /** Defines the human readable text alternative of aria-valuenow for a range widget. */
  "aria-valuetext"?: string | undefined;
  role?: "alert" | "alertdialog" | "application" | "article" | "banner" | "button" | "cell" | "checkbox" | "columnheader" | "combobox" | "complementary" | "contentinfo" | "definition" | "dialog" | "directory" | "document" | "feed" | "figure" | "form" | "grid" | "gridcell" | "group" | "heading" | "img" | "link" | "list" | "listbox" | "listitem" | "log" | "main" | "marquee" | "math" | "menu" | "menubar" | "menuitem" | "menuitemcheckbox" | "menuitemradio" | "meter" | "navigation" | "none" | "note" | "option" | "presentation" | "progressbar" | "radio" | "radiogroup" | "region" | "row" | "rowgroup" | "rowheader" | "scrollbar" | "search" | "searchbox" | "separator" | "slider" | "spinbutton" | "status" | "switch" | "tab" | "table" | "tablist" | "tabpanel" | "term" | "textbox" | "timer" | "toolbar" | "tooltip" | "tree" | "treegrid" | "treeitem" | undefined;
}
interface NewViewportSVGAttributes<T> extends CoreSVGAttributes<T>, Pick<PresentationSVGAttributes, "overflow" | "clip"> {
  viewBox?: string | undefined;
}
interface TransformableSVGAttributes {
  transform?: string | undefined;
}
interface ContainerElementSVGAttributes<T> extends CoreSVGAttributes<T>, Pick<PresentationSVGAttributes, "clip-path" | "mask" | "cursor" | "opacity" | "filter" | "enable-background" | "color-interpolation" | "color-rendering"> {}
interface FilterPrimitiveElementSVGAttributes<T> extends CoreSVGAttributes<T>, Pick<PresentationSVGAttributes, "color-interpolation-filters"> {
  x?: number | string | undefined;
  y?: number | string | undefined;
  width?: number | string | undefined;
  height?: number | string | undefined;
  result?: string | undefined;
}
interface StylableSVGAttributes {
  class?: string | undefined;
  style?: string | undefined;
}
interface FitToViewBoxSVGAttributes {
  viewBox?: string | undefined;
  preserveAspectRatio?: SVGPreserveAspectRatio | undefined;
}
interface CoreSVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
  id?: string | undefined;
  lang?: string | undefined;
  tabIndex?: number | string | undefined;
  tabindex?: number | string | undefined;
}
interface PresentationSVGAttributes {
  "alignment-baseline"?: "auto" | "baseline" | "before-edge" | "text-before-edge" | "middle" | "central" | "after-edge" | "text-after-edge" | "ideographic" | "alphabetic" | "hanging" | "mathematical" | "inherit" | undefined;
  "baseline-shift"?: number | string | undefined;
  clip?: string | undefined;
  "clip-path"?: string | undefined;
  "clip-rule"?: "nonzero" | "evenodd" | "inherit" | undefined;
  color?: string | undefined;
  "color-interpolation"?: "auto" | "sRGB" | "linearRGB" | "inherit" | undefined;
  "color-interpolation-filters"?: "auto" | "sRGB" | "linearRGB" | "inherit" | undefined;
  "color-profile"?: string | undefined;
  "color-rendering"?: "auto" | "optimizeSpeed" | "optimizeQuality" | "inherit" | undefined;
  cursor?: string | undefined;
  direction?: "ltr" | "rtl" | "inherit" | undefined;
  display?: string | undefined;
  "dominant-baseline"?: "auto" | "text-bottom" | "alphabetic" | "ideographic" | "middle" | "central" | "mathematical" | "hanging" | "text-top" | "inherit" | undefined;
  "enable-background"?: string | undefined;
  fill?: string | undefined;
  "fill-opacity"?: number | string | "inherit" | undefined;
  "fill-rule"?: "nonzero" | "evenodd" | "inherit" | undefined;
  filter?: string | undefined;
  "flood-color"?: string | undefined;
  "flood-opacity"?: number | string | "inherit" | undefined;
  "font-family"?: string | undefined;
  "font-size"?: string | undefined;
  "font-size-adjust"?: number | string | undefined;
  "font-stretch"?: string | undefined;
  "font-style"?: "normal" | "italic" | "oblique" | "inherit" | undefined;
  "font-variant"?: string | undefined;
  "font-weight"?: number | string | undefined;
  "glyph-orientation-horizontal"?: string | undefined;
  "glyph-orientation-vertical"?: string | undefined;
  "image-rendering"?: "auto" | "optimizeQuality" | "optimizeSpeed" | "inherit" | undefined;
  kerning?: string | undefined;
  "letter-spacing"?: number | string | undefined;
  "lighting-color"?: string | undefined;
  "marker-end"?: string | undefined;
  "marker-mid"?: string | undefined;
  "marker-start"?: string | undefined;
  mask?: string | undefined;
  opacity?: number | string | "inherit" | undefined;
  overflow?: "visible" | "hidden" | "scroll" | "auto" | "inherit" | undefined;
  pathLength?: string | number | undefined;
  "pointer-events"?: "bounding-box" | "visiblePainted" | "visibleFill" | "visibleStroke" | "visible" | "painted" | "color" | "fill" | "stroke" | "all" | "none" | "inherit" | undefined;
  "shape-rendering"?: "auto" | "optimizeSpeed" | "crispEdges" | "geometricPrecision" | "inherit" | undefined;
  "stop-color"?: string | undefined;
  "stop-opacity"?: number | string | "inherit" | undefined;
  stroke?: string | undefined;
  "stroke-dasharray"?: string | undefined;
  "stroke-dashoffset"?: number | string | undefined;
  "stroke-linecap"?: "butt" | "round" | "square" | "inherit" | undefined;
  "stroke-linejoin"?: "arcs" | "bevel" | "miter" | "miter-clip" | "round" | "inherit" | undefined;
  "stroke-miterlimit"?: number | string | "inherit" | undefined;
  "stroke-opacity"?: number | string | "inherit" | undefined;
  "stroke-width"?: number | string | undefined;
  "text-anchor"?: "start" | "middle" | "end" | "inherit" | undefined;
  "text-decoration"?: "none" | "underline" | "overline" | "line-through" | "blink" | "inherit" | undefined;
  "text-rendering"?: "auto" | "optimizeSpeed" | "optimizeLegibility" | "geometricPrecision" | "inherit" | undefined;
  "unicode-bidi"?: string | undefined;
  visibility?: "visible" | "hidden" | "collapse" | "inherit" | undefined;
  "word-spacing"?: number | string | undefined;
  "writing-mode"?: "lr-tb" | "rl-tb" | "tb-rl" | "lr" | "rl" | "tb" | "inherit" | undefined;
}
interface NewViewportSVGAttributes<T> extends CoreSVGAttributes<T>, Pick<PresentationSVGAttributes, "overflow" | "clip"> {
  viewBox?: string | undefined;
}
interface ZoomAndPanSVGAttributes {
  zoomAndPan?: "disable" | "magnify" | undefined;
}
interface SvgSVGAttributes<T> extends ContainerElementSVGAttributes<T>, NewViewportSVGAttributes<T>, FilterPrimitiveElementSVGAttributes<T>, StylableSVGAttributes, TransformableSVGAttributes, FitToViewBoxSVGAttributes, ZoomAndPanSVGAttributes, PresentationSVGAttributes {
  /** @deprecated */
  version?: string | undefined;
  baseProfile?: string | undefined;
  x?: number | string | undefined;
  y?: number | string | undefined;
  width?: number | string | undefined;
  height?: number | string | undefined;
  contentScriptType?: string | undefined;
  contentStyleType?: string | undefined;
  xmlns?: string | undefined;
  "xmlns:xlink"?: string | undefined;
}
type SVGProps = { [K in keyof SvgSVGAttributes<SVGSVGElement>]: PropValueOrDerived<SvgSVGAttributes<SVGSVGElement>[K]> | undefined };
//#endregion
//#region src/icons/AArrowDown.d.ts
declare const AArrowDown: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AArrowUp.d.ts
declare const AArrowUp: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ALargeSmall.d.ts
declare const ALargeSmall: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Accessibility.d.ts
declare const Accessibility: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Activity.d.ts
declare const Activity: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AirVent.d.ts
declare const AirVent: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Airplay.d.ts
declare const Airplay: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AlarmClockCheck.d.ts
declare const AlarmClockCheck: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AlarmClockMinus.d.ts
declare const AlarmClockMinus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AlarmClockOff.d.ts
declare const AlarmClockOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AlarmClockPlus.d.ts
declare const AlarmClockPlus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AlarmClock.d.ts
declare const AlarmClock: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AlarmSmoke.d.ts
declare const AlarmSmoke: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Album.d.ts
declare const Album: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AlignCenterHorizontal.d.ts
declare const AlignCenterHorizontal: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AlignCenterVertical.d.ts
declare const AlignCenterVertical: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AlignCenter.d.ts
declare const AlignCenter: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AlignEndHorizontal.d.ts
declare const AlignEndHorizontal: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AlignEndVertical.d.ts
declare const AlignEndVertical: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AlignHorizontalDistributeCenter.d.ts
declare const AlignHorizontalDistributeCenter: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AlignHorizontalDistributeEnd.d.ts
declare const AlignHorizontalDistributeEnd: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AlignHorizontalDistributeStart.d.ts
declare const AlignHorizontalDistributeStart: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AlignHorizontalJustifyCenter.d.ts
declare const AlignHorizontalJustifyCenter: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AlignHorizontalJustifyEnd.d.ts
declare const AlignHorizontalJustifyEnd: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AlignHorizontalJustifyStart.d.ts
declare const AlignHorizontalJustifyStart: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AlignHorizontalSpaceAround.d.ts
declare const AlignHorizontalSpaceAround: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AlignHorizontalSpaceBetween.d.ts
declare const AlignHorizontalSpaceBetween: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AlignJustify.d.ts
declare const AlignJustify: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AlignLeft.d.ts
declare const AlignLeft: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AlignRight.d.ts
declare const AlignRight: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AlignStartHorizontal.d.ts
declare const AlignStartHorizontal: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AlignStartVertical.d.ts
declare const AlignStartVertical: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AlignVerticalDistributeCenter.d.ts
declare const AlignVerticalDistributeCenter: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AlignVerticalDistributeEnd.d.ts
declare const AlignVerticalDistributeEnd: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AlignVerticalDistributeStart.d.ts
declare const AlignVerticalDistributeStart: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AlignVerticalJustifyCenter.d.ts
declare const AlignVerticalJustifyCenter: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AlignVerticalJustifyEnd.d.ts
declare const AlignVerticalJustifyEnd: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AlignVerticalJustifyStart.d.ts
declare const AlignVerticalJustifyStart: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AlignVerticalSpaceAround.d.ts
declare const AlignVerticalSpaceAround: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AlignVerticalSpaceBetween.d.ts
declare const AlignVerticalSpaceBetween: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Ambulance.d.ts
declare const Ambulance: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Ampersand.d.ts
declare const Ampersand: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Ampersands.d.ts
declare const Ampersands: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Amphora.d.ts
declare const Amphora: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Anchor.d.ts
declare const Anchor: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Angry.d.ts
declare const Angry: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Annoyed.d.ts
declare const Annoyed: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Antenna.d.ts
declare const Antenna: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Anvil.d.ts
declare const Anvil: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Aperture.d.ts
declare const Aperture: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AppWindowMac.d.ts
declare const AppWindowMac: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AppWindow.d.ts
declare const AppWindow: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Apple.d.ts
declare const Apple: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArchiveRestore.d.ts
declare const ArchiveRestore: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArchiveX.d.ts
declare const ArchiveX: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Archive.d.ts
declare const Archive: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Armchair.d.ts
declare const Armchair: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowBigDownDash.d.ts
declare const ArrowBigDownDash: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowBigDown.d.ts
declare const ArrowBigDown: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowBigLeftDash.d.ts
declare const ArrowBigLeftDash: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowBigLeft.d.ts
declare const ArrowBigLeft: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowBigRightDash.d.ts
declare const ArrowBigRightDash: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowBigRight.d.ts
declare const ArrowBigRight: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowBigUpDash.d.ts
declare const ArrowBigUpDash: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowBigUp.d.ts
declare const ArrowBigUp: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowDown01.d.ts
declare const ArrowDown01: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowDown10.d.ts
declare const ArrowDown10: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowDownAZ.d.ts
declare const ArrowDownAZ: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowDownFromLine.d.ts
declare const ArrowDownFromLine: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowDownLeft.d.ts
declare const ArrowDownLeft: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowDownNarrowWide.d.ts
declare const ArrowDownNarrowWide: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowDownRight.d.ts
declare const ArrowDownRight: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowDownToDot.d.ts
declare const ArrowDownToDot: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowDownToLine.d.ts
declare const ArrowDownToLine: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowDownUp.d.ts
declare const ArrowDownUp: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowDownWideNarrow.d.ts
declare const ArrowDownWideNarrow: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowDownZA.d.ts
declare const ArrowDownZA: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowDown.d.ts
declare const ArrowDown: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowLeftFromLine.d.ts
declare const ArrowLeftFromLine: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowLeftRight.d.ts
declare const ArrowLeftRight: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowLeftToLine.d.ts
declare const ArrowLeftToLine: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowLeft.d.ts
declare const ArrowLeft: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowRightFromLine.d.ts
declare const ArrowRightFromLine: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowRightLeft.d.ts
declare const ArrowRightLeft: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowRightToLine.d.ts
declare const ArrowRightToLine: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowRight.d.ts
declare const ArrowRight: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowUp01.d.ts
declare const ArrowUp01: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowUp10.d.ts
declare const ArrowUp10: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowUpAZ.d.ts
declare const ArrowUpAZ: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowUpDown.d.ts
declare const ArrowUpDown: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowUpFromDot.d.ts
declare const ArrowUpFromDot: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowUpFromLine.d.ts
declare const ArrowUpFromLine: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowUpLeft.d.ts
declare const ArrowUpLeft: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowUpNarrowWide.d.ts
declare const ArrowUpNarrowWide: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowUpRight.d.ts
declare const ArrowUpRight: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowUpToLine.d.ts
declare const ArrowUpToLine: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowUpWideNarrow.d.ts
declare const ArrowUpWideNarrow: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowUpZA.d.ts
declare const ArrowUpZA: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowUp.d.ts
declare const ArrowUp: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ArrowsUpFromLine.d.ts
declare const ArrowsUpFromLine: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Asterisk.d.ts
declare const Asterisk: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AtSign.d.ts
declare const AtSign: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Atom.d.ts
declare const Atom: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AudioLines.d.ts
declare const AudioLines: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/AudioWaveform.d.ts
declare const AudioWaveform: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Award.d.ts
declare const Award: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Axe.d.ts
declare const Axe: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Axis3d.d.ts
declare const Axis3d: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Baby.d.ts
declare const Baby: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Backpack.d.ts
declare const Backpack: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BadgeAlert.d.ts
declare const BadgeAlert: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BadgeCent.d.ts
declare const BadgeCent: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BadgeCheck.d.ts
declare const BadgeCheck: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BadgeDollarSign.d.ts
declare const BadgeDollarSign: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BadgeEuro.d.ts
declare const BadgeEuro: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BadgeHelp.d.ts
declare const BadgeHelp: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BadgeIndianRupee.d.ts
declare const BadgeIndianRupee: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BadgeInfo.d.ts
declare const BadgeInfo: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BadgeJapaneseYen.d.ts
declare const BadgeJapaneseYen: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BadgeMinus.d.ts
declare const BadgeMinus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BadgePercent.d.ts
declare const BadgePercent: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BadgePlus.d.ts
declare const BadgePlus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BadgePoundSterling.d.ts
declare const BadgePoundSterling: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BadgeRussianRuble.d.ts
declare const BadgeRussianRuble: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BadgeSwissFranc.d.ts
declare const BadgeSwissFranc: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BadgeX.d.ts
declare const BadgeX: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Badge.d.ts
declare const Badge: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BaggageClaim.d.ts
declare const BaggageClaim: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Ban.d.ts
declare const Ban: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Banana.d.ts
declare const Banana: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Bandage.d.ts
declare const Bandage: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Banknote.d.ts
declare const Banknote: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Barcode.d.ts
declare const Barcode: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Baseline.d.ts
declare const Baseline: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Bath.d.ts
declare const Bath: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BatteryCharging.d.ts
declare const BatteryCharging: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BatteryFull.d.ts
declare const BatteryFull: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BatteryLow.d.ts
declare const BatteryLow: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BatteryMedium.d.ts
declare const BatteryMedium: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BatteryPlus.d.ts
declare const BatteryPlus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BatteryWarning.d.ts
declare const BatteryWarning: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Battery.d.ts
declare const Battery: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Beaker.d.ts
declare const Beaker: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BeanOff.d.ts
declare const BeanOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Bean.d.ts
declare const Bean: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BedDouble.d.ts
declare const BedDouble: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BedSingle.d.ts
declare const BedSingle: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Bed.d.ts
declare const Bed: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Beef.d.ts
declare const Beef: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BeerOff.d.ts
declare const BeerOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Beer.d.ts
declare const Beer: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BellDot.d.ts
declare const BellDot: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BellElectric.d.ts
declare const BellElectric: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BellMinus.d.ts
declare const BellMinus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BellOff.d.ts
declare const BellOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BellPlus.d.ts
declare const BellPlus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BellRing.d.ts
declare const BellRing: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Bell.d.ts
declare const Bell: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BetweenHorizontalEnd.d.ts
declare const BetweenHorizontalEnd: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BetweenHorizontalStart.d.ts
declare const BetweenHorizontalStart: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BetweenVerticalEnd.d.ts
declare const BetweenVerticalEnd: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BetweenVerticalStart.d.ts
declare const BetweenVerticalStart: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BicepsFlexed.d.ts
declare const BicepsFlexed: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Bike.d.ts
declare const Bike: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Binary.d.ts
declare const Binary: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Binoculars.d.ts
declare const Binoculars: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Biohazard.d.ts
declare const Biohazard: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Bird.d.ts
declare const Bird: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Bitcoin.d.ts
declare const Bitcoin: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Blend.d.ts
declare const Blend: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Blinds.d.ts
declare const Blinds: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Blocks.d.ts
declare const Blocks: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BluetoothConnected.d.ts
declare const BluetoothConnected: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BluetoothOff.d.ts
declare const BluetoothOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BluetoothSearching.d.ts
declare const BluetoothSearching: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Bluetooth.d.ts
declare const Bluetooth: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Bold.d.ts
declare const Bold: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Bolt.d.ts
declare const Bolt: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Bomb.d.ts
declare const Bomb: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Bone.d.ts
declare const Bone: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BookA.d.ts
declare const BookA: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BookAudio.d.ts
declare const BookAudio: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BookCheck.d.ts
declare const BookCheck: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BookCopy.d.ts
declare const BookCopy: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BookDashed.d.ts
declare const BookDashed: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BookDown.d.ts
declare const BookDown: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BookHeadphones.d.ts
declare const BookHeadphones: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BookHeart.d.ts
declare const BookHeart: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BookImage.d.ts
declare const BookImage: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BookKey.d.ts
declare const BookKey: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BookLock.d.ts
declare const BookLock: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BookMarked.d.ts
declare const BookMarked: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BookMinus.d.ts
declare const BookMinus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BookOpenCheck.d.ts
declare const BookOpenCheck: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BookOpenText.d.ts
declare const BookOpenText: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BookOpen.d.ts
declare const BookOpen: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BookPlus.d.ts
declare const BookPlus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BookText.d.ts
declare const BookText: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BookType.d.ts
declare const BookType: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BookUp2.d.ts
declare const BookUp2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BookUp.d.ts
declare const BookUp: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BookUser.d.ts
declare const BookUser: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BookX.d.ts
declare const BookX: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Book.d.ts
declare const Book: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BookmarkCheck.d.ts
declare const BookmarkCheck: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BookmarkMinus.d.ts
declare const BookmarkMinus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BookmarkPlus.d.ts
declare const BookmarkPlus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BookmarkX.d.ts
declare const BookmarkX: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Bookmark.d.ts
declare const Bookmark: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BoomBox.d.ts
declare const BoomBox: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BotMessageSquare.d.ts
declare const BotMessageSquare: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BotOff.d.ts
declare const BotOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Bot.d.ts
declare const Bot: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Box.d.ts
declare const Box: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Boxes.d.ts
declare const Boxes: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Braces.d.ts
declare const Braces: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Brackets.d.ts
declare const Brackets: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BrainCircuit.d.ts
declare const BrainCircuit: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BrainCog.d.ts
declare const BrainCog: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Brain.d.ts
declare const Brain: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BrickWall.d.ts
declare const BrickWall: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BriefcaseBusiness.d.ts
declare const BriefcaseBusiness: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BriefcaseConveyorBelt.d.ts
declare const BriefcaseConveyorBelt: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BriefcaseMedical.d.ts
declare const BriefcaseMedical: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Briefcase.d.ts
declare const Briefcase: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BringToFront.d.ts
declare const BringToFront: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Brush.d.ts
declare const Brush: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BugOff.d.ts
declare const BugOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BugPlay.d.ts
declare const BugPlay: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Bug.d.ts
declare const Bug: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Building2.d.ts
declare const Building2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Building.d.ts
declare const Building: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/BusFront.d.ts
declare const BusFront: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Bus.d.ts
declare const Bus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CableCar.d.ts
declare const CableCar: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Cable.d.ts
declare const Cable: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CakeSlice.d.ts
declare const CakeSlice: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Cake.d.ts
declare const Cake: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Calculator.d.ts
declare const Calculator: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Calendar1.d.ts
declare const Calendar1: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CalendarArrowDown.d.ts
declare const CalendarArrowDown: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CalendarArrowUp.d.ts
declare const CalendarArrowUp: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CalendarCheck2.d.ts
declare const CalendarCheck2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CalendarCheck.d.ts
declare const CalendarCheck: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CalendarClock.d.ts
declare const CalendarClock: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CalendarCog.d.ts
declare const CalendarCog: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CalendarDays.d.ts
declare const CalendarDays: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CalendarFold.d.ts
declare const CalendarFold: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CalendarHeart.d.ts
declare const CalendarHeart: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CalendarMinus2.d.ts
declare const CalendarMinus2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CalendarMinus.d.ts
declare const CalendarMinus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CalendarOff.d.ts
declare const CalendarOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CalendarPlus2.d.ts
declare const CalendarPlus2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CalendarPlus.d.ts
declare const CalendarPlus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CalendarRange.d.ts
declare const CalendarRange: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CalendarSearch.d.ts
declare const CalendarSearch: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CalendarSync.d.ts
declare const CalendarSync: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CalendarX2.d.ts
declare const CalendarX2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CalendarX.d.ts
declare const CalendarX: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Calendar.d.ts
declare const Calendar: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CameraOff.d.ts
declare const CameraOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Camera.d.ts
declare const Camera: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CandyCane.d.ts
declare const CandyCane: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CandyOff.d.ts
declare const CandyOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Candy.d.ts
declare const Candy: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Cannabis.d.ts
declare const Cannabis: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CaptionsOff.d.ts
declare const CaptionsOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Captions.d.ts
declare const Captions: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CarFront.d.ts
declare const CarFront: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CarTaxiFront.d.ts
declare const CarTaxiFront: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Car.d.ts
declare const Car: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Caravan.d.ts
declare const Caravan: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Carrot.d.ts
declare const Carrot: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CaseLower.d.ts
declare const CaseLower: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CaseSensitive.d.ts
declare const CaseSensitive: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CaseUpper.d.ts
declare const CaseUpper: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CassetteTape.d.ts
declare const CassetteTape: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Cast.d.ts
declare const Cast: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Castle.d.ts
declare const Castle: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Cat.d.ts
declare const Cat: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Cctv.d.ts
declare const Cctv: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChartArea.d.ts
declare const ChartArea: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChartBarBig.d.ts
declare const ChartBarBig: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChartBarDecreasing.d.ts
declare const ChartBarDecreasing: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChartBarIncreasing.d.ts
declare const ChartBarIncreasing: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChartBarStacked.d.ts
declare const ChartBarStacked: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChartBar.d.ts
declare const ChartBar: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChartCandlestick.d.ts
declare const ChartCandlestick: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChartColumnBig.d.ts
declare const ChartColumnBig: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChartColumnDecreasing.d.ts
declare const ChartColumnDecreasing: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChartColumnIncreasing.d.ts
declare const ChartColumnIncreasing: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChartColumnStacked.d.ts
declare const ChartColumnStacked: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChartColumn.d.ts
declare const ChartColumn: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChartGantt.d.ts
declare const ChartGantt: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChartLine.d.ts
declare const ChartLine: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChartNetwork.d.ts
declare const ChartNetwork: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChartNoAxesColumnDecreasing.d.ts
declare const ChartNoAxesColumnDecreasing: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChartNoAxesColumnIncreasing.d.ts
declare const ChartNoAxesColumnIncreasing: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChartNoAxesColumn.d.ts
declare const ChartNoAxesColumn: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChartNoAxesCombined.d.ts
declare const ChartNoAxesCombined: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChartNoAxesGantt.d.ts
declare const ChartNoAxesGantt: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChartPie.d.ts
declare const ChartPie: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChartScatter.d.ts
declare const ChartScatter: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChartSpline.d.ts
declare const ChartSpline: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CheckCheck.d.ts
declare const CheckCheck: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Check.d.ts
declare const Check: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChefHat.d.ts
declare const ChefHat: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Cherry.d.ts
declare const Cherry: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChevronDown.d.ts
declare const ChevronDown: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChevronFirst.d.ts
declare const ChevronFirst: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChevronLast.d.ts
declare const ChevronLast: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChevronLeft.d.ts
declare const ChevronLeft: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChevronRight.d.ts
declare const ChevronRight: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChevronUp.d.ts
declare const ChevronUp: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChevronsDownUp.d.ts
declare const ChevronsDownUp: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChevronsDown.d.ts
declare const ChevronsDown: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChevronsLeftRightEllipsis.d.ts
declare const ChevronsLeftRightEllipsis: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChevronsLeftRight.d.ts
declare const ChevronsLeftRight: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChevronsLeft.d.ts
declare const ChevronsLeft: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChevronsRightLeft.d.ts
declare const ChevronsRightLeft: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChevronsRight.d.ts
declare const ChevronsRight: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChevronsUpDown.d.ts
declare const ChevronsUpDown: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ChevronsUp.d.ts
declare const ChevronsUp: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Chrome.d.ts
declare const Chrome: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Church.d.ts
declare const Church: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CigaretteOff.d.ts
declare const CigaretteOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Cigarette.d.ts
declare const Cigarette: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CircleAlert.d.ts
declare const CircleAlert: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CircleArrowDown.d.ts
declare const CircleArrowDown: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CircleArrowLeft.d.ts
declare const CircleArrowLeft: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CircleArrowOutDownLeft.d.ts
declare const CircleArrowOutDownLeft: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CircleArrowOutDownRight.d.ts
declare const CircleArrowOutDownRight: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CircleArrowOutUpLeft.d.ts
declare const CircleArrowOutUpLeft: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CircleArrowOutUpRight.d.ts
declare const CircleArrowOutUpRight: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CircleArrowRight.d.ts
declare const CircleArrowRight: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CircleArrowUp.d.ts
declare const CircleArrowUp: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CircleCheckBig.d.ts
declare const CircleCheckBig: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CircleCheck.d.ts
declare const CircleCheck: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CircleChevronDown.d.ts
declare const CircleChevronDown: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CircleChevronLeft.d.ts
declare const CircleChevronLeft: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CircleChevronRight.d.ts
declare const CircleChevronRight: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CircleChevronUp.d.ts
declare const CircleChevronUp: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CircleDashed.d.ts
declare const CircleDashed: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CircleDivide.d.ts
declare const CircleDivide: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CircleDollarSign.d.ts
declare const CircleDollarSign: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CircleDotDashed.d.ts
declare const CircleDotDashed: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CircleDot.d.ts
declare const CircleDot: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CircleEllipsis.d.ts
declare const CircleEllipsis: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CircleEqual.d.ts
declare const CircleEqual: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CircleFadingArrowUp.d.ts
declare const CircleFadingArrowUp: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CircleFadingPlus.d.ts
declare const CircleFadingPlus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CircleGauge.d.ts
declare const CircleGauge: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CircleHelp.d.ts
declare const CircleHelp: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CircleMinus.d.ts
declare const CircleMinus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CircleOff.d.ts
declare const CircleOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CircleParkingOff.d.ts
declare const CircleParkingOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CircleParking.d.ts
declare const CircleParking: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CirclePause.d.ts
declare const CirclePause: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CirclePercent.d.ts
declare const CirclePercent: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CirclePlay.d.ts
declare const CirclePlay: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CirclePlus.d.ts
declare const CirclePlus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CirclePower.d.ts
declare const CirclePower: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CircleSlash2.d.ts
declare const CircleSlash2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CircleSlash.d.ts
declare const CircleSlash: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CircleSmall.d.ts
declare const CircleSmall: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CircleStop.d.ts
declare const CircleStop: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CircleUserRound.d.ts
declare const CircleUserRound: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CircleUser.d.ts
declare const CircleUser: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CircleX.d.ts
declare const CircleX: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Circle.d.ts
declare const Circle: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CircuitBoard.d.ts
declare const CircuitBoard: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Citrus.d.ts
declare const Citrus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Clapperboard.d.ts
declare const Clapperboard: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ClipboardCheck.d.ts
declare const ClipboardCheck: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ClipboardCopy.d.ts
declare const ClipboardCopy: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ClipboardList.d.ts
declare const ClipboardList: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ClipboardMinus.d.ts
declare const ClipboardMinus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ClipboardPaste.d.ts
declare const ClipboardPaste: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ClipboardPenLine.d.ts
declare const ClipboardPenLine: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ClipboardPen.d.ts
declare const ClipboardPen: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ClipboardPlus.d.ts
declare const ClipboardPlus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ClipboardType.d.ts
declare const ClipboardType: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ClipboardX.d.ts
declare const ClipboardX: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Clipboard.d.ts
declare const Clipboard: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Clock1.d.ts
declare const Clock1: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Clock10.d.ts
declare const Clock10: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Clock11.d.ts
declare const Clock11: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Clock12.d.ts
declare const Clock12: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Clock2.d.ts
declare const Clock2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Clock3.d.ts
declare const Clock3: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Clock4.d.ts
declare const Clock4: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Clock5.d.ts
declare const Clock5: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Clock6.d.ts
declare const Clock6: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Clock7.d.ts
declare const Clock7: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Clock8.d.ts
declare const Clock8: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Clock9.d.ts
declare const Clock9: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ClockAlert.d.ts
declare const ClockAlert: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ClockArrowDown.d.ts
declare const ClockArrowDown: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ClockArrowUp.d.ts
declare const ClockArrowUp: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Clock.d.ts
declare const Clock: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CloudAlert.d.ts
declare const CloudAlert: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CloudCog.d.ts
declare const CloudCog: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CloudDownload.d.ts
declare const CloudDownload: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CloudDrizzle.d.ts
declare const CloudDrizzle: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CloudFog.d.ts
declare const CloudFog: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CloudHail.d.ts
declare const CloudHail: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CloudLightning.d.ts
declare const CloudLightning: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CloudMoonRain.d.ts
declare const CloudMoonRain: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CloudMoon.d.ts
declare const CloudMoon: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CloudOff.d.ts
declare const CloudOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CloudRainWind.d.ts
declare const CloudRainWind: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CloudRain.d.ts
declare const CloudRain: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CloudSnow.d.ts
declare const CloudSnow: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CloudSunRain.d.ts
declare const CloudSunRain: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CloudSun.d.ts
declare const CloudSun: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CloudUpload.d.ts
declare const CloudUpload: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Cloud.d.ts
declare const Cloud: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Cloudy.d.ts
declare const Cloudy: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Clover.d.ts
declare const Clover: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Club.d.ts
declare const Club: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CodeXml.d.ts
declare const CodeXml: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Code.d.ts
declare const Code: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Codepen.d.ts
declare const Codepen: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Codesandbox.d.ts
declare const Codesandbox: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Coffee.d.ts
declare const Coffee: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Cog.d.ts
declare const Cog: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Coins.d.ts
declare const Coins: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Columns2.d.ts
declare const Columns2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Columns3.d.ts
declare const Columns3: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Columns4.d.ts
declare const Columns4: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Combine.d.ts
declare const Combine: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Command.d.ts
declare const Command: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Compass.d.ts
declare const Compass: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Component.d.ts
declare const Component: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Computer.d.ts
declare const Computer: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ConciergeBell.d.ts
declare const ConciergeBell: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Cone.d.ts
declare const Cone: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Construction.d.ts
declare const Construction: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ContactRound.d.ts
declare const ContactRound: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Contact.d.ts
declare const Contact: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Container.d.ts
declare const Container: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Contrast.d.ts
declare const Contrast: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Cookie.d.ts
declare const Cookie: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CookingPot.d.ts
declare const CookingPot: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CopyCheck.d.ts
declare const CopyCheck: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CopyMinus.d.ts
declare const CopyMinus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CopyPlus.d.ts
declare const CopyPlus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CopySlash.d.ts
declare const CopySlash: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CopyX.d.ts
declare const CopyX: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Copy.d.ts
declare const Copy: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Copyleft.d.ts
declare const Copyleft: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Copyright.d.ts
declare const Copyright: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CornerDownLeft.d.ts
declare const CornerDownLeft: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CornerDownRight.d.ts
declare const CornerDownRight: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CornerLeftDown.d.ts
declare const CornerLeftDown: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CornerLeftUp.d.ts
declare const CornerLeftUp: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CornerRightDown.d.ts
declare const CornerRightDown: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CornerRightUp.d.ts
declare const CornerRightUp: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CornerUpLeft.d.ts
declare const CornerUpLeft: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CornerUpRight.d.ts
declare const CornerUpRight: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Cpu.d.ts
declare const Cpu: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CreativeCommons.d.ts
declare const CreativeCommons: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CreditCard.d.ts
declare const CreditCard: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Croissant.d.ts
declare const Croissant: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Crop.d.ts
declare const Crop: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Cross.d.ts
declare const Cross: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Crosshair.d.ts
declare const Crosshair: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Crown.d.ts
declare const Crown: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Cuboid.d.ts
declare const Cuboid: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/CupSoda.d.ts
declare const CupSoda: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Currency.d.ts
declare const Currency: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Cylinder.d.ts
declare const Cylinder: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Dam.d.ts
declare const Dam: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/DatabaseBackup.d.ts
declare const DatabaseBackup: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/DatabaseZap.d.ts
declare const DatabaseZap: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Database.d.ts
declare const Database: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Delete.d.ts
declare const Delete: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Dessert.d.ts
declare const Dessert: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Diameter.d.ts
declare const Diameter: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/DiamondMinus.d.ts
declare const DiamondMinus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/DiamondPercent.d.ts
declare const DiamondPercent: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/DiamondPlus.d.ts
declare const DiamondPlus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Diamond.d.ts
declare const Diamond: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Dice1.d.ts
declare const Dice1: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Dice2.d.ts
declare const Dice2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Dice3.d.ts
declare const Dice3: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Dice4.d.ts
declare const Dice4: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Dice5.d.ts
declare const Dice5: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Dice6.d.ts
declare const Dice6: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Dices.d.ts
declare const Dices: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Diff.d.ts
declare const Diff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Disc2.d.ts
declare const Disc2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Disc3.d.ts
declare const Disc3: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/DiscAlbum.d.ts
declare const DiscAlbum: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Disc.d.ts
declare const Disc: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Divide.d.ts
declare const Divide: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/DnaOff.d.ts
declare const DnaOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Dna.d.ts
declare const Dna: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Dock.d.ts
declare const Dock: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Dog.d.ts
declare const Dog: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/DollarSign.d.ts
declare const DollarSign: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Donut.d.ts
declare const Donut: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/DoorClosed.d.ts
declare const DoorClosed: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/DoorOpen.d.ts
declare const DoorOpen: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Dot.d.ts
declare const Dot: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Download.d.ts
declare const Download: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/DraftingCompass.d.ts
declare const DraftingCompass: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Drama.d.ts
declare const Drama: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Dribbble.d.ts
declare const Dribbble: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Drill.d.ts
declare const Drill: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/DropletOff.d.ts
declare const DropletOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Droplet.d.ts
declare const Droplet: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Droplets.d.ts
declare const Droplets: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Drum.d.ts
declare const Drum: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Drumstick.d.ts
declare const Drumstick: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Dumbbell.d.ts
declare const Dumbbell: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/EarOff.d.ts
declare const EarOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Ear.d.ts
declare const Ear: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/EarthLock.d.ts
declare const EarthLock: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Earth.d.ts
declare const Earth: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Eclipse.d.ts
declare const Eclipse: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/EggFried.d.ts
declare const EggFried: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/EggOff.d.ts
declare const EggOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Egg.d.ts
declare const Egg: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/EllipsisVertical.d.ts
declare const EllipsisVertical: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Ellipsis.d.ts
declare const Ellipsis: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/EqualApproximately.d.ts
declare const EqualApproximately: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/EqualNot.d.ts
declare const EqualNot: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Equal.d.ts
declare const Equal: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Eraser.d.ts
declare const Eraser: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/EthernetPort.d.ts
declare const EthernetPort: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Euro.d.ts
declare const Euro: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Expand.d.ts
declare const Expand: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ExternalLink.d.ts
declare const ExternalLink: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/EyeClosed.d.ts
declare const EyeClosed: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/EyeOff.d.ts
declare const EyeOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Eye.d.ts
declare const Eye: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Facebook.d.ts
declare const Facebook: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Factory.d.ts
declare const Factory: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Fan.d.ts
declare const Fan: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FastForward.d.ts
declare const FastForward: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Feather.d.ts
declare const Feather: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Fence.d.ts
declare const Fence: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FerrisWheel.d.ts
declare const FerrisWheel: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Figma.d.ts
declare const Figma: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileArchive.d.ts
declare const FileArchive: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileAudio2.d.ts
declare const FileAudio2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileAudio.d.ts
declare const FileAudio: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileAxis3d.d.ts
declare const FileAxis3d: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileBadge2.d.ts
declare const FileBadge2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileBadge.d.ts
declare const FileBadge: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileBox.d.ts
declare const FileBox: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileChartColumnIncreasing.d.ts
declare const FileChartColumnIncreasing: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileChartColumn.d.ts
declare const FileChartColumn: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileChartLine.d.ts
declare const FileChartLine: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileChartPie.d.ts
declare const FileChartPie: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileCheck2.d.ts
declare const FileCheck2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileCheck.d.ts
declare const FileCheck: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileClock.d.ts
declare const FileClock: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileCode2.d.ts
declare const FileCode2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileCode.d.ts
declare const FileCode: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileCog.d.ts
declare const FileCog: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileDiff.d.ts
declare const FileDiff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileDigit.d.ts
declare const FileDigit: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileDown.d.ts
declare const FileDown: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileHeart.d.ts
declare const FileHeart: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileImage.d.ts
declare const FileImage: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileInput.d.ts
declare const FileInput: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileJson2.d.ts
declare const FileJson2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileJson.d.ts
declare const FileJson: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileKey2.d.ts
declare const FileKey2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileKey.d.ts
declare const FileKey: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileLock2.d.ts
declare const FileLock2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileLock.d.ts
declare const FileLock: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileMinus2.d.ts
declare const FileMinus2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileMinus.d.ts
declare const FileMinus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileMusic.d.ts
declare const FileMusic: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileOutput.d.ts
declare const FileOutput: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FilePenLine.d.ts
declare const FilePenLine: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FilePen.d.ts
declare const FilePen: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FilePlus2.d.ts
declare const FilePlus2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FilePlus.d.ts
declare const FilePlus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileQuestion.d.ts
declare const FileQuestion: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileScan.d.ts
declare const FileScan: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileSearch2.d.ts
declare const FileSearch2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileSearch.d.ts
declare const FileSearch: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileSliders.d.ts
declare const FileSliders: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileSpreadsheet.d.ts
declare const FileSpreadsheet: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileStack.d.ts
declare const FileStack: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileSymlink.d.ts
declare const FileSymlink: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileTerminal.d.ts
declare const FileTerminal: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileText.d.ts
declare const FileText: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileType2.d.ts
declare const FileType2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileType.d.ts
declare const FileType: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileUp.d.ts
declare const FileUp: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileUser.d.ts
declare const FileUser: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileVideo2.d.ts
declare const FileVideo2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileVideo.d.ts
declare const FileVideo: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileVolume2.d.ts
declare const FileVolume2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileVolume.d.ts
declare const FileVolume: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileWarning.d.ts
declare const FileWarning: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileX2.d.ts
declare const FileX2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FileX.d.ts
declare const FileX: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/File.d.ts
declare const File: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Files.d.ts
declare const Files: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Film.d.ts
declare const Film: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FilterX.d.ts
declare const FilterX: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Filter.d.ts
declare const Filter: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Fingerprint.d.ts
declare const Fingerprint: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FireExtinguisher.d.ts
declare const FireExtinguisher: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FishOff.d.ts
declare const FishOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FishSymbol.d.ts
declare const FishSymbol: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Fish.d.ts
declare const Fish: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FlagOff.d.ts
declare const FlagOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FlagTriangleLeft.d.ts
declare const FlagTriangleLeft: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FlagTriangleRight.d.ts
declare const FlagTriangleRight: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Flag.d.ts
declare const Flag: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FlameKindling.d.ts
declare const FlameKindling: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Flame.d.ts
declare const Flame: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FlashlightOff.d.ts
declare const FlashlightOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Flashlight.d.ts
declare const Flashlight: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FlaskConicalOff.d.ts
declare const FlaskConicalOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FlaskConical.d.ts
declare const FlaskConical: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FlaskRound.d.ts
declare const FlaskRound: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FlipHorizontal2.d.ts
declare const FlipHorizontal2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FlipHorizontal.d.ts
declare const FlipHorizontal: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FlipVertical2.d.ts
declare const FlipVertical2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FlipVertical.d.ts
declare const FlipVertical: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Flower2.d.ts
declare const Flower2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Flower.d.ts
declare const Flower: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Focus.d.ts
declare const Focus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FoldHorizontal.d.ts
declare const FoldHorizontal: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FoldVertical.d.ts
declare const FoldVertical: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FolderArchive.d.ts
declare const FolderArchive: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FolderCheck.d.ts
declare const FolderCheck: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FolderClock.d.ts
declare const FolderClock: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FolderClosed.d.ts
declare const FolderClosed: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FolderCode.d.ts
declare const FolderCode: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FolderCog.d.ts
declare const FolderCog: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FolderDot.d.ts
declare const FolderDot: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FolderDown.d.ts
declare const FolderDown: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FolderGit2.d.ts
declare const FolderGit2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FolderGit.d.ts
declare const FolderGit: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FolderHeart.d.ts
declare const FolderHeart: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FolderInput.d.ts
declare const FolderInput: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FolderKanban.d.ts
declare const FolderKanban: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FolderKey.d.ts
declare const FolderKey: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FolderLock.d.ts
declare const FolderLock: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FolderMinus.d.ts
declare const FolderMinus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FolderOpenDot.d.ts
declare const FolderOpenDot: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FolderOpen.d.ts
declare const FolderOpen: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FolderOutput.d.ts
declare const FolderOutput: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FolderPen.d.ts
declare const FolderPen: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FolderPlus.d.ts
declare const FolderPlus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FolderRoot.d.ts
declare const FolderRoot: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FolderSearch2.d.ts
declare const FolderSearch2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FolderSearch.d.ts
declare const FolderSearch: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FolderSymlink.d.ts
declare const FolderSymlink: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FolderSync.d.ts
declare const FolderSync: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FolderTree.d.ts
declare const FolderTree: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FolderUp.d.ts
declare const FolderUp: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/FolderX.d.ts
declare const FolderX: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Folder.d.ts
declare const Folder: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Folders.d.ts
declare const Folders: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Footprints.d.ts
declare const Footprints: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Forklift.d.ts
declare const Forklift: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Forward.d.ts
declare const Forward: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Frame.d.ts
declare const Frame: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Framer.d.ts
declare const Framer: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Frown.d.ts
declare const Frown: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Fuel.d.ts
declare const Fuel: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Fullscreen.d.ts
declare const Fullscreen: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/GalleryHorizontalEnd.d.ts
declare const GalleryHorizontalEnd: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/GalleryHorizontal.d.ts
declare const GalleryHorizontal: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/GalleryThumbnails.d.ts
declare const GalleryThumbnails: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/GalleryVerticalEnd.d.ts
declare const GalleryVerticalEnd: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/GalleryVertical.d.ts
declare const GalleryVertical: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Gamepad2.d.ts
declare const Gamepad2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Gamepad.d.ts
declare const Gamepad: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Gauge.d.ts
declare const Gauge: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Gavel.d.ts
declare const Gavel: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Gem.d.ts
declare const Gem: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Ghost.d.ts
declare const Ghost: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Gift.d.ts
declare const Gift: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/GitBranchPlus.d.ts
declare const GitBranchPlus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/GitBranch.d.ts
declare const GitBranch: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/GitCommitHorizontal.d.ts
declare const GitCommitHorizontal: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/GitCommitVertical.d.ts
declare const GitCommitVertical: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/GitCompareArrows.d.ts
declare const GitCompareArrows: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/GitCompare.d.ts
declare const GitCompare: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/GitFork.d.ts
declare const GitFork: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/GitGraph.d.ts
declare const GitGraph: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/GitMerge.d.ts
declare const GitMerge: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/GitPullRequestArrow.d.ts
declare const GitPullRequestArrow: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/GitPullRequestClosed.d.ts
declare const GitPullRequestClosed: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/GitPullRequestCreateArrow.d.ts
declare const GitPullRequestCreateArrow: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/GitPullRequestCreate.d.ts
declare const GitPullRequestCreate: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/GitPullRequestDraft.d.ts
declare const GitPullRequestDraft: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/GitPullRequest.d.ts
declare const GitPullRequest: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Github.d.ts
declare const Github: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Gitlab.d.ts
declare const Gitlab: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/GlassWater.d.ts
declare const GlassWater: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Glasses.d.ts
declare const Glasses: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/GlobeLock.d.ts
declare const GlobeLock: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Globe.d.ts
declare const Globe: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Goal.d.ts
declare const Goal: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Grab.d.ts
declare const Grab: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/GraduationCap.d.ts
declare const GraduationCap: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Grape.d.ts
declare const Grape: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Grid2x2Check.d.ts
declare const Grid2x2Check: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Grid2x2Plus.d.ts
declare const Grid2x2Plus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Grid2x2X.d.ts
declare const Grid2x2X: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Grid2x2.d.ts
declare const Grid2x2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Grid3x3.d.ts
declare const Grid3x3: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/GripHorizontal.d.ts
declare const GripHorizontal: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/GripVertical.d.ts
declare const GripVertical: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Grip.d.ts
declare const Grip: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Group.d.ts
declare const Group: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Guitar.d.ts
declare const Guitar: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Ham.d.ts
declare const Ham: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Hammer.d.ts
declare const Hammer: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/HandCoins.d.ts
declare const HandCoins: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/HandHeart.d.ts
declare const HandHeart: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/HandHelping.d.ts
declare const HandHelping: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/HandMetal.d.ts
declare const HandMetal: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/HandPlatter.d.ts
declare const HandPlatter: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Hand.d.ts
declare const Hand: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Handshake.d.ts
declare const Handshake: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/HardDriveDownload.d.ts
declare const HardDriveDownload: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/HardDriveUpload.d.ts
declare const HardDriveUpload: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/HardDrive.d.ts
declare const HardDrive: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/HardHat.d.ts
declare const HardHat: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Hash.d.ts
declare const Hash: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Haze.d.ts
declare const Haze: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/HdmiPort.d.ts
declare const HdmiPort: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Heading1.d.ts
declare const Heading1: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Heading2.d.ts
declare const Heading2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Heading3.d.ts
declare const Heading3: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Heading4.d.ts
declare const Heading4: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Heading5.d.ts
declare const Heading5: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Heading6.d.ts
declare const Heading6: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Heading.d.ts
declare const Heading: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/HeadphoneOff.d.ts
declare const HeadphoneOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Headphones.d.ts
declare const Headphones: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Headset.d.ts
declare const Headset: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/HeartCrack.d.ts
declare const HeartCrack: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/HeartHandshake.d.ts
declare const HeartHandshake: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/HeartOff.d.ts
declare const HeartOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/HeartPulse.d.ts
declare const HeartPulse: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Heart.d.ts
declare const Heart: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Heater.d.ts
declare const Heater: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Hexagon.d.ts
declare const Hexagon: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Highlighter.d.ts
declare const Highlighter: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/History.d.ts
declare const History: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/HopOff.d.ts
declare const HopOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Hop.d.ts
declare const Hop: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Hospital.d.ts
declare const Hospital: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Hotel.d.ts
declare const Hotel: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Hourglass.d.ts
declare const Hourglass: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/HousePlug.d.ts
declare const HousePlug: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/HousePlus.d.ts
declare const HousePlus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/HouseWifi.d.ts
declare const HouseWifi: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/House.d.ts
declare const House: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/IceCreamBowl.d.ts
declare const IceCreamBowl: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/IceCreamCone.d.ts
declare const IceCreamCone: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/IdCard.d.ts
declare const IdCard: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ImageDown.d.ts
declare const ImageDown: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ImageMinus.d.ts
declare const ImageMinus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ImageOff.d.ts
declare const ImageOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ImagePlay.d.ts
declare const ImagePlay: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ImagePlus.d.ts
declare const ImagePlus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ImageUp.d.ts
declare const ImageUp: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ImageUpscale.d.ts
declare const ImageUpscale: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Image.d.ts
declare const Image: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Images.d.ts
declare const Images: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Import.d.ts
declare const Import: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Inbox.d.ts
declare const Inbox: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/IndentDecrease.d.ts
declare const IndentDecrease: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/IndentIncrease.d.ts
declare const IndentIncrease: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/IndianRupee.d.ts
declare const IndianRupee: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/InfinityIcon.d.ts
declare const InfinityIcon: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Info.d.ts
declare const Info: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/InspectionPanel.d.ts
declare const InspectionPanel: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Instagram.d.ts
declare const Instagram: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Italic.d.ts
declare const Italic: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/IterationCcw.d.ts
declare const IterationCcw: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/IterationCw.d.ts
declare const IterationCw: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/JapaneseYen.d.ts
declare const JapaneseYen: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Joystick.d.ts
declare const Joystick: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Kanban.d.ts
declare const Kanban: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/KeyRound.d.ts
declare const KeyRound: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/KeySquare.d.ts
declare const KeySquare: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Key.d.ts
declare const Key: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/KeyboardMusic.d.ts
declare const KeyboardMusic: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/KeyboardOff.d.ts
declare const KeyboardOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Keyboard.d.ts
declare const Keyboard: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/LampCeiling.d.ts
declare const LampCeiling: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/LampDesk.d.ts
declare const LampDesk: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/LampFloor.d.ts
declare const LampFloor: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/LampWallDown.d.ts
declare const LampWallDown: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/LampWallUp.d.ts
declare const LampWallUp: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Lamp.d.ts
declare const Lamp: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/LandPlot.d.ts
declare const LandPlot: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Landmark.d.ts
declare const Landmark: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Languages.d.ts
declare const Languages: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/LaptopMinimalCheck.d.ts
declare const LaptopMinimalCheck: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/LaptopMinimal.d.ts
declare const LaptopMinimal: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Laptop.d.ts
declare const Laptop: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/LassoSelect.d.ts
declare const LassoSelect: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Lasso.d.ts
declare const Lasso: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Laugh.d.ts
declare const Laugh: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Layers2.d.ts
declare const Layers2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Layers.d.ts
declare const Layers: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/LayoutDashboard.d.ts
declare const LayoutDashboard: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/LayoutGrid.d.ts
declare const LayoutGrid: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/LayoutList.d.ts
declare const LayoutList: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/LayoutPanelLeft.d.ts
declare const LayoutPanelLeft: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/LayoutPanelTop.d.ts
declare const LayoutPanelTop: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/LayoutTemplate.d.ts
declare const LayoutTemplate: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Leaf.d.ts
declare const Leaf: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/LeafyGreen.d.ts
declare const LeafyGreen: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Lectern.d.ts
declare const Lectern: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/LetterText.d.ts
declare const LetterText: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/LibraryBig.d.ts
declare const LibraryBig: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Library.d.ts
declare const Library: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/LifeBuoy.d.ts
declare const LifeBuoy: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Ligature.d.ts
declare const Ligature: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/LightbulbOff.d.ts
declare const LightbulbOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Lightbulb.d.ts
declare const Lightbulb: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Link2Off.d.ts
declare const Link2Off: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Link2.d.ts
declare const Link2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Link.d.ts
declare const Link: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Linkedin.d.ts
declare const Linkedin: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ListCheck.d.ts
declare const ListCheck: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ListChecks.d.ts
declare const ListChecks: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ListCollapse.d.ts
declare const ListCollapse: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ListEnd.d.ts
declare const ListEnd: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ListFilterPlus.d.ts
declare const ListFilterPlus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ListFilter.d.ts
declare const ListFilter: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ListMinus.d.ts
declare const ListMinus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ListMusic.d.ts
declare const ListMusic: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ListOrdered.d.ts
declare const ListOrdered: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ListPlus.d.ts
declare const ListPlus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ListRestart.d.ts
declare const ListRestart: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ListStart.d.ts
declare const ListStart: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ListTodo.d.ts
declare const ListTodo: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ListTree.d.ts
declare const ListTree: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ListVideo.d.ts
declare const ListVideo: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ListX.d.ts
declare const ListX: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/List.d.ts
declare const List: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/LoaderCircle.d.ts
declare const LoaderCircle: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/LoaderPinwheel.d.ts
declare const LoaderPinwheel: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Loader.d.ts
declare const Loader: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/LocateFixed.d.ts
declare const LocateFixed: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/LocateOff.d.ts
declare const LocateOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Locate.d.ts
declare const Locate: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/LockKeyholeOpen.d.ts
declare const LockKeyholeOpen: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/LockKeyhole.d.ts
declare const LockKeyhole: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/LockOpen.d.ts
declare const LockOpen: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Lock.d.ts
declare const Lock: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/LogIn.d.ts
declare const LogIn: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/LogOut.d.ts
declare const LogOut: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Logs.d.ts
declare const Logs: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Lollipop.d.ts
declare const Lollipop: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Luggage.d.ts
declare const Luggage: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Magnet.d.ts
declare const Magnet: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MailCheck.d.ts
declare const MailCheck: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MailMinus.d.ts
declare const MailMinus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MailOpen.d.ts
declare const MailOpen: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MailPlus.d.ts
declare const MailPlus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MailQuestion.d.ts
declare const MailQuestion: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MailSearch.d.ts
declare const MailSearch: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MailWarning.d.ts
declare const MailWarning: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MailX.d.ts
declare const MailX: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Mail.d.ts
declare const Mail: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Mailbox.d.ts
declare const Mailbox: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Mails.d.ts
declare const Mails: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MapPinCheckInside.d.ts
declare const MapPinCheckInside: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MapPinCheck.d.ts
declare const MapPinCheck: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MapPinHouse.d.ts
declare const MapPinHouse: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MapPinMinusInside.d.ts
declare const MapPinMinusInside: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MapPinMinus.d.ts
declare const MapPinMinus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MapPinOff.d.ts
declare const MapPinOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MapPinPlusInside.d.ts
declare const MapPinPlusInside: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MapPinPlus.d.ts
declare const MapPinPlus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MapPinXInside.d.ts
declare const MapPinXInside: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MapPinX.d.ts
declare const MapPinX: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MapPin.d.ts
declare const MapPin: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MapPinned.d.ts
declare const MapPinned: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MapPlus.d.ts
declare const MapPlus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Map.d.ts
declare const Map: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MarsStroke.d.ts
declare const MarsStroke: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Mars.d.ts
declare const Mars: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Martini.d.ts
declare const Martini: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Maximize2.d.ts
declare const Maximize2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Maximize.d.ts
declare const Maximize: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Medal.d.ts
declare const Medal: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MegaphoneOff.d.ts
declare const MegaphoneOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Megaphone.d.ts
declare const Megaphone: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Meh.d.ts
declare const Meh: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MemoryStick.d.ts
declare const MemoryStick: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Menu.d.ts
declare const Menu: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Merge.d.ts
declare const Merge: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MessageCircleCode.d.ts
declare const MessageCircleCode: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MessageCircleDashed.d.ts
declare const MessageCircleDashed: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MessageCircleHeart.d.ts
declare const MessageCircleHeart: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MessageCircleMore.d.ts
declare const MessageCircleMore: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MessageCircleOff.d.ts
declare const MessageCircleOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MessageCirclePlus.d.ts
declare const MessageCirclePlus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MessageCircleQuestion.d.ts
declare const MessageCircleQuestion: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MessageCircleReply.d.ts
declare const MessageCircleReply: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MessageCircleWarning.d.ts
declare const MessageCircleWarning: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MessageCircleX.d.ts
declare const MessageCircleX: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MessageCircle.d.ts
declare const MessageCircle: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MessageSquareCode.d.ts
declare const MessageSquareCode: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MessageSquareDashed.d.ts
declare const MessageSquareDashed: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MessageSquareDiff.d.ts
declare const MessageSquareDiff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MessageSquareDot.d.ts
declare const MessageSquareDot: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MessageSquareHeart.d.ts
declare const MessageSquareHeart: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MessageSquareLock.d.ts
declare const MessageSquareLock: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MessageSquareMore.d.ts
declare const MessageSquareMore: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MessageSquareOff.d.ts
declare const MessageSquareOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MessageSquarePlus.d.ts
declare const MessageSquarePlus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MessageSquareQuote.d.ts
declare const MessageSquareQuote: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MessageSquareReply.d.ts
declare const MessageSquareReply: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MessageSquareShare.d.ts
declare const MessageSquareShare: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MessageSquareText.d.ts
declare const MessageSquareText: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MessageSquareWarning.d.ts
declare const MessageSquareWarning: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MessageSquareX.d.ts
declare const MessageSquareX: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MessageSquare.d.ts
declare const MessageSquare: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MessagesSquare.d.ts
declare const MessagesSquare: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MicOff.d.ts
declare const MicOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MicVocal.d.ts
declare const MicVocal: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Mic.d.ts
declare const Mic: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Microchip.d.ts
declare const Microchip: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Microscope.d.ts
declare const Microscope: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Microwave.d.ts
declare const Microwave: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Milestone.d.ts
declare const Milestone: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MilkOff.d.ts
declare const MilkOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Milk.d.ts
declare const Milk: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Minimize2.d.ts
declare const Minimize2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Minimize.d.ts
declare const Minimize: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Minus.d.ts
declare const Minus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MonitorCheck.d.ts
declare const MonitorCheck: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MonitorCog.d.ts
declare const MonitorCog: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MonitorDot.d.ts
declare const MonitorDot: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MonitorDown.d.ts
declare const MonitorDown: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MonitorOff.d.ts
declare const MonitorOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MonitorPause.d.ts
declare const MonitorPause: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MonitorPlay.d.ts
declare const MonitorPlay: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MonitorSmartphone.d.ts
declare const MonitorSmartphone: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MonitorSpeaker.d.ts
declare const MonitorSpeaker: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MonitorStop.d.ts
declare const MonitorStop: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MonitorUp.d.ts
declare const MonitorUp: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MonitorX.d.ts
declare const MonitorX: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Monitor.d.ts
declare const Monitor: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MoonStar.d.ts
declare const MoonStar: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Moon.d.ts
declare const Moon: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MountainSnow.d.ts
declare const MountainSnow: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Mountain.d.ts
declare const Mountain: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MouseOff.d.ts
declare const MouseOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MousePointer2.d.ts
declare const MousePointer2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MousePointerBan.d.ts
declare const MousePointerBan: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MousePointerClick.d.ts
declare const MousePointerClick: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MousePointer.d.ts
declare const MousePointer: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Mouse.d.ts
declare const Mouse: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Move3d.d.ts
declare const Move3d: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MoveDiagonal2.d.ts
declare const MoveDiagonal2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MoveDiagonal.d.ts
declare const MoveDiagonal: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MoveDownLeft.d.ts
declare const MoveDownLeft: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MoveDownRight.d.ts
declare const MoveDownRight: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MoveDown.d.ts
declare const MoveDown: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MoveHorizontal.d.ts
declare const MoveHorizontal: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MoveLeft.d.ts
declare const MoveLeft: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MoveRight.d.ts
declare const MoveRight: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MoveUpLeft.d.ts
declare const MoveUpLeft: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MoveUpRight.d.ts
declare const MoveUpRight: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MoveUp.d.ts
declare const MoveUp: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/MoveVertical.d.ts
declare const MoveVertical: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Move.d.ts
declare const Move: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Music2.d.ts
declare const Music2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Music3.d.ts
declare const Music3: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Music4.d.ts
declare const Music4: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Music.d.ts
declare const Music: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Navigation2Off.d.ts
declare const Navigation2Off: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Navigation2.d.ts
declare const Navigation2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/NavigationOff.d.ts
declare const NavigationOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Navigation.d.ts
declare const Navigation: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Network.d.ts
declare const Network: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Newspaper.d.ts
declare const Newspaper: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Nfc.d.ts
declare const Nfc: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/NonBinary.d.ts
declare const NonBinary: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/NotebookPen.d.ts
declare const NotebookPen: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/NotebookTabs.d.ts
declare const NotebookTabs: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/NotebookText.d.ts
declare const NotebookText: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Notebook.d.ts
declare const Notebook: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/NotepadTextDashed.d.ts
declare const NotepadTextDashed: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/NotepadText.d.ts
declare const NotepadText: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/NutOff.d.ts
declare const NutOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Nut.d.ts
declare const Nut: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/OctagonAlert.d.ts
declare const OctagonAlert: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/OctagonMinus.d.ts
declare const OctagonMinus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/OctagonPause.d.ts
declare const OctagonPause: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/OctagonX.d.ts
declare const OctagonX: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Octagon.d.ts
declare const Octagon: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Omega.d.ts
declare const Omega: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Option.d.ts
declare const Option: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Orbit.d.ts
declare const Orbit: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Origami.d.ts
declare const Origami: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Package2.d.ts
declare const Package2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PackageCheck.d.ts
declare const PackageCheck: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PackageMinus.d.ts
declare const PackageMinus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PackageOpen.d.ts
declare const PackageOpen: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PackagePlus.d.ts
declare const PackagePlus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PackageSearch.d.ts
declare const PackageSearch: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PackageX.d.ts
declare const PackageX: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Package.d.ts
declare const Package: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PaintBucket.d.ts
declare const PaintBucket: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PaintRoller.d.ts
declare const PaintRoller: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PaintbrushVertical.d.ts
declare const PaintbrushVertical: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Paintbrush.d.ts
declare const Paintbrush: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Palette.d.ts
declare const Palette: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PanelBottomClose.d.ts
declare const PanelBottomClose: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PanelBottomDashed.d.ts
declare const PanelBottomDashed: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PanelBottomOpen.d.ts
declare const PanelBottomOpen: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PanelBottom.d.ts
declare const PanelBottom: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PanelLeftClose.d.ts
declare const PanelLeftClose: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PanelLeftDashed.d.ts
declare const PanelLeftDashed: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PanelLeftOpen.d.ts
declare const PanelLeftOpen: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PanelLeft.d.ts
declare const PanelLeft: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PanelRightClose.d.ts
declare const PanelRightClose: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PanelRightDashed.d.ts
declare const PanelRightDashed: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PanelRightOpen.d.ts
declare const PanelRightOpen: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PanelRight.d.ts
declare const PanelRight: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PanelTopClose.d.ts
declare const PanelTopClose: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PanelTopDashed.d.ts
declare const PanelTopDashed: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PanelTopOpen.d.ts
declare const PanelTopOpen: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PanelTop.d.ts
declare const PanelTop: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PanelsLeftBottom.d.ts
declare const PanelsLeftBottom: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PanelsRightBottom.d.ts
declare const PanelsRightBottom: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PanelsTopLeft.d.ts
declare const PanelsTopLeft: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Paperclip.d.ts
declare const Paperclip: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Parentheses.d.ts
declare const Parentheses: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ParkingMeter.d.ts
declare const ParkingMeter: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PartyPopper.d.ts
declare const PartyPopper: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Pause.d.ts
declare const Pause: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PawPrint.d.ts
declare const PawPrint: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PcCase.d.ts
declare const PcCase: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PenLine.d.ts
declare const PenLine: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PenOff.d.ts
declare const PenOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PenTool.d.ts
declare const PenTool: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Pen.d.ts
declare const Pen: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PencilLine.d.ts
declare const PencilLine: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PencilOff.d.ts
declare const PencilOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PencilRuler.d.ts
declare const PencilRuler: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Pencil.d.ts
declare const Pencil: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Pentagon.d.ts
declare const Pentagon: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Percent.d.ts
declare const Percent: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PersonStanding.d.ts
declare const PersonStanding: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PhilippinePeso.d.ts
declare const PhilippinePeso: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PhoneCall.d.ts
declare const PhoneCall: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PhoneForwarded.d.ts
declare const PhoneForwarded: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PhoneIncoming.d.ts
declare const PhoneIncoming: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PhoneMissed.d.ts
declare const PhoneMissed: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PhoneOff.d.ts
declare const PhoneOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PhoneOutgoing.d.ts
declare const PhoneOutgoing: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Phone.d.ts
declare const Phone: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Pi.d.ts
declare const Pi: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Piano.d.ts
declare const Piano: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Pickaxe.d.ts
declare const Pickaxe: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PictureInPicture2.d.ts
declare const PictureInPicture2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PictureInPicture.d.ts
declare const PictureInPicture: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PiggyBank.d.ts
declare const PiggyBank: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PilcrowLeft.d.ts
declare const PilcrowLeft: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PilcrowRight.d.ts
declare const PilcrowRight: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Pilcrow.d.ts
declare const Pilcrow: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PillBottle.d.ts
declare const PillBottle: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Pill.d.ts
declare const Pill: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PinOff.d.ts
declare const PinOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Pin.d.ts
declare const Pin: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Pipette.d.ts
declare const Pipette: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Pizza.d.ts
declare const Pizza: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PlaneLanding.d.ts
declare const PlaneLanding: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PlaneTakeoff.d.ts
declare const PlaneTakeoff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Plane.d.ts
declare const Plane: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Play.d.ts
declare const Play: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Plug2.d.ts
declare const Plug2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PlugZap.d.ts
declare const PlugZap: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Plug.d.ts
declare const Plug: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Plus.d.ts
declare const Plus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PocketKnife.d.ts
declare const PocketKnife: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Pocket.d.ts
declare const Pocket: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Podcast.d.ts
declare const Podcast: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PointerOff.d.ts
declare const PointerOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Pointer.d.ts
declare const Pointer: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Popcorn.d.ts
declare const Popcorn: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Popsicle.d.ts
declare const Popsicle: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PoundSterling.d.ts
declare const PoundSterling: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PowerOff.d.ts
declare const PowerOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Power.d.ts
declare const Power: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Presentation.d.ts
declare const Presentation: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/PrinterCheck.d.ts
declare const PrinterCheck: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Printer.d.ts
declare const Printer: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Projector.d.ts
declare const Projector: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Proportions.d.ts
declare const Proportions: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Puzzle.d.ts
declare const Puzzle: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Pyramid.d.ts
declare const Pyramid: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/QrCode.d.ts
declare const QrCode: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Quote.d.ts
declare const Quote: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Rabbit.d.ts
declare const Rabbit: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Radar.d.ts
declare const Radar: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Radiation.d.ts
declare const Radiation: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Radical.d.ts
declare const Radical: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/RadioReceiver.d.ts
declare const RadioReceiver: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/RadioTower.d.ts
declare const RadioTower: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Radio.d.ts
declare const Radio: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Radius.d.ts
declare const Radius: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/RailSymbol.d.ts
declare const RailSymbol: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Rainbow.d.ts
declare const Rainbow: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Rat.d.ts
declare const Rat: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Ratio.d.ts
declare const Ratio: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ReceiptCent.d.ts
declare const ReceiptCent: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ReceiptEuro.d.ts
declare const ReceiptEuro: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ReceiptIndianRupee.d.ts
declare const ReceiptIndianRupee: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ReceiptJapaneseYen.d.ts
declare const ReceiptJapaneseYen: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ReceiptPoundSterling.d.ts
declare const ReceiptPoundSterling: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ReceiptRussianRuble.d.ts
declare const ReceiptRussianRuble: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ReceiptSwissFranc.d.ts
declare const ReceiptSwissFranc: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ReceiptText.d.ts
declare const ReceiptText: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Receipt.d.ts
declare const Receipt: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/RectangleEllipsis.d.ts
declare const RectangleEllipsis: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/RectangleHorizontal.d.ts
declare const RectangleHorizontal: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/RectangleVertical.d.ts
declare const RectangleVertical: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Recycle.d.ts
declare const Recycle: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Redo2.d.ts
declare const Redo2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/RedoDot.d.ts
declare const RedoDot: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Redo.d.ts
declare const Redo: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/RefreshCcwDot.d.ts
declare const RefreshCcwDot: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/RefreshCcw.d.ts
declare const RefreshCcw: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/RefreshCwOff.d.ts
declare const RefreshCwOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/RefreshCw.d.ts
declare const RefreshCw: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Refrigerator.d.ts
declare const Refrigerator: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Regex.d.ts
declare const Regex: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/RemoveFormatting.d.ts
declare const RemoveFormatting: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Repeat1.d.ts
declare const Repeat1: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Repeat2.d.ts
declare const Repeat2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Repeat.d.ts
declare const Repeat: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ReplaceAll.d.ts
declare const ReplaceAll: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Replace.d.ts
declare const Replace: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ReplyAll.d.ts
declare const ReplyAll: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Reply.d.ts
declare const Reply: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Rewind.d.ts
declare const Rewind: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Ribbon.d.ts
declare const Ribbon: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Rocket.d.ts
declare const Rocket: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/RockingChair.d.ts
declare const RockingChair: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/RollerCoaster.d.ts
declare const RollerCoaster: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Rotate3d.d.ts
declare const Rotate3d: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/RotateCcwSquare.d.ts
declare const RotateCcwSquare: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/RotateCcw.d.ts
declare const RotateCcw: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/RotateCwSquare.d.ts
declare const RotateCwSquare: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/RotateCw.d.ts
declare const RotateCw: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/RouteOff.d.ts
declare const RouteOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Route.d.ts
declare const Route: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Router.d.ts
declare const Router: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Rows2.d.ts
declare const Rows2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Rows3.d.ts
declare const Rows3: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Rows4.d.ts
declare const Rows4: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Rss.d.ts
declare const Rss: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Ruler.d.ts
declare const Ruler: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/RussianRuble.d.ts
declare const RussianRuble: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Sailboat.d.ts
declare const Sailboat: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Salad.d.ts
declare const Salad: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Sandwich.d.ts
declare const Sandwich: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SatelliteDish.d.ts
declare const SatelliteDish: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Satellite.d.ts
declare const Satellite: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SaveAll.d.ts
declare const SaveAll: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SaveOff.d.ts
declare const SaveOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Save.d.ts
declare const Save: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Scale3d.d.ts
declare const Scale3d: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Scale.d.ts
declare const Scale: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Scaling.d.ts
declare const Scaling: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ScanBarcode.d.ts
declare const ScanBarcode: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ScanEye.d.ts
declare const ScanEye: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ScanFace.d.ts
declare const ScanFace: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ScanHeart.d.ts
declare const ScanHeart: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ScanLine.d.ts
declare const ScanLine: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ScanQrCode.d.ts
declare const ScanQrCode: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ScanSearch.d.ts
declare const ScanSearch: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ScanText.d.ts
declare const ScanText: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Scan.d.ts
declare const Scan: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/School.d.ts
declare const School: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ScissorsLineDashed.d.ts
declare const ScissorsLineDashed: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Scissors.d.ts
declare const Scissors: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ScreenShareOff.d.ts
declare const ScreenShareOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ScreenShare.d.ts
declare const ScreenShare: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ScrollText.d.ts
declare const ScrollText: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Scroll.d.ts
declare const Scroll: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SearchCheck.d.ts
declare const SearchCheck: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SearchCode.d.ts
declare const SearchCode: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SearchSlash.d.ts
declare const SearchSlash: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SearchX.d.ts
declare const SearchX: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Search.d.ts
declare const Search: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Section.d.ts
declare const Section: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SendHorizontal.d.ts
declare const SendHorizontal: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SendToBack.d.ts
declare const SendToBack: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Send.d.ts
declare const Send: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SeparatorHorizontal.d.ts
declare const SeparatorHorizontal: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SeparatorVertical.d.ts
declare const SeparatorVertical: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ServerCog.d.ts
declare const ServerCog: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ServerCrash.d.ts
declare const ServerCrash: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ServerOff.d.ts
declare const ServerOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Server.d.ts
declare const Server: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Settings2.d.ts
declare const Settings2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Settings.d.ts
declare const Settings: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Shapes.d.ts
declare const Shapes: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Share2.d.ts
declare const Share2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Share.d.ts
declare const Share: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Sheet.d.ts
declare const Sheet: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Shell.d.ts
declare const Shell: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ShieldAlert.d.ts
declare const ShieldAlert: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ShieldBan.d.ts
declare const ShieldBan: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ShieldCheck.d.ts
declare const ShieldCheck: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ShieldEllipsis.d.ts
declare const ShieldEllipsis: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ShieldHalf.d.ts
declare const ShieldHalf: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ShieldMinus.d.ts
declare const ShieldMinus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ShieldOff.d.ts
declare const ShieldOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ShieldPlus.d.ts
declare const ShieldPlus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ShieldQuestion.d.ts
declare const ShieldQuestion: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ShieldUser.d.ts
declare const ShieldUser: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ShieldX.d.ts
declare const ShieldX: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Shield.d.ts
declare const Shield: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ShipWheel.d.ts
declare const ShipWheel: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Ship.d.ts
declare const Ship: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Shirt.d.ts
declare const Shirt: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ShoppingBag.d.ts
declare const ShoppingBag: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ShoppingBasket.d.ts
declare const ShoppingBasket: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ShoppingCart.d.ts
declare const ShoppingCart: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Shovel.d.ts
declare const Shovel: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ShowerHead.d.ts
declare const ShowerHead: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Shrink.d.ts
declare const Shrink: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Shrub.d.ts
declare const Shrub: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Shuffle.d.ts
declare const Shuffle: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Sigma.d.ts
declare const Sigma: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SignalHigh.d.ts
declare const SignalHigh: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SignalLow.d.ts
declare const SignalLow: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SignalMedium.d.ts
declare const SignalMedium: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SignalZero.d.ts
declare const SignalZero: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Signal.d.ts
declare const Signal: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Signature.d.ts
declare const Signature: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SignpostBig.d.ts
declare const SignpostBig: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Signpost.d.ts
declare const Signpost: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Siren.d.ts
declare const Siren: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SkipBack.d.ts
declare const SkipBack: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SkipForward.d.ts
declare const SkipForward: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Skull.d.ts
declare const Skull: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Slack.d.ts
declare const Slack: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Slash.d.ts
declare const Slash: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Slice.d.ts
declare const Slice: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SlidersHorizontal.d.ts
declare const SlidersHorizontal: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SlidersVertical.d.ts
declare const SlidersVertical: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SmartphoneCharging.d.ts
declare const SmartphoneCharging: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SmartphoneNfc.d.ts
declare const SmartphoneNfc: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Smartphone.d.ts
declare const Smartphone: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SmilePlus.d.ts
declare const SmilePlus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Smile.d.ts
declare const Smile: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Snail.d.ts
declare const Snail: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Snowflake.d.ts
declare const Snowflake: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Sofa.d.ts
declare const Sofa: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Soup.d.ts
declare const Soup: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Space.d.ts
declare const Space: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Spade.d.ts
declare const Spade: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Sparkle.d.ts
declare const Sparkle: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Sparkles.d.ts
declare const Sparkles: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Speaker.d.ts
declare const Speaker: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Speech.d.ts
declare const Speech: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SpellCheck2.d.ts
declare const SpellCheck2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SpellCheck.d.ts
declare const SpellCheck: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Spline.d.ts
declare const Spline: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Split.d.ts
declare const Split: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SprayCan.d.ts
declare const SprayCan: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Sprout.d.ts
declare const Sprout: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareActivity.d.ts
declare const SquareActivity: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareArrowDownLeft.d.ts
declare const SquareArrowDownLeft: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareArrowDownRight.d.ts
declare const SquareArrowDownRight: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareArrowDown.d.ts
declare const SquareArrowDown: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareArrowLeft.d.ts
declare const SquareArrowLeft: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareArrowOutDownLeft.d.ts
declare const SquareArrowOutDownLeft: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareArrowOutDownRight.d.ts
declare const SquareArrowOutDownRight: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareArrowOutUpLeft.d.ts
declare const SquareArrowOutUpLeft: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareArrowOutUpRight.d.ts
declare const SquareArrowOutUpRight: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareArrowRight.d.ts
declare const SquareArrowRight: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareArrowUpLeft.d.ts
declare const SquareArrowUpLeft: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareArrowUpRight.d.ts
declare const SquareArrowUpRight: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareArrowUp.d.ts
declare const SquareArrowUp: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareAsterisk.d.ts
declare const SquareAsterisk: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareBottomDashedScissors.d.ts
declare const SquareBottomDashedScissors: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareChartGantt.d.ts
declare const SquareChartGantt: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareCheckBig.d.ts
declare const SquareCheckBig: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareCheck.d.ts
declare const SquareCheck: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareChevronDown.d.ts
declare const SquareChevronDown: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareChevronLeft.d.ts
declare const SquareChevronLeft: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareChevronRight.d.ts
declare const SquareChevronRight: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareChevronUp.d.ts
declare const SquareChevronUp: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareCode.d.ts
declare const SquareCode: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareDashedBottomCode.d.ts
declare const SquareDashedBottomCode: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareDashedBottom.d.ts
declare const SquareDashedBottom: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareDashedKanban.d.ts
declare const SquareDashedKanban: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareDashedMousePointer.d.ts
declare const SquareDashedMousePointer: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareDashed.d.ts
declare const SquareDashed: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareDivide.d.ts
declare const SquareDivide: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareDot.d.ts
declare const SquareDot: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareEqual.d.ts
declare const SquareEqual: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareFunction.d.ts
declare const SquareFunction: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareKanban.d.ts
declare const SquareKanban: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareLibrary.d.ts
declare const SquareLibrary: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareM.d.ts
declare const SquareM: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareMenu.d.ts
declare const SquareMenu: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareMinus.d.ts
declare const SquareMinus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareMousePointer.d.ts
declare const SquareMousePointer: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareParkingOff.d.ts
declare const SquareParkingOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareParking.d.ts
declare const SquareParking: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquarePen.d.ts
declare const SquarePen: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquarePercent.d.ts
declare const SquarePercent: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquarePi.d.ts
declare const SquarePi: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquarePilcrow.d.ts
declare const SquarePilcrow: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquarePlay.d.ts
declare const SquarePlay: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquarePlus.d.ts
declare const SquarePlus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquarePower.d.ts
declare const SquarePower: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareRadical.d.ts
declare const SquareRadical: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareScissors.d.ts
declare const SquareScissors: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareSigma.d.ts
declare const SquareSigma: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareSlash.d.ts
declare const SquareSlash: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareSplitHorizontal.d.ts
declare const SquareSplitHorizontal: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareSplitVertical.d.ts
declare const SquareSplitVertical: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareSquare.d.ts
declare const SquareSquare: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareStack.d.ts
declare const SquareStack: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareTerminal.d.ts
declare const SquareTerminal: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareUserRound.d.ts
declare const SquareUserRound: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareUser.d.ts
declare const SquareUser: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SquareX.d.ts
declare const SquareX: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Square.d.ts
declare const Square: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Squircle.d.ts
declare const Squircle: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Squirrel.d.ts
declare const Squirrel: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Stamp.d.ts
declare const Stamp: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/StarHalf.d.ts
declare const StarHalf: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/StarOff.d.ts
declare const StarOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Star.d.ts
declare const Star: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/StepBack.d.ts
declare const StepBack: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/StepForward.d.ts
declare const StepForward: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Stethoscope.d.ts
declare const Stethoscope: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Sticker.d.ts
declare const Sticker: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/StickyNote.d.ts
declare const StickyNote: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Store.d.ts
declare const Store: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/StretchHorizontal.d.ts
declare const StretchHorizontal: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/StretchVertical.d.ts
declare const StretchVertical: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Strikethrough.d.ts
declare const Strikethrough: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Subscript.d.ts
declare const Subscript: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SunDim.d.ts
declare const SunDim: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SunMedium.d.ts
declare const SunMedium: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SunMoon.d.ts
declare const SunMoon: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SunSnow.d.ts
declare const SunSnow: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Sun.d.ts
declare const Sun: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Sunrise.d.ts
declare const Sunrise: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Sunset.d.ts
declare const Sunset: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Superscript.d.ts
declare const Superscript: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SwatchBook.d.ts
declare const SwatchBook: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SwissFranc.d.ts
declare const SwissFranc: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/SwitchCamera.d.ts
declare const SwitchCamera: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Sword.d.ts
declare const Sword: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Swords.d.ts
declare const Swords: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Syringe.d.ts
declare const Syringe: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Table2.d.ts
declare const Table2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TableCellsMerge.d.ts
declare const TableCellsMerge: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TableCellsSplit.d.ts
declare const TableCellsSplit: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TableColumnsSplit.d.ts
declare const TableColumnsSplit: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TableOfContents.d.ts
declare const TableOfContents: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TableProperties.d.ts
declare const TableProperties: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TableRowsSplit.d.ts
declare const TableRowsSplit: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Table.d.ts
declare const Table: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TabletSmartphone.d.ts
declare const TabletSmartphone: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Tablet.d.ts
declare const Tablet: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Tablets.d.ts
declare const Tablets: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Tag.d.ts
declare const Tag: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Tags.d.ts
declare const Tags: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Tally1.d.ts
declare const Tally1: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Tally2.d.ts
declare const Tally2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Tally3.d.ts
declare const Tally3: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Tally4.d.ts
declare const Tally4: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Tally5.d.ts
declare const Tally5: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Tangent.d.ts
declare const Tangent: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Target.d.ts
declare const Target: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Telescope.d.ts
declare const Telescope: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TentTree.d.ts
declare const TentTree: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Tent.d.ts
declare const Tent: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Terminal.d.ts
declare const Terminal: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TestTubeDiagonal.d.ts
declare const TestTubeDiagonal: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TestTube.d.ts
declare const TestTube: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TestTubes.d.ts
declare const TestTubes: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TextCursorInput.d.ts
declare const TextCursorInput: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TextCursor.d.ts
declare const TextCursor: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TextQuote.d.ts
declare const TextQuote: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TextSearch.d.ts
declare const TextSearch: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TextSelect.d.ts
declare const TextSelect: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Text.d.ts
declare const Text: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Theater.d.ts
declare const Theater: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ThermometerSnowflake.d.ts
declare const ThermometerSnowflake: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ThermometerSun.d.ts
declare const ThermometerSun: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Thermometer.d.ts
declare const Thermometer: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ThumbsDown.d.ts
declare const ThumbsDown: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ThumbsUp.d.ts
declare const ThumbsUp: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TicketCheck.d.ts
declare const TicketCheck: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TicketMinus.d.ts
declare const TicketMinus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TicketPercent.d.ts
declare const TicketPercent: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TicketPlus.d.ts
declare const TicketPlus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TicketSlash.d.ts
declare const TicketSlash: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TicketX.d.ts
declare const TicketX: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Ticket.d.ts
declare const Ticket: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TicketsPlane.d.ts
declare const TicketsPlane: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Tickets.d.ts
declare const Tickets: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TimerOff.d.ts
declare const TimerOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TimerReset.d.ts
declare const TimerReset: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Timer.d.ts
declare const Timer: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ToggleLeft.d.ts
declare const ToggleLeft: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ToggleRight.d.ts
declare const ToggleRight: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Toilet.d.ts
declare const Toilet: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Tornado.d.ts
declare const Tornado: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Torus.d.ts
declare const Torus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TouchpadOff.d.ts
declare const TouchpadOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Touchpad.d.ts
declare const Touchpad: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TowerControl.d.ts
declare const TowerControl: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ToyBrick.d.ts
declare const ToyBrick: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Tractor.d.ts
declare const Tractor: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TrafficCone.d.ts
declare const TrafficCone: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TrainFrontTunnel.d.ts
declare const TrainFrontTunnel: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TrainFront.d.ts
declare const TrainFront: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TrainTrack.d.ts
declare const TrainTrack: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TramFront.d.ts
declare const TramFront: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Transgender.d.ts
declare const Transgender: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Trash2.d.ts
declare const Trash2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Trash.d.ts
declare const Trash: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TreeDeciduous.d.ts
declare const TreeDeciduous: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TreePalm.d.ts
declare const TreePalm: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TreePine.d.ts
declare const TreePine: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Trees.d.ts
declare const Trees: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Trello.d.ts
declare const Trello: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TrendingDown.d.ts
declare const TrendingDown: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TrendingUpDown.d.ts
declare const TrendingUpDown: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TrendingUp.d.ts
declare const TrendingUp: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TriangleAlert.d.ts
declare const TriangleAlert: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TriangleDashed.d.ts
declare const TriangleDashed: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TriangleRight.d.ts
declare const TriangleRight: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Triangle.d.ts
declare const Triangle: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Trophy.d.ts
declare const Trophy: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Truck.d.ts
declare const Truck: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Turtle.d.ts
declare const Turtle: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TvMinimalPlay.d.ts
declare const TvMinimalPlay: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TvMinimal.d.ts
declare const TvMinimal: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Tv.d.ts
declare const Tv: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Twitch.d.ts
declare const Twitch: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Twitter.d.ts
declare const Twitter: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/TypeOutline.d.ts
declare const TypeOutline: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Type.d.ts
declare const Type: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/UmbrellaOff.d.ts
declare const UmbrellaOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Umbrella.d.ts
declare const Umbrella: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Underline.d.ts
declare const Underline: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Undo2.d.ts
declare const Undo2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/UndoDot.d.ts
declare const UndoDot: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Undo.d.ts
declare const Undo: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/UnfoldHorizontal.d.ts
declare const UnfoldHorizontal: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/UnfoldVertical.d.ts
declare const UnfoldVertical: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Ungroup.d.ts
declare const Ungroup: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/University.d.ts
declare const University: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Unlink2.d.ts
declare const Unlink2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Unlink.d.ts
declare const Unlink: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Unplug.d.ts
declare const Unplug: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Upload.d.ts
declare const Upload: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Usb.d.ts
declare const Usb: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/UserCheck.d.ts
declare const UserCheck: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/UserCog.d.ts
declare const UserCog: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/UserMinus.d.ts
declare const UserMinus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/UserPen.d.ts
declare const UserPen: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/UserPlus.d.ts
declare const UserPlus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/UserRoundCheck.d.ts
declare const UserRoundCheck: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/UserRoundCog.d.ts
declare const UserRoundCog: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/UserRoundMinus.d.ts
declare const UserRoundMinus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/UserRoundPen.d.ts
declare const UserRoundPen: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/UserRoundPlus.d.ts
declare const UserRoundPlus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/UserRoundSearch.d.ts
declare const UserRoundSearch: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/UserRoundX.d.ts
declare const UserRoundX: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/UserRound.d.ts
declare const UserRound: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/UserSearch.d.ts
declare const UserSearch: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/UserX.d.ts
declare const UserX: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/User.d.ts
declare const User: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/UsersRound.d.ts
declare const UsersRound: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Users.d.ts
declare const Users: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/UtensilsCrossed.d.ts
declare const UtensilsCrossed: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Utensils.d.ts
declare const Utensils: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/UtilityPole.d.ts
declare const UtilityPole: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Variable.d.ts
declare const Variable: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Vault.d.ts
declare const Vault: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Vegan.d.ts
declare const Vegan: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/VenetianMask.d.ts
declare const VenetianMask: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/VenusAndMars.d.ts
declare const VenusAndMars: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Venus.d.ts
declare const Venus: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/VibrateOff.d.ts
declare const VibrateOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Vibrate.d.ts
declare const Vibrate: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/VideoOff.d.ts
declare const VideoOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Video.d.ts
declare const Video: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Videotape.d.ts
declare const Videotape: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/View.d.ts
declare const View: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Voicemail.d.ts
declare const Voicemail: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Volleyball.d.ts
declare const Volleyball: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Volume1.d.ts
declare const Volume1: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Volume2.d.ts
declare const Volume2: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/VolumeOff.d.ts
declare const VolumeOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/VolumeX.d.ts
declare const VolumeX: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Volume.d.ts
declare const Volume: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Vote.d.ts
declare const Vote: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/WalletCards.d.ts
declare const WalletCards: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/WalletMinimal.d.ts
declare const WalletMinimal: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Wallet.d.ts
declare const Wallet: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Wallpaper.d.ts
declare const Wallpaper: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/WandSparkles.d.ts
declare const WandSparkles: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Wand.d.ts
declare const Wand: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Warehouse.d.ts
declare const Warehouse: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/WashingMachine.d.ts
declare const WashingMachine: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Watch.d.ts
declare const Watch: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/WavesLadder.d.ts
declare const WavesLadder: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Waves.d.ts
declare const Waves: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Waypoints.d.ts
declare const Waypoints: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Webcam.d.ts
declare const Webcam: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/WebhookOff.d.ts
declare const WebhookOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Webhook.d.ts
declare const Webhook: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Weight.d.ts
declare const Weight: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/WheatOff.d.ts
declare const WheatOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Wheat.d.ts
declare const Wheat: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/WholeWord.d.ts
declare const WholeWord: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/WifiHigh.d.ts
declare const WifiHigh: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/WifiLow.d.ts
declare const WifiLow: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/WifiOff.d.ts
declare const WifiOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/WifiZero.d.ts
declare const WifiZero: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Wifi.d.ts
declare const Wifi: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/WindArrowDown.d.ts
declare const WindArrowDown: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Wind.d.ts
declare const Wind: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/WineOff.d.ts
declare const WineOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Wine.d.ts
declare const Wine: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Workflow.d.ts
declare const Workflow: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Worm.d.ts
declare const Worm: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/WrapText.d.ts
declare const WrapText: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Wrench.d.ts
declare const Wrench: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/X.d.ts
declare const X: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Youtube.d.ts
declare const Youtube: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ZapOff.d.ts
declare const ZapOff: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/Zap.d.ts
declare const Zap: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ZoomIn.d.ts
declare const ZoomIn: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
//#region src/icons/ZoomOut.d.ts
declare const ZoomOut: (props?: Partial<SVGProps>) => SVGSVGElement;
//#endregion
export { AArrowDown, AArrowUp, ALargeSmall, Accessibility, Activity, AirVent, Airplay, AlarmClock, AlarmClockCheck, AlarmClockMinus, AlarmClockOff, AlarmClockPlus, AlarmSmoke, Album, AlignCenter, AlignCenterHorizontal, AlignCenterVertical, AlignEndHorizontal, AlignEndVertical, AlignHorizontalDistributeCenter, AlignHorizontalDistributeEnd, AlignHorizontalDistributeStart, AlignHorizontalJustifyCenter, AlignHorizontalJustifyEnd, AlignHorizontalJustifyStart, AlignHorizontalSpaceAround, AlignHorizontalSpaceBetween, AlignJustify, AlignLeft, AlignRight, AlignStartHorizontal, AlignStartVertical, AlignVerticalDistributeCenter, AlignVerticalDistributeEnd, AlignVerticalDistributeStart, AlignVerticalJustifyCenter, AlignVerticalJustifyEnd, AlignVerticalJustifyStart, AlignVerticalSpaceAround, AlignVerticalSpaceBetween, Ambulance, Ampersand, Ampersands, Amphora, Anchor, Angry, Annoyed, Antenna, Anvil, Aperture, AppWindow, AppWindowMac, Apple, Archive, ArchiveRestore, ArchiveX, Armchair, ArrowBigDown, ArrowBigDownDash, ArrowBigLeft, ArrowBigLeftDash, ArrowBigRight, ArrowBigRightDash, ArrowBigUp, ArrowBigUpDash, ArrowDown, ArrowDown01, ArrowDown10, ArrowDownAZ, ArrowDownFromLine, ArrowDownLeft, ArrowDownNarrowWide, ArrowDownRight, ArrowDownToDot, ArrowDownToLine, ArrowDownUp, ArrowDownWideNarrow, ArrowDownZA, ArrowLeft, ArrowLeftFromLine, ArrowLeftRight, ArrowLeftToLine, ArrowRight, ArrowRightFromLine, ArrowRightLeft, ArrowRightToLine, ArrowUp, ArrowUp01, ArrowUp10, ArrowUpAZ, ArrowUpDown, ArrowUpFromDot, ArrowUpFromLine, ArrowUpLeft, ArrowUpNarrowWide, ArrowUpRight, ArrowUpToLine, ArrowUpWideNarrow, ArrowUpZA, ArrowsUpFromLine, Asterisk, AtSign, Atom, AudioLines, AudioWaveform, Award, Axe, Axis3d, Baby, Backpack, Badge, BadgeAlert, BadgeCent, BadgeCheck, BadgeDollarSign, BadgeEuro, BadgeHelp, BadgeIndianRupee, BadgeInfo, BadgeJapaneseYen, BadgeMinus, BadgePercent, BadgePlus, BadgePoundSterling, BadgeRussianRuble, BadgeSwissFranc, BadgeX, BaggageClaim, Ban, Banana, Bandage, Banknote, Barcode, Baseline, Bath, Battery, BatteryCharging, BatteryFull, BatteryLow, BatteryMedium, BatteryPlus, BatteryWarning, Beaker, Bean, BeanOff, Bed, BedDouble, BedSingle, Beef, Beer, BeerOff, Bell, BellDot, BellElectric, BellMinus, BellOff, BellPlus, BellRing, BetweenHorizontalEnd, BetweenHorizontalStart, BetweenVerticalEnd, BetweenVerticalStart, BicepsFlexed, Bike, Binary, Binoculars, Biohazard, Bird, Bitcoin, Blend, Blinds, Blocks, Bluetooth, BluetoothConnected, BluetoothOff, BluetoothSearching, Bold, Bolt, Bomb, Bone, Book, BookA, BookAudio, BookCheck, BookCopy, BookDashed, BookDown, BookHeadphones, BookHeart, BookImage, BookKey, BookLock, BookMarked, BookMinus, BookOpen, BookOpenCheck, BookOpenText, BookPlus, BookText, BookType, BookUp, BookUp2, BookUser, BookX, Bookmark, BookmarkCheck, BookmarkMinus, BookmarkPlus, BookmarkX, BoomBox, Bot, BotMessageSquare, BotOff, Box, Boxes, Braces, Brackets, Brain, BrainCircuit, BrainCog, BrickWall, Briefcase, BriefcaseBusiness, BriefcaseConveyorBelt, BriefcaseMedical, BringToFront, Brush, Bug, BugOff, BugPlay, Building, Building2, Bus, BusFront, Cable, CableCar, Cake, CakeSlice, Calculator, Calendar, Calendar1, CalendarArrowDown, CalendarArrowUp, CalendarCheck, CalendarCheck2, CalendarClock, CalendarCog, CalendarDays, CalendarFold, CalendarHeart, CalendarMinus, CalendarMinus2, CalendarOff, CalendarPlus, CalendarPlus2, CalendarRange, CalendarSearch, CalendarSync, CalendarX, CalendarX2, Camera, CameraOff, Candy, CandyCane, CandyOff, Cannabis, Captions, CaptionsOff, Car, CarFront, CarTaxiFront, Caravan, Carrot, CaseLower, CaseSensitive, CaseUpper, CassetteTape, Cast, Castle, Cat, Cctv, ChartArea, ChartBar, ChartBarBig, ChartBarDecreasing, ChartBarIncreasing, ChartBarStacked, ChartCandlestick, ChartColumn, ChartColumnBig, ChartColumnDecreasing, ChartColumnIncreasing, ChartColumnStacked, ChartGantt, ChartLine, ChartNetwork, ChartNoAxesColumn, ChartNoAxesColumnDecreasing, ChartNoAxesColumnIncreasing, ChartNoAxesCombined, ChartNoAxesGantt, ChartPie, ChartScatter, ChartSpline, Check, CheckCheck, ChefHat, Cherry, ChevronDown, ChevronFirst, ChevronLast, ChevronLeft, ChevronRight, ChevronUp, ChevronsDown, ChevronsDownUp, ChevronsLeft, ChevronsLeftRight, ChevronsLeftRightEllipsis, ChevronsRight, ChevronsRightLeft, ChevronsUp, ChevronsUpDown, Chrome, Church, Cigarette, CigaretteOff, Circle, CircleAlert, CircleArrowDown, CircleArrowLeft, CircleArrowOutDownLeft, CircleArrowOutDownRight, CircleArrowOutUpLeft, CircleArrowOutUpRight, CircleArrowRight, CircleArrowUp, CircleCheck, CircleCheckBig, CircleChevronDown, CircleChevronLeft, CircleChevronRight, CircleChevronUp, CircleDashed, CircleDivide, CircleDollarSign, CircleDot, CircleDotDashed, CircleEllipsis, CircleEqual, CircleFadingArrowUp, CircleFadingPlus, CircleGauge, CircleHelp, CircleMinus, CircleOff, CircleParking, CircleParkingOff, CirclePause, CirclePercent, CirclePlay, CirclePlus, CirclePower, CircleSlash, CircleSlash2, CircleSmall, CircleStop, CircleUser, CircleUserRound, CircleX, CircuitBoard, Citrus, Clapperboard, Clipboard, ClipboardCheck, ClipboardCopy, ClipboardList, ClipboardMinus, ClipboardPaste, ClipboardPen, ClipboardPenLine, ClipboardPlus, ClipboardType, ClipboardX, Clock, Clock1, Clock10, Clock11, Clock12, Clock2, Clock3, Clock4, Clock5, Clock6, Clock7, Clock8, Clock9, ClockAlert, ClockArrowDown, ClockArrowUp, Cloud, CloudAlert, CloudCog, CloudDownload, CloudDrizzle, CloudFog, CloudHail, CloudLightning, CloudMoon, CloudMoonRain, CloudOff, CloudRain, CloudRainWind, CloudSnow, CloudSun, CloudSunRain, CloudUpload, Cloudy, Clover, Club, Code, CodeXml, Codepen, Codesandbox, Coffee, Cog, Coins, Columns2, Columns3, Columns4, Combine, Command, Compass, Component, Computer, ConciergeBell, Cone, Construction, Contact, ContactRound, Container, Contrast, Cookie, CookingPot, Copy, CopyCheck, CopyMinus, CopyPlus, CopySlash, CopyX, Copyleft, Copyright, CornerDownLeft, CornerDownRight, CornerLeftDown, CornerLeftUp, CornerRightDown, CornerRightUp, CornerUpLeft, CornerUpRight, Cpu, CreativeCommons, CreditCard, Croissant, Crop, Cross, Crosshair, Crown, Cuboid, CupSoda, Currency, Cylinder, Dam, Database, DatabaseBackup, DatabaseZap, Delete, Dessert, Diameter, Diamond, DiamondMinus, DiamondPercent, DiamondPlus, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6, Dices, Diff, Disc, Disc2, Disc3, DiscAlbum, Divide, Dna, DnaOff, Dock, Dog, DollarSign, Donut, DoorClosed, DoorOpen, Dot, Download, DraftingCompass, Drama, Dribbble, Drill, Droplet, DropletOff, Droplets, Drum, Drumstick, Dumbbell, Ear, EarOff, Earth, EarthLock, Eclipse, Egg, EggFried, EggOff, Ellipsis, EllipsisVertical, Equal, EqualApproximately, EqualNot, Eraser, EthernetPort, Euro, Expand, ExternalLink, Eye, EyeClosed, EyeOff, Facebook, Factory, Fan, FastForward, Feather, Fence, FerrisWheel, Figma, File, FileArchive, FileAudio, FileAudio2, FileAxis3d, FileBadge, FileBadge2, FileBox, FileChartColumn, FileChartColumnIncreasing, FileChartLine, FileChartPie, FileCheck, FileCheck2, FileClock, FileCode, FileCode2, FileCog, FileDiff, FileDigit, FileDown, FileHeart, FileImage, FileInput, FileJson, FileJson2, FileKey, FileKey2, FileLock, FileLock2, FileMinus, FileMinus2, FileMusic, FileOutput, FilePen, FilePenLine, FilePlus, FilePlus2, FileQuestion, FileScan, FileSearch, FileSearch2, FileSliders, FileSpreadsheet, FileStack, FileSymlink, FileTerminal, FileText, FileType, FileType2, FileUp, FileUser, FileVideo, FileVideo2, FileVolume, FileVolume2, FileWarning, FileX, FileX2, Files, Film, Filter, FilterX, Fingerprint, FireExtinguisher, Fish, FishOff, FishSymbol, Flag, FlagOff, FlagTriangleLeft, FlagTriangleRight, Flame, FlameKindling, Flashlight, FlashlightOff, FlaskConical, FlaskConicalOff, FlaskRound, FlipHorizontal, FlipHorizontal2, FlipVertical, FlipVertical2, Flower, Flower2, Focus, FoldHorizontal, FoldVertical, Folder, FolderArchive, FolderCheck, FolderClock, FolderClosed, FolderCode, FolderCog, FolderDot, FolderDown, FolderGit, FolderGit2, FolderHeart, FolderInput, FolderKanban, FolderKey, FolderLock, FolderMinus, FolderOpen, FolderOpenDot, FolderOutput, FolderPen, FolderPlus, FolderRoot, FolderSearch, FolderSearch2, FolderSymlink, FolderSync, FolderTree, FolderUp, FolderX, Folders, Footprints, Forklift, Forward, Frame, Framer, Frown, Fuel, Fullscreen, GalleryHorizontal, GalleryHorizontalEnd, GalleryThumbnails, GalleryVertical, GalleryVerticalEnd, Gamepad, Gamepad2, Gauge, Gavel, Gem, Ghost, Gift, GitBranch, GitBranchPlus, GitCommitHorizontal, GitCommitVertical, GitCompare, GitCompareArrows, GitFork, GitGraph, GitMerge, GitPullRequest, GitPullRequestArrow, GitPullRequestClosed, GitPullRequestCreate, GitPullRequestCreateArrow, GitPullRequestDraft, Github, Gitlab, GlassWater, Glasses, Globe, GlobeLock, Goal, Grab, GraduationCap, Grape, Grid2x2, Grid2x2Check, Grid2x2Plus, Grid2x2X, Grid3x3, Grip, GripHorizontal, GripVertical, Group, Guitar, Ham, Hammer, Hand, HandCoins, HandHeart, HandHelping, HandMetal, HandPlatter, Handshake, HardDrive, HardDriveDownload, HardDriveUpload, HardHat, Hash, Haze, HdmiPort, Heading, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, HeadphoneOff, Headphones, Headset, Heart, HeartCrack, HeartHandshake, HeartOff, HeartPulse, Heater, Hexagon, Highlighter, History, Hop, HopOff, Hospital, Hotel, Hourglass, House, HousePlug, HousePlus, HouseWifi, IceCreamBowl, IceCreamCone, IdCard, Image, ImageDown, ImageMinus, ImageOff, ImagePlay, ImagePlus, ImageUp, ImageUpscale, Images, Import, Inbox, IndentDecrease, IndentIncrease, IndianRupee, InfinityIcon, Info, InspectionPanel, Instagram, Italic, IterationCcw, IterationCw, JapaneseYen, Joystick, Kanban, Key, KeyRound, KeySquare, Keyboard, KeyboardMusic, KeyboardOff, Lamp, LampCeiling, LampDesk, LampFloor, LampWallDown, LampWallUp, LandPlot, Landmark, Languages, Laptop, LaptopMinimal, LaptopMinimalCheck, Lasso, LassoSelect, Laugh, Layers, Layers2, LayoutDashboard, LayoutGrid, LayoutList, LayoutPanelLeft, LayoutPanelTop, LayoutTemplate, Leaf, LeafyGreen, Lectern, LetterText, Library, LibraryBig, LifeBuoy, Ligature, Lightbulb, LightbulbOff, Link, Link2, Link2Off, Linkedin, List, ListCheck, ListChecks, ListCollapse, ListEnd, ListFilter, ListFilterPlus, ListMinus, ListMusic, ListOrdered, ListPlus, ListRestart, ListStart, ListTodo, ListTree, ListVideo, ListX, Loader, LoaderCircle, LoaderPinwheel, Locate, LocateFixed, LocateOff, Lock, LockKeyhole, LockKeyholeOpen, LockOpen, LogIn, LogOut, Logs, Lollipop, Luggage, Magnet, Mail, MailCheck, MailMinus, MailOpen, MailPlus, MailQuestion, MailSearch, MailWarning, MailX, Mailbox, Mails, Map, MapPin, MapPinCheck, MapPinCheckInside, MapPinHouse, MapPinMinus, MapPinMinusInside, MapPinOff, MapPinPlus, MapPinPlusInside, MapPinX, MapPinXInside, MapPinned, MapPlus, Mars, MarsStroke, Martini, Maximize, Maximize2, Medal, Megaphone, MegaphoneOff, Meh, MemoryStick, Menu, Merge, MessageCircle, MessageCircleCode, MessageCircleDashed, MessageCircleHeart, MessageCircleMore, MessageCircleOff, MessageCirclePlus, MessageCircleQuestion, MessageCircleReply, MessageCircleWarning, MessageCircleX, MessageSquare, MessageSquareCode, MessageSquareDashed, MessageSquareDiff, MessageSquareDot, MessageSquareHeart, MessageSquareLock, MessageSquareMore, MessageSquareOff, MessageSquarePlus, MessageSquareQuote, MessageSquareReply, MessageSquareShare, MessageSquareText, MessageSquareWarning, MessageSquareX, MessagesSquare, Mic, MicOff, MicVocal, Microchip, Microscope, Microwave, Milestone, Milk, MilkOff, Minimize, Minimize2, Minus, Monitor, MonitorCheck, MonitorCog, MonitorDot, MonitorDown, MonitorOff, MonitorPause, MonitorPlay, MonitorSmartphone, MonitorSpeaker, MonitorStop, MonitorUp, MonitorX, Moon, MoonStar, Mountain, MountainSnow, Mouse, MouseOff, MousePointer, MousePointer2, MousePointerBan, MousePointerClick, Move, Move3d, MoveDiagonal, MoveDiagonal2, MoveDown, MoveDownLeft, MoveDownRight, MoveHorizontal, MoveLeft, MoveRight, MoveUp, MoveUpLeft, MoveUpRight, MoveVertical, Music, Music2, Music3, Music4, Navigation, Navigation2, Navigation2Off, NavigationOff, Network, Newspaper, Nfc, NonBinary, Notebook, NotebookPen, NotebookTabs, NotebookText, NotepadText, NotepadTextDashed, Nut, NutOff, Octagon, OctagonAlert, OctagonMinus, OctagonPause, OctagonX, Omega, Option, Orbit, Origami, Package, Package2, PackageCheck, PackageMinus, PackageOpen, PackagePlus, PackageSearch, PackageX, PaintBucket, PaintRoller, Paintbrush, PaintbrushVertical, Palette, PanelBottom, PanelBottomClose, PanelBottomDashed, PanelBottomOpen, PanelLeft, PanelLeftClose, PanelLeftDashed, PanelLeftOpen, PanelRight, PanelRightClose, PanelRightDashed, PanelRightOpen, PanelTop, PanelTopClose, PanelTopDashed, PanelTopOpen, PanelsLeftBottom, PanelsRightBottom, PanelsTopLeft, Paperclip, Parentheses, ParkingMeter, PartyPopper, Pause, PawPrint, PcCase, Pen, PenLine, PenOff, PenTool, Pencil, PencilLine, PencilOff, PencilRuler, Pentagon, Percent, PersonStanding, PhilippinePeso, Phone, PhoneCall, PhoneForwarded, PhoneIncoming, PhoneMissed, PhoneOff, PhoneOutgoing, Pi, Piano, Pickaxe, PictureInPicture, PictureInPicture2, PiggyBank, Pilcrow, PilcrowLeft, PilcrowRight, Pill, PillBottle, Pin, PinOff, Pipette, Pizza, Plane, PlaneLanding, PlaneTakeoff, Play, Plug, Plug2, PlugZap, Plus, Pocket, PocketKnife, Podcast, Pointer, PointerOff, Popcorn, Popsicle, PoundSterling, Power, PowerOff, Presentation, Printer, PrinterCheck, Projector, Proportions, Puzzle, Pyramid, QrCode, Quote, Rabbit, Radar, Radiation, Radical, Radio, RadioReceiver, RadioTower, Radius, RailSymbol, Rainbow, Rat, Ratio, Receipt, ReceiptCent, ReceiptEuro, ReceiptIndianRupee, ReceiptJapaneseYen, ReceiptPoundSterling, ReceiptRussianRuble, ReceiptSwissFranc, ReceiptText, RectangleEllipsis, RectangleHorizontal, RectangleVertical, Recycle, Redo, Redo2, RedoDot, RefreshCcw, RefreshCcwDot, RefreshCw, RefreshCwOff, Refrigerator, Regex, RemoveFormatting, Repeat, Repeat1, Repeat2, Replace, ReplaceAll, Reply, ReplyAll, Rewind, Ribbon, Rocket, RockingChair, RollerCoaster, Rotate3d, RotateCcw, RotateCcwSquare, RotateCw, RotateCwSquare, Route, RouteOff, Router, Rows2, Rows3, Rows4, Rss, Ruler, RussianRuble, Sailboat, Salad, Sandwich, Satellite, SatelliteDish, Save, SaveAll, SaveOff, Scale, Scale3d, Scaling, Scan, ScanBarcode, ScanEye, ScanFace, ScanHeart, ScanLine, ScanQrCode, ScanSearch, ScanText, School, Scissors, ScissorsLineDashed, ScreenShare, ScreenShareOff, Scroll, ScrollText, Search, SearchCheck, SearchCode, SearchSlash, SearchX, Section, Send, SendHorizontal, SendToBack, SeparatorHorizontal, SeparatorVertical, Server, ServerCog, ServerCrash, ServerOff, Settings, Settings2, Shapes, Share, Share2, Sheet, Shell, Shield, ShieldAlert, ShieldBan, ShieldCheck, ShieldEllipsis, ShieldHalf, ShieldMinus, ShieldOff, ShieldPlus, ShieldQuestion, ShieldUser, ShieldX, Ship, ShipWheel, Shirt, ShoppingBag, ShoppingBasket, ShoppingCart, Shovel, ShowerHead, Shrink, Shrub, Shuffle, Sigma, Signal, SignalHigh, SignalLow, SignalMedium, SignalZero, Signature, Signpost, SignpostBig, Siren, SkipBack, SkipForward, Skull, Slack, Slash, Slice, SlidersHorizontal, SlidersVertical, Smartphone, SmartphoneCharging, SmartphoneNfc, Smile, SmilePlus, Snail, Snowflake, Sofa, Soup, Space, Spade, Sparkle, Sparkles, Speaker, Speech, SpellCheck, SpellCheck2, Spline, Split, SprayCan, Sprout, Square, SquareActivity, SquareArrowDown, SquareArrowDownLeft, SquareArrowDownRight, SquareArrowLeft, SquareArrowOutDownLeft, SquareArrowOutDownRight, SquareArrowOutUpLeft, SquareArrowOutUpRight, SquareArrowRight, SquareArrowUp, SquareArrowUpLeft, SquareArrowUpRight, SquareAsterisk, SquareBottomDashedScissors, SquareChartGantt, SquareCheck, SquareCheckBig, SquareChevronDown, SquareChevronLeft, SquareChevronRight, SquareChevronUp, SquareCode, SquareDashed, SquareDashedBottom, SquareDashedBottomCode, SquareDashedKanban, SquareDashedMousePointer, SquareDivide, SquareDot, SquareEqual, SquareFunction, SquareKanban, SquareLibrary, SquareM, SquareMenu, SquareMinus, SquareMousePointer, SquareParking, SquareParkingOff, SquarePen, SquarePercent, SquarePi, SquarePilcrow, SquarePlay, SquarePlus, SquarePower, SquareRadical, SquareScissors, SquareSigma, SquareSlash, SquareSplitHorizontal, SquareSplitVertical, SquareSquare, SquareStack, SquareTerminal, SquareUser, SquareUserRound, SquareX, Squircle, Squirrel, Stamp, Star, StarHalf, StarOff, StepBack, StepForward, Stethoscope, Sticker, StickyNote, Store, StretchHorizontal, StretchVertical, Strikethrough, Subscript, Sun, SunDim, SunMedium, SunMoon, SunSnow, Sunrise, Sunset, Superscript, SwatchBook, SwissFranc, SwitchCamera, Sword, Swords, Syringe, Table, Table2, TableCellsMerge, TableCellsSplit, TableColumnsSplit, TableOfContents, TableProperties, TableRowsSplit, Tablet, TabletSmartphone, Tablets, Tag, Tags, Tally1, Tally2, Tally3, Tally4, Tally5, Tangent, Target, Telescope, Tent, TentTree, Terminal, TestTube, TestTubeDiagonal, TestTubes, Text, TextCursor, TextCursorInput, TextQuote, TextSearch, TextSelect, Theater, Thermometer, ThermometerSnowflake, ThermometerSun, ThumbsDown, ThumbsUp, Ticket, TicketCheck, TicketMinus, TicketPercent, TicketPlus, TicketSlash, TicketX, Tickets, TicketsPlane, Timer, TimerOff, TimerReset, ToggleLeft, ToggleRight, Toilet, Tornado, Torus, Touchpad, TouchpadOff, TowerControl, ToyBrick, Tractor, TrafficCone, TrainFront, TrainFrontTunnel, TrainTrack, TramFront, Transgender, Trash, Trash2, TreeDeciduous, TreePalm, TreePine, Trees, Trello, TrendingDown, TrendingUp, TrendingUpDown, Triangle, TriangleAlert, TriangleDashed, TriangleRight, Trophy, Truck, Turtle, Tv, TvMinimal, TvMinimalPlay, Twitch, Twitter, Type, TypeOutline, Umbrella, UmbrellaOff, Underline, Undo, Undo2, UndoDot, UnfoldHorizontal, UnfoldVertical, Ungroup, University, Unlink, Unlink2, Unplug, Upload, Usb, User, UserCheck, UserCog, UserMinus, UserPen, UserPlus, UserRound, UserRoundCheck, UserRoundCog, UserRoundMinus, UserRoundPen, UserRoundPlus, UserRoundSearch, UserRoundX, UserSearch, UserX, Users, UsersRound, Utensils, UtensilsCrossed, UtilityPole, Variable, Vault, Vegan, VenetianMask, Venus, VenusAndMars, Vibrate, VibrateOff, Video, VideoOff, Videotape, View, Voicemail, Volleyball, Volume, Volume1, Volume2, VolumeOff, VolumeX, Vote, Wallet, WalletCards, WalletMinimal, Wallpaper, Wand, WandSparkles, Warehouse, WashingMachine, Watch, Waves, WavesLadder, Waypoints, Webcam, Webhook, WebhookOff, Weight, Wheat, WheatOff, WholeWord, Wifi, WifiHigh, WifiLow, WifiOff, WifiZero, Wind, WindArrowDown, Wine, WineOff, Workflow, Worm, WrapText, Wrench, X, Youtube, Zap, ZapOff, ZoomIn, ZoomOut };
//# sourceMappingURL=index.d.ts.map