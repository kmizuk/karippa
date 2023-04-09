document.getElementById('loan-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const lender = document.getElementById('lender').value;
    const borrower = document.getElementById('borrower').value;
    const amount = document.getElementById('amount').value;
    const dueDate = document.getElementById('due-date').value;
    const repaymentAmount = document.getElementById('repayment-amount').value;
    const penalty = document.getElementById('penalty').value;

    const queryParams = new URLSearchParams({
        lender: lender,
        borrower: borrower,
        amount: amount,
        dueDate: dueDate,
        repaymentAmount: repaymentAmount,
        penalty: penalty
    });

    const contractUrl = `${window.location.origin}${window.location.pathname}?${queryParams.toString()}`;

    document.getElementById('contract-url').innerText = `Contract URL: ${contractUrl}`;
});

// Get contract info from URL if exists
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('lender') && urlParams.has('borrower') && urlParams.has('amount') && urlParams.has('dueDate') && urlParams.has('repaymentAmount') && urlParams.has('penalty')) {
    document.getElementById('lender').value = urlParams.get('lender');
    document.getElementById('borrower').value = urlParams.get('borrower');
    document.getElementById('amount').value = urlParams.get('amount');
    document.getElementById('due-date').value = urlParams.get('dueDate');
    document.getElementById('repayment-amount').value = urlParams.get('repaymentAmount');
    document.getElementById('penalty').value = urlParams.get('penalty');
}
