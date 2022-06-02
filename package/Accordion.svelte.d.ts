import { SvelteComponentTyped } from "svelte";
import type { optionsTypes } from './Accordion/AccordionTypes';
declare const __propDef: {
    props: {
        options?: optionsTypes | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type AccordionProps = typeof __propDef.props;
export declare type AccordionEvents = typeof __propDef.events;
export declare type AccordionSlots = typeof __propDef.slots;
/**
 * Props are passed in through the options object which contains the following properties:
 * ```tsx
 * panelInfo: array of objects (required)
 * Each object in the array contains:
 * - id: number (required)
 * - panelContent: string (required)
 * - headerTitle: string (required)
 * headerLevel: number (required)
 * styles: an object with (4) properties (optional)
 * - accordionHeaderStyle: string (optional)
 * - accordionPanelStyle: string (optional)
 * - accordionItemStyle: string (optional)
 * - overallAccordionStyle: string (optional)
 * multiselectable:boolean (optional)
 * ```
 */
export default class Accordion extends SvelteComponentTyped<AccordionProps, AccordionEvents, AccordionSlots> {
}
export {};
