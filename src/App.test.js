import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Counter App", () => {
  let increaseBtn, decreaseBtn, counter;
  beforeEach(() => {
    render(<App />);
    increaseBtn = screen.getByText("Increase");
    decreaseBtn = screen.getByText(/decrease/i);
    counter = screen.getByText("0");
  });

  test("increase button", () => {
    userEvent.click(increaseBtn);
    expect(counter).toHaveTextContent("1");
  });

  test("decrease button", () => {
    userEvent.click(decreaseBtn);
    expect(counter).toHaveTextContent("-1");
  });
});
