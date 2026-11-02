// ex2.js
function run() {
  setTimeout(() => console.log("first"), 10);
  setTimeout(() => console.log("second"), 10);
  setTimeout(() => console.log("third"), 10);
}

if (typeof module !== "undefined") module.exports = { run };
