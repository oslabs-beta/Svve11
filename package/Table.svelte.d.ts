import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        options?: {
            id: string;
            ariaLabel: string;
            ariaDescription: string;
            columnNames: string[];
            rowsContent: string[][];
            styles?: {
                overallStyles?: string | undefined;
                titleStyles?: string | undefined;
                headersRowStyles?: string | undefined;
                generalRowStyles?: string | undefined;
                oddRowStyles?: string | undefined;
                evenRowStyles?: string | undefined;
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
 * Props are passed in through the options object that contains the following properties:
 * ```tsx
 * id: string (required)
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
