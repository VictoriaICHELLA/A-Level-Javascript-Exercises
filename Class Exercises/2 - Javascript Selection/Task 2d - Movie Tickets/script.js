// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateTotal);
});

// Function to calculate the total ticket cost
function calculateTotal() {
    // TODO: Get values from all input fields
    let at = parseFloat(document.getElementById('adultTickets').value)
    let ct = parseFloat(document.getElementById('childTickets').value)
    let st = parseFloat(document.getElementById('seniorTickets').value)

    // TODO: Calculate base costs
    // Adult: £12.00
    if (at > 0){
        p1 = at * 12;
        // Child: £8.00
    } else if (ct > 0) {
        p1 = ct * 8;
        // Senior: £7.50
    } else if (ct > 0) {
        p1 = st * 7.5;
    }
    // Child: £8.00
    // Senior: £7.50
    
    // TODO: Apply day of week adjustments
    // Friday-Sunday: +£2.50 per ticket
    
    // TODO: Apply time adjustments
    // Before 5 PM: -£1.50 per ticket
    
    // TODO: Calculate subtotal
    
    // TODO: Check for and apply special discounts
    // Family ticket (2 adults + 2 children): 10% off
    // Group booking (6 or more tickets): 15% off
    
    // TODO: Display price breakdown, subtotal, any discounts, and final total
}
