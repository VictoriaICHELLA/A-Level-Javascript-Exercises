// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculatePremium);
});

// Function to calculate the insurance premium
function calculatePremium() {
    // TODO: Get values from input fields
    let ager  = parseFloat(document.getElementById('age').value);
    let years = parseFloat(document.getElementById('noClaims').value);
    let PC = parseFloat(document.getElementById('previousClaims').value);
    
    // TODO: Calculate base premium (£500)
    let basepre = 500
    let add = 0
    let disc = 0
    let cc = 1.2
    let ans = 0
    // TODO: Apply age adjustment
    // Under 25: +50%
    if  (ager < 25){
        add = basepre * 0.5
        basepre = add + basepre
    // Over 40: -15%
    }else if (ager >= 40){
        add = basepre * 1.15
        add = add - basepre
        basepre = basepre - add
    // 25-40: No change
    } else{
        basepre = 500
    }

    // TODO: Apply no claims bonus
    // 0 years: No discount
    if (years === 0) {
        disc = 0
    // 1-2 years: 10% discount
    }else if (years == 1 || years == 2) {
        disc = 0.10
    // 3-5 years: 25% discount
    }else if (years == 3 || years == 4 || years == 5) {
        disc = 0.25
    // Over 5 years: 35% discount
    }else if (years > 5) {
        disc = 0.35
    }


    // TODO: Add previous claims adjustment
    // Each claim adds 20%
    let claimsAdj = basepre * 0.2 * PC;
    let premiumBeforeDiscount = basepre + claimsAdj;
    let finalPremium = premiumBeforeDiscount * (1 - disc);

    // TODO: Display the final premium and the breakdown of calculations
    document.getElementById('breakdownSection').innerText = "£" + finalPremium.toFixed(2)
}
