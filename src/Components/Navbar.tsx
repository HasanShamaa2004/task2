import { ShoppingCart } from 'lucide-react'
import { Menu } from 'lucide-react'
import { useEffect, useState } from 'react'
import { LucideOutdent } from 'lucide-react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    useEffect(() => {
        setIsClicked(false)
    }, [])
    const [isClick, setIsClicked] = useState(true)
    function handelClick() {
        setIsClicked(!isClick)
    }

    return (
        <nav className="sticky h-full z-50 p-3 shadow-sm  shadow-gray-500">
            <aside className="md:hidden relative flex items-center justify-between ">
                <h1 className="italic uppercase text-gray-700 text-6xl ">
                    its
                </h1>
                <div className="flex justify-start items-center md:hidden">
                    <Menu
                        className={`${
                            isClick == false
                                ? 'right-0 block w-[24px] cursor-pointer'
                                : 'hidden'
                        }`}
                        onClick={handelClick}
                    />
                    {isClick == true && (
                        <LucideOutdent
                            className="right-0 block w-[24px] cursor-pointer"
                            onClick={handelClick}
                        />
                    )}
                    <div
                        className={`${
                            isClick
                                ? 'fixed left-0 ease-in-out duration-500 top-0 w-[60%] border-r border-r-gray-300  h-full bg-white'
                                : 'fixed left-[-100%]'
                        }`}
                    >
                        <h1 className="italic uppercase text-gray-700 text-6xl gap-3 ">
                            its
                        </h1>

                        <ul
                            className={`${
                                isClick ? 'flex' : 'hidden'
                            } flex-col justify-between absolute  bg-white w-full p-2 `}
                        >
                            <NavLink
                                className="text-gray-500 hover:text-sky-500 cursor-pointer text-md p-4 border-b focus:text-[#38bdf8] border-gray-500"
                                to={'/'}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/about"
                                className="hover:text-[#38bdf8] cursor-pointer border-b focus:text-[#38bdf8] border-gray-500 text-gray-500 text-md p-4"
                            >
                                About
                            </NavLink>
                            <NavLink
                                to={'/product'}
                                className="hover:text-[#38bdf8] border-b focus:text-[#38bdf8] border-gray-500 cursor-pointer text-gray-500 text-md p-4"
                            >
                                Product
                            </NavLink>
                            <NavLink
                                to={'/booking'}
                                className="hover:text-[#38bdf8] cursor-pointer focus:text-[#38bdf8]  border-b border-gray-500 text-gray-500 text-md p-4"
                            >
                                Booking
                            </NavLink>
                            <NavLink
                                to={'/contact'}
                                className="hover:text-[#38bdf8] cursor-pointer focus:text-[#38bdf8] border-b border-gray-500 text-gray-500 text-md p-4"
                            >
                                Contact
                            </NavLink>
                            <NavLink
                                to={'/shopping'}
                                className="focus:text-[#38bdf8] hover:text-[#38bdf8]"
                            >
                                <ShoppingCart className="w-[34px] m-4 cursor-pointer" />
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </aside>
            <aside className="md:flex hidden items-center justify-between ">
                <h1 className=" italic uppercase text-gray-700 text-8xl ">
                    its
                </h1>

                <nav>
                    <ul className="hidden justify-center items-center gap-4 md:flex">
                        <NavLink
                            to={'/'}
                            className=" text-gray-500 focus:text-[#38bdf8] hover:text-sky-500 cursor-pointer text-lg"
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to={'/about'}
                            className=" hover:text-[#38bdf8] focus:text-[#38bdf8] cursor-pointer text-gray-500 text-lg"
                        >
                            About
                        </NavLink>
                        <NavLink
                            to={'/product'}
                            className="hover:text-[#38bdf8] focus:text-[#38bdf8]  cursor-pointer text-gray-500 text-lg"
                        >
                            Product
                        </NavLink>
                        <NavLink
                            to={'/booking'}
                            className="hover:text-[#38bdf8] focus:text-[#38bdf8] cursor-pointer text-gray-500 text-lg "
                        >
                            Booking
                        </NavLink>
                        <NavLink
                            to={'/contact'}
                            className="hover:text-[#38bdf8] focus:text-[#38bdf8] cursor-pointer text-gray-500 text-lg pr-2"
                        >
                            Contact
                        </NavLink>
                        <NavLink
                            to={'/shopping'}
                            className="focus:text-[#38bdf8] hover:text-[#38bdf8]"
                        >
                            <ShoppingCart className="w-[34px] pr-2  cursor-pointer" />
                        </NavLink>
                    </ul>
                </nav>
            </aside>
        </nav>
    )
}
