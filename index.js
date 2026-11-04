
const games = [
    { name: "GTA V", price: 1000, installed: true },
    { name: "Minecraft", price: 800, installed: true },
    { name: "Elden Ring", price: 2000, installed: false },
    { name: "Shadow of Mordor", price: 500, installed: true },
    { name: "RDR2", price: 1500, installed: false }
];

// 1. Display all games
function showGames() {
    console.log("My Game Library:");

    for (let i = 0; i < games.length; i++) {
        console.log(games[i].name + " - ₹" + games[i].price);
    }
}

// 2. Search for a game
function findGame(searchName) {
    let game = games.find(game => game.name === searchName);

    if (game) {
        console.log("Game found:", game);
        return game;
    } else {
        console.log("Game not found");
        return null;
    }
}

// 3. Add a new game
function addGame(name, price, installed) {
    let gameNames = games.map(game => game.name);

    if (gameNames.includes(name)) {
        console.log("Already owned");
    } else {
        games.push({
            name: name,
            price: price,
            installed: installed
        });

        console.log("Added successfully");
    }

    return games.length;
}

// 4. Filter expensive games
function expensiveGames() {
    let result = games.filter(game => game.price > 1000);

    console.log("Expensive games:", result);
    return result;
}

// 5. Get only game names
function getGameNames() {
    let names = games.map(game => game.name);

    console.log(names);
    return names;
}

// 6. Calculate total library value
function calculateTotalValue() {
    let total = games.reduce((sum, game) => {
        return sum + game.price;
    }, 0);

    console.log("Total library value: ₹" + total);
    return total;
}

// 7. Remove the last game
function removeLastGame() {
    let removed = games.pop();

    console.log("Removed game:", removed);
    return removed;
}

// 8. Check installed games
function showInstalledGames() {
    for (let i = 0; i < games.length; i++) {
        if (games[i].installed === true) {
            console.log(games[i].name + " is installed");
        } else {
            console.log(games[i].name + " is not installed");
        }
    }
}

// PROGRAM EXECUTION

showGames();

findGame("Minecraft");

addGame("Cyberpunk 2077", 2500, true);

expensiveGames();

getGameNames();

calculateTotalValue();

showInstalledGames();

// Uncomment to remove the last game:
// removeLastGame();
