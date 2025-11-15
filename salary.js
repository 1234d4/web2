// salary.js - external JavaScript for salary calculator

function calcSalary() {
  // get values from the inputs (strings at first)
  var wageString = document.getElementById("wage").value;
  var hoursString = document.getElementById("hours").value;

  // parse to numbers (floats keep decimals)
  var wageNum = parseFloat(wageString);
  var hoursNum = parseFloat(hoursString);

  // basic validation
  if (isNaN(wageNum) || isNaN(hoursNum)) {
    document.getElementById("salary-output").innerHTML =
      "Please enter valid numbers for wage and hours.";
    return;
  }

  // fifth variable: yearly salary = wage * hours per week * 52
  var yearlySalary = wageNum * hoursNum * 52;

  // show the result
  document.getElementById("salary-output").innerHTML =
    "Estimated yearly salary: $" + yearlySalary.toFixed(2);
}
