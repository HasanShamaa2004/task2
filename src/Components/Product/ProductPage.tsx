import { useEffect, useState } from 'react'
import axios from 'axios'
import { IProduct } from '../../types/Iproduct'
import { Card } from './Card'

export const ProductPage = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [allCategories, setAllCategories] = useState<string[]>([])
    const [filterCategory, setFilterCategory] = useState<string>('')
    const [activeCategory, setActiveCategory] = useState<string>('')

    function handelSetCategory(category: string = '') {
        setFilterCategory(category)
        setActiveCategory(category)
    }

    useEffect(() => {
        async function getData() {
            const array = await axios.get<IProduct[]>('/data.json')
            setProducts(array.data)
            setFilteredProducts(array.data)
            const allProductCategories: Set<string> = new Set()
            array.data.forEach((product) => {
                allProductCategories.add(product.category)
            })
            setAllCategories(Array.from(allProductCategories))
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
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if (window.pageYOffset > window.innerHeight / 2) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)
        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])
    return (
        <>
            <main className="flex flex-col min-h-screen">
                <h1 className="text-3xl py-10 text-center">All Products</h1>
                <section className="sticky top-0 bg-white z-30 py-4 shadow-md">
                    <div className="flex justify-center flex-wrap gap-2 px-4">
                        <button
                            className={`px-3 py-2 rounded-md text-sm ${
                                activeCategory === ''
                                    ? 'bg-sky-500 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-sky-500 hover:text-white'
                            }`}
                            onClick={() => handelSetCategory('')}
                        >
                            All Categories <span>({products.length})</span>
                        </button>
                        {allCategories.map((category, i) => (
                            <button
                                key={i}
                                className={`px-3 py-2 rounded-md text-sm ${
                                    activeCategory === category
                                        ? 'bg-sky-500 text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-sky-500 hover:text-white'
                                }`}
                                onClick={() => handelSetCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </section>
                <section className="flex-1 overflow-y-auto p-4">
                    <div className="flex flex-wrap justify-center items-center gap-5">
                        {filteredProducts.map((product, index) => (
                            <Card item={product} key={index} />
                        ))}
                    </div>
                </section>
            </main>
            <footer className="bg-gray-200 text-center h-20 mt-4 w-full">
                <p className="p-6">
                    Copyright © 2023 itstore. Powered by itstore.
                </p>
            </footer>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    style={{
                        position: 'fixed',
                        bottom: '50px',
                        right: '30px',
                        padding: '10px',
                        backgroundColor: '#0ea5e9',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    ↑ إلى الأعلى
                </button>
            )}
        </>
    )
}
