let tacses = document.querySelector("#b");
tacses.oninput = () => {
  let a = document.querySelector(".result");
  let b = document.querySelector("#a").value;
  let c = document.querySelector("#b").value;

  a.innerHTML = b - (b / 100) * c; 
};
