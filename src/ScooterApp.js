const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
  constructor()
  RegisteredUsers = []




  registerUser(username, password, age){
    if (age < 18){
      throw new Error('Too young to register')
    }

    if (this.RegisteredUsers.includes(username)){
      throw new Error('Already registered')
    }

    console.log('User has been registered!')
    return this.RegisteredUsers.push(User(username, password, age))
  }

  loginUser(username, password){
    const userDetails = this.RegisteredUsers.find((element) => username)
    if (user){
      if (userDetails.password === password){
        userDetails.loginUser();
        console.log('User has been logged in ')
      } else {
        throw new Error("Username or password is incorrect.");
      }
    } else {
      throw new Error("Username or password is incorrect.");
   
    }
  }


}



module.exports = ScooterApp
