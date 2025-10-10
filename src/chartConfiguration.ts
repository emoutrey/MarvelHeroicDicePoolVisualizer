function generateResultRange(take: number) {
   var arr = [];
   for (var i = 1; i <= (take == 2 ? 24 : 36); i++) { arr.push(i); }
   return arr;
}

export const options = {
    responsive: true,
    scales: {
        x: {
            ticks: {
                autoSkip: false
            }
        },
        y: {
            beginAtZero: true
        }
    }
};

export const datasets = [{
        label: 'Percent Chance of Meeting Threshold',
        data: [],
        borderWidth: 1,
        borderColor: '#B2BEB5',
        backgroundColor: '#B2BEB5',
    }]

export const dataTake2 = {
    labels: generateResultRange(2),
    datasets: datasets
}

export const dataTake3 = {
    labels: generateResultRange(3),
    datasets: datasets
}