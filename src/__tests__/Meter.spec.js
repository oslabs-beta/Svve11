/* eslint-disable no-undef */
import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';
import { get } from 'svelte/store';
// import userEvent from '@testing-library/user-event';

import Meter from '../lib/Meter.svelte';

describe('Meter Unit Tests', () => {
    const options = {
        value: 60,
        maxValue: 100,
        minValue: 0,
        meterLabel: "Test Meter",
        id: 1,
        optimumValue: 80,
        lowValue: 20,
        highValue: 85,

    }

    let meter, label, meters, meterDiv

    beforeEach(() => {
        const {getByTestId, getByText} = render(Meter, {...options})
        meters = document.getElementsByTagName('meter')
        meter = getByTestId('meter-test')
        meterDiv = document.getElementsByTagName('div')
        label = getByText('Test Meter: 60%')
    })

    it('should have two children, a label and meter', () => {
        expect(label).toBeInTheDocument()
        expect(label.nextElementSibling).toBeInTheDocument()
        expect(label.nextElementSibling).toBe(meter)
    })

    it('should have a role set to meter', () => {
        expect(meters.length).toEqual(1)
    })

    it('should have a meter with accessible attributes', () => {
        expect(meter).toHaveAttribute('aria-valuenow')
        expect(meter.getAttribute('aria-valuenow')).toEqual(options.value.toString())
        expect(meter).toHaveAttribute('aria-valuemax')
        expect(meter.getAttribute('aria-valuemax')).toEqual(options.maxValue.toString())
        expect(meter).toHaveAttribute('aria-valuemin')
        expect(meter.getAttribute('aria-valuemin')).toEqual(options.minValue.toString())
        expect(meter).toHaveAttribute('aria-labelledby')
        expect(meter.getAttribute('aria-labelledby')).toEqual('meter-label-1')
        expect(meter).toHaveAttribute('aria-valuetext')
        expect(meter.getAttribute('aria-valuetext')).toEqual('')
    })

    it('should have a meter with attributes defined by props', () => {
        expect(meter).toHaveAttribute('id')
        expect(meter.getAttribute('id')).toEqual('meter-1')
        expect(meter).toHaveAttribute('min')
        expect(meter.getAttribute('min')).toEqual(options.minValue.toString())
        expect(meter).toHaveAttribute('max')
        expect(meter.getAttribute('max')).toEqual(options.maxValue.toString())
        expect(meter).toHaveAttribute('low')
        expect(meter.getAttribute('low')).toEqual(options.lowValue.toString())
        expect(meter).toHaveAttribute('high')
        expect(meter.getAttribute('high')).toEqual(options.highValue.toString())
        expect(meter).toHaveAttribute('optimum')
        expect(meter.getAttribute('optimum')).toEqual(options.optimumValue.toString())
        expect(meter).toHaveAttribute('value')
        expect(meter.getAttribute('value')).toEqual(options.value.toString())
        expect(meter).toHaveAttribute('style')
        expect(meter.getAttribute('style')).toEqual('')
    })

    it('should have a label with accessible attributes', () => {
        expect(label).toHaveAttribute('for')
        expect(label.getAttribute('for')).toEqual('meter-1')
        expect(label).toHaveAttribute('id')
        expect(label.getAttribute('id')).toEqual('meter-label-1')
        expect(label).toHaveAttribute('style')
        expect(label.getAttribute('style')).toEqual('')
    })
    
})