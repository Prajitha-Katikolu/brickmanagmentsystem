document.getElementById('allocate').addEventListener('click', function () {
    // Input values
    const totalWorkers = parseInt(document.getElementById('workers').value);
    const moldingPercent = parseInt(document.getElementById('molding').value);
    const dryingPercent = parseInt(document.getElementById('drying').value);
    const firingPercent = parseInt(document.getElementById('firing').value);
    const transportationPercent = parseInt(document.getElementById('transportation').value);

    // Validate percentages
    const totalPercent = moldingPercent + dryingPercent + firingPercent + transportationPercent;
    if (totalPercent !== 100) {
        alert('The total proportion must equal 100%. Please adjust the values.');
        return;
    }

    // Calculate allocation
    const moldingWorkers = Math.floor((moldingPercent / 100) * totalWorkers);
    const dryingWorkers = Math.floor((dryingPercent / 100) * totalWorkers);
    const firingWorkers = Math.floor((firingPercent / 100) * totalWorkers);
    const transportationWorkers = Math.floor((transportationPercent / 100) * totalWorkers);

    // Worker allocation data
    const data = [moldingWorkers, dryingWorkers, firingWorkers, transportationWorkers];
    const labels = ['Molding', 'Drying', 'Firing', 'Transportation'];

    // Render the chart
    const ctx = document.getElementById('workerChart').getContext('2d');
    if (window.workerChartInstance) {
        window.workerChartInstance.destroy(); // Destroy the old chart before creating a new one
    }
    window.workerChartInstance = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: 'Worker Allocation',
                data: data,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top'
                }
            }
        }
    });
});
