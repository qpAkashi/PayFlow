"use client"
import React from "react"
import AnimatedCounter from "./AnimatedCounter"
import DoughnutChart from "./DoughnutChart"

interface TotalBalanceBoxProps {
  accounts?: number[];
  totalBanks: number;
  totalCurrentBalance: number;
}

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotalBalanceBoxProps) => {
  return (
    <section className="total-balance flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-gray-100 rounded-xl shadow-xl">
      {/* Doughnut Chart */}
      <div className="total-balance-chart flex-shrink-0 w-full md:w-1/2">
        <DoughnutChart accounts={accounts} />
      </div>

      {/* Info Section */}
      <div className="flex flex-col gap-6 w-full md:w-1/2">
        <div className="flex items-center gap-2">
          {/* Bank accounts section */}
          <div className="text-2xl text-bankGradient font-semibold">Bank Accounts</div>
        </div>

        <h2 className="header-2 text-2xl font-semibold text-white">{totalBanks} Bank Accounts</h2>

        <div className="flex flex-col gap-2">
          <p className="total-balance-label text-sm text-gray-400">Total Current Balance</p>
          <div className="total-balance-amount flex-center gap-2">
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
