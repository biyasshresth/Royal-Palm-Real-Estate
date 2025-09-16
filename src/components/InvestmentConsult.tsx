
import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
  TooltipItem
} from "chart.js";
import Logo from "../assets/logo.svg";
import Invstcul from "../assets/Invstcul.png"; 

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const InvestmentConsult: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const labels: string[] = [
    "Stocks",
    "Real estate",
    "Mutual funds",
    "Foreign exchange",
    "Gold/precious objects",
    "Government Savings Program",
    "Annuities",
    "Savings account",
    "Cryptocurrency",
    "Money market account",
    "No investment"
  ];

  const percentages: number[] = [53, 23, 44, 32, 12, 20, 15, 50, 45, 21, 20];

  const data: ChartData<"bar", number[], string> = {
    labels,
    datasets: [
      {
        label: "%",
        data: percentages,
        backgroundColor: "#F6C043",
        borderRadius: 4,
        barThickness: 30
      }
    ]
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context: TooltipItem<"bar">) => `${context.parsed.y}%`
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 70,
        ticks: {
          stepSize: 10,
          callback: (value) => `${value}%`
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center px-6 py-10">
      {/* Header */}
      <div className="w-full flex justify-between items-center max-w-6xl">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Investment Split Bar Graph
        </h1>
        <img src={Logo} alt="Company Logo" className="w-24 h-auto" />
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-10 mt-8 max-w-6xl w-full">
        {/* Left side info */}
        <div className="flex flex-col gap-8 w-full lg:w-1/3">
          <div className="flex gap-4">
            <div className="w-9 h-9 bg-yellow-400 rounded-full flex items-center justify-center text-white text-xl">
              ➤
            </div>
            <p className="text-gray-700">
              A survey was conducted to determine in what way Americans invest.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="w-9 h-9 bg-yellow-400 rounded-full flex items-center justify-center text-white text-xl">
              ➤
            </div>
            <p className="text-gray-700">
              The survey involved <b>3500</b> respondents aged above 25 selected from <b>12</b> different states.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="w-9 h-9 bg-yellow-400 rounded-full flex items-center justify-center text-white text-xl">
              ➤
            </div>
            <p className="text-gray-700">
              80% of respondents said they had invested their money.
            </p>
          </div>

          {/* Image Below Info */}
          <div className="mt-4">
            <img
              src={Invstcul}
              alt="Investment Illustration"
              className="w-full max-w-xs h-[200px] mx-auto lg:mx-0 rounded-lg"
            />
          </div>
        </div>

        {/* Right side chart */}
        <div className="w-full lg:w-2/3 bg-white p-4 rounded-lg shadow h-[500px]">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default InvestmentConsult;
