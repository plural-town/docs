import { render } from "@testing-library/react";

import ExampleToot from "./ExampleToot";

describe("ExampleToot", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ExampleToot />);
    expect(baseElement).toBeTruthy();
  });
});
