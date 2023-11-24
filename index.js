// Function to convert currency
function convertCurrency() {
    // Get input elements and selected currency type
    const usdInput = document.getElementById('usdInput');
    const cadInput = document.getElementById('cadInput');
    const usdCurrency = document.getElementById('usdCurrency').value;

    let result;

    // Convert USD to CAD or CAD to USD based on the selected currency type
    if (usdCurrency === 'usd' && usdInput.value) {
        // Assuming 1 USD = 1.25 CAD for demonstration
        result = usdInput.value * 1.25;
        cadInput.value = result;
    } else if (usdCurrency === 'cad' && usdInput.value) {
        // Assuming 1 USD = 1.25 CAD for demonstration
        result = usdInput.value / 1.25;
        cadInput.value = result;
    }
}

// Function to handle currency change
function change() {
    // Get selected currency type and input elements
    const usdCurrency = document.getElementById('usdCurrency').value;
    const cadInput = document.getElementById('cadInput');
    const text1 = document.getElementById('text1');

    // Update text and input value based on the selected currency type
    if (usdCurrency === 'usd') {
        cadInput.value = 0;
        text1.innerText = 'Convert USD to CAD at the real exchange';
    } else if (usdCurrency === 'cad') {
        cadInput.value = 0;
        text1.innerText = 'Convert CAD to USD at the real exchange';
    }
}
