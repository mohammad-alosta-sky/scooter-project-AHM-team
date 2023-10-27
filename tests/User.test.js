const User = require('../src/User');
import {describe, expect, it} from "@jest/globals"


const user = new User("Joe Bloggs", "test1234", 21);

// User tests here
describe("User property tests", () => {
  // test username
  test("Can create instances", () => {
    expect(user).toBeInstanceOf(User);
  })

  test("username should be a string", () => {
    expect(typeof user.username).toBe("string");
  })

  test("Has the correct value", () => {
    expect(user.username).toBe("Joe Bloggs");
  })

  // test password
  test("password should be a string", () => {
    const numpass = () => {
      throw new User("Joe Bloggs", 12345678, 21);
    };
    expect(numpass).toThrow("Password can't be numbers only");
  });

  test("password has to be more than 8 characters", () => {

    const shortpass = () => {
      throw new User("Joe Bloggs", "1234567", 21);
    };
    expect(shortpass).toThrow("The password is too short");
  });

  // test age
  test("Has the correct value", () => {
    expect(user.age).toBe(21);
  });
});


// test login

describe("Testing login method", () => {
  test("loggedIn is false when instance is created", () => {
    expect(user.loggedIn).toBe(false);
  });

  test("Can login when the password is correct")
})

// test logout
