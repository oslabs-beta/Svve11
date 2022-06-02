import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        panelContent?: string | undefined;
        isOpen: boolean;
        panelID: string;
        labeledBy: string;
        style?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type AccordionPanelProps = typeof __propDef.props;
export declare type AccordionPanelEvents = typeof __propDef.events;
export declare type AccordionPanelSlots = typeof __propDef.slots;
export default class AccordionPanel extends SvelteComponentTyped<AccordionPanelProps, AccordionPanelEvents, AccordionPanelSlots> {
}
export {};
