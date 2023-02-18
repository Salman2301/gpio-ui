class GateCtrl {
  constructor(r) {
    this.r = r;
  }

  signal(pinIn) {
    return this.r.in(pinIn).on();
  }
  check(pinOut) {
    return this.r.out(pinOut).state;
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