let newImg, displayImg;

function loadImage(event) {
  displayImg = document.getElementById("displayImg");
  displayImg.src = URL.createObjectURL(event.target.files[0]);

  newImg = document.createElement("img");
  newImg.src = URL.createObjectURL(event.target.files[0]);

  displayImg.onload = function () {
    URL.revokeObjectURL(displayImg.src);
  };
}

function downloadPdf() {
  let doc = new jsPDF();
  doc.addImage(newImg, 10, 10);
  const date = new Date();
  doc.save("image_to_pdf" + date.getTime() + ".pdf");
}
