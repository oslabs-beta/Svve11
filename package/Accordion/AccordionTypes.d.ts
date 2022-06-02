export declare type panelInfoTypes = {
    id: number;
    panelContent: string;
    headerTitle: string;
};
export declare type optionsTypes = {
    multiselectable: boolean;
    headerLevel?: (number | undefined);
    panelInfo: panelInfoTypes[];
    styles?: accordionStylesObject;
};
export declare type accordionStylesObject = {
    accordionHeaderStyle: string;
    accordionPanelStyle: string;
    accordionItemStyle: string;
    overallAccordionStyle: string;
};
