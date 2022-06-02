import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        handleClick: () => void;
        content?: string | undefined;
        id?: string | undefined;
        label?: string | undefined;
        style?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type ButtonProps = typeof __propDef.props;
export declare type ButtonEvents = typeof __propDef.events;
export declare type ButtonSlots = typeof __propDef.slots;
export default class Button extends SvelteComponentTyped<ButtonProps, ButtonEvents, ButtonSlots> {
}
export {};
