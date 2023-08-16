document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmoundString = depositField.value;
    const newDepositAmound = parseFloat(newDepositAmoundString)

    depositField.value = '';

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotal.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const newDepositTotal = previousDepositTotal + newDepositAmound;
    depositTotal.innerText = newDepositTotal;



    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalAmound = parseFloat(previousBalanceTotalString);

    const newBalanceTotal = previousBalanceTotalAmound + newDepositAmound;
    balanceTotalElement.innerText = newBalanceTotal; 

})