describe("mocks", () => {

    it("Eventos mockeados con fixture", () => {
        
        cy.fixture('eventosMock.json').then((eventosMock) => {
                
            cy.intercept('GET', '**/api/backend/events', {
                statusCode: 200,
                body: eventosMock
            }).as('getEventsMocked');

            cy.visit('https://ticketazo.com.ar/');
            cy.wait('@getEventsMocked');
        });
    });

});

