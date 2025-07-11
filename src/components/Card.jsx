import { useState } from "react"

function Card({product, onAdd}) {
    const [amount, setAmount] = useState(0);

    function resetAmount() {
        setAmount(0);
        onAdd(product, amount);
    }
    return (
        <div className="border border-black rounded-md p-4 flex flex-col items-center text-center max-w-xs mx-auto w-full justify-between">
            <img src={product.image} alt={product.title} className="size-24"/>
            <h1>{product.title}</h1>
            <h2>{"$" + (product.price.toFixed(2))}</h2>
            <div className="flex gap-x-8">
                <button className="hover:bg-gray-200 rounded-lg grow-0" onClick={() => setAmount((amount) => amount > 0 ? amount - 1 : amount)}>-</button>
                <h3>{amount}</h3>
                <button className="hover:bg-gray-200 rounded-lg grow-0" onClick={() => setAmount((amount) => amount + 1)}>+</button>
            </div>
            <button 
            className="border border-black rounded-md p-2 text-center hover:bg-gray-200"
            onClick={resetAmount}
            >Add to cart</button>
        </div>
    )
}

export default Card