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

// Function for Job 1 duties
function showJob1Duties() {
  var countString = document.getElementById("job1-count").value;
  var count = parseInt(countString);

  if (isNaN(count) || count <= 0) {
    document.getElementById("job1-output").innerHTML =
      "Please enter a positive number.";
    return;
  }

  var duties1 = [
    "Greeted customers and took orders.",
    "Delivered food and drinks quickly.",
    "Handled payments and balanced the register.",
    "Kept tables clean and organized.",
    "Communicated with kitchen staff about orders."
  ];

  if (count > duties1.length) {
    count = duties1.length;
  }

  var index = count - 1;
  var outputText = "";

  while (index >= 0) {
    outputText = outputText + "- " + duties1[index] + "<br>";
    index = index - 1;
  }

  document.getElementById("job1-output").innerHTML = outputText;
}

// Function for Job 2 duties
function showJob2Duties() {
  var countString = document.getElementById("job2-count").value;
  var count = parseInt(countString);

  if (isNaN(count) || count <= 0) {
    document.getElementById("job2-output").innerHTML =
      "Please enter a positive number.";
    return;
  }

  var duties2 = [
    "Helped users with computer and login problems.",
    "Installed software and system updates.",
    "Troubleshot network and WiFi issues.",
    "Documented support tickets and solutions.",
    "Set up new devices and accounts."
  ];

  if (count > duties2.length) {
    count = duties2.length;
  }

  var index = count - 1;
  var outputText = "";

  while (index >= 0) {
    outputText = outputText + "- " + duties2[index] + "<br>";
    index = index - 1;
  }

  document.getElementById("job2-output").innerHTML = outputText;
}
