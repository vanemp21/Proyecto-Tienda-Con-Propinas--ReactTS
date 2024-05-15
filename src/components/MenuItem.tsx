import type { MenuItem } from "../types" 
type MenuItemProps = {
    item:MenuItem,
    addItem: (item:MenuItem) => void
}

export default function MenuItem({item, addItem}: MenuItemProps) {
  return (
    <button onClick={()=> addItem(item)}
    className="border-2 rounded-[10px] border-indigo-500 hover:bg-indigo-300 hover:text-black w-full p-3 flex justify-between">
    <p>{item.name}</p>
    <p className="text-white">${item.price}</p>
    </button>
  )
}
