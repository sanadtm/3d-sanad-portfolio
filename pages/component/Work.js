/** @format */

import Image from "next/image";
export default function Work() {
	let workTitle = ["Software Engineer", "FullStack Developer", "BackEnd Developer", "Social Media"];
	return (
		<>
			<div id="myprojects" className="snap-center text-white shrink-0  h-screen  ">
				<div className="p-16 w-full text-white"></div>
				<div className="text-white w-6/6 justify-center  items-center flex p-2 flex ">
					<div className="text-white w-5/6 justify-between  items-center flex ">
						<div className="gap-10">
							<div>
								<h1 className="text-6xl py-2   font-bold  subpixel-antialiased animate-bounce">
									What i Do
								</h1>
							</div>
							<div>
								{/* {workTitle.map((title) => (
									<li key={title}>{title}</li>
								))} */}
								<li className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-600 animate-text bg-gradient-to-r from-violet-500 via-white-500 to-red-500 bg-clip-text text-transparent  font-black">
									{workTitle[0]}
								</li>
								<li className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-teal-400 to-red-600 animate-text bg-gradient-to-r from-cyan-500 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black">
									{workTitle[1]}
								</li>
								<li className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-red-400 to-lime-600 animate-text bg-gradient-to-r from-teal-500 via-red-500 to-blue-500 bg-clip-text text-transparent  font-black">
									{workTitle[2]}
								</li>
								<li className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-orange-400 to-azure-600 animate-text bg-gradient-to-r from-pink-500 via-yellow-500 to-red-900 bg-clip-text text-transparent  font-black">
									{workTitle[3]}
								</li>
							</div>
						</div>

						{/* 3d Model */}
						<Image className="animate-jump" width={500} height={500} src="/img/moon.png" />
					</div>
				</div>
			</div>
		</>
	);
}
