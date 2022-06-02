import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        tableProps?: {
            id?: string | undefined;
            ariaLabel: string;
            ariaDescription: string;
            columnNames: string[];
            rowsContent: string[][];
            styles?: {
                overallStyles?: string | null | undefined;
                titleStyles?: string | null | undefined;
                headersRowStyles?: string | null | undefined;
                generalRowStyles?: string | null | undefined;
                oddRowStyles?: string | null | undefined;
                evenRowStyles?: string | null | undefined;
            } | undefined;
        } | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type TableProps = typeof __propDef.props;
export declare type TableEvents = typeof __propDef.events;
export declare type TableSlots = typeof __propDef.slots;
/**
 * https://svve11.io/pages/table
 *
 * Props are passed in through the tableProps prop, which should be an object containing the following properties
 * ```tsx
 * id: string (optional)
 * ariaLabel: string (required)
 * ariaDescription: string (required)
 * columnNames: array of string (required)
 * rowsContent: array of arrays of strings (required)
 * styles: object (optional)
 * - overallStyles:string (optional)
 * - titleStyles:string (optional)
 * - headersRowStyles:string (optional)
 * - generalRowStyles:string (optional)
 * - oddRowStyles:string (optional)
 * - evenRowStyles:string (optional)
 * ```
 */
export default class Table extends SvelteComponentTyped<TableProps, TableEvents, TableSlots> {
}
export {};
