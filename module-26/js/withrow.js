/* 
1. add event handler with the withdraw button
2. get the withrow amound from the withraw input field 
2.5. also make sure to convert the input into a number by using parseFloat 

3. get previous withdraw total 

4. calculate total withdraw amount 
4.5. set total withdraw amount

5. get the previous balance total
6. calculate new balance total
6.5. set the new balance total

7. clear the input field




*/





// step -1
document.getElementById('btn-widthrow').addEventListener('click', function () {
    // step-2
    const withrowField = document.getElementById('widthrow-field');
    const newWithrawAmountString = withrowField.value;
    const newWithrawAmount = parseFloat(newWithrawAmountString);

    
    // step-7: 

    withrowField.value = '';


    if (isNaN(newWithrawAmount)) {
        alert('Please provide a valid number');
        return;
    }
    // step:3

    const withrawTotalElement = document.getElementById('withraw-total');
    const previousWithrawTotalString = withrawTotalElement.innerText;
    const previousWithrawTotal = parseFloat(previousWithrawTotalString);



    // step-5

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);




    if (newWithrawAmount > previousBalanceTotal) {
        alert('tor baper ato taka nai sona');
        return;
    }


    // step-4

    const currentWithrawTotal = previousWithrawTotal + newWithrawAmount;
    withrawTotalElement.innerText = currentWithrawTotal;


    // step-6

    const newBlanceTotal = previousBalanceTotal - newWithrawAmount;
    balanceTotalElement.innerText = newBlanceTotal;


})