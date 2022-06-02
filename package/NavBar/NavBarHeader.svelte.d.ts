import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        header: string;
        imgSrc: string;
        imgClass: string;
        imgAlt: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type NavBarHeaderProps = typeof __propDef.props;
export declare type NavBarHeaderEvents = typeof __propDef.events;
export declare type NavBarHeaderSlots = typeof __propDef.slots;
export default class NavBarHeader extends SvelteComponentTyped<NavBarHeaderProps, NavBarHeaderEvents, NavBarHeaderSlots> {
}
export {};
