import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        href?: string | undefined;
        src?: string | undefined;
        title?: string | undefined;
        alt?: string | undefined;
        imgId?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type ImageLinkProps = typeof __propDef.props;
export declare type ImageLinkEvents = typeof __propDef.events;
export declare type ImageLinkSlots = typeof __propDef.slots;
export default class ImageLink extends SvelteComponentTyped<ImageLinkProps, ImageLinkEvents, ImageLinkSlots> {
}
export {};
