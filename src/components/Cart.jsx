import { useOutletContext } from "react-router-dom"

function Cart() {
    const {cart} = useOutletContext() 
    return (
        <div>
            <div className="flex flex-col">
                <h1 className="mb-4 text-left text-[36px]">Shopping Cart</h1>
                <hr className="border border-black my-4" />
                {cart.map((product) => (
                    <div key={product.id} className="flex gap-x-12">
                        <img src={product.image} alt={product.title} className="size-48"/>
                        <div className="flex flex-col justify-center items-start">
                            <h2>{product.title}</h2>
                            <p className="text-left">{product.description}</p>
                            <h2>{"Quantity: " + product.quantity}</h2>
                            <h2>{"$" + product.price}</h2>
                        </div>
                    </div>
                ))}
            </div>
            <div>

            </div>
        </div>
    )
}

export default Cart