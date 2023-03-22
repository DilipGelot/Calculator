let result = document.getElementById("result");

function addToResult(val) {
  result.value += val;
}

function clearResult() {
  result.value = "";
}

function deleteLast() {
  result.value = result.value.slice(0, -1);
}

function calculateResult() {
  try {
    result.value = eval(result.value);
  } catch (e) {
    alert("Invalid Calculation!");
  }
}
