// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculatePay);
});

// Function to calculate the worker's pay
function calculatePay() {
    // TODO: Get the age and hours worked from the input fields
    let age = parseFloat(document.getElementById('age').value)
    let hour = parseFloat(document.getElementById('hours').value)
    let hrate = 0

    // TODO: Set the hourly rate based on age (£4.85 for under 18, £6.35 for 18 and over)
    // TODO: Calculate total pay
    // TODO: Display the hours worked and total amount earned
    
    if (age < 18) {
        hrate = 4.85
        pay = hour * hrate
        document.getElementById('result').textContent = pay;
        return;
    } else if ( age >= 18 && age < 70){
        hrate = 6.35
        pay = hour * hrate
        document.getElementById('result').textContent = pay;
        return;
    } else {
        let message = "invalid answer";
        document.getElementById('result').textContent = message;
        return;
    }

   
    

    
}

