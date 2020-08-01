class Bmw {
  constructor(model, price, maxSpeed) {
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}

class BmwFactory {
  create(type) {
    if (type === "X5") return new Bmw(type, 108_000, 300);
    if (type === "X6") return new Bmw(type, 111_000, 320);
  }
}

const factory = new BmwFactory();

const x5 = factory.create("X5"); // { model: 'X5', price: 108000, maxSpeed: 300 }
const x6 = factory.create("X6"); // { model: 'X6', price: 111000, maxSpeed: 320 }
