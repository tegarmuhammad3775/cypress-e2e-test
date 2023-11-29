
describe("PetStore API Inventory Testing", () => {
    let body = {
            "id": 123,
            "username": Cypress.env("username"),
            "firstName": "myskill",
            "lastName": "123",
            "email": "myskill123",
            "password": Cypress.env("password"),
            "phone": "123",
            "userStatus": 123    
    }

    it('create a user - POST', () => {
        cy.request('POST','/user', body).as('createUser');
        cy.get('@createUser').then(createUser => {
            expect(createUser.status).to.equal(200)
        })
    })

    const loginUser = {
        method : "GET",
        url : "/user/login",
        qs : {
            username : Cypress.env("username"),
            password : Cypress.env("password")
        }
    }
    it('Login registered user - GET', () => {
        cy.request(loginUser).as('loginUser');
        cy.get('@loginUser').then(loginUser => {
            expect(loginUser.status).to.equal(200)
        })
    })

})