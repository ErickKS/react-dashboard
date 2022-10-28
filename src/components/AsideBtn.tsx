import { ReactNode } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

interface asideBtnProps {
  active: boolean;
  to: string;
  children: ReactNode;
  onClick?: () => void;
}

export function AsideBtn({ active, to, children, onClick }: asideBtnProps) {
  return (
    <Link
      to={to}
      className={clsx(
        "w-full flex gap-2 items-center py-3 px-4 rounded text-gray-100 transition-all duration-200",
        {
          "bg-gray-800": active === true,
          "hover:bg-gray-800 hover:translate-x-1": active === false,
        }
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
