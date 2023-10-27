const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

const scooterApp = new ScooterApp();
// ScooterApp tests here

// register user
describe("registerUser method tests", () => {
  it("should register a new user", () => {
    const user = scooterApp.registerUser("JoeBloggs", "test123", 21);
    expect(response).toBeInstanceOf(User);
    expect(scooterApp.registeredUser["JoeBloggs"].toBe(user));

  });
  it("should ")
});

// log in

// log out

// rent scooter

// dock scooter
