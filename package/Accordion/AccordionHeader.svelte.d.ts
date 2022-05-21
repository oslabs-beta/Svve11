import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        headerLevel?: number | undefined;
        headerTitle: string;
        controls?: string | undefined;
        style?: string | undefined;
        textToRead?: string | undefined;
        id: string;
        isOpen: boolean;
    };
    events: {
        updatePanelStates: CustomEvent<{
            target: string;
        }>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type AccordionHeaderProps = typeof __propDef.props;
export declare type AccordionHeaderEvents = typeof __propDef.events;
export declare type AccordionHeaderSlots = typeof __propDef.slots;
export default class AccordionHeader extends SvelteComponentTyped<AccordionHeaderProps, AccordionHeaderEvents, AccordionHeaderSlots> {
}
export {};
