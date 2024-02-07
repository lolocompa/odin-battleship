import { gameboard1_new, gameboard2_new, all_enemy_ships, all_ships } from ".";
import { enemy_atack } from "./enemy";

class player {
  constructor(turn) {
    this.turn = turn;
  }
}

let current_player;
current_player = new player(1);
let game_ended = false;

const player2_board = document.querySelector(".board2");
player2_board.addEventListener("click", (event) => {
  if (current_player.turn === 1) {
    handle_click(event);
  }
});

function start_game() {
  if (game_ended === true) {
    return;
  }

  if (current_player.turn === 2) {
    enemy_atack(current_player.turn, () => {
      // Continue the game after the enemy's attack
      handle_enemy_turn();
    });
  }
}

let shots1 = [];

function handle_click(event) {
  let location = parseInt(event.target.dataset.position);

  if (current_player.turn === 1 && !shots1.includes(location)) {
    shots1.push(location);
    gameboard2_new.recive_atack(location, current_player.turn);
  } else {
    // Location has already been attacked, do nothing or show a message
    return;
  }

  if (gameboard2_new.all_sunk(all_ships) === "over") {
    alert("Player 2 wins!");
    game_ended = true;
  } else {
    current_player.turn = current_player.turn === 1 ? 2 : 1;
    start_game();
  }
}

function handle_enemy_turn() {
  if (gameboard1_new.all_sunk(all_enemy_ships) === "over") {
    let h1 = document.createElement("h1");
    h1.textContent = "You Won!";
    let all_boards = document.querySelector(".all_boards");
    all_boards.remove();

    let title = document.querySelector(".text");
    title.remove();

    let winner = document.querySelector(".winner");
    winner.appendChild(h1);
    game_ended = true;
  } else if (gameboard2_new.all_sunk(all_ships) === "over") {
    let h1 = document.createElement("h1");
    h1.textContent = "cpu Won!";
    let all_boards = document.querySelector(".all_boards");
    all_boards.remove();

    let title = document.querySelector(".text");
    title.remove();

    let winner = document.querySelector(".winner");
    winner.appendChild(h1);
  } else {
    current_player.turn = 1;
    start_game();
  }
}
export { start_game, handle_click, player, current_player };
