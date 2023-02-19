/** @type {import("../index").SettingPage} */
const setting = {
  title: "Gate Controller",
  // Create a button with pin in and out
  // out pin will look for signal
  action: [
    {
      type: "button",
      label: "Open main gate",
      id: "btn-open",
      disable: {
        selectorPin: 11,
        selectorState: true
      },
      steps: [
        {
          type: "pin",
          pin: 11,
          mode: "toggle"
        },
        {
          type: "sleep",
          wait: 3000
        }
      ]

    }
  ],

  config: {
    // Check the output signal every ms 
    checkStatusInterval: 1500,
  }
}


module.exports = setting;