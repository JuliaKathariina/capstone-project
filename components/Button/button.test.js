import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ButtonSave from "../Button/button.js";

test("Button", () => {
  render(<ButtonSave>Submit</ButtonSave>);
  const button = screen.getByRole("button");
  expect(button).toHaveAccessibleName("Submit");
});
