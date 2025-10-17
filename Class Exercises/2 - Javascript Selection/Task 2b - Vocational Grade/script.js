// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the button element
    const calculateButton = document.getElementById('calculateButton');
    
    // Add click event listener to the button
    calculateButton.addEventListener('click', calculateGrade);
});

// Function to calculate the Hang Gliding Certificate grade
function calculateGrade() {
// TODO: Get the theory and practical exam scores
    let theory = parseFloat(document.getElementById('theory').value)
    let practi = parseFloat(document.getElementById('practical').value)

// TODO: Check if both scores are above 50% (Pass requirement)
    let aver = (theory + practi)/ 2
    let message = ""

    if (theory >= 50 && practi >= 50){

// TODO: If passed, calculate average and check if above 70% (Distinction requirement)
       
        if (aver > 70) {
            message = "Distinction"
        } else{
            message = "Pass"
        }
    } else{ 
        message = "Fail"
    }

    // TODO: Display the appropriate grade (Pass, Distinction, or Fail)
    document.getElementById('result').innerText = message
    // Also display the average score
    document.getElementById('average').innerText = aver + "%"
    


}
