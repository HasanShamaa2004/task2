import { FetchData } from '../../data/FetchData'
import { Card } from './Card'

export const FeatureProduct = () => {
    const products = FetchData()
    console.log(
        '🚀 ~ file: FeatureProduct.tsx:6 ~ FeatureProduct ~ products:',
        products
    )
    return (
        <>
            <div className="mt-16">
                <h1 className="text-center text-gray-700 font-bold text-4xl">
                    Feature Product
                </h1>
            </div>
            <div className="flex items-center justify-center">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-16 mb-16">
                    {products
                        ?.filter((product) => product.id % 5 === 0)
                        .map((product, index) => (
                            <Card key={index} item={product} />
                        ))}
                </div>
            </div>
        </>
    )
}
