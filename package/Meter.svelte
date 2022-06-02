<script>import { afterUpdate } from 'svelte';
export let options = {
    maxValue: 100,
    minValue: 0,
    meterLabel: null,
    id: null
};
let { maxValue, minValue, meterLabel, id } = options;
export let value;
$: value;
let displayDecimal, units, valueText, meterStyle, labelStyle, lowValue, highValue, optimumValue;
if (options.displayDecimal)
    displayDecimal = options.displayDecimal;
if (options.units)
    units = options.units;
if (options.valueText)
    valueText = options.valueText;
if (options.meterStyle)
    meterStyle = options.meterStyle;
if (options.labelStyle)
    labelStyle = options.labelStyle;
if (options.lowValue)
    lowValue = options.lowValue;
if (options.highValue)
    highValue = options.highValue;
if (options.optimumValue)
    optimumValue = options.optimumValue;
//Variables for displaying non percentage label of meter
let displayValue;
let displayString;
$: displayValue, displayString;
// Build Display String. Default to percentage form unless displayDecimal is provided as true
afterUpdate(() => {
    if (displayDecimal) {
        displayValue = value;
        displayString = displayValue.toString() + units;
    }
    else {
        // Default to percentage form
        displayValue = (value / maxValue) * 100;
        displayString = displayValue + '%';
    }
});
if (minValue > maxValue) {
    alert('The minValue must be less than the maxValue for the meter component');
}
</script>

<!-- @component
Props are passed in through an options object, except for the value which is a separate attribute. 
Options should be defined by an object containing the following properties
```tsx
value: number (required) - Passed as separate attribute
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

<label
	for={`meter-${id}`}
	id={`meter-label-${id}`}
	class="sv-meter-label"
	style={labelStyle ? labelStyle : ''}
>
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
	style={meterStyle ? meterStyle : ''}
	aria-valuenow={value}
	aria-valuemax={maxValue}
	aria-valuemin={minValue}
	aria-labelledby={`meter-label-${id}`}
	aria-valuetext={valueText ? valueText : ''}
	data-testid="meter-test"
/>

<style>
</style>
