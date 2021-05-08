const form = document.getElementById("form");
const small = document.getElementById("error-msg");

form.addEventListener("submit", (e) => {
  const input = document.getElementById("input");
  const inputValue = input.value;

  if (!validateEmail(inputValue)) {
    input.classList.add("error");
    small.style.display = "block";
  } else {
    input.classList.remove("error");
    small.style.display = "none";
  }

  e.preventDefault();
});

// document.getElementsById("btn").addEventListener("click", () => {
//   alert("hi");
// });

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
