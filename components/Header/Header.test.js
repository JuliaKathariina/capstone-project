import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import AppHeader from "./Header.js";

test("render Soul Master from Header", () => {
  render(<AppHeader />);
  const headerElem = screen.getByText(/Soul Master/i);
  expect(headerElem).toBeInTheDocument();
});
