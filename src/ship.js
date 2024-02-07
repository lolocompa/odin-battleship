class ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.sunk = false;
    this.axis = "x"
    this.placed = false
  }

  hit() {
    this.hits++;
  }

  is_sunk() {
    if (this.hits === this.length) {
      this.sunk = true;
    } else {
      return;
    }
  }
}

export {ship}
