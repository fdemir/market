/// <reference types="Cypress" />

describe("Basket", () => {
  before(() => {
    cy.visit("/");
    cy.intercept("GET", "**/products").as("getProducts");
    cy.wait("@getProducts");
  });

  it("should add item to basket", () => {
    cy.get("[data-test-id='product-item']").first().find("button").click();
  });

  it("should increment quantity", () => {
    let item = cy.get("[data-test-id='basket-item']").first();
    item.find("[data-test-id='increment']").click();
    item.get("[data-test-id='quantity']").should("have.text", "2");
  });

  it("should decrement quantity", () => {
    let item = cy.get("[data-test-id='basket-item']").first();
    item.find("[data-test-id='decrement']").click();
    item.get("[data-test-id='quantity']").should("have.text", "1");
  });

  it("should remove item from basket", () => {
    cy.get("[data-test-id='basket-item']")
      .first()
      .find("[data-test-id='decrement']")
      .click();
    cy.get("[data-test-id='basket-item']").should("not.exist");
  });
});
