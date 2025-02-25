/// <reference types="cypress" />

describe('template spec', () => {
  beforeEach('Acesso a página', () => {
    cy.visit('https://jamesonbatista.github.io/projectqatesterweb/login.html')

    cy.get('#username').type('JoseSilva@email.com')
    cy.get('#password').type('12345678')
    cy.get('#loginForm > button').click()
  });

  it('Cadastro', () => {
    cy.get('#name').type('José silva')
    cy.get('#email').type('JoseSilva@email.com')
    cy.get('#password').type('12345678')
    cy.get('#gender').select('Masculino')
    cy.get('#birthdate').type('12/12/1912')
  });

})