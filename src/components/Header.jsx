import React from "react";
import { Icon } from "../assets/Icons";
function Header() {
	return (
		<div className="h-[48px] p-[6px]">
			<ul className="h-[48px] flex justify-end text-[13px] py-[4px] items-center">
				<li className="hover:underline">
					<a href="">Gmail</a>
				</li>
				<li className="px-[15px] hover:underline">
					<a href="">Images</a>
				</li>
				<li className="flex">
					<button className=" items-center hover:bg-black hover:bg-opacity-5 hover:rounded-full p-2">
						<Icon color="#5f6368" size={24} name="app" />
					</button>
				</li>
				<li className="mx-2 py-[9px] px-[23px] bg-[#1a73e8] hover:bg-opacity-90 text-white tracking-[0.25px] rounded-[4px] text-center min-w-[96px] roboto leading-4">
					<a href="">Sign in</a>
				</li>
			</ul>
		</div>
	);
}

export default Header;
