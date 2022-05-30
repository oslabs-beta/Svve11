<script lang="ts">
	import { afterUpdate } from 'svelte';

	//Require Props
	export let value: number;
	export let maxValue: number;
	export let minValue: number;
	export let meterLabel: string;
	export let id: number;

	//Optional Props
	export let lowValue: number;
	export let highValue: number;
	export let optimumValue: number;
	export let valueText: string = '';
	export let displayDecimal: boolean = false;
	export let units: string = '';
	export let meterStyle: string = '';
	export let labelStyle: string = '';

	//Variables for displaying non percentage label of meter
	let displayValue: number;
	let displayString: string;

	// Build Display String. Default to percentage form unless displayDecimal is provided as true
	afterUpdate(() => {
		if (displayDecimal) {
			displayValue = value;
			displayString = displayValue.toString() + units;
		} else {
			displayValue = (value / maxValue) * 100;
			displayString = displayValue + '%';
		}
	});

	if (minValue > maxValue) {
		console.log('The min value must be less than the max value');
	}
</script>

<!-- @component
Props are passed in through the tableProps prop, which should be an object containing the following properties
```tsx
value: number (required)
maxValue: number (required)
minValue: number (required)
meterLabel: string (required)
id: number (required)

lowValue: number (optional)
highValue : number (optional)
optimumValue : number (optional)
valueText : string (optional)
displayDecimal : boolean (optional)
units : string (optional)
meterStyle : string (optional)
labelStyle  : string (optional)


```
-->

<label for={`meter-${id}`} id={`meter-label-${id}`} style={labelStyle}>
	{meterLabel}: {displayString}
</label>
<meter
	class="meter"
	id={`meter-${id}`}
	min={minValue}
	max={maxValue}
	low={lowValue}
	high={highValue}
	optimum={optimumValue}
	{value}
	style={meterStyle}
	aria-valuenow={value}
	aria-valuemax={maxValue}
	aria-valuemin={minValue}
	aria-labelledby={`meter-label-${id}`}
	aria-valuetext={valueText}
	data-testid="meter-test"
/>

<style>
</style>
