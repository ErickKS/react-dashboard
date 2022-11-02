import { OrdersData } from "../context/OrdersData";
import { OrderSingle } from "./OrderSingle";

export function TableListOrders() {
  return (
    <div className="px-6 py-4 bg-gray-800 rounded text-gray-100">
      <h2 className="text-lg mb-4">Recent Orders</h2>

      <div className="overflow-x-auto pb-4">
        <div className="flex flex-col min-w-[760px]">
          <div className="grid grid-cols-[95px_minmax(20%,_1fr)_minmax(110px,_1fr)_1fr_1fr_160px] p-3 text-center text-md bg-gray-900 rounded">
            <span className="text-left">Id</span>
            <span className="text-left">Customer</span>
            <span className="text-left">Product</span>
            <span className="">Status</span>
            <span className="">Profit</span>
            <span className="text-right">Date</span>
          </div>

          {OrdersData.map((order, index) => (
            <OrderSingle
              key={index}
              id={order.id}
              customer={order.customer}
              product={order.product}
              status={order.status}
              profit={order.profit}
              date={order.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
