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

    // decide if the salary is enough (undefined at first)
  var salaryMessage;

  if (yearlySalary < 20000) {
    salaryMessage = ". The salary is too little.";
  }
  else if (yearlySalary >= 20000 && yearlySalary < 25000) {
    salaryMessage = ". The salary is almost enough. Let's negotiate.";
  }
  else {
    salaryMessage = ". This is a great salary for me.";
  }

  // final message (salary + opinion text)
  document.getElementById("salary-output").innerHTML =
    "The salary is $" + yearlySalary.toFixed(2) + salaryMessage;
}
