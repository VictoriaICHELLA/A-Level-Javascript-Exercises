// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the button element
    const calculateButton = document.getElementById("calculateButton");
    
    // Add click event listener to the button
    calculateButton.addEventListener("click", calculateGrade);
});

// Function to calculate the A-Level grade
function calculateGrade() {
    // TODO: Get the marks for all four components
    let test1 = parseFloat(document.getElementById("comp1").value)
    let test2 = parseFloat(document.getElementById("comp2").value)
    let test3 = parseFloat(document.getElementById("comp3").value)
    let test4 = parseFloat(document.getElementById("comp4").value)

    // TODO: Calculate the total marks
    let total = test1 + test2 + test3+ test4

    // TODO: Calculate the percentage (total possible marks is 400)
    let percent = (total/400) * 100

    // TODO: Determine the grade based on the percentage
    let Grade = ""
    // A: 80% or greater
    if (percent >= 80){
        Grade = "A";
        // B: 70% or greater
    }else if (percent >= 70 && percent < 80){
        Grade = "B";
        // C: 60% or greater
    }else if (percent >= 60 && percent < 70){
        Grade = "C";
        // D: 50% or greater
    }else if (percent >= 50 && percent < 60){
        Grade = "D";
        // E: 40% or greater
    }else if (percent >= 40 && percent < 50){
        Grade = "E";
        // U: Less than 40%
    }else if (percent < 40){
        Grade = "U";
    }
   
    // TODO: Display the percentage and grade
        document.getElementById("result").innerText = Grade
        document.getElementById("percentage").innerText = percent + "%";

}


