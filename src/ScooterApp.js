const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  static stations = {"station1": [], "station2": [], "station3": []};
  //registeredUsers = {"username": "it's instance which is made by User class"}
  static registeredUsers = {};
  // ScooterApp code here
  constructor(){
    
  }

  registerUser(username, password, age){
    if (age < 18){
      throw new Error('Too young to register')
    }

    if (this.registeredUsers[username]){
      throw new Error('Already registered')
    }

    console.log('User has been registered!')
    return this.registeredUsers[username] = new User(username, password, age);
  }

  loginUser(username, password){
    const userDetails = this.registeredUsers[username];
    if (!this.registerUser[username]){
      throw new Error("Username or password is incorrect.");
    }
      userDetails.login(password);
      console.log('User has been logged in ')
   
    } 

    

    logoutUser(username){
      if (!this.registeredUsers[username]){
        throw new Error('no such user is logged in')
      } else {logout.registeredUsers[username]}
     
    }
   
    createScooter(station){
      new Scooter (station, nextSerial)
    }

    
    dockScooter(scooter, station){
      dock(station)
      if(this.stations[station] == null){
        console.log('no such station')
      }

      if (stations[station].scooter.)
      console.log('scooter is docked')
      
    }

    rentScooter(scooter, user)

    print()



  }




module.exports = ScooterApp
