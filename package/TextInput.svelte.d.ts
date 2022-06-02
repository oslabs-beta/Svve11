import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        options?: {
            label: string | null;
            placeholder: string | null;
            id: string | null;
            type: ("" | "number" | "date" | "datetime-local" | "email" | "month" | "password" | "tel" | "text" | "time" | "url" | "week") | null;
            max?: number | null | undefined;
            min?: number | null | undefined;
            maxlength?: number | null | undefined;
            size?: number | null | undefined;
            step?: number | null | undefined;
            inputStyle?: string | null | undefined;
            labelStyle?: string | null | undefined;
            autocomplete?: boolean | undefined;
            disabled?: boolean | undefined;
            multiple?: boolean | undefined;
            readonly?: boolean | undefined;
            required?: boolean | undefined;
        } | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type TextInputProps = typeof __propDef.props;
export declare type TextInputEvents = typeof __propDef.events;
export declare type TextInputSlots = typeof __propDef.slots;
/**
 * Props are passed in through the options object which contains the following properties:
 * ```tsx
 * label: string (required)
 * placeholder: string (required)
 * id: string (required)
 * type: string (required)
 * inputStyle: string (optional)
 * labelStyle: string (optional)
 * ```
 */
export default class TextInput extends SvelteComponentTyped<TextInputProps, TextInputEvents, TextInputSlots> {
}
export {};
