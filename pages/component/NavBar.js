/** @format */

import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
export default function NavBar() {
	return (
		<>
			<div
				data-aos="fade-down"
				data-aos-easing="linear"
				className="text-white w-6/6 justify-center   items-center flex p-4 ">
				<div className="text-white w-5/6 justify-between  items-center flex ">
					<Image
						width={250}
						height={400}
						className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 "
						src="/img/logo-sanad.png"
					/>
					<div className="text-white items-center flex gap-25   ">
						<ul className="flex font-bold gap-10 ">
							<Link
								className="transition ease-in-out delay-50  hover:-translate-y-1 hover:text-yellow-300 hover:scale-110 duration-300  "
								href={"#home"}>
								<li>Home</li>
							</Link>
							<Link
								className="transition ease-in-out delay-50  hover:-translate-y-1 hover:text-yellow-300 hover:scale-110 duration-300  "
								href={"#about"}>
								<li>About Me</li>
							</Link>
							<Link
								className="transition ease-in-out delay-50  hover:-translate-y-1 hover:text-yellow-300 hover:scale-110 duration-300  "
								href={"#myprojects"}>
								<li>My Projects</li>
							</Link>
							<Link
								className="transition ease-in-out delay-50  hover:-translate-y-1 hover:text-yellow-300 hover:scale-110 duration-300  "
								href={"#contactme"}>
								<li>Contact Me</li>
							</Link>
						</ul>
					</div>

					<div className="text-white justify-center  items-center flex gap-5 ">
						<Image className="gap-10 cursor-pointer " width={30} height={10} src="/img/search.png" />
						<button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bg-yellow-500 text-white font-bold py-2 px-4 border border-black-700 rounded">
							<a href="/resume/SanadResume2023.pdf" target="_blank" rel="noopener noreferrer">
								My Resume
							</a>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
