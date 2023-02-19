
/**
 * Resolve a promise after a set time
 * @param {number} ms Wait till the promise resolve
 */
function sleep(ms) {
  return new Promise(res=>setTimeout(res, ms));
}


module.exports = { sleep }