/** @format */

import Link from "next/link";
import Image from "next/image";
import NavBar from "./NavBar";
export default function HomeContent() {
	return (
		<>
			<div id="home" className="snap-center text-white shrink-0  h-screen  ">
				<NavBar />
				<div className="text-white w-6/6 justify-center  items-center flex p-4 flex ">
					<div className="text-white w-5/6 justify-between  items-center flex ">
						<div className="py-10 ">
							<div>
								<h1
									data-aos="zoom-in-right"
									className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600 text-6xl font-bold py-2 subpixel-antialiased animate-bounce">
									Think.Create.Design.
								</h1>
							</div>
							<div data-aos="zoom-in-right" className="flex">
								<div className="text-4xl font-bold py-2 text-yellow-400  subpixel-antialiased">
									-What i Do
								</div>
							</div>
							<div
								data-aos="zoom-out-right"
								className=" animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black text-lg text-2xl  font-bold py-1 subpixel-antialiased">
								I Enjoy Solving Problems and Creating Delightful, User-centered
							</div>
							<div
								data-aos="zoom-out-right"
								className="text-2xl animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black py-1 font-bold   subpixel-antialiased">
								Digital Experience
							</div>
							<button
								data-aos="zoom-out-right"
								className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bg-yellow-500 text-white font-bold py-2 px-4 border border-black-700 rounded">
								Learn More
							</button>
							<div data-aos="fade-down-right" className="items-center py-6 flex gap-5">
								<Link href="https://github.com/sanadtm" target="_blank" rel="noopener noreferrer">
									<Image
										className="transition  ease-in-out delay-50  hover:-translate-y-1 hover:scale-110  duration-300"
										width={50}
										height={50}
										src="/img/white-github.png"
									/>
								</Link>
								<Link
									href="https://www.instagram.com/sanadtm"
									target="_blank"
									rel="noopener noreferrer">
									<Image
										className="transition  ease-in-out delay-50  hover:-translate-y-1 hover:scale-110  duration-300"
										width={50}
										height={50}
										src="/img/insta.png"
									/>
								</Link>
								<Link
									href="https://www.linkedin.com/in/sanad-thapa-931666112"
									target="_blank"
									rel="noopener noreferrer">
									<Image
										className="transition  ease-in-out delay-50  hover:-translate-y-1 hover:scale-110  duration-300"
										width={50}
										height={50}
										src="/img/linkin.png"
									/>
								</Link>
							</div>
						</div>

						<div>
							{/* 3d Model */}
							<Image
								data-aos="fade-left"
								className="animate-jump"
								width={500}
								height={500}
								src="/img/sanad1.png"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
