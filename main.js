
// code below is not working at moment

document.getElementById('payWithCashApp').addEventListener('click', function() {
    const amount = document.getElementById('amount').value;
    const recipient = "$SadikiBenda"; // Example: $YourBusinessTag

    if (amount) {
        window.location.href = `https://cash.app/$SadikiBneda/${amount}`;
    } else {
        alert("Please enter an amount before proceeding.");
    }
});
