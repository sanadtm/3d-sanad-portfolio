/** @format */
import Link from "next/link";
import Image from "next/image";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Annotation } from "react-simple-maps";
import MapAnnotationComponent from "./MapAnnotation";
export default function ContactMe() {
	const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

	return (
		<>
			<div id="contactme" className="snap-center text-white shrink-0  h-screen  ">
				<div className="p-16 w-full text-white"></div>
				<div className="text-white w-6/6 justify-center  items-center flex p-4 flex ">
					<div className="text-white w-5/6 justify-between  items-center flex ">
						<div className="gap-10">
							<div className="rounded-full ">
								<h1 className="font-extrabold text-transparent  text-8xl bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600  subpixel-antialiased animate-bounce">
									Contact.Me.
								</h1>
								<div className="grid w-full place-items-center text-black gap-4 rounded-lg border-double border-2 p-5 ">
									<input placeholder="name" type="text" className="border-dotted rounded-lg w-full" />
									<input placeholder="email" type="email" className="rounded-lg w-full" />
									<textarea
										placeholder="Type your message"
										type="textarea"
										className=" h-24 rounded-lg w-full"
									/>
									<button
										className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bg-yellow-500 text-white font-bold py-2 px-4 border border-black-700 rounded"
										type="submit">
										Send
									</button>
								</div>
							</div>
							<div className=" w-full place-items-center py-6 flex gap-5">
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

						{/* 3d Model */}

						<MapAnnotationComponent />
					</div>
				</div>
			</div>
		</>
	);
}
