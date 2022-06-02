import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        options?: {
            handleClick: () => void;
            content: string | null;
            label: string | null;
            id?: string | null | undefined;
            style?: string | null | undefined;
        } | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type ButtonProps = typeof __propDef.props;
export declare type ButtonEvents = typeof __propDef.events;
export declare type ButtonSlots = typeof __propDef.slots;
/**
 * Props are passed in through the options object which contains the following properties:
 * ```tsx
 * label: string (required)
 * content: string (required)
 * handleClick: function (required)
 * id: string (optional)
 * style: string (optional)
 * ```
 */
export default class Button extends SvelteComponentTyped<ButtonProps, ButtonEvents, ButtonSlots> {
}
export {};
