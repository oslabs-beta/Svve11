<!-- ************************* SCRIPTS ************************* -->
<script lang="ts">
	import type { TableProps } from "./Table/TableTypes";

	export let tableProps: TableProps = {
		ariaLabel: '',
		ariaDescription: '',
		columnNames: [''],
		rowsContent: [['']],
	}

	let { ariaLabel, ariaDescription, columnNames, rowsContent } = tableProps;

	$: columnNames
	$: rowsContent
	
</script>

<!-- ************************* HTML ************************* -->
<!-- overall table component -->
<table aria-label={ariaLabel} aria-describedby={ariaLabel + '_table_desc'}>
	<div id={ariaLabel + '_table_desc'} style="font-weight: bold; font-size: 125%">
		{ariaDescription}
	</div>

	<!-- first row contains Column Names -->
	<tr id="column-names">
			<!-- populate the columns with each element in the column names array -->
			{#each columnNames as columnName}
				<th role="columnheader">{columnName}</th>
			{/each}
	</tr>

	<!-- populate table with all row content -->
	<!-- for each row... -->
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
</style>
