export default function packageB(button) {
  button.innerHTML = "This text is getting set from package C";
  return console.log("Hello From C");
}
