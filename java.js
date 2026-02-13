function getInfo() {
  let firstname = prompt("What is your first name?");
  let surname = prompt("What is your surname?");
  let email = prompt("What is your email address?");
  if (firstname.trim() !== "" && email.trim() !== "" && surname.trim() !== "") {
    alert("We will be in touch soon ");
  } else {
    alert("Please provide your infor");
  }
}
let buttonElement = document.querySelector("button");
buttonElement.addEventListener("click", getInfo);
