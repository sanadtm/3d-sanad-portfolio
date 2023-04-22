import Image from "next/image";
import NavBar from "./NavBar";
export default function HomeContent() {
    return (
        <>
            <div className="snap-center text-white shrink-0  h-screen  ">
                <NavBar />
                <div className="text-white w-6/6 justify-center  items-center flex p-4 flex ">
                    <div className="text-white w-5/6 justify-between  items-center flex ">
                        <div className="gap-10">
                            <div>
                                <h1 className="text-6xl font-bold  subpixel-antialiased animate-bounce">
                                    Think.Make.Solve.
                                </h1>
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
                            <button className=" bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-4 border border-white-700 rounded">
                                Learn More
                            </button>
                        </div>
                        <div>
                            {/* 3d Model */}
                            <Image
                                className="gap-10 animate-[bounce_10s_infinite]"
                                width={600}
                                height={600}
                                src="/img/moon.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
