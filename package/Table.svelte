<!-- ************************* SCRIPTS ************************* -->
<script>export let options = {
    id: '',
    ariaLabel: '',
    ariaDescription: '',
    columnNames: [''],
    rowsContent: [['']]
};
const { id, ariaLabel, ariaDescription, columnNames, rowsContent } = options;
$: columnNames;
$: rowsContent;
let styles, overallStyles, titleStyles, headersRowStyles, generalRowStyles, oddRowStyles, evenRowStyles;
if (options.styles) {
    styles = options.styles;
    if (styles.overallStyles)
        overallStyles = styles.overallStyles;
    if (styles.titleStyles)
        titleStyles = styles.titleStyles;
    if (styles.headersRowStyles)
        headersRowStyles = styles.headersRowStyles;
    if (styles.generalRowStyles)
        generalRowStyles = styles.generalRowStyles;
    if (styles.oddRowStyles)
        oddRowStyles = styles.oddRowStyles;
    if (styles.evenRowStyles)
        evenRowStyles = styles.evenRowStyles;
}
</script>

<!-- ************************* HTML ************************* -->
<!-- @component
https://svve11.io/pages/table

Props are passed in through the options object that contains the following properties:
```tsx
	id: string (required)
	ariaLabel: string (required)
	ariaDescription: string (required)
	columnNames: array of string (required)
	rowsContent: array of arrays of strings (required)
	styles: object (optional) 
	- overallStyles:string (optional)
	- titleStyles:string (optional) 
	- headersRowStyles:string (optional)
	- generalRowStyles:string (optional) 
	- oddRowStyles:string (optional)
	- evenRowStyles:string (optional)
```
 -->
<div role="region" aria-labelledby={id} tabindex="0">
	<table
		{id}
		aria-label={ariaLabel}
		aria-describedby={ariaLabel + '_table_desc'}
		class="sv-table"
		style={overallStyles ? overallStyles : ''}
	>
		<!-- Title of the table - doubles as the aria-description text -->
		<caption
			id={ariaLabel + '_table_desc'}
			class="sv-table-title"
			style={titleStyles ? titleStyles : ''}
		>
			{ariaDescription}
		</caption>

		<!-- First row contains Column Names -->
		<thead>
			<tr class="sv-table-row-headers">
				<!-- populate the columns with each element in the column names array -->
				{#each columnNames as columnName}
					<th role="columnheader" style={headersRowStyles ? headersRowStyles : ''}>{columnName}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			<!-- populate table with all row content -->
			{#each rowsContent as rowContent, i}
				<tr class={'sv-table-row ' + (i % 2 === 0 ? 'sv-table-row-even' : 'sv-table-row-odd')}>
					<!-- for each item in the row... -->
					{#each rowContent as cellContent}
						<!-- fill in cell with content -->
						<td
							role="cell"
							class="sv-table-cell"
							style={'' +
								(generalRowStyles ? generalRowStyles : '') +
								'; ' +
								(i % 2 === 0 && evenRowStyles ? evenRowStyles : '') +
								(i % 2 !== 0 && oddRowStyles ? oddRowStyles : '')}>{cellContent}</td
						>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<!-- ************************* STYLES ************************* -->
<style>
	.sv-table-title {
		font-weight: bold;
		font-size: 125%;
		background-color: none;
	}

	th {
		font-weight: 500;
	}
</style>
