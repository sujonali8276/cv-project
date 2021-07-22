var resultField = $(".calculation-textarea");

function insertNumber(value) {
    var existingNumber = resultField.val();
    resultField.val(existingNumber + value);

}

function clearButton() {
    resultField.val("");
}

function calculate() {

    var result = eval(resultField.val());
    resultField.val(result);
}


function deleteNumber() {
    var x = resultField.val();
    resultField.val(x.slice(0, -1));
}