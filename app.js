let userFirstName = 'David'
let userLastName = 'Bragg'
let userDiscordId = 'Dbraggles#0001'
let userSubscriptionStatus = 'VIP'

let user = [{
    username: 'David',
    email: 'david@fes.com',
    password: 'test123',
    subscriptionStatus: 'VIP',
    discordId: 'Dbraggles#0001',
    lessonsCompleted: [0, 1],
}, 
{
    username: 'Mitri',
    email: 'mitri@fes.com',
    password: 'mitri123',
    subscriptionStatus: 'VIP',
    discordId: 'Mitri#0001',
    lessonsCompleted: [0, 1, 2, 3],
}, 
{
    username: 'Zen',
    email: 'zen@fes.com',
    password: 'zen123',
    subscriptionStatus: 'VIP',
    discordId: 'zen#0001',
    lessonsCompleted: [0, 1, 2, 3, 4, 5, 6, 7],
}
]

function login(email, password) {
    for (let i = 0; i < user.length; i++) {   
        if (user[i].email === email) {
            console.log(user[i]);
            if (user[i].password === password){
                console.log('log the user in - the details are correct')
            }
            else {
                console.log('password is incorrect - try again')
            }
        }
    }
}

login('david@fes.com', 'test123')



