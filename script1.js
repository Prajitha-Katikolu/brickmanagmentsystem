function calculate() {
    // Get values from input fields
    const numBricks = parseInt(document.getElementById("numBricks").value);
    const totalCost = parseFloat(document.getElementById("totalCost").value);
    const sellingPrice = parseFloat(document.getElementById("sellingPrice").value);
    const deadline = parseInt(document.getElementById("deadline").value);
    const laborOutput = parseInt(document.getElementById("laborOutput").value);

    // Validate input
    if (isNaN(numBricks) || isNaN(totalCost) || isNaN(sellingPrice) || isNaN(deadline) || isNaN(laborOutput)) {
        alert("Please fill out all fields with valid values.");
        return;
    }

    // Calculate cost per brick
    const costPerBrick = totalCost / numBricks;

    // Calculate total revenue and profit
    const totalRevenue = numBricks * sellingPrice;
    const profit = totalRevenue - totalCost;

    // Calculate daily production and number of laborers required
    const dailyProduction = Math.ceil(numBricks / deadline);
    const numLaborers = Math.ceil(dailyProduction / laborOutput);

    // Display results
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <p><strong>Estimated Cost per Brick: </strong>${costPerBrick.toFixed(2)}</p>
        <p><strong>Total Cost to Make Bricks: </strong>${totalCost.toFixed(2)}</p>
        <p><strong>Total Revenue from Selling Bricks: </strong>${totalRevenue.toFixed(2)}</p>
        <p><strong>Profit: </strong>${profit.toFixed(2)}</p>
        <p><strong>Bricks to Produce Per Day: </strong>${dailyProduction} bricks/day</p>
        <p><strong>Number of Laborers Required: </strong>${numLaborers}</p>
    `;
}
