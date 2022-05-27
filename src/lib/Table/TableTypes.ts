export type TableProps = {
  id: string;
  ariaLabel: string;
  ariaDescription: string;
  columnNames: string[];
  rowsContent: string[][];
  styles?: string[];
}