let adviceID = document.getElementById("advice-id");
let adviceText = document.getElementById("advice-text");
let newAdvice = document.getElementById("new-advice");
let request = new XMLHttpRequest();

request.open("GET", "https://api.adviceslip.com/advice", true);
request.onload = function () {
  let slip = JSON.parse(this.response);
  adviceID.innerHTML = `Advice #${slip.slip.id}`;
  adviceText.innerHTML = `"${slip.slip.advice}"`;
};
request.send();

newAdvice.addEventListener("click", function () {
  request.open("GET", "https://api.adviceslip.com/advice", true);
  request.response = function () {
    let slip = JSON.parse(this.response);
    adviceID.innerHTML = `Advice #${slip.slip.id}`;
    adviceText.innerHTML = `"${slip.slip.advice}"`;
  };
  request.send();
});
