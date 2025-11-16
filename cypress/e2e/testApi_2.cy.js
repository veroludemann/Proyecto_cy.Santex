describe('Clase 6',()=>{

    beforeEach(()=>{
        cy.viewport('macbook-15')
        cy.visit('https://ticketazo.com.ar/auth/login')
    })

    it('Login - Happy path',()=>{
        cy.log("INTERCEPTO")
        cy.intercept('POST', 'api/backend/auth/login').as('login')
        cy.loginHappyPath('homejo5153@filipx.com','Admin1234*')
        cy.wait('@login').then((interception) => {
            expect(interception.response.statusCode).to.equal(200)
        })

    })

})