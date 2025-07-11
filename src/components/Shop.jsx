import { useOutletContext } from "react-router-dom"
import Card from "./Card.jsx"

function Shop() {
    const {products, onAdd} = useOutletContext()

    return (
        <>
            <h1 className="text-center text-xl">Catalog</h1>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-6 p-6">
                {products.map((product) => (
                <Card key={product.id} product={product} onAdd={onAdd} />
                ))}
            </div>
        </>
    )
}

export default Shop