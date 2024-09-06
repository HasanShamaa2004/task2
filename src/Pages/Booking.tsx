import { useState } from 'react'
import { BestSelling } from '../Components/Product/BestSelling'

export const Booking = () => {
    const [sub, setSub] = useState('')
    const [date, setDate] = useState('')
    const [tnx, setTnx] = useState('')
    const [_, setFormData]: any = useState('') //form data are saved here

    function handleSubmit(e) {
        e.preventDefault()
        setTnx('Thanks for booking!')
        setFormData(<p>{sub + ' ' + date}</p>)
    }
    return (
        <main>
            <section className="bg-white shadow-sm shadow-gray-200">
                <div className="h-[30rem] w-full">
                    <div
                        style={{
                            backgroundImage:
                                'url(https://images.unsplash.com/photo-1622037022824-0c71d511ef3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)',
                        }}
                        className="w-full h-full bg-cover bg-no-repeat bg-center relative"
                    >
                        <div className="bg-black bg-opacity-75 absolute w-full h-full text-center flex items-center justify-center text-white text-6xl font-semibold">
                            Booking
                        </div>
                    </div>
                </div>
                <div className="h-[10rem] flex items-center justify-center shadow-md">
                    <form
                        onSubmit={handleSubmit}
                        className="flex gap-10 justify-center flex-wrap items-center"
                    >
                        <div className="flex md:gap-10 gap-2">
                            <input
                                required
                                className="border md:px-5 px-3 py-1"
                                type="text"
                                placeholder="Subject?"
                                value={sub}
                                onChange={(e) => setSub(e.target.value)}
                            />
                            <input
                                required
                                className="border md:px-5 px-3 py-1"
                                type="date"
                                placeholder="Date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="text-gray-50 border rounded-full border-sky-500 px-10 bg-sky-500 py-2"
                        >
                            submit
                        </button>
                    </form>
                </div>
                <p className="text-center text-green-500 pb-10">{tnx}</p>
                <BestSelling />
                <div className="bg-gray-200 text-center h-20 bottom-0">
                    <p className="p-6">
                        Copyright © 2023 itstore. Powered by itstore.
                    </p>
                </div>
            </section>
        </main>
    )
}
