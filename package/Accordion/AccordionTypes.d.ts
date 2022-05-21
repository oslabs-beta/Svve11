export declare type panelInfoTypes = {
    id: number;
    panelContent: string;
    headerTitle: string;
};
export declare type optionsTypes = {
    multiselectable: boolean;
    headerLevel: (number | null);
    panelInfo: panelInfoTypes[];
    styles?: (string | null)[];
};
