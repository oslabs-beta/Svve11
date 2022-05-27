<!-- ************************* SCRIPTS ************************* -->
<script lang="ts">
	import type { TableProps } from "./Table/TableTypes";

	export let tableProps: TableProps = {
		ariaLabel: '',
		ariaDescription: '',
		columnNames: [''],
		rowsContent: [['']],
		
		styles: {
			overallTableStyles: '',
			tableTitleStyles: '',
			headerRowStyles: ''
		}
			// [0] Overall Table styles
			'',
			// [1] ColumnName Row styles
			'',
			// [2 - ...] Individual Row styles
			'',
			// Individual Cell styles?
		],
	}

	const { id, ariaLabel, ariaDescription } = tableProps;
	let { columnNames, rowsContent } = tableProps;
	$: columnNames
	$: rowsContent

	let overallTableStyles:(string | null) = null
	let tableTitleStyles:(string | null) = null
	let headerRowStyles:(string | null) = null
	// let individualRowStyles:(string[] | null) = null

	$: overallTableStyles
	$: tableTitleStyles
	$: headerRowStyles
	// $: individualRowStyles

</script>

<!-- ************************* HTML ************************* -->
<table id={id} aria-label={ariaLabel} aria-describedby={ariaLabel + '_table_desc'}
	style={tableProps.style[0] ? tableProps.style[0] : ''}
>
	<div id={ariaLabel + '_table_desc'} class='table-description'
			style={tableTitleStyles}
	>
		{ariaDescription}
	</div>

	<!-- first row contains Column Names -->
	<tr id="column-names"
		{#if headerRowStyles}
			style={headerRowStyles}
		{/if}
	>
			<!-- populate the columns with each element in the column names array -->
			{#each columnNames as columnName}
				<th role="columnheader">{columnName}</th>
			{/each}
	</tr>

	<!-- populate table with all row content -->
	<!-- for each row... -->
	<!-- {#if individualRowStyles}
		{#each individualRowStyles as rowStyle, rowIndex}
			
		{/each}
	{/if} -->
	{#each rowsContent as rowContent}
		<tr>
			<!-- for each item in the row... -->
			{#each rowContent as cellContent}
				<!-- fill in cell with string -->
				<td role="cell">{cellContent}</td>
			{/each}
		</tr>
	{/each}
</table>

<!-- ************************* STYLES ************************* -->
<style>

	#column-names {
		background-color: powderblue;
	}

	th {
		font-weight: 500;
	}

	td {
	background-color: lightgrey;
	}

	.table-description {
		font-weight: bold; 
		font-size: 125%
	}
</style>
