describe("mocks", () => {
    it.only("Eventos mockeados", () => {
        cy.intercept('GET', '**/api/backend/events', {
    statusCode: 200,
    body: [
        {
            id: 123456,
            titulo: "Festival mockeado 2025",
            duracion: "",
            info: "Show especial",
            capacidad: 100,
            edad: "ATP",
            genero: "Concierto",
            lugarEvento: "Córdoba",
            precios: [
                { id: 1, nombre: "General", precio: "0", capacidad: "100" }
            ],
            imagen: "https://picsum.photos/300",
            estado: 1,
            fechasHorarios: [
                {
                id: 1,
                fecha: "2030-12-31T21:00:00.000Z",
                horario: "21:00:00",
                eventoId: 123456
                }
            ]
        },
        {
            id: 123456,
            titulo: "bandido",
            duracion: "",
            info: "Show especial",
            capacidad: 100,
            edad: "ATP",
            genero: "Concierto",
            lugarEvento: "Córdoba",
            precios: [
                { id: 1, nombre: "General", precio: "0", capacidad: "100" }
            ],
            imagen: "https://tse2.mm.bing.net/th/id/OIP.1fsRkSyEzva-6MVktBSrYQHaHa?pid=Api&P=0&h=180",
            estado: 1,
            fechasHorarios: [
                {
                id: 1,
                fecha: "2030-12-31T21:00:00.000Z",
                horario: "21:00:00",
                eventoId: 123456
                }
            ]
        }
    ]
}).as('getEventsMocked')
    cy.visit('https://ticketazo.com.ar/'); 
    cy.wait('@getEventsMocked');

    cy.contains("Festival mockeado 2025").should('be.visible') 
    cy.contains("bandido").should('be.visible')
        
        

});

    /*debug*/
    it("debug - ver payload real de /events", () => {
    cy.intercept("GET", "**/api/backend/events*").as("evts");
    cy.visit("https://ticketazo.com.ar/");
    cy.wait("@evts").then(({ request, response }) => {
      // muestra la URL y la respuesta en el log de Cypress
    cy.log("URL: " + request.url);
    cy.log("Status: " + response.statusCode);
    cy.log(JSON.stringify(response.body));
    // además lo pegás en consola para inspeccionar
    // (esto sale en la pestaña Command -> console)
    // eslint-disable-next-line no-console
    console.log("events response", response.body);
        });
    });
});
