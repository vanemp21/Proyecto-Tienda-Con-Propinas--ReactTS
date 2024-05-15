import MenuItem from "./components/MenuItem";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
function App() {
  const { order, tip, setTip,addItem, removeItem, placeOrder } = useOrder();
  return (
    <>
      <header className=" bg-slate-800 py-5">
        <h1 className="text-center text-4xl font-black text-white py-5">
          Calculadora de Propinas y Consumo
        </h1>
      </header>
      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2 text-white">
        <div className="p-5">
          <h2 className="text-4xl mb-10">Menú</h2>

          {/* NOTA ==> Se repite 12 veces e imprime el comp menuitem 12 veces, para eso hay que pasarle el prop */}
          <div className="space-y-3 ">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {order.length> 0 ?(
            <>
            <OrderContents order={order} removeItem={removeItem} />
          <TipPercentageForm setTip={setTip} tip={tip}/>
          <OrderTotals order={order}
          tip={tip} 
          placeOrder={placeOrder}
          />
            </>
          ):(
            <div className="flex justify-center items-center w-full h-full "> <p className="w-full text-center text-xl">El pedido está vacío</p></div>
         
          )}
          
        </div>
      </main>
    </>
  );
}

export default App;
