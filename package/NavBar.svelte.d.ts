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
export default class NavBar extends SvelteComponentTyped<NavBarProps, NavBarEvents, NavBarSlots> {
}
export {};
