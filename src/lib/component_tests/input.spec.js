import TextInput from "../components/TextInput.svelte";
import { render } from "@testing-library/svelte";
import { axe, toHaveNoViolations } from "jest-axe";


test("is accessible", async () => {
  const results = render(TextInput, { props: {
    // label: "This is a test",
    // placeholder: "Test",
    // id: "testInputText",
    // type: "text"
  }});
  expect(await axe(results)).toHaveNoViolations();
})