<script lang="ts">
	import { afterUpdate } from 'svelte';

	type MeterOptionTypes = {
		value: number | null;
		maxValue: number | null;
		minValue: number | null;
		meterLabel: string | null;
		id: string | number | null;

		lowValue?: number | null;
		highValue?: number | null;
		optimumValue?: number | null;
		valueText?: string | null;
		displayDecimal?: boolean;
		units?: string | null;
		meterStyle?: string | null;
		labelStyle?: string | null;
	};

	export let options: MeterOptionTypes = {
		value: null,
		maxValue: null,
		minValue: null,
		meterLabel: null,
		id: null,

		displayDecimal: false,
		units: null,
		valueText: null,
		meterStyle: null,
		labelStyle: null,
		lowValue: null,
		highValue: null,
		optimumValue: null
	};

	let {
		value,
		maxValue,
		minValue,
		meterLabel,
		displayDecimal,
		units,
		valueText,
		meterStyle,
		labelStyle,
		id,
		lowValue,
		highValue,
		optimumValue
	} = options;

	// //Require Props
	// export let value: number;
	// export let maxValue: number;
	// export let minValue: number;
	// export let meterLabel: string;
	// export let id: number;

	// //Optional Props
	// export let lowValue: number;
	// export let highValue: number;
	// export let optimumValue: number;
	// export let valueText: string = '';
	// export let displayDecimal: boolean = false;
	// export let units: string = '';
	// export let meterStyle: string = '';
	// export let labelStyle: string = '';

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
	class="sv-meter"
	{id}
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
