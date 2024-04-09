import { useEffect, useState } from 'react'
import axios from 'axios'
import { IProduct } from '../../types/Iproduct'
import { Card } from './Card'

export const ProductPage = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [allCatigories, setAllCatigories] = useState<string[]>([])
    const [filterCategory, setFilterCategory] = useState<string>('')
    function handelSetCategory(category: string = '') {
        setFilterCategory(category)
    }
    useEffect(() => {
        async function getData() {
            const array = await axios.get<IProduct[]>(
                'http://localhost:5173/data.json'
            )
            setProducts(array.data)
            setFilteredProducts(array.data)
            const allProductCategories: Set<string> = new Set()
            array.data.map((product) => {
                allProductCategories.add(product.category)
                setAllCatigories(Array.from(allProductCategories))
            })
        }
        getData()
    }, [])
    useEffect(() => {
        if (filterCategory === '') {
            if (products.length) setFilteredProducts(products)
        } else {
            const Filtered = products.filter(
                (product) => product.category === filterCategory
            )
            setFilteredProducts(Filtered)
        }
    }, [filterCategory])
    return (
        <>
            <h1 className="text-3xl py-10 text-center">All Products</h1>
            <div className="md:hidden flex flex-wrap items-center justify-around">
                <p
                    className="flex items-center hover:text-sky-500 focus:text-sky-500 cursor-pointer font-semibold p-2"
                    onClick={() => handelSetCategory('')}
                >
                    allCatigories <span>({products.length})</span>{' '}
                </p>
                {allCatigories.map((category, i) => (
                    <p
                        key={i}
                        className="cursor-pointer hover:text-sky-500 focus:text-sky-500 p-2 font-semibold"
                        onClick={() => handelSetCategory(category)}
                    >
                        {category}
                    </p>
                ))}
            </div>
            <div className="flex md:justify-between justify-center mb-4">
                <div className="w-[20%] bg-gray-100 text-base md:flex flex-col hidden mr-2 ">
                    <p
                        className="flex justify-between items-center cursor-pointer font-semibold p-2"
                        onClick={() => handelSetCategory('')}
                    >
                        allCatigories <span>({products.length})</span>{' '}
                    </p>
                    {allCatigories.map((category, i) => (
                        <p
                            key={i}
                            className="cursor-pointer p-2 font-semibold"
                            onClick={() => handelSetCategory(category)}
                        >
                            {category}
                        </p>
                    ))}
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    {filteredProducts.map((product, index) => {
                        return <Card item={product} key={index} />
                    })}
                </div>
            </div>
            <div className="bg-gray-200 text-center h-20 bottom-0">
                <p className="p-6">
                    Copyright © 2023 itstore. Powered by itstore.
                </p>
            </div>
        </>
    )
}
