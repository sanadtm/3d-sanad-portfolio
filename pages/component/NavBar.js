import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
export default function NavBar() {
    return (
        <>
            <div className="text-white w-6/6 justify-center  items-center flex p-4 ">
                <div className="text-white w-5/6 justify-between  items-center flex ">
                    <Image width={250} height={400} src="/img/logo-sanad.png" />
                    <div className="text-white items-center flex gap-25 ">
                        <ul className="flex font-bold gap-10 ">
                            <li>Home</li>
                            <li>About Me</li>
                            <li>My Projects</li>
                            <li>Contact Me</li>
                        </ul>
                    </div>

                    <div className="text-white justify-center  items-center flex gap-5 ">
                        <Image className="gap-10 cursor-pointer " width={30} height={10} src="/img/search.png" />
                        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 border border-white-700 rounded">
                            My Resume
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
