import { useState } from "react";
import { Header } from "./Header";
import { MainCard } from "./MainCard";
import { DoughnutChat } from "./Charts/Doughnut";
import { PortfolioData } from "../context/ChartsData";
import {
  CurrencyDollar,
  TrendDown,
  TrendUp,
  UserPlus,
  Wallet,
} from "phosphor-react";

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
      },
    ],
  });

  return (
    <div className="flex flex-col gap-8 p-4">
      <Header title="Dashboard" />

      <div className="grid grid-cols-[1fr_288px] gap-9">
        <div>
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
            <MainCard amount="+ 32">
              <UserPlus size={32} />
              Clients
            </MainCard>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="overflow-hidden rounded-lg">
            <img
              src="./message2.jpg"
              alt="inspirational message"
              className="w-full transition-transform hover:scale-110"
            />
          </div>
          <div className="px-4 py-3 rounded bg-gray-800 text-gray-100 relative">
            <h2 className="text-lg text-center mb-4">investment portfolio</h2>
            <DoughnutChat chartData={portfolioData} />
            <CurrencyDollar
              size={38}
              className="absolute left-1/2 -translate-x-2/4 top-[42%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
