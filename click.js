let num = Math.random();

let button = document.getElementById("flip");
let result = document.getElementById("result");

function fnClick(event) {
  let num = Math.random();

  if (num < 0.5) {
    result.innerHTML = fin.style.display = "block"
  } else if (num > 0.5 && num< 0.75 ){
    alert("try again")
  } else {
    result.innerHTML = end.style.display = "block"
  }
}
button.addEventListener("click", fnClick);

//https://sebhastian.com/coin-flip-javascript/
