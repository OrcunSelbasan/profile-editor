const [
  inputImg,
  inputName,
  inputBirth,
  inputBlood,
  inputEmail,
  inputAddress,
  saveBtn,
  editBtn,
] = [
  document.querySelector("#inputProfilePicture"),
  document.querySelector("#inputFullName"),
  document.querySelector("#inputBirthday"),
  document.querySelector("#inputBloodGroup"),
  document.querySelector("#inputWorkEmail"),
  document.querySelector("#inputCurrentAddress"),
  document.querySelector("#save"),
  document.querySelector("#edit"),
]; // Destructuring assignment

let [nameVal, emailVal, ageVal, bloodVal, addressVal] = [
  document.querySelector("#fullName"),
  document.querySelector("#email"),
  document.querySelector("#age"),
  document.querySelector("#blood-group"),
  document.querySelector("#address"),
];

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

inputImg.addEventListener("change", (e) => {
  document.getElementsByTagName("img")[0].setAttribute("src", e.target.value);
});

//HANDLER HOW TO IMPROVE
function eventHandler(input, output, event){
  return input.addEventListener(event, (e) => {
    output.innerText = e.target.value
  })
}

inputName.addEventListener("keyup", (e) => {
  nameVal.innerText = e.target.value;
});

inputEmail.addEventListener("keyup", (e) => {
  emailVal.innerText = e.target.value;
});

inputBirth.addEventListener("change", (e) => {
  const now = new Date();
  const inputYear = new Date(e.target.value).getFullYear();
  ageVal.innerText = now.getFullYear() - inputYear;
});

inputBlood.addEventListener("change", (e) => {
  bloodVal.innerText = e.target.value.toUpperCase();
});

inputAddress.addEventListener("keyup", (e) => {
  addressVal.innerText = e.target.value;
});

saveBtn.addEventListener("click", (e) => {
    const types = ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"];

  if (
    nameVal.innerText.split("").filter((x) => !isNaN(parseInt(x))).length > 0
  ) {
    e.preventDefault();
    alert("Invalid name! Do not use numbers.");
  } else if (!validateEmail(emailVal.innerText)) {
    e.preventDefault();
    alert("Invalid mail!");
  } else if (
    parseInt(ageVal.innerText) < 16 ||
    parseInt(ageVal.innerText) > 100
  ) {
    e.preventDefault();
    alert("Invalid age!");
  } else if (!types.includes(bloodVal.innerText)) {
      e.preventDefault();
      alert("Invalid blood group");
  }else {
    document.querySelector("#edit").style.display = "block";
    document.querySelector("#profile-form").style.display = "none";
    document.querySelector("#profile-info").classList.add("active");
  }
});

editBtn.addEventListener("click", (e) => {
  document.querySelector("#profile-form").style.display = "block";
  document.querySelector("#profile-info").classList.remove("active");
  document.querySelector("#edit").style.display = "none";
});