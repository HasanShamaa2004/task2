import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useCart } from 'react-use-cart'

import { IProduct } from '../../types/Iproduct'

interface IProductProps {
    item: IProduct
}

export const Card = ({ item }: IProductProps) => {
    const { addItem } = useCart()
    function handelClick() {
        console.log('handelClick')
        addItem(item as any)
        toast.success('Added To Cart !!', {
            position: 'bottom-right',
        })
    }
    return (
        <div className="relative max-w-[350px] min-w-[300px] h-auto w-full">
            <div className="flex flex-col flex-shrink-0 h-[500px] w-full max-w-[350px] min-w-[300px] pb-5 items-center justify-between transition duration-300 hover:scale-105 bg-gray-100 rounded-md overflow-hidden shadow-xl">
                <div className="p-5 mix-blend-multiply flex-grow">
                    <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-40 object-contain mx-auto"
                    />
                </div>
                <div className="self-start ml-3">
                    <h1 className="text-lg font-medium w-3/4">{item.title}</h1>
                    <p className="text-sm text-gray-500 font-normal">
                        Brand:{' '}
                        <span className="text-gray-600 font-medium uppercase">
                            {item.brand}
                        </span>
                    </p>
                    <p className="text-sm text-gray-500 font-normal">
                        Price:{' '}
                        <span className="text-red-500">${item.price}</span>
                    </p>
                </div>
                <div className="flex justify-between items-center w-full px-6">
                    <Link
                        to={item.title}
                        state={item}
                        className="list-none cursor-pointer rounded hover:bg-sky-500 hover:text-white border-sky-400 text-sky-500 border-2 px-2 py-1"
                    >
                        More info
                    </Link>
                    <li
                        className="list-none cursor-pointer hover:bg-white hover:text-sky-500 rounded border-sky-400 bg-sky-500 text-white border-2 px-2 py-1"
                        onClick={handelClick}
                    >
                        Add to cart
                    </li>
                </div>
            </div>
        </div>
    )
}
