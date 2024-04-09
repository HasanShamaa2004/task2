import { Link } from 'react-router-dom'

type SlideProps = {
    id?: number
    src: string
    headline: string
    body: string
    cta: string
    category?: string
}

export const Slide = ({ headline, src, body, cta, id }: SlideProps) => {
    return (
        <div className="relative h-full flex justify-center items-center gap-4">
            <div
                style={{ backgroundImage: `url(${src})` }}
                className="absolute h-full flex items-center w-full justify-center bg-no-repeat bg-cover bg-center "
                key={id}
            >
                <div className="absolute h-full w-full  bg-black bg-opacity-50  "></div>
                <div className="h-full w-full flex flex-col text-white  items-center justify-center">
                    <div className="relative flex h-1/2 flex-col items-center z-10 justify-center ">
                        <h1 className="md:text-7xl text-3xl text-violet-50 font-medium w-4/5">
                            {headline}
                        </h1>
                        <p className="text-gray-50 md:text-xl  text-sm w-4/5 m-5">
                            {body}
                        </p>
                        <Link
                            to={'/product'}
                            className="cursor-pointer md:text-xl text-sm md:border-2 border absolute mt-auto lg:bottom-[15%] md:bottom-[10%] bottom-0 left-[10%] border-white py-1 px-3 z-20 hover:border-sky-400 hover:text-sky-500"
                        >
                            {cta}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
