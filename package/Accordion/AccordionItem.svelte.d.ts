import { SvelteComponentTyped } from "svelte";
import type { panelInfoTypes, accordionStylesObject } from './AccordionTypes';
declare const __propDef: {
    props: {
        options: panelInfoTypes;
        headerLevel?: number | undefined;
        customStyles: accordionStylesObject;
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
export declare type AccordionItemProps = typeof __propDef.props;
export declare type AccordionItemEvents = typeof __propDef.events;
export declare type AccordionItemSlots = typeof __propDef.slots;
export default class AccordionItem extends SvelteComponentTyped<AccordionItemProps, AccordionItemEvents, AccordionItemSlots> {
}
export {};
