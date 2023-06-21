import ProductType from "@/types/types";

export default function Product({ product }: { product: ProductType }) {
    return (
        <div className='w-64'>
            <div className="bg-blue-100 p-5 rounded-xl">
                <img src={product.picture} alt='' />
            </div>
            <div className="mt-2">
                <h3 className="font-bold text-lg">{product.name}</h3>
            </div>
            <p className="text-sm mt-2">{product.description}</p>
            <div className="flex mt-2">
                <div className="text-2xl font-bold grow">${product.price}</div>
                <button className="bg-emerald-400 p-2 rounded-xl">Add to cart</button>
            </div>
        </div>
    )
}
