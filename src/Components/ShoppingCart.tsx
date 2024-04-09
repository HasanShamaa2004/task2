import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import { Cart } from './Cart'

export const ShoppingCart = () => {
    const {
        items,
        isEmpty,
        totalUniqueItems,
        totalItems,
        cartTotal,
        emptyCart,
    } = useCart()
    console.log(items)
    if (isEmpty)
        return (
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-center text-4xl font-bold text-red-500">
                    {' '}
                    Empty Cart !!
                </h1>
                <Link to={'/'} className="text-sky-400  text-xl m-3">
                    &larr; Go To Home
                </Link>
            </div>
        )
    return (
        <>
            <section className="py-4 mx-auto w-full">
                <div className="flex justify-center items-center">
                    <div className="flex flex-col w-full">
                        <h5 className="text-xl font-bold">
                            Cart :{' '}
                            <span className=" text-sky-500 underline">
                                {' '}
                                {totalUniqueItems}
                            </span>{' '}
                            total Items:{' '}
                            <span className="text-sky-500 underline">
                                {totalItems}
                            </span>
                        </h5>
                        <div>
                            <Cart />
                        </div>
                    </div>
                </div>
            </section>
            <div className=" ms-auto text-xl font-bold">
                Total Price: <span className="text-red-500">${+cartTotal}</span>{' '}
            </div>
            <div className="flex justify-center items-center">
                <button
                    className="m-2  text-red-500 md:text-2xl text-xl hover:text-red-600 "
                    onClick={() => emptyCart()}
                >
                    Clear Cart
                </button>
                <Link
                    to={'/'}
                    className="text-sky-400 hover:text-sky-500 m-2 md:text-2xl text-xl"
                >
                    &larr; Go To Home
                </Link>
            </div>
        </>
    )
}
