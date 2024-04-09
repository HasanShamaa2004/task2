import { FetchData } from '../../data/FetchData'
import { Card } from './Card'

export const BestSelling = () => {
    const products = FetchData()

    return (
        <div className=" mb-16">
            <h1 className="text-center text-4xl font-bold text-gray-700">
                Best Selling Products
            </h1>
            <div className="flex items-center justify-center">
                <div className="grid lg:grid-cols-3 gap-8 md:grid-cols-2 grid-cols-1 mt-16 mb-16 ">
                    {products &&
                        products
                            .filter(
                                (product) =>
                                    product.id % 4 === 0 && product.id > 17
                            )
                            .map((product, index) => (
                                <Card key={index} item={product} />
                            ))}
                </div>
            </div>
        </div>
    )
}
