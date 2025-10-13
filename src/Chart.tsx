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

interface Props {
    d4: number,
    d6: number,
    d8: number,
    d10: number,
    d12: number,
    take2: boolean,
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function ProbabilityChart(props: Props) {
    const {d4, d6, d8, d10, d12, take2} = props;

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