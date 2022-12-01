const btn = document.querySelector(".btn");
const cardSection = document.querySelector("#cardSection");

const chooseFile = document.getElementById("chooseFile");
const imgPreview = document.getElementById("imgPreview");
const cardimage = document.getElementById("cardimage");

chooseFile.addEventListener("change", showPreview);

// Img showPreview function

function showPreview(event) {
  if (event.target.files.length > 0) {
    var src = URL.createObjectURL(event.target.files[0]);

    imgPreview.src = src;
    imgPreview.style.display = "block";

    cardimage.src = imgPreview.src;
    cardimage.style.display = "block";
  }
}

//ID card Generate Function

btn.addEventListener("click", generate);
function generate() {
  console.log("clicked");
  cardSection.style.display = "block";

  const nameInputValue = document.querySelector("#name").value;
  document.querySelector(".IdName").innerHTML = nameInputValue;
  console.log(nameInputValue);

  const clgNameInputValue = document.querySelector("#clgName").value;
  document.querySelector(".IdClgName").innerHTML = clgNameInputValue;
  console.log(clgNameInputValue);

  const locationNameInputValue = document.querySelector("#location").value;
  document.querySelector(".Idlocation").innerHTML = locationNameInputValue;
  console.log(locationNameInputValue);
}
