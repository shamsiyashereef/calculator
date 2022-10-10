//displayvnumber in text box

function displayNumber(num){
    result.value+=num;
}
//clear text box
function clearBox(){
    result.value="";
}
//evaluate expression
function evaluateExpression(){
    expression=result.value;
    // output=eval(expression);
    result.value=eval(expression);
}
//remove last item 
function removeLastitem(){
    currentExpression=result.value;
    result.value=currentExpression.slice(0,-1)
}