class MockArrayGpio {
  constructor() {
    console.log("Mocking array-gpio lib");

    this.led = {
      state: false
    }

    this.sw = {
      on: () => {
        console.log("switch is on!")
        this.led.state = true;
        setTimeout(this.sw.off, 3000)
      },
      off: () => {
        console.log("switch is off!")
        this.led.state = false;
      }
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
