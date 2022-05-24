<!-- ************************* SCRIPTS ************************* -->
<script lang="ts">
	export let ariaLabel: string = '';
	export let ariaDescription: string = '';
	// export const tableContents: [String[], String[]] = [
	// 	// column names *required
	// 	['Name', 'Age', 'Birthday'],
	// 	// each additional array represents a row
	// 	['Simon', '26', '11/25/1995']
	// ];

	let columnNamesArr: String[] = ['Name', 'Age', 'Birthday'];
  $: columnNamesArr = [];
	let rowsArr: [String[]] = [['Simon', '26', '11/25/1995']];
  $: rowsArr = [];

  
</script>

<!-- ************************* HTML ************************* -->
<!-- overall table component -->
<div role="table" aria-label={ariaLabel} aria-describedby={ariaLabel + '_table_desc'}>
	<div id={ariaLabel + '_table_desc'}>
		{ariaDescription}
	</div>

	<!-- first row contains Column Names -->
	<div role="rowgroup" id="column-names">
		<div role="row">
			<!-- populate the columns with each element in the column names array -->
			{#each columnNamesArr as columnName}
				<span role="columnheader">{columnName}</span>
			{/each}
		</div>
	</div>

	<!-- populate table with all row content -->
	<div role="rowgroup">
		<!-- for each row... -->
		{#each rowsArr as rowContentArr}
			<div role="row">
				<!-- for each item in the row... -->
				{#each rowContentArr as rowContent}
					<!-- fill in cell with string -->
					<span role="cell">{rowContent}</span>
				{/each}
			</div>
		{/each}
	</div>
</div>

<!-- ************************* STYLES ************************* -->
<style></style>
