import { ship } from "../ship";

let new_ship = new ship(5);

test("test ship class", () => {
  expect(new_ship.length).toBe(5);
});

new_ship.hit()
new_ship.hit()
new_ship.hit()
new_ship.hit()
new_ship.hit()
test("test hit function", () => {
  expect(new_ship.hits).toBe(5);
});

new_ship.is_sunk();
test("test is sunk function expecting false", () => {
  expect(new_ship.sunk).toBe(true);
});
