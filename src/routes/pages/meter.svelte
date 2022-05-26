<script>

    import Meter from "$lib/Meter.svelte";

    let currValue = 60
</script>

<div class='test-div'>
    <Meter 
        value={currValue}
        maxValue={100}
        minValue={0}
        
        highValue={80}
        lowValue={20}
        optimumValue={80}
    
        meterLabel="Demo Meter"
        id={1}
    />
</div>
<div class='test-div'>
    <Meter 
        value={currValue}
        maxValue={100}
        minValue={0}
        
        highValue={80}
        lowValue={20}
        optimumValue={80}
    
        meterLabel="Demo Meter"
        id={1}

        labelStyle='font-size: 20px; position: relative; bottom: 30%;'
        meterStyle='width: 50%; height: 100%;'
    />
</div>

<style>
    .test-div {
        width: 500px;
        height: 50px;
    }
</style>