import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        options?: {
            maxValue: number;
            minValue: number;
            meterLabel: string | null;
            id: string | number | null;
            lowValue?: number | null | undefined;
            highValue?: number | null | undefined;
            optimumValue?: number | null | undefined;
            valueText?: string | null | undefined;
            displayDecimal?: boolean | undefined;
            units?: string | null | undefined;
            meterStyle?: string | null | undefined;
            labelStyle?: string | null | undefined;
        } | undefined;
        value: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type MeterProps = typeof __propDef.props;
export declare type MeterEvents = typeof __propDef.events;
export declare type MeterSlots = typeof __propDef.slots;
/**
 * Props are passed in through an options object, except for the value which is a separate attribute.
 * Options should be defined by an object containing the following properties
 * ```tsx
 * value: number (required) - Passed as separate attribute
 * maxValue: number (required)
 * minValue: number (required)
 * meterLabel: string (required)
 * id: number (required)
 *
 * lowValue: number (optional)
 * highValue : number (optional)
 * optimumValue : number (optional)
 * valueText : string (optional)
 * displayDecimal : boolean (optional)
 * units : string (optional)
 * meterStyle : string (optional)
 * labelStyle  : string (optional)
 * ```
 */
export default class Meter extends SvelteComponentTyped<MeterProps, MeterEvents, MeterSlots> {
}
export {};
