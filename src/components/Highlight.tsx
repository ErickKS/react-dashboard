interface highlightProps {
  name: string;
  percentage: string;
}

export function Highlight({ name, percentage }: highlightProps) {
  return (
    <div className="flex justify-between text-md text-gray-200 even:border-t-[1px] border-dashed border-gray-400 py-2">
      {name}
      <span className="text-gray-100">{percentage}%</span>
    </div>
  );
}
