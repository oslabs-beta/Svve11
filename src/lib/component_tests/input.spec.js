import '@testing-library/jest-dom';
import TextInput from "../components/TextInput.svelte";
import { render } from "@testing-library/svelte";
import { axe, toHaveNoViolations } from "jest-axe";


// test("is accessible", async () => {
//   const results = render(TextInput, { props: {
//     label: "This is a test",
//     placeholder: "Test",
//     id: "testInputText",
//     type: "text"
//   }});
//   expect(await axe(results)).toHaveNoViolations();
// })
 
describe("Accessible Text Field Unit Tests", () => {
  test("It does a thing", () => {
    const options = {
      label: "This is a test",
      placeholder: "Test",
      id: "testInputText",
      type: "text"
    }
  
    const { component, getByText, getAllByRole, ...queries } = render(TextInput, options);
    console.log('queries:', queries)
    console.log('component:', component)
    // console.log(component['$$'].ctx[0])
    // const headers = getAllByRole('heading')
    // console.log(headers[0].getAttribute('role'))
  })
})
  