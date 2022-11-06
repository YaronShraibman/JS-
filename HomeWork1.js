function divCalculator(num1, num2, div) {
  num1 = Number(prompt("Enter number 1"));
  num2 = Number(prompt("Enter number 2"));
  div = num1 % num2;
  if (div != 0) {
    alert(
      "There is sheerit of " +
        div +
        ". Your answer is: " +
        (num1 / num2).toFixed(2)
    );
  } else {
    alert("There is no sheerit. Your answer is: " + num1 / num2);
  }
}
