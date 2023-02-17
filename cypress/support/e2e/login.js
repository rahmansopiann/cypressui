describe("Open Kasir AJA URL", ()=>{
    it('should contain url /login', ()=>{
        cy.visit(Cypress.env('baseUrl'))
        cy.url().should('include', '/login')
    })

    it('user success login to kasir Aja', ()=>{
        cy.visit(Cypress.env('baseUrl'))
        cy.get('#email').type(Cypress.env('email'))
        cy.get('#password').type(Cypress.env('password'))
        cy.get('#root > div > div > div > div.css-1w7v3tn > div > button').click()
        cy.url().should('include','/dashboard')
        cy.contains("kasirAja")
    })
})