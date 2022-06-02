<script>import { afterUpdate } from 'svelte';
//Require Props
export let value;
export let maxValue;
export let minValue;
export let meterLabel;
export let id;
//Optional Props
export let lowValue;
export let highValue;
export let optimumValue;
export let valueText = '';
export let displayDecimal = false;
export let units = '';
export let meterStyle = '';
export let labelStyle = '';
//Variables for displaying non percentage label of meter
let displayValue;
let displayString;
// Build Display String. Default to percentage form unless displayDecimal is provided as true
afterUpdate(() => {
    if (displayDecimal) {
        displayValue = value;
        displayString = displayValue.toString() + units;
    }
    else {
        displayValue = (value / maxValue) * 100;
        displayString = displayValue + '%';
    }
});
if (minValue > maxValue) {
    console.log('The min value must be less than the max value');
}
</script>

<label class="sv-meter-label" for={`meter-${id}`} id={`meter-label-${id}`} style={labelStyle}>
	{meterLabel}: {displayString}
</label>
<meter
	class="sv-meter"
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
