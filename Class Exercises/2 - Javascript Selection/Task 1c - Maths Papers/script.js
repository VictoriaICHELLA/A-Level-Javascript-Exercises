// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateResult);
});

// Function to calculate if student passed or failed
function calculateResult() {
    // TODO: Get the marks for all three papers
    let p1 = parseFloat(document.getElementById('paper1').value)
    let p2 = parseFloat(document.getElementById('paper2').value)
    let p3 = parseFloat(document.getElementById('paper3').value)
    let printr = ""

    // TODO: Calculate the total mark
    let total = p1 + p2+ p3

    // TODO: Check if total is greater than 160
    if (total>160){
         printr = "PASS :)";

    }else if (total <= 160){
         printr= "FAIL >:`(";

    } else { 
         printr = "Your score is invaild, re-enter";
    }

    // TODO: Display the total mark and whether the student passed or failed
document.getElementById('result').textContent = printr;

}
