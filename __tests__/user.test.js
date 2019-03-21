const User = require('../userHandler')

describe('User', () => {
  it('Get user', async () => {
    await User.getRandomUser().then(d => console.log(d))
  })
})
