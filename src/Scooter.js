class Scooter {
  static nextSerial = 1;
  constructor(station, nextSerial) {
    this.station = station;
    this.user = null;
    this.serial = nextSerial++;
    this.charge = 100;
    this.isBroken = false;
  }
  rent(user) {
    if (this.charge > 20 && this.isBroken === false) {
      this.user = user;
      this.station = null;
      console.log(`Scooter has been rented`);
    } else {
      throw new Error("Scooter is broken or needs to be charged");
    }
  }
  dock(station) {
    this.station = station;
    this.user = null;
  }
}

module.exports = Scooter;
