class Counter {
  constructor() {
    if (typeof Counter.instance === "object") {
      return Counter.instance;
    }

    Counter.instance = this;

    this.count = 0;
    return this;
  }

  getCount() {
    return this.count;
  }

  increaseCount() {
    return this.count++;
  }
}

const myCount1 = new Counter();
myCount1.increaseCount();
myCount1.increaseCount();
myCount1.getCount(); // 2

const myCount2 = new Counter();
myCount2.increaseCount();
myCount2.getCount(); // 3
myCount1.getCount(); // 4
