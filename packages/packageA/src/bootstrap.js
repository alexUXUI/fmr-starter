import("./packageA").then((mod) => {
  let buttonA = document.getElementById("buttonA");
  buttonA.innerText = "Package A button";
  mod.default(buttonA);
});

import("packageB/packageB").then((mod) => {
  let buttonB = document.getElementById("buttonB");
  mod.default(buttonB);
});

import("packageC/packageC").then((mod) => {
  let buttonC = document.getElementById("buttonC");
  mod.default(buttonC);
});
