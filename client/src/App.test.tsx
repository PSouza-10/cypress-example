import { mount } from '@cypress/react' // or @cypress/vue
import App from './App'

describe("App", () => {
  it("Increases the count and alerts Ok", () => {
    cy.intercept("GET", "/health", { fixture: "health.json" });
    cy.fixture("health.json")
      .as("userData")
      .then(() => {
        cy.on("window:alert", (txt) => {
          //@ts-ignore
          expect(txt).to.eq(this.userData);
          mount(<App />);

          cy.get("[data-testid=count-btn]").click();
          cy.get("[data-testid=count-txt]").should("have.text", "Count is 1");
        });
      });
  });
});