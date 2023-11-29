
describe("PetStore API Inventory Testing", () => {
    let body = {
            "id": 123,
            "username": Cypress.env("username"),
            "firstName": "myskill",
            "lastName": "123",
            "email": "myskill123",
            "password": "myskill123",
            "phone": "123",
            "userStatus": 123    
    }

    it('create a user - POST', () => {
        cy.request('POST','/user', body).as('createUser');
        cy.get('@createUser').then(createUser => {
            expect(createUser.status).to.equal(200)
        })
    })


})