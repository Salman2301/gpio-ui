window.onload = init;

function init() {
  checkStatus();

  const $btnOpen = document.getElementById("btn-open");
  const $btnClose = document.getElementById("btn-close");


  if($btnOpen)  $btnOpen.onclick = openGate;
  if($btnClose) $btnClose.onclick = closeGate;

}


async function openGate() {
  const resState = await fetchJson("/api/gpio/open");
  alert("Opening gate!");
}

async function closeGate() {
  const resState = await fetchJson("/api/gpio/close");
  alert("Closing gate!");

}

function checkStatus() {
  setTimeout(async () => {
    console.log();
    const $textStatus = document.getElementById("text-status");
    if (!$textStatus) return;
    $textStatus.textContent = "Loading..."

    await sleep(500);
    const resState = await fetchJson("/api/gpio/state");
    if (!resState || !$textStatus) return;
    $textStatus.textContent = resState.message ? "Gate is opened" : "Gate is closed";
    checkStatus();
  }, 5000);
}

function sleep(ms) {
  return new Promise(res => setTimeout(res, ms));
}

function fetchJson(path) {
  return fetch(path).then(res => res.json()).catch(console.error);
}

// Talk to the fate api check the status of the gate


