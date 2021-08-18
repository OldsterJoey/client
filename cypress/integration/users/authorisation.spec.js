/// <reference types="Cypress" />
import faker from 'faker/locale/en_AU';
import {login} from '../../support/helpers'

let username= faker.name.findName()
let email = faker.internet.email()
let password = faker.internet.password()
let baseUrl = 'https://wishfully-2021.web.app/'
let emailUser1 = "joey@test.com"
let passwordUser1 = "joey12321"

describe("user sign up", () => {
    beforeEach(() => {
      // navigate to the sign up page
      cy.visit(baseUrl + "/sign_up")
    })
  
    it("creates a new user", () => {
      // fill out the fields
      cy.get('[data-cy="signup-username"]').clear().type(username)
      .get('[data-cy="signup-email"]').clear().type(email)
      .get('[data-cy="signup-password"]').clear().type(password)
      .get('[data-cy="signup-passwordConfirmation"]').clear().type(password)
  
      // click the sign up button
      cy.get("[data-cy=signup-button]").click()
  
      // expect a redirect to home page
      cy.url().should('eq', 'https://wishfully-2021.web.app/main')
    })
  })

  describe("user login", () => {
    beforeEach(() => {
      // navigate to the sign up page
      cy.window().its("sessionStorage").invoke("clear");// if token is present, it clears up
      cy.visit(baseUrl + "/sign_in")

    })
  
    it("logs in as existing user", () => {
      // fill out the fields
      cy.get('[data-cy="signin-email"]').clear().type(emailUser1)
      .get('[data-cy="signin-password"]').clear().type(passwordUser1)
  
      // click the sign in button
      cy.get('[data-cy="signin-button"]').click()
  
      // expect a redirect to home page
      cy.url().should('eq', 'https://wishfully-2021.web.app/main')
    })
  })
