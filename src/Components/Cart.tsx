import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'

export const Cart = () => {
    const { items, isEmpty, updateItemQuantity, removeItem } = useCart()
    if (isEmpty)
        return (
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-center text-4xl font-bold text-red-500">
                    {' '}
                    Empty Cart !!
                </h1>
                <Link to={'/'} className="text-sky-400  text-xl m-3">
                    Go To Home
                </Link>
            </div>
        )
    return (
        <table className="w-full border-separate px-4">
            <tbody>
                {items.map((item, index) => {
                    return (
                        <tr
                            key={index}
                            className="hover:bg-gray-200 w-full bg-gray-100 flex md:flex-row container md:max-h-[200px] flex-col items-center  justify-between  my-4"
                        >
                            <td className="mix-blend-multiply w-1/3">
                                <img
                                    className="bg-contain max-w-[150px]"
                                    src={item.img}
                                    alt=""
                                />
                            </td>
                            <td className="md:text-2xl mx-2 text-md">
                                {item.title}
                            </td>
                            <td className="text-red-500 mx-2 text-sm md:text-2xl">
                                ${item.price}
                            </td>
                            <td className="text-sky-400 mx-2 text-sm md:text-2xl">
                                Quantity ({item.quantity})
                            </td>
                            <td className="m-2 whitespace-nowrap">
                                <button
                                    className="rounded-full bg-sky-300 hover:bg-sky-400 ms-2 py-1 px-2"
                                    onClick={() =>
                                        updateItemQuantity(
                                            item.id,
                                            item.quantity! - 1
                                        )
                                    }
                                >
                                    -
                                </button>
                                <button
                                    className="rounded-full bg-sky-300 hover:bg-sky-500 ms-2 py-1 px-2"
                                    onClick={() =>
                                        updateItemQuantity(
                                            item.id,
                                            item.quantity! + 1
                                        )
                                    }
                                >
                                    +
                                </button>
                                <button
                                    className="rounded-lg bg-red-500 ms-2 py-1 px-2 text-white hover:bg-red-600"
                                    onClick={() => removeItem(item.id)}
                                >
                                    Remove
                                </button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
