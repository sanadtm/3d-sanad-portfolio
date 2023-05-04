/** @format */

import Image from "next/image";
export default function AboutMe() {
	return (
		<>
			<div id="about" className="snap-center text-white shrink-0  h-screen  ">
				<div className="p-16 w-full text-white"></div>
				<div className="text-white w-6/6 justify-center items-center flex p-1 flex ">
					<div className="text-white w-5/6 justify-between  items-center flex ">
						{/* 3d Model */}
						<Image className="animate-jump" width={400} height={400} src="/img/moon.png" />
						<div className="gap-10">
							<div>
								<h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600 font-bold py-2  subpixel-antialiased animate-bounce">
									THNK.OUTSIDE OF THE SQUARe BOX
								</h1>
							</div>
							<div className="flex">
								<div className="text-4xl py-2  font-bold text-yellow-400  subpixel-antialiased">
									-What i am
								</div>
							</div>
							<div className="text-lg py-2  font-bold subpixel-antialiased">
								<li>Currently a Software Development Engineer At APCON inc.</li>
								<li>Previous Software Application Development Engineer At INTEL CORPORATION</li>
							</div>
							<div className="text-lg  py-2 font-bold text-yellow-400  subpixel-antialiased">
								Digital Experience
							</div>
							<button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-4 border border-white-700 rounded">
								See my Work
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
