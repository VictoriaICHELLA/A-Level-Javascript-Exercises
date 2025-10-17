// TODO: Write the function to generate multiplication tables
function generateTables() {
    // Get input values
    const startNum = document.getElementById('startNum').value;
    const endNum = document.getElementById('endNum').value;
    const numTables = document.getElementById('tables').value;
    
    // Clear previous output
    document.getElementById('tablesContainer').innerHTML = '';
    document.getElementById('stats').innerHTML = '';
    
    //
    let start = parseInt(startNum)
    let end = parseInt(endNum)
    let tablnum = parseInt(numTables)

    // TODO: Validate input values
    // Check if values are valid numbers and in correct range
    if(isNaN(start) || isNaN(end) || isNaN(tablnum)){
        document.getElementById('stats').innerHTML = "Invalid"
        return;
    }
    
    // TODO: Initialize counter for total calculations
    let totalCalculations = 0;
    
    // TODO: Create outer loop to generate multiple tables
    // This loop should run numTables times
    for (let t = 0; t<tablnum; t++){
        let tableNum = start + t;
    } 
        // TODO: Create a new table division for each multiplication table
        let table = tablnum * 1

        // TODO: Create inner loop for multiplication facts
        // This loop should run from startNum to endNum
        for(i=start; i>=end; i++){
            // TODO: Calculate the product
            // ????
            }
            // TODO: Create element for multiplication fact
            
            // TODO: Add even/odd styling
            
            // TODO: Increment total calculations
    
    }  
    // TODO: Display total calculations in stats div
    
}

// Initialize the page with a default table
window.onload = function() {
    generateTables();
};

