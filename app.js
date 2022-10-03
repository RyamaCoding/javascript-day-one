let users = [
  {
    username: "David",
    email: "david@fes.com",
    password: "test123",
    subscriptionStatus: "VIP",
    discordId: "Dbraggles#0001",
    lessonsCompleted: [0, 1],
  },
  {
    username: "Mitri",
    email: "mitri@fes.com",
    password: "mitri123",
    subscriptionStatus: "VIP",
    discordId: "Mitri#0001",
    lessonsCompleted: [0, 1, 2, 3],
  },
  {
    username: "Zen",
    email: "zen@fes.com",
    password: "zen123",
    subscriptionStatus: "VIP",
    discordId: "zen#0001",
    lessonsCompleted: [0, 1, 2, 3, 4, 5, 6, 7],
  },
];

function register(user) {
  users.push(user);
}

register({
  username: "David",
  email: "david@fes.com",
  password: "test124",
  subscriptionStatus: "VIP",
  discordId: "Dbraggles#0002",
  lessonsCompleted: [0, 1],
});

function login(email, password) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      console.log(users[i]);
      if (users[i].password === password) {
        console.log("log the user in - the details are correct");
      } else {
        console.log("password is incorrect - try again");
      }
      return;
    }
  }
  console.log("could not find an email that matches");
}

login('david@fes.com', 'test123')

console.log(users);
