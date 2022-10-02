/// <reference types="Cypress" />

describe("Product List", () => {
  before(() => {
    cy.visit("/");
    cy.intercept("GET", "**/products").as("getProducts");
    cy.wait("@getProducts");
  });

  it("should display 16 products", () => {
    cy.visit("/");
    cy.get("[data-test-id='product-item']").should("have.length", 16);
  });

  it("should diplay add to cart button", () => {
    cy.get("[data-test-id='add-to-cart']").should("exist");
  });
});
