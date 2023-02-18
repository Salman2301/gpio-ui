const setting = require("../config/setting");

class GateCtrl {
  constructor(r) {
    this.r = r;
  }

  signal(btnId) {
    const button = this.getButton(btnId);
    if (!button) return;
    console.log(`Signal ${button.pin.in}!`);
    return this.r.in(button.pin.in).on();
  }
  check(btnId) {
    const button = this.getButton(btnId);
    if (!button) return;
    return this.r.out(button.pin.out).state;
  }

  getButton(btnId) {
    const button = setting.buttons.find(e => e.id===btnId);
    if (!button) {
      console.error(`Failed to get the button id ${btnId}`)
      return;
    }
    return button;
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