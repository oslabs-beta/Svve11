import { SvelteComponentTyped } from "svelte";
import type { accordionStylesObject } from './AccordionTypes';
declare const __propDef: {
    props: {
        headerTitle: string;
        controls: string;
        id: string;
        customStyles: accordionStylesObject;
        textToRead: string;
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
export declare type AccordionButtonProps = typeof __propDef.props;
export declare type AccordionButtonEvents = typeof __propDef.events;
export declare type AccordionButtonSlots = typeof __propDef.slots;
export default class AccordionButton extends SvelteComponentTyped<AccordionButtonProps, AccordionButtonEvents, AccordionButtonSlots> {
}
export {};
