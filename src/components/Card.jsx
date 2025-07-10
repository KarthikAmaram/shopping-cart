import { useState } from "react"

function Card({product, onClick}) {
    const [amount, setAmount] = useState(0);

    function resetAmount() {
        setAmount(0);
        onClick(product, amount);
    }
    return (
        <div className="border border-black rounded-md p-4 flex flex-col items-center text-center max-w-xs mx-auto w-full justify-between">
            <img src={product.image} alt={product.title} className="size-24"/>
            <h1>{product.title}</h1>
            <h2>{"$" + product.price}</h2>
            <div className="flex gap-x-8">
                <button onClick={() => setAmount((amount) => amount > 0 ? amount - 1 : amount)}>-</button>
                <h3>{amount}</h3>
                <button onClick={() => setAmount((amount) => amount + 1)}>+</button>
            </div>
            <button 
            className="border border-black rounded-md p-2 text-center"
            onClick={resetAmount}
            >Add to cart</button>
        </div>
    )
}

export default Card