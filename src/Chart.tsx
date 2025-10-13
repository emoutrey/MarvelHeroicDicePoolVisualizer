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

interface Props {
    take2: boolean;
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
    const {take2} = props;

    const resultRange = generateResultRange(take2 ? 2 : 3);

    return (
        <>
            <div>Probability Chart</div>
            <Bar options={options} data={{ labels: resultRange, datasets: dataset }} />
        </>
    )
}

export default ProbabilityChart;