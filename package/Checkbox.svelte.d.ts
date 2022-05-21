import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        checkBoxLabel: any;
        id: any;
        checked?: boolean | undefined;
        defaultStyle?: string | undefined;
        checkBoxStyle?: string | undefined;
        checkBoxLabelStyle?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type CheckboxProps = typeof __propDef.props;
export declare type CheckboxEvents = typeof __propDef.events;
export declare type CheckboxSlots = typeof __propDef.slots;
export default class Checkbox extends SvelteComponentTyped<CheckboxProps, CheckboxEvents, CheckboxSlots> {
}
export {};
