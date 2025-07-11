import { useOutletContext } from "react-router-dom"

function Cart() {
  const { cart, onCheckout } = useOutletContext();
  let cost = 0;
  for (const product of cart) {
    cost += product.price * product.quantity;
  }

  return (
    <>
      <h1 className="mb-4 text-left text-[36px]">Shopping Cart</h1>
      <div className="flex gap-x-16 items-start">
        <div className="flex flex-col gap-y-8 w-full">
          <hr className="border-t border-gray-400 my-4" />
          {cart.map((product) => (
            <div key={product.id}>
              <div className="flex gap-x-12">
                <img
                  src={product.image}
                  alt={product.title}
                  className="size-48"
                />
                <div className="flex flex-col justify-center items-start">
                  <h2>{product.title}</h2>
                  <p className="text-left">{product.description}</p>
                  <h2>{"Quantity: " + product.quantity}</h2>
                  <h2>{"$" + (product.price.toFixed(2))}</h2>
                </div>
              </div>
              <hr className="border-t border-gray-300 my-4" />
            </div>
          ))}
        </div>

        <div className="flex flex-col min-w-[250px] p-4 border border-gray-300 rounded-md space-y-4 ">
          <h2 className="text-xl font-semibold">Order Summary</h2>

          <div className="flex justify-between">
            <h3>Subtotal</h3>
            <h3>${cost.toFixed(2)}</h3>
          </div>
          <hr className="border-t border-gray-300 my-4" />
          <div className="flex justify-between">
            <h3>Tax</h3>
            <h3>${(cost / 20).toFixed(2)}</h3>
          </div>
          <hr className="border-t border-gray-300 my-4" />
          <div className="flex justify-between font-bold">
            <h3>Final Total</h3>
            <h3>${(cost + cost / 20).toFixed(2)}</h3>
          </div>
          <hr className="border-t border-gray-300 my-4" />
          <button className="mt-4 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800" onClick={onCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
