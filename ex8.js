// ex8.js
function run() {
  const steps = ["Step 1", "Step 2", "Step 3"];
  let time=0

  for (let i = 0; i < steps.length; i++) {
    time+=10
       f(time,i)
  }
  function f(time,i){
     setTimeout(() => {
      setMessage(steps[i]);
      addLine(steps[i]);
    }, time);
  }
  setTimeout(() => {
    setMessage("Done!");
    addLine("Done!");
  }, 50);


}

if (typeof module !== "undefined") module.exports = { run };
