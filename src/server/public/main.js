window.onload = init;

function init() {
  checkStatus();

  const $btns = document.getElementsByClassName("btn");

  for (const $btn of [...$btns]) {
    // @ts-expect-error
    if($btn) $btn.onclick = handleBtnClick
  }

}

async function handleBtnClick(e) {
  /** @type {HTMLButtonElement} */
  const el = e.target;
  if (!el) alert("Failed to handle click event. no element found!");

  const pinIn = el.getAttribute("data-pin-in");
  
  const resState = await fetchJson(`/api/gpio/signal/${pinIn}`);
  alert(`Sent signal ${pinIn}`)
  updateStatus();
}

async function checkStatus() {
  updateStatus();
  // @ts-expect-error
  await sleep(window.config.checkStatusInterval);
  checkStatus();
}

async function updateStatus() {
  
  const $btns = document.getElementsByClassName("btn");
  
  for (const $btn of $btns) {
    const pinOut = $btn.getAttribute("data-pin-out")    
    const resState = await fetchJson(`/api/gpio/check/${pinOut}`);
    
    const state = resState.message.state;
    if (state) {
      $btn.setAttribute("disabled", "true");
    }
    else {
      $btn.removeAttribute("disabled")
    }
  }
  
  console.log("status updated!");
}

function sleep(ms=5000) {
  return new Promise(res => setTimeout(res, ms));
}

function fetchJson(path) {
  return fetch(path).then(res => res.json()).catch(console.error);
}

