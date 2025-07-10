function Card({product}) {
    return (
        <div className="border border-black rounded-md p-4 flex flex-col items-center text-center max-w-xs mx-auto w-full">
            <img src={product.image} alt={product.title} className="size-24"/>
            <h1>{product.title}</h1>
            <h2>{product.price}</h2>
        </div>
    )
}

export default Card