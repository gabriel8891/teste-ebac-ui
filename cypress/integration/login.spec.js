/// <reference types="cypress" >/

context ('funcionalidade login', ()=>{
    it (' deve fazer login com sucesso', ()=>{
     cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
     cy.get('#username').type ('aluno_ebac@teste.com')
     cy.get('#password').type ('teste@teste.com')
     cy.get('.woocommerce-form > .button').click ()
     cy.get('.page-title').should('contain', 'Minha conta')
     cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá')
    })
    it ('deve exibir uma mensagem ao inserir usuário inválido', ()=>{
        cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
     cy.get('#username').type ('gabriel_ebac@teste.com')
     cy.get('#password').type ('teste@teste')
     cy.get('.woocommerce-form > .button').click ()
     cy.get('.woocommerce-error').should ('contain', 'Verifique novamente')

    })

   

})
