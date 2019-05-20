

const LocalGameAPI = {
    games: [
        { id: 1, title: "Fortnite", rating: "8.7", price: "Free", picture: "../images/fortnite.jpg", console: "PS4", route: "/PS4-Games"},
        { id: 2, title: "Anthem", rating: "6.5", price: "39.99", picture: "", console: "PS4", route: "/PS4-Games"},
        { id: 3, title: "Minecraft", rating: "", price: "", picture: "", console: "Xbox One", route: "/Xbox-Games"},
        { id: 4, title: "Overwatch", rating: "", price: "", picture: "", console: "PS4", route: "/PS4-Games"},
        { id: 5, title: "Smash Brothers", rating: "", price: "", picture: "", console: "Nintendo Switch", route: "/Switch-Games"},
        { id: 6, title: "The Legend of Zelda: Breath of the Wild", rating: "", price: "", picture: "", console: "Nintendo Switch", route: "/Switch-Games"},
        { id: 7, title: "God of War", rating: "", price: "", picture: "", console: "PS4", route: "/PS4-Games"},
        { id: 8, title: "Super Mario Odyssey", rating: "", price: "", picture: "", console: "Nintendo Switch", route: "/Switch-Games"},
        { id: 9, title: "Horizon Zero Dawn", rating: "", price: "", picture: "", console: "Xbox One", route: "/Xbox-Games"},
        { id: 10, title: "Red Dead Redemption 2", rating: "", price: "", picture: "", console: "Xbox One", route: "/Xbox-Games"},
        { id: 11, title: "Castlevania", rating: "", price: "", picture: "", console: "", route: "PS4"},
        { id: 12, title: "Gears of War", rating: "", price: "", picture: "", console: "", route: "PS4"},
        { id: 13, title: "The Last of Us", rating: "", price: "", picture: "", console: "", route: "PS4"},
        { id: 14, title: "Spider-Man", rating: "", price: "", picture: "", console: "", route: "PS4"},
        { id: 15, title: "Mortal Kombat 11", rating: "", price: "", picture: "", console: "", route: "PS4"},
        { id: 16, title: "Splatoon", rating: "", price: "", picture: "", console: "", route: "PS4"},
        { id: 17, title: "Mario Kart 8", rating: "", price: "", picture: "", console: "", route: "PS4"},
        { id: 18, title: "Rage 2", rating: "", price: "", picture: "", console: "", route: "PS4"},
        { id: 19, title: "Days Gone", rating: "", price: "", picture: "", console: "", route: "PS4"},
        { id: 20, title: "The Show 19", rating: "", price: "", picture: "", console: "", route: "PS4"},
        { id: 21, title: "Assassins Creed Odyssey", rating: "", price: "", picture: "", console: "", route: "PS4"},
        { id: 22, title: "The Division 2", rating: "", price: "", picture: "", console: "", route: "PS4"},
        { id: 23, title: "Persona5", rating: "", price: "", picture: "", console: "", route: "PS4"},
        { id: 24, title: "Resident Evil 2", rating: "", price: "", picture: "", console: "", route: "PS4"},
        { id: 25, title: "Grand Theft Auto 5", rating: "", price: "", picture: "", console: "", route: "PS4"},
        { id: 26, title: "Rise of the Tomb Raider", rating: "", price: "", picture: "", console: "", route: "PS4"},
        { id: 27, title: "", rating: "", price: "", picture: "", console: ""},
        { id: 28, title: "", rating: "", price: "", picture: "", console: ""},
        { id: 29, title: "", rating: "", price: "", picture: "", console: ""},
        { id: 30, title: "", rating: "", price: "", picture: "", console: ""},
        { id: 31, title: "", rating: "", price: "", picture: "", console: ""},
        { id: 32, title: "", rating: "", price: "", picture: "", console: ""},
        { id: 33, title: "", rating: "", price: "", picture: "", console: ""},
        { id: 34, title: "", rating: "", price: "", picture: "", console: ""},
        { id: 35, title: "", rating: "", price: "", picture: "", console: ""},
        { id: 36, title: "", rating: "", price: "", picture: "", console: ""},
        { id: 37, title: "", rating: "", price: "", picture: "", console: ""},
        { id: 38, title: "", rating: "", price: "", picture: "", console: ""},
        { id: 39, title: "", rating: "", price: "", picture: "", console: ""},
        { id: 40, title: "", rating: "", price: "", picture: "", console: ""},
    ],
    all: function() { return this.games},
    get: function(id) {
        const isGame = game => game.id === id
        return this.games.find(isGame)
    }
}

export default LocalGameAPI