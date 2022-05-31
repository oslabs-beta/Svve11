export type panelInfoTypes = {
    id: number;
    panelContent: string;
    headerTitle: string;
  };

export type optionsTypes = {
    multiselectable: boolean;
    headerLevel?: (number | undefined);
    panelInfo: panelInfoTypes[];
    styles?: accordionStylesObject;
  };

  export type accordionStylesObject = {
    accordionHeaderStyle: string,
    accordionPanelStyle: string,
    accordionItemStyle: string,
    overallAccordionStyle: string,
  }