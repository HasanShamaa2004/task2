import { OurTeam } from '../Components/OurTeam'
import { Whyme } from '../Components/Whyme'

export const About = () => {
    return (
        <main>
            <section className="h-[30rem] w-full">
                <div
                    style={{
                        backgroundImage:
                            'url(https://images.unsplash.com/photo-1622037022824-0c71d511ef3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)',
                    }}
                    className="w-full h-full bg-cover bg-no-repeat bg-center relative"
                >
                    <div className="bg-black bg-opacity-50 absolute w-full h-full text-center flex items-center justify-center text-white text-6xl font-semibold">
                        About Us
                    </div>
                </div>
            </section>
            <section className="grid md:grid-cols-2 grid-cols-1 h-[450px] w-full lg:px-20 lg:py-20 md:px-15 md:py-15 px-8 py-8 bg-gray-100">
                <div className="flex flex-col justify-center items-center mx-auto">
                    <h1 className="text-gray-700 md:text-4xl lg:text-6xl text-2xl relative self-start py-2 font-semibold">
                        Who we are?
                    </h1>
                    <p className="text-gray-700 md:text-lg break-all text-base self-start">
                        We are a team of passionate individuals committed to
                        providing high-quality products and exceptional customer
                        service. Our mission is to make technology accessible to
                        everyone, no matter where they are in the world. Shop
                        with us and experience the difference of working with a
                        dedicated and customer-centric team.
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <img
                        className="bg-contain bg-no-repeat mr-2 max-w-[80%] md:mx-auto mx-0 md:my-0 py-2"
                        src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        alt="team img"
                    />
                </div>
            </section>
            <OurTeam />
            <Whyme />
        </main>
    )
}
