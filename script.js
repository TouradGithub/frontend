let tacses = document.querySelector("#b");
tacses.oninput = () => {
  console.log("good");
  document.querySelector(".result").innerHTML = (
    (document.querySelector("#a").value / 100) *
    document.querySelector("#b").value
  ).toFixed(2);
};
