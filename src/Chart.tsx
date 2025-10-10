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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
    responsive: true,
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

export const data = {
    labels: [1, 2, 3],
    datasets: [{
        label: 'Percent Chance of Meeting Threshold',
        data: [],
        borderWidth: 1,
        borderColor: '#B2BEB5',
        backgroundColor: '#B2BEB5',
    }]
}

interface Props {
    label: string;
}

function ProbabilityChart(props: Props) {
    const {label} = props;
    return (
        <>
            <div>{label}</div>
            <Bar options={options} data={data} />
        </>
    )
}

export default ProbabilityChart;