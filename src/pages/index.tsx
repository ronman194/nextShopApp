import Product from "@/components/Product";
import { initMongoose } from "@/lib/mongoose";
import ProductType from "@/types/types";
import { useEffect, useState } from "react"
import { findAllProducts } from "./api/products";

export default function Home({ products }: { products: ProductType[] }) {

  const [searchBox, setSearchBox] = useState("");


  const categoriesNames: string[] = Array.from(new Set(products.map(p => p.category)));

  if (searchBox) {
    products = products.filter(p => p.name.toLowerCase().includes(searchBox.toLowerCase()))
  }

  return (
    <div className='p-5'>
      <input type="text"
        value={searchBox}
        onChange={e => setSearchBox(e.target.value)}
        placeholder="Search for products..."
        className="bg-zinc-900 w-full py-2 px-4 rounded-xl" />
      <div>
        {categoriesNames.map(categoryName => (
          <div key={categoryName}>
            {products.find(p => p.category === categoryName) && (
              <div>
                <h2 className="text-2xl capitalize py-5">{categoryName}</h2>
                <div className="flex -mx-5 overflow-x-scroll snap-x scrollbar-hide">
                  {products.filter(p => p.category === categoryName).map(product => (
                    <div key={product._id.toString()} className="px-5 snap-start">
                      <Product product={product} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps(){
  await initMongoose();
  const products:ProductType[] = await findAllProducts();
  return {
    props:{
      products: JSON.parse(JSON.stringify(products)),
    }
  }
}