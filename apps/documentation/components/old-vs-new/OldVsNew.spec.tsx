import { render } from "@testing-library/react";

import OldVsNew from "./OldVsNew";

describe("OldVsNew", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<OldVsNew />);
    expect(baseElement).toBeTruthy();
  });
});
