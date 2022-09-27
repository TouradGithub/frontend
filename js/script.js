let container = document.querySelector(".container");
let bullet = document.querySelectorAll(".bullet");

let start = document.querySelector(".start-date");
let secS = document.querySelector("#sec-S");
let minitS = document.querySelector("#minit-S");
let HouerS = document.querySelector("#Hour-S");
let dayS = document.querySelector("#day-S");
let monthS = document.querySelector("#manth-S");
let yearS = document.querySelector("#year-S");

let end = document.querySelector(".end-date");
let secE = document.querySelector("#sec-E");
let minitE = document.querySelector("#minit-E");
let HouerE = document.querySelector("#Hour-E");
let dayE = document.querySelector("#day-E");
let monthE = document.querySelector("#manth-E");
let yearE = document.querySelector("#year-E");

//

//

//

//

//

//

//

//

window.onload = () => {
  secS.value || 0;
  minitS.value || 0;
  HouerS.value || 0;
  dayS.value || 0;
  monthS.value || 0;
  yearS.value || 0;

  let dateNow = new Date();
  yearE.value = dateNow.getFullYear();
  monthE.value = dateNow.getMonth() + 1;
  dayE.value = dateNow.getDate();
  HouerE.value = dateNow.getHours();
  minitE.value = dateNow.getMinutes();
  secE.value = dateNow.getSeconds();

  document.querySelector(".year").innerHTML = 0;
  document.querySelector(".month").innerHTML = 0;
  document.querySelector(".day").innerHTML = 0;
  document.querySelector(".houer").innerHTML = 0;
  document.querySelector(".minit").innerHTML = 0;
  document.querySelector(".sec").innerHTML = 0;
};

container.addEventListener("input", () => {
  let startD = new Date(
    yearS.value,
    monthS.value,
    dayS.value,
    HouerS.value,
    minitS.value,
    secS.value
  );
  let endD = new Date(
    yearE.value,
    monthE.value,
    dayE.value,
    HouerE.value,
    minitE.value,
    secE.value
  );
  let se = new Date(startD - endD);
  let ss = +(parseInt(endD.getFullYear()) - parseInt(startD.getFullYear()));
  document.querySelector(".year").innerHTML = ss;
  document.querySelector(".month").innerHTML = se.getMonth() + 1;
  document.querySelector(".day").innerHTML = se.getDate();
  document.querySelector(".houer").innerHTML = se.getHours();
  document.querySelector(".minit").innerHTML = se.getMinutes();
  document.querySelector(".sec").innerHTML = se.getSeconds();
  console.log(se);
});

bullet[0].onclick = () => {
  bullet[0].classList.toggle("active");
  secS.value = "";
  minitS.value = "";
  HouerS.value = "";
  dayS.value = "";
  monthS.value = "";
  yearS.value = "";
};

bullet[1].onclick = () => {
  bullet[1].classList.toggle("active");
  secE.value = "";
  minitE.value = "";
  HouerE.value = "";
  dayE.value = "";
  monthE.value = "";
  yearE.value = "";
};
