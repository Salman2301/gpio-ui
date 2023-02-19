const setting = require("../config/setting");
const { sleep } = require("../service/utility/async");
const { MOCK_ARRAY_GPIO } = require("../config/env")


class Gpio {
  constructor(r) {
    this.r = r;
  }

  /**
   * 
   * @param {import("../index").StepPin} step 
   * @returns {Promise<any>}
   */
  stepPin(step) {
    
    const stepMode = step.mode;
    const stepState = stepMode === "toggle" ? !this.getState(step.pin) : stepMode === "on";

    const switchMode = stepState ? "on" : "off";
    console.log(`Signal pin ${switchMode}!`);
    return this.r.in(step.pin)[switchMode]();
  }

  /**
   * 
   * @param {import("../index").StepSleep} step 
   * @returns {Promise<any>}
   */
  stepSleep(step) {
    return sleep(step.wait);
  }

  /**
   * Return the state for the pin
   * @param {number} pin 
   * @returns {boolean}
   */
  getState(pin) {
    return this.r.out(pin).state;
  }

  getAction(actionId) {
    const action = setting.action.find(e => e.id===actionId);
    if (!action) {
      console.error(`Failed to get the action id ${actionId}`)
      return;
    }
    return action;
  }

  async trigger(actionId) {
    const action = this.getAction(actionId);
    if (!action) {
      console.error("Failed to trigger action ", actionId);
      return;
    }
    for (const step of action.steps) {
      if (step.type === "pin") {
        this.stepPin(step);
      }
      else if (step.type === "sleep") {
        await this.stepSleep(step);
      }
    }
  }

  isDisabled(actionId) {
    const action = this.getAction(actionId);
    if (!action || !action.disable) return false;
    
    const state = this.getState(action.disable.selectorPin)

    return state === action.disable.selectorState;
  }
}

async function init() {
  let gpioModule;
  if (MOCK_ARRAY_GPIO) {
    const { default: r } = await import("./mockArrayGpio.js");
    gpioModule = r;
  }
  else {
    const { default: r } = await import('array-gpio');
    gpioModule = r;
  }
  
  return new Gpio(gpioModule);
}

module.exports = init();