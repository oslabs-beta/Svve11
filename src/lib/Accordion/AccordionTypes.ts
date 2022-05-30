export type panelInfoTypes = {
    id: number;
    panelContent: string;
    headerTitle: string;
  };

export type optionsTypes = {
    multiselectable: boolean;
    headerLevel?: (number | null);
    panelInfo: panelInfoTypes[];
    styles?: (string)[];
  };