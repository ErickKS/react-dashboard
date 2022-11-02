interface orderSingleProps {
  id: string;
  customer: string;
  product: string;
  status: string;
  profit: number;
  date: string;
}

export function OrderSingle({ ...props }: orderSingleProps) {
  return (
    <div className="group w-full grid grid-cols-[95px_minmax(20%,_1fr)_minmax(110px,_1fr)_1fr_1fr_160px] p-3 text-sm text-center text-gray-200 border-b-[1px] border-gray-900">
      <span className="text-gray-400 text-left transition-colors group-hover:text-cyan-500">
        {"#" + props.id}
      </span>
      <span className="text-left">{props.customer}</span>
      <span className="text-left">{props.product}</span>
      <div className="">
        <span className="text-green-500 bg-green-900 rounded px-2 py-1">
          {props.status}
        </span>
      </div>
      <span className="">{"$" + props.profit}</span>
      <span className="text-gray-400 text-right">{props.date}</span>
    </div>
  );
}
