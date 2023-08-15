// setp-1 : add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2: get the deposit amound from the deposit input field 
    // for input field use .value to the value inside the input field 
    const depositField = document.getElementById('deposit-field');
    const newDepositAmoundString = depositField.value;
    const newDepositAmound = parseFloat(newDepositAmoundString);


    // step-3 : get the current deposit total
    // for non-input(element other than input , textarea) use this.innerText to get the text 
    const depostTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depostTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step-4: add number to set total deposit 
     const currentDepositTotal = previousDepositTotal + newDepositAmound;
     depostTotalElement.innerText = currentDepositTotal;


    //  step-5: get total balance current 

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    // step-6: calculate current total balance 
    const currentBalanceTotal = previousBalanceTotal + newDepositAmound;

    balanceTotalElement.innerText = currentBalanceTotal;
    // step-7: clear the deposit value 

    depositField.value = '';
    
})