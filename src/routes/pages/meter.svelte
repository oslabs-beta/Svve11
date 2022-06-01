<script lang="ts">
	import { onDestroy } from 'svelte';

	import Meter from '$lib/Meter.svelte';
	import Table from '$lib/Table.svelte';
	import tableStyles from './tableStyles';

	const componentName = 'Meter';
	const githubSourceLink = 'https://github.com/oslabs-beta/Svve11/package/Meter.svelte';
	const WAIARIApracticesLink = 'https://w3c.github.io/aria-practices/#meter';

	let changingValue: number = 60;

	$: changingValue;

	const interval = setInterval(function () {
		changingValue = Math.floor(Math.random() * 100 + 1);
		console.log(changingValue);
		meterOptions3 = { ...meterOptions3, value: changingValue };
		console.log(meterOptions3);
	}, 2000);

	onDestroy(() => clearInterval(interval));

	const tableOptions = {
		id: 'props-table-meter',
		ariaLabel: 'Meter props table',
		ariaDescription: 'This table describes the props that should be passed to the meter',
		columnNames: ['Prop', 'Type', 'Required', 'Default Value'],
		rowsContent: [
			['value', 'number', 'true', 'N/A'],
			['maxValue', 'number', 'true', 'N/A'],
			['minValue', 'number', 'true', 'N/A'],
			['meterLabel', 'string', 'true', 'N/A'],
			['lowValue', 'number', 'false', 'N/A'],
			['highValue', 'number', 'false', 'N/A'],
			['optimumValue', 'number', 'false', 'N/A'],
			['valueText', 'string', 'false', 'N/A'],
			['displayDecimal', 'boolean', 'false', 'false'],
			['units', 'string', 'false', 'N/A'],
			['meterStyle', 'string', 'false', 'N/A'],
			['labelStyle', 'string', 'false', 'N/A']
		],
		styles: tableStyles
	};
	let meterOptions3 = {
		value: changingValue,
		maxValue: 10,
		minValue: 0,
		meterLabel: 'Test Meter 1',
		id: 1,
		lowValue: 5,
		displayDecimal: false,
		units: ' hours remaining',
		valueText: `${changingValue} hours remaining`
	};
	$: meterOptions3;
	const meterOptions4 = {
		value: changingValue / 10,
		maxValue: 10,
		minValue: 0,
		meterLabel: 'Test Meter 1',
		id: 1,
		lowValue: 5,
		meterStyle: 'width: 50px;',
		labelStyle: 'font-size: 20px; color: blue;'
	};
</script>

<article class="page-component">
	<header>
		<h1>{componentName}</h1>
		<ul class="resource-links-list">
			<li>Source: <a href={githubSourceLink} target="_blank">{githubSourceLink}</a></li>
			<li>
				WAI-ARIA: <a href={WAIARIApracticesLink} target="_blank">{WAIARIApracticesLink}</a>
			</li>
		</ul>
		<p class="header-paragraph">
			A meter is a graphical display of a numeric value that varies within a defined range. For
			example, a meter could be used to depict a device's current battery percentage or a car's fuel
			level
		</p>
	</header>

	<main>
		<section>
			<fieldset>
				<legend>Installation</legend>
				<h2>Installation</h2>
				<section class="content-section">
					<p>Import the component in the script section of your Svelte file:</p>
					<pre><code class="code-block">
              import Meter from 'svve11/Meter.svelte'
            </code></pre>
				</section>
			</fieldset>
		</section>
		<!-- Usage Guide -->
		<section>
			<fieldset>
				<legend>Usage</legend>
				<h2>Usage</h2>
				<section class="content-section">
					<h3>Creating a Meter</h3>
					<p>
						A meter instance can be created by placing the code below in the body of your Svelte
						file.
					</p>
					<pre><code class="code-block">
              {`<Meter {value} {maxValue} {minValue} {meterLabel} {id}/>`}
              </code></pre>
					<p>The meter has 5 <span class="bold-word">required</span> attributes:</p>
					<ul class="options-object-list">
						<li>
							value (number): sets the current value of the meter. Must be within the minValue to
							maxValue range. It is recommended to use a reactive variable to allow meter value to
							change as necessary.
						</li>
						<li>maxValue (number): sets the maximum value for the meter range</li>
						<li>minValue (number): sets the minimum value for the meter range.</li>
						<li>
							meterLabel (string): sets the text label for the meter. The label will be
							automatically joined with a percentage calculation, unless otherwise specified. See
							displayDecimal in optional props section below.
						</li>
						<li>
							id (number): sets the id for the meter. Remember to provide different id numbers when
							instantiating more than one meter on a page as the id should be unique.
						</li>
					</ul>
					<p>The meter has 8 optional attributes:</p>
					<ul>
						<li>
							highValue (number): sets the value from which a current value above is considered
							high. Must be less than maxValue and greater than the minValue and lowValue.
						</li>
						<li>
							lowValue (number): sets the value from which a current value below is considered low.
							Must be greater than minValue and less than the maxValue and highValue.
						</li>
						<li>
							optimumValue (number): sets the optimal numeric value of the meter. Must be a number
							between the minValue and maxValue. If the optimal value is set between the minValue
							and lowValue, or the maxValue and highValue, this range is considered optimal.
							Different browsers will color the bar differently depending on where the current value
							falls in relation to the optimal value.
						</li>
						<li>
							valueText (string): used for assistive technologies that read the value of the meter
							to the users. Most assistive technologies will read value as a percentage by default,
							thus this props should be provided if a percentage read does not make sense in the
							context of your meter use.
						</li>
						<li>
							displayDecimal (boolean): this will default to false. If set to true, this indicates
							to the meter that the value should not be presented as a percentage. This prop must be
							accompanied by the units prop described next.
						</li>
						<li>
							units (string): sets the units to be displayed in the meter label should the
							percentage appearance not be relevant.
						</li>
						<li>meterstyle (string): sets the style for the meter for any custom styles.</li>
						<li>labelStyle (string): sets the style for the meter label for any custom styles.</li>
					</ul>
					<h4>Example Meter Code with only required props:</h4>
					<pre><code class="code-block">
              {`<Meter
                value={60}
                maxValue={100}
                minValue={0}
                meterLabel='Test Meter 1'
                id={1}
               />`}
              </code></pre>
					<h4>Example meter with only required props:</h4>
					<div class="example-meter">
						<!-- <Meter /> -->
					</div>
					<h4>Example meter with highValue=85, lowValue=20 and optimalValue=80 props:</h4>
					<div class="example-meter">
						<!-- <Meter /> -->
					</div>
					<h4>Example meter with displayDecimal=false and units props:</h4>
					<div class="example-meter">
						<Meter options={meterOptions3} />;
					</div>
					<h4>Example meter with style strings:</h4>
					<div class="example-meter">
						<pre><code class="code-block">
                          meterStyle='width: 50px;'
                          labelStyle='font-size: 20px; color: blue;'
                  </code></pre>
						<Meter options={meterOptions4} />
					</div>
				</section>
			</fieldset>
		</section>

		<section>
			<fieldset>
				<legend>Component API</legend>
				<h2>Component API</h2>
				<div role="region" tabindex="0" style="max-width:100%;overflow:auto" class="props-table">
					<Table options={tableOptions} />
				</div>
			</fieldset>
		</section>
	</main>
</article>

<style>
</style>
