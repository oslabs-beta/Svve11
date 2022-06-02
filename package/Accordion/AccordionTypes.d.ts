export declare type panelInfoTypes = {
    id: number | string;
    panelContent: string;
    headerTitle: string;
};
export declare type optionsTypes = {
    multiselectable: boolean;
    headerLevel: (number | undefined);
    panelInfo: panelInfoTypes[];
    styles?: accordionStylesObjectTypes;
};
export declare type accordionStylesObjectTypes = {
    accordionHeaderStyle?: string;
    accordionPanelStyle?: string;
    accordionItemStyle?: string;
    overallAccordionStyle?: string;
};
