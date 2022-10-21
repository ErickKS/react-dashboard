import { Header } from "./Header";
import { MainCard } from "./MainCard";
import { TrendDown, TrendUp, UserPlus, Wallet } from "phosphor-react";

export function MainContent() {
  return (
    <div className="flex flex-col gap-8 p-4">
      <Header title="Dashboard" />

      <div className="grid grid-cols-[1fr_260px] gap-9">
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
        <div></div>
      </div>
    </div>
  );
}
