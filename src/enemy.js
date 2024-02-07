import { gameboard } from "./gamboard";
import { gameboard1_new } from ".";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isShipOverlap(ship, start, axis, board) {
  for (let i = 0; i < ship.length; i++) {
    const position = axis === "x" ? start + i : start + i * 10;
    if (board.spaces[position]) {
      return true; // Ship overlap detected
    }
  }
  return false; // No overlap
}

function place_enemy_ships(ship, board, callback) {
  let squares = document.querySelectorAll(".board2 .square");

  const axis_options = ["x", "y"];
  const random_axis = axis_options[getRandomInt(0, 1)];

  let random_start = getRandomInt(0, 99);

  let first_digit = random_start / 10;
  let int_first_digit = parseInt(first_digit);
  let row_end = int_first_digit * 10 + 9;

  let second_digit = random_start % 10;
  let column_end = second_digit + 90;

  while (
    (random_axis === "x" && random_start + ship.length > row_end) ||
    (random_axis === "y" && random_start + ship.length * 10 > column_end) ||
    isShipOverlap(ship, random_start, random_axis, board)
  ) {
    random_start = getRandomInt(0, 99);

    first_digit = random_start / 10;
    int_first_digit = parseInt(first_digit);
    row_end = int_first_digit * 10 + 9;

    second_digit = random_start % 10;
    column_end = second_digit + 90;
  }

  for (let i = 0; i < ship.length; i++) {
    const position =
      random_axis === "x" ? random_start + i : random_start + i * 10;
    board.spaces[position] = ship;
  }
  callback();
}

let attacks = [];

function enemy_atack(player, callback) {
  let random_atack = getRandomInt(0, 99);

  while (attacks.includes(random_atack)) {
    random_atack = getRandomInt(0, 99);
  }
  attacks.push(random_atack);

  gameboard1_new.recive_atack(random_atack, player);

  callback();
}

export { isShipOverlap, place_enemy_ships, getRandomInt, enemy_atack };
