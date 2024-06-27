var exchangeForm = document.querySelector(".exchangeForm");
var element;
var valuesAfterConverting = [];
exchangeForm.onsubmit = function(e){
    e.preventDefault();
    element = e.target.elements;
    var values = {
        amount: element[0].value,
        amountOfterConverting: convertAmount(),
        exchange: element[1].value,
    };
    valuesAfterConverting.push(values);
    printData();
}
function convertAmount(){
    if(element[1].value == "Dollar"){
        return (element[0].value / 3.50);
    }else if(element[1].value == "Dinar"){
        return (element[0].value / 5);
    }else{
        return (element[0].value);
    }
}
function printData(){
    var data = "";
    for(var index = 0; index < valuesAfterConverting.length; index++){
        data += `
            <tr>
                <td>${valuesAfterConverting[index].amount}</td>
                <td>${valuesAfterConverting[index].amountOfterConverting}</td>
                <td>${valuesAfterConverting[index].exchange}</td>
            </tr>
        `;
    }
    document.querySelector(".exchangeAmount").innerHTML = data;
}
