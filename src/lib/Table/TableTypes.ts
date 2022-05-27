export type TableProps = {
  id: string;
  ariaLabel: string;
  ariaDescription: string;
  columnNames: string[];
  rowsContent: string[][];
  styles?: TableStyles;
}

export type TableStyles = {
  overallTableStyles?:(string | null);
  tableTitleStyles?:(string | null);
	headerRowStyles?:(string | null);
  genRowStyles?:(string | null);
}