// ex1.js
function run() {
  console.log("Start");
  setTimeout(() => console.log("Middle"), 0);
  setTimeout(() => console.log("End"), 10);
}

if (typeof module !== "undefined") module.exports = { run };
