export type panelInfoTypes = {
    id: number | string;
    panelContent: string;
    headerTitle: string;
  };

export type optionsTypes = {
    multiselectable: boolean;
    headerLevel: (number | undefined);
    panelInfo: panelInfoTypes[];
    styles?: accordionStylesObjectTypes;
  };

  export type accordionStylesObjectTypes = {
    accordionHeaderStyle?: string,
    accordionPanelStyle?: string,
    accordionItemStyle?: string,
    overallAccordionStyle?: string,
  }