const loanForm = document.getElementById("loan-form");

loanForm.addEventListener("submit", function (e) {
  document.querySelector("#loading").style.display = "block";
  document.querySelector("#result").style.display = "none";
  setTimeout(calculateLoan, 1000);
  e.preventDefault();
});

function calculateLoan() {
  const amount = document.getElementById("amount");
  const interest = document.querySelector("#interest");
  const years = document.getElementById("years");

  const monthlyPay = document.getElementById("monthly_pay");
  const totalPay = document.getElementById("total_pay");
  const totalInterest = document.getElementById("total_interest");

  const principle = parseFloat(amount.value);
  const interestInDecimal = parseFloat(interest.value) / 100 / 12;
  const calculatedMonth = parseFloat(years.value) * 12;

  const x = Math.pow(1 + interestInDecimal, calculatedMonth);
  const monthly = (principle * x * interestInDecimal) / (x - 1);
  if (isFinite(monthly)) {
    monthlyPay.value = monthly.toFixed(2);
    totalPay.value = (monthly * calculatedMonth).toFixed(2);
    totalInterest.value = (monthly * calculatedMonth - principle).toFixed(2);
    document.querySelector("#loading").style.display = "none";
    document.querySelector("#result").style.display = "block";
  } else {
    showError("Please Check Your Numbers ");
  }
}
function showError(error) {
  document.querySelector("#loading").style.display = "none";
  document.querySelector("#result").style.display = "none";
  const errorDiv = document.createElement("div");
  errorDiv.className = "alert alert-danger";
  errorDiv.appendChild(document.createTextNode(error));
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");
  card.insertBefore(errorDiv, heading);

  setTimeout(removeError, 3000);
}
function removeError() {
  document.querySelector(".alert").remove();
}
