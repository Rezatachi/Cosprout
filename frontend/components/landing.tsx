export default function Landing () {
    return (
        <div className="overflow-hidden pt-16 bg-green-100">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 p-12">
                        <img className="rounded-lg shadow-lg duration-1000" src="https://media.istockphoto.com/id/1066324992/photo/graduation-day.jpg?s=612x612&w=0&k=20&c=cleRpjTZbo430AbH-luZFYMMNqPwhwyTnFgWMbi_AiI=" alt=""></img>
                    </div>
                    <div className="w-full md:w-1/2 p-8">
                        <h1 className="mb-6 text-6xl md:text-8xl lg:text-10xl font-bold font-heading md:max-w-xl leading-none">Sprout your full potential</h1>
                        <p className="mb-11 text-lg text-gray-900 font-medium md:max-w-md">Join peer students mentors from a diverse array of backgrounds and expertise levels to aid in applications to college, internships, and national scholarships!</p>
                        <div className="flex flex-wrap -m-2.5 mb-20">
                            <div className="w-full md:w-auto p-2.5">
                                <div className="block">
                                    <button className="rounded-md py-4 px-6 w-full text-white font-semibold bg-teal-600" type="button">Apply for the Fall 2023 Cohort</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}