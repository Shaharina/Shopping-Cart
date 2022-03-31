function updateCaseNumber(isIncreasing) {
    const caseInput = document.getElementById('case-number');
    let caseNumber = caseInput.value;
    if (isIncreasing == true) {
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }
    //update casetotal
    const casetotal = document.getElementById('case-total');
    casetotal.innerText = caseNumber * 59;
}

document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseNumber(true);

});
document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseNumber(false);

})