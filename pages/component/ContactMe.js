import Image from "next/image";
export default function ContactMe() {
    return (
        <>
            <div className="snap-center text-white shrink-0  h-screen  ">
                <div className="text-white w-6/6 justify-center  items-center flex p-4 flex ">
                    <div className="text-white w-5/6 justify-between  items-center flex ">
                        <div className="gap-10">
                            <div>
                                <h1 className="text-6xl font-bold  subpixel-antialiased animate-bounce">Contact.Me.</h1>
                            </div>
                            <div className="flex">
                                <div className="text-4xl font-bold text-yellow-400  subpixel-antialiased">
                                    -What i Do
                                </div>
                            </div>
                            <div className="text-lg ont-bold subpixel-antialiased">
                                I Enjoy Creating Delightful, human-centered
                            </div>
                            <div className="text-lg font-bold text-yellow-400  subpixel-antialiased">
                                Digital Experience
                            </div>
                            <button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-4 border border-white-700 rounded">
                                Learn More
                            </button>
                        </div>

                        {/* 3d Model */}
                        <Image className="animate-jump" width={500} height={500} src="/img/moon.png" />
                    </div>
                </div>
            </div>
        </>
    );
}
