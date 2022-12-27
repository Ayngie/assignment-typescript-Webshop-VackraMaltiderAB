describe("startpage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234/"); //ladda om sidan
  });

  it("should get the indexpage's title", () => {
    cy.title().should("include", "DukaFint AB");
  });

  it("should find image", () => {
    cy.get("#welcome-image")
      .find("img")
      .should("have.attr", "alt")
      .should("include", "Juldukning från Mateus");

    cy.get("#welcome-image")
      .find("img")
      .should(
        "have.attr",
        "src",
        "https://mateus-images.imgix.net/Tablesettings/mateus_jul_mm00770_sRGB.jpg"
      );
  });
  it("should find navbar", () => {
    cy.get(".navbar").find(".navbar-nav").find("a").should("have.attr", "href");
  });
});
