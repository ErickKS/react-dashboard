import { OrdersData } from "../context/OrdersData";
import { OrderSingle } from "./OrderSingle";

export function TableListOrders() {
  return (
    <div className="flex flex-col w-full px-6 py-4 bg-gray-800 rounded text-gray-100">
      <h2 className="text-lg mb-4">Recent Orders</h2>

      <div className="grid grid-cols-[120px_256px_160px_1fr_1fr_1fr] p-3 text-center text-md bg-gray-900 rounded">
        <span className="text-left">Id</span>
        <span className="text-left">Customer</span>
        <span className="text-left">Product</span>
        <span>Status</span>
        <span>Profit</span>
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
  );
}
