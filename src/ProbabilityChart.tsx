import { useContext } from 'react';
import { Context } from './App';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { generateResultRange, dataset, options } from './chartConfiguration';
import { generatePermutationMap, take2Dice, take3Dice } from './chartFunctionality';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function ProbabilityChart() {
    const {d4, d6, d8, d10, d12, take2} = useContext<any>(Context);;

    const resultRange = generateResultRange(take2 ? 2 : 3);

    //memoize this
    //and make it more readable
    const permMap = generatePermutationMap(d4, d6, d8, d10, d12);
	const dataValues = generateResultRange(take2 ? 2 : 3).map(r => permMap.filter(p => (take2 ? take2Dice(p) : take3Dice(p)) >= r).length / permMap.length * 100);

    return (
        <>
            <div>Probability Chart</div>
            <Bar options={options} data={{ labels: resultRange, datasets: [{ ...dataset, data: dataValues }] }} />
        </>
    )
}

export default ProbabilityChart;
