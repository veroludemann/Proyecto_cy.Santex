describe('Prueba multiples usuarios', ()=>{

    beforeEach(() =>{
        cy.viewport('macbook-15')
        cy.visit('https://ticketazo.com.ar/auth/login')
    })
    it('Test 2 users', () =>{
        const usuarios = [
            {email:'test.qa@mailinator.com', pass:'Vero12345'},
            {email: 'demo@local.com', pass: 'Panifa41'}
        ]

        usuarios.forEach((usuario)=>{
            cy.loginHappyPath(usuario.email, usuario.pass)
            cy.buttons()
        })

    })

})