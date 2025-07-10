import { useOutletContext } from "react-router-dom"
import Card from "./Card.jsx"

function Shop() {
    const {products, onClick} = useOutletContext()

    return (
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-6 p-6">
            {products.map((product) => (
            <Card key={product.id} product={product} onClick={onClick} />
            ))}
        </div>
        
    )
}

export default Shop