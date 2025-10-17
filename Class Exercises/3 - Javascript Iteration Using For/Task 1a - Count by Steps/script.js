// TODO: Write the function to generate the sequence
function generateSequence() {
    // Get input values
    const startn = parseInt(document.getElementById('start').value);
    const endn = parseInt(document.getElementById('end').value);
    const stepn = parseInt(document.getElementById('step').value);

    // Get output element
    const output = document.getElementById('sequenceOutput');

    // TODO: Validate inputs
    if (isNaN(startn) || isNaN(endn) || isNaN(stepn)) {
        output.innerHTML = 'Invalid Number';
        return;
    }
    if (stepn <= 0) {
        output.innerHTML = 'Step must be positive.';
        return;
    }
    if (endn <= startn) {
        output.innerHTML = 'End must be greater than start.';
        return;
    }

    // TODO: Create array to store sequence
    let sequence = [];

    // TODO: Use for loop with step to generate sequence
    // Remember to use the step in the for loop increment
    for (let i = startn; i <= endn; i += stepn) {
        sequence.push(i);
    }

    // TODO: Display the sequence
    // Join the numbers with arrows between them
    output.innerHTML = sequence.join(' → ');
}

// Initialize the page
window.onload = function() {
    generateSequence();
};


