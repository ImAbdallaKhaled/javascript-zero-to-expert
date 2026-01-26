// Game data
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Destructuring the players array into two teams
const [players1, players2] = game.players;

// Separating the goalkeeper from field players using Rest Pattern
const [gk, ...fieldPlayers] = players1;

// Merging all players from both teams into one array using Spread Operator
const allPlayers = [...players1, ...players2];

// Adding substitute players to team 1
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// Extracting odds from nested object and renaming x to draw
const {
  odds: { team1, x: draw, team2 },
} = game;

// Function that accepts any number of players and prints the number of goals
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

// Calling the function with separate names
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// Calling the function by spreading the scorers array
printGoals(...game.scored);

// Printing the team more likely to win using Short Circuiting
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
