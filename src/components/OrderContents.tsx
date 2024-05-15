import { formatCurrency } from "../helpers";
import { MenuItem, OrderItem } from "../types";

type OrderContentsProp = {
  order: OrderItem[],
  removeItem: (id: MenuItem['id'])=> void
};
export default function OrderContents({ order, removeItem }: OrderContentsProp) {
  return (
    <div>
      <h2 className="text-white text-4xl">Factura</h2>
      <div className="space-y-3 mt-10">
        {(order.map(item=>(
            <div key={item.id}
            className="flex justify-between border-t border-white py-5 items-center last-of-type:border-b">
                <div>
                <p className="text-lg">{item.name} - {formatCurrency(item.price)}</p>
                <p className="text-white">
                    Cantidad: {item.quantity} - {formatCurrency(item.price*item.quantity)}
                </p></div>
                <button onClick={()=>removeItem(item.id)}
                className="bg-red-600 h-8 w-8 rounded-full text-white font-black">X</button>
            </div>
          )))
        }
      </div>
    </div>
  );
}
