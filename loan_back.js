const loanForm = document.getElementById("loan-form");

loanForm.addEventListener("submit", calculateLoan);

function calculateLoan(e) {
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
  } else {
    alert("something went wrong");
  }

  e.preventDefault();
}
