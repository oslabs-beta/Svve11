import { SvelteComponentTyped } from "svelte";
import type { optionsTypes } from './NavBar/NavBarTypes';
declare const __propDef: {
    props: {
        options?: optionsTypes | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type NavBarProps = typeof __propDef.props;
export declare type NavBarEvents = typeof __propDef.events;
export declare type NavBarSlots = typeof __propDef.slots;
/**
 * Props are passed in through the options object which contains the following properties:
 * ```tsx
 * contentInfo : array of objects (required)
 * Each object in the array contains:
 * - subheading: string (optional)
 * - option: an array of strings (required)
 * - links: array (required)
 *
 * id: string (optional)
 * header: string (optional)
 * imgSrc: string (optional)
 * imgClass: string (optional)
 * imgAlt: string (optional)
 * ```
 */
export default class NavBar extends SvelteComponentTyped<NavBarProps, NavBarEvents, NavBarSlots> {
}
export {};
