export function generateResultRange(take: number) {
   var arr = [];
   for (var i = 1; i <= (take == 2 ? 24 : 36); i++) { arr.push(i); }
   return arr;
}

export const options = {
    plugins: {
        legend: {
            display: false
        },
        tooltip: {
            displayColors: false,
            titleAlign: 'center'
        }
    },
    responsive: true,
    scales: {
        x: {
            ticks: {
                autoSkip: false
            }
        },
        y: {
            beginAtZero: true,
            max: 100
        }
    }
};

export const dataset = {
    label: 'Percent Chance of Meeting Threshold',
    data: [],
    borderWidth: 1,
    borderColor: '#B2BEB5',
    backgroundColor: '#B2BEB5',
};