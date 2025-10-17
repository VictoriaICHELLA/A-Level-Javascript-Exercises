// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const generateButton = document.getElementById('generateButton');
    const sequenceType = document.getElementById('sequenceType');
    const stepInput = document.getElementById('stepInput');
    
    // Show/hide step input based on sequence type
    sequenceType.addEventListener('change', function() {
        stepInput.classList.toggle('hidden', this.value !== 'steps');
    });
    
    // Add click event listener to the button
    generateButton.addEventListener('click', generateSequence);
});

// Function to generate number sequence
function generateSequence() {

    // TODO: Get the maximum number and sequence type from inputs
    let MaxNum = parseFloat(document.getElementById('maxNumber').value);
    let seqtype = document.getElementById('sequenceType').value;
    let steps = seqtype.value;
    let ans = 0
    let counter = 0 

    // TODO: Validate input values
    // Check if values are valid numbers and in correct range
   
    // TODO: Initialize array to store sequence
    const Sequence = [];
    let sum = 0
    let test = 'trying to sync with the main branch'

    // TODO: Generate sequence based on type selected:
    // countUp: Use a for loop counting from 1 to N
    if (seqtype === 'countUp'){
        for (i=1; i<=MaxNum; i++){
            Sequence.push(i);
        }
    }


    // countDown: Use a for loop counting from N down to 1
    if (seqtype === 'countDown'){
        for (i=MaxNum; i>=1; i--){
            Sequence.push(i);
        }
    }
    

        //ans =  MaxNum / steps
       //counter = Sequence.length

    // steps: Use a for loop with custom step value
    if (seqtype === 'steps'){
         if(isNaN(MaxNum) || isNaN(steps)){
            document.getElementById('count').innerHTML = "Invalid"
            return;
        }
       for (let i=0; i<=MaxNum; i += steps){
        Sequence.push(i)
       }
    }

        //for (i=MaxNum; i>=ans; steps--){;
        
            //for(counter = Sequence.length - 1; counter >= 0; counter--){
                //Sequence.push(counter);
            //}
        //}
  


    // even: Use a for loop with if statement to check even numbers
    //if (seqtype === 'even'){
        //for (){
            // code goes here
        //}
    //}


    // odd: Use a for loop with if statement to check odd numbers
    //if (seqtype === 'odd'){
        //for (){
            // code goes here
        //}
    //}


    // TODO: Calculate sum of sequence
    let sl = Sequence.length;
    sum = 0; //Reset sum before calculation
    for (let i=0; i<Sequence.length; i++){
        sum += Sequence[i];
    }

    // TODO: Display sequence, count of numbers, and sum
    document.getElementById('sequenceDisplay').innerHTML = Sequence.join(', ');
    document.getElementById('count').innerHTML = sl.toString();
    document.getElementById('sum').innerHTML = sum.toString();

}
