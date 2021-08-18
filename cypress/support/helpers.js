

const login = (
    email = "joey@test.com",
    password = "joey12321",
    checkToken = true
  ) => {

//     cy.window().its("sessionStorage").invoke("clear");// if token is present, it clears up
  
//     cy.visit(Cypress.config().baseUrl);
//     cy.get("[data-cy=login]").click();
//     cy.get("[data-cy=email]").type(email).should("have.value", email);
//     cy.get("[data-cy=password]").type(password).should("have.value", password);
//     cy.get("[data-cy=submit]").click();
  
//     // we want to check if token was set up correctly
//     if (checkToken)
//       cy.window()
//         .its("sessionStorage")
//         .invoke("getItem", "token")
//         .should("exist");
//   };