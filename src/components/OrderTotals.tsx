import { formatCurrency } from "../helpers";
import { OrderItem } from "../types";
import { useMemo } from "react";
type OrderTotalsProps = {
    order: OrderItem[],
    tip:number,
    placeOrder: () => void
}
export default function OrderTotals({order, tip, placeOrder}: OrderTotalsProps) {
    {/* NOTA ==> El reduce trabaja con 2 argumentos, uno de ellos va a ser el total y el otro sobre el que se itera, que es el item de order */}
    const subtotalAmount = useMemo(()=> order.reduce((total,item)=>total+(item.quantity*item.price),0),[order])
    const tipAmount = useMemo(()=>subtotalAmount*tip,[tip,order])
    const amountTotal = useMemo(()=>subtotalAmount+tipAmount,[tip,order])
  
    return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl text-white"> Totales y Propinas:</h2>
        <p>Subtotal a pagar: 
        <span className="font-bold"> {formatCurrency(subtotalAmount)}</span></p>

        <p>Propina: : 
        <span className="font-bold">{formatCurrency(tipAmount)}</span></p>

        <p>Total a pagar: 
        <span className="font-bold">{formatCurrency(amountTotal)}</span></p>
      </div>
      <button onClick={placeOrder}
      disabled={amountTotal==0} className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-45">Guardar Pedido</button>
    </>
  );
}
