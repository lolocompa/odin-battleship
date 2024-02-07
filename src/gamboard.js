import { current_player } from "./player";

class gameboard {
  constructor() {
    this.spaces = Array(100).fill(null);
  }

  place_ship(ship, axis, callback) {
    let squares = document.querySelectorAll(".board .square");

    const rotate = document.querySelector(".rotate");
    rotate.addEventListener("click", () => {
      axis = axis === "x" ? "y" : "x";
      let btn = document.querySelector(".rotate");

      if (axis === "x") {
        btn.textContent = "rotate to y";
      } else {
        btn.textContent = "rotate to x";
      }
    });

    const clickHandler = (event) => {
      let number = parseInt(event.target.dataset.position);

      let first_digit = number / 10;
      let int_first_digit = parseInt(first_digit);
      let row_end = int_first_digit * 10 + 9;

      let second_digit = number % 10;
      let column_end = second_digit + 90;

      if (axis === "x") {
        let canPlaceShip = true;

        for (let i = 0; i < ship.length; i++) {
          if (this.spaces[number + i]) {
            canPlaceShip = false;
            break;
          } else if (number + i > row_end) {
            canPlaceShip = false;
            break;
          }
        }

        if (canPlaceShip) {
          for (let i = 0; i < ship.length; i++) {
            this.spaces[number + i] = ship;
            squares[number + i].style.backgroundColor = "orange"; // Change color
          }

          squares.forEach((square) =>
            square.removeEventListener("click", clickHandler)
          );
          callback();
        }
      }

      if (axis === "y") {
        let canPlaceShip = true;

        for (let i = 0; i < ship.length; i++) {
          if (this.spaces[number + i * 10]) {
            canPlaceShip = false;
            break;
          } else if (number + i * 10 > column_end) {
            canPlaceShip = false;
            break;
          }
        }

        if (canPlaceShip) {
          for (let i = 0; i < ship.length; i++) {
            this.spaces[number + i * 10] = ship;
            squares[number + i * 10].style.backgroundColor = "orange"; // Change color
          }

          squares.forEach((square) =>
            square.removeEventListener("click", clickHandler)
          );
          callback();
        }
      }
    };

    squares.forEach((square) => square.addEventListener("click", clickHandler));
  }

  recive_atack(location, player) {
    let squares;
    if (player === 1) {
      squares = document.querySelectorAll(".board2 .square");
    } else {
      squares = document.querySelectorAll(".board .square");
    }

    if (this.spaces[location]) {
      let hit_ship = this.spaces[location];
      hit_ship.hit();
      hit_ship.is_sunk();
      squares[location].style.backgroundColor = "red";
    } else {
      squares[location].style.backgroundColor = "#1e3a8a";
      squares[location].style.border = "none  ";
    }
  }

  all_sunk(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i].sunk === true) {
        count++;
      }
    }
    if (count === 5) {
      return "over";
    }
  }
}

function create_board() {
  const container = document.querySelector(".board");
  let count = 0;

  for (let i = 0; i < 100; i++) {
    let div = document.createElement("div");
    div.classList.add("square");
    div.dataset.position = count;
    container.appendChild(div);
    count++;
  }
}

function create_board2() {
  const container = document.querySelector(".board2");
  let count = 0;

  for (let i = 0; i < 100; i++) {
    let div = document.createElement("div");
    div.classList.add("square");
    div.dataset.position = count;
    container.appendChild(div);
    count++;
  }
}

function visualize_ships(ship, axis, callback, aditional) {
  console.log(ship.length);

  const rotate = document.querySelector(".rotate");
  const squares = document.querySelectorAll(".board .square");

  // Remove existing event listeners
  squares.forEach((square) => {
    square.removeEventListener("click", handleSquareClick);
    square.removeEventListener("mouseover", handleMouseOver);
    square.removeEventListener("mouseout", handleMouseOut);
  });

  rotate.addEventListener("click", () => {
    axis = axis === "x" ? "y" : "x";
  });

  function handleSquareClick(event) {
    let data = parseInt(event.target.dataset.position);

    let first_digit = data / 10;
    let int_first_digit = parseInt(first_digit);
    let row_end = int_first_digit * 10 + 9;

    let second_digit = data % 10;
    let column_end = second_digit + 90;

    let can_callback = true;

    for (let i = 0; i < ship.length; i++) {
      if (axis === "x") {
        if (
          data + i > row_end ||
          squares[data + i].style.backgroundColor === "orange"
        ) {
          can_callback = false;
        }
      } else if (axis === "y") {
        if (
          data + i * 10 > column_end ||
          squares[data + i * 10].style.backgroundColor === "orange"
        ) {
          can_callback = false;
        }
      }
    }

    if (can_callback === true) {
      callback();
      squares.forEach((square) => {
        square.removeEventListener("click", handleSquareClick);
        square.removeEventListener("mouseover", handleMouseOver);
        square.removeEventListener("mouseout", handleMouseOut);
      });
    }
    // Pass the event object to the callback
  }

  function handleMouseOver(event) {
    let data = parseInt(event.target.dataset.position);

    let first_digit = data / 10;
    let int_first_digit = parseInt(first_digit);
    let row_end = int_first_digit * 10 + 9;

    let second_digit = data % 10;
    let column_end = second_digit + 90;

    for (let i = 0; i < ship.length; i++) {
      if (axis === "x") {
        if (
          data + i > row_end ||
          squares[data + i].style.backgroundColor === "orange"
        ) {
          break;
        }
        squares[data + i].style.backgroundColor = "black";
      } else if (axis === "y") {
        if (
          data + i * 10 > column_end ||
          squares[data + i * 10].style.backgroundColor === "orange"
        ) {
          break;
        }
        squares[data + i * 10].style.backgroundColor = "black";
      }
    }
  }

  function handleMouseOut(event) {
    let data = parseInt(event.target.dataset.position);

    for (let i = 0; i < ship.length; i++) {
      if (
        axis === "x" &&
        squares[data + i].style.backgroundColor !== "orange"
      ) {
        squares[data + i].style.backgroundColor = ""; // Reset to default color
      } else if (
        axis === "y" &&
        squares[data + i * 10].style.backgroundColor !== "orange"
      ) {
        if (squares[data + i * 10].style.backgroundColor === "orange") {
          break;
        }
        squares[data + i * 10].style.backgroundColor = "";
      }
    }
  }

  // Add new event listeners
  squares.forEach((square) => {
    square.addEventListener("click", handleSquareClick);
    square.addEventListener("mouseover", handleMouseOver);
    square.addEventListener("mouseout", handleMouseOut);
  });
}

export { create_board, gameboard, create_board2, visualize_ships };
