import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        subheading: string;
        options?: string[] | undefined;
        links?: string[] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type NavBarListsProps = typeof __propDef.props;
export declare type NavBarListsEvents = typeof __propDef.events;
export declare type NavBarListsSlots = typeof __propDef.slots;
export default class NavBarLists extends SvelteComponentTyped<NavBarListsProps, NavBarListsEvents, NavBarListsSlots> {
}
export {};
