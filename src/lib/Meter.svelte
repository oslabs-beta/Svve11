<script lang='ts'>
    //Require Props
    export let value : number;
    export let maxValue : number;
    export let minValue : number;
    export let meterLabel : string;
    export let id : number;

    //Optional Props

    export let lowValue : number;
    export let highValue : number;
    export let optimumValue : number;
    export let valueText : string = '';
    export let displayDecimal : boolean = false;
    export let units : string = '';
    export let meterStyle : string = ''
    export let labelStyle : string = ''

    let displayValue : number;
    let displayString : string;
        
   if (displayDecimal) {
        displayValue = value;
        displayString = displayValue.toString() + units
    } else {
        displayValue = (value/maxValue) * 100
        displayString = displayValue + '%'
    }

    if (minValue > maxValue) {
        console.log('The min value must be less than the max value')
    }
</script>

<label 
    for={`meter-${id}`} 
    id={`meter-label-${id}`}

    style={labelStyle}
>
    {meterLabel}: {displayString} 
</label>
<meter
    class='meter'
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
>
</meter>

<style>
</style>


<!-- The element serving as the meter has a role of meter.
The meter has aria-valuenow set to a decimal value between aria-valuemin and aria-valuemax representing the current value of the meter.
The meter has aria-valuemin set to a decimal value less than aria-valuemax.
The meter has aria-valuemax set to a decimal value greater than aria-valuemin.
Assistive technologies often present aria-valuenow as a percentage. If conveying the value of the meter only in terms of a percentage would not be user friendly, the aria-valuetext property is set to a string that makes the meter value understandable. For example, a battery meter value might be conveyed as aria-valuetext="50% (6 hours) remaining".
If the meter has a visible label, it is referenced by aria-labelledby on the element with role meter. Otherwise, the element with role meter has a label provided by aria-label. -->