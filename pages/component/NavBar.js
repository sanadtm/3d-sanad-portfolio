/** @format */
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
export default function NavBar() {
	return (
		<>
			<div className="text-white w-full justify-center">
				<Image width={100} height={100} src="/img/logo.png" />
				<ul>
					<li>Home</li>
					<li>About Me</li>
					<li>My Projects</li>
					<li>Contact Me</li>
				</ul>
				<Image width={30} height={30} src="/img/search.png" />
				<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
					Hire Me
				</button>
			</div>
		</>
	);
}
