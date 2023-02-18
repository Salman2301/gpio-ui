module.exports = {
  title: "Gate Controller",
  // Create a button with pin in and out
  // out pin will look for signal
  buttons: [
    {
      label: "Open main gate",
      pin: {
        in: "11",
        out: "36"
      },
      id: "btn-open"
    },
    {
      label: "Open garage gate",
      pin: {
        in: "10",
        out: "36"
      },
      id: "btn-garage"
    },
  ],

  config: {
    // Check the output signal every ms 
    checkStatusInterval: 5000,
  }
}