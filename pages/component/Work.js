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
							<div className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600">
								{workTitle.map((title) => (
									<li key={title}>{title}</li>
								))}
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
