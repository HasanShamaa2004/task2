import { Link } from 'react-router-dom'

export const Consultation = () => {
    return (
        <div
            className="h-[300px] w-full flex bg-no-repeat bg-contain bg-center mt-16 mb-16"
            style={{
                backgroundImage: `url("https://img.freepik.com/premium-vector/consultant-manager-sitting-her-computer-talking-with-client-call-center_530733-2767.jpg")`,
            }}
        >
            <div className=" bg-black bg-opacity-75 h-full w-full flex flex-col justify-center">
                <h1 className="text-white md:text-4xl text-lg pr-12 pl-12 ">
                    Are you confused,which product is suitable for you ?
                </h1>
                <div className="pr-12 pl-12 flex justify-between items-center ">
                    <h2 className="md:text-4xl text-lg mr-2 py-4 w-3/4 text-sky-500">
                        Need consultation?
                    </h2>
                    <Link
                        to={'/booking'}
                        className="rounded-full list-none  md:py-2 py-1 md:px-6 px-2 bg-sky-500 text-white md:text-lg text-md cursor-pointer "
                    >
                        BookNow
                    </Link>
                </div>
                <p className="text-white md:text-md text-sm pr-12 pl-12">
                    Get ultimate solution from our talent
                </p>
            </div>
        </div>
    )
}
