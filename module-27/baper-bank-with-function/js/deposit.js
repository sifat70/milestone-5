
document.getElementById('deposit-btn').addEventListener('click', function(){
    const newDepositAmound = getInputFieldValueById('deposit-field');

    const previousDepositTotal = getTextElementValueById('deposit-total');

    const newDepositTotal = previousDepositTotal + newDepositAmound;

    setTextElementValueById('deposit-total', newDepositTotal);


    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmound;
    setTextElementValueById('balance-total', newBalanceTotal);
})