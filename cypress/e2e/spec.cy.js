/// <reference types="cypress" />

describe('template spec', () => {
  beforeEach('Acesso a página', () => {
    cy.visit('https://jamesonbatista.github.io/projectqatesterweb/login.html')

    cy.get('#username').type('JoseSilva@email.com')
    cy.get('#password').type('12345678')
    cy.get('#loginForm > button').click()

    cy.url().should('include', 'https://jamesonbatista.github.io/projectqatesterweb/cadastro-simples.html')
    cy.title().should('eq', 'Cadastro Simples')
  });

  it('Cadastro', () => {
    cy.get('#name').type('José silva')
    cy.get('#email').type('JoseSilva@email.com')
    cy.get('#password').type('12345678')
    cy.get('#gender').select('Masculino')
    cy.get('#birthdate').type('12/12/1912')
    cy.get('#phone').type('551190000000')
    cy.get('#address').type('Avenida 244')
    cy.get('#state').select('São Paulo')
    cy.get('#city').should('have.value', 'São Paulo')
    cy.get('#terms').click()
    cy.get('#cadastroForm > button').click()

    cy.get('#alertMessage')
      .should('be.visible')
      .and('have.text', 'Cadastro realizado com sucesso!')
  });

})