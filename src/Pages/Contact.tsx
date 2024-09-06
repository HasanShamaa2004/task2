export const Contact = () => {
    return (
        <div className="overflow-x-hidden">
            <div className="h-[30rem] mb-20 w-full">
                <div
                    style={{
                        backgroundImage:
                            'url(https://images.unsplash.com/photo-1622037022824-0c71d511ef3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)',
                    }}
                    className="w-full h-full bg-cover bg-no-repeat bg-center relative"
                >
                    <div className="bg-black bg-opacity-75 absolute w-full h-full text-center flex items-center justify-center text-white text-6xl font-semibold">
                        Contact
                    </div>
                </div>
            </div>
            <h1 className="text-gray-700 text-5xl mb-20 text-center font-semibold">
                We're here to help you
            </h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 container mx-auto w-[85%] my-8 gap-4">
                <div className="bg-gray-100 flex flex-col  items-center justify-center">
                    <h1 className="text-2xl text-black py-2">Sales</h1>
                    <p className="text-gray-500 text-center p-2 text-lg">
                        Expert sales assistance for all customers. Our sales
                        team is dedicated to providing expert guidance to
                        customers
                    </p>
                    <a
                        href="tel:+963967600797"
                        className="text-sky-500 py-2 font-semibold text-xl"
                    >
                        0967 600 797
                    </a>
                </div>
                <div className="bg-gray-100 flex flex-col  items-center justify-center">
                    <h1 className="text-2xl text-black py-2">Complaints</h1>
                    <p className="text-gray-500 text-center p-2 text-lg">
                        We take customer satisfaction seriously and strive to
                        address any complaints in a timely and efficient manner
                    </p>
                    <a
                        href="tel:+963967600797"
                        className="text-sky-500 py-2 font-semibold text-xl"
                    >
                        0967 600 797
                    </a>
                </div>
                <div className="bg-gray-100 flex flex-col items-center justify-center">
                    <h1 className="text-2xl text-black py-2">Returns</h1>
                    <p className="text-gray-500 text-center p-2 text-lg">
                        Hassle-free returns and exchanges. We understand that
                        sometimes products just don't work out.
                    </p>
                    <a
                        href="tel:+963967600797"
                        className="text-sky-500 py-2 font-semibold text-xl"
                    >
                        0967 600 797
                    </a>
                </div>
                <div className="bg-gray-100 flex flex-col items-center justify-center">
                    <h1 className="text-2xl text-black py-2">Marketing</h1>
                    <p className="text-gray-500 text-center p-2 text-lg">
                        Our marketing team works collaboratively with businesses
                        to help them grow and succeed
                    </p>
                    <a
                        href="tel:+963967600797"
                        className="text-sky-500 p-4 py-2 font-semibold text-xl"
                    >
                        0967 600 797
                    </a>
                </div>
            </div>
            <footer className="bg-gray-200 text-center h-20 bottom-0">
                <p className="p-6">
                    Copyright © 2023 itstore. Powered by itstore.
                </p>
            </footer>
        </div>
    )
}
