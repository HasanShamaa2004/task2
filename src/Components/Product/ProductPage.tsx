import { useEffect, useState } from 'react'
import axios from 'axios'
import { IProduct } from '../../types/Iproduct'
import { Card } from './Card'

export const ProductPage = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [allCategories, setAllCategories] = useState<string[]>([])
    const [filterCategory, setFilterCategory] = useState<string>('')

    function handelSetCategory(category: string = '') {
        setFilterCategory(category)
    }

    useEffect(() => {
        async function getData() {
            const array = await axios.get<IProduct[]>('/data.json')
            setProducts(array.data)
            setFilteredProducts(array.data)
            const allProductCategories: Set<string> = new Set()
            array.data.map((product) => {
                allProductCategories.add(product.category)
                setAllCategories(Array.from(allProductCategories))
            })
        }
        getData()
    }, [])

    useEffect(() => {
        if (filterCategory === '') {
            if (products.length) setFilteredProducts(products)
        } else {
            const filtered = products.filter(
                (product) => product.category === filterCategory
            )
            setFilteredProducts(filtered)
        }
    }, [filterCategory])

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <div className="flex flex-1">
                    <aside className="w-[20%] bg-gray-100 p-4 fixed top-[254px] bottom-20 mb-6 overflow-y-auto">
                        <p
                            className="cursor-pointer font-semibold p-2 hover:text-sky-500"
                            onClick={() => handelSetCategory('')}
                        >
                            allCategories <span>({products.length})</span>
                        </p>
                        {allCategories.map((category, i) => (
                            <p
                                key={i}
                                className="cursor-pointer font-semibold p-2 hover:text-sky-500"
                                onClick={() => handelSetCategory(category)}
                            >
                                {category}
                            </p>
                        ))}
                    </aside>
                    <main className="flex-1 ml-[20%] flex flex-col">
                        <h1 className="text-3xl py-10 text-center">
                            All Products
                        </h1>
                        <div className="flex-1 overflow-y-auto p-4">
                            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                                {filteredProducts.map((product, index) => (
                                    <Card item={product} key={index} />
                                ))}
                            </div>
                        </div>
                    </main>
                </div>

                <footer className="bg-gray-200 text-center h-20 mt-4 w-full">
                    <p className="p-6">
                        Copyright © 2023 itstore. Powered by itstore.
                    </p>
                </footer>
            </div>
        </>
    )
}
