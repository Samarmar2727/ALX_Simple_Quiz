function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  if (number2 === 0) {
    return "Cannot divide by zero!";
  }
  return number1 / number2;
}

function getInputValues() {
  const number1 = parseFloat(document.getElementById('number1').value) || 0;
  const number2 = parseFloat(document.getElementById('number2').value) || 0;
  return [number1, number2];
}

function showResult(result) {
  document.getElementById('calculation-result').textContent = result;
}


//(Event Listeners)
document.getElementById('add').addEventListener('click', function () {
  const [num1, num2] = getInputValues();
  showResult(add(num1, num2));
});

document.getElementById('subtract').addEventListener('click', function () {
  const [num1, num2] = getInputValues();
  showResult(subtract(num1, num2));
});

document.getElementById('multiply').addEventListener('click', function () {
  const [num1, num2] = getInputValues();
  showResult(multiply(num1, num2));
});

document.getElementById('divide').addEventListener('click', function () {
  const [num1, num2] = getInputValues();
  showResult(divide(num1, num2));
});