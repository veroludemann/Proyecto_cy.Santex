describe('Aserciones en la pagina de Ticketazo', () => {

    beforeEach(() =>{
        // cy.viewport('macbook-15')
        cy.visit('https://ticketazo.com.ar')
        cy.get('[data-cy="btn-ver-evento-1"]').click()

        
    })
    it('Aserciones de visibilidad', () => {
        cy.log('Visibilidad y contenido')
        cy.get('h1').should('be.visible').and('contain', 'El Eternauta')
        //(not.exist) -> asercion negativa 
        cy.get('.error-sidebar').should('not.exist')
        cy.get('span').contains('Ticketazo').should('have.class', 'hidden')
        cy.get('h3').should('include.text','Dogs')
        cy.get('h3').contains(/dogs/i)  //otra forma de validar un elemento (no importa mayusc/min)
        cy.log('Validad imagen desde el atributo alt (1) desde la clase (2)')
        cy.get('div.w-full>img').eq(0).should('have.attr', 'alt','El Eternauta').and ('have.attr', 'class', 'w-full object-cover')
        cy.get('img[alt="El Eternauta"]').should('be.visible')
    })

    it('Aserciones 2', () => {
        cy.log('Validar elementro btn "Adquirir entrada)')
        cy.contains('Adquirir entrada').should('be.enabled')

    })

    it('Validaciones.02', () => {
        cy.log('validar h3') 
        cy.get('h3').should('have.length', '3')
        // uso  .scrollIntoView
        cy.contains('Reservoir Dogs').scrollIntoView().should('be.visible')
        cy.get('span').contains('22 de mayo de 2025')
        // cy.contains('button', 'Ver evento').should('have.length.greaterThan', 3)
    })
    it('Validaciones.03', () => {
        cy.log('otras validaciones') 
        cy.contains('h2', 'Cómo llegar').scrollIntoView().should('be.visible')

    })

    it('Validaciones.04- cerrar sidebar y Login', () => {
        cy.log('cerrar sideBar desde la cruz') 
        cy.get('path[d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"]').as('cerrarSide')
        cy.get('@cerrarSide').click()
        cy.wait(100)
        cy.get('button').contains('Login').click({ force: true })
        cy.log('VALIDANDO EL LOGIN')
        cy.get('[data-cy="input-email"]').should('have.attr', 'aria-label', 'Email').type('vero').blur() //El blur() simula que el usuario sale del input (pierde el foco), lo que dispara la validación del campo
        cy.contains('Incluye un signo "@" en la dirección de correo electrónico').should('be.visible')
        cy.get('[data-cy="input-password"]').should('have.attr', 'aria-label', 'Contraseña').type('123{enter}')
        // dos formas de validar contraseña incorrecta
        cy.get('p').contains('Correo o contraseña incorrectos')
        cy.contains('Correo o contraseña incorrectos')
    })

    it.only('Cerrar sidebar nuevamente, loguearse, bajar el footer y elegir una paginacion', ()=> {
        cy.get('path[d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"]').as('cerrarSide')
        cy.get('@cerrarSide').click()
        cy.wait(100)
        cy.get('button').contains('Login').click({ force: true })
        cy.log('Inicio sesion')
        cy.get('[data-cy="input-email"]').should('have.attr', 'aria-label', 'Email').type('test.qa@mailinator.com')
        cy.get('[data-cy="input-password"]').should('have.attr', 'aria-label', 'Contraseña').type('Vero12345{enter}')
        cy.get('footer').scrollIntoView()
        cy.get('[aria-label="pagination item 5"]').click()
        cy.get('[data-cy="btn-ver-evento-324"]').click()
        cy.contains('Adquirir entrada').click()
        cy.wait(1200)
        //volver atras
        cy.go('back')
    })


})
