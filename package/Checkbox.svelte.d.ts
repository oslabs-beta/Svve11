import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        options?: {
            checkBoxLabel: string | null;
            id: string | null;
            checked: boolean;
            checkBoxStyle?: string | null | undefined;
            checkBoxLabelStyle?: string | null | undefined;
            name?: string | null | undefined;
            value?: string | null | undefined;
        } | undefined;
        defaultStyle?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type CheckboxProps = typeof __propDef.props;
export declare type CheckboxEvents = typeof __propDef.events;
export declare type CheckboxSlots = typeof __propDef.slots;
/**
 * Props are passed in through the options object which contains the following properties:
 * ```tsx
 * id: string (required)
 * checkBoxLabel: string (required)
 *
 * checkBoxStyle: number (string)
 * checked: boolean (optional)
 * checkBoxLabelStyle: string (optional)
 * name: string (optional)
 * value: string (optional)
 * ```
 */
export default class Checkbox extends SvelteComponentTyped<CheckboxProps, CheckboxEvents, CheckboxSlots> {
}
export {};
