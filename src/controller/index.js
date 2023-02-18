class GateCtrl {
  constructor(r, inputPin = 11, outputPin = 33) {
    this.sw = r.in(inputPin);
    this.led = r.out(outputPin);

  }

  isGateOpening() {
    return this.isGateOpen();
  }

  isGateOpen() {
    return this.led.state;
  }

  openGate() {
    if(!this.isGateOpen()) this.sw.on();
  }

  closeGate() {
    if(this.isGateOpen()) this.sw.off();
  }
}

const mockRun = true;
async function init() {
  let gpioModule;
  if (mockRun) {
    const { default: r } = await import("./mockArrayGpio.js");
    gpioModule = r;
  }
  else {
    const { default: r } = await import('array-gpio');
    gpioModule = r;
  }
  
  return new GateCtrl(gpioModule);
}

module.exports = init();