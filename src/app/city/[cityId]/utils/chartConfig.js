let chartConfig = {
    type: 'line',
    data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
                label: 'Temperature',
                data: [69],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
};

function initializeConfig(forecast) {
    const indices = [12, 36, 60, 84, 108, 132, 156];
    chartConfig.data.datasets[0].data = indices.map((index) => forecast['hourly']['temperature_2m'][index]);

    const today = new Date();
    const daysAfterToday = [];
    for (let i = 0; i < 7; i++) {
        const nextDay = new Date(today);
        nextDay.setDate(today.getDate() + i);
        daysAfterToday.push(nextDay.toLocaleString('en-US', {weekday: 'long'}));
    }
    chartConfig.data.labels = daysAfterToday;
}

export function setAndReturnChartConfig(forecast) {
    if(!forecast) return chartConfig;
    initializeConfig(forecast);
    return chartConfig;
}