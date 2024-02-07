import "./styles.css";
import {
  create_board,
  gameboard,
  create_board2,
  visualize_ships,
} from "./gamboard";
import { ship } from "./ship";
import { start_game } from "./player";
import { place_enemy_ships } from "./enemy";

let ship5 = new ship(5);
let ship4 = new ship(4);
let ship3 = new ship(3);
let ship2 = new ship(2);
let ship1 = new ship(1);
let all_ships = [ship5, ship4, ship3, ship2, ship1];

let ship_enemy5 = new ship(5);
let ship_enemy4 = new ship(4);
let ship_enemy3 = new ship(3);
let ship_enemy2 = new ship(2);
let ship_enemy1 = new ship(1);
let all_enemy_ships = [
  ship_enemy5,
  ship_enemy4,
  ship_enemy3,
  ship_enemy2,
  ship_enemy1,
];

create_board();
create_board2();

const gameboard1_new = new gameboard();
const gameboard2_new = new gameboard();

place_enemy_ships(ship_enemy5, gameboard2_new, () => {
  place_enemy_ships(ship_enemy4, gameboard2_new, () => {
    place_enemy_ships(ship_enemy3, gameboard2_new, () => {
      place_enemy_ships(ship_enemy2, gameboard2_new, () => {
        place_enemy_ships(ship_enemy1, gameboard2_new, () => {});
      });
    });
  });
});

visualize_ships(ship5, ship5.axis, () => {
  visualize_ships(ship4, ship4.axis, () => {
    visualize_ships(ship3, ship3.axis, () => {
      visualize_ships(ship2, ship2.axis, () => {
        visualize_ships(ship1, ship1.axis, () => {});
      });
    });
  });
});

let current_ship = ship5;

gameboard1_new.place_ship(ship5, ship5.axis, () => {
  current_ship = ship4;
  gameboard1_new.place_ship(ship4, ship4.axis, () => {
    current_ship = ship3;
    gameboard1_new.place_ship(ship3, ship3.axis, () => {
      current_ship = ship2;
      gameboard1_new.place_ship(ship2, ship2.axis, () => {
        current_ship = ship1;
        gameboard1_new.place_ship(ship1, ship1.axis, () => {
          let btn = document.querySelector(".rotate");
          btn.remove();

          let text = document.querySelector("#text_content");
          text.textContent = "Attack!";
          start_game();
        });
      });
    });
  });
});

export { all_ships, gameboard1_new, gameboard2_new, all_enemy_ships };
