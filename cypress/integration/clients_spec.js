describe("Banking lients Tests", () => {

    Cypress.config('baseUrl', 'http://localhost:7000/clients')

    it('GET all clients', () => {
        cy.request('/').then(response => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            expect(response.body).to.have.length(6)
        })
        })

    it('GET client by id', () => {
        cy.request('/1', () => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.have.length(1)
            expect(response.body).to.have.property('name', 'CHANGE me')
        })
    })

})
