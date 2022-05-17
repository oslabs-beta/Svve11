/* eslint-disable no-undef */
import '@testing-library/jest-dom'
import {render, fireEvent} from '@testing-library/svelte'

import Accordion from '../components/Accordion/Accordion.svelte'

// List of Accordion Parts:
    // - Accordion: contains accordion item(s)
        // - Accordion Item: contains header and panel
            // - Accordion Header: contains button
                // - Accordion Button: labels header
            // - Accordion Panel: contains contents



describe('Accessible Accordion Unit Tests', () => {
    
    describe('Button Unit Tests', () => {

        //BeforeEach render an AccordionButton for testing

        // beforeEach((done) => {
            // const results = render(AccordionButton/*, {options} */)
            const {component} = render(Accordion/*, {options} */)
            console.log(component)
            // return done
        // })

        // Does the button have a role attribute of button
        it('should have a role attribute set to button', () => {
            // let button = getAllByRole('button');
            // console.log(button)
        })
        // Does the button have 0 siblings?? 

        // Does the button have an attribute aria-expanded

        // Is aria-expanded false when button is inactive and true when active

        // Does the button have toggle ability

    })

    


//******* Header Tests *******//

    //******* Header Unit Tests *******//

        // Is the title of the header an element with role button

        // Is the role of the header set to heading

        // Is the value a valid aria-level/number 1-6

    

//******* Panel Tests *******//

    //******* Panel Unit Tests *******//

        // Does the panel have a role attribute set to region



//******* Item Tests  *******// 

    //******* Item Unit Tests *******//

        // Does the item have a state attribute

//******* Accordion Tests *******//

    // Does the Accordion have an aria-multiselectable attribute set to false





})

//******* INTEGRATION TESTS *******//

    //******* Button Integration Tests  *******//

        // Does the button contain an aria-controls attribute set to the ID of 
        // the panel it controls

    //******* Header Integration Tests *******//

    //******* Panel Integration Tests *******//

        // Does the panel have an aria-labelledby attribute refering to the button element
        // it is controlled by

    //******* Item Integration Tests *******//

        // Does the Item state attribute toggle with associated button click

        // Does the item have 2 children

        // Does the item have a header child first

        // Does the item have a panel child second






// Can space/enter expand the focused content panel

// Does one


