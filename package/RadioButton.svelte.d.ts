import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        radioButtonLabel: any;
        id: any;
        checked?: boolean | undefined;
        radioButtonStyle?: string | undefined;
        radioButtonLabelStyle?: string | undefined;
        name: string;
        value: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type RadioButtonProps = typeof __propDef.props;
export declare type RadioButtonEvents = typeof __propDef.events;
export declare type RadioButtonSlots = typeof __propDef.slots;
export default class RadioButton extends SvelteComponentTyped<RadioButtonProps, RadioButtonEvents, RadioButtonSlots> {
}
export {};
