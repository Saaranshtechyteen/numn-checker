let age = game.askForNumber("Enter Your Age", 2)
let name = game.askForString("Enter Name", 20)
if (age < 18) {
    game.splash("You cant vote", name)
}
if (age > 18) {
    game.splash("You can vote", name)
}

