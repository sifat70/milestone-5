document.getElementById('withdraw-btn').addEventListener('click', function(){
    const newWithdrawAmound = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithrawTotal = previousWithdrawTotal + newWithdrawAmound;
    setTextElementValueById('withdraw-total', newWithrawTotal);
    const prePreviousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = prePreviousBalanceTotal - newWithdrawAmound;
    setTextElementValueById('balance-total', newBalanceTotal);
})