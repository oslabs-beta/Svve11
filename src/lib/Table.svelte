<!-- ************************* SCRIPTS ************************* -->
<script lang="ts">
	import type { TableProps } from './Table/TableTypes';

	export let tableProps: TableProps = {
		ariaLabel: '',
		ariaDescription: '',
		columnNames: [''],
<<<<<<< HEAD
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
=======
		rowsContent: [['']]
	};
>>>>>>> main

	const { id, ariaLabel, ariaDescription } = tableProps;
	let { columnNames, rowsContent } = tableProps;
	$: columnNames;
	$: rowsContent;

	let styles, overallTableStyles, tableTitleStyles, headerRowStyles, genRowStyles;
	if (tableProps.styles) {
		styles = tableProps.styles;
		if (styles.overallTableStyles) overallTableStyles = styles.overallTableStyles;
		if (styles.tableTitleStyles) tableTitleStyles = styles.tableTitleStyles;
		if (styles.headerRowStyles) headerRowStyles = styles.headerRowStyles;
		if (styles.genRowStyles) genRowStyles = styles.genRowStyles;
	}
</script>

<!-- ************************* HTML ************************* -->
<<<<<<< HEAD
<table id={id} aria-label={ariaLabel} aria-describedby={ariaLabel + '_table_desc'}
	style={tableProps.style[0] ? tableProps.style[0] : ''}
>
	<div id={ariaLabel + '_table_desc'} class='table-description'
			style={tableTitleStyles}
=======
<table
	{id}
	aria-label={ariaLabel}
	aria-describedby={ariaLabel + '_table_desc'}
	style={overallTableStyles ? overallTableStyles : ''}
>
	<div
		id={ariaLabel + '_table_desc'}
		class="table-title"
		style={tableTitleStyles ? tableTitleStyles : ''}
>>>>>>> main
	>
		{ariaDescription}
	</div>

	<!-- first row contains Column Names -->
	<tr id="column-names" style={headerRowStyles ? headerRowStyles : ''}>
		<!-- populate the columns with each element in the column names array -->
		{#each columnNames as columnName}
			<th role="columnheader">{columnName}</th>
		{/each}
	</tr>

	<!-- populate table with all row content -->
	{#each rowsContent as rowContent}
		<tr style={genRowStyles ? genRowStyles : ''}>
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

	.table-title {
		font-weight: bold;
		font-size: 125%;
		background-color: none;
	}

	th {
		font-weight: 500;
	}
<<<<<<< HEAD

	td {
	background-color: lightgrey;
	}

	.table-description {
		font-weight: bold; 
		font-size: 125%
	}
=======
>>>>>>> main
</style>
