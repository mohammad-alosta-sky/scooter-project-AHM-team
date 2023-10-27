const Scooter = require("../src/Scooter");
const User = require("../src/User");

describe("scooter class", () => {
  const scooter = new Scooter("Station 1");
  const user = new User("John123");
  scooter.charge = 100;
  scooter.isBroken = false;

  it("should create a new scooter instance", () => {
    const scooter = new Scooter("Station 1");
    expect(scooter.station).toBe("Station 1");
    expect(scooter.user).toBe(null);
    expect(scooter.charge).toBe(100);
    expect(scooter.isBroken).toBe(false);
  });
  it("should be able to rent a scooter if charged above 20% and not broken", () => {
    scooter.rent(user);
    expect(scooter.charge).toBe(100);
    expect(scooter.isBroken).toBe(false);
  });
  it("should not be able to rent a scooter if charge is below 20% ", () => {
    scooter.isBroken = true;
    expect(() => scooter.rent(user)).toThrow(
      "Scooter is broken or needs to be charged"
    );
  });
  it("should not be able to rent a scooter if the scooter is broken", () => {
    expect(() => scooter.rent(user)).toThrow(
      "Scooter is broken or needs to be charged"
    );
  });
  it("should be able to dock the scooter at a station", () => {
    scooter.dock("Station 3");
    expect(scooter.station).toBe("Station 3");
    expect(scooter.user).toBe(null);
  });
});
