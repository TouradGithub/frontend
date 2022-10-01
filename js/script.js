let datenow = new Date();
var options1 = {
  month: "long",
};
var options2 = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
};
let higiri = document.querySelector(".higiri");
let miladi = document.querySelector(".miladi");
let monthH = document.querySelector(".higiri .month-h");
let monthM = document.querySelector(".month-m");
let dayH = document.querySelector(".day span");
let hh = datenow.toLocaleString("en-u-ca-islamic", options2).split(" ")[0];
let mm = datenow.toLocaleDateString("en-us", options2);
let H = document.createTextNode(hh);
let M = document.createTextNode(mm);
let day = datenow.toString().split(" ")[0];

window.onload = () => {
  higiri.appendChild(H);
  monthH.innerHTML = datenow.toLocaleDateString("ar-sa", options1);
  miladi.appendChild(M);
  monthM.innerHTML = datenow.toLocaleDateString("ar-us", options1);

  switch (day) {
    case "Mon":
      dayH.innerHTML = "الاثنين";
      break;
    case "Tue":
      dayH.innerHTML = "الثلاثاء";
      break;
    case "Wed":
      dayH.innerHTML = "الأربعاء";
      break;
    case "Thu":
      dayH.innerHTML = "الخميس";
      break;
    case "Fri":
      dayH.innerHTML = "الجمعة";
      break;
    case "Sat":
      dayH.innerHTML = "السبت";
      break;
    case "Sun":
      dayH.innerHTML = "الأحد";
      break;
  }
};
