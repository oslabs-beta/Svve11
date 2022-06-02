import { SvelteComponentTyped } from "svelte";
import type { sectionTypes } from './NavBarTypes';
declare const __propDef: {
    props: {
        contentInfo?: sectionTypes[] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type NavBarOptionsProps = typeof __propDef.props;
export declare type NavBarOptionsEvents = typeof __propDef.events;
export declare type NavBarOptionsSlots = typeof __propDef.slots;
export default class NavBarOptions extends SvelteComponentTyped<NavBarOptionsProps, NavBarOptionsEvents, NavBarOptionsSlots> {
}
export {};
