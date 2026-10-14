import React from "react";
import { fireEvent, render } from "@testing-library/react";
import App from "./App";

describe("menu category filters", () => {
  test("renders all dishes and the required category controls", () => {
    const { container } = render(<App />);

    expect(container.querySelector("#main")).not.toBeNull();
    expect(container.querySelectorAll(".dish-card")).toHaveLength(12);
    expect(container.querySelector("#filter-btn-1").textContent).toBe(
      "Breakfast"
    );
    expect(container.querySelector("#filter-btn-2").textContent).toBe("Lunch");
    expect(container.querySelector("#filter-btn-3").textContent).toBe("Shakes");
  });

  test.each([
    ["filter-btn-1", "breakfast"],
    ["filter-btn-2", "lunch"],
    ["filter-btn-3", "shakes"],
  ])("filters to only %s dishes", (buttonId, category) => {
    const { container } = render(<App />);

    fireEvent.click(container.querySelector(`#${buttonId}`));

    expect(
      container.querySelectorAll(`[data-test-id="menu-item-${category}"]`)
        .length
    ).toBeGreaterThan(0);
    expect(container.querySelectorAll(".dish-card")).toHaveLength(
      container.querySelectorAll(`[data-test-id="menu-item-${category}"]`).length
    );
    ["breakfast", "lunch", "shakes"]
      .filter((otherCategory) => otherCategory !== category)
      .forEach((otherCategory) => {
        expect(
          container.querySelector(
            `[data-test-id="menu-item-${otherCategory}"]`
          )
        ).toBeNull();
      });
  });
});
