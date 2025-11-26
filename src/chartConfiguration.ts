import type {
    TextAlign
} from 'chart.js';
import colors from 'tailwindcss/colors'

const offWhite = colors.neutral[300];

export function generateResultRange(take: number) {
   var arr = [];
   for (var i = 1; i <= (take == 2 ? 24 : 36); i++) { arr.push(i); }
   return arr;
}

export const options = {
    indexAxis: 'x' as const,
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
            grid: {
                display: false
            },
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
                color: offWhite,
                callback: function(value: string): string {
                    return value + '%';
                }
            },
            max: 100,
            min: 0,
        }
    }
};

export const optionsMobile = {
    maintainaspectRatio: false,
    indexAxis: 'y' as const,
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
            position: 'bottom' as const,
            grid: {
                display: true,
                color: offWhite,
            },
            ticks: {
                autoSkip: false,
                color: offWhite,
                callback: function(value: string): string {
                    return value + '%';
                }
            },
            max: 100,
            min: 0
        },
        x2: {
            position: 'top' as const,
            grid: {
                display: true,
                color: offWhite,
            },
            ticks: {
                color: offWhite,
                callback: function(value: string): string {
                    return value + '%';
                }
            },
            max: 100,
            min: 0
        },
        y: {
            grid: {
                display: false
            },
            ticks: {
                color: offWhite,
            }
        },
    }
};

export const dataset = {
    label: 'Percent Chance of Meeting Threshold',
    data: [],
    borderWidth: 1,
    borderColor: offWhite,
    backgroundColor: offWhite,
};
