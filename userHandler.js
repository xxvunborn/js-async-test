const fetch = require('node-fetch')

class User {
  constructor() {
    this.fetch = fetch 
  }

  async processName(user) {
    return user.name
  }

  async processLocation(user) {
    return user.location
  }

  async getRandomUser() {
    return this.fetch('https://randomuser.me/api/')
               .then(response => response.json())
               .then(async d => {
                 const name = await this.processName(d.results[0])
                 const location = await this.processLocation(d.results[0])
                 return {name, location}
               })
               .then(obj => obj)
  }

  getIds(users) {
    return Promise.resolve(users.map(item => item.id))
  }

  userIds(users) {
    console.log(users)
    return new Promise((resolve, reject) => {
      this.getIds(users).then(dataUsers => resolve(dataUsers))
    })
  }

  getHundredUsers() {
    return this.fetch('https://randomuser.me/api/?results=100')
               .then(response => response.json())
               .then(d => this.userIds(d.results))
  }
  //TODO: apply this with async await
}

module.exports = new User()
