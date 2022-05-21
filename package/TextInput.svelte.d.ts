import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        label: string;
        placeholder: string;
        id: string;
        type: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type TextInputProps = typeof __propDef.props;
export declare type TextInputEvents = typeof __propDef.events;
export declare type TextInputSlots = typeof __propDef.slots;
export default class TextInput extends SvelteComponentTyped<TextInputProps, TextInputEvents, TextInputSlots> {
}
export {};
