
describe('Registro pagina Ticketazo', () => {
it('Registro 1', function() {
  cy.visit('https://ticketazo.com.ar/auth/registerUser')
  cy.get('[data-cy="input-nombres"]').type('Veronica')
  cy.get('[data-cy="input-apellido"]').type('Ludemann')
  cy.get('[data-cy="input-telefono"]').type('3515390022')
  cy.get('[data-cy="input-dni"]').type('33303041')
  
  cy.get('[data-cy="select-provincia"]').click(); // abre el dropdown
  cy.get('[role="option"]').contains('Córdoba').click(); // selecciona la opción

  cy.get('[data-cy="select-localidad"]').should('be.enabled');
  // Escribir y esperar que aparezca la opción
  cy.get('[data-cy="select-localidad"]').type('Córdoba');
  // Esperar que cargue el listado de localidades (aparece un li con role="option")
  cy.get('[role="option"]', { timeout: 7000 }).should('contain.text', 'Córdoba');
  // Seleccionar la primera opción
  cy.get('[role="option"]').first().click();
  // nacimiento
  cy.get('[data-type="day"]').type('14')
  cy.get('[data-type="month"]').type('10')
  cy.get('[data-type="year"]').type('1987')
  cy.get('[data-cy="input-email"]').type('vero.test@mailinator.com')
  cy.get('[data-cy="input-confirmar-email"]').type('vero.test@mailinator.com') 
  cy.get('[data-cy="input-password"]').type('vero123')
  cy.get('[data-cy="input-repetir-password"]').type('vero123')
  cy.get('[data-cy="btn-registrarse"]').click()
})
})
