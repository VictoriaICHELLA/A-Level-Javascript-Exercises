// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // Get the button element
    const checkButton = document.getElementById('checkButton');
    
    // Add click event listener to the button
    checkButton.addEventListener('click', calculateLeague);
});

// Function to calculate which league the player belongs to
function calculateLeague() {
    // TODO: Get the handicap value from the input field
    let hv = document.getElementById('handicap').value
    //Make your variable global
    let say = '' 
    // TODO: Check if the handicap is less than 13
    if (hv < 13) {
        say = "You are in the category of a league 1 player";
    } else{
        say = "You are a league 2 player";
    }

 // TODO: Display the appropriate message in the result paragraph
    document.getElementById('result').textContent = say;
}
