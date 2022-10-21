import { ReactNode } from "react";

interface MainCardProps {
  children: ReactNode;
  amount: string;
}

export function MainCard({ children, amount }: MainCardProps) {
  return (
    <div className="flex flex-col gap-2 w-full px-6 py-4 bg-gray-800 rounded-r-md shadow-card-inset">
      <div className="flex gap-3 items-center text-gray-100 text-lg">
        {children}
      </div>
      <span className="font-semibold text-white text-xl">{amount}</span>
    </div>
  );
}
