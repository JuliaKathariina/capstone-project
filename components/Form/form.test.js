import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./form";

describe("Form component", () => {
  it("should render children", () => {
    const text = "Click me";
    render(<Form>{text}</Form>);
    const form = screen.getByText(text);
    expect(form).toBeInTheDocument();
  });

  it("should allow clicks", async () => {
    const handleClick = jest.fn();
    const text = "Click me";
    render(<Form onClick={handleClick}>{text}</Form>);
    const form = screen.getByText(text);
    await userEvent.click(form);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
