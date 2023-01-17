describe("documentation", () => {
  beforeEach(() => cy.visit("/"));

  it("should display welcome message", () => {
    cy.contains("PluralTown Software");
  });
});
