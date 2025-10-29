import type {
    TextAlign
} from 'chart.js';
import colors from 'tailwindcss/colors'

const offWhite = colors.white[200];
const gray = colors.neutral[600];

export function generateResultRange(take: number) {
   var arr = [];
   //going from 1 to 36 squishes the chart a bit -- probably looks even worse on mobile.
   //I don't want to remove range values though because they are important
   //I'll think of something
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
            titleAlign: "center" as TextAlign | undefined
        }
    },
    responsive: true,
    scales: {
        x: {
            ticks: {
                autoSkip: false,
                color: offWhite
            }
        },
        y: {
            grid: {
                display: false
            },
            ticks: {
                color: offWhite
            },
            max: 100,
            min: 0
        }
    }
};

export const dataset = {
    label: 'Percent Chance of Meeting Threshold',
    data: [],
    borderWidth: 1,
    borderColor: offWhite,
    backgroundColor: offWhite,
};