import("packageA/packageA").then((mod) => {
  let buttonA = document.getElementById("buttonA");
  mod.default(buttonA);
});

import("./packageB").then((mod) => {
  let buttonB = document.getElementById("buttonB");
  mod.default(buttonB);
});

import("packageC/packageC").then((mod) => {
  let buttonC = document.getElementById("buttonC");
  mod.default(buttonC);
});
