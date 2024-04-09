import { Globe } from 'lucide-react'
import { StarsIcon } from 'lucide-react'
import { Percent } from 'lucide-react'
import { ShieldAlert } from 'lucide-react'
export const Whyme = () => {
    return (
        <>
            <div className="text-center mb-20 relative">
                <h1 className="text-4xl font-bold text-gray-600 mb-16">
                    Why Choose Us
                </h1>
                <div className="grid lg:grid-cols-4 gap-5  mb-6 md:grid-cols-3 sm:grid-cols-2">
                    <div className="flex flex-col items-center mr-3 ml-3 p-3 justify-centers rounded bg-gray-100 h-[350px]">
                        <div className="p-5 text-gray-500">
                            <Globe size={'85px'} />
                        </div>
                        <h1 className="text-2xl text-gray-700 font-semibold">
                            Worldwide Shipping
                        </h1>
                        <p className="text-lg p-2 text-gray-500 font-medium h-1/2">
                            We offer worldwide shipping to make our products
                            accessible to customers all over the world.
                        </p>
                    </div>
                    <div className="flex flex-col items-center mr-3 ml-3 p-3  justify-centers bg-gray-100 h-[350px] rounded">
                        <div className="p-5 text-gray-500">
                            <StarsIcon size={'85px'} />
                        </div>
                        <h1 className="text-2xl text-gray-700 font-semibold">
                            Best Quality
                        </h1>
                        <p className="text-lg p-2 text-gray-500 font-medium">
                            We believe in providing our customers with only the
                            best quality products.
                        </p>
                    </div>
                    <div className="flex flex-col items-center mr-3 ml-3 p-3  rounded justify-centers bg-gray-100 h-[350px]">
                        <div className="p-5 text-gray-500">
                            <Percent size={'85px'} />
                        </div>
                        <h1 className="text-2xl text-gray-700 font-semibold">
                            Best Offers
                        </h1>
                        <p className="text-lg p-2 text-gray-500 font-medium">
                            We pride ourselves on offering the best deals and
                            discounts to our customers.
                        </p>
                    </div>
                    <div className="flex flex-col items-center mr-3 ml-3 p-3 rounded justify-centers bg-gray-100 h-[350px]">
                        <div className="p-5 text-gray-500">
                            <ShieldAlert size={'85px'} />
                        </div>
                        <h1 className="text-2xl text-gray-700 font-semibold">
                            Secure Payments
                        </h1>
                        <p className="text-lg p-2 text-gray-500 font-medium">
                            We offer a range of secure payment options to ensure
                            that your transactions are safe and secure.
                        </p>
                    </div>
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
