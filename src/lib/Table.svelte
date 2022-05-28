<!-- ************************* SCRIPTS ************************* -->
<script lang="ts">
	// defining types for the props object
	type TableProps = {
		id?: string;
		ariaLabel: string;
		ariaDescription: string;
		columnNames: string[];
		rowsContent: string[][];
		styles?: TableStyles;
	};

	type TableStyles = {
		overallStyles?: string | null;
		titleStyles?: string | null;
		headersRowStyles?: string | null;
		generalRowStyles?: string | null;
		oddRowStyles?: string | null;
		evenRowStyles?: string | null;
	};

	export let tableProps: TableProps = {
		id: '',
		ariaLabel: '',
		ariaDescription: '',
		columnNames: [''],
		rowsContent: [['']]
	};

	const { id, ariaLabel, ariaDescription, columnNames, rowsContent } = tableProps;
	$: columnNames;
	$: rowsContent;

	let styles,
		overallStyles: string,
		titleStyles: string,
		headersRowStyles: string,
		generalRowStyles: string,
		oddRowStyles: string,
		evenRowStyles: string;

	if (tableProps.styles) {
		styles = tableProps.styles;
		if (styles.overallStyles) overallStyles = styles.overallStyles;
		if (styles.titleStyles) titleStyles = styles.titleStyles;
		if (styles.headersRowStyles) headersRowStyles = styles.headersRowStyles;
		if (styles.generalRowStyles) generalRowStyles = styles.generalRowStyles;
		if (styles.oddRowStyles) oddRowStyles = styles.oddRowStyles;
		if (styles.evenRowStyles) evenRowStyles = styles.evenRowStyles;
	}
</script>

<!-- ************************* HTML ************************* -->
<!-- @component
Props are passed in through the tableProps prop, which should be an object containing the following properties
```tsx
	id: string (optional)
	ariaLabel: string (required)
	ariaDescription: string (required)
	columnNames: array of string (required)
	rowsContent: array of arrays of strings (required)
	styles: object (optional) 
	* overallStyles:string (optional)
	* titleStyles:string (optional) 
	* headersRowStyles:string (optional)
	* generalRowStyles:string (optional) 
	* oddRowStyles:string (optional)
	* evenRowStyles:string (optional)
```
 -->
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
	<tr class="sv-table-row-headers">
		<!-- populate the columns with each element in the column names array -->
		{#each columnNames as columnName}
			<th role="columnheader" style={headersRowStyles ? headersRowStyles : ''}>{columnName}</th>
		{/each}
	</tr>

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
</table>

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

	td,
	th {
		background-color: white;
	}
</style>
