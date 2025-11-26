import { useContext, useMemo } from 'react';
import { Context } from './App';
import type { ContextType } from './types';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { generateResultRange, dataset, options, optionsMobile } from './chartConfiguration';
import { generatePermutationMap, take2Dice, take3Dice } from './chartFunctionality';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

function ProbabilityChart() {
    const {d4, d6, d8, d10, d12, take2, totalDice} = useContext<ContextType>(Context);

    const resultRange = useMemo(() => generateResultRange(take2 ? 2 : 3), [take2]);
    const permMap = useMemo(() => generatePermutationMap(d4, d6, d8, d10, d12), [totalDice]);
    //This could be more readable
	const dataValues = useMemo(() => resultRange.map(r => permMap.filter(p => (take2 ? take2Dice(p) : take3Dice(p)) >= r).length / permMap.length * 100), [totalDice, take2]);

    return (
        <>
            <div className="sm:hidden">
                <Bar options={optionsMobile} data={{ labels: resultRange, datasets: [{ ...dataset, data: dataValues }] }} height={600} />
            </div>
            <div className="max-sm:hidden">
                <Bar options={options} data={{ labels: resultRange, datasets: [{ ...dataset, data: dataValues }] }} />
            </div>
        </>
    )
}

export default ProbabilityChart;
