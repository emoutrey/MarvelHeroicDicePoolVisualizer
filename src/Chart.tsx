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
import { options, dataTake2, dataTake3 } from './chartConfiguration';

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
    return (
        <>
            <div>Probability Chart</div>
            <Bar options={options} data={take2 ? dataTake2 : dataTake3} />
        </>
    )
}

export default ProbabilityChart;