
const users = [
    {
        firstName: 'Tony',
        email: 'tony@stark.com',
        password: 'iamironman'
    },
    {
        firstName: 'Steve',
        email: 'captain@hotmail.com',
        password: 'icandothisallday'
    },
    {
        firstName: 'Peter',
        email: 'peter@parker.com',
        password: 'enajyram'
    },
    {
        firstName: 'Natasha',
        email: 'natasha@gamil.com',
        password: '*parol#@$!'
    },
    {
        firstName: 'Nick',
        email: 'nick@shield.com',
        password: 'password'
    }
]



function userverify(email, password) {

    // console.log(email)
    const loginUser = users.find(Element => Element.email === email)
    // loginName = loginUser.firstName

    if (!loginUser) {
        return { "verify": false }
    } else if (loginUser.password === password) {
        return {
            verify: true, loginUser: loginUser
        }
    } else {
        return false
    }

}

module.exports = userverify