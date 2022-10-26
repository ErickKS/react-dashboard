import { useState } from "react";
import { Header } from "./Header";
import { MainCard } from "./MainCard";

import { DoughnutChart } from "./Charts/Doughnut";
import { LineSalesChart } from "./Charts/LineSales";
import { PortfolioData, SalesData, CountryData } from "../context/ChartsData";

import {
  CurrencyDollar,
  TrendDown,
  TrendUp,
  UserPlus,
  Wallet,
} from "phosphor-react";
import { BarCountryChart } from "./Charts/BarCountry";
import { Highlight } from "./Highlight";

export function MainContent() {
  const [portfolioData, setPortfolioData] = useState({
    labels: PortfolioData.map((data) => data.type),
    datasets: [
      {
        data: PortfolioData.map((data) => data.amount),
        backgroundColor: ["#61DAFB", "#5800FF", "#FFD124"],
        cutout: "85%",
        borderWidth: 4,
        borderColor: "transparent",
        hoverOffset: 6,
      },
    ],
  });

  const [salesData, setSalesData] = useState({
    labels: SalesData.map((data) => data.month),
    datasets: [
      {
        label: "Sales",
        data: SalesData.map((data) => data.sales),
        borderColor: "#61DAFB",
        backgroundColor: "#61DAFB",
        lineTension: 0.4,
        radius: 5,
        fill: {
          target: "origin",
          above: "#61dafb2b",
        },
      },
    ],
  });

  const [countryData, setCountryData] = useState({
    labels: CountryData.map((data) => data.country),
    datasets: [
      {
        label: "Sales",
        data: CountryData.map((data) => data.sales),
        backgroundColor: "#61dafb2b",
        borderColor: "#61DAFB",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="flex flex-col gap-8 p-4">
      <Header title="Dashboard" />

      <div className="grid grid-cols-[1fr_288px] gap-9">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-4 gap-6">
            <MainCard amount="$ 9.800">
              <Wallet size={32} />
              Your wallet
            </MainCard>
            <MainCard amount="$ 2.022">
              <TrendUp size={32} />
              Incomes
            </MainCard>
            <MainCard amount="$ 1.890">
              <TrendDown size={32} />
              Expenses
            </MainCard>
            <MainCard amount="+ 14">
              <UserPlus size={32} />
              Clients
            </MainCard>
          </div>

          <div className="grid gap-6 grid-cols-2">
            <div className="bg-gray-800 text-gray-100 px-6 py-4 rounded">
              <h2 className="text-lg text-center mb-4">Sales Overview</h2>
              <LineSalesChart chartData={salesData} />
            </div>
            <div className="bg-gray-800 text-gray-100 px-6 py-4 rounded">
              <h2 className="text-lg text-center mb-4">Sales by Country</h2>
              <BarCountryChart chartData={countryData} />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-6">
          <div className="overflow-hidden rounded-lg">
            <img
              src="./message.jpg"
              alt="inspirational message"
              className="w-full transition-transform hover:scale-110"
            />
          </div>

          <div className="px-4 py-3 rounded bg-gray-800 text-gray-100 relative">
            <h2 className="text-lg text-center mb-4">investment portfolio</h2>
            <DoughnutChart chartData={portfolioData} />
            <CurrencyDollar
              size={38}
              className="absolute left-1/2 -translate-x-2/4 top-[42%]"
            />
          </div>

          <div className="p-4 rounded bg-gray-800 text-gray-100 shadow-bt-inset">
            <h2 className="text-lg text-center mb-4">highlight</h2>
            <div className="flex flex-col">
              <Highlight name="Stocks" percentage="+3" />
              <Highlight name="Cryptocurrency" percentage="-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
