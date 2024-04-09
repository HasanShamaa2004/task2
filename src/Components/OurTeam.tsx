import { teamMembers } from '../data/OurTeamData'

export const OurTeam = () => {
    const Team = teamMembers
    return (
        <div className="flex flex-col justify-center items-center py-20">
            <div className="w-1/2 text-center">
                <h1 className="md:text-6xl text-4xl text-gray-700 font-semibold">
                    Our Team
                </h1>
                <p className=" text-gray-700 break-all md:text-lg text-base p-2 ">
                    We are comprised of experienced with passion for technology
                    and commitment to customer satisfaction.
                </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
                {Team.map((team, index) => {
                    return (
                        <div key={index} className="p-14 bg-gray-100">
                            <div className="flex flex-col items-center justify-center">
                                <img src={team.img} alt="img" />
                                <h1 className="text-4xl text-gray-700 p-2">
                                    {team.name}
                                </h1>
                                <p>{team.designation}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
