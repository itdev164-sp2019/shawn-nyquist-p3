

const LocalGameAPI = {
    games: [
       { id: 1, title: "Fortnite", rating: "8.7", price: "Free",  console: "PS4", route: "/PS4-Games"},
       { id: 2, title: "Anthem", rating: "6.5", price: "$39.99",  console: "PS4", route: "/PS4-Games"},
       { id: 3, title: "Minecraft", rating: "7.8", price: "$19.99", console: "Xbox One", route: "/Xbox-Games"},
       { id: 4, title: "Overwatch", rating: "8.2", price: "$39.99", console: "PS4", route: "/PS4-Games"},
       { id: 5, title: "Super Smash Brothers Ultimate", rating: "6.1", price: "$29.99", console: "Nintendo Switch", route: "/Switch-Games"},
       { id: 6, title: "The Legend of Zelda: Breath of the Wild", rating: "9.1", price: "$59.99", console: "Nintendo Switch", route: "/Switch-Games"},
       { id: 7, title: "God of War", rating: "9.3", price: "$49.99", console: "PS4", route: "/PS4-Games"},
       { id: 8, title: "Super Mario Odyssey", rating: "9.2", price: "$49.99", console: "Nintendo Switch", route: "/Switch-Games"},
       { id: 9, title: "Horizon Zero Dawn", rating: "7.9", price: "$19.99", picture: "", console: "PS4", route: "/PS4-Games"},
       { id: 10, title: "Red Dead Redemption 2", rating: "8.9", price: "$49.99", picture: "", console: "PS4", route: "/PS4-Games"},
       { id: 11, title: "Castlevania", rating: "6.6", price: "$19.99", picture: "", console: "PS4", route: "/PS4-Games"},
       { id: 12, title: "Gears of War 7", rating: "9.8", price: "$59.99", picture: "", console: "Xbox One", route: "/Xbox-Games"},
       { id: 13, title: "The Last of Us 2", rating: "9.4", price: "$59.99", picture: "", console: "PS4", route: "/PS4-Games"},
       { id: 14, title: "Spider-Man", rating: "8.8", price: "$59.99", picture: "", console: "PS4", route: "/PS4-Games"},
       { id: 15, title: "Mortal Kombat 11", rating: "8.1", price: "$59.99", picture: "", console: "PS4", route: "/PS4-Games"},
       { id: 16, title: "Splatoon 2", rating: "4.8", price: "$29.99", picture: "", console: "Nintendo Switch", route: "/Switch-Games"},
       { id: 17, title: "Mario Kart 8", rating: "7.9", price: "$39.99", picture: "", console: "Nintendo Switch", route: "/Switch-Games"},
       { id: 18, title: "Rage 2", rating: "7.6", price: "$29.99", picture: "", console: "PS4", route: "/PS4-Games"},
       { id: 19, title: "Days Gone", rating: "7.7", price: "$59.99", picture: "", console: "PS4", route: "/PS4-Games"},
       { id: 20, title: "The Show 19", rating: "", price: "$19.99", picture: "", console: "PS4", route: "/PS4-Games"},
       { id: 21, title: "Assassins Creed Odyssey", rating: "8.2", price: "$49.99", picture: "", console: "PS4", route: "/PS4-Games"},
       { id: 22, title: "The Division 2", rating: "7.4", price: "$49.99", picture: "", console: "Xbox One", route: "/Xbox-Games"},
       { id: 23, title: "Persona 5", rating: "8.8", price: "$29.99", picture: "", console: "PS4", route: "/PS4-Games"},
       { id: 24, title: "Resident Evil 2", rating: "7.2", price: "$39.99", picture: "", console: "Xbox One", route: "/Xbox-Games"},
       { id: 25, title: "Grand Theft Auto 5", rating: "8.1", price: "$59.99", picture: "", console: "Xbox One", route: "/Xbox-Games"},
       { id: 26, title: "Rise of the Tomb Raider", rating: "6.8", price: "$39.99", picture: "", console: "PS4", route: "/PS4-Games"},
       { id: 27, title: "Rage 2", rating: "7.8", price: "$29.99", picture: "", console: "Xbox One", route: "/Xbox-Games"},
       { id: 28, title: "Grand Theft Auto 5", rating: "7.8", price: "$59.99", picture: "", console: "PS4", route: "/PS4-Games"},
       { id: 29, title: "Fortnite", rating: "7.4", price: "Free", picture: "", console: "Xbox One", route: "/Xbox-Games"},
       { id: 30, title: "Fortnite", rating: "6.9", price: "Free", picture: "", console: "Nintendo Switch", route: "/Switch-Games"},
       { id: 31, title: "Team Sonic Racing", rating: "5.6", price: "$39.99", picture: "", console: "Nintendo Switch", route: "/Switch-Games"},
       { id: 32, title: "Final Fantasy XII", rating: "8.8", price: "$49.99", picture: "", console: "Xbox One", route: "/Xbox-Games"},
       { id: 33, title: "Mortal Kombat 11", rating: "8.7", price: "$59.99", picture: "", console: "Xbox One", route: "/Xbox-Games"},
       { id: 34, title: "World War Z", rating: "7.4", price: "$39.99", picture: "", console: "Xbox One", route: "/Xbox-Games"},
       { id: 35, title: "Lego Marvel Collection", rating: "9.1", price: "$49.99", picture: "", console: "Xbox One", route: "/Xbox-Games"},
   ],

    all: function() { return this.games},
    get: function(id) {
        const isGame = game => game.id === id
        return this.games.find(isGame)
    }
}

export default LocalGameAPI