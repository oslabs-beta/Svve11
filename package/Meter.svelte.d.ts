import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        value: number;
        maxValue: number;
        minValue: number;
        meterLabel: string;
        id: number;
        lowValue: number;
        highValue: number;
        optimumValue: number;
        valueText?: string | undefined;
        displayDecimal?: boolean | undefined;
        units?: string | undefined;
        meterStyle?: string | undefined;
        labelStyle?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type MeterProps = typeof __propDef.props;
export declare type MeterEvents = typeof __propDef.events;
export declare type MeterSlots = typeof __propDef.slots;
export default class Meter extends SvelteComponentTyped<MeterProps, MeterEvents, MeterSlots> {
}
export {};
