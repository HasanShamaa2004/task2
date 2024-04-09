import { Link } from 'react-router-dom'

export const Offers = () => {
    return (
        <div className="relative h-[400px] flex justify-center items-center gap-4">
            <div
                style={{
                    backgroundImage: `url("https://plus.unsplash.com/premium_photo-1663054524168-60a30950acb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")`,
                }}
                className="absolute bg-fixed bg-cover bg-no-repeat mb-16 h-full w-full md:bg-left bg-center"
            >
                <div className="bg-black bg-opacity-75 w-full absolute h-full"></div>
                <div className="h-full w-full flex flex-col text-white justify-center mr-7 ml-7">
                    <div className="relative flex h-1/2 flex-col items-start gap-4 z-10 justify-center">
                        <h1 className="md:text-7xl text-3xl text-violet-50 font-medium w-4/5">
                            Limited Time Offer
                        </h1>
                        <h2 className="text-xl text-white font-semibold">
                            Special Addition
                        </h2>
                        <p className="text-lg text-white">
                            It is a limited-time promotion that provides
                            customers with an exclusive discount or unique
                            product bundle
                        </p>
                        <Link
                            to={'/product'}
                            className="list-none cursor-pointer bg-sky-500 px-4 py-2 rounded-full text-lg text-white"
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
