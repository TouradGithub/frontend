// إجراء تغييرات بحيث إذا تغير اي قيمة من قيم ال input يتم تغير النتيجة
//عند تحميل الصفحة تكون هناك قيمة التاريخ الحالي
//
//
//
//

window.onload = () => {
  let dateNow = new Date();
  document.querySelector("#dayM").value = dateNow.getDay();
  document.querySelector("#manthM").value = dateNow.getMonth() + 1;
  document.querySelector("#yearM").value = dateNow.getFullYear();

  let Hdate = dateNow.toLocaleString("ar-u-ca-islamic", options);
  document.querySelector("#dayH").value = parseInt(Hdate.split("/")[0]);
  document.querySelector("#manthH").value = parseInt(Hdate.split("/")[1]);
  document.querySelector("#yearH").value = parseInt(
    Hdate.split("/")[2].slice(0, 5)
  );
};

var options = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
};

let date_miladi = document.querySelector(".date_miladi");

date_miladi.addEventListener("change", () => {
  let dayM = document.querySelector("#dayM").value || 0;
  let manthM = document.querySelector("#manthM").value || 0;
  let yearM = document.querySelector("#yearM").value || 0;

  // here we will get the higri input to update the value
  let dayH = document.querySelector("#dayH");
  let manthH = document.querySelector("#manthH");
  let yearH = document.querySelector("#yearH");

  let result = document.querySelector("#result");
  let dateM = new Date(yearM, manthM - 1, dayM).toLocaleString(
    "ar-u-ca-islamic",
    options
  );
  result.innerHTML = dateM;

  dayH.value = parseInt(dateM.split("/")[0]);
  manthH.value = parseInt(dateM.split("/")[1]);
  yearH.value = parseInt(dateM.split("/")[2].slice(0, 5));
});

let date_hijri = document.querySelector(".date_hijri");

date_hijri.addEventListener("change", () => {
  let dayH = document.querySelector("#dayH").value || 0;
  let manthH = document.querySelector("#manthH").value || 0;
  let yearH = document.querySelector("#yearH").value || 0;

  let result = document.querySelector("#result");
  let dateH = new Date(yearH, manthH - 1, dayH).toLocaleString(
    "en-us",
    options
  );
  result.innerHTML = dateH;

  document.querySelector("#dayM").value = parseInt(dateH.split("/")[0]);
  document.querySelector("#manthM").value = parseInt(dateH.split("/")[1]);
  document.querySelector("#yearM").value = parseInt(dateH.split("/")[2]);
});

let test = new Date(2001, 2, 16);

console.log(test.toISOString().split("T")[0]);
