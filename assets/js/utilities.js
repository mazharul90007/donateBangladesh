
//get value from input field
function getInputValueById(id){
    const inputFieldId = document.getElementById(id);
    const inputFieldText = inputFieldId.value;
    const inputNumber = parseFloat(inputFieldText);
    return inputNumber;
}
// get value from element
function getElementValueById(id){
    const elementId = document.getElementById(id);
    const elementText = elementId.innerText;
    const elementValue = parseFloat(elementText);
    return elementValue;
}
//get innerText by Id
function getInnerTextById(id){
    const getInnerTextValue = document.getElementById(id).innerText;
    return getInnerTextValue;
}

//show a section
function showSection(id){
    document.getElementById('donation-section').classList.add("hidden");
    document.getElementById('history-section').classList.add("hidden");
    document.getElementById(id).classList.remove("hidden");

}