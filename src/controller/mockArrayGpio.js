class MockArrayGpio {
  constructor() {
    console.log("Mocking array-gpio lib")
    this.led = {
      state: false
    }
    this.sw = {
      on: () => console.log("switch is on!"),
      off: () => console.log("switch is off!"),
    }
  }
  in() {
    return this.sw;
  }
  out() {
    return this.led;
  }
}

module.exports = new MockArrayGpio();
