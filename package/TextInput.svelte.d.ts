import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        label?: string | undefined;
        placeholder?: string | undefined;
        id?: string | undefined;
        type?: string | undefined;
        max?: string | undefined;
        min?: string | undefined;
        maxlength?: string | undefined;
        size?: string | undefined;
        step?: string | undefined;
        inputStyle?: string | undefined;
        labelStyle?: string | undefined;
        autocomplete?: boolean | undefined;
        disabled?: boolean | undefined;
        multiple?: boolean | undefined;
        readonly?: boolean | undefined;
        required?: boolean | undefined;
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
